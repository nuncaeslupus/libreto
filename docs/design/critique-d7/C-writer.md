# Critique C: the writer's experience, benchmark and accessibility (draft 7)

Lens: three full sessions walked as (P1) a first-time novelist with nothing, (P2) a mid-career novelist bringing a 120k-word Word manuscript and two beta readers, (P3) a non-technical older writer with low vision who uses large fonts. Then a benchmark against 16 tools, then accessibility measured against the actual tokens in `concepts-d4/d4.css`.

Numbers used below were computed from the CSS tokens:

| Token | Use | Contrast on white | Verdict |
|---|---|---|---|
| `--ink3 #8a8d93` | gray captions, footers, "Ignore everywhere", key hints, placeholders | 3.33:1 (2.94 on `--chrome`) | fails WCAG AA for body text (4.5) |
| `--ink4 #b9bbbf` | scene-break rules, disabled, list guide lines | 1.92:1 | fails even the 3:1 non-text rule |
| `--note #b8860b` | amber note bubble | 3.25:1 | borderline for an icon, fails as text |
| `--amber-line #d39b20` | amber underline | 2.48:1 | fails 3:1 for a meaningful mark |
| `--fix #2e8b57` | green "done" underline | 4.25:1 | ok as a mark |

Deuteranopia simulation (Machado matrix) of the mark colors: red `#c43d3d` becomes `#847839`, green `#2e8b57` becomes `#7f775a`, amber `#b8860b` becomes `#a69415`. **Red, green and amber collapse into the same olive.** People-violet `#7b5cc2` becomes `#3a6dc0`, which is the pending blue `#3a6fd8` almost exactly. The whole "four colors, one meaning each" rule (rule 2) is invisible to about 1 man in 12.

---

## 1. Verdict

1. **Rule 2 fails color-blind writers.** Red, green and amber are told apart by hue alone. All three are 2 px dotted underlines of the same weight, so for a deuteranope "a word I must fix" and "a word Libreto already fixed" look the same. Under the reveal, people's violet also lands on pending blue. This is a blocker. The fix is cheap (shape + weight coding), but it has to change the visual language now, before more screens are drawn.
2. **There is no motivation layer at all.** Draft 7 has no goals, targets, deadlines, sprints, progress or milestones. Statistics (S28) is two gray bar charts. "Last session · 1,240 words" (S04) is a number with no meaning. Every benchmark that writers love for this (Scrivener, Ulysses, Dabble, Atticus, Novelcrafter) has a target and a progress mark. For a "motivating" app, this is the biggest missing feature.
3. **The blank page is truly blank (S02).** P1 gets a gray "Chapter 1", six modes of which five are empty, and a status bar that says "p. 146 of 248", copied from the sample. There is no empty state, no sample project, no "plan first or just write?" (writer-needs L1), and none of the empty states for Plan, Research, Codex or Review are drawn.
4. **Jargon and a word collision.** Codex, Reveal, Pending, Dismiss, Keep/Undo on a fix, snapshot, Reference panel, Inbox, Unplaced, Discarded, Proactive, Motifs, "Paragraph or Text", Emphasis/Strong. Worse, **"card" means two things**: the margin card of a mark and the index card of a scene in Plan ("2 cards unplaced"). That breaks the walkthrough's own five-word glossary.
5. **The import path for P2 is not designed.** "Import a Word file…" is a single button. Nothing covers headings that are not Word Heading styles, scene-break glyphs, italics mapping, existing Word comments from beta readers, the wall of red underlines on 400 invented names, a Review count of thousands, or what a first AI read of 120k words costs.
6. **Low vision is an afterthought.** There is no dark, sepia or high-contrast theme in draft 7 (writer-needs B12/B24/B27 never reached the walkthrough, and R-71 is "C"). Gray text sits at 3.3:1. Passing notices vanish after 20 s, which fails WCAG 2.2.1. The fixed 320 px columns and px breakpoints break under 150-200 % OS scaling. Hover cards, hold-Alt and hover "+" need precise pointers.
7. **The AI notices nothing.** It only reads (Codex passes). Nothing local spots "stuck", "repeating" or "lost the thread", though most of it can be detected with zero tokens.
8. **Conventions are broken without a bridge.** A green underline means "grammar" to every Word user of the last 25 years, and here it means "done". `Ctrl+K` means "insert link" in Word and Docs. F8 is "extend selection" in Word. Bold and Italic are renamed. Hold-Alt fights Windows menus and Sticky Keys.

---

## 2. Findings

### A. Persona 1: first-time novelist, blank page

**F-C-01 · major · S01.** "What are you writing? Book / Play / Paper" is fine. But for P1 the screen asks three questions plus "The look" before any word is written, and "The look" (20 drawings × 7 colors) is the most fun thing on the screen, so P1 spends minutes there. *Fix:* collapse "The look" to a default (letter on a color from the title) with "Change…". Keep the title (allow "Untitled", rename later) and the kind. Move "Where to keep it" behind a small "Saved in Documents/Libreto · Change" line. Create should be reachable in one Enter from the title field.

**F-C-02 · major · S01.** There is no optional goal at birth, and this is the moment motivation is cheapest to set up. *Fix:* an optional, collapsed line, "Set a goal (optional): about [80,000] words, by [date]", with the genre median prefilled as a hint (novel 70–100k, novella 20–40k), never required. See O3.

**F-C-03 · blocker · S02.** After Create, P1 sees a blank page with a gray "Chapter 1" and nothing else, which is blank-page syndrome by design. *Fix:* draw an empty state for the first chapter of an empty project (S-new-1). Under the placeholder, in quiet gray, three doors: **Just start writing** (typing anywhere dismisses the doors), **Plan first** (opens Plan with an empty board and optional structure overlays), **Tell Libreto your idea** (Ask, prefilled: "I want to write a book about…"; without AI, a list of 8 classic prompting questions saved as a note). The doors never come back once the chapter has 50 words.

**F-C-04 · major · S02.** The status bar shows "p. 146 of 248" and "164 words" in a brand-new project. This is a sample-data mistake, and it also shows that the bar is not designed for zero. *Fix:* at 0 words the status bar shows only "0 words · Saved". Page count appears from about 1 page, and the style chip appears after the first style change.

**F-C-05 · major · all modes.** None of the empty states are drawn: Plan with 1 scene, Research with nothing, Codex with no names, Review with 0, Book with half a page. P1 will click each mode once in the first five minutes, and each must explain itself in one line and offer the first action. *Fix:* one empty state per mode (S-new-2). Plan: "Each scene becomes a card here. You have 1. + New card". Research: "Drop files, links or pictures here, or paste text. Things you collect wait in Clippings." Codex: "Names appear here by themselves as you write. Nothing to do yet." Review: "Nothing waits for you. Notes from readers and suggestions will appear here." Book: "This is how your book will print. Keep writing; come back when you have a chapter."

