# Critique D: deciding and going back (draft 7)

Lens: Review mode, marks and cards, notes and replies, readers' copies, the two-column compare, Review all, History, snapshots, Bring back, Undo, notices / bell / History, Ask, AI proposals, AI disclosure and log, token and budget UX.
Screens checked: S03, S09, S14, S15, S22, S23, S25, S33, S34 (pictures and text), plus S04, S16, S21 and the spec's D-5, D-18 and command list.

## 1. Verdict

1. **Proposals have no lifecycle, so they go stale and overwrite you.** A card stores Was/Now. If you edit the paragraph afterwards (AI card, reader's change, Merge for me, chat proposal), Apply either fails silently or puts back old text over your edit. Nothing in the concept says "out of date". This is the single blocker of this lens.
2. **The reader import is a two-way diff where a three-way merge is needed, and it only works for one reader.** "Yours | Marta's" hides what you sent (the base). It cannot hold three readers on one paragraph. It accepts or rejects a whole paragraph, where Word users accept change by change. And it sends ordinary non-conflicting merges to the AI ("Merge for me"), which breaks D-18: plain diff3 does that for free.
3. **"Undo is one list" contradicts itself.** An old notice's Undo, "Undo all" for a walk during which you typed, the bell's Undo, and Undo of a Plan Apply after typing are all *selective* reverts. A linear stack cannot do any of them. Call them **Revert** (a new, inverse step on top of the stack, like `git revert`) and keep `Ctrl+Z` strictly linear and local to what you are looking at.
4. **Review does not scale past about 20 cards.** 300 imported comments, or 80 AI findings, meet a one-at-a-time walk, a count that only grows, "4 / 12" positions that shift when cards arrive, no seen/unseen state, no grouping, no bulk action, no batch ("round") to finish or undo. You need a model of review **rounds** (an import, an AI pass) with progress.
5. **History cannot answer the two most common questions without an AI:** "what changed in chapter 7 since Tuesday" (no scope, no date, sessions as the only unit) and "where is the scene I deleted three weeks ago" (no search; it is routed to Ask). There is also no visible "save a version now" command, although the spec's acceptance test asks writers to take a snapshot unaided.
6. **The four colors are neither reserved nor color-blind safe.** Blue is also links, primary buttons and selection; green is also "connected" and +words; amber is also the AI warning; resolved notes turn green. Red and green dotted underlines look the same to about 8% of men. Who did a fix is shown three ways: S15 says "You", S03 shows the AI spark, and in fact it was a Libreto rule.
7. **"Write shows only your notes" hides feedback exactly where you are editing.** You can rewrite the paragraph Marta commented on without knowing she did. Meanwhile the readers' *changes* do show in Write, as blue underlines. The rule is hard to state and leaks.
8. **One idea has three faces.** Card means a margin card, a notice card and a Plan scene card. "Card", "notice", "note" and "Last session" overlap, and the decision buttons have six vocabularies (Apply/Dismiss, Keep/Undo, Keep mine/Take proposed, Take Marta's/Keep mine, Restore, Bring back) in two different orders.
9. **AI disclosure appears only in Settings, and budgets are opaque.** Accepted AI text carries no mark. "Why?" may cost tokens. In Ask, Enter on "Lena" asks the AI instead of going to Lena. There is no estimate before "Read the book again". The default level is stated two different ways.

---

## 2. Findings

### A. Proposal lifecycle and staleness

**F-D-01 · blocker · S15, S22, S09, S34. Stale proposals.**
Problem: the AI proposes "Kit said no → maybe" on Monday. On Tuesday you rewrite the line as "Kit shook his head." On Wednesday you Apply in Review all with `Enter`. The card's Was no longer exists, so Apply either fails or writes "maybe" text built on the old sentence. The same happens with Marta's paragraph change after you rewrote that paragraph, and with a chat proposal left open while you kept typing.
Fix: every proposal stores its **base** (the exact text and a paragraph id and version). On every change to that range the card is re-checked and moves to one of three states:
- *Still applies*: the proposal's span is untouched, and the change is rebased automatically.
- *Out of date*: the card turns gray-blue, reads "Your text changed since this was proposed", and offers **Show both**, **Dismiss**, and for AI cards **Ask again** with a cost hint. Apply is disabled.
- *Gone*: "The words it was about are gone", with Dismiss only.
The walk skips out-of-date cards unless their filter is on. This is a rule of the core (`proposal.apply` refuses a mismatched base), not only of the UI.

**F-D-02 · major · S09. Chat proposals have no home.**
Problem: a "Take proposed" block left undecided disappears with `–` or ✕, or when you start a new conversation. The clock list keeps it, but nothing tells you it waits, and it is not in the Review count.
Fix: an undecided chat proposal becomes a blue Review card (spark, "from conversation 'Lena's lie'") when the conversation is closed. The block in the chat shows "Waiting in Review". The chat also gets the out-of-date state from F-D-01.

**F-D-03 · major · S15. A continuity finding is presented as a text rewrite.**
Problem: "Kit said no → Kit said maybe" picks a side of a contradiction (ch. 7 against ch. 10) and silently changes meaning. That contradicts rule 5 in spirit, and the Codex already handles contradictions better with "Fix in the text →" on each side.
Fix: separate **findings** (something is wrong; no text) from **proposals** (here is new text). A finding card gives two links, "Fix here (ch. 7)" and "Fix there (ch. 10)", plus "Propose a fix" (AI, with a cost hint), Resolve and Don't bother me. Only a proposal carries Apply.

**F-D-04 · major · S15, S34. Edit is undefined.**
Problem: "Edit to change the proposed text first": where is it edited, in the 320 px card or in the page? What happens to the card afterwards?
Fix: Edit puts the proposed text into the page as an editable blue region, with Done and Cancel at its end. Done applies the text as edited, records "Applied (edited)", and attributes the region to You, not the AI (see F-D-61).

**F-D-05 · major · S09, S22. No partial accept.**
Problem: the AI tightens two sentences and you want only the first. Marta made five small changes in a paragraph and you want three. The only choices are the whole block, Keep mine or Edit.
Fix: every change inside a proposal is a hunk with its own ✓ / ✕ on hover (Google Docs suggestion granularity). The block buttons then read **Take all · Keep all**, and a tally shows "2 of 5 taken".

**F-D-06 · minor · S03, S15. "Dismissed means gone, and it says so."**
Problem: it is gone where? If the AI pass runs again tomorrow it may propose the same thing.
Fix: dismissed proposals are remembered by a hash of base and proposal, are never re-proposed, and are listed in History under the filter "Dismissed". Say "Dismissed · won't be proposed again" on the card's last flash.

### B. Readers' copies and the compare view (S21, S22)

**F-D-07 · blocker · S22. Two-way where three-way is needed.**
Problem: "Yours (changed since sending) | Marta's". You cannot see what *you* changed and what *she* changed relative to the copy you sent. Take Marta's silently throws away your edits since sending, because her text is based on the old version.
Fix: a three-way model with the base being the "Sent to Marta" snapshot. Each changed paragraph is classified:
- *Only she changed it*: show it inline as a suggestion.
- *Only you changed it*: no card at all.
- *Both changed different words*: **auto-merged by plain code** (diff3), shown as one text with her words in blue, and a single Take hers / Keep mine.
- *Both changed the same words*: a real conflict, shown in three rows: Sent / Yours / Marta's.

"Merge for me" (AI) is offered only for real conflicts. That fits D-18 and removes most of its token cost.

**F-D-08 · blocker · S22. Several readers on one paragraph.**
Problem: Marta, Teo and Ines all edited the opening of ch. 3. Two columns cannot show four texts, and deciding Marta's card first makes Teo's card stale (F-D-01).
Fix: group by **paragraph**, not by reader. The card reads "3 readers changed this". Your text is shown with each reader's hunks inline, in a per-reader tint plus an initial (M, T, I), so it does not rely on color alone. Accepting a hunk rebases the others; hunks that conflict are flagged "Teo and Ines disagree here". A side-by-side "Show versions" is available on demand.

**F-D-09 · major · S22. The page turns into a different document.**
Problem: across the whole book, 40 compare blocks inside the running text make the page twice as tall. Write and Review "share scroll", so the scroll now jumps on every mode switch, and the "page that stays put" no longer holds. Can you type inside a block?
Fix: by default show reader changes **inline** in the real text (strike-through and insertion, Word-style, in the pending style). Two columns open only on one paragraph, on request ("Side by side" on the card, or `Ctrl+.` then `S`). Unchanged-paragraph folds belong in History compare, not in the living text.

**F-D-10 · major · S22. Order of the buttons.**
Problem: under the paragraph the buttons read "Keep mine · Take Marta's · Edit". On the card next to it they read "Take Marta's · Keep mine". The chat uses "Keep mine · Take proposed". So the same choice sits in two orders on one screen.
Fix: one rule everywhere, **left = keep what is there, right = take the new one, primary = right**, matching the texts' order (old above or left, new below or right). Same labels everywhere: **Keep · Take** (plus "Take Marta's" when there is a person).

**F-D-11 · major · S22, spec. Word tracked changes at character level.**
Problem: Word tracks insertions, deletions, *moves*, formatting changes and paragraph splits and joins. Readers who forgot "Track changes" send changes as silent edits. D-5 says "snapshots instead of tracked changes" but readers live in tracked changes.
Fix: the import spec must cover:
- accept and reject per Word revision;
- Word moves become one "moved" card;
- formatting changes are ignored by default, with a toggle to see them;
- untracked edits are found by diffing against the sent snapshot and labeled "changed without tracking".

**F-D-12 · major · S21, S22. Fragile paragraph ids.**
Problem: hidden ids are lost or duplicated when a reader:
- edits in Google Docs, Pages or LibreOffice;
- copies and pastes a passage;
- splits a paragraph (both halves keep the id);
- writes a new paragraph (it has no id).
And readers sent an older export or a PDF before ids existed.
Fix: ids are a fast path, not the only one. Fall back to fuzzy alignment against the base snapshot (sequence diff on normalized text), give each match a confidence, and send low-confidence matches to a "Couldn't place 4 comments: place them" list. Duplicate ids: the longest match keeps it. New paragraphs: anchor after the previous matched paragraph.

**F-D-13 · major · S22. Identifying the author.**
Problem: Word writes the author as "Marta G.", "marta", "Usuario" (the Spanish Word default) or "Author". A file forwarded to a second person mixes authors. Your own exported notes come back inside her file.
Fix: the import step shows "Comments in this file: Usuario (212) → [Marta ▾] · You (14, already here) · Teo (9)". Your own notes are matched by id and deduplicated; mappings are remembered per reader.

**F-D-14 · major · S22. Importing twice.**
Problem: the chooser lists the Oct and Nov files from Marta. Importing the Nov file twice, or a file that holds the Oct comments plus new replies, duplicates up to 300 cards.
Fix: deduplicate by Word comment id and text hash, and say so: "212 comments · 198 already here · 14 new". Replies to existing threads merge into those threads (this is the Word round trip, F-D-37).

**F-D-15 · major · S22. The ✕ on "Marta · Nov 7" is ambiguous.**
Problem: does ✕ clear the filter or remove the import?
Fix: the chip is a filter (✕ clears it). Removing an import is a separate, explicit "Remove this import…" in the Rounds list (F-D-20), which asks with counts and can be undone as one step.

**F-D-16 · minor · S22. Old base.**
Problem: you import the Oct 2 copy after the Nov 7 one, and the base is weeks old. Many of its changes target text that has since been rewritten.
Fix: on import, show "This copy is from Oct 2; 38 % of its paragraphs changed since. Import anyway?" Pre-mark cards on rewritten text as out of date.

**F-D-17 · minor · S22. PDF annotations.**
Problem: many beta readers mark up a PDF or an EPUB, not Word.
Fix: v1 says plainly that only Word and Libreto files are read, in the chooser's empty state. Plan PDF highlights and comments for v2; they are anchorable by fuzzy match (F-D-12).

**F-D-18 · minor · S22. Where the import starts.**
Problem: the chooser scans Downloads and the Desktop, but readers' files arrive by mail, and the mail client saves elsewhere.
Fix: also accept a drop of a .docx on the window, recognized by its embedded project id: "This is a copy of The Blue Lamp sent to Marta. Add her notes?"

**F-D-19 · minor · S22. Comments on vanished text.**
Problem: "shown at the nearest place, with 'the words it was on are gone'": after a heavy rewrite, 60 such cards pile up at random nearby places.
Fix: put them in a "Unplaced comments" group at the top of the round, each showing its quoted original words, with "Place here" (click a spot in the text) and Resolve.

### C. Review at scale: rounds, counts, walk

**F-D-20 · blocker · S15, S34. No batches.**
Problem: 300 imported comments, plus an 80-finding AI pass, plus 40 rule cards, end up in one undifferentiated pile counted "420". There is no way to say "I finished Marta's round" or "throw away this AI pass".
Fix: **Rounds**. Every import and every AI or rule pass is a round, listed at the top of Review's left column with progress, for example "Marta · Nov 7 · 150 / 300", "AI pass · Nov 12 · 12 / 80", "Rules · ongoing". Selecting one filters to it. Per round: Continue, **Dismiss remaining…**, **Revert this round…** and Close. The Last session notice lists unfinished rounds.

**F-D-21 · major · S15, S02. Bad count.**
Problem: the Review count (12) includes Done fixes, which need no decision, and red words: a fantasy novel has hundreds of unknown names. The count grows forever and becomes noise ("Clippy done wrong").
Fix: the count is **blue proposals plus unread notes from others**. Green done fixes are not counted (they auto-keep, F-D-27). Red words are counted only in the Unknown filter.

**F-D-22 · major · S34. "4 / 12" is unstable.**
Problem: the AI pass at session start adds 20 cards, the walk's position changes meaning, and a skipped card is lost in the middle.
Fix: the walk is "next undecided card in the current filter, in text order". The header shows "Decided 3 · left 9 (Marta)", not a position. Skipped cards get a "Skipped" state, and a "Skipped (2)" filter appears at the end of the walk.

**F-D-23 · major · S34. Surviving a restart.**
Problem: you reviewed half and closed the app. "Leaving the mode pauses the walk", but closing the app is not mentioned.
Fix: decisions are saved per card the moment they are made (the round keeps the progress). On reopening, Last session says "Marta's notes: 150 of 300 decided · Continue". Continue lands on the first undecided card after the last decided one.

**F-D-24 · blocker · S34. The walk's keyboard contradicts an editable page.**
Problem: the page stays editable during the walk, yet `Enter` = Apply, `Delete` = Dismiss and `Tab` = Skip. If the caret is in the text, Enter splits a paragraph and Delete deletes a character. `Tab` as Skip also breaks the accessibility rule that Tab moves focus. And "Esc does nothing" breaks rule 4, the app's own Esc rule.
Fix: during the walk, focus sits on the card. Keys: `Enter` Take/Apply, `Backspace` or `Delete` Dismiss, `S` Skip, `E` Edit (puts the caret in the text and suspends the walk keys until `Ctrl+Enter`). `Esc` ends the walk; the walk resumes from where it stopped (F-D-22), so ending it costs nothing. Spanish keyboard: letters only, fine.

**F-D-25 · major · S34. "Undo all" for a walk during which you typed.**
Problem: you typed fixes in between decisions. Undo all cannot be "one step" on a linear stack; it must reach under your typing.
Fix: rename it **Revert this walk**. It undoes only the walk's decisions, keeps your typing, and lists conflicts ("2 decisions touched text you edited after: kept"). It goes on the stack as one new step (see section E).

**F-D-26 · major · S15. 80 AI findings, mostly noise.**
Problem: they are walked one by one; the only defence is "Don't bother me" per kind, after the fact.
Fix:
- (a) every finding has a severity, shown as a tag (Error · Suggestion · Style), and the default filter hides Style;
- (b) the AI pass is capped: the top 15 by severity are shown, the rest folded into "65 more, lower confidence";
- (c) group by kind with bulk actions: "Repeated words · 31 · Show · Dismiss all";
- (d) the D-18 cost line on the round: "this pass: 0.42 €".
Settings gets "Findings per pass: 15 / 50 / all".

**F-D-27 · major · S02, S03, S15. Green marks never leave.**
Problem: after a month every corrected typo still has a green underline and a Done card with Keep. "Keep" does nothing useful.
Fix: green fades out by itself at the end of the session (auto-keep) and stays in History. Review shows only *this session's* fixes under Done. Drop the Keep button; the card has **Undo** only.

**F-D-28 · major · S15. Seen and unread.**
Problem: 300 cards and no way to tell which ones you have read.
Fix: cards from others are bold or show a dot until opened. Add an "Unread" filter. The count shows unread notes, not all of them.

**F-D-29 · minor · S15. Margin overflow.**
Problem: "Cards level with their lines" fails when ch. 3, ¶1 has 9 cards from 3 readers.
Fix: past 3 cards on a line, they fold to "9 notes on this paragraph ▸", which opens a thread list in the margin. State the collision rule: cards push down, and the connector line may slant within 2 lines; beyond that, fold.

**F-D-30 · minor · S15. A list view.**
Problem: deciding 300 comments in the page is slow when most are "typo here".
Fix: Review gets a **List** view (a table: chapter, quote, reader, kind, state, sortable). It allows multi-select with Resolve and Dismiss, like the Word Reviewing Pane or a GitHub review. Page view and List view are a toggle at the top of the margin.

**F-D-31 · minor · S15. Signals of agreement between readers.**
Problem: three readers flag the same paragraph, and that consensus is the most valuable signal in the import, but it is invisible.
Fix: a "Flagged by 2+ readers" filter, and in the chapter list a small "×3" on paragraphs where several readers commented.

**F-D-32 · minor · S34. Don't bother me is hidden too far away.**
Problem: silenced kinds are listed in Settings ▸ Tips.
Fix: list them in Review itself, at the bottom of the filters: "Silenced: Repeated words · Long headings ▸ Undo".

### D. Notes, replies, resolve and delete

**F-D-33 · major · S03, S15. Resolve turns green.**
Problem: green means "done by Libreto, undoable". A resolved note going green breaks the one-meaning rule and suggests it can be undone the way a fix can.
Fix: a resolved note goes **gray**, collapses to a one-line "Resolved by You · Nov 12", and gets **Reopen**.

**F-D-34 · major · S15. Resolved notes cannot be seen again.**
Problem: the filters have Notes, Pending, Done and Unknown; there is no Resolved. "Stays in History" means hunting through sessions.
Fix: add a "Resolved" toggle (off by default) to Review's kind row. Resolved notes then show gray in place, with Reopen.

**F-D-35 · major · S14, S15. Resolve against delete.**
Problem: you can Delete your own note, but can you delete Marta's? Deleting a note with 12 replies? Is there an Undo?
Fix:
- your own notes: Delete (a passing notice with Undo);
- others' notes: no Delete, only Resolve, and **Hide** for spam or duplicates (hidden still exist in History);
- deleting a thread with replies asks "Delete the note and 12 replies?";
- the AI's notes: Dismiss, as for any proposal.

**F-D-36 · major · S14, S15. Long threads.**
Problem: a 30-reply thread in a 320 px card covers half the margin and pushes every other card off its line.
Fix: a card shows the first note, the last two replies and "27 more ▸". Opening it shows the whole thread in the **Reference panel**, which is just a reading surface, with the reply box at its bottom. The margin card stays compact.

**F-D-37 · major · S03, S21, S24. Notes to Word and back.**
Problem: "Include notes" is all or nothing. Questions:
- Are resolved notes exported? Word has a "resolved" state.
- What author name do you appear under? "You" is not a name.
- Do AI notes go out? That is a disclosure issue.
- Do pending reader changes go out?
Fix: the export dialog gets "Notes: Open only / Open and resolved / None", and "AI notes: excluded (default) / included, labeled 'AI'". Your author name is set in Project settings ▸ People ("Your name as readers see it"). Resolved maps to Word's done state both ways. Every exported comment carries its id, so the return trip threads replies (F-D-14).

**F-D-38 · major · S21. No outgoing redline.**
Problem: editors expect "here is v2 with my changes since v1 tracked". Libreto can only send clean text.
Fix: in Send a copy, a checkbox "Mark my changes since the copy sent to Marta (Nov 7)" writes Word tracked changes generated from the snapshot diff. It is cheap, because the diff exists anyway.

**F-D-39 · minor · S14. Two notes on the same words.**
Problem: both tint the same words. You cannot tell which tint belongs to which note, and partial overlaps blur.
Fix: only the hovered or selected card's range is tinted strongly; others show a hairline. Where ranges overlap, show the boundaries with small corner brackets. The gutter bubble shows the count "2".

**F-D-40 · minor · S14. Quoting the anchor.**
Problem: a note on words that are later rewritten keeps its anchor, but the reader's context is lost.
Fix: every note stores the quoted words at creation and shows them gray at the top of the card ("on: 'the lemon on her hands'") once the text has changed.

### E. Undo, Revert and Bring back

**F-D-41 · blocker · S33. "One list" against selective undo.**
Problem: the notice and bell Undo on an old item, Undo all of a walk, and Undo on a card for a change made 40 steps ago are not "the same step, in the same order". On a linear stack they would undo everything after them as well.
Fix: two verbs.
- **Undo** (`Ctrl+Z`) is strictly linear.
- **Revert** (on cards, notices, the bell, History and rounds) creates a *new* inverse change of exactly that operation, on top of the stack. It refuses or partly applies with a clear message when later changes overlap: "Reverted 38 of 40 moves; 2 scenes were edited since: kept."

That replaces the vague "while nothing later touched the same place" and the jump to "Bring back this version".

**F-D-42 · major · S33. One global stack across modes and surfaces.**
Problem: in the Codex you edit Lena's line, then press `Ctrl+Z` and it undoes the manuscript typing you did in Write four minutes ago. The view jumps mode to "show its place". In a Research topic, Ctrl+Z reaches into ch. 7.
Fix: see Option U. Recommended: one stack **per document surface** (the manuscript, which covers Write, Review and Plan since they edit one thing; each Research topic; each Codex entry; text fields locally), plus History and Revert for anything cross-cutting.

**F-D-43 · major · S16, S33. Undoing a 40-move Plan Apply after typing.**
Problem: you Apply 40 moves, then type for 10 minutes. `Ctrl+Z` now walks back through 10 minutes of phrases before it reaches the moves. "Bring back this version" would lose the typing.
Fix:
- The Apply notice is *standing* (not passing) for big applies: "40 moves applied · Revert · ✕".
- The bell and History keep "Revert 40 moves", which re-orders scenes back and keeps text edits inside them (moves commute with in-scene edits). It reports splits or joins it could not reverse.
- Prevention: the Apply button names the count, "Apply 40 moves", and past 10 moves it asks once with the list.

**F-D-44 · major · S33. Where an Undo lands is surprising.**
Problem: "Undo shows its place" means a jump. If you are in Plan or the History sheet, Ctrl+Z must switch mode or close the sheet to show it.
Fix: with per-surface stacks (F-D-42) the change is usually on screen. When it is not, show the label and a "Go there" link in a passing notice instead of yanking the view.

**F-D-45 · major · S33. How long the stack lasts.**
Problem: does the stack survive a restart? Is "one Undo away" true tomorrow?
Fix: state it: Ctrl+Z covers this session only. Anything older is Revert from History. Green "one Undo away" becomes "Undo until the end of the session".

**F-D-46 · minor · S33. "Something later changed this place".**
Problem: "place" is undefined (a word, a paragraph, a scene?).
Fix: define it as the paragraph, by id. The message names it: "You edited this paragraph after (19:40) · Revert anyway (keeps your edit) · Compare".

**F-D-47 · major · S23, S33. Bring back this version is too blunt.**
Problem: the old-notice path offers "Bring back this version" of the *whole book* to undo one scene-break removal. And what is restored: text only, or also the Codex, Research, notes, readers' cards and marks? Restoring the text under 300 open reader cards makes them all stale.
Fix:
- Restore always offers the scope, "this paragraph / this scene / this chapter / the whole book", with the smallest pre-selected.
- The whole-book restore states what is included: text and structure (yes), notes (kept, re-anchored), Codex and Research (not touched), open cards (re-checked, out-of-date ones flagged).

### F. History, snapshots and compare

**F-D-48 · blocker · S23. No scope.**
Problem: "What changed in ch. 7 since last Tuesday?" History lists whole-app sessions by day; there is no chapter filter and no "since" choice. Compare with today works only from a snapshot and covers the whole book.
Fix: a History header row with **Scope: Whole book ▾** (chapter, scene, or "the selection" when opened from the right-click menu "History of this chapter…") and **Since: [Tuesday, Nov 10 ▾]**. The result: a list of changed paragraphs in that scope, and **Show changes in the page**, an inline redline over the real chapter, with no snapshot to choose.

**F-D-49 · blocker · S23. No search without the AI.**
Problem: "Questions in words go to Ask, and need an AI." Finding the deleted "till drawer" scene by a word is a plain text search. Pushing it to the AI breaks D-18 and "works without AI".
Fix: a search box at the top of History, "Find text in past versions". Results are snapshots and sessions with the text in context, each with "Open" and "Put back". The index covers only removed text, which keeps it cheap.

**F-D-50 · major · S23, S05. Restoring one deleted scene from three weeks ago.**
Problem: the current path is History, then scroll three weeks of sessions, then "This text is no longer in the book · Show it in the snapshot", then a read-only snapshot. And then? There is no "Put back" for a scene that has no place today.
Fix: in any snapshot view, every scene has **Put back…**, which offers "where it was (after 'Kit's ledger')" / "to Discarded" / "at the cursor". Also, Discarded should keep deleted scenes for a fixed time ("Deleted scenes are kept 90 days in History ▸ Deleted") rather than "only real deletion".

**F-D-51 · major · S23, S29. No manual "save a version".**
Problem: snapshots are automatic or created by sending a copy. No command creates a named snapshot, but the spec's acceptance test needs writers to "take and restore a snapshot" without help.
Fix: **File ▸ Save a version…** (`Ctrl+Alt+S`; check AltGr conflicts on a Spanish layout, else `Ctrl+Shift+S`). It asks for a name ("Before Marta's notes") and also appears in History as a button. Any automatic snapshot can be renamed ("Name this version", as in Google Docs).

**F-D-52 · major · S23. A session is the wrong unit.**
Problem: "one run of the app". An app left open for three days is one session ("09:05–now"); two short launches before lunch are two. Neither matches "Tuesday".
Fix: group by **day** first. Inside a day, show activity blocks separated by more than 30 minutes of idle time. Runs of the app are invisible.

**F-D-53 · major · S23. Snapshots pile up.**
Problem: one every 10 minutes, plus end of session, plus before big actions, makes about 50 a day and thousands a year, with no thinning and no storage rule. "… 14 automatic" folds hide them, but the disk fills up.
Fix: thin them like Time Machine: all from today, hourly for a week, daily for a month, weekly after that. Named and "before big action" snapshots are never thinned. Show the disk use in Project settings. Under the hood: content-addressed storage (git-like) so a snapshot costs only the changed chapter files.

**F-D-54 · major · S23. Compare has one shape only.**
Problem: two columns, fine for a few paragraphs. For a chapter rewritten at 70 %, both columns are entirely tinted and unreadable, and moved paragraphs appear as deleted plus added.
Fix: three views: **Inline** (strike and insert, the default), **Side by side**, and **Only changed paragraphs**. Detect moved paragraphs (by id) and show them once, with "moved from ch. 6". For heavily changed paragraphs, a "Rewritten" label instead of a word diff.

**F-D-55 · minor · S23. Restore per paragraph.**
Problem: Restore on a paragraph that has since moved or been split: where does it land?
Fix: restore in place by id. If the id is gone, insert after the nearest surviving neighbor and flash it, with a passing notice "Put back after '…' · Undo".

**F-D-56 · minor · S23. A timeline scrubber.**
Problem: Figma and Google Docs let you click through versions and see the document change in place. Libreto's list cannot "flip pages".
Fix: in the compare inset, add `‹ ›` to step through snapshots in the current scope, showing what each step changed.

**F-D-57 · minor · S23. Several "Sent to" snapshots.**
Problem: you send copies to three readers in one evening, which makes three named snapshots of identical text.
Fix: identical content means one snapshot with several names ("Sent to Marta, Teo, Ines").

### G. Notices, the bell and History: three inboxes

**F-D-58 · major · S04, S33. Three overlapping places plus Review.**
Problem: there is the notice card, the bell ("today", with Undo), History (everything), and the Last session notice that repeats the Review count. A writer asks "where did that continuity warning go?". It could be in the bell, in Review if "Add to Review" was clicked, or in History. The bell only keeps today, so yesterday's warning is gone.
Fix: see Option N. Recommended: drop the bell as a separate list. Notices fade into **History ▸ Today** (the bell icon opens History as a popover filtered to Today and unread). Anything that needs a decision is converted to a Review card, never left in the bell.

**F-D-59 · minor · S33. One standing notice at a time.**
Problem: on a heavy morning, Last session, the import done, an AI pass done and "Did you rename Lena?" queue up, and you see only one.
Fix: when there are more than one, the notice shows "1 of 4 ›". Last session absorbs the passive ones into its own lines.

**F-D-60 · minor · intro, S33. One word, three things.**
Problem: "card" means a margin card, a notice card and a Plan scene card.
Fix: keep **card** only for Plan's scene cards (writers' index cards). Margin items become **notes and proposals**, or **items** as the collective. A notice is a **notice** and is never called a card.

### H. Marks, colors and attribution

**F-D-61 · major · S03, S15. Who made a fix.**
Problem: a typo fix shows "You" in S15 and the AI spark in S03, but it was a Libreto rule. This pollutes the AI log ("What the AI wrote") with rule fixes, or credits a machine edit to you.
Fix: four authors. **You**, a reader's initial, **the AI** (spark) and **Libreto** (a small "L" glyph for rules and the index). Only the spark ever counts in the AI log.

**F-D-62 · major · intro rule 2, all screens. The colors are not reserved.**
Problem:
- blue is also links ("ch. 10"), primary buttons ("Review all", "Bring back this version", "Take proposed"), the text selection and the Review count;
- green is "connected" and +words;
- red is −words;
- amber is the warning in Settings ▸ AI.
"Nothing else uses these four colors" is false on every screen.
Fix: see Option C. Recommended: a neutral ink accent for chrome (primary buttons dark ink, links underlined ink, selection gray-violet), and the four hues only for marks. Word counts as plain "+86 / −12" without color. The warning in Settings uses a triangle on neutral.

**F-D-63 · blocker (accessibility) · S02, S03. Marks rely on color alone.**
Problem: red and green dotted underlines have the same pattern and look the same to people with deuteranopia or protanopia (about 8 % of men). Amber and green are also confused, and the brown motif hue sits next to amber.
Fix: give each kind its own **shape**:
- red: wavy (the spell-check convention);
- blue: dashed;
- green: thin solid, fading;
- amber: no underline, a light background tint plus the gutter bubble.
Test with a CVD simulator. The badges already have glyphs (? … ✓ bubble), which is good; keep them at 12 px or more in the chapter-list counts, where they are around 9 px now.

**F-D-64 · major · S02, S15. The precedence rule hides a note.**
Problem: "red before blue before green", and amber is not in it. With a note on words that also carry a blue proposal, the note's tint and the blue dash overlap. Under the reveal (S10), people's hues sit on top of underlines and style labels, which is unreadable.
Fix: put notes in the rule (their tint is a background, so they coexist with one underline). The reveal shows entity hues *or* marks, with a toggle inside the reveal, not both at once.

**F-D-65 · minor · S15. The gray stack.**
Problem: a gray stack with "2" hides whether one of the two is urgent.
Fix: the stack shows the color of its highest-precedence member as a thin ring.

### I. "Write shows only your notes"

**F-D-66 · major · S14, S15, intro rule 3. Hidden feedback.**
Problem: in Write you rewrite ch. 7 ¶4 while Marta's note on it ("Give him a beat before he answers?") is invisible. You only find it in Review, by which time it is out of date. Meanwhile her *changes* show as blue underlines in Write, so the rule really is "underlines yes, others' bubbles no", which nobody can guess.
Fix: see Option W. Recommended: in Write, others' notes appear as a small **hollow** gray bubble in the gutter (no card, no count). Hovering shows "Marta · 1 note · open in Review". "Your notes" in Show becomes "Notes: Mine / All / None".

**F-D-67 · minor · S02. Deciding in Write.**
Problem: the hover card has Apply and Dismiss in Write, so "Review is for deciding" is not true. Deciding works everywhere and Review only *collects*.
Fix: restate rule 3 as "Write marks words; Review collects what waits."

### J. Ask and AI proposals

**F-D-68 · major · S08. Enter defaults to asking the AI.**
Problem: you type "Lena", Enter, and the question row is preselected, so it spends tokens and opens a chat instead of going to Lena. Draft 6's "Ask the AI after three words" was safer.
Fix: if there is an exact match on a name or title, it is preselected. Otherwise, when the text looks like a question (three or more words, or "?", "¿"), the question row is. Otherwise the first result is. `Ctrl+Enter` always asks the AI.

**F-D-69 · major · S15, S09. "Why?" is ambiguous.**
Problem: does it call the AI again (cost) or show stored reasons? The finding already includes its reason text.
Fix: rename it **Sources**. It shows the quotes the finding relied on, with links ("ch. 10: 'never once'"), stored at pass time, free. "Discuss" opens Ask on the finding and marks the cost.

**F-D-70 · minor · S09. No Edit in the chat.**
Problem: the chat block has Keep mine and Take proposed but no Edit, and no "Take and keep talking".
Fix: add Edit (as F-D-04) and hunks (F-D-05).

**F-D-71 · minor · S09. The page bar.**
Problem: "The paragraph under discussion has a thin bar": blue? It must be neither a proposal nor a link.
Fix: a neutral ink bar.

**F-D-72 · minor · S22. "Merge for me" can merge wrongly.**
Problem: an AI merge applied is AI text inside your book.
Fix: it is shown as a proposal (blue, spark) with three rows (yours, hers, merged), never applied directly, and logged.

### K. AI disclosure, log, tokens and budget

**F-D-73 · major · S25, intro. The disclosure lives only in Settings.**
Problem: the owner asks for disclosure "always visible", but after an AI change is accepted nothing in the manuscript shows it.
Fix:
- a status-bar item, or one inside the Statistics words menu: "AI-written: 0.4 %", opening "What the AI wrote";
- under the reveal (Alt), AI-written spans get a faint spark-dotted left rule;
- Book ▸ Export gets "Add an AI disclosure statement" with the percentage.

**F-D-74 · major · S25. Provenance after edits.**
Problem: you take an AI sentence, then rewrite 60 % of it. Is it AI-written? For contests this matters.
Fix: track provenance per character span. Report "AI-proposed, then edited by you (40 % of the AI's words remain)". The rule and its thresholds go in the specification.

**F-D-75 · major · S25. The budget is an estimate.**
Problem: "3.20 € spent" is Libreto's estimate from token counts; the provider's bill can differ (prices change, caching, VAT). Through Claude Desktop there is no per-token cost at all.
Fix: label it "≈ 3.20 € (estimated from 412 k tokens)", with a link to the provider's console. In Claude Desktop mode, show the budget in requests or tokens per month, or hide it with "billed by your Claude plan".

**F-D-76 · major · S18, S25. No estimate before expensive actions.**
Problem: "Read the book again" on 150 k words, or Proactive's session-start pass after a big import, can each cost more than the remaining budget.
Fix: before any action above 0.10 €, show the estimate inline: "Read the book again · ≈ 1.80 € · 7 € left this month". A Proactive pass shows its cost on its round (F-D-20).

**F-D-77 · major · S25, S18, Q11. The default is stated two ways.**
Problem: S25 shows "Reviews" selected, which does not read at session start, while S18 and open question 11 present the session-start pass as the default.
Fix: choose one. Recommended default: **Quiet** after connecting, with a one-time offer after a week ("Let the AI read new chapters at the start of a session? ≈ 0.20 € a week"). That keeps first impressions free of noise and cost.

**F-D-78 · major · S25. "While you write, after a pause" makes noise.**
Problem: Proactive reading unfinished paragraphs produces findings on drafts and spends tokens on text that changes a minute later.
Fix: Proactive reads a *scene* only after it has been untouched for N minutes (or after leaving it), never the paragraph being written. Findings on the current scene wait until you leave it.

**F-D-79 · minor · S25. When the budget runs out mid-pass.**
Problem: hitting the limit mid-pass leaves a half-done round.
Fix: the round says "Stopped at the budget: ch. 1–14 read, 15–31 not", with "Continue (≈ 0.90 €)" once more budget is allowed.

**F-D-80 · minor · S25, S29. The AI log has no defined content.**
Problem: what is in it? Every request, what was sent, tokens, cost, result?
Fix: list it as a table (time, action, what was sent as chapter and entry names, tokens, cost, result: link to its round or conversation), with export to CSV. Privacy: the log stores references, not copies, of sent text.

**F-D-81 · minor · S09. The cost of a conversation is invisible.**
Problem: a conversation's cost is never visible.
Fix: a faint "≈ 0.04 €" under each AI answer, or on hover over the model name in the header, switchable off in Settings.

---

## 3. Options

### Option U: the undo model (F-D-41 to F-D-45)

- **A. One global linear stack (draft 7).**
  - Pros: one rule to learn.
  - Cons: Ctrl+Z reaches across surfaces and modes; selective undo is impossible but already promised (notices, walk); undoing a big apply after typing costs your typing.
- **B. Per-surface linear stacks, plus Revert for old operations.** The manuscript (Write, Review, Plan) is one stack; each topic, Codex entry and field has its own. Revert on any notice, card, round or History entry creates an inverse step.
  - Pros: matches Word, Scrivener and Figma intuition; makes the notice Undo honest; handles the 40-move Plan case and walk undo without losing typing.
  - Cons: two verbs to learn; Revert needs conflict rules (paragraph granularity).
- **C. Selective undo everywhere** (an Emacs-style undo tree, or a "History panel" where any step can be toggled).
  - Pros: powerful.
  - Cons: incomprehensible to non-technical writers, and conflict-heavy.

**Recommend B.** Undo = "the last thing here", Revert = "take back that specific thing". Notices say **Undo** while they are still the latest step and switch to **Revert** after.

### Option R: where review lives (F-D-20, F-D-66)

- **A. Review as a mode (draft 7).**
  - Pros: a clear second pass; a home for the count.
  - Cons: hides feedback while writing; a sixth position; Write and Review differ only in the margin and the filters.
- **B. Review as a margin of Write.** `Ctrl+Shift+M`, or the count button in the strip, opens the margin with filters and rounds; the left column shows rounds at the top. The mode switch drops to five.
  - Pros: no mode switch to see feedback; the owner's "few modes"; scroll and cursor sharing comes for free.
  - Cons: the count needs a home (the margin toggle "12"); a full-screen "second pass" feel is weaker.
- **C. A mode with rounds plus hollow bubbles in Write** (Option W-B).
  - Pros: keeps the current structure, fixes the hiding problem.
  - Cons: still a mode for what is really a panel.

**Recommend B** if the owner is willing to drop a position. Otherwise C.

### Option W: what Write shows of others' notes

- **A. Nothing (draft 7).** Calm, but you edit blindly.
- **B. Hollow gray bubbles, no cards.** Quiet, and informs you.
- **C. Everything, as in Review.** Noisy.

**Recommend B**, with Show ▸ Notes: Mine / All / None.

### Option M: reader changes in the page (F-D-07 to F-D-09)

- **A. Two columns per changed paragraph, in the running text (draft 7).** Clear for one reader and few changes; breaks for many, for three readers, and for "changed since sending".
- **B. Inline suggestions (Google Docs style)** in the real text, per-reader initial and tint, hunk-level ✓ / ✕, three-way base; side by side on demand.
  - Pros: scales; partial accept; the text stays a book.
  - Cons: dense paragraphs get busy, which the "Side by side" escape handles.
- **C. A separate merge screen** (git-tool style, three panes).
  - Pros: maximal clarity for conflicts.
  - Cons: a new place to learn, which the owner removed in d7.

**Recommend B**, with C's three rows used only inside a conflict card.

### Option C: keeping the four colors meaningful (F-D-62, F-D-63)

- **A. Keep blue as the UI accent and move "pending" to violet.** Violet clashes with the person hue. Bad.
- **B. A neutral ink chrome, and the four hues only for marks, each with its own shape.**
  - Pros: the rule becomes true; color-blind safe.
  - Cons: the UI looks less "colorful"; primary buttons are dark.
- **C. Drop the "reserved" claim and rely on shape plus glyph.**
  - Pros: honest and cheap.
  - Cons: blue links next to blue proposals still confuse.

**Recommend B.**

### Option N: notices, bell and History (F-D-58)

- **A. Three places (draft 7).**
- **B. The bell becomes "History ▸ Today" as a popover; decisions always become Review items.**
  - Pros: two places, each with one job (History: what happened; Review: what waits).
  - Cons: History gets an "unread" notion.
- **C. No bell; notices fade straight into History.**
  - Pros: simplest.
  - Cons: no quick glance at "what just happened".

**Recommend B.**

### Option H: the History unit (F-D-48, F-D-52)

- **A. Sessions = runs of the app (draft 7).**
- **B. Days, then activity blocks, with scope and since filters and an inline "Show changes".**
- **C. A git-like commit list (snapshots only).** Too technical.

**Recommend B.**

---

## 4. What d8 screens should show (this lens)

1. **S03' Marks, up close (revised).** Four underline *shapes* (red wavy "Harborstreet", blue dashed "was", green thin solid fading "received", amber background tint "back-room door"). A CVD inset: the same row rendered as deuteranopia, all four still distinguishable. Four author glyphs (You, M, the spark, the Libreto "L"). The resolved-note state in gray with Reopen. The chrome legend: primary button in ink, a link in underlined ink.
2. **S15' Review with rounds.** The left column top: "Rounds": "Marta · Nov 7 · 150 / 300", "Teo · Nov 9 · 0 / 41", "AI pass · Nov 12 · 12 / 80 · ≈0.42 €", "Rules · ongoing". Below it, the kind toggles including **Resolved** and **Unread**, the people row, then the chapters. The margin header shows the toggles Page | List. One finding card ("Continuity · ch. 7 against ch. 10": Fix here · Fix there · Propose a fix · Sources). One **out-of-date** proposal card in gray-blue ("Your text changed since this was proposed": Show both · Dismiss · Ask again ≈0.01 €). A 30-reply thread folded ("27 more ▸"). The count on the switch (or the margin toggle) reads 9, not 12, with a tooltip "proposals + unread notes".
3. **S15b Review, List view.** A table of the 300 imported items: chapter, quoted words, reader initial, kind, state, unread dot. Three rows multi-selected, with "Resolve 3 · Dismiss 3" in a bar. Grouped by "Flagged by 2+ readers" at the top.
4. **S22' Readers' changes, inline and three-way.** Ch. 3 ¶1 with hunks from M, T and I inline (tint plus initial), each with a hover ✓ / ✕, and the header "3 readers changed this · 2 of 5 taken". A neighboring paragraph auto-merged ("You and Marta changed different words: merged · Keep mine"). One true conflict card in three rows (Sent Nov 7 / Yours / Marta's) with Keep · Take Marta's · Merge for me (AI ≈0.01 €). An "Unplaced comments (4)" group at the top of the margin.
5. **S22b Import step.** A dialog after choosing the file: "The Blue Lamp – for Marta.docx · sent Nov 7 · 212 comments, 63 tracked changes, 9 untracked edits". Author mapping: "Usuario → Marta ▾ · You (14, already here) · Teo (9) → Teo". "198 already imported · 14 new". A warning: "38 % of paragraphs changed since you sent it". Buttons Cancel and Add 14 notes and 72 changes.
6. **S34' Review all with stable progress.** The header reads "Marta · decided 150 · left 150" (no position). The card has its keys in the buttons (`Enter` Take, `Backspace` Dismiss, `S` Skip, `E` Edit), and the footer "Esc ends · resumes where you stop". The end panel: "Decided 300 · Skipped 4 (filter) · Revert this walk".
7. **S23' History with scope and search.** The header row has a search field "Find text in past versions: 'till drawer'", "Scope: Chapter 8 ▾", and "Since: Tue, Oct 27 ▾". Results: the deleted scene "The till drawer stuck…" found in the snapshot of Oct 28, with **Put back… ▸** (where it was · to Discarded · at the cursor). The list grouped by day, then activity blocks. The **Save a version…** button. Thinned automatic snapshots ("hourly for this week").
8. **S23b Show changes in the page.** Ch. 7 in the page with an inline redline since Tuesday: strike-through and insertions, one paragraph labeled "moved from ch. 6", one labeled "rewritten". A top bar: "Changes in Chapter 7 since Tue, Nov 10 · Inline | Side by side | Only changed · ‹ › step · Done". Restore on hover per paragraph.
9. **S33' Undo and Revert.** The stack for the manuscript only, newest on the right: typing, typing, "Plan · 40 moves". The standing notice "40 moves applied · Revert · ✕". A later state: after 10 minutes of typing, the bell/History popover entry "40 moves · 21:12 · Revert" and the result notice "Reverted 38 of 40 moves; 2 scenes edited since were kept · Show". A side note: "Ctrl+Z in the Codex entry Lena undoes only that entry."
10. **S33b The "Today" popover.** It replaces the bell list: today's notices (unread dot), each with Revert where it applies, and a link "All of History". It shows no decision items; those carry "→ in Review".
11. **S14' Write with others' notes.** The gutter has your amber bubble and a hollow gray bubble for Marta's note. The hover tooltip reads "Marta · 1 note · Open in Review". The Show menu is open, with Notes: Mine · All · None.
12. **S09' Ask with an out-of-date proposal and cost.** The answer shows "≈0.02 €" on hover. A proposal block with hunk checkmarks, Edit, and the state "Your text changed since: Show both · Ask again". A closed conversation's proposal appears as "Waiting in Review".
13. **S08' Ask preselection.** Two insets. The first: typed "Lena", with Go to · Lena preselected and the question row unselected. The second: typed "¿cuándo vio Vega el libro?", with the question row preselected and the hint "Ctrl+Enter always asks".
14. **S25' AI settings.** The default level is Quiet. The budget reads "≈ 3.20 € (estimated from 412 k tokens) · see your provider's console". The Claude Desktop variant reads "Billed by your Claude plan". "Findings per pass: 15 ▾". An AI log preview table (time · action · sent · tokens · ≈cost · result).
15. **S24'/S21' Export and send with notes.** The Send a copy dialog gets "Notes: Open only ▾", "AI notes: excluded ▾", "Mark my changes since the copy sent to Marta (Nov 7)", and the author line "You appear as: Vega's author ▸ Project settings". The Book export gets "Add an AI disclosure statement (AI-written: 0.4 %)".
16. **S10' The reveal with AI provenance.** A faint spark rule at the left of one AI-proposed-then-edited sentence, with the hover "AI-proposed Nov 9, edited by you · 40 % of its words remain". The entity hues and marks are not shown together (a toggle inside the reveal).
