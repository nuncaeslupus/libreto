# Libreto concept, draft 2: the window, the Desk, the chat

> **Draft 4 note (November 8).** The current description of the product is `walkthrough.md`
> (concept draft 4) and its screens in `concepts-d4/`. Where this document and the walkthrough
> differ, the walkthrough wins. Superseded here: the Desk and its tabs (§2), the chat in the
> column (§2.3), Search & ask (§6.2), the Codex window (§2.2), the status-bar AI icon (§13),
> the session briefing dialog (§8.2, §23.1), the workspaces table (§23.2), and the shortcuts
> `Ctrl+\`, `Ctrl+[`, `Ctrl+]`, `Alt+1…4` for panels (§1, §9.2). Draft 4 replaces them with
> one AI door (Ask: `Ctrl+K` and the round button), a page that never moves, a Reference
> panel without tabs, a library with the Codex and Research as two sections, Review as the
> same page with the margin open, sheets instead of extra modes, one family of marks, and
> keys that exist on every keyboard. The rest of this document (writing rules, auto-fixes,
> entity detection and its cost, styles, History, Book, AI levels, ethics, help, sharing) still
> stands.

Status: **for annotation.** Draft 1 was never read on its own; the owner reviewed the 20 v2 screens built from it and wrote `concepts/review-notes-v2-2026-11-07.md`. This draft folds those notes in and restructures freely. Comment paragraph by paragraph; the numbered questions at the end can each be answered in one line. The screens will be redrawn as v3 from this draft (`screens-v3-brief.md`).

The thesis has not changed: write first and fix later, never lose your place, AI that is present but silent. What changed is the right side of the window and a long list of details from the review.

## What changed since draft 1

1. **The Side panel is gone.** The right column is the **Desk**: three fixed tabs, Tasks, Codex, Help, and no panel-level Back and Forward. (§2)
2. **The chat lives in the right column by default**, below the Desk tabs, never over the page; it can be dragged out to float. (§2.3)
3. **Views move to the bottom bar**, Word style. The top strip spans the full window and never shifts; the navigator and Desk toggles are fixed icons at its ends. (§1)
4. **Search & ask expands in place**; provider icon and send arrow, no X or second magnifier. Menu search moves inside Help. (§6)
5. **Scene breaks are a soft rule**; detected scenes get a fainter one. Scene titles survive edits. (§3)
6. **Entity detection and its cost** are specified: scripts and the index on each pause, small-model batches, never per keystroke. (§3.4)
7. **History** lists every session; old versions are a full diff against today; **sessions are activity-based**. (§8)
8. **Styles**: a fixed base list, shortcuts, a palette, a style chip in the status bar instead of the pill. (§9)
9. **Book view** pages through the book with TeX-grade typography. (§11)
10. New: Help (§15), Statistics (§8.4), Sharing with an editor (§16), AI ethics (§17), a v1 / later column (§20).
11. American English; no explanatory text in the interface except on hover.

Principles kept: blank page on a new project; `Esc` always returns to the text; nothing replaces anything; click = peek, double click = go; no toolbar; the AI never touches the page unasked; cheapest answer first; few settings.

---

## 1. The window

### 1.1 Four axes

| Axis | Values | Switch with the mouse | Keyboard |
|---|---|---|---|
| **View** | Text · Cards · Book | Switcher at the bottom left of the status bar | `Ctrl+Shift+V` cycles; `Esc` in Cards or Book returns to Text |
| **Workspace** | Write · Plan · Research · Review · Everything (§23) | Workspace name in the status bar | `Ctrl+K`, type the name |
| **Focus** | on · off | Focus button at the right of the top strip; View ▸ Focus | `Ctrl+Shift+Enter`; `Esc` exits |
| **Highlights** | checkboxes, any combination | Highlights menu in the status bar | `Ctrl+K`, "Highlight: Characters" |

### 1.2 The areas

| Area | Where | Holds | Show / hide | Key |
|---|---|---|---|---|
| **Menu bar** | Top (macOS: system bar) | File, Edit, View, Insert, Format, Project, AI, Help. Help holds the menu search | Always | `Alt`, `F10` |
| **Top strip** | Full width, above all columns | Left: navigator toggle, Back, Forward, Undo, Redo. Center: breadcrumb. Right: Search & ask, Focus, Desk toggle | Always; dims when the mouse is still | hover shows each key |
| **Navigator** | Left column | Front matter, parts, chapters, scenes | Toggle icon at the top left; View ▸ Navigator | `Alt+1` |
| **Page** | Center | The manuscript, cards, or pages | Always | `Esc` returns here |
| **Notes column** | Right of the page, inside it | Notes beside their paragraphs | Notes ▾ at its top; Highlights ▸ Notes | `Alt+2` |
| **Desk** | Right column | Tabs: Tasks, Codex, Help | Toggle icon at the top right; View ▸ Desk; any tab shortcut | `Alt+3` |
| **Chat** | Bottom of the right column by default | The conversation | Chat button in the status bar | `Alt+4` |
| **Status bar** | Bottom | Left: view switcher · style chip · chapter words · "book p. ~142/310" · "3 fixes". Right: Highlights ▾ · Workspace ▾ · History · Chat · AI icon · zoom | Always; fades in on mouse movement in Focus | |

Transient things belong to no area and close with `Esc` or a click outside: peeks, Search & ask results, the find strip, dialogs, the session briefing, the Codex window (§2.2).

**The strip never moves.** It spans the window above every column, so opening the navigator or the Desk changes nothing in it. The breadcrumb is centered on the window. When the window is too narrow, the breadcrumb shortens first (parts drop, then the scene), then Search & ask shrinks to its icon.

**Navigator and Desk toggles** are one icon family mirrored at the two ends of the strip, always visible, filled when the column is open; no handles on the page edge. Hovering says "Show navigator (Alt+1)".

**`F6`** cycles page → navigator → notes → Desk → chat; `Shift+F6` goes back. Below about 1200 px the navigator and the Desk cannot both be open. Below about 900 px the open column overlays the page. The page is never narrower than about 60 characters.

---

## 2. The Desk and the chat

### 2.1 The model

The right column has one job: things you keep beside the page while writing. It is a **Desk** with three fixed tabs. Only the current tab's name is shown as its title, never the word "Desk". The tabs never change in number or order, so a writer learns them once.

| Tab | Holds | Opened by the mouse | By keyboard | By context | By the AI |
|---|---|---|---|---|---|
| **Tasks** | Tasks, notes and auto-fixes as one list with a kind filter (All · Tasks · Notes · Fixes); "Review all" at the top | Tab; the "3 fixes" and "3 to review" counters in the status bar; the badge next to a paragraph | `Alt+3` then `1`; `Ctrl+Shift+T` | Clicking a note badge opens the Tasks tab at that note; clicking a navigator count opens it filtered to that chapter | "Open the Tasks tab at the eye-color task" |
| **Codex** | People, Places, Things, Motifs, Research. One entry at a time with its full card; a filter box; a Recently viewed list; Back within the tab | Tab; "Open full card" on a peek; double click on a name | `Alt+3` then `2`; `Ctrl+Shift+C` | Right-click ▸ Look up; Search & ask result | "Open Lena in the Codex" or a link in a chat answer |
| **Help** | The help book: contextual topics, tutorials, shortcuts | Tab; the "?" in every dialog and menu; Help ▸ Contents | `F1` (help about what has focus) | A dialog's "?" opens the topic for that dialog | "See Help: Scene breaks" as a link |

Rules:

- **A tab opens where it is needed and stays open.** Opening the Codex at Lena does not touch the Tasks list, which remembers its scroll and filter.
- **No panel history.** The Codex tab has a small Back because entries link to each other (Lena → the Blue Lamp → Kit); it moves between entries only. Tasks and Help have none.
- **The AI uses the same doors.** Every way to open a tab is a command (§6.1): a chat answer can link "Open the Codex at Lena", a review can open Tasks filtered to its findings, and the AI can close a tab it opened. It never opens one while the writer is typing.
- **Closing the Desk keeps its state.**

### 2.2 The Codex window

A full card wants room. "Expand" at the top of the Codex tab (or `Ctrl+Shift+C` twice) opens the **Codex window**: a large floating window, about two thirds of the screen, with its own Back and Forward and the full lists on the left: People, Places, Things, Motifs, Research. This is where the writer browses, compares two characters, or reads every scene a place appears in. It is the one floating window with Back and Forward, because browsing a web of entries needs them. `Esc` closes it; the tab keeps the entry.

### 2.3 The chat

The chat is too important for a tab, and it must not cover the page. Both are met by giving it a **home in the right column**: when it opens, it takes the lower part of the column and the Desk tabs shrink upward to a collapsed row of their names. Nothing is covered. Click a tab name and it opens above the chat, sharing the column; drag the divider to choose the split. Closing every tab gives the chat the whole column.

- **Opens from** the Chat button in the status bar, `Alt+4`, "Continue in chat" in Search & ask, right-click ▸ Ask about this, and the AI itself (a chat line, never a popup).
- **Minimizing** animates the chat into the Chat button, which shows a dot while an answer is pending.
- **Floating**: drag the chat by its title out of the column and it becomes a free window, which can go to a second monitor; drag it back to dock. Its last place is remembered.
- **When the Desk is closed**, the chat alone is the column. **Below about 900 px** the chat and the tabs take turns, with the tab names kept as a row above the chat.

The paragraph under discussion is marked in the text, and the AI can mark a second place or pulse a passage to draw attention. Answers quote the text with links. Edits arrive as choice blocks with Apply, never typed into the page. Long work becomes tasks.

### 2.4 Rejected alternatives

- **Chat as a fourth tab.** Simplest, and the owner's first instinct was right: a tab hides the chat, and the chat and the Codex are needed together ("is this what Lena said in chapter 2?").
- **A floating chat over the page, always.** Covers the text that the chat is about. The column home keeps the text visible; floating stays available for those who want it.
- **One stack of kept cards with its own Back and Forward** (draft 1). Too abstract: what is kept, where closed things go, and a second history to reason about. Three fixed tabs and a Recently viewed list inside the Codex replace it. Keep, Pin and Recently closed are cut.

---

## 3. Writing

### 3.1 Chapters, parts and scenes

The typed rules of draft 1 stand: `Chapter`, `Chapter 7`, `Chapter 7: Lena's warning`, `Part One`, a bare number only when the first chapter was one, and the project language's words. Two additions:

