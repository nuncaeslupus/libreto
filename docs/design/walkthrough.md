# Libreto, a walk through the window (concept draft 5)

Status: **for annotation.** One document, in the order a writer who has never seen Libreto would meet things. Before each screen, a short paragraph says how you get there, what it is for and what it lets you do; then the picture. Not a guide and not a specification. The pictures are in `concepts-d4/`; the review page puts a note field under each one.

Draft 5 answers the notes on draft 4 (screens 1 to 8 so far) and keeps draft 4's answers to the draft 3 notes. What changed, and why, is at the end, with the open questions.

## Libreto in one minute

Libreto is a writing app for books. Its window is a **page in the middle**, with two columns that can open beside it and never move it: on the **left**, a list of what you are working on (the chapters; in Research, your material); on the **right**, the **Reference panel**, which shows one thing at a time: a person, a place, a research topic. Along the top, five **modes** name the job you are doing: **Write, Plan, Research, Review, Book**. Choosing one dresses the same window for that job; it never takes you somewhere you cannot come back from with one key.

The AI has **one door**: the round **Ask** button at the bottom right of the window, or `Ctrl+K`. The same box finds a chapter, looks up a name, runs a command ("export PDF") and asks a question about the book; when the question needs the AI, the box becomes a conversation. The AI can do anything you can do in Libreto, but it never changes your text, your chapters or your cards without a button you click first. When no AI is connected, the button is gray and the box still finds, looks up and runs commands.

Six rules hold everywhere:

1. **The page never moves.** Columns open in the margins; the text stays centered.
2. **One family of marks.** Red, blue and green underlines on the exact characters; small icons in the right gutter at the exact line; the same icons count in the chapter list, in the Review list and in the Highlights menu.
3. **One way back.** `Esc` closes whatever just opened and returns the cursor to the text; `Back` (`Alt+←`) returns from any jump, across modes too; `Ctrl+Shift+H` hides both columns and brings them back.
4. **Nothing replaces your words unasked.** Fixes while you type are small, green and undoable; everything else arrives as a proposal with buttons.
5. **Keys that exist on every keyboard.** Letters, digits, F-keys and Enter with `Ctrl`, `Shift` and `Alt`; no brackets, slashes or backslashes.
6. **One Undo, one notice.** Everything that changes the text, yours or Libreto's, is one list: `Ctrl+Z`, the Undo on a notice and the ✗ on a card are the same step. A notice is a card at the bottom of the page, never on a timer, and a line in History.

| Mode | Left | Center | Right | What it is for |
|---|---|---|---|---|
| Write | chapters (optional) | the text | Reference (optional) | writing; the default |
| Plan | none | cards, the whole window | the clicked card's detail, beside it | seeing and reordering scenes |
| Research | your library: the Codex (what the book says) above your topics (what you gather) | a topic or a Codex entry, large | what it links to | gathering and sorting material |
| Review | chapters with counts and filters | the text, margin open | notes beside their lines | the second pass |
| Book | page thumbnails | spreads | layout settings | printing and exporting |

History, Compare, Statistics and Help are not modes: they open **over** the window as a sheet with "Back to the text" at the top left, and `Esc` closes them.

## s01-start: Start

When Libreto opens with no book, it asks for the least it can: a title, what kind of text it is, and where to keep it. The **kind of text** is a row of plain choices (Novel · Novel without parts · Short story · Play · Essay · Plain text) and each one is only a set of names for up to three structure levels: a novel has parts, chapters and scenes; a play has acts and scenes; a short story has scenes; plain text has none. Those names are then used everywhere (the left list, the Insert menu, the Plan lanes, the printed book), and a book can gain or lose a level later from the Insert menu, so the choice is a start, not a cage.

Under the location there is no sentence to parse anymore. A label, **"Will be stored in"**, and under it the **full path on one line**, growing as you type the title; characters a folder cannot hold are dropped from the folder name as you type (the title keeps them). The line under that is always there: one folder per book, inside it the text as plain Markdown files, one per chapter, readable in any editor without Libreto; notes, research and history in their own subfolders. "Documents/Libreto" is the default (on a Spanish system it reads "Documentos/Libreto"); "Change…" picks another place and the path updates.

Each book gets a **cover tile**: a colored square with the title's initial by default, a picture if you drop one, or a small sketch from the AI when one is connected ("Sketch a cover" under the tile). The tile shows here, in the recent books, and on the Book mode's title page until a real cover replaces it. Recent books open with one click; "Import a Word file" turns a manuscript's headings into chapters.

## s02-write-first-minute: Write, the first minute

A new book opens on its first chapter in Write mode, both columns closed. The heading reads "Chapter 1" in gray: a placeholder, since a numbered chapter needs no title, and typing replaces it. The top strip has the left toggle, Back, Forward, Undo and Redo, then **where you are** (chapter › scene, each a menu of its siblings) with all the room it needs, and at the right end the five **modes** as a pill, next to the right toggle. The pill is the same width everywhere, so the eye learns its place; the breadcrumb grows and shrinks beside it, and on a narrow laptop with a large font it is the breadcrumb that gives way, never the modes. The status bar shows the style at the cursor (in its own look), the words, the page this would be in the printed book, and how many small fixes Libreto made; **every item that opens a menu looks like it does**, with a soft background and a small ▾. The round **Ask** button at the bottom right is the AI's door; its tooltip says `Ctrl+K`.

