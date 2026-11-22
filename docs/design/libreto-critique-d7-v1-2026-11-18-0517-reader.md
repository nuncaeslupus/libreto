# Libreto — Specification

> Readable copy of the specification: the document and its pictures. Generated 2026-11-18. The annotatable version is [`libreto-critique-d7-v1-2026-11-18-0517-reader.html`](libreto-critique-d7-v1-2026-11-18-0517-reader.html).

## Preamble & scope

**Revision**: 1

Status: **for annotation.** Draft 7 was read as if someone else had designed it, by six reviewers with one lens each: navigation, breaking it, the writer's experience and accessibility, deciding and going back, structure and the printed book, and the AI inside and outside. Together they wrote about 525 findings, 45 design choices with options, and a list of screens for draft 8. This page is the short version: what is wrong, ranked, and what draft 8 does about it. The full reports are in `critique-d7/` (A to F); each finding there has an id such as `F-B-80` (report B, finding 80), the scenario that breaks, and a fix.

Draft 8 (`walkthrough-d8.md`, screens in `concepts-d8/`) is the answer. Where a choice is really yours, it is at the end of the walkthrough as a question with options.

## The verdict in ten lines

1. **The six modes are two kinds of thing pretending to be one.** Write, Review, Plan and Book are views of the same manuscript; Research and Codex are other collections. One exclusive switch for both kinds makes the left and right columns change meaning six times, makes Back cross "places" that are really one text, and leaves the writer unsure whether the cursor, the scroll or a pending Plan move survives a switch. (A: F-A-01)
2. **Review is a layer, not a place.** It is the same text, cursor and scroll with a margin and filters. As a mode it hides a reader's note on the very paragraph you are rewriting. (A, D)
3. **Proposals have no lifecycle.** A suggestion stores Was/Now; edit the paragraph afterwards and Apply either fails silently or puts old text over yours. With an AI pass, readers' copies and agents, this happens every day. (B: F-B-71, D: F-D-01)
4. **"Undo is one list" contradicts itself.** An old notice's Undo, undoing a whole Review walk while you typed, or a Plan Apply after typing are selective reverts, which a single linear stack cannot do. (D: F-D-41, B: F-B-89)
5. **The four colors fail color-blind writers.** Red, green and amber dotted underlines become the same olive for about one man in twelve; people's violet lands on pending blue. Blue is also links, buttons and selection. (C: F-C-37, D: F-D-63)
6. **There are no failure states.** Disk full, USB pulled, crash, a file changed outside Libreto, the project open on two computers, Dropbox conflict copies, the AI offline or cut off mid-proposal: none is drawn, and "Saved 19:32" can go on saying so while nothing is saved. (B: F-B-80 to F-B-83)
7. **Styles live in the wrong place and have two looks.** Styles are per user but the text tagged with them belongs to the project, so a project opened elsewhere, sent, restored or written through the API refers to styles that do not exist; and each style has a working look and a print look in two vocabularies, so the screen does not predict the page. (E: F-E-01, F-E-06)
8. **Book is a parameter table, not a book designer.** No front matter pages, contents, running-head rules, chapter-number formats, unnumbered prologue, opener design, widows and orphans, ebook preview or layout problems list; Print, Export and Share are three doors with different options and no dialog. (E)
9. **The AI path drawn contradicts the specification, and the AI-first promise is invisible.** The spec ships Claude Desktop through Libreto's connector (the writer's subscription); draft 7 draws an in-app key with a € budget and an automatic pass. External agents, the owner's main ambition, never appear on screen, and there is nowhere to put the book's intent (premise, voice, rules). (F: F-AI-01 to F-AI-03)
10. **Nothing motivates and nothing helps at the blank page.** No goals, no progress, no empty states; a newcomer gets a gray "Chapter 1" and five empty modes. Jargon (Codex, Reveal, Pending, Dismiss, snapshot, Reference panel, "card" meaning two things) and broken conventions (green underline = done, Ctrl+K, F8, hold Alt) make the rest harder than it needs to be. (C)

## Where a writer gets lost (navigation)

Forty-six everyday goals were walked from a resting screen (A, §2.4). 23 have an obvious door, 15 only a hover, a right-click or a status-bar item, and **8 have no door at all**: applying a reader's Word notes (the writer tries File ▸ Open or Import, which builds a new project), changing how chapter headings print (the look is in Book, not in Format), undoing yesterday's fix, setting a word goal, reading chapter 2 while writing chapter 7 (no split view), finding the "tasks" Plan creates (they have no home), turning the AI off (Settings has no menu entry), and naming scenes with the AI (a ⋯ menu that is drawn nowhere). Five of the eight are missing doors a normal menu bar fixes for free.

Fourteen kinds of layer exist (mode, column, panel, floating chat, peek, hover card, note card, popover, sheet, dialog, window, notice, bell, Focus), and Esc, Back and focus are defined for three. Collisions are undrawn: Find over Review's buttons, a notice, a tip and the Ask button in the same bottom band, Ask opened inside Focus. Back means four different things (Back, the panel's ‹, "Back to the text", Undo's icon beside it).

