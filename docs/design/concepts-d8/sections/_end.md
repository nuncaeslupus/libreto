## What changed in draft 8, and why

Draft 8 answers the outside critique of draft 7 (`critique-d7.md`; ids such as F-A-01 point into its six reports). The first move was to change the frame; most of the rest follows from it.

- **No modes** (F-A-01, F-D-66). Write, Review, Plan and Book were views of one text; Research and Codex were other collections. Now the Navigator chooses the collection (Book · Codex · Research), the center opens one document, and the manuscript has three views (Text · Board · Pages). Left is always a list, center always the work, right always one thing beside it. Back walks every jump. S50 draws the four-mode alternative.
- **Review is a toggle** beside the same text, with **rounds** (a reader's file, an AI pass, an agent session, Libreto's rules), a Page and a List view, bulk actions, Unread and Resolved filters, and progress that does not shift under you. Others' notes show in the text as hollow bubbles, so you never rewrite a paragraph without knowing Marta commented on it.
- **Proposals go out of date** instead of overwriting newer text; a cut-off answer offers nothing to apply.
- **Undo and Revert**: `Ctrl+Z` is the last thing here; Revert takes back one older thing and reports what it kept. The bell is gone: messages go to History ▸ Today and stay until you have typed on, not for twenty seconds.
- **Marks by shape** (wavy, dashed, thin, tint), checked in color-blind simulation; who made a mark is an initial on its card, with **L** for Libreto's own rules (draft 7 said "You").
- **Plain words**: Suggestion, Accept, Reject, Fixed for you, Check spelling, Leave as is, versions, Show names and styles, quick look; Italic and Bold labeled as such.
- **Readers' copies**: dropping the returned file on the window recognizes it; an import dialog maps authors and counts what is new; changes appear inline per reader, merged automatically where you changed different words, with one three-row card (sent, yours, theirs) for a real conflict.
- **History** with scope, date and text search without an AI, "Save a version…", "Put back" for a deleted scene, and the changes in a chapter since a date shown in the page.
- **The Board moves at once**, with Undo and the continuity notice; no Apply / Discard to remember. Rows, as draft 7 proposed.
- **Styles belong to the book**, seeded from your own; one look per style, decided by the book's theme; your writing font, size and page color are yours and never change the book.
- **Pages is a book designer**: an outline with front and back matter, themes, click an element to change it, chapter numbers in any format, unnumbered prologues, running heads, layout issues; **Export** is one dialog with profiles, **Print** a small dialog of its own; **Book details** and **Language & typography**.
- **Start and the empty page**: the book's language, an optional goal, a sample book, a Word import preview; three quiet doors on the first empty chapter. Play and Paper are shown as "later" until they have tools of their own.
- **Motivation**: goals with a daily figure and a ring in the status bar, a calendar of writing days without trophies, "Where you were" when you come back, sprints in Focus.
- **The AI**: your Claude subscription first (Claude Desktop through Libreto's connector), an API key as the advanced option; three levels with one checkbox per automatic behavior and its estimated cost; the catch-up offered on the Last session card, never silent; the conversation docked in the side panel with what it sends; **the Brief**; external agents visible (a chip with Stop, permissions per session, drafts accepted whole, Revert the whole session); **AI activity** with costs and the share of AI words still in the book.
- **Failure states** are drawn: not saved, recovered after a crash, a second copy from another computer, open elsewhere, the AI offline, out of budget or cut off.
- **Sizes and extremes** are drawn: 200 chapters, long titles, a word without spaces, zoom 200 %, interface 150–175 %, 1000 px in Spanish, 2560 px, dark and sepia.
- **Menus hold the app**: Settings in Tools and Edit, Add note in Insert, Versions in File, Statistics in View; the right-click menus as one family.

## To the specification

Pages the critique asked for, too long for a walkthrough: the **proposal lifecycle** (base text hash, out of date, rebase when the range is untouched); **Undo and Revert** semantics per surface; **review rounds** and the import (ids in Word files, matching by text when there are none, three-way merge, several readers); the **file format** (stable chapter files with a title slug, `book.yml` for order, a lock file, conflict-copy detection, external changes); **language rules** for fixes per book language; the **layout and spacing rules** in scalable units, not pixels; the **theme model** and what an element editor can set; the **AI connection paths**, the token economy (stored scene summaries, the context builder shared with agents, cost estimates) and the **agent tool set** (orient, read with a budget, propose with a base hash, check, ask the writer; nothing that deletes, exports or sends); **accessibility** (screen-reader roles and announcements, focus order, contrast tokens); the **key table** checked against layouts and desktops; the **menu inventory**.

## Questions

Yours to decide; each can be answered in a line.

1. **No modes** (one window, Navigator sections, three views, Review as a toggle), or the four modes of S50, or back to six?
2. **"Codex"**, or a plainer name (Story bible, Cast & world)? A five-person test would settle it.
3. **Plain words** (Accept / Reject, Fixed for you, Leave as is, versions, Italic and Bold labeled as such): adopt all?
4. **Marks by shape** (wavy, dashed, thin, tint): right, or too busy?
5. **Others' notes in the text** as hollow bubbles, with Show ▸ Notes: Mine / All / None: right?
6. **Readers' changes inline** (per change, per reader) instead of draft 7's two columns per paragraph: right?
7. **Undo and Revert** as two words for two acts: acceptable?
8. **No bell; messages stay until you have typed on**, then go to History ▸ Today: right?
9. **Styles in the book with one look**, your writing font apart: right?
10. **Play and Paper** in version 1: shown as "later" (as drawn), or minimal tools for one of them?
11. **The AI through your Claude subscription first**, the API key as advanced: right? And the catch-up offered, not automatic?
12. **The Brief** at the top of the Codex: the right home?
13. **Agents' new scenes as drafts** accepted whole, their edits as a review round: right?
14. **Goals visible from day one** (the ring in the status bar): or only when you set one?
15. **The Board moves at once**, with Undo, no Apply: right?
16. **No Undo arrows in the strip** (Edit menu and `Ctrl+Z`): fine?
