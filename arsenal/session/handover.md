# Handover

## Where things stand (2026-11-13)

- **Concept drafts 4, 5 and 6 of the walkthrough** live on `claude/project-thread-4w0xxt`, PR #7 (stacked on PR #6, base `claude/project-thread-cjnuji`; merge #6 first). Nothing is merged yet; the design PRs wait for the owner's approval.
- **Draft 6** (`docs/design/walkthrough.md`, 34 screens in `docs/design/concepts-d4/`) answers the 73 notes on draft 5 (`docs/design/concepts/review-notes-d5-2026-11-13.md`). Big decisions: six modes as tabs (Codex is a mode), four mark colors with one meaning each, Write = underlines + own notes / Review = badges, counts, filters, "Review all" (new S34), whole book as default view, no kinds of text, notices with "Got it" and a bell, Share as two commands, Compare from Review, the AI in Settings ▸ AI. Fourteen open questions at the end of the walkthrough; a "To the specification" list names what moves to the spec (Codex spec, Ask ranking, AI-less matrix, menu inventory, undo semantics, overlap rules, on-disk format, read cadence).
- **Review page** for the owner: `/mnt/project-files/libreto/design/libreto-walkthrough-d6-review.html` (built by `concepts-d4/make-review.js … --draft "draft 6"`; notes download as `libreto-walkthrough-d6-notes.md`). The arsenal spec format (`screens.md` + `create_reader.py`, reviewed copies) applies when a draft is approved: export the notes next to the doc, `--bake`, status approved.
- **Toolkit** (`concepts-d4/lib.js`, `d4.css`): draft 6 added `MODES` with Codex, tabs, ☰ / Find / bell in the strip, `statusBar({review, keys, view:'Whole book', show})`, `reference({open})`, mark kinds note / pending / done / unknown, `notice(…, {got})`, 320 px columns, no menu bar row. Builder briefs: `tmp/d6-screens-brief.md` (gitignored; same pattern as d5).

## What remains

1. The owner reviews draft 6 (all screens) and sends `libreto-walkthrough-d6-notes.md`; draft 7 or approval follows.
2. On approval: convert to the arsenal spec format (screens.md, baked reviewed copy) and start the Codex / Ask-ranking / AI-less-matrix spec pages listed in "To the specification".
3. PR #8 (arsenal bundle 5.15 → 5.25) is the owner's to merge; PR #6 before PR #7.
