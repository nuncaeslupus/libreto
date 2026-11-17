# Handover

## Where things stand (2026-11-17)

- **PR #6 and PR #7 are merged** into `main`: concept drafts 0 to 7 of the walkthrough, the readable review copies and `docs/design/reviews.md`. The working branch `claude/project-thread-4w0xxt` restarts from `main`.
- **Draft 7** (`docs/design/walkthrough.md`, 35 screens in `docs/design/concepts-d4/`) answers the 80 notes on draft 6 (`docs/design/concepts/review-notes-d6-2026-11-15.md`) under "keep it simple"; its decisions are in the walkthrough's "What changed in draft 7, and why", with thirteen open questions and "To the specification". Its reader is `docs/design/concepts-d4/libreto-screens-d7-v1-2026-11-15-1931-reader.html` (also in `/mnt/project-files/libreto/design/`), its readable copy `…-reader.md`.
- **Bundle at claude-arsenal 5.28.0**, re-vendored with upstream `init.py --no-branch-protection`. `create_reader.py` now writes the GitHub-readable Markdown copy (`<stem>-reader.md` / `-reviewed.md` + `<stem>-img/`) beside every reader and `--bake` copy, so the one-off `docs/design/reviewed-markdown.py` is gone (history: `5c49d4e`). `docs/design/reviews.md` indexes the eight rounds and says how to add one.
- **Review page pipeline**: `docs/design/concepts-d4/make-screens.py docs/design/walkthrough.md N` writes `screens-dN.md`; `python3 claude-arsenal/scripts/create_reader.py --input docs/design/concepts-d4/screens-dN.md --output-dir docs/design/concepts-d4` (needs `pip install markdown`, Pillow for the JPEGs) writes the reader and its `.md`. When the owner's notes export comes back, the same command with `--notes <export> --bake` writes `…-reviewed.html` and `…-reviewed.md`; commit them with the export and link the `.md` in `reviews.md`.
- **Toolkit** (`concepts-d4/lib.js`, `d4.css`): draft 7 added the menu bar in `titlebar()`, the segmented `.modes`, `statusBar({saved})`, `reference({close, foot, open})`, `notice({standing})`, `markCard({who, rows, foot})`, the `gutter()` stack, `navigator({review, kinds, people, menuAt.items, footer})`, `L.who()`. Builder briefs follow `tmp/d7-screens-brief.md` (gitignored).
- **Merging**: `CLAUDE.md` § Reviewing and merging. Green CI plus a review (ask `@coderabbitai review`, about one an hour; otherwise review the diff yourself and record it as a PR comment), then merge without waiting for the owner.

## What remains

1. The owner reviews draft 7 (all 35 screens) and exports the notes from the d7 reader; draft 8 or approval follows.
2. On approval: bake the reviewed copy (above), status approved, and start the Codex / Ask-ranking / AI-less-matrix spec pages listed in "To the specification".
