# Libreto — concept: one page, seven pieces (draft 0)

Status: **for discussion.** This is not a final design. It reconciles the 315 ideas in `docs/research/writer-needs-ideas.md` with the review notes of 2026-11-06 (`docs/research/writer-needs-ideas-notes-2026-11-06.md`), plus new research (§8). Screen concepts are in `docs/design/concepts/` (§7). Visual style is not decided; the screens show only what is on screen and when.

The thesis: the review notes keep asking for the same three things — write first and fix later, never lose your place, AI that is present but silent. The whole list fits into **one page and seven pieces** if we refuse to add chrome and give every entity one grammar.

---

## 1. Core principles (testable)

1. **Blank-page test.** A new project opens as a page and a status line; nothing else is on screen. Every other piece is summoned by a key, a click or a setup, and disappears the same way.
2. **Two-second return.** From any screen or piece, one `Esc` (or the "Text" breadcrumb) puts the cursor back where it was in the text. Tested by counting keystrokes from every view.
3. **Nothing replaces anything.** Opening a card, a task, a chat never closes what was open. Transient things float (peek); kept things are added (pin); the side column has Back. A tester must never say "where did my notes go?" (B14).
4. **One grammar for every entity.** Name, chapter, scene, note, task, research item, style: single click = peek, double click = go there, `Esc` = dismiss, pin = keep, Back = return (C14). No exceptions, no second mechanism.
5. **Two marks on the page.** The text shows at most two kinds of visual marks at once (default: style tint and note dots). Spelling, entities, echoes, authorship tints are toggles that swap one of the two in, never a third (A4, D26).
6. **No toolbar.** A control appears only next to the thing it acts on (selection pill, margin, paragraph), or in the Bar by name. Anything a regular writer uses less than daily is Bar-only (A7, B19).
7. **AI never touches the page unasked.** Its only unsolicited surfaces are the presence dot and the session briefing. Its work arrives as tasks; its edits arrive as choice blocks. Never mid-sentence (K39, D4).
8. **Cheapest answer first.** Script → index → small model with a minimal, document-free prompt → big model with codex excerpts. Every call above "index" is loggable with what it sent (A11, K34, R10 note).
9. **Nothing forced, everything derivable.** Chapters, scenes, styles, cards, summaries, tasks can all be produced *after* the text exists, mostly by scripts and AI (B16, F26). A writer who only types still gets a navigator.
10. **Setups, not settings.** Differences between writers are named setups (§4), not a growing options map. The preferences dialog fits one screen; anything that would not fit becomes a Bar command or is cut (A32, B12).

---

## 2. The pieces

Seven pieces, plus three views of the page. Nothing else may be added without removing something.

| Piece | Holds | Appears | Dismissed |
|---|---|---|---|
| **Page** | The book as one continuous text; headings are chapters; soft scene marks; styles; choice blocks (before/after) inline | Always | Never |
| **Navigator** (left) | Book structure with one-line summaries per scene; search box; task/note counts per chapter; below it, collapsed: People, Places, Things | `Ctrl+1` or setup; collapses to a 4-px handle | Same key; auto-collapsed in Just write |
| **Margin** (right of page) | Paragraph-anchored things: notes (the per-paragraph note box), task markers, AI dots, footnote stubs | Hover a paragraph shows a faint `+`; notes show when they exist | Notes fold to dots on `Ctrl+M`; a dot expands on click |
| **Peek** | A floating card for anything clicked: entity, scene, note, task, search hit, style. One size, same layout: title, one line, evidence snippet, actions ("Go", "Pin") | Single click on any linked thing, or hover + `Alt` | `Esc`, click away, scroll; pinned → Tray |
| **Tray** (right column) | Stack of kept cards: Tasks (the review queue), pinned entity cards, research, the inbox. Has Back/Forward and remembers its stack per project | Pin, "Review", or setup | `Ctrl+2`; never auto-replaced |
| **Bar** | A Spotlight-style box over the text: one field, three result groups (Commands, In the book, Ask). Grows into the chat when a question is asked; docks to a top strip for Find & Replace | `Ctrl+K` (also a small magnifier in the status line for mouse users) | `Esc` collapses; thread is kept and reopens with the same key |
| **Status line** (bottom) | Breadcrumb (Part › Chapter › scene, each a menu), words, approx. page, AI presence dot + one-word label, setup name | Always (hidden in Concentration) | — |

