#!/usr/bin/env python3
"""reviewed-markdown.py: a GitHub-readable copy of an annotatable reader.

`create_reader.py` (claude-arsenal) writes an HTML reader with a note field under
every section, and `--bake` writes a reviewed copy with the notes shown read-only.
GitHub shows both as source code. This script turns either into one Markdown file
with the pictures beside it, so a link into the repository shows the document, the
screens and the owner's notes.

    python3 docs/design/reviewed-markdown.py READER.html [--notes EXPORT.md]
        [--out-dir DIR] [--title TEXT] [--width 1400] [--quality 82]

Notes come from the `SPEC_SEED_NOTES` block of a baked reader, or from the
`SPEC-NOTES-DATA` block of a notes export (`--notes`); the export wins where both
exist. A note anchored to a passage keeps its quote. The result is
`<stem>-reviewed.md` (or `<stem>-reader.md` when there are no notes) and the
pictures as JPEG in `<stem>-img/`, both next to the reader unless `--out-dir`.
Needs beautifulsoup4, markdownify and Pillow.
"""
from __future__ import annotations

import argparse
import base64
import io
import json
import re
import sys
from pathlib import Path

from bs4 import BeautifulSoup
from markdownify import markdownify
from PIL import Image

SEED_RE = re.compile(r"var SPEC_SEED_NOTES\s*=\s*(\{.*?\});?\s*</script>", re.S)
DATA_RE = re.compile(r"<!--\s*SPEC-NOTES-DATA\s*(\{.*?\})\s*-->", re.S)
EXPORTED_RE = re.compile(r"^_Exported ([^_]+?)\.?_$", re.M)


def slug(text: str, limit: int = 48) -> str:
    s = re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")
    return s[:limit].rstrip("-") or "section"


def read_notes(html: str, notes_path: Path | None) -> tuple[dict, str]:
    """All notes keyed as the reader keys them: `domid`, `domid~id`, `domid~id~q`."""
    notes: dict = {}
    m = SEED_RE.search(html)
    if m:
        notes.update(json.loads(m.group(1)))
    exported = ""
    if notes_path:
        text = notes_path.read_text(encoding="utf-8")
        m = DATA_RE.search(text)
        if not m:
            sys.exit(f"✗ {notes_path}: no SPEC-NOTES-DATA block (an export from the reader has one)")
        notes.update(json.loads(m.group(1)))
        m = EXPORTED_RE.search(text)
        exported = m.group(1).strip() if m else ""
    return notes, exported


def group_notes(notes: dict) -> dict[str, list[tuple[str | None, str]]]:
    """Per section id: [(quote or None, text)], section-level notes first."""
    per: dict[str, list] = {}
    anchored: dict[tuple[str, str], dict] = {}
    for key, value in notes.items():
        if not isinstance(value, str) or not value.strip():
            continue
        parts = key.split("~")
        domid = parts[0]
        if len(parts) == 1:
            per.setdefault(domid, []).append((None, value))
        elif len(parts) == 2:
            anchored.setdefault((domid, parts[1]), {})["text"] = value
        elif parts[2] == "q":
            anchored.setdefault((domid, parts[1]), {})["quote"] = value
    for (domid, _), item in anchored.items():
        if item.get("text"):
            per.setdefault(domid, []).append((item.get("quote"), item["text"]))
    return per


def quote_block(lines: list[str]) -> str:
    return "\n".join(("> " + ln).rstrip() for ln in lines)


def note_markdown(label: str, quote: str | None, text: str) -> str:
    head = f"**Review note** · {label}" if not quote else f"**Review note** on _“{quote.strip()}”_"
    body = [ln.rstrip() for ln in text.strip().splitlines()]
    return quote_block(["[!NOTE]", head, ""] + body)