- **A chapter without the word.** A line given the *Chapter heading* style (`Ctrl+1`, or the style chip) starts a chapter whatever it says. Its number comes from its position and shows faintly in the margin and in the navigator; the Book layout decides what prints ("SEVEN", "7", title only).
- **A short typed vocabulary, not Markdown.** `***`, `* * *`, `#`, `---` or three blank lines make a scene break; `*word*` or `_word_` makes Emphasis; `> ` starts a Block quote. Each is an auto-fix with its mark, undone by `Ctrl+Z`, and listed in Help ▸ "What Libreto reads as you type". Nothing else is converted.

**Scene breaks** are shown as a soft horizontal rule, gray, fading at both ends, with the hover "Scene break". Typing `***` turns into one at once; the rule is the sign that something happened, and `Ctrl+Z` turns it back into text. **Detected scenes** (a change of time or place with no typed break, found by a script and confirmed by the small model at level ≥ 1) get a fainter dashed rule with the hover "Scene, detected"; a click offers *Make it a break* (prints as the ornament) or *Not a scene* (removed, not proposed again). Detected boundaries print nothing. Both kinds live in the index, show in the navigator and in Cards, and are the units the AI reasons about.

**Scene titles.** A scene's name is its first words at level 0 and a one-line summary from the small model at level ≥ 1. A name the writer typed is kept whatever happens to the text, and dropped only when the whole scene text is deleted. If the text no longer fits a typed name, Libreto adds a task ("'Lena lies about the back room' no longer mentions the back room. Rename / Keep").

