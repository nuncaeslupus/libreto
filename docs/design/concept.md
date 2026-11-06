# Libreto concept, draft 1: one page, a few pieces

Status: **for annotation.** Draft 0 proposed the frame; the owner reviewed the 13 screen concepts in `docs/design/concepts/` and wrote `concepts/review-notes-2026-11-06.md`. This draft folds those notes in. Comment paragraph by paragraph; the numbered questions at the end can each be answered in one line. The screens still use draft 0 vocabulary and will be redrawn after this draft is annotated.

The thesis has not changed: write first and fix later, never lose your place, AI that is present but silent. What changed is the vocabulary and the chrome: draft 0 hid too much, and its names (setups, marks, Tray, Pin, Bar) did not explain themselves.

## What changed since draft 0

1. **Four named axes** replace "setups", "views", "marks" and "modes": Views, Workspaces, Focus, Highlights. Each has one visible place to switch (§1).
2. **A top strip** above the page: Back, Forward, Undo, Redo, view switcher, breadcrumb. Dimmed until the mouse moves.
3. **A menu bar** on Windows and Linux (system bar on macOS), with a menu search. Still no toolbar.
4. **Tray → Side panel**, with a visible handle, its own Back and Forward, and a Recently closed list. **Pin → Keep.**
5. **The Bar is split**: `Ctrl+F` find, `Ctrl+H` replace, `Ctrl+K` Search & ask. **The chat is its own window**, so the text stays visible.
6. **Auto-fixes** are a first-class thing: applied as you type, marked faintly, listed with ✓/✕, learnt from. Chapter detection is one of them; the chapter and scene rules are written down (§2).
7. **Hold `Alt`** reveals everything clickable in the text.
8. **Notes column** specified: default type, retyping, resolve, scrolling, narrow windows. **Tasks**: a Review session versus fixing one in place; buttons renamed.
9. **History** (working name) with per-session records; the briefing is its last entry.
10. **Selection pill → right-click menu** (pill kept only in Pro).
11. New: start screen, project info and front matter, Book layout step, cards as user groups, settings dialog, languages per passage, tutorials.
12. Codex: relevance order, minor entities disambiguated, name still open.

Principles kept from draft 0: blank page on a new project; `Esc` always returns the cursor to the text; nothing replaces anything (a peek floats, Keep adds); one grammar for every entity (click = peek, double click = go, Keep = keep); no toolbar; AI never touches the page unasked; cheapest answer first; everything derivable after the text exists; few settings.

---

## 1. How Libreto is organised

### 1.1 The four axes

Everything the writer can switch belongs to one of four independent axes. Changing one never changes another.

| Axis | Values | What it changes | Switch with the mouse | Keyboard |
|---|---|---|---|---|
| **View** | Text · Cards · Book | How the book is shown in the page area: the manuscript, scenes as cards, or laid-out pages | View switcher in the top strip; View menu | `Ctrl+Shift+V` cycles; `Esc` in Cards or Book returns to Text |
| **Workspace** | Just write · Planner · Reviser · Pro | Which areas are open by default, which highlights are on, which AI level runs. A preset, nothing more: no feature is unavailable in any workspace | Workspace name at the bottom right of the status bar (click = menu, hover = one line); View ▸ Workspace | `Ctrl+K`, type the name |
| **Focus** | on · off | Hides every area except the page. Moving the mouse fades in one "Exit focus" button at the top right and the status bar | View ▸ Focus; that button | `Ctrl+Shift+Enter`; `Esc` exits when nothing else is open |
| **Highlights** | checkboxes: Styles, Notes, Characters, Places, Spelling, Auto-fixes (Pro adds Authorship) | Which kinds of marks the page shows. Any combination; workspace defaults never turn on more than two | "Highlights" menu in the status bar; View ▸ Highlights | `Ctrl+K`, "Highlight: Characters" |

So: "Just write" in the status bar is the current workspace, and clicking it lists the four. "Text" in the top strip is the current view, and clicking it lists the three. "3 to review" is the AI status: three tasks wait in the side panel.

### 1.2 The areas of the window

Eight areas. Each has one job, a mouse way and a keyboard way to show or hide it, and `Esc` always ends in the text.

