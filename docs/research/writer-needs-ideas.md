# Libreto — what a writer needs: brainstorm (draft 0)

Status: **brainstorm for review.** Nothing here is decided, and how anything looks on screen is out of scope. The question is only *what could help a writer*. Some ideas are big and some are silly; the review sorts them out.
Scope: a prose writer (novel, short story, article), not a game. Built from four research passes (how writers work, 36 writing tools, AI for writers, editor and UX patterns), plus the review notes of 2026-11-04.

## How to read this

- Ideas have ids (`A12`) so notes can point at them: "A12 yes, A13 later, A14 no".
- ★ marks an idea from the review notes. **v1** marks something already in the approved spec (`status/specification.md`).
- `→ D4` points at a related idea. §3 groups related ideas into clusters that share one foundation.
- Tool names in brackets are where an idea comes from. No tool name means it is new, or comes from several tools.
- Example cast: Vega (a detective), Kit (her apprentice), Lena (a bartender), the Blue Lamp (a bar).

---

## 1. What the research says

### 1.1 How writers work

Writers do not move through the phases in order. They loop: an idea becomes notes, the notes become a plan, and the draft changes the plan. Revision sends them back to research. Most writers are part planner, part improviser ("plantsers"). So **no phase may be forced**, and every planning tool must also work after the text exists.

| Phase | What they do | Where it hurts |
|---|---|---|
| Capture | Collect premises, lines, images, dreams | Ideas scattered over phone, notebooks, email; context lost ("why did I save this?") |
| Research | Facts, places, periods, experts | Too many tabs; forgetting what was already found; researching instead of writing |
| Plan | Cards, beats, outlines, character sheets | Outline and draft drift apart; templates feel like cages |
| Draft | Write, often out of order | Stalls at chapter 1, around 20k words, and in the middle; the inner editor |
| Keep track | Story bible: who, where, when, who knows what | **The biggest pain.** Bible and text drift; eye colours, ages, weekdays, travel times |
| Revise | Reverse outline, threads, pacing, line edits | "Where do I start?"; notes scattered; same chapter revised forever |
| Feedback | Beta readers, critique partners, editors | Notes arrive by email and Word; Word track changes are daunting |
| Deliver | Word files, standard manuscript format, ebook, print | Scrivener's compile is "a nightmare"; most writers export to Word and format there |

Other findings:

- **Sync and loss.** The worst stories are lost text after a sync conflict. Writers fear losing the manuscript more than anything.
- **Habits.** Daily goals and sprints help. Streaks that punish rest days hurt. Many writers write in short fragments (lunch, commute), so quick resume matters.
- **AI splits writers.** About 45% of authors use some AI, mostly for research, brainstorming, outlining, names and blurbs. About half refuse it, mostly on ethics. Only 13% of Authors Guild members use generative AI *in their writing process*. 96% want consent before their work trains a model.
- **What writers accept from AI:** analysis, organisation, continuity checks, brainstorming, marketing text. **What they reject:** generated prose in place of theirs, voice drift, homogenised text, flattery, interruption, walls of underlines, opaque data use.

### 1.2 Principles that came out of the research

These shape every idea below. Most come from Horvitz's mixed-initiative principles (the research behind Office's assistant, and the lessons of its failure).

1. **The text is always one click away** ★. Whatever view is open, getting back to the text is instant.
2. **Say what text is, not how it looks** ★. Semantic styles; looks are decided per output.
3. **Nothing forced.** Every tool is optional, usable before or after the text exists, and silent until asked.
4. **AI: analysis by default, prose only on request.** A writer can switch prose generation off entirely.
5. **AI earns each interruption.** Silence is the default; help appears at natural pauses, never mid-sentence; a dismissed hint never comes back.
6. **Every AI claim shows its evidence** (links to the passages) and admits doubt: a question when unsure, a flag when sure.
7. **Proposals, never silent edits** (v1). Plain summary plus side by side before/after; accept in parts.
8. **The writer can see and correct what the AI knows** (character cards, summaries, what was sent).
9. **Kind tone.** An editor's courtesy: short, specific, no mascot, no exclamation marks, no guilt about missed days.
10. **Learn from the writer.** Dismiss three times, offer to mute; remember choices per project.
11. **Progressive disclosure.** A feature shows when the project reaches the stage that needs it.
12. **Never lose a word.** Autosave, snapshots, a cut file, history; every change can be undone.

---

## 2. Ideas

### A. The writing surface

**Semantic styles** ★