### 3.2 Adding chapters and scenes

| Where | What happens |
|---|---|
| **Insert ▸ New chapter** (`Ctrl+Enter`) | A chapter heading at the cursor's paragraph. Text after the cursor becomes the new chapter's first paragraph; undo puts it back. The heading reads "Chapter N" with the cursor after it, ready for a title. |
| **"+" in the navigator** | Menu: *Chapter after this one*, *Part*, *Scene break here*. The new chapter goes after the selected chapter, or at the end if none is selected; the page scrolls to it and the cursor sits in the heading. |
| **Cards view**, "+" in a group | A new empty scene at the end of that group, added to the text as a scene break plus an empty paragraph. |
| **Typing** | The rules above. |
| **Scenes** | Insert ▸ Scene break (`Ctrl+Alt+Enter`), right-click ▸ Scene break here, or typing. A detected scene needs nothing. |

In the whole-book page a new chapter appears inline; in a narrowed chapter the page moves to the new chapter and narrows there. Front matter is one navigator row; clicking it opens the generated pages read-only, with a link to Project ▸ Info where their data lives.

### 3.3 Auto-fixes and their marks

Three severities as before: **Auto** (applied as you type), **Review** (a task), **Info**.

The mark on an Auto fix depends on its size. A changed word gets a faint dotted underline on the **whole word** ("teh" → "the"). A tiny change that would be invisible on a word (a comma added, a space removed, a straight quote curled) gets a small dot in the margin at that line. Both fade after a minute, show "was: teh" on hover, and a click undoes. Chapter detection marks the heading line the same way.

The **Fixes** filter of the Tasks tab lists them: what you wrote → what it became, chapter, ✓ keep, ✕ undo. Clicking anywhere else on the row goes there; there are no arrow icons. After ✕ the row reads "Undone" with a "Put back" link. The kind filter (All · Typos · Punctuation · Structure) replaces "All kinds". Learning rules as in draft 1: an undone fix is not applied again; typed correctly three times, it is offered as a Review task.

### 3.4 When "Vega" becomes a character, and what it costs

Nothing reads the text per keystroke. Three layers, each cheaper than the next:

1. **On every pause** (typing stops for about a second), scripts re-scan only the changed paragraph: tokenizing, dictionary, punctuation rules, and a match against the **index**, which holds every Codex entry and alias. If Vega is in the Codex, the new "Vega" is recognized at once, free, and lights up under `Alt` or Highlights ▸ Characters.
2. **Candidates** are new capitalized words not at a sentence start, or any word beside a dialogue tag ("said Vega"). A candidate becomes a *provisional* entry after its second appearance (first, with a tag) and is marked faintly. Still free.
3. **Confirmation** by the small model runs in **batches**: after a 30-second pause, at session end, or on AI ▸ Update codex. The batch sends each candidate with its sentences, about 300 tokens each, never the book. Twenty candidates are about 6,000 tokens, well under a cent at Haiku's input price. The model confirms the kind, merges aliases ("Lena", "the bartender") and writes the one-line description. A 2,000-word session costs a few thousand tokens in total.

So a known name is recognized as it is typed; a new name is provisional within seconds and confirmed within a minute of a pause. At level 0 provisional entries wait for the writer's one-click confirmation in the Codex tab.

### 3.5 Clicking a highlighted thing

Everything clickable in the text shows under `Alt` or through Highlights. A click behaves by kind:

| Kind | Click | Double click |
|---|---|---|
| Character, place, thing, motif | Peek: the card | Codex tab at the entry |
| Note or task badge | Opens that note in the Tasks tab (or as a peek if the Desk is closed); a task opens its choice block in place | |
| Auto-fix mark | "was: teh · Undo" | |
| Styled passage | A chip with the style name: change it, or remove it | Styles palette |
| Chapter or part heading | Peek: the chapter line, words, scenes | Navigator at the chapter |
| Scene rule | "Scene break" or "Scene, detected" with its two choices | |
| Passage in another language | Language chip | |

The **Highlights** menu is checkboxes, each kind its own color, chosen individually; nothing is all or nothing. `Alt` shows everything regardless of the checkboxes. "Styles with names in the margin" labels Block styles at the first line of each block; Inline styles show as a tint and name themselves on hover, so two styles on one line never fight for the margin.

---

## 4. Navigation

**Back and Forward** (`Alt+Left` / `Alt+Right`) move the cursor through the places it has been; every jump pushes a place. Undo and Redo sit beside them and act on the text only.

**Hold `Alt`** half a second: everything clickable lights up by kind; `Alt+click` opens the peek. Right-click ▸ Look up is the second path.

**Peek → Codex tab → Codex window.** One object, three sizes. A peek is a floating card anchored to its word; it moves with the scroll and closes when the word leaves the screen, on `Esc`, or on a click outside. Its title opens the Codex tab; "Expand" opens the window.

