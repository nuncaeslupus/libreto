# Design reviews

Every round of the Libreto concept was reviewed on an annotatable reader (claude-arsenal's `create_reader.py`): one HTML page with the document, a picture per screen and a note field under each section. The owner's notes were exported and committed next to the reader, and a baked copy keeps them read-only. GitHub shows those HTML files as source, so each record also has a **Markdown copy** with the pictures beside it, which GitHub renders at its link; `reviewed-markdown.py` in this folder writes it from the reader and the notes export.

| Round | Reviewed | Document with the notes | Notes | Annotatable reader |
|---|---|---|---|---|
| Specification v1 | 2026-11-04 | [libreto-spec-v2 (reviewed)](../../status/libreto-spec-v2-2026-11-04-2150-reviewed.md) | 8 | [HTML](../../status/libreto-spec-v2-2026-11-04-2150-reader.html) |
| Concept 1 | 2026-11-06 | [libreto-screens-c1 (reviewed)](concepts/libreto-screens-c1-v1-2026-11-11-0004-reviewed.md) | 13 | [HTML](concepts/libreto-screens-c1-v1-2026-11-11-0004-reviewed.html) |
| Concept 2 | 2026-11-07 | [libreto-screens-c2 (reviewed)](concepts/libreto-screens-c2-v1-2026-11-11-0004-reviewed.md) | 20 | [HTML](concepts/libreto-screens-c2-v1-2026-11-11-0004-reviewed.html) |
| Walkthrough, draft 3 | 2026-11-08 | [libreto-screens-d3 (reviewed)](concepts/libreto-screens-d3-v1-2026-11-11-0005-reviewed.md) | 32 | [HTML](concepts/libreto-screens-d3-v1-2026-11-11-0005-reviewed.html) |
| Walkthrough, draft 4 | 2026-11-08 | [libreto-screens-d4 (reviewed)](concepts/libreto-screens-d4-v1-2026-11-11-0005-reviewed.md) | 9 | [HTML](concepts/libreto-screens-d4-v1-2026-11-11-0005-reviewed.html) |
| Walkthrough, draft 5 | 2026-11-13 | [libreto-screens-d5 (reviewed)](concepts-d4/libreto-screens-d5-v1-2026-11-11-0006-reviewed.md) | 73 | [HTML](concepts-d4/libreto-screens-d5-v1-2026-11-11-0006-reader.html) |
| Walkthrough, draft 6 | 2026-11-15 | [libreto-screens-d6 (reviewed)](concepts-d4/libreto-screens-d6-v1-2026-11-13-1917-reviewed.md) | 80 | [HTML](concepts-d4/libreto-screens-d6-v1-2026-11-13-1917-reader.html) |
| Walkthrough, draft 7 | in review | [libreto-screens-d7](concepts-d4/libreto-screens-d7-v1-2026-11-15-1931-reader.md) | — | [HTML](concepts-d4/libreto-screens-d7-v1-2026-11-15-1931-reader.html) |

The notes exports themselves are in `concepts/review-notes-*.md` and `../status/*-notes.md`; the current text of the walkthrough is `walkthrough.md`, and its screens are built from `concepts-d4/`.

To add a round: build the reader, review it, export the notes, then

```bash
python3 docs/design/reviewed-markdown.py <the reader>.html --notes <the notes export>.md
```

writes `<stem>-reviewed.md` and `<stem>-img/` next to the reader. Without `--notes` it writes `<stem>-reader.md` (the document and the screens, no notes), which is what the draft 7 row links until its notes come back.