| Area | Where | Holds | Show / hide with the mouse | Keyboard | Open by default in |
|---|---|---|---|---|---|
| **Menu bar** | Top of the window (macOS: system bar) | File, Edit, View, Insert, Project, AI, Help. Every feature is in it. Help has a "Find a command" field | Always (not in Focus) | `Alt` or `F10` | Always |
| **Top strip** | A thin line above the page | Back · Forward · Undo · Redo · view switcher · breadcrumb (Part › Chapter › Scene, each a menu) | Always; dims to 25% when the mouse is still for two seconds. Hidden in Focus | Each control has a shortcut, shown on hover | Always |
| **Navigator** | Left column | Parts, chapters, scenes with one-line summaries and note/task counts; a filter box; "+" for chapter, part or break; below, collapsed: Codex | A visible 12-px handle with a chevron on the left edge; View ▸ Navigator | `Alt+1` | Planner, Reviser, Pro |
| **Page** | Centre | The manuscript as one continuous text (or cards, or laid-out pages). Choice blocks appear inline | Always | `Esc` returns here from anywhere | Always |
| **Notes column** | Right of the page, inside the page area | Notes and task marks beside their paragraphs; a "+" on hover at the right of any paragraph | "Notes ▾" button at the top of the column: Show all · Dots only · Hidden · Show resolved; Highlights ▸ Notes | `Alt+2` | Reviser, Pro unfolded; dots elsewhere |
| **Side panel** | Right column | Kept cards, stacked: Tasks, codex entries, History, Auto-fixes, Research, Inbox. Own Back · Forward and Recently closed | A visible handle on the right edge; View ▸ Side panel | `Alt+3` | Planner (Inbox), Reviser (Tasks), Pro |
| **Chat window** | Floating, bottom right, resizable | Conversations with the AI, past conversations | "Chat" button in the status bar; minimising animates it back into that button | `Alt+4` | Never; opens on request |
| **Status bar** | Bottom | Left: chapter words (click = book total) · "book p. ~142/310" · "3 fixes". Right: Highlights ▾ · Workspace ▾ · History · Chat · AI status (provider logo + label) · zoom slider | Always; fades in on mouse movement in Focus | `Ctrl+K` reaches every item | Always |

Transient things belong to no area and close with `Esc` or a click outside: the **peek** (§3), **Search & ask** (§5), the **find strip** (§5), **dialogs** (§10) and the **session briefing** (§7).

`F6` cycles page → navigator → notes → side panel → chat; `Shift+F6` goes back; a screen reader announces each area by the name above. Nothing is minimised to a taskbar: a closed card returns from Recently closed, a closed chat from the Chat button, a closed briefing from History. Each thing closes to one known place.

Below about 1100 px the notes column folds to dots and the side columns overlay the page instead of pushing it; the page is never narrower than about 60 characters.

---

## 2. Writing and auto-fixes

### 2.1 Chapters, parts and scenes: the rules

Libreto reads structure from what the writer types. The rules are few, listed in Help ▸ "How Libreto reads structure", and the first chapter heading sets the convention for the book.

| You type, on its own line | Libreto does |
|---|---|
| `Chapter`, `CHAPTER`, `Capítulo` (the chapter word of the project language, or English) | Starts a chapter. The number comes from its position, so numbers are never required. |
| `Chapter 7`, `Chapter seven`, `CHAPTER SEVEN` | Starts a chapter. If 7 is not its position, a task says "You wrote Chapter 7; by order it is 5. Renumber / Keep 7". |
| `Chapter 7: Lena's warning`, or a title on the next line | Starts a chapter with a title. |
| Only a number (`7`, `VII`, `7.`) | A chapter only if the book's first chapter was also a bare number. Otherwise it stays text; right-click ▸ Make chapter is one step away. |
| `Part One`, `PART I`, `Primera parte` | Starts a part. |
| `***`, `* * *`, `#`, `---`, or three blank lines | A scene break, shown as a centred ornament (the Break style). |
| `New chapter`, `New page`, `New scene` | Nothing: typed words are text. Chapters are also inserted by Insert ▸ New chapter (`Ctrl+Enter`), the navigator's "+", or `Ctrl+K`. |

Detection is an auto-fix (§2.2): the line turns into a heading with a faint mark; `Ctrl+Z` at once makes it text again, and that line is not converted again in this project. Nothing else is ever written into the manuscript by Libreto.

**Scenes** are not typed. A script proposes boundaries (breaks, a blank line followed by a change of time or place, chapter starts); at AI level 1 or above a small model confirms them and writes the one-line summary that is the scene's name; at level 0 the name is the first words. Scenes live in the index and show only in the navigator and in Cards view, where the writer renames, splits at the cursor, merges or drags a boundary. Chapter 7 of the sample has three scene rows because the text changes place twice.

**Files.** Each chapter is a file in the project folder, kept invisibly: the page always shows the whole book. "This chapter only" in the breadcrumb narrows the same page, with "previous / next / whole book" links at its ends. Word counts are per chapter (click for the book); the page number is always for the book and labelled "book p.".

### 2.2 Auto-fixes

Three severities, from docx-fixer:

- **Auto** (applied as you type): unambiguous typos in the dictionary ("teh"), smart quotes and dashes, double spaces, spaces before punctuation, the dialogue-dash rules of the project language, chapter and break detection.
- **Review** (a task, §4): anything with two reasonable answers: an unknown word, a capital after a full stop that could be a name, italics that could be Thought or Emphasis, a foreign word that could take the Foreign style. Applied in one accept, never silently.
- **Info**: repeated words within 50 words, repeated sentence openers, accidental rhymes. Shown only in a Review session or with Highlights ▸ Spelling on.

The mark: an Auto fix gets a faint dotted underline that fades after a minute. Hover shows "was: teh"; a click undoes it. The status bar's "3 fixes" opens the **Auto-fixes** card in the side panel: one row per fix, what you wrote → what it became, chapter, ✓ keep, ✕ undo, click to go there. The list of the whole project is in History.