The marks are the thing to look at. Three underline colors, always on the exact characters: **red** dotted for a word Libreto does not know and cannot fix alone, **blue** dotted for grammar or punctuation it proposes, **green** dotted for a change it already made. The rule for what gets done without asking is short: **Libreto changes by itself only what has one possible answer and does not touch meaning**: a word that is not a word with exactly one correction one slip away ("teh", "recieved", a doubled letter, a missing apostrophe), a space before a comma, a double space, straight quotes to curly. Two possible answers ("quite" or "quiet" are both words), agreement ("the letters was"), anything longer than a word: proposed, in blue. When a fix happens, the red underline fades to green in under half a second and the icon appears in the gutter; the text never moves. In the right gutter, **one icon per line**, with a small count when a line holds several.

**Hovering any mark**, or resting the cursor inside it and pressing `Ctrl+.`, opens the same small card everywhere: a title that says what happened ("Fixed · typo", "Proposed · grammar"), **Was** and **Now**, and two buttons, ✓ and ✗ (`Enter` and `Delete` while the card is open; `Esc` closes it). `F8` and `Shift+F8` jump to the next and previous mark. A grammar proposal is **one underline under the whole affected text**, never two underlines for one problem. One word carries one underline: red before blue (spelling is settled before grammar is judged), blue before green (an open proposal shows over a done fix); the gutter icon still counts both.

## s03-marks-up-close: The marks, up close

Not a moment in the app: the family of marks at twice the size, so the rules can be checked once. Underlines: red = unknown word, blue = proposed, green = done by Libreto; a **dashed gray** underline or rule = structure Libreto proposes but has not made (a detected chapter heading, a detected scene break). Nothing exists until you keep it: a proposed heading stays an ordinary paragraph, and only "Keep" styles it as a heading and starts the chapter file at the next save. Gutter icons at the exact line: an amber **note**, a blue **task**, a green **fix**, a dashed gray **proposal**; one icon per line, with a count when a line holds several. **Clicking a count** opens the stack as a list card: one row per mark, Was → Now, ✓ and ✗, `Enter` walking down the rows. Red marks have no gutter icon: they are the one mark you fix by typing, and their card offers the candidates ("Did you mean…") and "Add to the book's words", which makes a Codex entry. In Review they do appear, as a **Spelling** filter and in the walker.

The same icons, with numbers, count notes and tasks beside each chapter on the left, label the filter chips in Review, and sit beside the checkboxes of the Highlights menu. Review filters by **people, not roles**: You · Marta · AI. Names come from sharing (you name the reader when you send a copy, and the notes that come back carry that name), Word comments bring their author, and anything unnamed is "A reader", renameable; the AI never guesses who someone is. The rule to remember: **dotted green is done, dashed gray is proposed, icons in the gutter are things to look at, and every one of them opens the same card.**

## s04-welcome-back: Coming back

Libreto reopens exactly as you left it: same mode, same chapter, same columns, the cursor where it was. No dialog asks what you want to do. Instead a **notice card** at the bottom of the page says where things stand: when you last wrote, what is waiting (cards not placed, clippings in the Inbox, notes to review), with a button for each. It is on no timer: it stays until you type or click elsewhere, and then **slides into the Ask button**, so you see where it went. From then on, "Where you left off" is the first item in Ask's clock menu, the top suggestion in an empty Ask box, and the first row in History; nothing seen late is lost. The card can be turned off in Settings.

## s05-chapters: Chapters, on the left

Open the left column with the icon at the top left or `Ctrl+Shift+L`. It lists the structure levels by the names your kind of text gave them: parts, chapters and scenes for a novel. Scenes are indented under their chapter with a thin guide line and lighter text, **no bullets**, so nothing on this list looks like a mark. Beside each chapter, the same gutter icons count the notes and tasks waiting there, capped at 99+ (the exact number is a hover away; word counts live on the Plan cards, in Statistics and in the same tooltip). One click peeks at a chapter without leaving your place; a double click goes there; `Back` returns. The filter box at the top matches **titles and text**, so "lena" shows every chapter where she appears, with a count, and the matched letters in a title are highlighted. Nothing finer is offered here: Find (`Ctrl+F`) and Ask do the rest.

Every row has a right-click menu for its level. A **chapter**: New chapter before / after, New part before / after, Rename, Remove the chapter mark (the text joins the previous chapter), Delete chapter…. A **scene**: Rename, Start a new chapter here, Remove the scene break, Delete scene…. A **part**: New part before / after, Rename, Remove the part mark (its chapters stay). Removing a mark never deletes text, asks nothing, and has Undo; deleting does ask, in words that mean something: "Delete the scene 'Vega asks about Kit'? 1,300 words, about 5 pages, go to History." Cutting text from one chapter and pasting it into another is allowed, scene break lines included, and nothing interrupts the paste; if the AI later finds the timeline broken, that is a task in the margin, not a dialog.