- A1. Styles named for what text is: Emphasis, Thought, Letter, Sign ★, Epigraph, Song, Foreign word, Flashback, Scene break, Title, Subtitle. v1
- A2. Each style has a look per output: Sign is centred capitals on screen, small caps in the PDF, plain caps in a manuscript submission. v1
- A3. Inline styles (a word) and block styles (paragraphs), nestable: a Foreign word inside a Letter.
- A4. A meaning field per style ("words the character reads, not says"), shown on hover and in the export for editors.
- A5. Style inheritance: Dream is based on Narration; change the parent and the children follow.
- A6. "Make a style from this": format a passage once, name it, and Libreto finds similar passages and offers to convert them.
- A7. Style gallery with a live count; click a style to select every use. → E9
- A8. Style lint: raw italics with no meaning get a quiet "is this Emphasis or Thought?". Off by default.
- A9. Paste filter: foreign formatting is stripped, but bold, italic and headings map to the nearest semantic style.
- A10. Style picker on one key with fuzzy search ("let" finds Letter); repeat last style; shortcuts per project.
- A11. A Material style for text that never exports and never counts (notes inside the manuscript). → H5
- A12. Styles decide export behaviour: italic in EPUB, underline in manuscript format, left out of word counts.
- A13. Project templates bring their own styles (novel, article, paper later). v1 → Q1

**Editing**

- A14. Clean hybrid editing: no markup visible; Markdown shortcuts still work for those who know them (`*`, `#`, `>`).
- A15. Faint markup mode for pro users: markup shown at low contrast. Off by default.
- A16. Slash menu: `/` offers styles, a scene break, a link, a note, a comment.
- A17. Selection toolbar with the few styles and actions used most, ranked by use.
- A18. Expand selection step by step: word, sentence, paragraph, scene, chapter.
- A19. Move paragraph or scene up and down with a key, without cut and paste.
- A20. Sentence commands: next, delete, swap two sentences.
- A21. Multi-cursor and "select next occurrence".
- A22. Fold a chapter, scene or block; "fold everything except this scene".
- A23. Split and merge scenes in place: split at the cursor, merge with the next, no copy and paste. → F20
- A24. Footnotes and endnotes edited in place, numbered automatically.
- A25. Undo and redo everywhere, including binder moves, renames and accepted AI changes ★. v1
- A26. Undo tree: undo, type something new, and the old branch is still there.
- A27. Selective undo: revert one change from 20 minutes ago and keep what came after.
- A28. Alternative takes in place: three versions of one sentence or paragraph, cycle with a key, keep one. → I8

**Typography and language**

- A29. Smart quotes per language: “ ” (English), « » (Spanish, French), „ “ (German).
- A30. Dialogue dash mode for Spanish and other languages: `—` opens dialogue, spacing and closing dashes handled. Matters for Spanish writers.
- A31. Per-passage language: a French letter inside a Spanish novel gets French quotes and spell check.
- A32. Dashes, ellipses and apostrophes normalised, with a "fix all" report; one backspace undoes an autocorrection.
- A33. Spell check and grammar check per language, quiet in draft mode. → B21
- A34. Thesaurus and "word on the tip of my tongue" by description.
- A35. Dictionary of the project: invented words, names and spellings never flagged. → D20

### B. Views, layout and comfort

**Views of the text** ★

