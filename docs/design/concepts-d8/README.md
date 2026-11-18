# Concept screens, draft 8

Static HTML concepts rendered to PNG, built with the draft 4 toolkit and the draft 8 chrome (no modes:
Navigator sections Book · Codex · Research, views Text · Board · Pages, Review as a toggle). Calm and
neutral on purpose: only what is on screen is being decided. The walkthrough is `../walkthrough-d8.md`;
the critique it answers is `../critique-d7.md`.

- `lib.js`, `d4.css`: shared helpers and look (the draft 8 block is at the end of the CSS).
- `screens/*.js`: one module per screen, `{id, file, title, width, height, html, caption}`.
- `sections/*.md`: the walkthrough text, one file per screen, plus `_intro.md` and `_end.md`.
- `build.js`: `node build.js [S01 …]` writes `<file>.html` and renders `<file>.png` (Playwright, 2×).
- `assemble.sh`: joins the sections into `../walkthrough-d8.md` and writes `screens-d8.md`, which
  `claude-arsenal/scripts/create_reader.py` turns into the annotatable reader.