**Navigator.** Front matter, parts, chapters and scenes only; the Codex has left it for the Desk. Any row with children has a chevron on hover; the current chapter is always expanded and highlighted as the text scrolls. Counts are a narrow right column of **colored dots with numbers**, "1 ● 2 ●", note color and task color, the same two colors as the badges in the notes column and the Highlights menu; hover says "1 note · 2 tasks". Long titles wrap. The filter box filters by name. Single click = peek; double click = go.

---

## 5. Notes and tasks

### 5.1 Notes

A note is anchored to a paragraph or a selection, with a type and an author. Created with the "+" that appears on hover at the right of any paragraph (always, column open or not), right-click ▸ Add note, or `Ctrl+Shift+M`. A paragraph can hold any number of notes.

**Connection, visually.** Each paragraph with notes shows its badges in the gutter between the text and the column, one per note in the note's type color, up to three then "+2". Notes sit level with their paragraph when they can; colliding notes push each other down. Nothing is drawn until a note is selected: then badge and card take the note's color and a short **horizontal** line joins the badge to the card's left edge; if the card cannot be level, the line turns once at a right angle, never a diagonal. Lines start at the badge, so they scroll with the paragraph. Type chip, Resolve, Edit, Delete as before. "ch. 2" inside a note is a link.

### 5.2 Tasks

A task is a note that asks for a decision. The Tasks tab lists them with one badge family shared with the column, the navigator and `Alt`. Two ways to work, as before: **Review all** (one by one, with "3 of 12" and Next) or **fix in place** (click the badge, no Next). The **choice block** has Keep mine · Take proposed · Not an error; each type of task shows its own block (a proposed fix shows before and after; a doubt shows the note and a Resolve; a placeholder shows a field). "Not an error" says what it does only on hover.

---

## 6. Search, commands, find

### 6.1 Commands

A **command** is anything Libreto can do, by name: "New chapter", "Workspace: Plan", "Highlight: Characters", "Open the Codex at Lena", "Export PDF", "Go to chapter 9". Menus run commands; Search & ask lists them when the typed text matches; the AI runs the same list, which is how it opens tabs and links to places. One list, three doors.

### 6.2 Search & ask

The box sits at the right of the top strip. Clicking it or `Ctrl+K` **expands it in place**: the field widens leftward and a results panel drops below it over the dimmed page; nothing jumps to the center. Inside the field: the provider's icon at the left (gray when no AI is connected), the text, a send arrow at the right. No X and no magnifier: `Esc` clears, a second `Esc` closes, a click outside closes.

Results in three groups, each capped at five rows with "Show 27 more": **Commands**, **In the book** (Codex entries, then passages by scene), **Ask** (the typed text plus up to three questions built from this book). Nothing is preselected; one line under the field says what `Enter` does. Quick answers come from the index and the small model; "Continue in chat" hands the thread to the chat.

### 6.3 Find and Replace

`Ctrl+F` opens a clean strip; `Ctrl+H` opens Replace with the last values; `Esc` leaves the cursor at the hit so the writer can edit it and reopen. "?" beside the regular expression checkbox opens a one-page reference with a small tester field, built in, with a link to regex101 for more.

---

## 7. Chat

- **History**: the title is a menu listing conversations by date; "Search chats" looks at titles and contents and sorts by relevance with the date shown. **New chat** is a labeled button at the top right of the chat, not a bare plus.
- **Titles**: the small model names a chat after the first exchange and renames it when the topic has moved (checked every few messages); the writer can rename. The AI can read old chats: they are indexed, and a relevant past exchange is retrieved ("on October 28 you decided Lena's car is green").
- **Scope chips are gone.** The AI always has the whole book available and decides what it needs.

**Token handling, honestly.** "The whole book" does not mean every message carries the book. Each message carries the Codex summary (a few thousand tokens for a novel), the open scene, the passages retrieval finds for the question, the paragraph under discussion, and the conversation, summarized when it grows. A question about a whole chapter loads that chapter (4,000 words is about 5,500 tokens). The full book, about 120,000 tokens for 90,000 words, is loaded only for a whole-book review, with prompt caching so the second review of the day costs a fraction of the first. The AI menu shows this session's and this month's cost.

---

## 8. History, sessions, statistics

### 8.1 Sessions

A **session** is measured by activity. It starts with the first keystroke, click or navigation and ends after twenty minutes without input in Libreto. Time counts only minutes with input, so a coffee or a movie adds nothing. Scripts record per session what draft 1 listed; the small model writes one line per pattern at level ≥ 1.

### 8.2 History

The History button opens the History view over the page: **every session, one line each**, grouped Today · Yesterday · This week · Earlier (by month), with day and hours, words added, and the one-line summary. The latest row is labeled **Last session**; one click opens its briefing card. Any row opens the same card for that session: the lines, each a link, and "See all changes". Questions in words ("when did I write about Lena's car?") go through the field at the top.

The **session briefing** at the start of a session shows the last session's card. Closing it animates it into the History button, which **pulses twice**. No "Click a line to go there": the rows light on hover.

### 8.3 Compare and old versions

"See all changes" opens **Compare**: the old version on the left, today on the right, scrolled together. Paragraphs are matched by their stable ids, with similarity as a fallback for splits and merges; a paragraph deleted one day and a new one written later show as a removal and an addition, not a change. The coloring is explicit: on the old side, text that differs from today is tinted amber and is exactly what **Restore this** brings back; its counterpart on today's side is tinted the same; unchanged text is plain. "Only differences" folds the rest. Red is for one thing only: the banner "You are viewing the version of Thursday, November 5. Back to today", with a tinted frame, here and in "View the book as it was then".

### 8.4 Statistics