def convert(reader: Path, notes_path: Path | None, out_dir: Path | None, title: str | None,
            width: int, quality: int) -> None:
    html = reader.read_text(encoding="utf-8")
    notes, exported = read_notes(html, notes_path)
    per_section = group_notes(notes)
    soup = BeautifulSoup(html, "html.parser")

    stem = re.sub(r"-(reader|reviewed)$", "", reader.stem)
    out_dir = out_dir or reader.parent
    img_dir = out_dir / f"{stem}-img"
    doc_title = title or (soup.h1.get_text(" ", strip=True) if soup.h1 else stem)

    articles = soup.select("article.sec")
    parts = []
    for a in articles:
        p = a.get("data-part", "")
        if p and p not in parts:
            parts.append(p)
    multi = len(parts) > 1

    out: list[str] = [f"# {doc_title}", ""]
    n_notes = sum(len(v) for v in per_section.values())
    used_ids = {a.get("id") for a in articles}
    matched = sum(len(v) for k, v in per_section.items() if k in used_ids)
    source = f"`{reader.name}`" + (f" with the notes of `{notes_path.name}`" if notes_path else "")
    intro = (f"> Reviewed copy of {source}: the document as it was annotated, with "
             f"{matched} note{'s' if matched != 1 else ''} by the owner under the sections they are about"
             + (f" (exported {exported})" if exported else "") + ". "
             "The HTML file is the annotatable version; open it in a browser to read the notes beside the text.")
    if n_notes == 0:
        intro = (f"> Readable copy of {source}: the document and its screens, without notes. "
                 "The HTML file is the annotatable version.")
    out += [intro, ""]

    current_part = None
    img_count = 0
    seen_names: set[str] = set()
    for idx, a in enumerate(articles, 1):
        domid = a.get("id", "")
        label = a.get("data-label", "") or domid
        part = a.get("data-part", "")
        level = 3 if "l3" in a.get("class", []) else 2
        if multi and part != current_part:
            out += [f"## {part}", ""]
            current_part = part
        if multi:
            level += 1
        body = a.select_one(".sec-body")
        if body is not None:
            for svg in body.find_all("svg"):
                svg.replace_with(soup.new_tag("p"))
                # a diagram drawn as inline SVG has no Markdown form; the reader keeps it
            for img in body.find_all("img"):
                src = img.get("src", "")
                if not src.startswith("data:image/"):
                    continue
                payload = src.split(",", 1)[1]
                im = Image.open(io.BytesIO(base64.b64decode(payload)))
                if im.width > width:
                    im = im.resize((width, round(im.height * width / im.width)), Image.LANCZOS)
                im = im.convert("RGB")
                m = re.match(r"(S\d+)\s*·\s*(.+)", label)
                name = slug(f"{m.group(1)}-{m.group(2)}") if m else f"{idx:02d}-{slug(img.get('alt') or label)}"
                base, k = name, 2
                while name in seen_names:
                    name, k = f"{base}-{k}", k + 1
                seen_names.add(name)
                img_dir.mkdir(parents=True, exist_ok=True)
                im.save(img_dir / f"{name}.jpg", "JPEG", quality=quality, optimize=True)
                img["src"] = f"{img_dir.name}/{name}.jpg"
                img_count += 1
            md = markdownify(str(body), heading_style="ATX", bullets="-", strip=["span"]).strip()
        else:
            md = ""
        if label and not (idx == 1 and label.lower() in ("intro", "preamble & scope") and not md):
            out += [f"{'#' * level} {label}", ""]
        if md:
            out += [md, ""]
        for quote, text in per_section.get(domid, []):
            out += [note_markdown(label, quote, text), ""]

    unmatched = [k for k in per_section if k not in used_ids]
    if unmatched:
        print(f"! {len(unmatched)} note key(s) match no section and were left out: {', '.join(unmatched[:5])}"
              + (" …" if len(unmatched) > 5 else ""), file=sys.stderr)

    out_path = out_dir / f"{stem}-{'reviewed' if matched else 'reader'}.md"
    out_path.write_text("\n".join(out).rstrip() + "\n", encoding="utf-8")
    print(f"✓ {out_path}  ({len(articles)} sections, {matched} notes, {img_count} pictures"
          + (f" in {img_dir.name}/" if img_count else "") + ")")


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__.split("\n\n")[0])
    ap.add_argument("reader", type=Path, help="the -reader.html or -reviewed.html from create_reader.py")
    ap.add_argument("--notes", type=Path, help="a notes export from the reader (its SPEC-NOTES-DATA block)")
    ap.add_argument("--out-dir", type=Path, help="where to write (default: next to the reader)")
    ap.add_argument("--title", help="the document title (default: the reader's h1)")
    ap.add_argument("--width", type=int, default=1400, help="largest picture width in px (default 1400)")
    ap.add_argument("--quality", type=int, default=82, help="JPEG quality (default 82)")
    a = ap.parse_args()
    convert(a.reader, a.notes, a.out_dir, a.title, a.width, a.quality)


if __name__ == "__main__":
    main()