Learning: an undone fix goes on the project's leave-alone list and is not applied again. If the writer later types the corrected form three times, the fix is offered again as a Review task, not applied. "Add 'Blue Lamp' to the dictionary" is offered on any unknown capitalised word. Settings ▸ Writing turns each Auto category off; nothing finer.

### 2.3 Formatting

No font size and no fonts in the text: the zoom slider changes the display; the Book layout (§12) decides how the book prints. Styles do the rest (§8); bold and italic stay allowed. The **right-click menu** on a selection: Cut · Copy · Paste · Paste as plain text · Style ▸ · Add note · Ask about this · Look up (when the word is a codex entry) · Language ▸. Without a selection it offers Look up, Add note, Make chapter and Make scene break for the current line. Draft 0's selection pill (Style · Note · Ask) exists only in Pro, as a faster path to the same three items. Every control shows its shortcut on hover and nowhere else; the key hints printed on draft 0's screens go.

---

## 3. Navigation

**Back and Forward** (top strip, `Alt+Left` / `Alt+Right`) move the cursor through the places it has been: every jump (double click in the navigator, a search hit, a briefing line, a task, a Book-view click) pushes a place. The side panel has its own smaller Back and Forward for which card was showing; the two histories stay separate because mixing text places and cards makes Back unpredictable. Undo and Redo sit beside them because that is where testers look; they act on the text only.

**Hold `Alt`** for half a second: every clickable thing in the text lights up (characters, places, note dots, auto-fix marks, headings) until the key is released; `Alt+click` opens its peek. A plain tap of `Alt` still goes to the menu bar, as in any Windows or Linux app. Right-click ▸ Look up is the second path.

**Peek → card → page.** Three depths, one object:

- **Peek**: single click (or `Alt+click`) on a name, a scene row, a note dot, a task, a search hit. A floating card anchored to the thing: it moves with the scroll and closes when its anchor leaves the screen, on `Esc`, or on a click outside. A peek of a character shows the **character card** (role, one line, first and last appearance, mentions, open facts), not the scene. The title is a link: for a scene it goes there, so there is no separate "Go"; for a character it opens the full entry. "Go" appears only when the peeked thing has a place other than where you are (a search hit, a task).
- **Keep** (was Pin), "Keep in side panel" on hover: adds the card on top of the side panel's stack until closed with its ✕. Keeping never swaps another card out.
- **Page**: double click, or "Open" on the card: the entry's own page in the side panel, with Back.

**Recently closed**: a clock icon at the top of the side panel lists the last twenty closed cards. Getting Lena's card back after closing it is one click there, not another click on her name. Closing the side panel keeps its stack.

**Navigator.** The current chapter and scene are highlighted as the text scrolls and kept in view; the current chapter stays expanded. Long titles wrap; counts ("1 note · 2 tasks") move under the title when there is no room. The filter box filters chapters, scenes and codex entries by name only; searching the text is `Ctrl+F` and `Ctrl+K`. Single click = peek; double click = go; "+" = Chapter, Part or Scene break here.

---

## 4. Notes and tasks

### 4.1 Notes

A **note** is anchored to a paragraph or a selection and has a **type** and an **author**. It is created with the "+" at the right of any paragraph on hover, right-click ▸ Add note, or `Ctrl+Shift+M`, in every workspace and view, without changing anything else on screen. If the column is folded the new note opens as a peek and folds to a dot when done.

- **Type**: starts as *Note*. A second after typing stops, the small model (level ≥ 1) may retype it to *To do*, *Doubt*, *Check fact*, *Idea* or *For the editor*; the chip fades in so the change is noticed. Clicking the chip changes it; "Automatic" lets the model choose again. Types are extensible like styles.
- **Author**: you, a named reviewer (imported DOCX comments keep theirs), or Libreto. A comment is a note by someone else; there is no second thing.
- **Menu**: Resolve · Edit · Delete · Expand to a page · Change type. Resolved notes leave the column and the counts, stay in History, and return with "Show resolved".
- **Layout**: the column scrolls on its own. Notes sit level with their paragraph when they can; colliding notes push each other down; tall ones scroll inside; a connector line is drawn only for the selected note; a note whose paragraph is off screen shows a small arrow that scrolls the text to it. The column coexists with the side panel: notes stay with the page, the side panel holds kept things.

### 4.2 Tasks

A **task** is a note that asks for a decision: To do, Check fact, For the editor, an AI finding (continuity, style, a proposed fix), an imported tracked change, a placeholder like `[name]`. The **Tasks** card in the side panel lists them with one icon family shared by the notes column, the navigator counts and the `Alt` reveal: to do, a box; doubt, a question mark; check fact, a magnifier; AI fix, a wrench; style, Aa; continuity, a chain link; editor, a pen. The hollow dot is gone. Each row: icon, one line, chapter, question or flag. Order is relevance (type weight × recency × touches the open chapter); dragging reorders and is remembered. Tasks have no Keep.

Two ways to work:

- **Review session**: "Review all" at the top of the Tasks card, or "Review" in the briefing. Tasks open one by one in place with a "3 of 12" counter and Next; `Esc` leaves and "Resume review" returns where it stopped.
- **Fix in place**: while reading, click a task mark in the notes column. The same choice block opens, with no Next; closing it returns to reading.

