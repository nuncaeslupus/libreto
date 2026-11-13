#!/usr/bin/env python3
"""Turn walkthrough.md into the screens document that create_reader.py reads.

    python3 docs/design/concepts-d4/make-screens.py docs/design/walkthrough.md 6

writes docs/design/concepts-d4/screens-d6.md: the same text, with the title in the
"Libreto — walkthrough, draft N" form, a Revision line, each "## sNN-file: Title"
heading as "## SNN · Title", and the screen's picture (sNN-file.png) at the end of
its section. Everything else is copied as it is.
"""
import re
import sys
from pathlib import Path

HEAD = re.compile(r"^## (s\d{2})-([a-z0-9-]+): (.+)$")


def convert(src: Path, draft: int) -> str:
    out, pending_img = [], None
    for line in src.read_text(encoding="utf-8").splitlines():
        if line.startswith("# "):
            out += [f"# Libreto — walkthrough, draft {draft}", "", "**Revision**: 1"]
            continue
        if line.startswith("## "):
            if pending_img:
                out += [pending_img, ""]
                pending_img = None
            m = HEAD.match(line)
            if m:
                sid, stem, title = m.group(1), f"{m.group(1)}-{m.group(2)}", m.group(3)
                out.append(f"## {sid.upper()} · {title}")
                pending_img = f"![{title}]({stem}.png)"
                continue
        out.append(line)
    if pending_img:
        out += [pending_img, ""]
    # the image goes after the section's text: drop the blank line that precedes it
    text = "\n".join(out) + "\n"
    return re.sub(r"\n\n\n(!\[)", r"\n\n\1", text)


def main() -> int:
    src, draft = Path(sys.argv[1]), int(sys.argv[2])
    dst = Path(__file__).resolve().parent / f"screens-d{draft}.md"
    dst.write_text(convert(src, draft), encoding="utf-8")
    n = sum(1 for l in dst.read_text(encoding="utf-8").splitlines() if l.startswith("## S"))
    print(f"wrote {dst} ({n} screens)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