**F-C-06 · major · S02.** Six modes are always visible to someone who wrote 30 words. Research, Codex and Book are meaningless to P1 on day 1. *Fix (option):* progressive disclosure. Show Write, Plan and Review at first, and the others after they first matter (the first Codex name found, the first file dropped, the first 5,000 words), with "Show all modes" in View. Weigh this against the owner's "findable where a person would look". See O6.

**F-C-07 · major · first run.** There is no sample project. Scrivener's interactive tutorial *is* a project, and that is the best onboarding in the category: you learn by touching a real book with no fear. *Fix:* "Explore a sample book" on Start (S-new-3): a short "The Blue Lamp" sample with 3 chapters, some marks, a note from Marta, Codex entries and a plan. It opens read-write in a temporary copy and is labeled "Sample" in the title bar.

**F-C-08 · major · S27.** Tutorials are "offered once when the feature first matters", but no trigger is defined, and P1 does not know what "matters". *Fix:* write the trigger table into the spec. Examples: the first time the user types "Chapter 2" → offer "chapters" tutorial. The first right-click looking for Bold → "Emphasis tip". The first 3 red words that are capitalized → "names and the Codex". The first time Review count > 10 → "Review all". The first time Plan is opened with > 5 scenes → "moving scenes". Each is offered with the tip card, never auto-started.

**F-C-09 · minor · S02.** The gray "Chapter 1" placeholder plus a caret in the body leaves P1 unsure whether to type a title. *Fix:* the placeholder reads "Chapter 1 · title (optional)" until focus leaves it once.

**F-C-10 · major · S02.** The first red underlines P1 sees will be the protagonist's invented name (Vega, Kit). The very first marks in the app are "you're wrong" about the thing they are proudest of. *Fix:* a capitalized unknown word that repeats ≥ 2 times is shown with a neutral gray-dotted "name?" mark, never red. Its card says "Looks like a name. Add Vega to the Story bible / It's a typo". This puts back the shortcut removed in draft 7, but on the right mark.

**F-C-11 · minor · S02.** The Ask button is a lone sparkle with no label. P1 has never seen it and will not click an unlabeled star. *Fix:* show the label "Ask" beside the sparkle for the first N sessions or until the first use, then shrink to the icon. All strip icons (left toggle, Back, Forward, Undo, bell, right toggle) need tooltips with name and key.

**F-C-12 · major · onboarding.** "AI-first" but P1 meets no AI choice at all. It sits deep in Settings ▸ AI with a key field ("sk-ant-…") that a non-technical writer cannot fill in. *Fix:* a first-run step after the first session (not before writing): "Libreto can use an AI to answer questions about your book. It's optional. [Connect with Claude Desktop] [I have a key] [Not now]". Pair it with a 3-line plain explanation of cost and privacy. Never show "sk-ant" before the user has chosen "I have a key".

### B. Persona 2: 120k-word Word manuscript, two beta readers

**F-C-13 · blocker · S01 (Import).** The import has no screen. P2's .docx uses bold centered "CHAPTER ONE" (no Heading style), `#` scene breaks, and has 45 Word comments from beta readers Kit Lane and Marta. *Fix:* an import preview sheet (S-new-4). On the left, the detected structure: "38 chapters (from: lines starting with CHAPTER), 112 scenes (from: #)", each rule with a dropdown ("Chapters are: Heading 1 / lines starting with… / page breaks"). On the right, a live preview of chapter 1. Below that: "Italic → Emphasis (2,310), Bold → Strong (12), 45 comments by 2 people → notes in Review, tracked changes: 0", plus "Names found: 41 → add to Story bible?". Then "Import".