**"+ New chapter"** at the bottom adds one after the current chapter, with the cursor in its heading and a notice that says where it went. The same from the Insert menu, from `Ctrl+Enter` (the text after the cursor becomes the new chapter's first paragraph), or by typing "Chapter 8" on its own line. **Dragging a row does not move it**: a small sign under the pointer says "Moving happens in Plan", the Plan mode lights up in the strip while the rest dims, and clicking the sign opens Plan with that chapter's card selected. Structure can grow later: adding the first part puts every chapter in "Part One", and removing the part level keeps the chapters. **Front matter** is the first row of the list, with a title page, a dedication and an epigraph as styles inside it, printed only if filled; **Back matter** closes the list the same way.

## s06-scene-breaks: Scene breaks, typed and detected

A line that holds only a repeated symbol (`***`, `* * *`, `---`, `~`, a single `*` or `-`, any length) becomes a scene break, drawn as a soft gray rule, with a notice ("Scene break · Undo") for the time you meant the character itself. On disk it is a `***` line in the chapter's Markdown file. When the time or place jumps without a break, Libreto proposes one with a **dashed** rule and a dashed icon in the gutter, and the card is the usual one: "Proposed · scene break", Keep or Not a scene. A detected chapter heading looks the same way. The chapter list shows detected scenes in lighter text until they are kept, named by the AI when one is connected (and marked so) and by their first words in gray when not.

A scene break is a block like a paragraph: a click selects it with the same selection color, it is copied, cut and pasted as its `***` line, `Backspace` or `Delete` removes it, and right-click offers "Remove scene break" and "Name this scene…". Insert ▸ Scene break (`Ctrl+Shift+Enter`) puts one at the cursor, in the middle of a sentence if that is where the cursor is, and Undo joins the halves again.

Removing a break merges two scenes, the row fades out of the list and a notice says "Scene break removed · Undo". **Notices are one thing in the whole app**: a card at the bottom center of the page, never on a timer, folding away when you move on, and each one is a line in History's Today list with its Undo. **Undo is one list**: everything that changes the text, yours or Libreto's, goes on it, and the Undo on a notice, the ✗ on a card and `Ctrl+Z` are the same step. Tips use the same card: when Libreto sees you retype what a fix changed, or delete a detected break by hand twice, it offers one tip a day at most ("Undo a fix with Ctrl+Z or the ✗ on its card · Show me · Not this one again"); the tips are a fixed list of recognizable habits, need no AI, live in Help ▸ Tips, and have a switch in Settings.

## s07-styles: Styles

A style says **what** a piece of text is (a thought, a letter, a sign on a door, a chapter heading), not how it looks. The look is chosen later, per book, in Book; on the page every style still shows a plain working look so you can see it: a thought is italic, a sign is small caps. A **chapter** is a container, the file on disk; its **heading** is the chapter's first line in the Chapter heading style, and a chapter without one shows its number in gray, in Write and as the divider in the whole-book view. That is also why applying "Chapter heading" to a paragraph in the middle of a chapter **starts a new chapter there**, with a notice and Undo: a heading is where a chapter begins.

The chip at the bottom left always shows the style at the cursor, written in that style's look. Click it, press `Ctrl+T`, or right-click ▸ "Style as" for the palette: the style names in the ordinary interface font, each with a short sample in its own look at the right, so the list reads as a list and the looks stay visible; a filter box on top, "+ New style…" at the bottom (a name and what it is based on). With the cursor in a paragraph and no selection, a paragraph style takes the whole paragraph, a text style (Emphasis, Thought, Foreign) takes the word under the cursor or, at the end of a word, what you type next. Every menu in Libreto, this one included, walks with the arrows and `Enter`, and typing filters it; icons appear in menus only where the same icon exists elsewhere in the app, so the menu teaches the icon. A scene break is not a style but structure: it lives in Insert, in the right-click menu next to "New chapter here", and under `Ctrl+Shift+Enter`.

When something is wrong by Libreto's own rules (a forty-word heading, two headings in a row), it becomes a task in the margin without any AI; "AI: review this chapter" adds the AI's findings the same way, as tasks, chapter by chapter in the background with a line in the status bar ("Reviewing 7 of 11 · Stop"), and the Review list counts them as they arrive.

## s08-ask-type: Ask: type and go

`Ctrl+K`, or a click on the round button, opens **Ask** at the bottom right: one box for everything. As you type, results appear above the box in five short groups: **Go to** (a chapter or scene), **Look up** (a person, place, thing or research topic, opened in the Reference panel), **Do** (a command, such as "Export PDF" or "Highlight people"), **In the text** (hits for the typed words, with "Open Find" to walk through them), and **Ask** (the typed text as a question, plus one or two questions Libreto builds from the book). `Enter` on the preselected row acts and `Back` returns; `Tab` moves down the list; `Esc` closes the box and puts the cursor back in the text.

**No AI is involved while you type.** The groups come from Libreto's index: chapter and scene titles, Codex names, topic titles, the commands with a few words each ("rename", "highlight", "export"), and the text itself. The order is fixed and plain: an exact name before a prefix before a part of a word, the current chapter first, what you used recently first; the best match is the top row of the first group that has one, so there is no guessing to explain. Each group shows three rows and "4 more…" when there are more. The Ask group appears only when an AI is connected; its questions are templates filled with the name you typed, ready before you ask, and the AI runs only when you press `Enter` there. The same answer goes for the Codex: names, mentions, first appearances and counts are computed; a capitalized name that appears three times is proposed as an entry for you to keep; what the AI adds (facts from the text, summaries, open questions) is marked as the AI's. There is no small model on the device in version 1: the list stays instant and predictable, and an on-device model can come later as a choice in Settings for scene names and checks.

## s09-ask-chat: Ask: a conversation

When the typed text is a question, or you choose the Ask row, the same panel becomes the conversation. It floats over the right side of the window, never over the page, and can be moved, resized, or collapsed back into the button with `–` or `Esc`; a dot on the button says an answer is waiting. The AI reads the whole book through the Codex and the open scene, and answers with links: a chapter name jumps the page there (and `Back` returns), a person's name opens the Reference panel. Its answers carry **buttons** when there is something to do: "Add as a note", "Show both places", "Open in Research", and for any change to the text a before-and-after block with "Apply" and "Skip". Nothing in the book changes until a button is clicked, and every applied change is one Undo away.

The AI has the whole app in reach, through the same commands you use: it can open a chapter, reorder cards, create a task, link a topic to a place, hide a column, start a review. The clock icon lists earlier conversations, with a search; "+" starts a new one; conversations are named by their first exchange. Right-click ▸ "Ask about this" on a selection opens the panel with the selection quoted.

## s10-hold-alt: Hold Alt

Hold `Alt` for half a second and the page shows everything Libreto knows about it: people, places and things tinted by kind, styled passages labeled in the margin, notes, tasks and fixes in the gutter. Release it and the page is clean. `Alt`+click on a name opens its peek. If `Alt` is awkward (it also opens menus on Windows, which Libreto suppresses for a held key), `Ctrl+Shift+A` toggles the same reveal and the Highlights menu keeps any kind on permanently. Hovering does nothing by itself: no card ever pops up because the mouse passed over a word.

## s11-peek-reference: Peek and the Reference panel

`Alt`+click a name, or right-click ▸ "Look up", and a small card says who that is, with the chapters she is in and a picture if she has one. "Open the card" opens the **Reference panel** on the right: the Codex entry for Lena. The Codex is what the book itself says, built from your text and corrected by you: a line about her, where she appears, who she knows, **facts** quoted from the text with their chapter, facts taken from your research with their source, open questions ("about fifty" in ch. 2, "not yet forty" in ch. 8), and the **research topics** linked to her. A picture can be dropped on the card.

Two rules keep the panel from becoming a maze. **A link to the text moves the page** (and `Back` returns); **a link to another entry moves the panel** (and the panel's own `‹` returns). The panel has no tabs and no search box: to look up something else, click its name in the text or press `Ctrl+K` and type it. "Open in Research" opens the same entry at full size, in Research mode.

## s12-everything-open: Everything open, the text in the middle

The most Write can show on a 1440 px laptop: chapters on the left, Lena's card on the right, highlights on, two marks in the gutter, the Ask button over the panel's corner. The page is where it always is: centered on the window, 620 px wide at 100 %. The columns took the margins, not the text. Shown to judge the load; nobody needs this all day.

## s13-hide-and-focus: One key back to the page, and Focus

`Ctrl+Shift+H` closes both columns and quiets the highlights; the same key brings back what was open. The rule is simple: the key restores the layout as it was when you hid it; if you open a column by hand in between, the key just hides again. `F11` goes further: **Focus** leaves only the page, without strip, status bar or Ask button; the mouse brings back a small "Exit focus" at the top, and `F11` or `Esc` leaves. The Focus page keeps the book's paragraph spacing and first-line indent as set in Book; nothing is reformatted.

## s14-note-in-write: A note, without leaving Write

Writing and fixing are the same hour, so notes do not wait for a mode. Right-click ▸ "Add note", `Ctrl+Shift+M`, or the small "+" that appears at the right of the line under the mouse: a card opens beside the line, you type, `Esc` returns to the sentence. The card folds to an amber icon in the gutter at that line; clicking the icon opens it again right there, with a short **line from the icon to the card** and the anchored words tinted, so there is never a doubt which words it is about. Several notes on one line stack sideways.

Three things live in the gutter, and the difference is what they ask of you. A **note** is a remark, yours, a reader's or the AI's, and asks nothing. A **task** asks for a decision: a doubt to settle, a fact to check, a proposed change to accept or reject. A **fix** is a change Libreto already made, there to be undone if wrong. Every card has the same buttons: Reply, Ask (the AI explains or proposes a fix), Done, Delete; **Accept** and **Reject** appear only when a change is attached. Changing a note's kind never changes its buttons.

## s15-review: Review

Review is the same page with the margin open. Choose it when the second pass starts: your own notes, the editor's, the AI's checks and the small fixes, all at once. The left column is the chapter list with counts, plus filter chips (All · Notes · Tasks · Fixes · Editor · AI) so "what did Marta say?" is one click. In the margin, every card sits level with its line and its words carry a faint tint; the selected one moves level with its line, draws its line to the text and tints its words strongly, the others stay quiet and push away when they collide, and several on one line fold into one stack with a count. **Review all** walks the book one card at a time: `Enter` accepts or marks done, `Tab` skips. "AI: review this chapter" adds its findings to the margin as tasks, never to the text. Switching back to Write keeps the same scroll and cursor; the cards fold to icons.

## s16-plan: Plan

Plan shows the book as cards, one per scene, in groups (chapters, or groups you name). Drag a card to move it; before you drop, Libreto warns when the move breaks continuity ("Vega reads the ledger before Kit finds it"). Moves are collected in a bar at the top, "3 moves · Apply · Discard"; nothing changes in the text until Apply, and leaving the mode with moves pending asks once. Groups move as a whole by their header; deleting a group with scenes sends the scenes to **Unplaced**, never away, and Unplaced shows at the end of the chapter list in Write.

A click on a card opens its detail beside it: the scene's line, who is in it, where, the facts it relies on, its words. "Details" shows a second line on every card. Cards carry labels (point of view, status, storyline, timeline, and one of your own), and **"Color by"** chooses which of them paints the cards; the legend at the bottom shows the current one. Point of view and place fill themselves from the Codex; status and storyline are yours. Scenes come from your breaks and from detection; the AI only summarizes them, in the background after a pause, and never creates a task without being asked unless the AI level says so.

## s17-research: Research

Research is where material lives before it is true. The left column is your **library** in two sections that are different things: **Codex**, what the book says (people, places, things, motifs, built from the text), and **Research**, what you gather (an **Inbox** for anything dropped in, then **topics**). A topic is a document like a chapter: a title, text with the same styles, pictures inline, files attached (PDFs, images, links), and a row of what it is linked to. "Bars in the 1950s" need not be in the Codex; Lena need not have a topic. In the center, the topic itself, large. On the right, the Reference panel shows what the topic links to: Codex entries and the chapters that mention them.

Linking is mostly free. Names from the Codex typed in a topic are recognized the way they are in the manuscript, so the topic and the entry know each other at once. The writer adds the rest with "Link to…" or by dragging a topic onto a name in the text. Moving knowledge from research to the Codex is one gesture: select a passage in a topic and "Pin as fact of…"; the fact shows on the entry with its source. The AI helps both ways from Ask: it summarizes a PDF, proposes facts and links as tasks, asks what the Codex still lacks ("Lena's age is contradicted; nothing in research settles it"), and proposes to split or merge topics; the writer can do all of it by hand. Topics are renamed by clicking the title, split with "Move to a new topic", merged by dropping one on another, and deleted to the Inbox.

## s18-codex-entry: A Codex entry at full size

Clicking a Codex name in the library opens the entry in the center, with room: the picture, the line, the facts from the text and the facts from research told apart by their source, who she knows, where she appears scene by scene, the open questions, and the research topics about her. Everything can be edited here, including the name (which renames her in the text and in the topics through "Rename everywhere"). This is the whole Codex, one entry at a time, and the only place it is shown at full size.

## s19-research-beside-text: Research beside the text

While writing, you want one thing: the photo of the bar, two facts. `Alt`+click "Blue Lamp", choose "Research" on the peek, and the Reference panel shows the topic, readable and scrollable, with its pictures. Enough to check and go on. "Edit in Research" opens the topic in the mode, and `Back` returns to the sentence. Gathering happens in Research; using happens beside the text.

## s20-find-replace: Find and Replace

`Ctrl+F` opens a strip at the top of the page; `Ctrl+H` adds the Replace row, the same width. "Whole book" or "This chapter", nothing finer. In the whole book, hits walk across chapters and `Back` returns to where the cursor was. **Replace all** never replaces blindly: it opens a list of every hit in context, each with a checkbox, and a "Replace 27" button. When the found text is a Codex name, the strip offers **Rename everywhere** instead, which changes the text, the Codex and the topics together. "Pattern" turns on regular expressions; the "?" opens a tester with the current paragraph as sample text, and "Ask for help" hands the pattern to the AI.

## s21-share: Sharing with a reader

File ▸ Share… is one dialog with two halves. **Send** makes a named snapshot ("Sent to Marta, November 7"), exports a Word file whose paragraphs carry their ids, and lists the readers of this book. **Receive** looks in Downloads, or where you point, for a copy that belongs to this book, copies it into the book's folder (never opened as the working text) and records it in History. With an email tool connected, the AI drafts the message and later finds the reply; otherwise the two steps are written on the dialog.

## s22-compare-received: A reader's copy, compared

Receiving opens **Compare** as a sheet over the window. It shows your manuscript as it is today, one column, and only the paragraphs that differ get a block under them; "Only differences" folds the rest. The version you sent is used underneath to tell who changed what, and is never shown: the sides are named by person, **Marta's** and **yours since sending**, never "theirs" and "mine". A paragraph only Marta changed shows her version with the changed words marked and **Take** and **Keep mine**; "Take all of Marta's changes in paragraphs you did not touch" does those in one go. A paragraph changed by both shows two compact cards and four buttons: **Keep mine**, **Take Marta's**, **Keep both**, **Merge for me**, the last a proposal from the AI that takes both into account; whatever is chosen becomes the paragraph, editable, with a small mark saying where it came from. Her comments bypass the merge and become notes in the margin with her name. The header counts "4 of 18 decided"; "Done" applies the decisions and nothing enters the text before it; "Back to the text" leaves the sheet at any time.

## s23-history: History

History is a sheet: every writing session on one line, grouped by day, with hours, words and a one-line summary. Clicking a line opens it in place: what changed, where, each a link. "View as it was" reads that day's version without differences; "Compare with today" puts the old version on the left and today on the right, scrolled together, with **Restore** on any old paragraph or on the whole chapter. Reading an old version is for remembering; deciding paragraph by paragraph is the received-copy screen. Questions in words ("when did I write about Lena's car?") go to Ask.

## s24-book: Book

Book shows the book as it will print. The left column has page thumbnails; the right has the layout: a template to start from (paperback 5.5 × 8.5 in, trade 6 × 9 in, A5, manuscript, reading PDF), page size in cm or in, margins, fonts, and how chapters open: number and title, title only, number only, or **nothing** but a new page and space, for writers whose titles were only for working. Pictures in the text are laid out as figures. Arrows and Page Up/Down turn pages; the layout of a whole novel takes seconds and updates while you adjust. Export (PDF, Word, EPUB) is here.

## s25-ai-connected: The AI, connected or not

AI ▸ Connect, or the gray Ask button, opens this. The **disclosure** is always on this screen, with a warning sign, not behind a link: AI text may raise copyright, contest and disclosure problems; Libreto records what the AI wrote and can report it. Below: how to connect (Claude by key; through Claude Desktop where allowed), the level of help (Off · Quiet · Reviews · Proactive) with what each means, which model does the big work and which the small tasks (naming scenes, merging aliases, sorting notes: short judgments a small model gives reliably, and a local one may give later; finding names in the text is not a model's job at all, the index does it), what is sent and the log, and the cost this month. Libreto works fully without any of it.

## s26-settings: Settings

One dialog, six groups, each with a "?" that opens its help. **Shortcuts** is the group to show: every key, searchable and editable, and a check against the current keyboard layout that flags any shortcut needing a dead key or AltGr.

## s27-help: Help

Help is not a column. `F1` opens the **Help window** at the topic of what has focus; the Help menu opens its contents; "how do I add a chapter?" typed in Ask answers from the same help with a link. Tutorials are short, one per feature, offered once when the feature first matters; each runs in your own book with a bubble pointing at the control, can be left at any step with `Esc`, and is never required.

## s28-statistics: Statistics

A sheet from the word count in the status bar or View ▸ Statistics: words per chapter and per day, sessions and time, a grid of who appears where, reading time; tabs for the detail, "Back to the text" to leave.

## s29-inventory: Everything in the status bar and the menus

Not a moment: the status bar menus and the seven menus opened together, to see what lives where after the changes. The style palette has a filter; the view item offers By chapter and Whole book (S32); Highlights lists people, places, things, motifs, styles, notes, tasks, fixes and AI-written text; the zoom menu has "Fit width"; History rows are links. File has Share…; View has Focus (`F11`), Panels (`Ctrl+Shift+H`) and Statistics; `Ctrl+0` resets zoom.

## s30-window-sizes: Three window sizes

How the window adapts. At **1440 px** and above, both columns fit in the margins. Between **1200 and 1440**, one column at a time; opening the other closes the first. Below **1200**, the open column lies over the margin and the edge of the page, and the page stays put; below about 900 the page itself narrows. The Ask panel keeps its width and shortens.

## s31-right-click: Right-click, everywhere

Not a moment in the app: the right-click menus side by side, so they can be checked as one family. The rule is the same for all of them: **the few things done here most often, then the way to the rest.** In the text with a selection: Style as ▸, Emphasis, Thought, Add note, Ask about this, Look up (when the selection is a name), Find in the book, Cut / Copy / Paste. In the text with no selection: Style as ▸, New chapter here, Scene break here, Add note, Ask, Paste. On a mark or its gutter icon: ✓ Keep, ✗ Undo, Add note, "Why?" (the AI explains a proposal), Ignore this word (for a red mark). On a chapter row: New chapter before / after, New part before / after, Rename, Remove the chapter mark, Delete chapter…; on a scene row: Rename, Start a new chapter here, Remove the scene break, Delete scene…. On a Plan card: Open, Rename, Labels ▸, Move to ▸ (chapter list), Unplace, Delete…. On a Codex entry: Open, Rename everywhere, Highlight in the text, Research this, Delete…. Every menu walks with the arrows and `Enter`, typing filters it, `Esc` closes it; the only icons are the ones the app already uses for marks and modes.

## s32-chapter-or-book: By chapter, or the whole book

The page can hold one chapter or the whole book, and the switch is the **"By chapter ▾"** item at the right of the status bar, next to Highlights. **By chapter** is the default: the page is one chapter, and at its end a gray line reads "Next · 8 Closing time ↓" (at the top, "Previous · 6 The back room ↑"). Clicking it goes there; so does the cursor: the down arrow on the last line, or `Page Down` at the end, crosses into the next chapter's first line, the up arrow on the first line crosses to the end of the previous one, and `Ctrl+Page Down` / `Ctrl+Page Up` jump a whole chapter from anywhere. **Whole book** shows every chapter on one long page, each heading as a divider with its part above it when parts exist; the chapter list follows the scroll and highlights where you are, a double click on a row scrolls there, and the status bar still counts the chapter under the cursor. Either way the marks, the notes and the Reference panel behave the same; the switch is remembered per book. `Back` returns from any jump.

## s33-notices-and-undo: Notices, Undo and tips

Not a moment in the app: the one way Libreto tells you something changed, and the one way back. Every automatic change and every notice is the same **card at the bottom center of the page**: an icon, one line that names the place ("Scene break removed in ch. 7"), **Undo**, and ✕. It is never on a timer: it folds away when you type or click elsewhere, and it remains as a line in **History ▸ Today**, each line with its own Undo, so a notice seen late is a notice, not a loss. **Undo is one list.** Your typing, Libreto's fixes, a kept proposal, a deleted scene, a move applied in Plan, a change the AI applied: all on the same stack, so `Ctrl+Z`, the Undo on the notice and the ✗ on a mark's card are the same step, in the same order, and Redo brings it back. The fixes item in the status bar lists today's fixes with Keep / Undo and "Undo all"; History holds the snapshots for anything bigger, such as a chapter deleted last week. **Tips** use the same card, one a day at most, and only when Libreto recognizes a habit from a fixed list (retyping what a fix changed, removing detected breaks by hand, reaching for the mouse for something with a key): "Show me" demonstrates, "Not this one again" is remembered, Help ▸ Tips lists them all, and Settings has the switch.

## What changed in draft 5, and why

Everything below answers the notes on draft 4 for screens 1 to 8; screens 9 to 30 are unchanged apart from the strip, the status bar and the notice card.

- **Modes at the right of the strip.** The breadcrumb needs room on laptops with large fonts and the two cannot both be centered; the pill at a fixed right edge is where design tools put their mode switch, and the breadcrumb owns the left. One line, no second row.
- **Status bar items look clickable**: a soft background and a ▾ on every item that opens a menu. A hint alone was not enough.
- **One card for every mark**, on hover or `Ctrl+.`: what happened, Was / Now, ✓ ✗ with `Enter` / `Delete`; `F8` walks the marks. The same card is the margin card in Review.
- **The fix rule is written down**: one possible answer and no meaning touched; "recieved" is fixed, "quite / quiet" is proposed. A fix fades red to green and never moves the text.
- **One underline per problem, one underline per word**, red before blue before green; one gutter icon per line with a count; a count opens the stack as a list.
- **Red marks** have no icon in Write and a Spelling filter in Review; their card offers candidates and "Add to the book's words".
- **Review filters by people**, named when you share; the AI never guesses who a reader is.
- **The welcome line is a card**, on no timer, that slides into the Ask button and stays reachable there and in History.
- **Kind of text at Start** sets the names of up to three structure levels (parts / chapters / scenes, acts / scenes, nothing); a book can gain or lose a level later. Front matter and Back matter are rows in the list.
- **Start shows the full path on one line** under "Will be stored in", cleaned as you type, and a cover tile per book.
- **Right-click menus per level and per place**, written out in S31; removing a mark never deletes text and never asks, deleting asks in words and pages.
- **Dragging in the chapter list points to Plan** instead of moving; cutting and pasting across chapters is free and any coherence problem becomes a task later.
- **Scene breaks** from any repeated symbol, with Undo; the break is a selectable block; a proposed break is a mark like any other, with the usual card; detected scenes are named by first words without an AI.
- **By chapter or Whole book** (S32), with a gray Next / Previous line and cursor crossing; `Ctrl+Page Down` jumps a chapter.
- **One notice, one Undo** (S33): the card at the bottom, History ▸ Today, one stack for everything, tips through the same card.
- **A chapter heading starts a chapter**: applying the style mid-chapter splits there. The style palette reads as a list (names in the interface font, samples at the right), with "+ New style…".
- **Ask needs no AI while you type**: index, fixed order, three rows per group; questions are templates; no on-device model in version 1. The Codex is kept by the writer, by rules (names, mentions, counts, proposed entries) and, when connected, by the AI, marked as such.
- **On disk**: Markdown, one file per chapter, `***` for a scene break, readable without Libreto; said in S01 and S06.

## What changed in draft 4, and why

- **One door for the AI.** Search & ask, the Chat tab and the status-bar icon were three faces of one thing. They are now **Ask**: `Ctrl+K` or the round button; results while you type, a conversation when you ask. The button is the AI's status too: gray when not connected, pulsing when working, a dot when an answer waits.
- **The page never moves.** Columns open in the margins; the text stays centered on the window at any width that allows it.
- **The Reference panel instead of tabs.** The right column shows one thing with its own `‹ ›`: a Codex card or a research topic. No tabs, no second search box; `Ctrl+K` looks things up.
- **Codex and Research are two things in one library.** The Codex is what the book says; Research is what you gather. They sit as two sections of the Research mode, link to each other mostly by themselves (names are recognized in topics as in the text), and knowledge moves between them with "Pin as fact" and "Open in Research".
- **Review is Write with the margin open.** Notes are made and fixed in Write, beside the line; Review adds the counts, the filters and the walker. History, Compare, Statistics and Help are **sheets** over the window, not modes, so there are still five modes and nothing more.
- **One family of marks.** Underlines on the exact characters in three colors; icons, not dots, in the gutter at the exact line, with the same icons as counts on the left; dotted green = done, dashed gray = proposed. Scenes lost their bullets.
- **Lines to the text.** A selected note draws a short line from its gutter icon to its card and tints its words; unselected cards stay quiet.
- **Adding chapters without keys.** A "New chapter" button at the bottom of the list, a right-click menu on every row, the Insert menu; `Ctrl+Enter` for those who want it.
- **The "what now" dialog is gone.** Libreto reopens as you left it; a line at the bottom says what is waiting.
- **The start dialog names the folder.** The sentence under the location shows the exact path that will be created.
- **Keys on every keyboard.** `Ctrl+Shift+H` panels, `Ctrl+Shift+L` / `Ctrl+Shift+R` each column, `F11` Focus, `Ctrl+Enter` chapter, `Ctrl+Shift+Enter` scene break, `Ctrl+Shift+M` note, `Ctrl+Shift+A` reveal, `Ctrl+0` zoom reset, `Alt+1…5` modes, `Alt+←/→` back and forward. Every key is editable in Settings and checked against the layout.
- **Replace all shows the list first.** And a Codex name offers "Rename everywhere" instead of a blind replace.
- **Cards can take a color** with a legend you name; "Color by" fills them from the Codex.
- **Pictures** on Codex entries, in research topics and in the book itself.
- **The disclosure is always visible** on the AI screen, with a warning sign.

## Questions

Open from draft 4 (screens 9 to 30 are still unread):

1. "Ask" as the name of the single door (button and `Ctrl+K`)? Alternatives: Assistant, Chat, the provider's name.
2. Keep Review as a mode (same page, margin open), or make it a switch inside Write?
3. The Reference panel without tabs and without its own search box: yes?
4. Research mode as the library with two sections, Codex and Research: right split, right names?
5. Keys: `Ctrl+Shift+H` panels, `F11` Focus, `Ctrl+Enter` chapter, `Ctrl+Shift+Enter` scene break, `Ctrl+Shift+P` Plain: fine?
6. "Styles" as the word, with "What is this text?" as the palette's title, or another word?
7. Hold `Alt` kept, with `Ctrl+Shift+A` as the alternative?
8. One color per card plus "Color by": enough for planning?
9. The chat floating only, docking later: yes?
10. Pictures in the manuscript (figures) in version 1?

New in draft 5:

11. Modes at the right of the strip: acceptable, or would you rather lose Undo / Redo from the strip and keep the pill centered?
12. The mark card's keys: `Ctrl+.` to open, `Enter` ✓, `Delete` ✗, `F8` next mark. Fine on your keyboard?
13. Dragging in the chapter list only points to Plan. Too strict, or right?
14. Kinds of text at Start: Novel, Novel without parts, Short story, Play, Essay, Plain text. Missing one? Should a book be able to change kind later, or only gain and lose levels?
15. The "By chapter / Whole book" switch at the right of the status bar, next to Highlights, rather than centered: fine?
16. The cover tile: colored initial by default, a picture if dropped, an AI sketch on request. Worth having in version 1?
17. Tips: one a day at most, from a fixed list of habits, with "Not this one again". Enough, or still intrusive?
18. No on-device model in version 1: the Ask list and the Codex upkeep run on the index and rules alone, the AI only when connected. Agreed?