**Views of the Page** (switched in the breadcrumb, `Ctrl+Shift+V`; always "Text" to return):

- **Text** — default.
- **Cards** — scenes as cards (corkboard/outline), generated from the navigator's summaries; drag reorders only on "Apply" (F9).
- **Book** — the compiled look: pages, headers, numbering, trim. Read-only; "Back to text" (B10, B20).

**Selection pill**: selecting text shows a three-item pill — *Style*, *Note*, *Ask* — nothing else (A17, A18). A fourth item is a design failure.

### Where the 315 ideas land

- **Page**: A1–A15 (styles, editing), A22 (fold), A24 (footnote stubs in margin), A25 (undo), A28/K40/I8/O4 (all one *choice block*), A29–A35, B1–B2 (chapter narrowing: ends of a chapter show "next chapter / whole book" links), B5, B9–B12, B16–B21 (Concentration = page only, status line hidden), B24–B27, D14–D16, D25–D26, J19–J21 (toggleable tints), K36.
- **Navigator**: C3, C8–C11 (marks in the navigator, not a minimap), C13–C14, F1–F4, F20 (summaries *are* the reverse outline), B6, D6, M7, E9 (styles as a filter).
- **Margin**: H1–H6, H9 (counts), G10 (placeholders become tasks), K6, A24.
- **Peek**: D1–D8, D12, C12, E3, J4, L8 ("why this fired" is the peek of a task).
- **Tray**: H9, K7, K30, I11, I13, O3–O6, G1–G4 (inbox is a Tray card), G11, D1 pinned.
- **Bar**: C7–C8, E1–E11, K1, K4, K8, K18–K24, K27–K28, A10, A16 (no `/` menu: the Bar is the menu), L11, E7.
- **Status line**: M1–M3, M5, B10 (page number), K9, K39.
- **Cards view**: F5–F10, F13, F16–F21, F23–F26, J15–J18 as optional overlays.
- **Book view**: P1–P10, B20, N9, I4 (diff against last export).
- **Project setup** (one dialog at creation): P6, P10, Q1, L6, K33, A13; files and safety N1–N8 are menus, never UI.
- **History** (a Bar command opening a compare in the page): I1–I6.

---

## 3. AI presence

**States** (one dot in the status line, right end):

| State | Dot | Label | Meaning |
|---|---|---|---|
| Off | none | — | No AI level or Claude not connected; scripts still run |
| Silent | hollow | — | Nothing to say |
| Working | pulsing | one word: *indexing*, *summarising*, *checking facts* | Spending time or tokens; click shows what and how much |
| Has something | filled + count | *3 things* | Tasks waiting; click opens the Tray's Tasks |

That is the whole unsolicited surface. Plus one margin dot per paragraph where a task sits, visible only when Tasks are open or the "tasks" tint is on. No popups, no toasts, no mascot, no name (see §5).

**Session-start briefing.** When the gap since the last activity exceeds the session threshold (§5), the Bar opens once, as a card over the text:

> Last time: Vega left the Blue Lamp without paying (chapter 7, "Lena's warning").
> Open: 2 to-dos, 4 things I checked.
> [Continue writing] [Review] [Open chapter 7]

`Esc` or any key = continue writing. "Review" opens the Tray's Tasks. The card never returns in the session.

**Review queue** = the Tasks card in the Tray. One list, one grammar, for every source: writer's to-do notes, placeholders, AI findings, imported editor comments, style lint, continuity. Each task: type icon, one line, chapter, confidence (question vs flag). Sorted by relevance (type weight × recency × whether it touches the open chapter). Click = peek with evidence and "why this fired"; double click = go to the place with the choice block already open where there is a proposed fix. Resolve: *Done*, *Not now*, *On purpose* (never again for this fact), *Mute this kind* offered after three "on purpose" in a category (K38, J2). Done tasks fade into history.

**Levels** (set once in the project setup, changeable in the Bar):