**F-C-14 · blocker · S22.** Beta-reader comments made on P2's **original** Word file (not one sent from Libreto) carry no paragraph ids, so "Add notes from a file" cannot place them. Most real readers' copies arrive this way, at least once. *Fix:* fuzzy matching by text (a quote of the anchored words plus the paragraph's first words), with a confidence badge. Unmatched comments go to an "Couldn't place 3 notes" list, where the user can click a paragraph to drop each one. State this in S22.

**F-C-15 · major · S15 after import.** The first open of the imported book gives Review a count of about 3,000 (names, Britishisms, dialogue spelling, style rules), and red dots across every page. P2 gives up. *Fix:* a "first read" summary in place of a raw count (S-new-5). "Libreto read your book: 41 names (add to Story bible? 1 click), 6 words used your way everywhere (add to dictionary? 1 click), 212 possible typos, 45 notes from Kit and Marta". Each is a batch action. The Review count on the mode switch is capped visually ("99+") and the spell layer starts off for imported books until the names are confirmed.

**F-C-16 · major · S25.** "Proactive reads what changed since the last session". After an import, *everything* changed: 120k words, roughly 160k tokens per pass plus output. P2 does not know if that is €0.50 or €15. *Fix:* any AI pass larger than X shows an estimate first: "Reading the whole book costs about €1.20 of your €10 this month. [Read it] [Only chapter 1] [Not now]". Imports never trigger an automatic pass.

**F-C-17 · major · S22.** Two readers, Kit and Marta, comment the same paragraph. The two-column view is "yours vs Marta's", so with two readers' changes on one paragraph, it is unclear which column shows what. *Fix:* draw the 3-way case. Yours on the left, then a stack of each reader's version, each with "Take Kit's" and "Take Marta's". Or say plainly that the second import is compared against the text as it is after the first is decided.

**F-C-18 · major · S15.** P2's manuscript has dialogue dialect ("gonna", "ain't") and the character's speech gets flagged everywhere. *Fix:* "Ignore in dialogue" as a project switch, and "this person talks like this" on a Codex person entry (words they use) to silence those words inside their quoted speech.

**F-C-19 · minor · S04.** P2 resumes a 38-chapter book after two weeks away. "Last session · Thursday 19:32 · 1,240 words" does not answer "where was I in the story?". *Fix:* see F-C-55 (a "Where was I" recap, built with no AI).

**F-C-20 · minor · S21.** P2 wants to send to two readers at once. "To whom" takes one name. *Fix:* "To whom" accepts several names and makes one file per reader (each with an id, so each one comes back attributed).

**F-C-21 · major · S01 / S24.** P2's first export goal is "standard manuscript format" for agents (12 pt Courier or Times, double spacing, 1 in margins, header with surname/title/page). It exists as "manuscript" in Book templates but is invisible from File ▸ Export. *Fix:* File ▸ Export ▸ "Manuscript for agents (Word)" as a named preset, with a 3-field form (name, contact, word count rounded).

### C. Persona 3: older writer, low vision, large fonts

**F-C-22 · blocker · S30, S12.** The breakpoints are in px (1000, 1260) and the columns are fixed at 320 px. On a 1920 px laptop at 150 % OS scaling, the effective width is 1280. At 200 %, it is 960, and every column becomes an overlay over the text. With Interface size "Largest", 320 px columns truncate chapter titles to a few words. *Fix:* define breakpoints in multiples of the page measure plus the interface scale, not px. Let columns grow with interface size (320 × scale) and let the page shrink in measure, keeping 60–75 characters, before columns overlap. Draw S30 at 200 % (S-new-11).

**F-C-23 · blocker · S33.** Passing notices disappear after ~20 s. A low-vision user who reads with a magnifier or slowly misses them, and the Undo is gone with them. That fails WCAG 2.2.1 (timing adjustable). *Fix:* Settings ▸ Reading & seeing ▸ "Messages stay: 20 s / 1 min / until I close them". The bell keeps Undo anyway. See O7.

**F-C-24 · major · S02, S03.** The card footers ("Ctrl+. opens · F8 next"), "Ignore everywhere in this project", the gray Was/Now labels, placeholders and the scene names at rules are all `--ink3` at 3.33:1, at 11–12 px. *Fix:* the minimum for any text is `--ink2` (#55585e, 7.1:1). Reserve ink3 for decorative or disabled text only. Disabled items need a non-color sign as well.

**F-C-25 · major · S06.** The scene-break rule is `--ink4` at 1.92:1, a "soft gray rule". For P3 scene breaks are invisible, and with them the scene structure. *Fix:* at least 3:1 (WCAG 1.4.11). Optionally, render the break as a centered glyph (⁂ or the user's own `***`) rather than a thin line, which also follows book convention.

**F-C-26 · major · S02.** Marks are 1.5–2 px dotted underlines. At 200 % zoom they scale, but at normal size with low acuity, dotted reads as a faint solid line. *Fix:* an "Easier to see marks" option: 3 px marks with shape coding (see O2) and a light background tint on the marked word.

**F-C-27 · major · S02.** Mark cards open on hover. P3 uses a magnifier or a trackball, and the card pops up away from the magnified area or flickers when the pointer moves. *Fix:* the setting "Open cards: on hover / on click only" (default: hover with 300 ms delay). The card stays open while the pointer travels to it (a hover bridge).

**F-C-28 · major · S10.** "Hold Alt half a second" is impossible for users with Sticky Keys (Alt latches, it doesn't hold), tremor or switch access. `Ctrl+Shift+A` exists, but no screen says so. *Fix:* the reveal is a visible toggle in the status bar's Show menu ("Show names and styles"), with the key shown. Hold-Alt is a power shortcut only.

**F-C-29 · major · S05.** The "+ between rows" appears only on mouse hover at a 1–2 px gap. That is a tiny target for P3 and it is undiscoverable. The note "+" at the right of the line under the mouse has the same problem. *Fix:* keep them, but also show a visible "+ Add" at the bottom of the chapter list when the list is short (< 3 rows) or empty, and when Interface size ≥ Larger. Hover targets must be at least 24×24 px (WCAG 2.5.8).

**F-C-30 · major · S15.** The badge counts in the chapter list ("3 💬 1 ⋯ 1 ✓ 1 ?") are 11 px colored numbers with 10 px icons, four per row. For P3 they are illegible, and for CVD users they are only color. *Fix:* in Review, the list shows one neutral count per chapter ("6") and the breakdown on hover or focus, or as a wider column at large interface sizes.

**F-C-31 · major · S08, S09.** The Ask panel and conversation are fixed in the bottom-right corner, over the right column. At 200 % zoom the panel covers most of the text. *Fix:* at large sizes, Ask docks as a full right column (replacing Reference) rather than floating.

**F-C-32 · minor · S26.** "Interface size: Smaller / Standard / Larger / Largest" has no percentages, so P3 can't tell whether Largest is 125 % or 200 %. *Fix:* show "Largest (175 %)" and allow following the OS text-scale setting ("Use system text size").

**F-C-33 · major · S26.** Settings has no place for seeing comfort: no theme, page color, text font, line spacing or measure. "Editor" is a tab whose content is never drawn. *Fix:* a Settings tab **"Reading & seeing"** (S-new-7). It holds theme (Light, Sepia, Dark, High contrast, Follow system), the page font (with Atkinson Hyperlegible, OpenDyslexic, Lexend and the 3 book faces), text size, line spacing (1.4–2.2), page width (narrow / book / wide), "Easier to see marks", "Reduce motion", "Messages stay", "Open cards on click only", and "Read aloud voice".

**F-C-34 · minor · S13.** Focus hides the status bar, and with it "Saved". For an older writer, "is my work saved?" is anxiety-critical. *Fix:* Focus shows a tiny "Saved" fade-in on pause at the bottom corner, or the word count on mouse move.

**F-C-35 · major · S02 et al.** There is no read aloud. Hearing text is the #1 proofreading tool for low-vision writers and helps everyone (writer-needs B25; Word's Immersive Reader). *Fix:* "Read aloud from here" in the right-click menu and on a key, using OS voices, with the word highlighted. No AI, no tokens.

**F-C-36 · minor · S02.** There is no dictation mention. For P3 (and RSI), OS dictation works in any editor, but punctuation commands and the "clean up dictation" pass (writer-needs B26) are a natural AI proposal. *Fix:* v1 can just make sure OS dictation works in the custom editor (test this: contenteditable plus IME/dictation is a classic Electron bug source). Put it on the a11y test list.

### D. Accessibility: color, contrast, motion, screen readers, keyboard

**F-C-37 · blocker · S02, S03, rule 2.** The mark system relies on hue alone. Under deuteranopia, red #c43d3d, green #2e8b57 and amber #b8860b all render as olive (#84 78 39 / #7f 77 5a / #a6 94 15). Same weight, same dotted pattern. P-with-CVD cannot tell "unknown word" from "already fixed" from "note". *Fix:* shape-code each mark and keep the color as a second channel (see O2):
- red = **wavy** 2 px, the universal spelling convention.
- blue = **dashed** 2 px.
- green = **thin dotted, 1 px, at 50 % opacity**, fading to nothing after the session (a done fix should be nearly invisible).
- amber note = a **light background tint** on the words plus the bubble, not an underline.

The card icons (?, …, ✓, bubble) already differ by shape, which is good; keep them.

**F-C-38 · major · S10.** Under the reveal, people (violet #7b5cc2) simulate to #3a6dc0 under deuteranopia, the same as pending blue. Places (cyan) and things (brown) also sit near blue and amber. And the reveal *adds* every underline at the same moment. *Fix:* the reveal paints entities with a **background tint plus a small leading glyph or initial on hover** (person ◦, place ⌂, thing ◇, motif ~), never an underline, so underlines stay reserved for marks. Pick a CVD-checked categorical set (run the `dataviz` palette validator) and test with simulated deuteranopia, protanopia and tritanopia.

**F-C-39 · major · S15.** The Review filter pills are all solid dark, and in the picture every pill looks "on". There is no off state, so CVD and low-vision users cannot tell what is filtered. *Fix:* on = filled + ✓ glyph; off = outline, no glyph. Add "Showing 4 of 12 · Show all" text above the list.

**F-C-40 · major · S15, S03.** Who a card is from is a round initial (M, You, spark), all gray. For screen readers and at a glance, that is fine. But the "Done · typo" card in S15 shows "You", although Libreto did it. *Fix:* use a "Libreto" glyph for automatic fixes, distinct from the AI spark (no AI involved), and give each initial an accessible name ("from Marta").

**F-C-41 · major · S33, S02.** There are many motion effects: the red-to-green fade, notices "sliding visibly into the bell", the undo flash, the "pulsing" Ask button (draft 4), the line from badge to card, and Review all autoscroll. *Fix:* honor `prefers-reduced-motion` plus the Settings switch. Fades become instant, slides become nothing (the bell dot appears), flash becomes a 2 s static outline, and the pulse becomes a static dot.

**F-C-42 · blocker · whole editor.** No word anywhere about screen readers. A custom editor with inline marks, gutter badges, margin cards and an index is exactly where Electron apps fail NVDA/JAWS/Orca/VoiceOver. *Fix, written into the spec:*
- the editor is a real `role=textbox` with `aria-multiline`.
- marks are exposed as `aria-describedby` / `aria-details` ("spelling: unknown word, 2 suggestions"), announced on caret entry.
- `F8` announces "Mark 3 of 12: pending agreement, 'was' to 'were'".
- notices are `role=status` (passing) or `role=alert` (standing).
- the Ask conversation is `role=log`.
- mode switch = `role=tablist` or radiogroup.
- the margin cards are reachable with F6 and ordered as in the text.
- the Plan board has a list-equivalent view.

Add Orca on Linux to CI testing, since v1 is Linux-first.

**F-C-43 · major · S16, S35.** Plan is drag and drop only, plus a right-click "Move to ▸". There is no keyboard move on the board. *Fix:* select a card with arrows, use `Ctrl+Shift+arrows` to move it (as in the chapter list), and announce "Moved after 'The confession', chapter 10".

**F-C-44 · major · S34.** Review all maps `Delete` to Dismiss. A keyboard user whose focus is unexpectedly in a card (after Tab) presses Delete to delete a character, and a reader's suggestion vanishes. *Fix:* in cards, Dismiss is `Ctrl+Delete` or `D`; plain Delete in the text always edits text. Same for `Enter` = Apply: require focus in the card, never accept from the text caret.

**F-C-45 · minor · S29.** The ⌨ "keys here" list is great. Make it also the screen-reader user's map: F1 → "Keys here" read as a list grouped by area.

**F-C-46 · major · all.** There is no dark theme in draft 7. The only dark trace is an old Settings inset in d4.css. Many writers write at night, and dark mode is table stakes (Ulysses, iA Writer, Scrivener, Final Draft "Night mode", Obsidian). Mark colors must be re-tuned for dark (pending blue on #1c1d1f, green, amber). *Fix:* draw S02, S15 and S10 in Dark and Sepia (S-new-8). Make R-71 an "M". Keep the **page color separate from the UI theme** (dark UI with a sepia page is common).

**F-C-47 · major · all.** There is no high-contrast theme, and the OS forced-colors (Windows High Contrast) are not considered. Marks drawn with `border-bottom` color vanish into a single system color. *Fix:* in forced-colors mode, use shapes (wavy/dashed/dotted/tint, from F-C-37) and outline focus rings. Test with `@media (forced-colors: active)`.

**F-C-48 · major · S02.** The page font is Charter, fixed. There is no dyslexia support. *Fix:* a page-font choice (independent of the print styles, as Book already separates print), with letter-spacing and word-spacing sliders, cream page, and a line-focus option (1/3/5 lines, writer-needs B24). Several benchmarks have this (iA Writer's Focus, Word's Immersive Reader line focus).

**F-C-49 · minor · S03.** The middle dot (·) for spaces in Was/Now is invisible at low acuity and confusing ("is that a character?"). *Fix:* use a visible open box ␣ in a tinted chip only where the space matters, with alt text "space added".

**F-C-50 · minor · S01.** The look colors and the project tiles carry meaning only by color plus pictogram. That's fine, but the 7 swatches have no names for screen readers. *Fix:* name the swatches ("Blue", "Moss"…).

**F-C-51 · major · S02 rule 6.** "Keys that exist on every keyboard" is good for Spanish. But the keys are long chords (`Ctrl+Shift+H`, `Ctrl+Shift+N`, `Ctrl+Shift+A`, `Ctrl+Shift+L`, `Ctrl+Shift+R`), which are hard for one-handed or motor-impaired users. *Fix:* every command is reachable from menus (true), and Ask can run commands by name (true). Add Sticky-Keys-friendly testing, and say in Help that every chord is optional.

### E. Motivation, goals, progress

**F-C-52 · blocker · S28, S04, status bar.** There are no goals anywhere. *Fix (S-new-6):*
- **Project goal**: words + optional deadline, with writing days per week. Libreto computes the daily quota and recomputes it kindly after a missed day ("1,150 a day gets you there"). This is Scrivener's Project Targets plus Dabble's deadline.
- **Session goal**: words or minutes.
- In the status bar, the word count gets a thin progress ring that fills toward the session goal. A click opens Statistics on the Goals tab.

All of it is optional and off until set. See O3.

**F-C-53 · major · S04.** "Last session · 1,240 words" is data without meaning. *Fix:* "Thursday · 1,240 words, your goal was 1,000 ✓ · The book is at 54,300 of 80,000 (68 %)". Add one line of real encouragement drawn from data, never generic: "Your longest chapter yet", "3 days in a row this week". No exclamation marks, no emoji, no confetti.

**F-C-54 · major · S28.** Statistics are bars without a goal line, without "days written this month" as a calendar, and without "words per writing day". *Fix:*
- the Words tab gets a horizontal goal line and a 5-week calendar strip of days written (filled squares, with rest days marked as rest rather than failure).
- "Streak" is **weekly** ("4 of 5 planned days this week"), never consecutive-day guilt (writer-needs: "streaks that punish rest days hurt").
- add a "Progress" tab: the book bar from 0 to the target, chapters by status (draft / working / done) from Plan's status label.

**F-C-55 · major · S04.** "Losing the thread" after a break is the classic reason drafts die. *Fix:* a **"Where was I"** item on the Last session card, built locally with zero tokens. It shows:
- the last paragraph written, in a quote.
- the open notes of that chapter.
- who was in the last scene (from the index).
- the next card in Plan, if any.

With AI on, a cached 3-line summary of the previous chapter adds to it (computed once at the session-start pass and stored, never on demand).

**F-C-56 · minor · S16.** Status (draft · working · done) exists, but nothing celebrates crossing it. *Fix:* when the last chapter is marked "done" or the goal is reached, a single standing notice: "First draft finished · 82,140 words in 7 months. Make a snapshot called 'First draft'?" This is the one big moment that deserves a card.

**F-C-57 · minor · sprints.** There are no sprints. *Fix:* View ▸ "Writing sprint…" (15/25/45 min). It enters Focus with a thin time bar at the top, and at the end shows "+412 words in 25 min", then goes. Atticus and Dabble have this, and NaNoWriMo writers expect it.

**F-C-58 · minor · tone.** How to be encouraging without being childish: no badges, trophies, mascots, XP or animated confetti (4thewords and Duolingo-style feels juvenile to professionals). Use real numbers, the writer's own milestones, and a calm voice ("Chapter 12 is your longest"). Keep a single setting, "Progress messages: on / off". Write the tone rules in the spec's voice guide.

### F. The AI noticing problems, without nagging or tokens

**F-C-59 · major · AI design.** The AI is only a reader and an answerer. *Fix:* a local **writer-signals** layer (no tokens). It detects:
- (a) **stuck**: the caret idle > 4 min on a blank or near-blank scene, or net words negative over 20 min (writing and deleting).
- (b) **repeating**: the same paragraph rewritten > 5 times in a session; local n-gram repetition (the same 3-word phrase 4+ times in a chapter); crutch words (just, really, suddenly) over a project baseline.
- (c) **losing the thread**: a scene with no Codex entities in common with the previous 3; a person absent for 10+ chapters then back; a plan card's POV different from the text's dominant name.

Signals never pop up. They light a **small dot on the Ask button**. Opening Ask shows one line at the top, "Stuck on this scene? [3 directions] [Where was I] [Not now]", and the AI is called only if the user clicks. See O5.

**F-C-60 · major · AI noise.** The rules for "don't nag" are not written. *Fix:*
- at most one signal per session.
- none in Focus or a sprint.
- none in the first 10 minutes.
- "Not now" means a 3-day cooldown for that kind.
- "Don't bother me" (already exists) silences that kind per project.
- signals are listed in Settings ▸ Tips like silenced findings.

**F-C-61 · minor · S09.** "Stuck" help must propose directions, not prose (writer-needs K23): 3–5 one-line options ("Kit arrives early", "the lamp goes out"), each "Add as a note". Prose only on explicit request, and it is logged in "What the AI wrote".

**F-C-62 · minor · S25.** The level names Quiet, Reviews and Proactive describe the AI's personality, not what the writer gets. *Fix:* rename to **Off / Only when I ask / Also when I ask it to check / Also on its own, in Review**, or use a plain question: "Should the AI look at your book on its own? No / At the start of each day / Also while I pause".

**F-C-63 · minor · S25.** The budget is shown in € only. Writers can't relate €3.20 to anything. *Fix:* add "≈ 4 whole-book reads left this month" as a unit of meaning next to the money.

### G. Jargon and labels (see O1 for the full table)

**F-C-64 · major · whole app.** "Codex" is Novelcrafter's term (and a manuscript-studies word). A non-genre writer has no idea what it means, and in Spanish "códice" is even odder. *Fix:* see O1. Recommended: **"Story bible"** in English (Sudowrite and TV writers use it; it is self-explanatory) and "Biblia" or "Personajes y lugares" in Spanish. If the owner keeps Codex, the mode tooltip must say "Codex: people, places and things in your book".

**F-C-65 · blocker · glossary.** "Card" is used for both the margin card of a mark and the Plan index card ("2 cards unplaced", "+ New card", "Mark card" in Keys). *Fix:* keep **card** for Plan (corkboard convention, Scrivener). Call the margin thing a **note** (for notes) and a **suggestion** (for pending), with no umbrella word in the UI. The umbrella only lives in the spec. Rename "Mark card" (Keys) to "Open the mark under the cursor".

**F-C-66 · major · S03.** **Pending / Apply / Dismiss** sound like an IT ticket system. Word and Docs writers know **Suggestion · Accept / Reject**. *Fix:* "Suggestion · agreement", "Accept" and "Reject" (or "No, thanks"). The colored meaning words in the legend become: "red: check this word · blue: a suggestion · green: fixed for you · amber: a note".

**F-C-67 · major · S02, S03.** A "Done · typo" card with **Keep / Undo**. "Keep" is a no-op that users will think they must click, and "Done" reads as "you are done". *Fix:* title "Fixed for you · typo", one button **Undo**, and the card closes on its own. Remove Keep from fixes, and drop the "Keep" Enter shortcut.

**F-C-68 · major · S10.** "**Reveal**" (View menu, key) is opaque, a Scrivener/WordPerfect "reveal codes" echo. *Fix:* **"Show names and styles"**.

**F-C-69 · major · S11.** "**Reference panel**" and "**peek**". *Fix:* the right column is just "the side panel" in Help and has no name in the UI. Its toggle tooltip is "Show details (people, places, research)". "Peek" is "quick look" in Help (the macOS convention) and appears in no UI label.

**F-C-70 · major · S17.** "**Inbox**" means email. *Fix:* **"To sort"** or **"Clippings"** (Evernote/Kindle convention). Recommend "Clippings".

**F-C-71 · major · S16.** "**Unplaced**" and "**Discarded**". *Fix:* "**Not in the book yet**" and "**Cut scenes**". Writers say "my cuts" (Scrivener uses "Trash", which is wrong for this because it implies deletion).

**F-C-72 · major · S23.** "**Snapshot**" (Scrivener's term) and "Bring back this version". *Fix:* **"Saved version"** everywhere, as in Google Docs "Version history" and "named versions". The automatic ones get the label "Automatic". "Bring back this version" is good; keep it.

**F-C-73 · minor · S04, S33.** The **bell / notices** pairing is a social-media and dev-tool metaphor. *Fix:* the bell's tooltip and header read "**Today's messages**". Fine to keep the icon.

**F-C-74 · major · S07.** "**Emphasis / Strong**" instead of Italic / Bold. P3 (and most Word users) looks for "B" and "I" and won't find them. *Fix:* label them **"Italic (emphasis)"** and **"Bold (strong)"** in the selection bar and menu, with the B and I glyphs. The semantic idea survives in print styles. See O8.

**F-C-75 · major · S07.** The style dialog's "**Paragraph** or **Text**" is meaningless. *Fix:* "Applies to: **whole paragraphs** / **a few words**".

**F-C-76 · minor · S07.** The style name "**Not printed**" is unclear. *Fix:* "**Private note (never printed)**". "Plain" → "**Normal text**" (Word's word).

**F-C-77 · minor · S18.** "**Motifs**" is literary jargon a beginner may not know, and "Things" is vague. *Fix:* keep both, each with a one-line hint on the empty navigator ("Motifs: images or ideas that come back: rain, a lemon").

**F-C-78 · minor · S02.** "**Show ▾**" (status bar) and "**Whole book ▾**" give no hint of what they change. *Fix:* "**Marks ▾**" (Show), and use a page icon with the tooltip "Show the whole book or one chapter".

**F-C-79 · minor · S15.** "**Add notes from a file…**" is better than before, but the reader's mental model is "Marta sent it back". *Fix:* "**Bring in a reader's copy…**", with the hover text as drawn.

**F-C-80 · minor · S08.** "**Go to / Do**" group headers in Ask are cryptic. *Fix:* "**Open**" and "**Commands**". Also, Ask is both search and AI. Name the button "**Ask or find**" in its tooltip.

**F-C-81 · minor · S26.** Settings "**Structure levels: Part › Chapter › Scene**". *Fix:* "**What your book is divided into**".

**F-C-82 · minor · S18.** "**from the text**" chips and "**no AI**" chips are dev-speak repeated six times on one screen. *Fix:* a single line at the top, "Gray parts are kept up to date from your text; you can't edit them here". Mark AI material only with the spark.

### H. Overload and convention breaks

**F-C-83 · major · S02 strip.** The strip holds 13 controls (toggle, back, forward, undo, redo, breadcrumb, 6-way switch, find, bell, toggle), with undo/redo duplicating Edit and keys. *Fix:* drop Undo/Redo from the strip (Word and Docs keep them, but Ulysses, iA Writer and Scrivener don't need them). Or move Back/Forward into the breadcrumb's left edge. That leaves about 9 controls.

**F-C-84 · major · status bar.** It holds 10 items, three of which (Whole book, Show, History) are view settings that also live in menus. *Fix:* the bar shows Style · Words (+ goal ring) · Saved, and at the right Marks ▾ · Zoom. History and Whole book live in View, and ⌨ in Help (F1).

**F-C-85 · major · S02.** A green underline on a fixed word contradicts the Word convention, where green (wavy) means grammar. P2 and P3 will read green as "something's wrong". *Fix:* the done mark is almost invisible (F-C-37). See O2.

**F-C-86 · major · S08.** `Ctrl+K` is "insert link" in Word, Docs, Pages and Notion. Writers will press it and get Ask. *Fix:* keep `Ctrl+K` (Slack, VS Code and Linear users expect it), but Insert ▸ Link must exist with its own key, and the first press shows a one-time tip: "Ctrl+K opens Ask. To add a link: Insert ▸ Link (Ctrl+Shift+K)".

**F-C-87 · minor · S02.** F8 / Shift+F8 for marks collide with Word's F8 (extend selection), which few use. Acceptable, but F7 is the universal "spelling" key in Word, LibreOffice and Pages. *Fix:* also bind `F7` to "next mark".

**F-C-88 · major · S07.** `Ctrl+U` answers with a lesson ("underlining is not a style in a book"). For P3, that is the app scolding them. *Fix:* Ctrl+U underlines (a style "Underline", printing as italic by default in Book, with a one-line hint the first time only). Respect the user.

**F-C-89 · minor · S13.** `F11` for Focus collides with the OS fullscreen key on some Linux desktops. Fine, but View ▸ Focus must show it, and Esc should **also** leave Focus when nothing is open inside it (the owner's fear was losing cards; with nothing open, Esc leaving is the universal expectation from browsers, iA Writer and Ulysses).

**F-C-90 · minor · S04.** The mode switch count "Review 12" is blue, the same as "pending", while it counts notes as well. *Fix:* a neutral gray count, or the number only.

### I. Help, tips, tutorials

**F-C-91 · major · S27.** Help is good, but nothing points to it at the moment of confusion. *Fix:* every empty state and every first-time dialog carries a "How does this work?" text link to the exact Help topic. The owner said no "?" buttons; a text link in empty states is not a "?" button.

**F-C-92 · minor · S33.** "One tip a day at most, for a habit from a fixed list" gives no trigger table. *Fix:* the same table as F-C-08, and the rule that a tip appears only **after** the user has done the slow way twice (for example, scrolled to chapter 12 by hand twice → "Ctrl+K, type 12").

**F-C-93 · minor · S27.** The tutorial bubble says "Esc leaves". But Esc in the app means "closes innermost", so in a tutorial it should close the bubble, not abort the whole tutorial. *Fix:* "Esc hides this step · Stop tutorial" as a visible button.

**F-C-94 · minor · S29.** Help ▸ "What's new" is missing: the notice "Libreto was updated to 1.4; what is new is in Help" (S04 bell) points nowhere specific. *Fix:* a "What's new" page with 3 bullets and pictures.

**F-C-95 · minor · onboarding.** A "Getting started" checklist (Notion, Dabble) can be motivating if it is dismissible and real. *Fix:* in Help ▸ Getting started (not a sidebar): write 100 words · add a chapter · add a note · see your plan · send a copy. Each item is ticked automatically when done.

### J. Benchmark: what to copy, what to avoid

**F-C-96 · Scrivener.** *Copy:* Project Targets (draft + session, deadline, writing days) as the model for F-C-52. The interactive tutorial project. Composition mode with a chosen backdrop. Typewriter scrolling (missing in Libreto, add it to View). Named snapshots. *Avoid:* the jargon wall (Binder, Scrivenings, Compile, Collections) and the 200-option compile, which is the #1 complaint. Libreto's Book is already better; don't drift.

**F-C-97 · Ulysses.** *Copy:* the goal circle that fills quietly in the corner, then turns green. Per-sheet goals with "about / at least / at most". Light/dark themes with separate editor themes. Typewriter mode. *Avoid:* hiding structure in a library model with sheets and groups. Libreto's chapter list is clearer.

**F-C-98 · iA Writer.** *Copy:* **Authorship**, which marks text as yours, pasted or AI-written (AI gray, yours black). It is a perfect, visible AI disclosure, better than a Settings warning, and it fits the owner's "disclosure always visible". Show it under the reveal and in Reports. Also Focus by sentence/paragraph, Duospace or dyslexia-friendly type, auto dark mode, and the Style Check (fillers, clichés) done locally. *Avoid:* the stark minimalism that hides all structure.

**F-C-99 · Word.** *Copy:* Immersive Reader (line focus, read aloud, spacing), the Accessibility Checker idea (for exported EPUB: alt text on pictures, heading order), Accept/Reject wording, Track Changes author colors **plus** author names. *Avoid:* the ribbon, and undo that doesn't show its place (the owner already sees this).

**F-C-100 · Google Docs.** *Copy:* "Suggesting" as the word for pending, version history with named versions, comments that @-assign, and screen-reader/braille support as a public commitment. *Avoid:* the web-only model.

**F-C-101 · Pages / Vellum / Atticus.** *Copy:* Vellum's live device preview (Kindle, phone, paperback) in Book; Atticus's built-in sprint timer and goals; Pages' template gallery with real thumbnails for Start ("Novel", "Short stories", "Memoir"). *Avoid:* Vellum being Mac-only and having no writing side.

**F-C-102 · Plottr.** *Copy:* structure templates as **overlays** on Plan (Save the Cat, Three acts, Hero's Journey, Story circle) for P1 who asks "how is a novel shaped?". Show them as faint column/row labels, never as forced slots. Also a series bible. *Avoid:* timeline grids that need training.

**F-C-103 · Dabble.** *Copy:* the best goals UI in the category (deadline, daily target recomputed, rest days, a progress chart) and the gentle first-run tour. *Avoid:* account plus cloud lock-in.

**F-C-104 · Novelcrafter.** *Copy:* Codex "mentions" and progressions (facts that change over the book: "Lena's age in ch. 2 vs ch. 8"). Libreto's open questions are this; make them first-class. *Avoid:* jargon (Codex, Workshop, Beats, Progressions) and an AI-centric UI that overwhelms. Libreto's discretion is a differentiator.

**F-C-105 · Sudowrite.** *Copy:* "Story Bible" as the plain name. The credit meter shown in writer units. "Brainstorm" with options, not prose. *Avoid:* AI buttons everywhere ("Write, Rewrite, Describe, Expand") and prose generation as the default action. Libreto's one-door Ask is right.

**F-C-106 · LivingWriter.** *Copy:* templates per genre at project creation and story elements linked from text. *Avoid:* a dashboard-first opening; Libreto rightly opens on the text.

**F-C-107 · Final Draft.** *Copy:* for Play, Tab/Enter cycling of elements (Scene heading → Action → Character → Dialogue). Without it, "Play" in S01 is a false promise. Also the Night mode naming and the Beat Board. *Avoid:* the cost and the dated UI.

**F-C-108 · Obsidian / Notion.** *Copy:* Notion's empty-page affordances ("Press / for commands", template list fading as you type) for F-C-03; Obsidian's theme and font freedom and backlinks (already in the Codex). *Avoid:* "vault" and "workspace" jargon, plugin sprawl, and the blank-canvas paralysis Notion causes without templates.

---

## 3. Options for real design choices

### O1. Vocabulary (full proposal)

| Draft 7 | Proposed (EN) | Proposed (ES) | Why |
|---|---|---|---|
| Codex | Story bible | Biblia de la historia | self-explanatory, Sudowrite/TV convention |
| Reveal | Show names and styles | Mostrar nombres y estilos | says what you will see |
| Pending | Suggestion | Sugerencia | Google Docs "Suggesting", Word |
| Apply / Dismiss | Accept / Reject | Aceptar / Rechazar | Word, Docs |
| Done · Keep / Undo | Fixed for you · Undo | Corregido · Deshacer | Keep does nothing |
| Unknown · Ignore here | Check this word · Leave as is | Revisar palabra · Dejar así | less tech |
| Resolve | Resolve (keep) | Resolver | Word/Docs users know it |
| card (margin) | note / suggestion | nota / sugerencia | frees "card" for Plan |
| snapshot | saved version | versión guardada | Docs |
| Reference panel / peek | side panel / quick look (Help only) | panel lateral | no new noun in UI |
| Inbox | Clippings | Recortes | not email |
| Unplaced | Not in the book yet | Fuera del libro | |
| Discarded | Cut scenes | Escenas cortadas | writers' word |
| Notices / bell | Today's messages | Mensajes de hoy | |
| Proactive / Reviews / Quiet | Also on its own / When I ask it to check / Only when I ask | | describes outcome |
| Emphasis / Strong | Italic (emphasis) / Bold (strong) | Cursiva / Negrita | findable |
| Paragraph / Text (style) | Whole paragraphs / A few words | Párrafos / Palabras | |
| Not printed | Private note (never printed) | Nota privada | |
| Show ▾ | Marks ▾ | Marcas ▾ | |
| Go to / Do | Open / Commands | Abrir / Comandos | |
| Structure levels | What your book is divided into | Cómo se divide | |

- **A: adopt the table wholesale.** *Pros:* zero learning for Word/Docs users and non-technical writers. *Cons:* "Story bible" sounds genre-ish to literary writers.
- **B: keep the owner's coined nouns** (Codex, Review, Book), but use the conventional verbs (Accept/Reject, Italic/Bold, saved version). *Pros:* brand words stay. *Cons:* Codex still needs a tooltip forever.
- **Recommendation:** A for verbs and all secondary nouns. For "Codex", run a 5-person hallway test with "Story bible" vs "People & places" vs "Codex" and pick the one people guess right without a hint.

### O2. Marks that survive color blindness

- **A: shape + weight coding, color as second channel.** Red wavy, blue dashed, green faint 1 px dotted that fades after the session, amber as a background tint. *Pros:* works for all CVD types, forced-colors and print screenshots, and matches the Word wavy-spelling convention. *Cons:* the visual rhythm is busier than four identical dots, so it needs careful drawing.
- **B: keep identical dotted lines and add a palette option** ("Color-blind safe": orange/blue/black/purple). *Pros:* a minimal design change. *Cons:* users must find the setting first; there is no forced-colors support; it is still one channel.
- **C: icons only (gutter) and no colored underlines** except one neutral style. *Pros:* the cleanest page. *Cons:* the exact characters are lost, which the owner wants.
- **Recommendation:** A as the default, plus B's palette switch in Reading & seeing. Under the reveal, entities use tints only and never underlines (F-C-38).

### O3. Goals and progress

- **A: minimal.** Project word target plus optional deadline, session target, and a ring on the word count. *Pros:* quiet, fits minimalism. *Cons:* no habit support.
- **B: full** (Dabble-like). Deadline with recomputed daily quota and rest days, weekly-day streak, calendar, milestones, sprints. *Pros:* best-in-class motivation. *Cons:* more screens and risk of gamified feel.
- **C: off until asked.** Nothing shows until the user opens Statistics ▸ Goals. *Pros:* zero noise. *Cons:* nobody finds it, which defeats the point.
- **Recommendation:** A visible from day 1 (offered at S01 as optional), with B's deadline math and weekly rhythm inside Statistics ▸ Goals, and sprints in View. No trophies.

### O4. The first five minutes for P1

- **A: empty-page doors** (Just write / Plan first / Tell me your idea). *Pros:* in place, dismissed by typing. *Cons:* one more element on the page.
- **B: sample project on Start.** *Pros:* safe exploration, teaches everything. *Cons:* some will never open it.
- **C: a setup interview** (genre, goal, AI?, how you work). *Pros:* a personalised start. *Cons:* questions before writing is the enemy of a blank-page writer.
- **Recommendation:** A + B. Put C's questions (goal, AI) at natural moments: the goal on S01 as optional, AI after the first session.

### O5. How the AI notices trouble

- **A: local signals with a quiet dot on Ask** (F-C-59). *Pros:* zero tokens until clicked, never interrupts. *Cons:* some will never notice the dot.
- **B: a standing notice** "Stuck? …" after the signal. *Pros:* seen. *Cons:* nagging, Clippy.
- **C: nothing; writers ask.** *Pros:* zero risk. *Cons:* wastes the "attentive" promise.
- **Recommendation:** A. Plus one tip, once, the first time a signal fires: "When Libreto thinks it can help, the Ask button shows a dot".

### O6. Six modes for a beginner

- **A: all six from day 1** (as drawn). *Pros:* consistent, findable. *Cons:* five empty rooms for P1.
- **B: progressive.** Write, Plan and Review first; Research, Story bible and Book appear on first need, with View ▸ "Show all". *Pros:* calmer start. *Cons:* the UI changes under the user, and a Help page cannot assume six.
- **C: all six, but empty modes look disabled-ish** (gray text with "nothing yet" on hover). *Pros:* findable and honest. *Cons:* gray tabs can read as broken.
- **Recommendation:** A with good empty states (F-C-05). Revisit B only if the hallway tests show confusion.

### O7. Passing notices

- **A: fade after 20 s** (as drawn) plus a setting for 1 min / never. *Pros:* clean by default. *Cons:* the default fails WCAG 2.2.1 unless the setting is discoverable.
- **B: never fade; the next notice replaces it**, and it moves to the bell when the user types 50 more words. *Pros:* tied to the user's own pace, accessible. *Cons:* can stay longer than wanted.
- **Recommendation:** B (time measured in the writer's actions, not seconds), plus A's setting.

### O8. Bold and Italic

- **A: label "Italic (emphasis)" and "Bold (strong)"** with the B/I glyphs. *Pros:* everyone finds them, and the semantics survive. *Cons:* the owner's purity.
- **B: Emphasis/Strong with B/I glyphs only.** *Cons:* the screen reader says "Emphasis", which non-technical users don't map to italic.
- **Recommendation:** A.

### O9. Theme model

- **A: one theme** (Light/Sepia/Dark/High contrast) for UI and page. **B: UI theme and page color separate.**
- **Recommendation:** B, with "Follow system" for the UI and a page color with 4 presets. Mark colors are re-tuned per page color and checked at ≥ 3:1.

---

## 4. What d8 screens should show (for this lens)

1. **S-new-1 · Empty first chapter (P1).** "The Blue Lamp" just created, Write, gray "Chapter 1 · title (optional)", and under it three quiet text doors: "Just start writing · Plan first · Tell Libreto your idea". Status bar "0 words · Saved". The Ask button labeled "Ask". A second state in an inset: after 12 words typed, the doors are gone.
2. **S-new-2 · Empty states board.** Five small frames: Plan with 1 card plus its one-line explanation; Clippings (Research) with the drop area; Story bible with "Names appear here as you write"; Review with "Nothing waits for you"; Book with half a page and "Keep writing". Each has a "How does this work?" link.
3. **S-new-3 · Start with sample and goal.** S01 redrawn with the look collapsed to "BL on blue · Change", "Saved in Documents/Libreto · Change", an optional goal line "about 80,000 words by June 1", and on the right, under Recent, "Explore a sample book" and "Bring in a Word manuscript…".
4. **S-new-4 · Word import preview (P2).** A sheet: left, the detected structure ("38 chapters from lines starting with CHAPTER ▾", "112 scenes from # ▾"); center, a preview of chapter 1; right, the counts (italic 2,310 → Italic, 45 comments by Kit Lane and Marta → notes, 41 names found → Story bible?). Then Import.
5. **S-new-5 · First read summary (P2).** After import, the standing card: "Libreto read your book · 41 names [Add all to the Story bible] · 6 words you spell your way [Add to dictionary] · 212 possible typos [Review] · 45 notes from Kit and Marta [Review]". The mode switch shows "Review 99+" in neutral gray.
6. **S-new-6 · Goals and progress.** Statistics ▸ Goals: the book bar 54,300 / 80,000 (68 %), the deadline June 1 with "1,150 words a writing day · 5 days a week", a 5-week calendar strip (filled days, rest days hatched, today outlined), and this week "4 of 5 days". Inset: the status bar word count with its thin ring at 80 % of a 1,000 session goal. Second inset: the Last session card reworded with goal ✓ and "Where was I" (last paragraph quote, 2 open notes, next plan card "Kit finds the ledger").
7. **S-new-7 · Settings ▸ Reading & seeing.** Theme (Light, Sepia, Dark, High contrast, Follow system), page color, page font (Charter, Atkinson Hyperlegible, OpenDyslexic, Lexend), line spacing, page width, "Easier to see marks", "Color-blind-safe mark colors", "Reduce motion", "Messages stay: until I close them", "Open cards on click only", "Read aloud voice", "Interface size: Largest (175 %) / Use system size", with a live sample paragraph showing all four marks.
8. **S-new-8 · Dark and Sepia.** S02 and S15 redrawn in Dark (UI dark, page #1c1d1f) and Sepia (page cream), with all marks re-tuned and contrast values written beside them.
9. **S-new-9 · Marks for everyone.** S03 redrawn under O2-A: red wavy, blue dashed, green faint dotted, amber tint. Next to it, the same row in simulated deuteranopia, protanopia and tritanopia, and in forced-colors (black on white), proving each mark can still be told apart.
10. **S-new-10 · Reveal without underlines.** S10 redrawn: people, places, things and motifs as background tints with a hover glyph, underlines only for marks, and the same frame in deuteranopia.
11. **S-new-11 · 200 % scale.** A 1920 px laptop at 200 % OS scale (960 effective): Write with the chapter list as a wider column, the page measure reduced to keep 65 characters, Ask docked as a right column, no overlap, and the status bar collapsed to Words · Saved · Marks.
12. **S-new-12 · Stuck signal.** Write, 6 minutes idle on a near-empty scene "Station steps". A small dot on the Ask button and nothing else. Second frame: Ask opened, with the top line "Stuck on this scene? [3 directions] [Where was I] [Not now]". Third frame: three one-line directions, each with "Add as a note".
13. **S-new-13 · Screen-reader map.** Not a moment: the window with each region labeled with its role and its announcement ("Mark 3 of 12, suggestion, agreement, was to were"; notice `role=status`; Ask `role=log`), plus the F6 focus order drawn as numbered arrows.
14. **S-new-14 · Sprint.** Focus with a thin time bar at the top (18:40 left of 25:00) and nothing else. End frame: "+412 words in 25 minutes" with Close.
15. **S15 changed.** The Review filters with clear on/off (filled + ✓ vs outline) and "Showing 4 of 12 · Show all"; single neutral counts in the chapter list; cards titled "Suggestion · continuity · Accept · Reject · Edit · Why?"; the fix card with a "Libreto" glyph instead of "You".
16. **S02 changed.** Status bar for a 0-word project, the "name?" neutral mark on "Vega" with card "Looks like a name · Add to the Story bible / It's a typo", and a fix shown only as a faint mark with the card "Fixed for you · Undo".
17. **S07 changed.** The selection bar "B Bold (strong) · I Italic (emphasis) · Style as ▾"; the style dialog "Applies to: whole paragraphs / a few words".
18. **Play mode proof (F-C-107).** One Write frame of a Play project with Tab/Enter element cycling (Scene heading → Action → Character → Dialogue), so S01's "Play" is backed by something.