Statistics is a view over the page, reached from the word count in the status bar (click: chapter total, book total, Statistics) and Project ▸ Statistics. Scripts only, free: words per chapter and scene as bars; words per day and per session; active time per session; a grid of characters by chapter colored by mentions; dialogue share, average sentence length, reading time. Every bar is a link. Charts follow one quiet palette and respect the theme.

---

## 9. Styles, shortcuts, highlights

### 9.1 Base styles

A fixed list, each with a known export behavior; the writer cannot add parents or chains:

| Base style | Kind | Exports as |
|---|---|---|
| Plain | paragraph | body text |
| Chapter heading, Part heading, Subheading | paragraph | the heading forms of the Book layout |
| Block quote (letters, documents), Verse (poems, songs), Epigraph, Sign | block | indented block, kept lines, chapter epigraph, centered small caps |
| Scene break | paragraph | the ornament |
| Emphasis, Strong, Thought, Foreign | inline | italic, bold, italic, italic with language |
| Material | any | never exports |

A **user style** is a base style, a name, a look and a highlight color, one level deep. "Book title" is Emphasis under another name. Why no chains: export and the AI need a flat answer to "what is this", a chain of custom parents makes that unanswerable, and a writer who wants two variants makes two sibling styles. The New style dialog stays as drawn.

### 9.2 Shortcuts

| Key | Does |
|---|---|
| `Ctrl+1` / `Ctrl+2` / `Ctrl+3` | Chapter heading / Part heading / Subheading |
| `Ctrl+I` / `Ctrl+B` | Emphasis / Strong (styles, not raw italic and bold) |
| `Ctrl+Shift+I` | Thought |
| `Ctrl+0` | Plain: removes styles from the selection |
| `Ctrl+T` | Styles palette: a list with a filter, `Enter` applies |
| `Ctrl+Enter` | New chapter |

Every shortcut is in Settings ▸ Shortcuts and Help ▸ Shortcuts: searchable, editable, conflicts flagged, "Reset all". The basics (cut, copy, paste, select all, find, undo) are never surprising.

### 9.3 Styles at hand: the style chip

The selection pill is cut everywhere, including Pro. Instead, the **style chip** in the status bar always shows the style at the cursor ("Plain", "Thought"). Clicking it opens the styles palette, the same one as `Ctrl+T`; with a selection, choosing a style applies it. It is always in the same place, never floats over the text, and does not duplicate the right-click menu, whose Style ▸ submenu stays for mouse users. Writers who never think about styles never notice it; an AI pass at level ≥ 2 can later find untagged italics and ask "Thought or Emphasis?" in one task.

**Highlights** as drawn, with per-kind checkboxes and one color per kind. Tinting is the only look for Styles highlights for now.

---

## 10. Codex

