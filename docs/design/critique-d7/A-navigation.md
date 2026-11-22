# Critique A: information architecture and navigation (Libreto concept draft 7)

Lens: places, how you get into and out of them, which layers can be open together, and whether a writer finds the way to a goal without already knowing it exists. Sources: `docs/design/walkthrough.md` (d7), screens S02, S04, S09, S12, S15, S16, S17, S18, S22, S23, S24, S29, and the owner's d5/d6 notes.

---

## 1. Verdict

1. **The six modes follow two different logics, and that mix causes most of the navigation trouble.** Write, Review, Plan and Book are four *views of the same manuscript*. Research and Codex are *other collections* (material, and an entity database). A single exclusive switch treats them all as the same kind of thing. The result: the left and right columns change meaning six times, Back crosses modes, and the "current scene" is shared by some modes and not others.
2. **Review is not a place. It is a layer.** It is the same text with the same cursor and the same scroll, plus a margin and filters (S15, "switching is a blink"). Making it a mode costs one exclusive slot and breaks "right = reference". It also makes the writer leave Write to read Marta's note on the paragraph they are writing.
3. **The menu bar does not hold the app.** It has no entry for any mode, no Settings/Preferences (the AI level, the budget and the Keys tab can't be reached from a menu), no Add note, no Close project, no Select all, no Go/navigate menu and no Window menu. "Findable where a person would look" fails at the most conventional place to look.
4. **Too many container types.** I count 14 kinds of layer (mode, column, panel, floating chat, peek, hover card, note card, popover, sheet, dialog, separate window, notice, bell, Focus). Esc, Back and focus rules are written for 3 of them. Overlaps at the bottom-right corner and the top-right margin are not designed.
5. **Doors are duplicated where they shouldn't be and missing where they're needed.** History has three doors and Statistics three. "Rename everywhere" has four doors and "Move a scene" two different models (immediate in the list, staged in Plan). Meanwhile the chapter heading's printed look, word goals, "tasks", split view, backup and the list's ⋯ menu have no visible door.
6. **The same entity has three depths with inconsistent exits**: peek, Reference panel, Codex entry. The foot buttons are named "Open in Codex", "Open in Write", "Go to the text" and "Edit in Research". Four verbs do one job.
7. **Cross-mode intent is lost.** Plan's staged moves, the Review all walk and Find state all have ad-hoc "leave and come back" rules. No general model says what survives a mode change.

My recommendation for d8: drop the six-way switch. Use **one document window**: a left Navigator with three sections (Manuscript, Codex, Research), a center that opens any document (a chapter, an entry, a topic), three **views of the manuscript** (Text, Board, Pages), **Review as a toggle layer** on the right, and Export and Book layout as a dialog. Full proposal in §3 and §4. If that is too big a change, the fallback is four modes (Write, Plan, Notebook, Book) with Review as a layer.

---

## 2. The model as drawn in d7 (text map)

### 2.1 Places and how to enter and leave them

```
APP
├─ Start screen (no project open)  ── enter: launch with nothing open / ? (no "Close project" exists)
│     New project form · Recent · Import a Word file          exit: Create / open recent
│
└─ PROJECT WINDOW
   ├─ Chrome (always): menu bar · strip · status bar · Ask button
   │    strip: [◧L] [‹ ›Back/Fwd] [↶ ↷Undo/Redo] [breadcrumb ch › scene] ··· [Write|Plan|Research|Codex|Review n|Book] [🔍][🔔][◨R]
   │    status: [style chip▾][words▾][p. x of y▾][Saved hh:mm] ··· [Whole book▾][Show▾][History▾][zoom][⌨]
   │    (status bar content differs per mode: Plan, Codex and Book drop or reorder items)
   │
   ├─ MODE (exactly one; entered ONLY via the strip switch, a Last-session button, a cross-link,
   │        or Review's count; NO menu entry, NO documented key in d7)
   │   ├─ Write    L: chapter list (opt.)      C: text          R: Reference panel (opt.)
   │   ├─ Review   L: filters + list w/counts  C: same text     R: margin of cards (is this the R column? toggle?)
   │   ├─ Plan     L: none (toggle still there) C: board         R: selected card's scene ("Open in Write")
   │   ├─ Research L: Inbox/topics/files       C: a topic       R: topic's links
   │   ├─ Codex    L: People/Places/Things/Motifs C: one entry  R: a paragraph of text ("Go to the text")
   │   └─ Book     L: page thumbnails          C: spread        R: layout settings + Export (not reference)
   │
   ├─ Columns: L toggle (Ctrl+Shift+L), R toggle (Ctrl+Shift+R), both (Ctrl+Shift+H)
   │    open state per mode? unspecified. At 1000–1260 px only one at a time.
   │
   ├─ Over the page (non-modal, floating)
   │   ├─ hover/mark card (hover or Ctrl+.)          exit: mouse out / Esc
   │   ├─ note card (from gutter bubble, Ctrl+Shift+N) dims R panel   exit: Esc
   │   ├─ peek card (Alt+click, right-click Look up) exit: Esc / "Open" → R panel
   │   ├─ chapter "peek" from list single-click       (same word, different thing; where it shows is unspecified)
   │   ├─ selection mini-bar (Emphasis · Strong · Style as)
   │   ├─ style palette (chip, Ctrl+T)
   │   ├─ Find box (top-right, "over the margin") → Replace all… DIALOG
   │   ├─ status-bar popovers (Whole book, Show, History, zoom, ⌨, words?)
   │   ├─ bell popover (top right)
   │   ├─ context menus (8 families, S31)
   │   ├─ notice card (bottom center; passing 20 s / standing; tips use the same card)
   │   └─ Ask (bottom right): palette → conversation that floats OVER the R column and dims it;
   │        movable, resizable, "–" folds into the button, "✕" closes; clock = past chats
   │
   ├─ Sheets (cover the work area; mode switch dimmed; "Back to the text  Esc")
   │   ├─ History   ← status bar History▾ › Open History · Reports › History · (notice "Bring back this version")
   │   └─ Statistics← words▾ · page count▾ · Reports › Statistics
   │
   ├─ Dialogs (modal): Replace all · Add notes from a file · Send a copy · New style · Delete… ·
   │                   "leave Plan with moves pending" · "Bring back this version" confirm
   │
   ├─ Separate windows: Settings (NO menu entry) · Project settings (File) · Help (F1, Help menu)
   │
   └─ Focus (F11): hides chrome incl. Ask; exit F11 or mouse-revealed "Exit focus"
```

### 2.2 Ways back (5 overlapping systems)

| Mechanism | Scope | Notes |
|---|---|---|
| `Esc` | innermost layer | "innermost" is undefined when the layers aren't nested (peek + Find + Ask all open) |
| `Back`/`Forward` (Alt+←/→, strip ‹ ›) | jumps between places, across modes | Does it include sheet openings, panel changes, Plan selections, Codex entry changes? Unspecified |
| Panel `‹ ›` | Reference panel only, 20 steps | Sits 1,200 px from the strip's ‹ ›, same glyph |
| "Back to the text" | sheets | Third "back" wording |
| `Ctrl+Z` | edits | Its icon sits beside Back in the strip (↶ next to ‹) |

### 2.3 Layers that can be open at once (stacking as drawn, front to back)

```
Dialog (modal)                         ─ blocks all
Context menu / popover / palette       ─ transient
Mark card · peek · note card           ─ anchored to text
Ask conversation (floating)            ─ over R column, dims it
Find box                               ─ over "the margin" = over R column top when it is open
Notice card (bottom center) · Ask button (bottom right) · tutorial bubble · tip
Sheet                                  ─ over columns and page, under the strip
Columns L/R · page
```

Collisions not drawn: (a) the Find box versus "Review all ▶ / Add notes" at the top of Review's margin (S15/S20). (b) A standing notice, a tip, the Ask button and Ask "–" all live in the bottom band. (c) A note card's "dims the panel" versus the Ask chat's "dims the panel": which wins? (d) Ask open over a sheet: does "Go to chapter 12" close History? (e) Focus hides Ask, but Ctrl+K still opens Ask, so Focus would show a floating panel with no chrome.

### 2.4 Goals: steps in d7 and newcomer findability

Steps = clicks/keys from a resting Write screen with columns closed. Find? = would a newcomer find the entry point without knowing it exists: **Y** (visible or in a standard menu), **P** (only a hover, context menu, or status-bar item), **N** (no visible door, or the obvious door is wrong).

| # | Goal | Path in d7 | Steps | Find? | Issue |
|---|---|---|---|---|---|
| 1 | Start a novel | Start → title, Book, folder → Create | 4 | Y | fine |
| 2 | Add a chapter after ch. 7 | open list → hover between 7/8 → + → Chapter | 4 | P | + is hover-only; Insert ▸ Chapter here inserts *at the cursor*, which is a different place |
| 3 | Add a scene in ch. 7 | type `***` / Insert ▸ Scene break / list + → Scene | 2–4 | Y | the menu says "Scene break" and the list says "Scene": two names |
| 4 | Rename a chapter | type over the heading, or list right-click → Rename | 1–3 | Y | — |
| 5 | Move a scene to ch. 10 | list drag (2) **or** Plan → drag → Apply (3 + leave prompt) | 2–4 | P | two models: immediate versus staged |
| 6 | Reorder chapters | list drag | 2 | Y | — |
| 7 | Find where Lena first appears | Alt+click Lena → peek "ch. 2–8" → ch. 2; or Codex → Lena → Appears in | 3–4 | P | "first appearance" isn't a named answer; Ctrl+F misses aliases ("the woman in red") |
| 8 | Apply a reader's (Word) notes | Review → Add notes from a file… → pick → Add → Review all → Enter×n | 5+n | **N** | a newcomer holding a .docx tries File ▸ Open or **File ▸ Import a Word file**, which builds a *new project*; the right door is under File ▸ *Share* |
| 9 | Compare with last week | History▾ → Open History → snapshot → Compare with today | 4 | P | the word "Compare" is in no menu; snapshots go back 10 min, "last week" means scrolling days |
| 10 | Export a PDF | File ▸ Export ▸ PDF | 3 | Y | what happens next (save dialog? Book opens?) is unspecified; Book has a second Export |
| 11 | Print | File ▸ Print → **mode changes to Book** | 2 | Y | a command that switches mode is a surprise |
| 12 | Rename a character everywhere | Edit ▸ Rename everywhere / Codex name field / Codex right-click / Find hint | 3 | Y | 4 doors; does the Codex name field rename the text silently? |
| 13 | Change how chapter headings print | Book → Print styles → Chapter heading → "shows" | 3 | **N** | a newcomer looks in Format ▸ Style or Settings ▸ Styles (the *working* look). The heading has two looks in two places |
| 14 | Recover a scene deleted from the list | list → scroll to Discarded → Put back | 3 | P | below the last chapter; a 40-chapter book hides it |
| 15 | Recover a scene deleted for real | History → session → "Show it in the snapshot" → ? copy/paste | 6+ | P | no "Restore this scene" |
| 16 | Ask if ch. 7 contradicts ch. 2 | Ctrl+K → type → Enter | 3 | Y | — |
| 17 | Add a note | right-click → Add note / Ctrl+Shift+N / hover + | 2 | P | **not in any menu-bar menu** |
| 18 | See Marta's notes only | Review → toggle Marta | 2 | Y | — |
| 19 | Undo a fix from yesterday | bell = today only → History → … | 5+ | **N** | the door to old per-change undo is unclear |
| 20 | Replace a word everywhere | Ctrl+H → type ×2 → Replace all… → confirm | 5 | Y | — |
| 21 | Go to chapter 12 | list double-click / breadcrumb ▾ / Ctrl+K "12" | 2–3 | Y | — |
| 22 | Set a daily word goal | — | — | **N** | absent; motivation is a stated principle |
| 23 | See today's words | words▾ → Statistics → Words per day | 2–3 | P | — |
| 24 | Clip a web passage | copy → Edit ▸ Paste into the Inbox (only if nothing is selected) | 2 | P | the menu item is greyed for reasons the writer can't see |
| 25 | Read a research topic while writing | Alt+click a *linked* name → peek → topic → panel | 3 | P | an unlinked topic is reachable only through Ctrl+K |
| 26 | Add a new character to the Codex | select the name → right-click → Add to the Codex ▸ Person | 3 | P | not in the menu bar; Codex "+ New entry" is mode-bound |
| 27 | See ch. 2 while writing ch. 7 | — (R panel shows text only in Codex mode) | — | **N** | no split view, the feature Scrivener writers rely on most |
| 28 | Mark a scene "done" | Plan → select card → Status ▾ → Done | 4 | P | not settable in Write or the list |
| 29 | Find "tasks" I added (Plan "Add as a task") | — | — | **N** | tasks have no home: no Review filter, no list |
| 30 | Turn the AI off / set a budget | Settings ▸ AI | ? | **N** | Settings has **no menu entry** |
| 31 | Change a key | Settings ▸ Keys / ⌨ → All keys… | 2–3 | P | only via ⌨ |
| 32 | Add a dedication page | Insert ▸ Front matter ▸ Dedication | 2 | Y | — |
| 33 | Chapters start on a right-hand page | Book → checkbox | 2 | Y | — |
| 34 | Send a copy to Marta | File ▸ Share ▸ Send a copy… | 3 | Y | — |
| 35 | See what I did today | History▾ | 1 | Y | — |
| 36 | Go back after a jump | Alt+← / ‹ | 1 | Y | ‹ sits next to ↶ |
| 37 | Write with nothing around | Ctrl+Shift+H / F11 | 1 | Y | two near-identical concepts |
| 38 | One chapter at a time | status Whole book▾ / View | 2 | Y | — |
| 39 | Name unnamed scenes with AI | list "⋯" menu | ? | **N** | the ⋯ menu appears on no screen and in no inventory |
| 40 | Close this project / open another | File ▸ Open / Recent | 2 | P | no Close, no way back to Start |
| 41 | Back up / save a copy elsewhere | — | — | **N** | absent |
| 42 | Create a new style | Ctrl+T → + New style… | 2 | P | not in the Format menu |
| 43 | Resolve all of Marta's comments at once | filter → Review all → Enter×n | 2+n | P | no bulk action |
| 44 | See a timeline of events | — | — | N | absent (fine for v1, but say so) |
| 45 | Find a passage by its style (all Letters) | Ctrl+F → Options → Style | 3 | P | — |
| 46 | Jump to next pending mark | F8 | 1 | P | shown only in card footers |

Summary: 46 goals. 23 Y, 15 P, 8 N. Five of the eight N's are missing doors that a menu bar would fix for free (8, 13, 17-adjacent, 30, 39). The others are missing features (22, 27, 29, 41).

---

## 3. Findings

### A. The mode model

**F-A-01 · blocker · whole app.** *The six modes mix views of one text with separate collections.* Write, Review, Plan and Book show the same chapters; Research and Codex show other objects. Scenario: the writer selects scene 7.2 in Plan, switches to Codex to check Lena, then to Write. Which scene is current? Write says "same cursor as Review", Plan has its own selection, and Codex has its own entry. **Fix:** split the axes. *Content* = what is open in the center (a chapter, an entry, a topic), chosen in the Navigator. *View* = how the manuscript is shown (Text, Board, Pages), meaningful only for the manuscript. See O-1.

**F-A-02 · major · S15, S22, S34.** *Review as a mode.* It shares text, cursor and scroll with Write, so it is a state of Write. Being a mode means: you can't type a reply to Marta's note and keep writing in the same layout; the left column swaps under you (filters appear above the list); the right column stops being Reference. **Fix:** make Review a **layer**: one strip toggle "Review 12", `Ctrl+Shift+R`-like. It opens the margin in the right column (replacing Reference while it is on) and turns on badges and the list counts. Filters go into the margin's header, not the left column. "Review all" and "Add notes from a file…" stay in the margin header. See O-2.

**F-A-03 · major · S17, S18, S19.** *Research and Codex are two modes for one job: knowing things about the book.* The peek already merges them (an entry lists its linked topics), the panel shows both, and "Add to the Codex as a fact of" bridges them. The owner moved them together (d4), then apart (d6). Two navigators, two "+" patterns, two filters. **Fix:** one Navigator section switcher with Codex and Research as siblings (O-1A), or one "Notebook" mode with two groups (O-3).

**F-A-04 · major · S24.** *Book mixes three things*: a preview (a view), project typesetting settings (they belong with Project settings), and Export (a command already in File). Its right column is settings, which breaks "right = reference + AI". File ▸ Print switching mode is a surprise. **Fix:** make Pages a view of the manuscript. Book layout (page, print styles, pictures, footnotes) becomes the right column *only in the Pages view*, labeled "Book layout", or a "Book layout…" window reachable from Format and File ▸ Export. Export opens one Export dialog (format, range, include notes, preview button) from File and from Pages.

**F-A-05 · major · S16.** *Plan has no left column but keeps the left toggle.* What does `Ctrl+Shift+L` do in Plan? Grey it out, open the chapter list, or nothing? **Fix:** in Plan, the left column is the same Navigator (the Manuscript list): clicking a chapter scrolls the board to its row. That removes the dead toggle and makes the list the one constant.

**F-A-06 · major · S16 vs S05.** *Moving a scene has two models.* The list moves now (with Undo and a notice); Plan stages moves until Apply, warns on leave, and snapshots. A writer who learns one is surprised by the other, and staged moves in Plan don't show in the list or the text meanwhile. **Fix:** O-6. Recommended: immediate everywhere with Undo, with the continuity warning in the notice. Staging becomes an optional "Try a new order" sandbox (a snapshot branch) for big restructures.

**F-A-07 · major · walkthrough "Libreto in one minute".** *No rule for what survives a mode change*: the Review all walk pauses, Plan moves prompt, Find state is unspecified, Ask context ("this") changes. **Fix:** write one rule. *Nothing in progress is lost by switching: walks, staged work and Find persist per project until finished. The strip shows a small "paused" dot on the place that holds it.* Never prompt on leave.

**F-A-08 · major · S02.** *Modes can't be reached from the menus or the keyboard.* The View menu (S29) lists columns, Focus, views, Show, Reveal and Zoom, but no modes. The d4 keys `Alt+1…5` vanished in d7 (and there are now six). **Fix:** the View menu gets the view items with `Ctrl+1`, `Ctrl+2`, `Ctrl+3` (digits exist on every layout, Spanish included) and the Navigator sections `Ctrl+Shift+1…3`. If modes survive, they go in View with `Ctrl+1…6`.

**F-A-09 · minor · S02.** *The mode switch sits at the right, far from the left list it changes.* Choosing Codex at the top right changes the left column's contents. Cause and effect are 1,000 px apart. **Fix:** O-4. Put the content switch (Manuscript, Codex, Research) at the head of the left column, where it acts. Put the view switch (Text, Board, Pages) centered above the page.

**F-A-10 · minor · S02.** *The six labels mix verbs and nouns*: Write, Plan, Review (verbs/activities) with Research (an activity) and Codex and Book (nouns). Inconsistent labels make the cut look arbitrary. **Fix:** nouns for places (Manuscript, Codex, Research) and nouns for views (Text, Board, Pages).

**F-A-11 · minor · S04.** *The Last-session notice is a router into three modes*: Review, Plan and Research. That is navigation hidden in a notice, and it duplicates the Review count and the Inbox count. **Fix:** keep the notice (it's warm), but make each button open a *layer or section* (the Review toggle, the Board view filtered to Unplaced, the Research Inbox), so nothing changes "mode".

### B. Columns and panels

**F-A-12 · major · S12, S15, S16, S17, S18, S24.** *The right column means six things*: Reference (Write), cards margin (Review), scene inspector (Plan), topic links (Research), a text paragraph (Codex), layout settings (Book). The single toggle icon promises one thing. **Fix:** the right column holds **Reference** (any entry, topic or text snippet, with ‹ ›) or, while Review is on, the **Review margin**. Plan's scene inspector is simply Reference showing a *scene* (scenes are entries too). Codex's paragraph is Reference showing *text*. Book layout lives only in the Pages view, labeled as such.

**F-A-13 · major · S02, S12.** *Column open state per mode is unspecified.* If the list is open in Write and I go to Plan and back, is it open? `Ctrl+Shift+H` "restores what was open": per mode or global? **Fix:** columns are global (one left, one right). Their content follows the Navigator section or the selection. Remember the state per *view*, only for Pages (thumbnails).

**F-A-14 · major · S11, S18.** *One entity, three depths, four exit verbs*: peek → panel ("Open") → Codex ("Open in Codex"). The panel foot says "Open in Codex" (S12), "Open in Write" (S16), "Go to the text" (S18) or "Edit in Research" (S19). **Fix:** one verb pattern: **"Open"** (the full thing, in the center) and **"Show in text"** (jump to its first or current occurrence). Use the same two buttons on every panel foot.

**F-A-15 · minor · S11.** *The panel's ‹ › and the strip's ‹ › use the same glyph for different histories*, 1,200 px apart. Scenario: a writer clicks the strip's ‹ expecting to return to Kit in the panel, and the page jumps instead. **Fix:** give the panel history a different affordance: a small "← Kit" back-link under the panel's name (one level, like a breadcrumb), or fold panel steps into the global Back with a "panel" scope.

**F-A-16 · minor · S05.** *"One click peeks at a chapter"* reuses "peek", the name of the entity card, for a different, undrawn behavior. Where does the peeked chapter show? **Fix:** drop chapter peek (single click selects, double click goes), or show it in the Reference panel as text, which also gives a read-only split view (F-A-50).

**F-A-17 · minor · S30.** *Between 1000 and 1260 px, opening one column closes the other.* Opening Reference while the list is open makes the list vanish. No notice says so, and Back does not bring it back. **Fix:** at that width, the second column *overlays* the page edge (as below 1000) rather than closing the first; or show a one-time tip.

**F-A-18 · minor · S16.** *Plan's "+ New card" (top toolbar), Research's "+" (column foot), Codex's "+ New entry" (column foot) and the list's hover "+" between rows*: four add patterns. **Fix:** one rule: the hover "+" between rows in every list (Manuscript, Codex, Research), plus `Ctrl+Enter` = "new item after the selected one" in whatever list has focus, plus Insert menu items. Remove the column-foot buttons.

### C. Menu bar and conventions

**F-A-19 · blocker · S29.** *No Settings/Preferences in any menu.* Linux/GNOME: Edit ▸ Preferences; KDE: Settings ▸ Configure; Windows: Tools ▸ Options or File ▸ Options; macOS: App ▸ Settings… `Cmd+,`. The AI level, the budget, Keys, Privacy and Styles are therefore reachable only through "Connect an AI" in Ask, ⌨ ▸ All keys, or links from other windows. **Fix:** Edit ▸ Settings… (`Ctrl+,`; the comma is on the Spanish layout) on Linux/Windows, and Libreto ▸ Settings… on macOS.

**F-A-20 · major · S29.** *File misses standard items*: Close project (`Ctrl+W`), Save a copy… / Back up…, Rename or Move project, Show project folder, Exit/Quit (`Ctrl+Q`). Users look here to "save" even with autosave. **Fix:** File: New project, Open…, Open recent ▸, Close project, — Import ▸ (Word, Markdown, Scrivener later), Export… , Print…, — Share ▸ (Send a copy…, Add notes from a reader's copy…), — Back up now / Save a copy…, Show in folder, Project settings…, — Quit. One line at the top of the File menu says "Saved automatically · 19:32", to answer "where's Save?".

**F-A-21 · major · S29.** *Edit misses Select all and Settings*; it has "Rename everywhere…", a Codex operation. **Fix:** Edit: Undo, Redo, —, Cut, Copy, Paste, Paste as plain text, Paste into the Inbox, Select all, —, Find…, Replace…, Find next (F3), —, Settings…. Move Rename everywhere to a **Book** menu (F-A-24).

**F-A-22 · major · S29.** *No navigation menu.* Back/Forward, next/previous chapter (`Ctrl+PgDn/PgUp`), next mark (F8), Go to… (`Ctrl+K`, or a dedicated `Ctrl+G`) exist only as keys or strip icons. **Fix:** a **Go** menu (Linux/mac convention; Windows apps put it under View): Back, Forward, —, Go to… (`Ctrl+G`, opens Ask in "Go to" scope), Next chapter, Previous chapter, Next mark, Previous mark, —, Manuscript, Codex, Research (`Ctrl+Shift+1…3`).

**F-A-23 · major · S29.** *Add note, Look up, Add to the Codex and Send to the Inbox exist only in right-click.* Word and Google Docs put Comment under Insert. **Fix:** Insert: Note (`Ctrl+Shift+N`), Footnote, Picture…, —, Scene break, Chapter, Part, Front matter ▸, Back matter ▸. Book menu: Look up (`Alt+click`), Add to the Codex ▸, Send to the Inbox.

**F-A-24 · major · S29.** *No menu holds the structure and the bible.* Move scene up/down (`Ctrl+Shift+↑/↓`), Join, Make this scene a chapter, Rename everywhere, Check continuity, Name the unnamed scenes, Read the book again: all hidden in context menus, the ⋯ menu or Ask. **Fix:** a **Book** (or "Project") menu, between Format and View: Move up / Move down, Join with previous, Make chapter / Make scene, Move to Discarded, —, Rename everywhere…, New Codex entry…, Check continuity (AI), Name unnamed scenes (AI), Read the book again (AI), —, Statistics, History. Each AI item carries the spark, so "where the AI adds something, the screen says so" holds in menus too.

**F-A-25 · minor · S29.** *Reports is a non-standard top-level menu with 4 items*, two of them AI logs and one History (not a report). **Fix:** drop Reports. Statistics and History go to the Book menu (or View), and What the AI wrote / AI log to Help ▸ "AI transparency" or the Book menu's AI group. Fewer top-level menus, one less word to learn.

**F-A-26 · minor · S29.** *Format has 3 items*: no New style…, no Edit styles…, no Clear formatting. **Fix:** Format: Emphasis, Strong, —, Style as ▸, Clear style (back to Plain), —, New style…, Edit styles… (opens Settings ▸ Styles), Book layout… (the print look, F-A-35).

**F-A-27 · minor · S29.** *No Window menu* (macOS requires one; on Linux/Windows it's where multiple projects and the Help window are found). **Fix:** macOS: standard Window menu. Linux/Windows: list open projects under File ▸ Open recent with a check mark.

**F-A-28 · major · S11, S10.** *Alt+click and Alt-hold collide with Linux window managers.* On Xfce, Cinnamon, MATE and older GNOME, Alt+drag/click grabs the window, and held Alt opens menu mnemonics in GTK/KDE apps. The main way into the peek is unreliable on the target platform. **Fix:** make the peek reachable by **Ctrl+click** (link-follow convention in editors) and a hover delay (≥ 600 ms) on known names with the reveal off. Keep Alt+click as an alternative.

**F-A-29 · minor · S02.** *Back/Forward (‹ ›) and Undo/Redo (↶ ↷) sit side by side in the strip*, four similar arrows. A writer reaching for Undo after a jump clicks ‹ and loses their place instead. **Fix:** drop Undo/Redo from the strip (it's in Edit and on every notice) or separate them with the breadcrumb. Give Back a word-tooltip with the destination ("Back to ch. 7 · Lena's warning").

**F-A-30 · minor · d7 keys.** *The note key changed* from `Ctrl+Shift+M` (d4) to `Ctrl+Shift+N` (d7) with no log entry. **Fix:** fix it in the key spec; `Ctrl+Alt+M` is Word's comment key, consider it.

### D. Status bar

**F-A-31 · major · S02, S16, S18, S24.** *The status bar is a second toolbar, and its contents change per mode* ("Saved" moves to the first slot in Codex; the style chip disappears in Plan and Book). Items that change position break muscle memory. **Fix:** fixed slots. Left = context (style chip only where text is editable, otherwise blank space of the same width). Middle-left = words, page, Saved. Right = view controls. Mode-specific info goes in the center as plain gray text.

**F-A-32 · minor · S02, S29.** *Statistics has three doors* (words▾, p. x of y▾, Reports) *and History three* (status bar, Reports, notices), *and Whole book/By chapter two* (status, View). Duplication is fine for keys and menus, but two adjacent status items opening the same sheet is noise. **Fix:** words opens Statistics; the page count opens the Pages view at that page (more useful). History stays in the status bar and the Book menu.

**F-A-33 · minor · S02.** *"Show ▾" and "Reveal" are two visibility controls*, plus `Ctrl+Shift+H` and F11: four. **Fix:** put Reveal as the top row of the Show menu ("Everything, while Alt is held / always"), so one control owns visibility.

**F-A-34 · minor · S29.** *Status bar ⌨ and F1 overlap*; the ⌨ glyph is cryptic. **Fix:** keep `F1` (Help, contextual) and put "Keys here" as the first section of the Help window. Free the slot.

### E. Doors that are wrong, hidden or missing

**F-A-35 · major · S07, S24.** *A style has two looks in two places*: working (Settings ▸ Styles, app-wide) and print (Book ▸ Print styles, per project). Goal 13 fails. **Fix:** a style editor with two columns, **"On screen"** and **"In the book"**, the second labeled "this project". Open it from Format ▸ Edit styles…, the palette, Settings ▸ Styles and Book layout. One place, two scopes, visible side by side.

**F-A-36 · major · S21, S22.** *Receiving a reader's copy lives under Share and Review*, while File ▸ Import a Word file sits right above it and does something destructive-looking (makes chapters). **Fix:** when a .docx is opened or dropped on the window, detect the hidden ids: "This is your copy sent to Marta on Nov 7 · Add her notes / Import as new text". Rename the menu item "Add notes from a reader's copy…". Put it under File ▸ Import as well as Share.

**F-A-37 · major · S16.** *"Add as a task" creates something with no home.* No list, filter or Review kind shows tasks. In S05 the same idea is called "Add to Review". **Fix:** one word, "Add to Review", producing a **pending card** of kind "To do". Add "To do" to the Review kind filters.

**F-A-38 · major · S06.** *The chapter list's "⋯" menu* ("Name the unnamed scenes") is mentioned but appears on no screen and in no inventory. **Fix:** move its items to the Book menu (F-A-24). If the list keeps a menu, draw it in S05 and S29.

**F-A-39 · major · S33, S04.** *The bell holds only today*, History holds everything, and per-change Undo for yesterday has no door (goal 19). **Fix:** History's session rows show each change with "Undo this" while nothing later touched it. The bell's footer gets "Earlier → History".

**F-A-40 · major · S05, S16.** *Discarded and Unplaced sit at the end of long lists.* Discarded is invisible in a 40-chapter book without scrolling. **Fix:** pin both as collapsed rows at the bottom of the Navigator's Manuscript section ("Discarded · 3"), always visible, like Trash in a mail client's folder list.

**F-A-41 · minor · S23.** *"Compare" exists only inside History*, two levels down. **Fix:** add a Book-menu item "Compare with a snapshot…" that opens History with the snapshot list focused; also make the word "Compare" findable in Ask.

**F-A-42 · minor · S16.** *Scene status, POV and storyline are editable only in Plan.* **Fix:** since the Reference panel can show a scene (F-A-12), these labels are editable from Write too: right-click a scene row → "Scene info" opens it in the panel.

**F-A-43 · minor · S01.** *No way back to Start* except quitting. **Fix:** File ▸ Close project returns to Start (the recent list), as editors do.

**F-A-44 · minor · S26.** *Project settings and Settings are two windows that "link to each other".* Two windows for preferences is a known source of "where was that setting?". **Fix:** one Settings window with a scope selector at the top: **"All projects | This project (The Blue Lamp)"**. One search box finds both. File ▸ Project settings… opens it on the second scope.

**F-A-45 · minor · S27, S28, S23.** *History and Statistics are sheets, while Help and Settings are windows.* There is no stated rule. **Fix:** the rule is *a sheet when it acts on this project and leads back into the text* (History, Statistics, Compare); *a window when it is app-wide or worth keeping beside the text* (Settings, Help). Write it in the walkthrough's rules.

### F. Layers, focus, Esc, Back

**F-A-46 · major · S08, S09, S14, S20.** *"Esc closes the innermost thing" is undefined for non-nested layers*: peek, Find box and Ask conversation can all be open. **Fix:** Esc closes **the layer that has keyboard focus**. If focus is in the text, it closes the most recently opened transient layer (card, peek, menu), never Find or Ask; those close with their own Esc while focused, or ✕. Show focus with a 2 px ring on the focused layer.

**F-A-47 · major · whole app.** *Back's scope is unspecified.* Does it record sheet opening, panel changes, Codex entry switches, Plan selection, Ask result jumps, Find hits ("Back returns to where the cursor was"), Last-session buttons? **Fix:** define it. Back records *any change of what's in the center* (chapter/position jump ≥ 1 screen, entry opened, topic opened, view switched). It does not record panel changes (the panel has its own back-link), sheets (they have "Back to the text") or selection. A long-press on ‹ lists the last 10 places with names (browser convention).

**F-A-48 · major · S09, S12, S04, S33.** *The bottom band is crowded*: the standing notice (center), a tip (same card, "one at a time"), the Ask button (right), the folded Ask with "dot", the tutorial bubble and the Review-all "Continue · 4/12" offer. Scenario: Last session is showing and a continuity warning arrives. One waits in the bell, but the writer just moved a scene and needs that warning now. **Fix:** a priority order (action-result notices > standing > tips). Tips never show while any notice is up. The Ask button moves up by the notice height when a notice is showing, so it never overlaps.

**F-A-49 · major · S20, S15.** *The Find box opens "over the margin"*, which is where Review's "Review all / Add notes" buttons and the Reference panel head sit. **Fix:** anchor Find to the top of the **page column** (over the text's top margin, like a code editor's find widget), never over a column. Or let it push the right column's content down by its height.

**F-A-50 · major · goal 27.** *No split view.* Writers compare chapters constantly (Scrivener's split editor, Ulysses' second editor, a second Word window). **Fix:** the Reference panel can show any chapter as read-only text (Codex already does this, S18), with "Open beside" from the list's right-click. A real editable split is v2.

**F-A-51 · minor · S13.** *Focus hides the Ask button but Ctrl+K still works.* What appears, and where? **Fix:** in Focus, Ctrl+K opens Ask centered over the page as a palette. A conversation shows as a narrow overlay at the right that Esc folds.

**F-A-52 · minor · S23.** *Sheets dim the mode switch but leave Back, the breadcrumb and Undo live.* What does Undo do in History? What does the breadcrumb ▾ do? **Fix:** a sheet replaces the strip's left part with "‹ Back to the text" and its own title, and disables the breadcrumb. Undo stays live and acts on the text, with its flash visible under the sheet's edge, or it closes the sheet first.

**F-A-53 · minor · S09.** *The Ask conversation dims the right column it covers*, and so does the note card (S14). Two dimming layers stacked look like a modal. **Fix:** dimming only for the topmost floating layer. Better, no dimming at all: a 1 px border and a shadow, since neither is modal.

**F-A-54 · minor · S08.** *Ask is search, command palette, navigator and chat in one box*, so "Go to" depends on Ask. When Ask shows a conversation, `Ctrl+K` "starts fresh" or resumes? (d7: "the next open starts fresh" after ✕, resumes after –.) Two different behaviors behind the same key. **Fix:** `Ctrl+K` always opens the box focused on an *empty input* above the current conversation (if any). Results show above the input; the conversation stays below and scrolls. One behavior.

**F-A-55 · minor · S34.** *Review all ignores Esc* ("a stray key cannot drop you out"), unlike every other layer. **Fix:** acceptable, but say it on the walk's header: "Stop (Esc twice)". Use the same double-Esc rule for any layer holding decisions (sheets with pending decisions), instead of a confirm dialog.

### G. Counts, badges, "what's waiting"

**F-A-56 · major · S02, S04.** *"What waits" has four indicators*: the Review count (blue badge), the Last-session notice, the bell dot, and the Inbox count in Research's list. Plus the Plan Unplaced count in the notice only. **Fix:** one "waiting" summary. The Review toggle carries the count; the Navigator section heads carry small counts (Research · Inbox 3, Manuscript · Unplaced 2). The bell is only "what Libreto told you". Last session lists the same three counts.

**F-A-57 · minor · S02.** *The Review count badge is blue*, the "pending" color, but it counts notes (amber), unknown words (red) and done fixes (green) too. **Fix:** neutral gray count, or count only pending (blue) and show the total in the Review header.

**F-A-58 · minor · S12 vs S05.** *S12 shows note counts in the Write chapter list* ("2 💬" on ch. 6, "1" on ch. 7, "1" on ch. 11), while the walkthrough says "in Write the list carries no badges". **Fix:** decide. I'd show only your own note count in Write (it's your writing hour), and all four in Review.

### H. Plan specifics

**F-A-59 · major · S16.** *Leaving Plan with staged moves "asks once"*, which is a modal on navigation, the exact thing the owner dislikes (d6 Esc note). **Fix:** see F-A-06/F-A-07. Without staging, nothing to ask.

**F-A-60 · minor · S16.** *Plan's continuity warning is orange*, a fifth color outside the four-color rule, and close to amber (notes). **Fix:** use the blue pending style with a ⚠ glyph, or make the warning a pending card (blue) as "Add to Review" implies.

**F-A-61 · minor · S16.** *Plan has no breadcrumb and no Navigator*, so in a 40-chapter book the only way to reach chapter 31's row is scrolling. **Fix:** Navigator on the left (F-A-05). Ctrl+K "31" scrolls the board.

**F-A-62 · minor · S16.** *Double-clicking a card should open the scene in the text*; d7 offers "Open" in the right-click menu and "Open in Write" on the panel. **Fix:** double click = show in Text view (consistent with the list's double click). Enter does the same.

### I. Research and Codex specifics

**F-A-63 · major · S18.** *Codex entry editing*: "Renaming here renames everywhere" (S18 callout). A typo fix in the name field rewrites 212 mentions across the book without a preview, while Replace all shows every hit first. **Fix:** a name change in the Codex opens the same Rename-everywhere preview (count, chapters, Undo as one step).

**F-A-64 · minor · S17.** *Research's left column has three groups (Inbox, Topics, Files)*, and Files duplicates attachments shown in topics. "3 more" folds the files. **Fix:** Files as a filter of Topics ("Show files"), or files only inside topics plus the Inbox. Fewer roots.

**F-A-65 · minor · S17.** *"Send to the Inbox" is greyed in Research* ("already Research"), and "Paste into the Inbox" is greyed when text is selected. Greyed items without a reason confuse. **Fix:** hide them in Research; replace the second with a clear rule: "Paste into the Inbox" always pastes the clipboard into the Inbox, whatever the selection.

**F-A-66 · minor · S18.** *"Questions the Codex answers" are fixed links* on one entry. They can't be found from anywhere else. **Fix:** make them Ask templates too ("When are Lena and Kit together?" typed in Ask gets the same index answer, marked "no AI"), so the knowledge has one door.

### J. Strip and labels

**F-A-67 · minor · S02, S12.** *The breadcrumb is cut at narrow widths* (S12 shows "Chapter 7 · Lena's warning ▾ › Lena lies about the back room ▾", which already reaches the center at 1440 px). With six mode labels at the right, the two compete below 1260 px. **Fix:** with the mode switch removed (O-1A), the breadcrumb has room. Otherwise truncate the scene name first, chapter number last.

**F-A-68 · minor · S02.** *The strip's left toggle icon is the same as the right one, mirrored*, with no labels. **Fix:** tooltips with the key, and in the Navigator model the left icon reads as "Navigator" (list icon), the right as "Reference" (book icon).

**F-A-69 · minor · S02.** *The bell and Find sit together at the far right, between the mode switch and the right toggle*, so the right toggle moves when the mode switch changes width (languages: "Investigación", "Revisión"). **Fix:** fix the right cluster's position from the right edge, and let the switch or breadcrumb flex.

**F-A-70 · minor · i18n.** *Six mode labels in Spanish* (Escribir, Planificar, Investigación, Códice, Revisión, Libro) are about 40 % longer. At 1000–1260 px they collide with the breadcrumb. **Fix:** another argument for O-1A (three labels in the Navigator header, three in the view switch).

---

## 4. Options

### O-1 · The overall model

**A. One document window: Navigator sections + manuscript views + Review layer (recommended).**
- **Left: Navigator**, with a three-part switch at its head: **Manuscript · Codex · Research** (icons + words; `Ctrl+Shift+1/2/3`). Manuscript = parts/chapters/scenes + Discarded + Unplaced. Codex = People/Places/Things/Motifs. Research = Inbox/Topics.
- **Center: the open document.** A chapter (or the whole book), a Codex entry, or a topic. Opening anything from the Navigator, Ask, a link or the panel replaces the center, and Back returns. No tabs in v1.
- **View switch, only when the center shows the manuscript**, centered above the page: **Text · Board · Pages** (`Ctrl+1/2/3`). Text = Write. Board = Plan. Pages = Book preview with Book layout in the right column.
- **Right: Reference** (entry, topic, scene info, read-only chapter), or, when **Review** is toggled on (strip button "Review 12", `Ctrl+Shift+V`... or `F7` by spell-check convention), the **Review margin**.
- Sheets: History, Statistics. Windows: Settings (two scopes), Help. Dialogs: Export, Send a copy, Add notes, Replace all, Rename everywhere.
- *Pros:* left = list, center = work, right = reference all hold literally. Back has one meaning. Five fewer "places". Every place has a menu entry. Matches Scrivener (Binder + Editor views + Inspector), Ulysses, Obsidian, VS Code; Word/Docs users recognize "Review pane". Opening a Codex entry in the center while writing is a click on a link, not a mode change.
- *Cons:* the biggest redraw. The Codex loses its "own position" status, though its Navigator section is just as visible. Two switches (section, view) instead of one, although each has 3 items, not 6. Review-as-layer needs care at 1000–1260 px.

**B. Four modes: Write, Plan, Notebook (Research + Codex), Book; Review as a layer in Write.**
- *Pros:* keeps the "dress the window for a job" idea the owner likes; modest redraw; the switch fits better and the labels shrink.
- *Cons:* the left/right meaning still changes per mode; Back still crosses modes; Book still mixes settings and preview.

**C. Keep six, fix the doors** (View menu items + keys, Settings in menus, fixed status bar, Esc/Back rules).
- *Pros:* least work; the d7 screens stay valid.
- *Cons:* Review stays a place; the right column stays six things; F-A-01/02/12 unresolved.

*Recommendation:* **A**. If the owner wants to keep a visible "job" switch, B, but even then take Review out as a layer.

### O-2 · Review

- **A. Layer toggle in the strip** (as in O-1A): the margin replaces Reference while on; filters in the margin header; the count on the toggle. *Pro:* reply to a note without leaving your sentence; Word/Docs familiarity. *Con:* Reference and Review can't both be open (show "Reference ▸" as a one-click swap in the margin header).
- **B. Keep the mode, but also show your own and readers' notes in Write.** *Pro:* small change. *Con:* blurs "Write is for writing".
- **C. Review as a sheet that walks cards over the text.** *Pro:* very focused. *Con:* loses the margin overview.
- *Recommendation:* **A**.

### O-3 · Research and Codex

- **A. Siblings in the Navigator** (O-1A). *Pro:* each keeps its nature; one Reference panel shows both. *Con:* none significant.
- **B. One "Notebook" mode with two groups** (Codex on top, Research below). *Pro:* one place for "knowing". *Con:* a long left list; the Inbox gets buried.
- **C. Keep two modes.** *Con:* F-A-03.
- *Recommendation:* **A**.

### O-4 · Where the switch lives

- **A. Content switch at the Navigator head; view switch centered above the page** (recommended with O-1A). *Pro:* control next to what it changes. *Con:* two controls.
- **B. Vertical icon rail at the far left** (VS Code/Obsidian activity bar: Manuscript, Codex, Research, then History, Statistics; Settings at the bottom). *Pro:* very discoverable, always visible even with the Navigator closed. *Con:* adds a permanent 48 px strip of chrome against "minimal noise"; icons need labels.
- **C. Right of the strip, as drawn.** *Con:* F-A-09, F-A-67, F-A-70.
- *Recommendation:* **A**. Accept B if user tests show the closed Navigator hides the sections.

### O-5 · Book

- **A. Pages view + Book layout in the right column of that view + Export dialog** (recommended). *Pro:* the preview is where the settings change; Export is a command. *Con:* the right column differs in one view (labeled clearly).
- **B. Book layout as a separate window with a live preview.** *Pro:* the main window is untouched. *Con:* two windows to arrange.
- **C. Keep Book as a mode.** *Con:* F-A-04.

### O-6 · Moving scenes

- **A. Immediate everywhere** (list and Board), Undo, continuity notice with "Add to Review" (recommended). *Pro:* one model; nothing to ask on leave. *Con:* a big restructure is many undos (mitigated: snapshot "before reordering" taken automatically at the first move of a session in Board).
- **B. Staged everywhere** (list too). *Con:* typing into a moved scene before Apply becomes impossible to define.
- **C. As in d7.** *Con:* F-A-06, F-A-59.

### O-7 · Settings

- **A. One window, two scopes** (All projects / This project) (recommended). *Pro:* one search box; one place to look. *Con:* the scope must be very visible on each row ("This project" tag).
- **B. Two windows as in d7.** *Con:* F-A-44.

### O-8 · Status bar

- **A. Fixed slots**: left: style chip, words, page, Saved. Right: Show ▾ (with Reveal and Whole book/By chapter inside), History, zoom (recommended). *Pro:* 7 items instead of 10; stable positions. *Con:* By chapter is one click deeper.
- **B. As in d7.** *Con:* F-A-31 to F-A-34.

---

## 5. What d8 screens should show (navigation lens)

Sample content: *The Blue Lamp*, 11 chapters in two parts, Vega, Kit, Lena, Marta as reader.

1. **N1 · The window, labeled (replaces S02 annotations).** Write/Text view of ch. 7, Navigator closed, Reference closed. Strip: [Navigator icon] [‹ ›] breadcrumb "7 Lena's warning ▾ › Lena lies… ▾" · centered view switch **Text | Board | Pages** with Text pressed · right: **Review 12** toggle, Find, bell, [Reference icon]. No Undo arrows in the strip. Status bar per O-8A.
2. **N2 · Navigator sections.** Three small frames side by side, same window: the Navigator head with **Manuscript · Codex · Research** and each section's content. Manuscript with "Discarded · 3" and "Unplaced · 2" pinned at the bottom. Codex with People 8 / Places 5…. Research with Inbox 3 / Topics. In each, the hover "+" between rows.
3. **N3 · Codex entry in the center.** Lena's entry open in the center (content of S18), Navigator on Codex, Reference panel showing ch. 7's paragraph. The view switch is hidden (not manuscript) and the breadcrumb reads "Codex › People › Lena". Back arrow tooltip "Back to ch. 7 · Lena's warning".
4. **N4 · Review as a layer.** Text view of ch. 7 with **Review 12** pressed. Right column = margin with header: kind toggles, people toggles, "Review all ▶", "Add notes from a reader's copy…", and a small "Reference ▸" swap. Navigator still the plain chapter list, now with counts. Show Marta's note being replied to *while the cursor stays in the text*.
5. **N5 · Board view with the Navigator.** Plan rows (S16 content), Navigator open on Manuscript (clicking ch. 10 scrolls the board), moves immediate: a notice "Moved 'Lena unlocks the back room' to ch. 10 · Kit is inside the back room in 10.2 before Lena unlocks it · Undo · Add to Review". No Apply/Discard bar. Reference shows the scene's info.
6. **N6 · Pages view.** S24 content, the right column titled **Book layout**, Export button opening the Export dialog (inset: format, range, include notes, Export).
7. **N7 · Menu bar inventory (replaces S29 bottom).** All menus open together: File, Edit, Insert, Format, **Book**, View, **Go**, Help, with the items from F-A-20 to F-A-26 and keys. AI items marked with the spark. File shows "Saved automatically · 19:32" as its first gray line. Edit ▸ Settings… `Ctrl+,`.
8. **N8 · Layer stack and Esc.** A diagram screen: peek card open over the text, Find widget at the top of the page column, Ask conversation at the right, a standing notice at the bottom with the Ask button lifted above it. Callouts: which one has focus (ring), what Esc closes in each focus state, what Back does.
9. **N9 · Back history list.** Long-press on ‹: a menu listing "ch. 7 · Lena's warning", "Codex · Lena", "Research · Licensing hours", "ch. 2 · The bartender", with the current place checked.
10. **N10 · Opening a reader's .docx.** The writer drops "The Blue Lamp – for Marta.docx" on the window. A standing notice: "This is the copy you sent to Marta on Nov 7 · **Add her notes** · Import as new text · ✕".
11. **N11 · Settings, one window, two scopes.** The scope selector at the top on "This project (The Blue Lamp)", the search box finding "chapter heading" in both scopes, showing the style editor with **On screen | In the book** columns for Chapter heading.
12. **N12 · Read-only split.** Writing ch. 7, Reference panel showing ch. 2 "The bartender" as text (opened from the list's right-click "Open beside"), its head reading "TEXT · ch. 2", with "Open" and "Show in text" at the foot.
13. **N13 · Narrow window (1100 px).** Navigator open, Reference opened on top as an overlay at the page edge (not closing the Navigator), per F-A-17.
14. **N14 · The fallback (O-1B)**, drawn only for comparison: strip with **Write · Plan · Notebook · Book** and the Review toggle separate. This lets the owner see both cuts.
15. **Changed: S04** (Last session buttons open the Review layer, the Board filtered to Unplaced, Research ▸ Inbox). **S16/S35** without Apply/Discard. **S23** with "Undo this" per change and a long-press Back. **S33** with the priority order of notices, tips and the Ask button lift.