| Level | What runs | Tokens |
|---|---|---|
| 0 Off | Scripts only: dictionary, structure detection, index, counts | none |
| 1 Quiet | + small-model micro calls: note typing, scene summaries, name detection confirmation | cents |
| 2 Reviews | + big-model reviews at session end or on "Review now": continuity, cards, style lint | per review |
| 3 Proactive | Level 2 runs in the background while the writer pauses; proposals wait in Tasks | highest; dot shows cost |

**Saving tokens, in order:**

1. **Script**: spelling (dictionary first), smart quotes, dashes, structure ("Chapter" lines, `***`), word counts, placeholder scan, repeated-word scan, name co-occurrence. Free, instant.
2. **Index** (the codex): entities, mentions, scene boundaries, summaries, facts already extracted. The Bar's "In the book" answers from here; "When did Vega last see Kit?" is an index query before it is a prompt (C13, E10).
3. **Small model, minimal prompt**: a single-purpose call with only the note, the paragraph, and the type list (the A11 note's example). Scene summary from one scene's text. Never the document.
4. **Big model with excerpts**: reviews get the codex plus the changed scenes only, with the prompt previewable (K34). Chat gets what is on screen (open peeks, pinned cards, selection) and the codex, never the whole book unless asked.

In v1 the big model is Claude in Claude Desktop through MCP; levels 0–1 need no connection, levels 2–3 light the dot only when Claude is connected to this project (K3). The Bar's "Ask" group routes to Claude Desktop with the context already attached (K4); when in-app chat arrives it lands in the same Bar.

---

## 4. Setups

Chosen at project creation with one question ("How do you work?"), switchable in the Bar. A setup is only which pieces are open and which tints are on; nothing is unavailable in any setup.

| Setup | Open by default | Tints | AI level |
|---|---|---|---|
| **Just write** | Page, status line. Navigator collapsed to its handle. | Style tint only | 1 Quiet; briefing on |
| **Planner** | Page, Navigator (with People/Places expanded), Tray with Inbox | Style + entity | 1; Cards view one key away |
| **Reviser** | Page, Navigator with task counts, Margin notes unfolded, Tray with Tasks | Style + tasks | 2 Reviews; briefing on |
| **Pro** | All of the above + faint markup, authorship tint available, shortcut sheet | Any two | 3 Proactive; prompt preview on |

Concentration mode (`Ctrl+Shift+Enter`) is not a setup: it hides everything but the page from any setup and returns to it.

---

## 5. Answers to the open questions

**Comments vs notes.** One thing: a **note**, anchored to a paragraph or a selection, with a *type* and an *author*. Types built in: To do, Doubt, Idea, Check fact, For the editor; the writer adds types the way they add styles. A "comment" is just a note whose author is someone else (an editor, a beta reader, the AI). The per-paragraph note box used in this review is the editor for all of them. Notes that need a page become a note document with one click ("Expand") and stay linked. Every To do / Check / AI note is also a task; the Tray's Tasks is a filter over notes, not a second store. (H6, A11, A35.)

**Styles.** Two layers. Six **super-types** fixed by Libreto, each with a known export behaviour: *Heading*, *Block* (Letter, Poem, Song, Epigraph, Sign), *Inline* (Emphasis, Thought, Foreign, Sign-in-line), *Break* (scene, section), *Material* (never exports), *Plain*. A **user style** = super-type + name + one look choice from a short list (colour, caps, centred, indented, italic, small). That is the whole "based on" model: a style is based on its super-type and nothing else; no inheritance chains (A5, A12). **Bold and italic stay allowed** as plain formatting; a review task may later ask "these 14 italics: Thought or Emphasis?" and convert in one accept, never block (A8). The AI proposes new styles when it reads a sign or a letter, as a task (A1, A6). A *marks* toggle in the status line cycles plain → tinted → labelled so the page never has to be a colour party (A4).

**Scenes in flowing novels.** The script proposes boundaries (`***`, blank-line + time or place shift, chapter starts); the small model confirms and writes the one-line summary; the writer sees the result only as navigator rows and can drag a boundary or merge rows. Scene marks live in the index until the writer makes one explicit (then it is a Break style in the text). Nothing is written into the manuscript by the AI (D6, C9, F1).

**Panel-state loss.** Peek floats, so looking at something changes nothing. Pinning adds a card on top of the Tray stack and the Tray has Back/Forward, remembered per project. A card is never swapped for another (B14, B15).

**Chat placement.** The Bar. Narrow side chats are unreadable; a chat is a conversation over the text, centred, two-thirds of the page width, with the text dimmed but visible behind it, like Spotlight grown tall. `Esc` collapses it and keeps the thread; the dot reads *working* while an answer is being made. The chat sees what is open (peeks, pins, selection) (B15, B14).

**AI name and persona.** No name, no avatar, no first person in findings ("Vega's eye colour differs: green in ch. 2, grey in ch. 9"). In the chat it answers as "Libreto". A named assistant invites Clippy; a nameless one is furniture (K7, K41). Tone follows the writer's tone.

**What a session is.** Netflix rule: a gap of more than 6 hours ends a session. The briefing shows only when a new session starts *and* there is something to say (something in Tasks, or a last-place line). Short breaks never trigger it (K31, K30).

**When the index updates.** Scripts: on every save, debounced to a second, free. Small-model summaries: when a scene changed by more than a few sentences *and* the writer left it or paused for two minutes. Big-model reviews: session end, "Review now", or background in level 3. Minimum change to the text never triggers the expensive layer (D24, R3).

**Single file vs chapter files.** The writer sees one book, always: the page is the whole text, so what came before and after is one scroll away (A24). "This chapter only" is a narrowing of the same page, with "previous / next / whole book" links at its ends (B1, B2). Chapter files are storage, invisible; a new chapter is a heading, typed or from the Bar, and Libreto splits the file.

**Find & replace focus.** The Bar docks as a strip at the top; the text never gets covered. Keys: `Enter` next, `Shift+Enter` previous, `Ctrl+Enter` replace and next, `Ctrl+Shift+Enter` replace all with a preview task. `Esc` once moves focus to the text at the current hit with the strip still showing; `Ctrl+F` returns focus to the strip at the same hit. Two places, one key each way (E7).

**Peek vs card vs floating window.** Three depths, one object: **peek** (transient, floating, one layout), **card** (the same content pinned in the Tray), **page** (double click: the entity's own page in the page area, with Back). No other floating windows exist (D8, D3, D16).

---

## 6. Cut, defer, merge

**Cut** (complexity without daily use):

- A20 sentence commands, A21 multi-cursor: a hidden pro shortcut at most; no UI.
- A26 undo tree, A27 selective undo: replaced by plain undo/redo that survives typing (redo stack kept as a snapshot) plus History.
- B3 selection view, B7 dialogue view: the Bar's results and the per-character extract in a peek cover them.
- B22, B23, B28, M4, M6, M10, M11: wellbeing gadgets; optional means cut for v1.
- C9 numbered bookmarks, C10 minimap: the navigator's marks do this.
- D9, D19, D22–D24, D27, J6, J13, J25: later analysis modules.
- E5, E6, E8: metadata search, saved searches, editable results.
- F11, F12, F14, F15, F22, F27: corkboard extras; the cards view starts flat.
- G5, G12, G14, I7, I9, I14, K10 (a level replaces snooze), K25, K26, L3, L7.
- N3 several projects open: one at a time.
- O2, O8, P9, P11, P13, Q3–Q5.
- R1, R2, R4–R6, R8, R9, R11, R12: spaceship ideas stay on the list.

**Defer** (good, needs its foundation first): D13 custom card fields (AI fills them, after D1), D20–D21, F17–F19 overlays, J3–J5 story time, J8–J11, K32 blurbs, P4 EPUB, O1 share links, D26 character pictures.

**Merge**:

- Comments + notes + to-dos + placeholders + AI findings → *notes with types*, filtered as *tasks*.
- Chapter view + full view → one page with narrowing.
- Hover card + panel card + smart search → peek / card / page.
- Corkboard + outline + reverse outline + synopsis → navigator summaries, shown as Cards view.
- Alternative takes + proposal view + scene variants + imported tracked changes → *choice block*.
- Session briefing + previously on + open where I left off → the briefing.
- Workspaces + writer type → setups.
- Ask the book + search by meaning + chat + palette → the Bar.
- Snapshots + compare + cut file + what changed since sent → History.

---

## 7. Screens to mock up

Each shows the text with at most two marks. "Hidden" is what the screen deliberately leaves out.

**S1 — Just write, first minute.** Vega's story, blank project in *Just write*. Visible: page with the cursor, status line (0 words, dot hollow, "Just write"). Hidden: navigator handle only, no Tray, no pill. Text: plain, one typeface. **Interaction:** the writer types "Chapter 1" on its own line and keeps writing; the script makes it a heading on the next paragraph, with a one-time underline hint in the status line "Chapter detected — Ctrl+Z to keep as text". No popup.

**S2 — Session briefing.** Reviser setup, next morning. Visible: page dimmed behind the Bar card ("Last time: Vega left the Blue Lamp without paying… Open: 2 to-dos, 4 checks"), three buttons. Hidden: everything else untouched behind. **Interaction:** `Esc` dismisses to the cursor; "Review" opens the Tray's Tasks with the first task highlighted.

**S3 — Navigator with summaries.** Chapter 7 open. Visible: navigator rows "Ch 7 · Lena's warning — Vega asks about Kit; Lena lies about the back room; Vega leaves without paying" (three scene rows, one line each), task counts in grey, search box at top. Text: style tint only. **Interaction:** single click on a scene row → peek (summary, first line, "3 mentions of Lena"); double click → the page scrolls there; Back in the breadcrumb returns.

**S4 — Margin note.** Paragraph "Kit said no." Visible: the `+` on hover, then the note box beside the paragraph with a joining line, type chip set by the small model to *Doubt* a second after typing "He could have said maybe, check later". Text: one note dot. Hidden: Tray. **Interaction:** `Ctrl+M` folds the note to a dot; the dot shows in the navigator's count for chapter 7.

**S5 — Peek, pin, Tray keeps state.** Tasks open in the Tray. Visible: the writer clicks *Lena* in the text; a peek floats beside the word: picture, "Bartender at the Blue Lamp", first appearance ch. 2, last seen 14 pages ago, "4 scenes". Text: entity tint on for this one name only. **Interaction:** "Pin" adds the Lena card above Tasks in the Tray; Tasks stays; Back returns to it.

**S6 — Bar: search, then ask.** `Ctrl+K`, typed "lena". Visible: three groups — Commands (none), In the book ("Lena — character", then hits with chapter and scene summary), Ask ("When did Vega last see Lena?" suggested). Text dimmed behind. **Interaction:** choosing Ask grows the Bar into a two-thirds-width conversation; the answer comes from the index with links; `Esc` collapses it and the thread is kept.

**S7 — Reviewing a task with a choice block.** Task "Vega's eye colour: green (ch. 2), grey (ch. 9)". Visible: the peek with both snippets and "why this fired"; double click goes to ch. 9, where the paragraph is shown as a choice block: before | after side by side, changed word highlighted, *Keep mine* / *Take* / *On purpose*. Text: tasks tint only. **Interaction:** *Take* applies, snapshots, marks the task done; the Tray advances to the next task.

**S8 — Styles from the pill.** Writer selects "You can't pass". Visible: the pill (Style · Note · Ask); Style opens a short list sorted by use with a search field; "Sign" chosen; the text turns centred capitals with a faint tint. Hidden: no toolbar, no dialog. **Interaction:** the status-line *marks* toggle cycles plain → tinted → labelled, showing the same page three ways.

**S9 — Find & replace strip.** "Blue Lamp" → "Blue Lantern". Visible: the Bar docked as a strip at the top with the two fields and four keys shown; the page below with the current hit highlighted, never covered. **Interaction:** `Esc` drops focus into the text at the hit; the writer edits by hand; `Ctrl+F` returns to the strip at the same hit; `Ctrl+Shift+Enter` makes a preview task instead of replacing blind.

**S10 — Book view.** Breadcrumb switched to Book. Visible: two facing pages with running heads and page numbers, chapter 7 opening on a recto, "p. 142 of ~310" in the status line, "Back to text" at the left. Hidden: navigator, margin, Tray. **Interaction:** clicking a paragraph in Book view returns to Text at that paragraph; the approximate page number stays in the status line afterwards.

The screens are in `docs/design/concepts/` (`index.html` shows them all with captions).

---

## 8. What the new research adds

Full reports are summarised here; sources are linked in each point.

### 8.1 Claude inside the app with the writer's own login

- **Not allowed today without Anthropic's approval.** Claude Code's legal page (rewritten February 2026): "Anthropic does not permit third-party developers to offer Claude.ai login into their own applications, or to route requests through Free, Pro, or Max plan credentials on behalf of their users." Credentials may not be collected or intermediated; sign-in must go through Anthropic's own flow. Tools that reused Claude Code's tokens were blocked from January 2026 ([legal page](https://code.claude.com/docs/en/legal-and-compliance#authentication-and-credential-use), [Agent SDK overview](https://code.claude.com/docs/en/agent-sdk/overview)).
- **No public "Sign in with Claude" or approval programme** was found. The channel named is [Contact Sales](https://www.anthropic.com/contact-sales).
- **Allowed and using the subscription:** a local MCP server installed in Claude Desktop as a one-click `.mcpb` bundle, plus an **MCP App**, which shows interactive cards (our proposals) inside the Claude chat ([MCP bundles](https://claude.com/docs/connectors/building/mcpb), [MCP Apps](https://claude.com/docs/connectors/building/mcp-apps/getting-started)). Setup is about four clicks, once.
- **Grey area:** spawning the writer's own installed and signed-in Claude Code (`claude -p`). JetBrains states that "Anthropic terms do not allow subscriptions to be used this way" for an SDK chat, and instead runs the real `claude` program in a terminal ([JetBrains](https://www.jetbrains.com/help/air-ides/air-use-claude-subscription.html)). Not for writers.
- **Cheap tokens:** Haiku 5.5 costs $0.10 / $0.50 per million tokens in/out; a note-type classification costs about $0.00004. Local models (Transformers.js, `@electron/llm`) are possible but experimental ([pricing](https://platform.claude.com/docs/en/about-claude/pricing)).
- **Gap: Linux.** `.mcpb` bundles run on macOS and Windows only, and v1 is Linux first. On Linux the first path is the optional API-key chat in the Bar.

**Proposal:** v1 keeps "Connect Claude" (MCP + MCP App) on macOS and Windows, the API-key chat (Haiku by default, key in the OS keychain) everywhere, and the cheap path (scripts → index → small model) for levels 0–1. In parallel we write to Anthropic asking whether an open-source app may start the writer's own unmodified, self-signed-in Claude Code, or offer in-app login.

### 8.2 File format: Markdown or something else (A3)

- Tested with pandoc 3.1.3: the planned `<!-- ^id -->` paragraph anchors are **lost** on DOCX export, and `{.sign}` classes do not become Word styles without a small filter.
- **Recommendation: Djot** (by the author of pandoc and CommonMark) instead of Markdown + pandoc attributes. Same readability and token cost; ids and styles on any block or span are part of the syntax (`{#p-7f3a}` above a paragraph, `[I should not be here.]{.thought}`, `::: sign`); the editor library (djot.js) and the export tool (pandoc ≥ 3.1.12) follow the same rules. HTML-subset files are the runner-up (about 40% more tokens, harder to read). ProseMirror JSON, TEI, DocBook and ODT are rejected as storage.
- Changes to `storage.md` if accepted: `.dj` files; `{#id}` anchors; a `styles.yaml` (id, name, super-type, look); comments anchored by paragraph id + quoted words + text around them; alternates in their own file so the chapter file always reads as the book. A one-day test on a real chapter (Djot → DOCX → Djot) should come first.

### 8.3 Lessons from our own tools

- **literary-critic:** pins every note and finding with the exact quote plus text around it, and never moves a pin silently (marked *changed* or *lost*); a story bible of typed items with saved questions (setups without payoff, threads silent for 1000+ words, near-repeats); script checks for repeated phrases, the same word within 50 words, accidental rhymes, repeated sentence openers; "ask the codex before reading the text"; a "who writes" setting (off / up to 12 words / on); one change per card. Running jokes are not tracked yet: treat them as motifs.
- **docx-fixer:** Spanish dialogue-dash rules that work (opening `—` glued to the word, closing dash before punctuation, `.—` flagged; "full stop before the narrator's dash" left to a person); three severities AUTO / REVIEW / INFO; a list of DOCX pitfalls for export (custom styles flagged, `qFormat`, no `autoRedefine`). Smart typing can apply many of these as the writer types.
- **opos:** focus mode folds the side panel to zero, centres the page and fades chrome to 25% (hover brings it back); every paragraph linkable by a stable id; link colour says where a link goes; terms with hover definitions and backlinks; notes as post-its under their paragraph that follow a rewritten paragraph and say so.
- **integral-job-search:** one goal, steps that each have a visible output; only a few steps required, the rest offered and declinable; position saved continuously; resume says what it resumes and why; "a subject declined twice is not raised again". For Libreto: Capture → Plan → Draft → Revise → Deliver as optional, resumable steps (only Draft and Deliver required), offered by the briefing, never forced.

### 8.4 What writers say (forums; Reddit refused automated fetching)

- Scrivener is kept for organising and left for writing: "I love Scrivener for organising my chapters… I hate it for actually writing in." Compile is the main complaint; the manual "rivals War and Peace" ([L&L forum](https://forum.literatureandlatte.com/t/this-software-is-inscrutable-and-damn-near-unusable/139718), [Mumsnet](https://www.mumsnet.com/talk/creative_writing/2633625-Scrivener)).
- One file vs chapters: writers want scene units **and** a seamless whole-book view with search across everything; split files make continuity checks hard ([Writing Forums](https://www.writingforums.com/threads/managing-your-book-the-nuts-and-bolts.210547/), [Codidact](https://writing.codidact.com/posts/25162)). This supports "one page with narrowing".
- Maintaining wiki links by hand is "an enormous amount of work": links must be automatic.
- Readers in 2026 count spelling help as fine (11% call it AI-written), structural advice as 50/50, and any AI draft as AI-written (about 90%) ([Book Riot](https://bookriot.com/what-counts-as-ai-survey-results/)). Default AI to quiet, keep "no AI" first-class.

### 8.5 UX patterns adopted

- **Corrections** (Gmail, LanguageTool, Word): red for spelling, one quieter mark for everything else, style checks hidden unless asked for. Dismissal says its scope in words: *Ignore here* (returns only if the text changes), *Not a mistake: add "Blue Lamp"*, *Stop checking this rule*. A list of what was turned off, to undo it.
- **Find & replace:** a strip docked at the top that never covers the text (VS Code), Enter / Shift+Enter, Esc to the text at the hit, Ctrl+F back to the strip; replace moves to the next hit (Obsidian's bug avoided).
- **Margin notes that don't fit:** colliding notes push each other down, tall ones scroll inside, the note slides toward its paragraph on hover (gwern.net sidenotes); the note and its words highlight each other (Word's modern comments). A joining line is drawn only for the selected note, so the page never fills with lines.
- **Peek:** inside the editor a hover card needs a modifier key or a click, so it never fires while writing (Obsidian); each card has a "don't show these" cog (Wikipedia); a peek can be promoted to the Tray in one step (Arc, VS Code); the Tray keeps its own back/forward (Obsidian per-tab history).

---

## 9. Decisions for you

Proposed answers are in §5; these are the ones that change the direction, in order of impact.

1. **Seven pieces** (Page, Navigator, Margin, Peek, Tray, Bar, Status line) and nothing else: accept as the frame?
2. **Chat in the Bar** (a Spotlight-like box that grows into a centred conversation over the dimmed text), not a side panel.
3. **Notes = comments = to-dos**: one thing with a type and an author; Tasks is a filtered list of notes.
4. **Styles**: six fixed super-types + user styles (name + one look); bold and italic stay allowed, a later review offers to turn them into styles.
5. **AI with no name and no avatar**, four levels (Off, Quiet, Reviews, Proactive), one dot in the status line.
6. **Djot** instead of Markdown, after a one-day test.
7. **Claude**: MCP + MCP App on macOS/Windows, API-key chat everywhere (Linux first), and a written request to Anthropic. Is Linux without the subscription path acceptable for v1?
8. **Cuts** in §6: anything there you want back?
