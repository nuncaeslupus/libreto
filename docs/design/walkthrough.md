# Libreto, a walk through the window (concept draft 3)

Status: **for annotation.** Not a guide and not a specification: one short paragraph per screen, in the order a new writer would meet them. The pictures are in `concepts/`; the review page puts a note field under each.

## Libreto in one minute

Libreto is a writing app for books. Its window has **five modes** along the top: **Write, Plan, Research, Review, Book**. Each mode is one job, and choosing it arranges the window for that job; the writer decides what they are about to do, and Libreto does the layout. One rule holds in every mode: the **left** column lists what you are working on, the **center** is the work, and the **right** column, the **Side panel**, holds the **Codex** (who, what and where in your book) and the **Chat** with the AI. Both columns open and close with the two icons at the ends of the top strip, and `Ctrl+\` closes both at once to get back to the page.

| Mode | Left | Center | Right | Why it is a mode |
|---|---|---|---|---|
| Write | chapters (optional) | the text | Codex · Chat (optional) | the default; the text needs ~65 characters a line and nothing else |
| Plan | chapters (optional) | cards, full width | Codex (optional) | cards need the whole width to compare and move |
| Research | your library | the material, large | notes, facts, links | photos and PDFs need room to be read |
| Review | everything to look at | the text | notes beside paragraphs | text plus margin plus list: three columns |
| Book | page thumbnails | spreads | layout settings | pages need the full height |

All five fit a 1440 px laptop: Write 260 + 620 + 380, Review 310 + 600 + 320, Research 260 + 700 + 380.

## s00-start-screen: Start

What you see when Libreto opens with no book: start a new one (title and kind of book are all it asks) or open a recent one. Import takes a Word file and turns its headings into chapters.

## s32-what-now: What are you doing now?

Coming back after some hours, Libreto says where you left off and offers the five modes, each with what is waiting there: the chapter you were writing, cards not yet placed, clippings to sort, notes to review. One click gets the window ready for that job; `Enter` simply continues writing. It can be turned off.

## s01-just-write: Write, the first minute

Write mode with nothing open: the page, a top strip and a status bar. The strip has the column toggles at its ends, Back, Forward, Undo and Redo, where you are in the book, the five modes in the middle, and Search & ask. The status bar shows the style at the cursor, words, the page this would be in the printed book, and small fixes Libreto made (a typo, a missing comma), each leaving one quiet mark you can undo.

## s02-scene-breaks: Scene breaks

Typing `***` on its own line makes a scene break. When the time or place jumps without one, Libreto suggests a break with a fainter line; nothing changes until you accept.

## s11-styles: Styles

Styles say what a piece of text is (a thought, a letter, a sign on a door), not how it looks; the look is chosen later per book or export. The chip at the bottom left always shows the style at the cursor; click it, or `Ctrl+T`, for the palette.

## s07-hold-alt: Hold Alt

Holding `Alt` shows everything Libreto knows about the page at once: characters, places, things, notes, tasks. Release it and the page is clean again. The Highlights menu in the status bar keeps some of them on permanently.

## s03-navigator: Chapters, on the left

The left column in Write lists parts, chapters and scenes, with small counts of notes and tasks. One click peeks at a chapter without leaving your place; a double click goes there. Open it with the icon at the top left or `Ctrl+[`.

## s08-search-ask: Search & ask

One box for everything: find a word, jump to "chapter 9", run a command ("export PDF"), or ask the AI a question about the book. Results open in place under the box and close with `Esc`.

## s23-find-replace: Find and Replace

The classic `Ctrl+F` and `Ctrl+H`, in a strip at the top of the page, with "Rename everywhere" for characters so that "Lena" becomes "Lina" in the text and the Codex together.

## s05-peek-codex-tab: Peek and the Codex

Hover a name and a small card says who that is. "Open full card" opens the Side panel on the Codex: everything the book says about Lena, with quotes and the chapters she is in. The Codex fills itself from your text; you only correct it. "Open in Research" goes to the same entry in Research mode, with room for your material.

## s09-chat-column: Chat

The Side panel's second tab. You talk about the open scene; the AI marks the paragraphs it means and links to other chapters. It never types into your text: proposals arrive as a choice you apply or ignore. Drag a tab down to see the Codex and the Chat together.

## s25-everything-open: Write with everything open

The most Write can show, on a 1680 px screen: chapters on the left, characters, places and styles highlighted, note marks beside paragraphs, the Codex and the Chat sharing the Side panel. Shown to judge the load; no writer needs this all day.

## s26-panels-off: One key back to the page

Same moment, after `Ctrl+\`: both columns closed, highlights quiet. The same key brings back exactly what was open.

## s17-focus: Focus

The page alone, with no strip or status bar; moving the mouse shows "Exit focus". `Ctrl+Shift+Enter` or `Esc`.

## s24-cards-view: Plan

The book as cards, one per scene, in groups (chapters, or your own). Drag a card to reorder; before dropping, Libreto warns if the move breaks continuity ("Vega reads the ledger before Kit finds it"). Nothing changes in the text until "Apply order". It is a mode because cards need the full width.

## s29-research: Research

The Codex at full size, with your material. Left: the library (an Inbox for unsorted clippings, then people, places, things and topics). Center: the material itself, large: photos, PDFs, web clips. Right: your notes, facts pinned from the material or from the text, links, and where it appears in the book. You bring material in by dragging files or links onto an entry, with Insert ▸ Research, or by telling the Chat "keep this". It is stored inside the project, in `research/`, so it travels and backs up with the book, and it is never part of the text or its word count.

## s30-research-beside-text: Research beside the text

While writing, you often need one thing in view: the photo of the bar, two facts. "Show beside the text" pins that entry in the Side panel in Write; "Own window" sends it to a second monitor. Gathering and sorting happen in Research; using happens beside the text.

## s31-review: Review

The second pass. Left: everything waiting to be looked at (your notes, your editor's, the AI's checks, the small fixes), by chapter. Center: the text. Right: each note beside its paragraph. "Review all" walks the list one by one; "AI: review this chapter" adds its findings to the list, never to the text.

## s04-notes-column: Notes in the margin

A closer look at the margin in Review. Notes have kinds (note, doubt, fact to check, idea) and say who wrote them; Resolve keeps them in History. In Write the same notes are only small marks beside the paragraph.

## s21-receive-copy: An editor's copy

You send the book to an editor as a Word file and get it back annotated. Libreto reads their comments as notes and their changes as proposals, and shows both in Review.

## s15-compare: Compare an old version

Any earlier state of a chapter beside today's, paragraph by paragraph; take back one paragraph or the whole chapter.

## s14-history-briefing: History

Every writing session is kept with its time, words and changes. The status bar's History opens the list; you can ask it "when did I write about Lena's car?".

## s16-book-layout: Book

The book as it will be printed: choose the page size, fonts, chapter openings and running heads, then read it as turning spreads. Export (PDF, Word, ePub) is here.

## s22-ai-connect: The AI, connected or not

The orange star at the right of the status bar is the AI: in color when connected, gray when not. Click it for the level of help, the cost this month and what the AI has written. Libreto works fully without it.

## s18-settings: Settings

One window, grouped by topic, each group with a "?" that opens its help. Most writers never need it.

## s19-help: Help

`F1` opens help about what you are looking at, in the Side panel, beside the work. Tutorials are small projects you edit while reading them.

## s20-statistics: Statistics

Words per day and per chapter, sessions, goals. Kept out of the way: from the word count in the status bar, or View ▸ Statistics.

## s27-status-bar-inventory: Everything in the status bar

Not a real moment: every menu of the bottom bar opened together, to see at a glance what lives there.

## s28-menu-inventory: Everything in the menus

The seven menus opened together. Every item is also a command in Search & ask and shows its key.

## What changed in draft 3, and why

- **Modes replace views and workspaces.** Draft 2 had four axes (view, workspace, focus, highlights) and asked the writer to combine them. Draft 3 has one visible choice at the top, named by the job, as photo and video editors do with their task pages. Text, Cards and Book views became Write, Plan and Book; Research and Review are new full modes.
- **One rule for the columns.** Left lists, center works, right helps, in every mode.
- **Research is a mode, plus a pin.** Sorting material needs room, so it gets the whole window; using it while writing needs one item, so it pins beside the text or goes to a second window. Writers who split one screen between draft and research call it clutter; this avoids the split.
- **Codex and Research are one.** The Codex window is gone: a full Codex entry is the Research mode.
- **Tasks left the Side panel.** The Side panel has two tabs, Codex and Chat. Tasks, notes and fixes live in Review; in Write they are small marks.
- **Smaller status bar.** No view switcher, workspace or chat button; modes are at the top.
- **Keys.** `Alt+1…5` modes, `Ctrl+[` left column, `Ctrl+]` Side panel, `Ctrl+\` both, `Ctrl+J` chat.

## Questions

1. Five modes named Write, Plan, Research, Review, Book: right names, right number?
2. Codex and Research as one thing (the Codex at full size is Research): yes?
3. The Side panel with only Codex and Chat, and tasks living in Review: yes?
4. Should the AI search the web for research (costs, needs a capable provider), or only read what you bring?
