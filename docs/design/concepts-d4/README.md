# Concept screens, draft 4

Static HTML concepts rendered to PNG. Not a visual design: calm and neutral on purpose, only what
is on screen is being decided. The walkthrough that explains each screen is `../walkthrough.md`.

- `d4.css`: shared look (draft 3's `concepts.css` plus the draft 4 elements: centered page, Ask
  button and panel, Reference panel, mark family, sheets, toast).
- `lib.js`: helpers that build the chrome (window, strip, navigator, Reference panel, status bar,
  marks, sheets, captions) and the sample text (an invented cast).
- `screens/*.js`: one module per screen, `{id, file, title, width, height, html, caption}`.
- `build.js`: `node build.js [S01 …]` writes `<file>.html` and renders `<file>.png` with the
  pre-installed Playwright at 2×. No arguments builds every screen.
- `make-review.js`: `node make-review.js ../walkthrough.md <out.html> --draft "draft 4"` builds
  the annotatable review page (needs `npm i marked`, or `MARKED=<path to marked>`).