## Breaking it

Report B tried to break every screen. The worst: hold-`Alt` and `Alt`+click are taken by Linux window managers and Electron's menu bar, on the platform version 1 ships on; `Ctrl+.` is the IBus emoji key; `F8`/`F11` need Fn on most laptops. The 1260 px rule leaves zero pixels for the gutter, and zoom 200 % makes the page wider than the window. A Spanish book gets English curly quotes; the middle dot used to show spaces in Was/Now is a real Catalan letter. Prologue prints as "1 · Prologue"; deleting a selection across a chapter heading is undefined; "Delete…" and "Move to Discarded" contradict each other; four marks on one word show one. At scale, hundreds of notes, ten on a line, a 2,000-word note or 30 replies cannot all sit level with their lines.

## The writer, and accessibility

Three personas walked whole sessions (C): a first novelist with nothing (blank page by design), a mid-career novelist importing 120,000 words with two beta readers (the import is one sentence; their Word comments on an original file have no ids to land on; the first screen is a wall of red on 400 invented names), and an older writer with low vision (no dark, sepia or high-contrast theme; gray text at 3.3:1; notices that vanish after 20 seconds fail WCAG 2.2.1; fixed 320 px columns break under 150–200 % scaling; nothing said about screen readers). The vocabulary table in C §3 O1 proposes plain words for every coined term.

## Deciding and going back

Report D asks for review **rounds** (an import, an AI pass, an agent session) with progress, finish and Revert; a **list view** and bulk actions when there are hundreds; readers' changes **inline**, per change and three-way aware (what you sent, yours, theirs), with an automatic merge where you changed different words and the AI only for a real conflict; History with **scope, date and search** that works without an AI, a visible **Save a version…**, and "Put back" for a scene deleted three weeks ago; and a clean split between **Undo** (the last thing here) and **Revert** (that older thing).

## Structure, styles and the book

Report E proposes styles that belong to the project (seeded from your own set), **one look** per style decided by the book's theme while your writing font is a personal setting; **Pages** as a book designer with themes, an outline of front matter, parts and chapters, click-to-edit on the preview and a list of layout problems; one **Export** dialog with profiles and a separate small **Print** dialog; **Book details** and **Language & typography** (« », the dialogue dash, hyphenation, "Capítulo"); unnumbered chapters; front and back matter as written pages in the Navigator plus generated pages switched on in Pages; and a real Word import preview. Play and Paper cannot be served by this style model in version 1: either minimal tools for them, or show them as "later".

## The AI and the API

Report F proposes connecting through the writer's Claude subscription first (Claude Desktop with Libreto's connector, as the specification says) and an API key as the advanced option; three levels instead of four (Off · When I ask · Also on its own, with one checkbox per automatic behavior and its estimated cost); the session-start catch-up **offered**, not silent; a **Brief** (premise, audience, voice, length, rules, threads, what the AI may do in this book) at the top of the Codex, sent with every request; stored scene summaries refreshed only when the text changes, so the AI reads deltas; an agent chip, per-session permissions, drafts accepted whole, edits grouped as a review round and "Revert this whole session"; an AI activity sheet; and a task-shaped tool set for agents (orient, read with a token budget, propose, check), with every edit addressed by paragraph and the hash of the text it was based on, so nothing stale is ever applied.

## What draft 8 changes, in one paragraph

**No modes.** One window: the Navigator on the left with **Book · Codex · Research**, the open document in the center, a side panel on the right that shows one thing (reference, the Review margin, the Ask conversation, or Book layout). The manuscript has three **views**, Text, Board and Pages, in a switch that only appears when the manuscript is open. **Review is a toggle** beside the same text. Marks get **shapes** (wavy, dashed, thin, tint) so color is never the only cue; the words become conventional (Accept, Reject, Fixed for you, Leave as is, versions). Undo and **Revert** are separate. Proposals go **out of date** instead of overwriting. Failure states, goals, empty states, themes, a Brief, the agent's presence and the book designer are drawn. The fallback with four modes (Write, Plan, Notebook, Book) is drawn too, so you can compare the two cuts.

## The full reports

| Report | Lens | Findings |
|---|---|---|
| [A](critique-d7/A-navigation.md) | Information architecture and navigation: the map of every place and layer, 46 goals with their steps | ~70 |
| [B](critique-d7/B-break-it.md) | Breaking it: long names, sizes, keys, languages, scale, failures, structure edge cases | ~115 |
| [C](critique-d7/C-writer.md) | The writer's experience, a benchmark of 16 tools, accessibility measured on the CSS | ~110 |
| [D](critique-d7/D-review.md) | Review, readers' copies, History, Undo, notices, AI proposals | ~80 |
| [E](critique-d7/E-book.md) | Structure, styles, Book, print, export, import, Play and Paper | ~80 |
| [F](critique-d7/F-ai-api.md) | The AI in the app, token economy, the API for agents writing a whole book | ~70 |