The **choice block** is inline: before and after side by side, changed words highlighted, three buttons. **Keep mine** dismisses the proposal (it may return if the passage changes). **Take proposed** applies it and History records it. **Not an error** marks the fact as on purpose and never asks again; the hover says so. After three "Not an error" in one category, "Stop checking this kind" is offered once.

---

## 5. Search

Three keys, three jobs.

**`Ctrl+F` Find.** A narrow strip at the top right of the page, like a browser's. Opens empty every time. Searches the whole book live as you type, accents and case ignored; "3 of 14" beside the field; `Enter` next, `Shift+Enter` previous; deleting the text to empty returns the view to where it started. `Esc` leaves the cursor at the hit and closes the strip. A small "⋯" opens options as checkboxes, each explained on hover: match case, whole word, accents matter, regular expression (with a "?" to a one-page reference in the style of regex101). In a narrowed chapter, hits elsewhere show as "+9 in other chapters"; a click widens.

**`Ctrl+H` Replace** (`Ctrl+R` as an alias; question 7). The same strip with a second line; keeps its last values. Replace, Replace and next, Replace all. Replace all never replaces blind: it opens a preview of every hit with ✓/✕, in the look of the Auto-fixes list.

**`Ctrl+K` Search & ask.** The one box for the deep things. Its status bar icon is deliberately bigger than the rest: a magnifier with a spark, plus the provider's logo when an AI is connected. The box appears centred over the dimmed text and moves to the upper third as soon as results exist (even "No results"), then stays. Three groups, each capped at five rows, with "Show 27 more" expanding in place with a scrollbar, reachable by arrow keys:

- **Commands**: anything in the menus ("Workspace: Planner", "New chapter").
- **In the book**: codex entries first ("Lena, character"), then passages grouped by scene, each with chapter and scene line.
- **Ask**: one row with the typed text, plus up to three suggested questions built from what is on screen and the open tasks, never generic: "Where did Vega last mention the car?".

Nothing is preselected. One line under the field says what `Enter` does, the only key text on screen: for a word or name that matches the book, "Enter opens Lena"; for anything that reads as a question (a question word, a trailing "?", four words or more), "Enter asks". The arrows move freely. ✕ closes, ⌫ clears, a click outside closes. Reopening shows the last text selected so typing replaces it; it never opens the chat. Quick answers come from the index and a small model, with links, and each has "Continue in chat".

---

## 6. Chat

The chat is a **window**, not the search box: a long conversation needs the text in view. It floats at the bottom right, about a third of the window wide, resizable, and minimises with an animation into the status bar's Chat button (`Alt+4`). The page stays editable. Draft 0's chat-in-the-Bar is withdrawn.

- **Conversations**: a list by date with first lines; "New conversation"; searchable through `Ctrl+K`.
- **Composer**: `Enter` sends, `Shift+Enter` breaks a line; the send button shows this on hover. No "Enter to send" text.
- **What it sees**: the whole book, always, through the Codex and retrieval. What is open (selection, card, chapter) is extra context, shown as a removable line "Looking at: chapter 7, selection", never a limit.
- **What it does**: answers quote the text with links; edits arrive as choice blocks with Apply, never typed into the page; longer work becomes tasks. The AI status reads *Working* meanwhile.
- No name, no avatar; it signs as "Libreto"; findings are stated as facts, not in the first person.

A chat docked in the side panel and a pop-out window are deferred.

---

## 7. History and the session briefing