Name still open (question 6). The index of the book: People, Places, Things, Motifs, plus **Research** (the writer's own reference notes and clippings, attached to entries or free). Built as in §3.4; entries carry name, aliases, one line, first and last appearance, mentions, facts pinned to quotes, open questions. Sorted by relevance; minor entries fold under "Minor (34)" and are named by role and place. Hundreds of walk-on characters cost nothing: they stay in Minor until they recur.

It lives in two places and nowhere else: the **Codex tab** (one entry, with lists reachable through the filter and Recently viewed) and the **Codex window** (the whole thing). Own spec.

---

## 11. Book view and book layout

**Book layout** (Project ▸ Book layout, offered the first time Book view opens): a preset or a **custom page size**; margins (inside, outside, top, bottom); body font and size; the **chapter opening**: how "Chapter 7" and its title are set, with the sizes explained in place ("Chapter number 11 pt small caps, chapter title 18 pt, part title 24 pt"); a single checkbox **Start chapters on a right-hand page**; running heads; page numbers; front matter order; break ornament. Layouts are named and saved.

**Book view** lays out the whole book and shows it as **pages to read**: one page or a spread, arrow keys and the wheel turn pages with a short page-turn, a thumb strip at the bottom to jump. Clicking a page selects nothing; the **Return to text** button in the top strip (and `Esc`) goes back to the text at the page being viewed. PDF export uses the same engine.

**Typography is where Libreto shines.** The engine follows TeX: paragraph-wide optimal line breaking, hyphenation from the language dictionaries, widow and orphan control, kerning and ligatures through OpenType, and microtypography (hanging punctuation, slight protrusion into the margin) where the font allows. v1 ships optimal breaking, hyphenation and widow control; protrusion follows. Own spec; engine candidates in §19.5.

---

## 12. Cards view

Scenes as cards in groups the writer names. Dragging previews the new order and shows **continuity warnings before the drop**, computed by a **script over the index**, instantly and free: each scene lists its entities with a "first appearance" flag, the facts pinned inside it, and any ordering an earlier review recorded ("after: Vega meets Lena"). Moving a scene before the first appearance of someone it treats as known, or before a fact it relies on, raises the warning. The script only knows what the index knows; after **Apply**, at level ≥ 2, a review reads the two scenes and may add a task for what the index missed. Overlays deferred.

---

## 13. AI presence, levels, token economy

**Status** is the provider's icon at the right of the status bar: in color when connected, gray when not, pulsing while working. Hover says "Claude · connected", "Not connected: click to sign in or add a key", or "Working: indexing". Click opens the small menu: what is running, the level, cost this session and month, connect or disconnect, the provenance log (§17), in Pro the prompt preview. Anything that needs the AI while disconnected opens the connect dialog.

**Levels** as in draft 1: 0 Off (scripts and index), 1 Quiet (small-model micro calls), 2 Reviews (big-model reviews at session end or on request), 3 Proactive (reviews in the background while the writer pauses). **Cheapest answer first**: script, index, small model with a minimal prompt, big model with excerpts; every call above the index is logged with what it sent.

**Providers.** Claude through MCP with Claude Desktop on macOS and Windows; an API key everywhere, Linux first; other providers later through the key path, each with its icon. Help ▸ "Connecting an AI" shows both paths with screenshots.

---

## 14. Settings, dialogs, buttons

**One dialog style**, one button style app-wide: primary filled, secondary outlined, icon buttons the same height; same corner radius; same spacing. **Tab** moves through every control in reading order with a visible focus ring; `Space` and `Enter` activate; dialogs trap Tab; `F6` moves between areas.

**Settings** is one dialog with a short list on the left. All tabs, sketched:

| Tab | Holds |
|---|---|
| General | App language · Theme: Light, Dark, Sepia, System · Open last project on start · Session briefing on/off |
| Writing | Auto-fix categories on/off · Scene detection on/off · Dictionary and leave-alone list · Typed vocabulary on/off |
| AI | Provider and sign in or key · Level · Small local model on/off · What is sent (one paragraph, "Show the log") · Cost this month · AI writing disclaimer (§17) |
| Appearance | Page font for display (not for print) · Default zoom · Dimming of the top strip · Note and task colors |
| Shortcuts | The list, searchable, editable, Reset all |
| Files and backups | Projects folder · Backup folder and frequency · Where History lives · Export defaults |

Each tab has a "?" that opens Help at its topic. Anything per book lives in Project ▸ Info or Book layout. Light theme is the default; Dark and Sepia are full themes, not inverted colors.

---

## 15. Help

Nobody reads a manual; help has to be where the question is.

- **Contextual**: a "?" in every dialog and every Desk tab header opens the Help tab at that topic; `F1` opens help for whatever has focus; every control explains itself on hover, with its key.
- **The help is a book.** The help content is written as a Libreto project (chapters, scenes, a codex of terms) and indexed by the same engine, so Search & ask answers "how do I add a chapter?" from Help with a link, the chat can quote it, and the Help tab is navigated like the navigator. The Codex entries of the help are the app's terms: Desk, Codex, auto-fix, scene break.
- **Tutorials**: twenty seconds each, one per feature, shown once when the feature first becomes relevant (the first note, the first time `Alt` would have helped), replayable from Help ▸ Tutorials. The first run shows three: the page, the navigator toggle, Search & ask.
- **Menu search** lives in the Help menu, as in macOS and Word's "Tell me".

Models worth copying: **Scrivener's** interactive tutorial is a project you edit while reading it; **Obsidian's** help is a vault opened in Obsidian itself, navigated with the app's own tools; **Linear** answers `?` with a searchable shortcut sheet and a contextual help menu that never leaves the screen. Libreto takes help-as-content from the first two and the `?` sheet from the third.

---

## 16. Sharing with an editor and version safety

The rule: **the author's working copy is never replaced by a file that comes back.** Everything below follows from it.

- **Sending.** Project ▸ Share ▸ Send to a reader takes a named snapshot ("Sent to Marta, November 7") and exports a Libreto package (the project without History) or a DOCX in which every paragraph carries its id, so comments come back anchored. With an email tool connected, the AI drafts the message with the file attached; otherwise Help shows the two steps.
- **Receiving.** Project ▸ Share ▸ Receive an annotated copy looks in Downloads (or a folder the writer points to) for a file carrying this project's id and a known snapshot id. The AI helps with the non-writer steps when tools allow: "Click Download in Marta's email; I will pick it up from Downloads." A file without the ids is offered only as a separate project, with a warning, never merged.
- **Three-way compare.** Import opens Compare with three columns: the snapshot as sent, the reader's copy, and today's text with the author's changes since. Comments become notes with the reader as author; the reader's text changes become tasks with choice blocks (Keep mine · Take theirs); a paragraph changed by both is flagged side by side. Nothing enters the text without an accept.
- **Never a stale copy.** The imported file is never opened as the working project; the snapshot is kept so a second round compares against the right base; the status bar names the project folder so two copies on disk cannot be confused.

---

## 17. AI ethics

Should Libreto let a book be written entirely by the AI? The code is open, so a restriction is a prompt away from being removed; a rule nobody can enforce is a bad rule. The proposal is transparency instead of prohibition:

- A **disclaimer** when an AI is connected, once, in plain words: AI text may raise copyright, contest, and disclosure problems; use at your own risk; Libreto records what the AI wrote.
- A **provenance log**: every AI-proposed text that enters the manuscript through an accept is recorded in History with its source (fix, review, chat), and the Authorship highlight shows it in the text. Project ▸ Statistics can report "words proposed by the AI and accepted: 3.2%", exportable for a publisher who asks.
- No feature "write the next chapter" in v1. The chat can draft a passage when asked, delivered as a choice block like any other edit.

The decision on whether to go further, in either direction, is the owner's (question 9).

---

## 18. Workspaces, Focus, start screen, accessibility

**Workspaces** are presets of open areas, highlights and AI level, named by the task: Write, Plan, Research, Review, Everything (table in §23.2). "Reset" in the Workspace menu returns to the preset.

**Focus** hides everything but the text, with no word count; moving the mouse fades in Exit focus. **Start screen** as drawn; other project types (screenplay, essay collection) may need their own required fields, settled by a short research pass before v1. **Accessibility** as in draft 1: everything in menus and `Ctrl+K`, `F6` and `Esc`, names for screen readers, a high-contrast theme.

---

## 19. What the research adds

### 19.1 Claude inside the app with the writer's own login

Unchanged: Anthropic does not permit third-party apps to offer Claude.ai login or route through consumer plan credentials (Claude Code legal page, February 2026); no public "Sign in with Claude" exists. Allowed and using the subscription: a local MCP server installed in Claude Desktop as a `.mcpb` bundle plus an MCP App, macOS and Windows. Spawning the writer's signed-in Claude Code is a gray area JetBrains avoids. Haiku costs $0.10 / $0.50 per million tokens; a note-type classification is about $0.00004. Proposal unchanged: MCP where possible, API key everywhere, scripts and index for levels 0 and 1, a written request to Anthropic.

### 19.2 File format

Unchanged: Djot (`.dj`) over Markdown, because ids and styles on any block or span are part of the syntax and survive pandoc; a one-day round-trip test first. Paragraph ids make History's diffs, the notes' anchors and the editor round trip (§16) possible.

### 19.3 Lessons from our own tools and from writers

literary-critic (findings pinned to quotes, "ask the codex before reading the text"); docx-fixer (Auto / Review / Info); opos (focus mode, stable paragraph ids, notes that follow a rewritten paragraph); integral-job-search ("declined twice is not raised again"). Writers keep Scrivener for organizing and leave it for writing, want scene units and a seamless whole-book view, find hand-maintained links "an enormous amount of work", and count any AI draft as AI-written. Hence one page with narrowing, automatic links, AI quiet by default, provenance recorded.

### 19.4 UX patterns adopted

One quiet mark per correction (Gmail, LanguageTool); a find strip that never covers the text (VS Code, Chrome); margin notes that push each other and connect only when selected (gwern.net, Word); a peek that needs a click (Obsidian); fixed side tabs with a toggle icon at the window's edge (Xcode, Figma); a chat that docks in a column and can be torn off (VS Code); help as a document the app opens in itself (Obsidian, Scrivener); views in the status bar (Word).

### 19.5 Typography engines

Three candidates for Book view and PDF: **Typst** (open source, Rust, optimized paragraph breaking, hyphenation, hanging punctuation, fast enough to relay out a book on each change) is the strongest; **Paged.js** (CSS paged media in a browser engine) is simplest to embed but breaks lines one by one with no microtypography; a **LaTeX** toolchain gives the reference quality at the cost of a heavy install. A spike of one chapter in each, measured on rivers, hyphens per page and widows, decides.

---

## 20. Priorities, cuts, deferrals

Not all features matter equally. Rough column: **v1** ships first; **later** waits for a real writer's feedback.

| v1 | Later |
|---|---|
| Text view, navigator, Desk with Tasks and Codex, chat in the column, Search & ask, Find and Replace | Codex window, Research entries, chat tear-off to a second monitor |
| Auto-fixes with marks and the Fixes list; chapter, break and scene detection | Scene detection by the small model at level 1 beyond breaks and place changes |
| Notes column, tasks, Review all, choice blocks | Reviewer round trip with three-way compare (§16), DOCX comment import |
| History with sessions, briefing, Compare, restore | Questions in words over History; pattern lines beyond the scripted ones |
| Styles: base list, user styles, chip, shortcuts | Style labels in the margin; AI style pass |
| Book layout and Book view with optimal breaking, PDF export | Microtypography, EPUB, several layouts per project |
| Settings with the six tabs; Light and Dark; Help tab with contextual topics and three tutorials | Sepia, the full help book indexed for Search & ask, all tutorials |
| AI levels 0 to 2, Claude by key; provenance log | Level 3, MCP path, other providers, local small model |
| Cards view with groups and script warnings | Cards overlays; Statistics beyond words per chapter and per day |

**Cut**: the Side panel with its stack, Keep, Pin, Recently closed; the selection pill everywhere; chat scope chips; "Click a line to go there" and all hint text outside hovers; diagonal arrows; Codex in the navigator; "title page · dedication" under Front matter; "Enter to send"; the menu search box in the menu bar; the Focus word count; everything in draft 1's cut list.

**Defer**: chat docked elsewhere than the right column; Cards overlays; custom Codex fields; story time; blurbs; EPUB; share links; character pictures; local models; providers beyond the key path; AI-written chapters (§17).

**Merge**: notes, to-dos, placeholders, AI findings, tracked changes and auto-fixes → one list in the Tasks tab; peek, Codex tab, Codex window → one object at three sizes; help, tutorials, shortcuts → the Help tab; snapshots, compare, "what changed since sent" → History; ask the book, search, command palette → Search & ask.

---

## 21. Questions for the owner

1. The Desk with three fixed tabs (Tasks, Codex, Help) and the chat in the lower part of the column: accept as the model? Alternative names for the column: Desk, Sidebar, Reference.
2. The style chip in the status bar as the replacement for the selection pill: yes?
3. `Ctrl+1/2/3` for headings, `Ctrl+I/B` for Emphasis/Strong styles, `Ctrl+T` for the styles palette: yes?
4. Sessions end after twenty minutes without input, and the briefing shows after six hours away: fine, or other numbers?
5. The typed vocabulary (`***`, `*word*`, `> `) as auto-fixes, nothing more from Markdown: yes?
6. Name for the Codex: Codex, Story bible, Cast & places, Who's who?
7. Name for History: History, Sessions, Timeline?
8. Typography engine spike (Typst, Paged.js, LaTeX) before the Book view spec: run it?
9. AI ethics: transparency with a disclaimer and a provenance log, no hard restriction, no "write the next chapter" in v1: agree?
10. Replace on `Ctrl+H` with `Ctrl+R` as an alias: fine?
11. The v1 / later split in §20: anything to move?
12. Djot round-trip test and Linux without the subscription path: still yes?
13. Workspaces named by task (Write, Plan, Research, Review, Everything) instead of Just write, Planner, Reviser, Pro: yes?
14. "Panels off" on `Ctrl+\` as the one way back to the page, besides Focus: yes?
15. Research stored as Codex entries in the project's `research/` folder, no web browser inside Libreto in v1: fine?
16. Should the AI search the web for research (costs tokens, needs a provider that can), or only read what the writer brings?

## 22. Specs needed later

History engine (snapshots, sessions, diffs by paragraph id, Compare, restore) · Book layout, typography engine and export · Codex (extraction, aliases, relevance, minor entries, research, the window) · Auto-fix rules per language and the typed vocabulary · AI levels, providers, costs, logging and provenance · Search & ask, commands and retrieval · Chat (titles, history, retrieval of past chats) · Sharing and three-way compare · Help book and tutorials · Statistics · Storage (Djot and file layout).

---

## 23. Sessions and flows

How a writer gets the screen ready for a task, moves around, and gets back to the page. Screens S25 to S28 show the extremes: everything open, panels off, and every menu open at once.

### 23.1 Three gestures

1. **Pick a workspace.** One click on the workspace name in the status bar, or `Ctrl+K` and its name. It sets the open areas, the Desk tab, the highlights and the AI level together. Workspaces are named by what the writer is about to do.
2. **Adjust by hand.** The toggles at both ends of the strip (navigator, Desk), the Chat button, Highlights. When the layout no longer matches the preset, the workspace name shows a dot ("Write ·"); choosing the workspace again resets it.
3. **Back to the page.** `Ctrl+\` (View ▸ Panels off) closes navigator, notes column, Desk and chat in one go and quiets the highlights; pressing it again restores exactly what was open. Focus (`Ctrl+Shift+Enter`) goes further and hides the strip and status bar. `Esc` only closes transient things (peeks, menus, the find strip) and returns the cursor to the page; it never closes a panel.

Libreto reopens a project in the layout it was closed in. After six hours away the session briefing offers the next session as buttons, with what is waiting: *Write* (chapter 7, where you stopped) · *Review* (5 tasks) · *Research* (2 new clippings).

### 23.2 Workspaces

| Workspace | Navigator | Notes column | Desk | Chat | Highlights | AI |
|---|---|---|---|---|---|---|
| **Write** | closed | closed | closed | closed | spelling, auto-fixes | quiet (level 1) |
| **Plan** | open | closed | Codex | closed | characters, places | level 2; Cards view one click away |
| **Research** | open | closed | Codex on Research | open | characters, places, things | level 2 |
| **Review** | open, with counts | open | Tasks | on demand | notes, tasks, auto-fixes | level 2 |
| **Everything** | open, with counts | open | Codex | open | all, with style names | the writer's level |

A writer who changes a workspace and likes it can choose "Save as Write" in the Workspace menu; "Reset" goes back to Libreto's preset.

### 23.3 A writing session

1. Open the project: the cursor is where it was, in Write.
2. Write. Unknown names, typos and doubtful commas get quiet marks; nothing interrupts.
3. A doubt about a character: hover the name for a peek; "Open full card" opens the Desk on the Codex beside the page. `Alt+3` closes it again.
4. A thought for later: `Ctrl+Alt+M` adds a note at the paragraph without leaving the sentence.
5. Moving: the breadcrumb for the chapter or scene, `Alt+1` for the navigator, `Ctrl+K` "go to 9", `Alt+←` to come back.
6. Close the window. The session is saved with its time and words; History lists it.

### 23.4 A research session

**Where research lives.** In the project, as **Research entries** in the Codex: a title, the writer's own notes, the sources (images, PDFs, web links, quoted passages) and links to people, places, things and chapters. On disk, the project's `research/` folder holds one Markdown file per entry plus its files (storage, R-43), so research travels and backs up with the book. It is never part of the manuscript, its word count or its export.

1. Choose Research. The Desk opens on Codex ▸ Research, the chat below it.
2. Bring material in. Drag a file, an image or a link onto the Codex, or onto a name in the text to link it at once ("photo of the Blue Lamp's bar" onto *Blue Lamp*). Or Insert ▸ Research…. Or paste a link in the chat and ask "keep this": the AI makes an entry with a summary and the source.
3. Pin facts. Select a passage in a clipping and choose "Pin as fact"; it shows on the entry's card and in continuity checks.
4. Use it while writing. Hovering a place shows its research picture in the peek; Search & ask finds text inside research; chat answers cite the entries they used.
5. Not in v1: a web browser inside Libreto. Links open in the system browser; dragging a page back makes an entry.

### 23.5 A review session

1. Choose Review. The navigator shows note and task counts per chapter, the notes column sits beside the text, the Desk is on Tasks.
2. Optionally ask for a pass: AI ▸ Review this chapter. Findings arrive as tasks in the list, never as edits.
3. "Review all" walks the list one item at a time: the page scrolls to each, Enter accepts or resolves, Tab skips. Proposed text appears as a choice block with Apply.
4. Work from an editor: File ▸ Send to an editor, later receive their copy and compare (S21).
5. Done when the counts reach zero; History records "Review · 14 tasks".

### 23.6 Changes this round

- Workspaces renamed by task and **Research** added: five presets instead of four.
- **Panels off** (`Ctrl+\`) as the one key back to the page; `Esc` never closes panels.
- A dot on the workspace name when the layout differs from the preset; "Save as …" per workspace.
- **Seven menus**: the Project menu is gone (settings and export to File, statistics to View).
- Paste as plain text is `Ctrl+Alt+V`, because `Ctrl+Shift+V` cycles the views.
- The session briefing offers the next session as buttons.
- Research entries: storage and the ways to add them defined (§23.4).