- B1. Chapter view: one document at a time. v1
- B2. Full view: the whole book (or a selection of chapters) as one continuous text, editable. v1
- B3. Selection view: any set of documents (search results, one character's scenes) shown as one text. → E8
- B4. Split view: the same document twice, or two side by side; a locked reference pane that never navigates away.
- B5. Reading view: book-like page, justified, hyphenated, no editing chrome, to read the book fresh.
- B6. Outline view: headings and synopses only; drag to reorder. → F10
- B7. Dialogue view: only what characters say, filtered by speaker, to check each voice. → D17
- B8. Annotation view: text dimmed, comments and notes listed beside it (revision mode).
- B9. Sticky headers: current chapter and scene pinned at the top while scrolling.
- B10. Page widths: narrow, book page, full width (as in nacho-viewer) ★, plus a draggable line length.
- B11. Zoom of the text separate from the zoom of the interface ★.
- B12. Themes: light, dark, sepia, time of day; fonts per mode (draft in one, revise in another).

**Panels** ★

- B13. Right panel with tabs ★: Comments, Notes, Character, Place, Research, Outline, AI. The tab follows what was clicked.
- B14. What a click does ★: click a character name → its card opens in the right panel; click a comment mark → the thread opens; click a chapter title → its card. The text stays where it is. → D3, H1, F4
- B15. Workspaces (v1 app type): Write, Plan, Review presets; each remembers its panels, theme and focus settings.
- B16. Hide everything on one key; the same key brings back the exact layout.
- B17. Panels can be docked, floated or tabbed; any view can go in any panel.

**Focus** ★

- B18. Focus mode (as in Opos) ★: everything but the current sentence or paragraph dimmed; the writer picks the unit.
- B19. Typewriter scrolling: the current line stays at a chosen height.
- B20. Composition mode: full screen, chosen background and paper width.
- B21. Draft mode: spell check, grammar and AI hints hidden, so the inner editor stays quiet.
- B22. Quiet mode: no notifications, no sync badges, no toasts.
- B23. Ambient sound (rain, café, keys). Optional.

**Comfort and accessibility**

- B24. Dyslexia-friendly fonts and spacing, cream background, line focus (1, 3 or 5 lines visible).
- B25. Read aloud with word highlighting, from the cursor; "read back my last paragraph" on a key. Hearing text catches errors.
- B26. Dictation with punctuation commands, and a "clean up dictation" pass.
- B27. Full keyboard use; screen-reader support; high-contrast theme.
- B28. Break reminder after a long sprint (20-20-20). Optional.

### C. Navigation

- C1. Back and forward across documents, like a browser ★. Always a way back to where the writer was.
- C2. "Back to my text" button whenever a non-text view is open ★.
- C3. Breadcrumbs: Book › Part 2 › Chapter 7 › "The ferry"; each step a menu of its siblings.
- C4. Recent places, with a snippet of text around each.
- C5. Last edit location on one key.
- C6. Open where I left off: same document, same cursor, plus a one-line "where was I". → K30
- C7. Command palette: every action by name, fuzzy, with its shortcut shown; also finds documents, characters and places.
- C8. Quick switcher by title, synopsis or alias.
- C9. Bookmarks for places in the text, searches and documents; numbered bookmarks on keys.
- C10. Minimap of the book coloured by chapter, point of view, status or comment density.
- C11. Scroll bar marks: search hits, comments, to-dos, mentions of the selected character.
- C12. Peek: open a linked scene inline without leaving the current place.
- C13. Go to first appearance, last appearance, next mention of an entity. → D8
- C14. Chapter title ↔ its card: click to jump either way ★. → F4

### D. Characters, places and things (the story bible)

**Cards** ★

- D1. Character card ★: name, aliases, image, description, notes, mentions. v1 (simple card)
- D2. Optional fields ★: birth date, age, look, job, voice, wants and needs, secrets, relationships. Fields the writer does not use stay hidden.
- D3. Click a name in the text → its card in the right panel ★. v1
- D4. Card sections filled by AI or the writer ★, each AI line marked "inferred, please confirm" and linked to its passage.
- D5. The card's timeline ★: what the character does and when, key moments, with a short AI summary and the text fragment.
- D6. Chapters where they appear ★, with how big the part is (speaks, acts, mentioned).
- D7. Place card ★: description, image from research, the scenes set there, a map pin later.
- D8. Hover card ★: hover a name or place for a short card: image, one-line definition, first appearance, "last seen 42 pages ago". → E3
- D9. Hover only while holding a key, as an option, so reading is never interrupted.
- D10. Items and objects: the ring, the letter, who has it when. → J9
- D11. Groups and organisations (the police, the family).
- D12. Terms and glossary entries for invented words; a term links to its definition, as in a glossary ★. → A35
- D13. Card templates per project type; custom fields.

**Mentions and links**

- D14. Names detected while writing, without `@` ★; known ones linked, new ones offered as new cards. v1
- D15. Aliases and nicknames ("the detective", "V.") count as mentions after the writer confirms them.
- D16. Unlinked mentions: occurrences not yet linked, linked in one click.
- D17. Per-character extract: every line of one character in a row, to check voice. → B7
- D18. Rename everywhere as one command, with preview, including possessives and plurals. v1
- D19. Progressions: facts that change over the story (age, injuries, allegiance, what they know), set per chapter.
- D20. Name checker: names that look or sound alike (Kit/Kat), same initials, overused names, hard to pronounce for audiobook.
- D21. Name suggestions fitting the period, region and language, avoiding names already used.
- D22. Relationship map: characters as nodes, relationships as labelled links; how they change by chapter.
- D23. Family tree.
- D24. Co-occurrence: which characters share scenes, and who has not met whom.

**Highlights** ★

- D25. Show or hide entity highlights ★: all at once, by kind (characters, places, items, terms), or one chosen entity.
- D26. Colour per character, used in the text, cards, timeline and corkboard alike.
- D27. Part-of-speech highlights for revision: adjectives, adverbs, filler words (as in iA Writer).

### E. Search ★

- E1. Search everything: text, notes, comments, research, cards; results grouped by kind.
- E2. Scope chips: this scene, this chapter, the book, notes, research.
- E3. Smart search on a name ★: first appearance, key moments with AI summary and fragment, related characters and places, all mentions by chapter.
- E4. Search by meaning: "the scene where they argue about money" (AI). → K19
- E5. Search by metadata: point of view is Vega, status is draft, contains "ferry".
- E6. Saved searches that update themselves (collections).
- E7. Find and replace with a preview of every hit and a checkbox per hit.
- E8. Search results as one editable text. → B3
- E9. Search by style: every Letter, every Sign. → A7
- E10. Ask the book ★: "When did Vega last see Kit?" → answer with links to the scenes. → K18
- E11. Restore a deleted paragraph by searching its text in history. → I5

### F. Planning and structure ★

**Binder**

- F1. Binder: parts, chapters, scenes, drag to reorder. v1
- F2. Status per document: idea, draft, revised, final. v1
- F3. Synopsis per document, from one line to a page, written by the writer or summarised by AI.
- F4. Chapter title ↔ its card ★: one object, two views. → C14

**Corkboard** ★

- F5. Cards are scenes or ideas ★; an idea card has no text yet and can become a scene later.
- F6. Card content ★: title, synopsis, colour, image, status stamp, characters and place shown as small chips.
- F7. Easy add ★: double click or one key adds a card; type and press Enter for the next.
- F8. Move, sort and snap ★: grid with snap, or free placement; sort by order, status, point of view, date.
- F9. Freeform shuffle, then "apply order" ★: the book changes only when the writer commits.
- F10. Links between cards ★ with labels: "sets up", "pays off", "because of", "mirrors". → J8
- F11. Stacks: several cards in one, fanned out on hover.
- F12. Swimlanes by plotline, character or point of view; drag between lanes to change it.
- F13. Zoom levels: far shows titles, middle synopses, close the text itself.
- F14. Several boards per project (ideas board, act 2 board), and nested boards.
- F15. Moodboard: images, colours, quotes and links on one board.

**Structure**

- F16. Outline with columns: point of view, place, story date, words, target, status; sortable and editable.
- F17. Structure templates as overlays, not cages: three acts, Save the Cat, Hero's Journey, Story Circle.
- F18. Beat ruler: where beats fall on the word count ("midpoint at 50%, yours at 62%").
- F19. Plot grid: plotlines × chapters, gaps where a thread goes silent.
- F20. Reverse outline from the draft: AI summarises each scene into a card. For improvisers.
- F21. Outline ↔ draft diff: cards with no scene, scenes with no card, cards that no longer match.
- F22. Outline branches: "version B, the bartender lies", kept beside the main plan.
- F23. Scene fields (optional): goal, conflict, outcome; value shift; purpose.
- F24. Arc tracker: want and need, lie and truth, a "what changed" line per scene.
- F25. Story timeline: scenes on story time instead of book order; flashbacks show the gap. → J3
- F26. Reading order and story order side by side; drag on either.
- F27. Milestones and a finish date that computes a daily quota. → M3

### G. Capture, notes and research

- G1. Capture inbox: one key (and later phone) drops a thought into the project or an "unsorted" pool.
- G2. Each capture keeps its context: date, what was open, source link.
- G3. "Sort the inbox" now and then: each item to a card, a note, research or the bin.
- G4. Scraps bin: loose lines and dialogue, searchable, draggable into scenes. Never exported.
- G5. Ideas garden: idea cards with a status (seed, growing, ready) and links to fragments.
- G6. Notes as full documents, linkable from anywhere. v1
- G7. Research folder: images, PDFs, web clips, audio. v1
- G8. Web clipper: page, quote or image into research, with the source.
- G9. Facts with sources: hover a fact in the text to see where it came from.
- G10. Placeholders: `[CHECK: train speed 1920]` or `TK` while drafting; collected as a to-do list, resolved later. → K15
- G11. Research visible while writing: pinned in the side panel or split view. → B4
- G12. Period profile: prices, slang, technology for the story's time; optional anachronism flag.
- G13. Images with pins (a floor plan of the Blue Lamp) linked to places and scenes.
- G14. Voice memos with transcription.

### H. Comments and annotations

- H1. Comments on a paragraph or words, with threads and resolve. v1
- H2. Comment types: To do, Check fact, Continuity, Cut?, Idea. Filterable and counted.
- H3. Comments from people and from AI, clearly told apart. v1
- H4. Inline notes to self, hidden on export, listed as to-dos.
- H5. Material text inside the manuscript that never exports. → A11
- H6. Comment ↔ note ↔ card links: a comment can grow into a note. v1
- H7. Comment heatmap: where comments cluster, by reader.
- H8. Reaction marks from readers: laughed, cried, confused, bored.
- H9. Revision task list: every open comment and to-do of the book in one list, linked to its place.
- H10. Comments survive Word round trips. v1 → O3

### I. Revision and history

- I1. Snapshots per document or book, with a name and reason; automatic before risky operations. v1
- I2. Compare any two versions side by side, at word level. v1
- I3. Named versions: "Sent to the editor, 3 March".
- I4. "What changed since I sent it": diff against the last export.
- I5. History timeline per document with a slider.
- I6. Cut file: every large deletion saved with its origin, searchable.
- I7. Branches for a big rewrite ("first person"): keep or drop it, like a copy that knows where it came from.
- I8. Scene variants: two versions of a scene kept, one chosen for the book. → A28
- I9. Revision passes with colours: first pass, second pass.
- I10. Revision progress: scenes revised in this pass, a bar for the pass.
- I11. Revision plan: "target outline" against the current one, turned into a task list (add, cut, move, rewrite).
- I12. Guided revision path: big picture → scenes → lines → polish, one step at a time.
- I13. Editorial letter → linked checklist: paste the editor's notes, each point becomes a task linked to the text.
- I14. "Good enough, move on": a gentle note after the tenth revision of the same chapter. Optional.

### J. Continuity and analysis

**Continuity** (the biggest pain)

- J1. Continuity check that runs like a spell checker, quietly: eye colour, ages, names, spellings.
- J2. Contradictions can be marked "on purpose" (a lie, a rumour, an unreliable narrator) and never flagged again.
- J3. Story calendar: dates and weekdays, seasons, moon phases; travel times that make sense.
- J4. Ages computed from birth dates and scene dates, shown everywhere.
- J5. Who knows what, and when: warns when a character uses something they cannot know yet.
- J6. Where everyone is: a character × time grid.
- J7. Dead or absent characters who reappear.
- J8. Setups and payoffs: planted and fired, linked both ways; unfired setups flagged. → F10
- J9. Objects: who has the ring when; dropped and suddenly held again.
- J10. Open questions the text raises (who took the letter?) and where they close.
- J11. Forgotten characters: absent for 80 pages; forgotten threads: silent for 6 chapters.
- J12. Moving a chapter checks what it breaks: a fact used before it is introduced, timeline order. v1 (R-106)
- J13. Point of view and tense consistency.
- J14. Style sheet built automatically for the copy editor: spellings, hyphenation, character facts, timeline.

**Analysis** (on request, never as a wall of underlines)

- J15. Pacing by scene: action, dialogue, description, thought.
- J16. Tension and emotion curves across the book.
- J17. Point-of-view balance, and dialogue share per character.
- J18. Scene and chapter length, with reading time.
- J19. Echoes: distinctive words repeated close together glow faintly.
- J20. Crutch words measured against the writer's own habits, not a generic list.
- J21. Clichés, filler words, sentence-length rhythm (a small strip in the margin).
- J22. Custom checks: the writer writes a rule ("flag 'suddenly'") and it becomes a highlighter.
- J23. Openings and chapter endings reviewed together, for hooks.
- J24. Too many names in chapter 1 (reader-confusion check).
- J25. Comparison with the writer's own chapters ("chapter 12 is 40% longer and slower than your average").

### K. AI help

**Where it lives** ★

- K1. A chat that knows the open scene, in a right-panel tab, closable. ★ → B13
- K2. Through Claude Desktop ★ (v1): "Connect Claude" registers Libreto's MCP server; the writer talks to Claude there with their subscription, and the proposals arrive in Libreto for review.
- K3. Link Claude Desktop to a project ★: the app writes the MCP config for the open project; Claude sees one project at a time; a status light in Libreto shows "Claude connected to this project".
- K4. "Open this in Claude": a button that copies a ready prompt plus a link to the chapter or selection, so the chat starts in context.
- K5. Optional in-app chat with an API key, for those who want everything in one window.
- K6. Margin dot: a tiny mark where the AI has something; nothing more until hovered.
- K7. Editor's inbox: findings batched and delivered at natural breaks (end of session, after a save), never mid-sentence.
- K8. Command palette and right-click "Ask about this" for every AI action. → C7
- K9. Status bar: what the AI can see (chapters 1–12, cards, style guide), and a privacy dial (off / on request / proactive).
- K10. Snooze AI for 25 or 60 minutes.
- K11. A "no prose" switch: every feature that writes prose disappears from the interface.

**What it can do ★**

- K12. Create scenes ★: from a one-line idea or a card, make the card and an empty scene with its synopsis.
- K13. Reorder ★: "move chapter 4 before 3" as a proposal, with what it breaks (J12).
- K14. Add text ★, only on request, as a proposal: describe, expand, fill a placeholder.
- K15. Fill placeholders on request: options for `[fight here]` or `[CHECK: ...]`, never automatically.
- K16. Pace and balance advice ★: "act 2 is 60% dialogue", "Kit has not spoken in 5 chapters".
- K17. Merge ★: text, research, notes, structure, styles and corrections. E.g. "fold these three notes into the scene", "apply my editor's corrections", "restyle these as Letter".
- K18. Answers about the book with links (E10).
- K19. Search by meaning (E4).
- K20. Fill cards from the text, as suggestions (D4).
- K21. Summaries: scene, chapter, "story so far".
- K22. Interview me: the AI only asks questions about the premise or a character; the writer answers.
- K23. What if: 3 to 5 one-line directions for a stuck scene, not prose.
- K24. Brainstorm that knows the bible: names, twists, places fitting the world.
- K25. Reader personas: genre fan, sceptic, a teenager; each told to be specific and critical.
- K26. Where would a reader stop? Per chapter.
- K27. Rephrase one sentence: 3 options side by side.
- K28. Voice check: does this line sound like Lena?
- K29. Rename, restyle, retag as commands (the AI uses the same commands as the writer). v1
- K30. Session briefing: last scene in one line, next card, open to-dos. → C6
- K31. "Previously on…" after a long break.
- K32. Synopsis, blurb, logline, query letter from the scene summaries.
- K33. Context files the writer edits: style guide, tone, rules. v1 (context/)
- K34. Prompt preview: exactly what was sent, on request.
- K35. AI log: every AI change accepted, for disclosure to a publisher or a prize. → I1
- K36. Authorship tint: typed text vs pasted vs accepted AI text, shown only when switched on.

**How it behaves** (from §1.2)

- K37. Low confidence → a question ("Is Vega left-handed?"); high confidence → a flag with sources.
- K38. Dismiss with a reason: on purpose, not now, never. Three dismissals in a category → offer to mute it.
- K39. Quiet while typing fast; only during pauses or in Review.
- K40. Proposal view: one-line summary + before/after side by side; accept by word, sentence or paragraph. v1
- K41. No mascot, no exclamation marks, no flattery.

### L. Learning and help ("Clippy done right") ★

- L1. Help by detected intent ★, offered once: a blank project → "plan first or just write?"; a pasted manuscript → "check continuity?"; many cards → "see them on a corkboard?".
- L2. First-time hint when a feature becomes useful, with "show me" and "never again".
- L3. "You did that five times from the menu; the key is Ctrl+Shift+E". Once, dismissable.
- L4. Sample project to explore, with the neutral cast.
- L5. Empty states that teach: an empty corkboard says "press N or drag a scene here".
- L6. Writer type at the start (planner, improviser, revising only, no AI): sets which tools are visible. Changeable later.
- L7. Craft explainer on demand: "what is head-hopping?" with an example from the writer's own text.
- L8. Why a check fired, in plain words, so the writer learns instead of obeying.
- L9. Disabled commands shown grey with a reason ("select a scene first") instead of hidden.
- L10. Shortcut sheet on one key, filtered to the current view.
- L11. Palette with `?`: plain-words help search.

### M. Goals, habits and wellbeing

- M1. Word counts: selection, scene, chapter, book, session. v1
- M2. Goals per session, day, project; also in minutes or scenes revised, not only words.
- M3. Deadline goals that recompute the daily quota, with planned rest days.
- M4. Streaks with rest days and "freeze" days, framed kindly. Optional.
- M5. Sprint timer with words gained and a calm chime.
- M6. Writing history: a calendar heatmap, best hours.
- M7. Progress ring per document in the binder.
- M8. "Look how far you've come": milestones, never shame.
- M9. Stall help: after a long idle on a blank page, a quiet dot offers three questions. → K23
- M10. Forward-only drafting (no backspace) for a sprint. Optional.
- M11. Challenges the writer sets for themself (a novel in a month), with a progress bar.

### N. Files, menus and safety ★

- N1. Autosave always, and still File › Save ★ for peace of mind (it makes a named save point).
- N2. Menus a word-processor user expects ★: File (New, Open, Recent, Save, Save a copy, Export, Print), Edit (Undo, Redo, Cut, Copy, Paste, Find), View, Insert, Format, Tools, Help.
- N3. Open recent projects; open several projects side by side.
- N4. Never lose a word: atomic writes, local history, cut file, snapshots. v1
- N5. Backup reminder: "this project is not in a backed-up folder", once. v1 (backup-safe storage)
- N6. Restore with one click from any snapshot.
- N7. Clear privacy statement: nothing leaves the computer unless the writer connects an AI; nothing is used for training.
- N8. Import from Word, Scrivener, Markdown, plain text. v1 (Word)
- N9. Print a chapter or the book directly.

### O. Feedback and working with others

- O1. Share a read-only copy (file or link later) with inline comments that come back into the project.
- O2. Guided questions for beta readers per chapter (confused? bored? guessed the twist?).
- O3. Word round trip: export to the editor with comments; import their tracked changes and comments back onto the right chapters. v1 (DOCX with comments)
- O4. Import review: walk through each tracked change and comment like a task list; accept, reject, reply.
- O5. Filter feedback by reader, chapter, type, status.
- O6. Each share is tied to a snapshot, so old comments map onto the current text.
- O7. "Clean document" check before sending: no open comments, no placeholders, no Material text.
- O8. Co-writing and live editing: later, if ever (R-9 says no for now).

### P. Export and publishing

- P1. Export to Word and PDF without installing anything. v1
- P2. Export presets with a live preview: manuscript format, reading copy, ebook, print.
- P3. Standard manuscript format in one click (12 pt, double spaced, header, word count).
- P4. EPUB with checks and device previews.
- P5. Book looks: chapter headings, drop caps, scene-break ornaments.
- P6. Front and back matter as reusable blocks (dedication, copyright, "also by").
- P7. Print layout: trim size, margins, widows and orphans, spine width from page count.
- P8. Export a selection: first three chapters, first ten pages.
- P9. Several editions from one source (ebook, print, large print, advance copy).
- P10. Book data: title, blurb, keywords, ISBN, feeding every export.
- P11. Submission tracker: where each manuscript went, when, the answer, reminders.
- P12. Reader appendix from the bible: character list, glossary, map.
- P13. Audiobook pronunciation guide from the names. → D20

### Q. Projects and kinds of text

- Q1. Project types as templates: novel, short story, article; paper, newspaper, screenplay later. v1 (R-109)
- Q2. Library of projects, with per-project goals and quick switching.
- Q3. Series: a shared bible and timeline across books (World module later).
- Q4. Paper module later: citations, bibliography, figures.
- Q5. Article module later: word limits, headline variants, publish to a blog.

### R. Spaceship ideas (big, odd, maybe one day)

- R1. **Cold reader**: what does a reader know at page N? A view of the book from a first-time reader's side.
- R2. **Book X-ray**: a map of the whole book with characters, places, threads and tension, zoomable to the sentence.
- R3. **Living bible**: the bible updates itself as the writer writes, and every change is a proposal.
- R4. **Continuity radar**: a small gauge, green when the book is consistent, with the issues behind it.
- R5. **Time scrubber**: drag through the story's time and see who is where, who knows what, what each card says at that moment.
- R6. **Read the book aloud with a voice per character**, for proofreading by ear.
- R7. **Scene rhythm strip**: a coloured strip of the book (action, dialogue, thought) to see pacing at a glance.
- R8. **Promise board**: every promise made to the reader (setups, questions, mysteries) and whether it was kept.
- R9. **Two-books view**: the plan and the draft side by side, linked line by line.
- R10. **Writer's journal** inside the project: why decisions were made, linked to the text they changed.
- R11. **Draft archaeology**: how a sentence evolved across every snapshot.
- R12. **Mood lighting**: the editor's colours follow the scene's tone. Probably too much; listed because it was asked for.

---

## 3. How the ideas relate

Most ideas hang on a few foundations. Building a foundation makes a whole cluster cheap; a cluster without its foundation does not work. This is the input for "what goes in which window".

| # | Foundation | Ideas that need it |
|---|---|---|
| 1 | **Entity index**: every name, alias and mention known, linked and kept up to date (D14–D16) | Hover cards D8, click to card D3, highlights D25, smart search E3, first appearance C13, rename D18, chapters where they appear D6, name checker D20, co-occurrence D24, forgotten characters J11, dialogue view B7 |
| 2 | **Semantic styles** (A1–A5) | Export looks A2/A12/P2, Material text A11, style search E9, paste filter A9, Word round trip O3, AI restyle K17, book looks P5 |
| 3 | **One object, many views**: a scene is a text, a card, a row, a point on the timeline (F4) | Corkboard F5–F15, outline F16, plot grid F19, timeline F25, chapter title ↔ card C14, selection view B3 |
| 4 | **Story time**: dates on scenes and events (F25, J3) | Ages J4, calendar checks J3, who is where J6, time scrubber R5, progressions D19, character timeline D5 |
| 5 | **Facts and knowers** (J5; the game module's node model already has them) | Who knows what J5, open questions J10, cold reader R1, setups and payoffs J8, promise board R8 |
| 6 | **History**: snapshots, compare, cut file (I1–I6) | Branches I7, variants I8, what changed since sent I4, draft archaeology R11, safe AI proposals K40, undo of anything A25 |
| 7 | **Command layer** (v1): every change is a named command | AI actions K12–K17, undo A25, palette C7, rename D18, help hints L3, AI log K35 |
| 8 | **Summaries**: one line per scene, kept up to date (F3, K21) | Reverse outline F20, hover cards D8, smart search E3, session briefing K30, previously on K31, synopsis K32, AI context |
| 9 | **Findings pipeline**: checks produce findings with evidence, confidence and a dismiss reason (K37–K38) | Continuity J1–J14, analysis J15–J25, editor's inbox K7, margin dots K6, "on purpose" J2, learning to mute L/K38 |
| 10 | **Navigation history** (C1) | Back to my text C2, recent places C4, peek C12, click-anything-in-the-panel B14 |
| 11 | **Right panel with tabs** (B13) | Cards, comments, notes, research, AI chat, outline; what a click opens B14 |
| 12 | **Context awareness**: what the writer is doing now (typing, pausing, revising, planning) | Quiet mode K39, intent help L1, progressive disclosure, focus B18, stall help M9 |

Natural pairs worth noting:

- **Corkboard + binder + full view** are three views of one book; reordering in any one reorders all, and J12 checks what a move breaks.
- **Hover card → right-panel card → smart search** are the same entity at three depths: a glance, a look, a study.
- **Comments + to-dos + placeholders + AI findings** can share one task list (H9) with filters, instead of four lists.
- **Snapshots + AI proposals**: every accepted proposal is a tiny snapshot, so "undo what the AI did" is history, not a special case.
- **Claude Desktop + command layer**: Claude acts only through commands, so whatever the chat does is reviewable and undoable in Libreto.

## 4. Gaps in the research

- Reddit threads were not read directly; forums, blogs and reviews were used instead.
- Some tool features (Word, Google Docs, Obsidian, Notion, some Scrivener details) come from known product knowledge and were not rechecked.
- Screenwriting, articles and papers got light coverage; they are later project types.

## 5. Sources (main)

- How writers work: [Literature & Latte forum on continuity](https://forum.literatureandlatte.com/t/long-time-scrivener-user-first-time-poster-and-a-continuity-problem-i-finally-solved/153817), [Penguin Random House: continuity from the copy editor](https://authornews.penguinrandomhouse.com/maintaining-continuity-tales-from-the-copy-editor/), [reverse outline for a rewrite](https://clareosongco.substack.com/p/how-i-plan-a-full-rewrite-of-a-novel), [where writers get stuck](https://www.savannahgilbo.com/blog/stuck-writing-a-novel), [Scrivener reviews: compile and sync](https://www.capterra.com/p/180597/Scrivener/reviews/?page=3), [track changes for authors](https://gillhillwritingservices.com/2019/07/03/my-editor-used-track-changes-to-edit-my-manuscript-now-what/).
- Tools: [Scrivener](https://www.literatureandlatte.com/scrivener/overview), [Ulysses](https://ulysses.app/), [iA Writer](https://ia.net/writer), [Plottr](https://plottr.com/features/), [Dabble](https://www.dabblewriter.com/features-2/dabble-features), [Aeon Timeline](https://aeontimeline.com/whats-new/introducing-aeon-timeline-3), [Novelcrafter codex](https://www.novelcrafter.com/features/codex), [Sudowrite](https://sudowrite.com/blog/how-sudowrite-works/), [Fictionary](https://fictionary.co/products/storyteller-for-experienced-writers/), [Final Draft beat board](https://www.finaldraft.com/blog/breakdown-your-script-with-story-maps-and-beatboard), [Obsidian page preview](https://obsidian.md/help/plugins/page-preview), [Atticus](https://selfpublishing.com/atticus-review/).
- AI and writers: [BookBub author survey](https://insights.bookbub.com/how-authors-are-thinking-about-ai-survey/), [Authors Guild survey](https://authorsguild.org/news/ag-ai-survey-reveals-authors-overwhelmingly-want-consent-and-compensation-for-use-of-their-works/), [Authorlytica: state of author AI](https://authorlytica.com/state-of-author-ai/), [Stanford Daily: "The great smoothing"](https://stanforddaily.com/2026/03/08/the-great-smoothing/), [Horvitz: principles of mixed-initiative interfaces](https://www.erichorvitz.com/chi99horvitz.pdf).

## 6. Next

1. Review notes on this list: keep, later, no; missing ideas.
2. Group what is kept into what the writer sees at each moment (§3 is the start).
3. Then the UI design (`docs/design/ui.md`, on hold).