Working name **History** ("Time Machine" is Apple's trademark; question 8).

**Engine.** Every save is a snapshot; snapshots group into **sessions** by the Netflix rule (a gap over six hours ends one). Scripts record per session: start and end, words added and removed, chapters and paragraphs touched, notes and tasks created or resolved, auto-fixes, and patterns such as "one paragraph edited 11 times in 15 minutes". At level ≥ 1 the small model writes one line per pattern ("Reworked the wording of Vega's hair colour, chapter 6"). Underneath is a Git-like store the writer never sees. Own spec.

**History card** (status bar ▸ History): sessions by date, each expandable to its lines; every line goes to its place with the before/after as a choice block. "See all changes" opens **Compare**: the old version left, today right, differences marked, a coloured banner "Viewing the Friday 23 October version. Back to today", "Restore this" on every changed block, "Restore whole session" with confirmation. Questions ("When did I write about Lena's car?") go through `Ctrl+K` or the chat and are answered from the session lines.

**Session briefing.** At the start of a session, in any workspace, when there is something to say. One dialog in the shared style:

> **Last session**: Thursday 5 November, 21:10 to 23:40 · 1,850 words
> You were in:
> · Vega left the Blue Lamp without paying (chapter 7, "Lena's warning")
> · Reworking the wording in "The back room" (chapter 6): clock, watch
> · 4 small fixes. See all changes
> [Review 6 tasks]

Each line goes there. The only button is Review, and only when tasks exist; there is no "Continue writing", because closing the dialog is continuing. `Esc` or a click outside closes it with an animation into the History button; History ▸ Last session reopens it. Once per session.

---

## 8. Styles and highlights

**Styles.** Six **base types** fixed by Libreto, each with a known export behaviour: *Heading*, *Block* (letter, poem, song, epigraph, sign), *Inline* (emphasis, thought, foreign, sign in a line), *Break*, *Material* (never exports), *Plain*. A **user style** is a base type, a name, a look and a highlight colour; the **New style** dialog has those four rows (base type with a one-line description of its export; name; look from italic, small caps, centred, indented, smaller, colour; highlight colour, used only with Highlights ▸ Styles). "Book title" is Inline, italic, amber. Style ▸ in the right-click menu lists styles by use with a filter and "New style".

A Block holds Inline styles (a Thought inside a Letter). Two Inline styles on the same words are not allowed; the second replaces the first and the status bar says so. A Review task may later ask "14 italics in chapter 3: Thought or Emphasis?" and convert in one accept. The AI proposes a new style only as a task; a foreign word is never italicised unasked.

**Highlights** replace the cycling "marks". Checkboxes: Styles (each style in its own colour, name on hover; Pro adds Labels in the margin), Notes (dots), Characters, Places, Spelling, Auto-fixes, Authorship (Pro). The workspace sets defaults; "Reset to workspace" restores them. Holding `Alt` shows everything regardless.

---

## 9. Codex

Name open (question 9): *Codex*, *Story bible*, *Cast & places*, *Who's who*, *Compendium*. Below, Codex.

The index of the book: **People, Places, Things, Motifs**. Scripts build it (capitalised names, co-occurrence, repeated phrases); at level ≥ 1 a small model confirms entries and merges aliases ("Lena", "the bartender"). An entry: name, aliases, one line, first and last appearance, mentions, facts each pinned to its quote (a moved or deleted quote is marked *changed* or *lost*, never repinned silently), open questions. The writer adds, merges, renames, hides and edits; nothing is written into the manuscript.

Sorted by relevance (mentions × spread). Entries with few mentions fold under "Minor (34)" and are named by role and place: "a man, ticket seller, ch. 7"; "street, the argument about their daughter, ch. 3"; "street, where the apple seller is, ch. 9". Things appear only when they recur in two scenes or carry a capital name; "table" never earns a row unless added. Motifs hold running jokes and repeated images. The navigator's Codex section is collapsed below the chapters and filtered by the same box. Own spec.

---

## 10. Dialogs and settings

**One dialog style**: a title line, a body, buttons at the bottom right with the primary one last. The page behind is dimmed to about 70% but readable, and the wheel over it scrolls it. `Esc` or a click outside closes (unsaved input asks "Discard?"). Menus and the status bar are greyed meanwhile. Dialogs: New project, Project info, Book layout, New style, Settings, Session briefing, confirmations. Peeks and cards are not dialogs.

**Settings** is one window with a short list on the left and few items on the right; most behaviour is fixed. *General* (app language, theme), *Writing* (auto-fix categories, dictionary, leave-alone list), *AI* (provider, key, default level, prompt preview), *Shortcuts* (the list, editable), *Files* (projects folder, backups). Anything per book lives in Project ▸ Info or Book layout. A setting that would need a third column is cut or becomes a `Ctrl+K` command.

---

## 11. Start screen and project info

**Start screen**: *New project*, *Open*, *Recent* (title, folder, last opened, words). No tabs; one project per window; opening another replaces it after saving. The last project reopens by default, the start screen one click away (File ▸ Start).

**New project** is three steps with Back and Next: (1) type: Novel, Short story, Collection, Essay, Blank; (2) title, subtitle, author, language; (3) "How do you work?", the four workspaces with one line each. All changeable later.

**Project info** (Project ▸ Info): title, subtitle, author, date, language, chapter word, series. These are data, not typed text: there is no "Author" style, and typing a name in the text is just text. The **front matter** (title page, copyright, dedication and epigraph if present) is generated from project info and the Book layout, shown in the navigator under "Front matter", and editable there for dedication and epigraph only. Templates per type set the chapter word, the break ornament, default styles and default Book layout; they are few and simple.

---

## 12. Book view and book layout

Book view needs a **Book layout** first (Project ▸ Book layout, offered the first time Book view opens): a preset (Pocket 11 × 18, A5, A4 manuscript, Letter manuscript, Custom), font and size, chapter heading form ("Chapter 7", "SEVEN", "7", title only), running heads, page numbers, front matter order, break ornament. Layouts are named and saved; a project can hold several (editor's manuscript, pocket edition). Export (DOCX now, PDF next, EPUB later) uses one of them.

In Book view page numbers are **exact**: the book is laid out in full, with a progress line for long books. Clicking a paragraph returns to Text at that paragraph; "Back to text" sits in the top strip and `Esc` does the same. In Text view "book p. ~142/310" is an estimate from the current layout, exact after a full layout until the text changes. This is the most Word-like part of Libreto and gets its own spec.

---

## 13. Cards view

Scenes as cards in lanes. Lanes are **groups** the writer names and counts freely ("Act 1", "Week 3", "Lena's thread"); the novel template offers three acts as a start and nothing forces them. Groups live in the index unless promoted to Parts. A card shows the scene line, words, characters, task count; click peeks, double click goes to Text; `Esc` returns to Text.

Dragging previews the new order; before anything moves, continuity warnings from the Codex appear on the dragged card ("Lena's warning would now come before Vega meets Lena"); **Apply** moves the text and History records it. Overlays (characters, tension, time) are deferred.

---

## 14. AI presence, levels and token economy

**Status.** One item at the right of the status bar: the provider's logo (a grey circle when none) and a short label: *Off*, *Not connected*, *Connected*, *Working: indexing*, *3 to review*. Click opens a small menu: what is running and what it has cost this session, the level, connect or disconnect, and in Pro the prompt preview. That, the briefing once per session and the task marks are the whole unsolicited surface. No popups, no toasts, no name.

**Levels** (set at project creation, changed in the AI menu or `Ctrl+K`):

| Level | What runs | Cost |
|---|---|---|
| 0 Off | Scripts only: dictionary, structure, index, counts, auto-fixes | none |
| 1 Quiet | + small-model micro calls: note typing, scene lines, name confirmation, session lines, quick answers | cents |
| 2 Reviews | + big-model reviews at session end or on "Review now": continuity, Codex facts, style lint | per review |
| 3 Proactive | Level 2 in the background while the writer pauses; results wait in Tasks | highest; shown in the status menu |

**Cheapest answer first**: (1) script, free; (2) index, free: the Codex and search answer "when did Vega last see Kit?" before any prompt; (3) small model with a minimal prompt: one note, one paragraph, the type list; never the document; (4) big model with excerpts: reviews get the Codex plus changed scenes; the chat gets retrieval over the whole book plus what is open. Every call above the index is loggable with what it sent.

**Providers.** Claude through MCP with Claude Desktop on macOS and Windows; an API key (Haiku by default, in the OS keychain) everywhere, Linux first; other providers through the key path later, each with its logo. Levels 0 and 1 work with scripts and a key; 2 and 3 need a connected provider. The written request to Anthropic stays (§18.1).

---

## 15. Workspaces

A workspace is a preset: which areas are open, which highlights are on, which AI level runs. Switching never hides a feature, changes the text or changes the view.

| Workspace | Open by default | Highlights | AI | One line on hover |
|---|---|---|---|---|
| **Just write** | Page, top strip, status bar; navigator collapsed; notes as dots | Styles | 1 | "Just the page. Everything else one key away." |
| **Planner** | + Navigator with Codex expanded, side panel with Inbox | Styles, Characters | 1 | "Structure and people in view; Cards one key away." |
| **Reviser** | + Navigator counts, notes column unfolded, side panel with Tasks | Styles, Notes | 2 | "Notes and tasks open; reviews at session end." |
| **Pro** | All of the above, selection pill, style labels, shortcut sheet | any | 3 | "Everything on, including the AI's prompts." |

Opening or closing an area by hand stays until the workspace is switched; "Reset workspace" returns to the preset. Focus is not a workspace: it hides everything from any workspace and returns to it.

---

## 16. Accessibility, languages and tutorials

**Keyboard and screen readers.** Every feature is in the menu bar and in `Ctrl+K`; every area has a shortcut and `F6` reaches it; `Esc` returns to the text; shortcuts show on hover and in Help ▸ Shortcuts; areas and cards have names a screen reader announces. The zoom slider changes text size only; a high-contrast theme exists.

**Languages.** The project language sets the dictionary, the chapter word, the typography rules (Spanish dialogue dashes and « », English quotes) and the language the AI writes in. A passage (selection, scene or chapter) can be marked with another language from right-click ▸ Language; dictionary, auto-fixes and AI follow inside it. The Foreign style is for single words and carries an optional language. The app's own language is a Settings item.

**Tutorials.** First run: a twenty-second tour of three things (the page, the navigator handle, `Ctrl+K`). Then one tip at a time, when it first becomes relevant (the first note, the first task, the first time `Alt` would have helped), dismissable, never repeated, replayable from Help ▸ Tips. The visible handles and the dimmed top strip are the lasting reminders.

---

## 17. Answers to the screen review

| Screen | Questions raised | Answered in |
|---|---|---|
| S1 | Chapter rules, numbering, other languages, files; views and "Just write"; Back and Undo at the top; shortcuts on hover; font size and right click; auto-fix mark and list; navigator handle; counts; the magnifier; the circle | §2, §1, §3, §5, §14 |
| S2 | When the briefing shows; start screen, tabs; briefing lines and History; closing and reopening; buttons; status bar items; recovering closed cards; Alt; menus; Focus; dialogs | §7, §11, §1, §3, §10 |
| S3 | Scenes and their names; navigator filter; wrapping counts; Go, Pin, key hints; Codex scope, relevance, minor entries, name; Planner; marks; settings; zoom | §2.1, §3, §9, §15, §8, §10, §1.2 |
| S4 | "+" only for notes; retyping; many notes; resolve, delete, edit; reviewer comments; default type; current chapter; Ctrl+M; notes with other panels and narrow windows | §4.1, §3, §1.2 |
| S5 | Keep and the side panel; hiding it; character card not scene; Go; unkeep; marks; peek on scroll | §3, §1.2, §8 |
| S6a | Hundreds of results; suggested questions; key hints; Ctrl+F vs Ctrl+K; Enter; ✕ and clear, animation; "more"; caps; "In the book" | §5 |
| S6b | Enter to send; text visible while chatting; long chats and history; Ctrl+K again; what the chat sees | §6, §5 |
| S7 | Side panel arrows, show/hide, capacity; buttons; Pin on tasks, drag order; icons; Review vs fix in place; Ctrl+2 | §1.2, §3, §4.2, question 4 |
| S8 | Pill vs right click; cut, copy, paste; new style; highlight per style; two styles; "Book title" | §2.3, §8 |
| S9 | Key explanations; option toggles; regex; live search and backspace; Ctrl+F clean, Ctrl+R keeps; replace layout | §5 |
| S10 | Layout step; paper sizes; exact pages; Back at the top; configuration | §12 |
| S11 | Groups instead of acts; dragging and continuity; reaching Planner | §13, §1.1 |
| S12 | Title and author at creation; ways to create a chapter; front matter; Author style; templates; vocabulary; mixed languages; steps | §11, §2.1, §16, §1 |

Draft 0's screens contradicted each other: S2 (Reviser) hid the side panel and S5 showed it. §15 is now the rule.

---

## 18. What the research adds (kept from draft 0)

### 18.1 Claude inside the app with the writer's own login

- **Not allowed today without Anthropic's approval.** Claude Code's legal page (February 2026): "Anthropic does not permit third-party developers to offer Claude.ai login into their own applications, or to route requests through Free, Pro, or Max plan credentials on behalf of their users." Tools that reused Claude Code's tokens were blocked from January 2026 ([legal page](https://code.claude.com/docs/en/legal-and-compliance#authentication-and-credential-use), [Agent SDK](https://code.claude.com/docs/en/agent-sdk/overview)). No public "Sign in with Claude" programme exists; the channel named is [Contact Sales](https://www.anthropic.com/contact-sales).
- **Allowed and using the subscription:** a local MCP server installed in Claude Desktop as a one-click `.mcpb` bundle, plus an **MCP App** that shows interactive cards inside the Claude chat ([bundles](https://claude.com/docs/connectors/building/mcpb), [MCP Apps](https://claude.com/docs/connectors/building/mcp-apps/getting-started)). About four clicks, once. `.mcpb` runs on macOS and Windows only; v1 is Linux first, so Linux starts with the API key.
- **Grey area:** spawning the writer's own signed-in Claude Code. JetBrains states "Anthropic terms do not allow subscriptions to be used this way" ([JetBrains](https://www.jetbrains.com/help/air-ides/air-use-claude-subscription.html)). Not for writers.
- **Cheap tokens:** Haiku 5.5 costs $0.10 / $0.50 per million tokens; a note-type classification costs about $0.00004 ([pricing](https://platform.claude.com/docs/en/about-claude/pricing)). Local models are possible but experimental.

**Proposal:** "Connect Claude" (MCP + MCP App) on macOS and Windows, the API-key path everywhere, scripts and index for levels 0 and 1, and a written request to Anthropic about starting the writer's own Claude Code or offering in-app login.

### 18.2 File format

- Tested with pandoc 3.1.3: `<!-- ^id -->` paragraph anchors are **lost** on DOCX export, and `{.sign}` classes need a filter to become Word styles.
- **Recommendation: Djot** (by the author of pandoc and CommonMark). Same readability and token cost as Markdown; ids and styles on any block or span are part of the syntax (`{#p-7f3a}`, `[I should not be here.]{.thought}`, `::: sign`); djot.js and pandoc ≥ 3.1.12 follow the same rules. An HTML subset is the runner-up (about 40% more tokens); ProseMirror JSON, TEI, DocBook and ODT are rejected as storage.
- If accepted: `.dj` files, `{#id}` anchors, a `styles.yaml`, notes anchored by paragraph id plus quoted words, alternates and History in their own files so a chapter file always reads as the book. A one-day round-trip test on a real chapter comes first.

### 18.3 Lessons from our own tools

- **literary-critic:** every finding pinned with its quote and never moved silently (*changed* or *lost*); a story bible with saved questions (setups without payoff, threads silent for 1000+ words); script checks for repeats within 50 words, rhymes, sentence openers; "ask the codex before reading the text"; one change per card.
- **docx-fixer:** Spanish dialogue-dash rules that work; the Auto / Review / Info severities (adopted in §2.2); DOCX export pitfalls.
- **opos:** focus mode folds panels to zero and fades chrome to 25%; every paragraph has a stable id; notes follow a rewritten paragraph and say so.
- **integral-job-search:** few required steps, the rest offered and declinable; position saved continuously; "a subject declined twice is not raised again" (adopted for tips and "Not an error").

### 18.4 What writers say

- Scrivener is kept for organising and left for writing; compile is the main complaint ([L&L forum](https://forum.literatureandlatte.com/t/this-software-is-inscrutable-and-damn-near-unusable/139718), [Mumsnet](https://www.mumsnet.com/talk/creative_writing/2633625-Scrivener)).
- Writers want scene units **and** a seamless whole-book view with search across everything ([Writing Forums](https://www.writingforums.com/threads/managing-your-book-the-nuts-and-bolts.210547/), [Codidact](https://writing.codidact.com/posts/25162)): one page with narrowing.
- Maintaining wiki links by hand is "an enormous amount of work": links must be automatic.
- Readers count spelling help as fine, structural advice as 50/50, any AI draft as AI-written ([Book Riot](https://bookriot.com/what-counts-as-ai-survey-results/)): default AI to quiet, keep "no AI" first-class.

### 18.5 UX patterns adopted

Corrections with one quiet mark and dismissals that say their scope (Gmail, LanguageTool); a find strip that never covers the text (VS Code, Chrome); margin notes that push each other, scroll inside, and connect only when selected (gwern.net, Word); a peek that needs a click or a modifier so it never fires while writing (Obsidian), promoted to a panel in one step (Arc), with a panel history and recently closed (every browser).

---

## 19. Cut, defer, merge

**Cut**: the selection pill outside Pro; the cycling "marks" badge; the chat inside the search box; "Continue writing" and "On purpose" buttons; key hints printed beside controls; tabs; several projects open at once; "Enter to send" text; A20, A21 sentence commands and multi-cursor; A26, A27 undo tree (History covers them); B3, B7; B22, B23, B28, M4, M6, M10, M11 wellbeing gadgets; C9, C10; D9, D19, D22–D24, D27, J6, J13, J25; E5, E6, E8; F11, F12, F14, F15, F22, F27; G5, G12, G14, I7, I9, I14, K10, K25, K26, L3, L7; O2, O8, P9, P11, P13, Q3–Q5; R1, R2, R4–R6, R8, R9, R11, R12.

**Defer**: chat docked in the side panel or popped out; Cards overlays; D13 custom Codex fields; D20–D21; J3–J5 story time; J8–J11; K32 blurbs; P4 EPUB; O1 share links; D26 character pictures; local models; providers beyond the key path.

**Merge**: comments, notes, to-dos, placeholders, AI findings and imported tracked changes → notes with types, filtered as tasks; chapter view and full view → one page with narrowing; hover card, panel card and entity page → peek / card / page; corkboard, outline, reverse outline and synopsis → navigator lines shown as Cards; alternative takes, proposals and scene variants → the choice block; briefing, "previously on", "open where I left off", snapshots, compare and "what changed since sent" → History; ask the book, search by meaning and command palette → Search & ask.

---

## 20. Open questions for the owner

1. The four axes (View, Workspace, Focus, Highlights) and the eight areas of §1: accept as the vocabulary?
2. Top strip with Back · Forward · Undo · Redo · view switcher · breadcrumb, dimmed when the mouse is still: yes?
3. Breadcrumb at the top and counts at the bottom: yes, or breadcrumb back at the bottom?
4. Panel shortcuts `Alt+1` navigator, `Alt+2` notes, `Alt+3` side panel, `Alt+4` chat, leaving `Ctrl+1/2/3` free: yes?
5. `Ctrl+K`: `Enter` opens or asks depending on the shape of the text, with one status line saying which. Acceptable, or should `Enter` always ask?
6. Tasks: a Review session with Next, versus fix in place with no Next: is that what you meant?
7. Replace on `Ctrl+H` (Word, VS Code, browsers) with `Ctrl+R` as an alias, or `Ctrl+R` only?
8. Name for History: *History*, *Sessions*, *Timeline*, *Versions*?
9. Name for the Codex: *Codex*, *Story bible*, *Cast & places*, *Who's who*, *Compendium*?
10. Bare-number headings follow the book's first heading (§2.1): fine, or always ask?
11. Chat as a floating window at the bottom right, docked chat deferred: yes?
12. One project per window, opening another replaces it: yes, or allow two windows?
13. Front matter generated from Project info, no "Author" style: yes?
14. An undone auto-fix returns as a Review task after the correct form is typed three times: keep, or never return?
15. Highlights: workspace defaults limited to two, writer may enable more: keep the limit?
16. Djot instead of Markdown, after the one-day round-trip test: run the test?
17. Linux v1 without the Claude subscription path (API key only): acceptable?
18. Anything in §19 you want back?

## 21. Specs needed later

- **History engine**: snapshots, sessions, pattern detection, session lines, Compare, restore, storage.
- **Book layout and export**: presets, headings, running heads, front matter, DOCX/PDF, exact pagination.
- **Codex**: extraction, aliases, relevance, minor entries, pinned facts, motifs, editing.
- **Auto-fix rules**: the Auto / Review / Info tables per language, the leave-alone list, the learning rule.
- **AI levels, providers and costs**: what each level runs, when, with which prompt, at what cost; MCP and key paths; logging.
- **Search & ask**: index, retrieval, suggested questions, the Enter rule.
- **Storage**: the Djot test and the file layout.
