# Critique B: Break it (draft 7)

Lens: stress, edge cases and failure states on every screen, before code exists. Material: `docs/design/walkthrough.md` (draft 7), screens S02, S12, S15, S22, S24, S30 inspected as images, spec and requirements grepped. Important context the walkthrough never states: **version 1 ships on Linux only** (spec, "Linux package… Ubuntu 24.04 and Fedora 41"; Windows and macOS after v1). Every key and gesture must be judged against GNOME, KDE, XFCE, IBus and Electron-on-Linux first.

---

## 1. Verdict

1. **Draft 7 has almost no failure states.** Disk full, USB removed, crash, a file edited outside Libreto, the same project open twice, Dropbox conflict copies, AI offline, AI out of budget mid-answer: none is drawn or described. "Saved 19:32" can keep saying that while nothing is being saved. This is the biggest risk, because the product promises to be "safe inside any cloud folder" (R-107).
2. **Stale proposals can overwrite newer text.** No screen says what happens when you click Apply / Take proposed / Take Marta's on text that changed after the proposal was made, or when two proposals overlap. With an AI pass at session start, a Proactive level and readers' copies, this will happen every day.
3. **The keyboard promise is broken on the v1 platform.** Hold-`Alt` and `Alt`+click fight Linux window managers and Electron's menu-bar handling. `Ctrl+.` hits IBus emoji input and is a shifted key on AZERTY. `F8`, `F11` and `Ctrl+PgDn` need Fn on most laptops. `Enter` and `Delete` act as Apply and Dismiss in a Review that is "still editable". Rule 6 allows `Alt`+letter and `Ctrl+Alt`, which are menu mnemonics and AltGr.
4. **Geometry is fixed in pixels and does not hold.** The 1260 px breakpoint leaves 0 px for the gutter badges and the 90 px style-label lane drawn in S12. Zoom 200 % makes the page 1240 px. Interface size, Spanish labels and 4-digit counts overflow the strip at 1000 px. S30 already shows the breadcrumb reduced to "Chapt… › Lena li…".
5. **Language handling is English-only underneath.** Auto-fix turns `"` into “ ” in a Spanish book that needs « ». Was/Now shows spaces as middle dots, the same character as the Catalan *punt volat* (col·legi). Start never asks the book's language. There is no regional dictionary (voseo), no per-passage language, and no handling for names that are common words (Rosa, Blanca, Luz).
6. **Book structure edge cases are undefined.** There is no Prologue/Epilogue (unnumbered chapters), no numbering format, no TOC, headers/footers, widows/orphans, captions or endnotes. "Delete…" and "Move to Discarded" contradict each other. Joining across parts and deleting a selection that spans a chapter heading have no defined result.
7. **Scale breaks the margin model.** Hundreds of notes, 10 on one line, a 2,000-word note or 30 replies cannot all sit "level with their lines" in a margin that "scrolls with the text". Thousands of Done/Unknown items make the Review count meaningless, and 200-chapter breadcrumb menus "do not filter".

---

## 2. Findings

### A. Keys and gestures (v1 = Linux; Spanish and other layouts)

**F-B-01 · blocker · S10, S11, S19 · Hold `Alt` on Linux.** Electron on Linux treats a lone `Alt` press and release as "focus/toggle the menu bar" (and auto-hides it if `autoHideMenuBar`). Draft 7 only says Libreto suppresses this "on Windows", and Windows is not in v1. A held `Alt` is also the start of `Alt+Tab` (GNOME, KDE, XFCE), so every window switch flashes the reveal for a frame. **Fix:** suppress the menu activation on all platforms. Start the reveal only when `Alt` is held **alone** for 500 ms, and cancel it with no paint when any other key arrives or the window loses focus. Make `Ctrl+Shift+A` the documented primary. See Option O1.

**F-B-02 · blocker · S10, S11, S19 · `Alt`+click is taken by window managers.** On XFCE, MATE, Cinnamon and KDE Plasma 5 (still common, e.g. on Debian and Mint), `Alt`+click/drag moves the window, so the peek never opens. GNOME and Plasma 6 use Super, which is why it may look fine in testing. **Fix:** make `Ctrl`+click the peek gesture (Word's "Ctrl+click to follow link" convention), keep right-click ▸ Look up, and keep `Alt`+click as an alias. Note that `Ctrl`+click in text must then not do anything else.

**F-B-03 · major · S02, S03, S15 · `Ctrl+.` opens the mark card.** (a) IBus binds `Ctrl+.` and `Ctrl+;` to emoji entry in several versions and configurations shipped on Ubuntu and Fedora. A known Electron/VS Code pain point is that the key gets swallowed and an underlined "e" appears. (b) On French AZERTY, `.` is `Shift+;`. (c) It breaks rule 6 itself ("no brackets, slashes…": a period is punctuation too). (d) On macOS (v2), `Cmd+.` means Cancel. **Fix:** make `Alt+Enter` the primary (JetBrains' "show fixes" habit; it exists on every layout) and keep `Ctrl+.` as an alias that the Keys tab flags when the layout or IBus takes it.

**F-B-04 · major · S02, S13, S27, S32 · F-keys on laptops.** `F8`/`Shift+F8` (next/previous mark), `F11` (Focus), `F6` (columns) and `F1` are media/brightness keys on most laptops and need `Fn`. On Macs (v2), `F11` shows the desktop and `F8` is play/pause. **Fix:** every F-key command gets a non-F alias: next/previous mark `Alt+↓`/`Alt+↑` (Linux/Windows), Focus `Ctrl+Shift+F`, help stays on the Help menu. The ⌨ list shows both keys. An optional F-key layer is fine as long as nothing depends on it.

**F-B-05 · major · S32 · `Ctrl+Page Down`/`Up` (next/previous chapter).** Compact laptop keyboards and many 60–75 % keyboards have no Page keys without `Fn`. **Fix:** add an alias (`Ctrl+Alt` is unsafe because of GNOME workspaces and AltGr on Windows). Use `Alt+Shift` only if the layout switcher does not own it (see F-B-08), or else offer "Next chapter" in Ask and as ‹ › on the breadcrumb.

**F-B-06 · major · S34, S15 · `Enter` = Apply and `Delete` = Dismiss inside an editable Review.** Review is "the same text, still editable". If the caret is in the text when the writer presses Enter to Apply, the paragraph splits. If they press Delete, a character disappears, and their "Dismiss" went into the book. **Fix:** walk keys work only while focus is on the card, which gets a visible focus ring. Clicking into the text pauses the walk, and the header reads "Editing · F8/Alt+↓ to continue". Draw this state.

**F-B-07 · major · S09 vs S34 · `Tab` has two meanings.** In Ask, `Tab` moves between buttons (focus traversal); in Review all, `Tab` = "Skip for now". This breaks keyboard accessibility (no way to Tab to Stop or Edit) and contradicts itself. **Fix:** Skip = `Space` or `Alt+→`. `Tab` is always focus traversal.

**F-B-08 · major · rule 6, S26 Keys · Rule 6 allows `Alt`+letter and `Ctrl+Alt`.**
- `Alt`+letter is a menu mnemonic on Linux and Windows. It also differs per UI language: in Spanish, *Insertar* and *Informes* both want `I`, and *Archivo* takes `A`.
- `Ctrl+Alt`+key is AltGr on Windows (v2): `Ctrl+Alt+E` types € on a Spanish layout, and `Ctrl+Alt+2` types @ on es/latam.
- On a Mac, Option+letter types characters (`Option+N` is the ñ dead key that Spanish writers on US Macs rely on).
- `Alt+Shift` and `Ctrl+Shift` (released alone) switch keyboard layouts on Windows and on many Linux setups, which bilingual es/ca and es/en writers use all day.

**Fix:** rewrite rule 6 as a deny-list the Keys recorder enforces: no `Ctrl+Alt`, no `Alt`+letter, no `Alt+Shift`, no `Ctrl+Shift+U` (IBus Unicode), no `Ctrl+Shift+E` (IBus emoji), no `Ctrl+Space`/`Super+Space` (IME switch), no `Ctrl+Alt+arrows` (GNOME workspaces), no `Alt+F1…F10` (GNOME/KDE window actions), no `F10` (GTK menu). The recorder says why it refuses ("taken by the input method on this system").

**F-B-09 · major · d4 log vs d7 · Stale or contradictory keys.** The note key is `Ctrl+Shift+M` (d4) vs `Ctrl+Shift+N` (d7). `Alt+1…5` switches modes but there are six modes. `Ctrl+Shift+R` (right column, d4) is also Electron's default "force reload" accelerator: if the default menu roles stay, it reloads the window and kills unsaved state, and the same goes for `Ctrl+R`. **Fix:** one key table in the spec as the single source. Remove every default Electron accelerator (reload, toggle devtools `Ctrl+Shift+I`, zoom) and rebind them deliberately.

**F-B-10 · major · modes · `Alt+1…6` with hold-Alt.** A slow `Alt`…`3` flashes the reveal before the switch. On AZERTY, digits are shifted, and Electron accelerators match characters, so `Alt+1` never fires there. **Fix:** `Ctrl+1…6` (the browser/VS Code tab convention), matched on the physical key code (`Digit1`) so AZERTY works. The same applies to `Ctrl+0`.

**F-B-11 · minor · zoom · `Ctrl++`.** On US layouts `+` is `Shift+=`; on Spanish and German it is unshifted. **Fix:** bind `Ctrl+=`, `Ctrl++`, `Ctrl+Numpad+` and `Ctrl+-`, `Ctrl+Numpad-` all at once.

**F-B-12 · major · S05 · `Ctrl+Shift+↑/↓` moves rows.** In text, the same key is the standard "extend selection to paragraph start/end" (Word, LibreOffice, GTK). If focus is ambiguous, a writer selecting a paragraph moves a scene instead. On macOS (v2), `Ctrl+↑` is Mission Control. **Fix:** active only while the list has focus, with a visible focus ring on the row. In text the key keeps its standard meaning.

**F-B-13 · minor · S05, S14 · `Ctrl+Enter` inside a note card.** The universal habit is "send/save the note". If it inserts a chapter at the book's cursor instead, the writer gets a surprise chapter. **Fix:** inside a card or the Ask box, `Ctrl+Enter` submits. It inserts a chapter only when the caret is in the manuscript.

**F-B-14 · minor · S02 · Dead keys and composition.** Spanish ´ ¨ and Catalan · are typed as dead keys or compositions, and the Compose key on Linux works the same way. If auto-fix or the red underline runs on a word mid-composition, the half-typed state gets "fixed". **Fix:** in the spec, no fix, mark or shortcut fires during an IME/dead-key composition.

**F-B-15 · minor · S02, S03 · `Delete` = Ignore here / Dismiss.** Mac laptops (v2) have no forward Delete key. **Fix:** use Backspace as an alias in cards.

### B. Window, zoom, interface size, long names

**F-B-16 · blocker · S12, S30 · The 1260 px breakpoint ignores the gutter and the label lane.** 620 + 320 + 320 = 1260 leaves zero pixels for the gutter badges (about 40 px, right of the page) and the style labels ("Thought", about 90 px, left of the page), both drawn in S12 at 1440. At 1260–1400, the labels and badges either sit under the columns or the page moves, which breaks rule 1. **Fix:** compute the breakpoints from measured parts: page + 2 × column + label lane + gutter + scrollbar, about 1400 px at 100 %. See Option O4.

**F-B-17 · blocker · S12, S29 (zoom 50–200 %) · Zoom scales the page beyond the window.** At 200 % a 620 px page is 1240 px. In a 1440 window no column fits, and the "page stays put" rule silently breaks; on a 1280 window the page scrolls sideways. At 50 % the text is about 9 px and the Review cards (which do not zoom) are taller than ten lines of text, so no card can be level with its line. **Fix:** zoom changes the text size. The page width is a measure in characters (about 60–70) clamped to the available width. Below 80 % zoom, the Review margin switches to a compact list (see F-B-55).

**F-B-18 · major · S12, S30 · Interface size × columns fixed at 320 px.** At an Interface size of 150 %, a 320 px column holds about 22 characters: chapter names wrap to three lines and the four Review counters don't fit. At 75 % the columns are needlessly wide. **Fix:** columns are 320 × interface scale, and breakpoints follow (F-B-16). Say this in S30.

**F-B-19 · major · S02, S30 · The strip overflows.** At 1000 px with the Spanish UI (*Escribir · Planificar · Investigación · Códice · Revisión 12 · Libro*, about 30 % longer than English) or an Interface size of 125 %, the left icons (about 180 px), the mode switch (about 520 px) and the right icons (about 120 px) take 820–1025 px, and the breadcrumb gets 0. S30 already shows "Chapt… › Lena li…". **Fix (pick one, see O8):** collapse the mode switch to "Write ▾" below a width; drop Undo/Redo from the strip (they are in the Edit menu and on keys; this also cuts noise); truncate the breadcrumb by priority (scene first, then chapter title, never the chapter number).

**F-B-20 · major · S02, S29 · The status bar overflows.** At 1000 px in Spanish, the bar holds "Pensamiento ▾ · 86 240 palabras ▾ · p. 146 de 248 ▾ · Guardado 19:32 · Libro completo ▾ · Mostrar ▾ · Historial ▾ · zoom slider · ⌨", which does not fit. **Fix:** define a priority order: Saved/error state, words, style chip, then the rest folding into a "⋯" menu. The zoom slider becomes "100 % ▾" below 1280.

**F-B-21 · major · mode switch · Count width.** "Review 9" → "Review 12" → "Review 1,284" changes the control's width, so the six positions shift under the mouse, and in Spanish the number is "1284" or "1.284" (locale). **Fix:** cap at "99+", reserve the width, and format numbers through the locale.

**F-B-22 · major · S05, S12 · Long chapter names in the list.** S12 already shows a three-line name ("A note under the office door, left by someone who knew…") with its number "3" **vertically centered on the second line**, not on the first. A 200-character name becomes six lines. **Fix:** clamp to two lines with an ellipsis and the full name on hover. Align the number and the counts to the first line's baseline.

**F-B-23 · minor · S05, S12 · Part names in forced small caps with letter-spacing.** "PART ONE: WINTER IN THE HARBOR DISTRICT" already spans the whole column. A long part name in uppercase with tracking runs about 30 % wider and is harder to read. German ß uppercases to SS, and Turkish i/İ casing is wrong. **Fix:** never force-uppercase user text. Show parts in small semibold, mixed case, clamped to two lines.

**F-B-24 · minor · S11 · Reference panel head.** "María de las Mercedes Fernández-Villaverde y Montalbán" at the large size is three lines, which pushes the summary below the fold. **Fix:** clamp to two lines with the full name on hover. Show aliases under it in small text.

**F-B-25 · major · S03, S15, S22 · Reader identity by initial.** Marta and Miguel are both **M**, and two readers both called Marta (Marta G., Marta R.) merge in "To whom" autocomplete. **Fix:** two-letter initials (MA, MI), the full name in the card header, clamped to one line with an ellipsis. Readers are distinct records in Project settings ▸ People, and the autocomplete shows the last-sent date to tell them apart.

**F-B-26 · minor · S15 filter chips · Long reader names.** "Marta Fernández-Villaverde" as a chip in a 320 px row wraps the row. **Fix:** chips show the first name and an initial; the full name is in the tooltip. "People ▾" appears from the third person or when the row would wrap, whichever comes first.

**F-B-27 · major · S33, S05 · Notices with long names.** "Moved 'Vega asks about Kit' after chapter 8 · Kit finds the ledger only in chapter 9" plus three buttons is already two lines at the page width. Two long scene names make it four. **Fix:** clamp names in notices to about 32 characters in quotes, the message to two lines, and put the buttons on their own row.

**F-B-28 · major · S33 · The notice covers the caret line.** Notices sit at the bottom center of the page, and writers type on the last visible line. A 20-second notice hides the sentence being written. **Fix:** while a notice shows, the page keeps the caret above it (dynamic bottom padding with typewriter scrolling), or notices sit in the status-bar band, not over the text.

**F-B-29 · minor · S12, S15 · The Ask button covers margin content.** In S15 the round button sits over the last margin card (the Reply/Resolve row of "Note · Marta"). **Fix:** the margin and the panel get bottom padding equal to the button plus 16 px. In Review, the button moves into the status bar band.

**F-B-30 · minor · window title · Duplicate titles.** "The Blue Lamp — Libreto" is the same for two projects with that title, and it carries no error state. **Fix:** add the folder in parentheses only when titles collide, and a "●" or "not saved" marker when saving fails (F-B-61).

**F-B-31 · major · S30 · Below 1000 px the column covers the page edge.** The column covers about the first 20 characters of every line, and the caret can be under it. **Fix:** the overlay closes as soon as the writer types in the page, like a drawer, or the page shifts. Never type under an overlay.

**F-B-32 · minor · S30 · 2560 px and 4K at 100 % scaling.** The columns sit at the window edges, about 650 px away from the text on each side, so the eye travels a long way for every glance at the list. **Fix:** above about 1900 px, columns hug the page (with a 48 px gap) and the outer space stays empty. Option O4.

**F-B-33 · minor · portrait monitor (1080 × 1920) · The board and Review in one-column-at-a-time mode.** In Review, the filters live in the left column and the cards in the right, but only one column fits, so you choose between filtering and seeing the cards. **Fix:** move the Review filters to the top of the margin, under "Review all · Add notes from a file". The left column in Review then becomes optional.

**F-B-34 · minor · S09 · The movable Ask panel goes off-screen.** If the window shrinks or a monitor is disconnected, the panel stays outside the window. **Fix:** clamp it to the window on every resize and remember its position per window-size class.

**F-B-35 · minor · S20 · The Find box "never over the text".** Below the breakpoint, the margin it sits in does not exist. **Fix:** say that below the breakpoint Find sits over the right column; if the column is closed, it goes over the strip's right end.

### C. Long words, typography inside cards

**F-B-36 · major · S02, S03, S09 · A long word without spaces.** A URL or "Donaudampfschifffahrtsgesellschaftskapitän" overflows the 620 px page at Largest size, a 320 px card, the Was/Now rows, the before/after block in Ask and the two-column compare (about 290 px per side). **Fix:** use `overflow-wrap: anywhere` in all UI surfaces, and in the page break URLs after `/ . - ?`. Export uses language hyphenation plus URL break rules. Draw it.

**F-B-37 · blocker (for Catalan) · S03 · Middle dot for spaces vs the Catalan *punt volat*.** Was/Now shows spaces as `·`. Catalan writes *col·legi*, *il·lusió*, so a real Catalan character is indistinguishable from a shown space. **Fix:** show spaces as a tinted open box (␣) or a dot on a colored background chip, never as a bare `·`.

**F-B-38 · major · S03 · Invisible differences.** ' vs ’, - vs – vs —, a space vs a no-break space vs a thin space, a tab vs a space. "Was don't / Now don’t" looks identical at card size. **Fix:** when the change is only in look-alike characters, the card says it in words ("straight ' → curly ’", "space → no-break space") under the rows.

**F-B-39 · minor · S03 · Was/Now for a structural change.** A paragraph split, a merge, a scene break or a heading has no text to tint. **Fix:** show ¶ and ⁂ glyphs in the rows, with a word ("splits the paragraph here").

**F-B-40 · minor · S15 · A Was/Now of a 200-word paragraph in a margin card.** The card is taller than the window. **Fix:** clamp to 6 lines with "[…]" as in Ask, and "Show the whole paragraph".

### D. Marks, notes, anchors at density

**F-B-41 · blocker · S02, S03, S15 · Four kinds on one word.** The word "letters" is red (unknown), blue (agreement), has an amber note and Marta's change. Precedence shows red only, and "the card lists the others", but the red card's buttons are candidate rows, Ignore and Add. Where are Apply/Dismiss for the blue one, Reply for the note, and Take Marta's? Which does `Enter` press? **Fix:** a **stack card** with one section per mark in precedence order, each with its own buttons. `Enter` acts on the focused section and `↓` moves between sections. The header says "3 on this word". Draw it (d8 list).

**F-B-42 · major · S03 vs S15 · Amber underline: legend-only or not?** S03 says amber appears "only in this legend; in the text a note is its badge", but S15 draws dotted amber under "the lemon on her hands" and "the awning of the pawnshop". The precedence list (red > blue > green) does not include amber. **Fix:** decide. Recommendation: a note's anchor is a light amber **tint** shown only when the note is open or hovered, never an underline, so it never competes with the underline precedence.

**F-B-43 · major · S14, S15 · Overlapping and nested anchors.** Note A is on "the lemon on her hands", note B on "her hands. 'Go home", and an AI proposal rewrites the whole sentence. Which tint wins on hover, which card opens on click, and what happens to A and B if the AI proposal is applied? **Fix:** (1) tints blend by stacking with a 1 px rule per anchor at the ends; a click on overlapped text opens the stack card. (2) **Applying a change that covers another anchor marks that card "Out of date"** (F-B-71) rather than silently re-anchoring. (3) A note whose anchor was rewritten re-anchors to the new sentence and says "the words changed".

**F-B-44 · major · S14 · A note on text later deleted (Write, your own notes).** Draft 7 covers only readers' comments (S22: "nearest place"). **Fix:** one rule for all notes. When the whole anchor is deleted, the note stays as an orphan at the deletion point with its original words quoted and struck through, and the badge is hollow. Undo restores the anchor. If the text went to Discarded, the note goes with it.

**F-B-45 · major · S14 · A note across chapters.** In the whole-book view, a selection can span the end of chapter 7 and the start of chapter 8. Marks live in per-chapter sidecars, so where does the note go? **Fix:** clamp the anchor to the chapter where the selection starts, and say so in the card ("anchored to the end of chapter 7").

**F-B-46 · minor · S14 · Cut/paste with notes.** Does a note travel when its text is cut and pasted to chapter 12? Does a copy duplicate it? **Fix:** cut+paste moves notes (same project), copy does not, and pasting into another project drops them with a notice.

**F-B-47 · major · S14, S15 · Ten notes on one line.** Write folds them into one bubble with "10". Review: one gray stack, but **ten cards for one line in a margin that "scrolls with the text" so lines "never slant"**. Only one card can be level; the rest push the following cards' lines out of place for screens. **Fix:** Option O5. Recommended: the margin shows **one card per line**, which is the stack with "10 notes · Marta 6, You 3, AI 1" and the first card expanded. Cards that cannot be level are shifted down, and their connector may slant within 40 px. Beyond that a "+3 below" pill appears.

**F-B-48 · major · S14, S15 · A 2,000-word note and 30 replies.** The note card in Write "opens beside the line" and becomes taller than the window, and editing a long note in a floating card is awful. **Fix:** clamp to 8 lines with "Read all"; replies fold under "28 earlier replies"; a note over about 150 words gets "Open in the panel", which shows it in the right column with full editing. Set a hard limit for the margin and none for the note.

**F-B-49 · major · S15 · Hundreds of notes on a chapter (an editor's copy with 400 comments).** Review all walks them one at a time, and nothing bulk-resolves. **Fix:** bulk actions on the filter result: "Resolve all 128 shown", "Apply all 37 shown of this kind", one confirmation, one Undo. Group AI/rule findings by kind ("Repeated words · 46") instead of 46 cards.

**F-B-50 · major · S02, S15 · What the Review count counts.** If Unknown (red) words and Done (green) fixes are cards in Review, a draft with fantasy names and months of auto-fixes shows "Review 4,812". The count stops meaning "something waits for you" (rule 3). **Fix:** the count = pending + unresolved notes only. Done fixes become kept automatically at the end of the session (still in History). Unknown words are fixed by typing (as S03 itself says) and get only a filter, not a count. "Red count" goes in a tooltip.

**F-B-51 · major · S02 · Codex names show as red.** Vega, Kit and Lena are red until added to the dictionary, which on a fantasy novel means hundreds of red marks in the first hour. **Fix:** every Codex name and alias is known automatically. An unknown capitalized word seen 3+ times is proposed as a Codex candidate (one card, "Ysolde · 14 times"), not marked red each time.

**F-B-52 · minor · S12 vs S05 · Badges in the Write list.** S05 says "in Write the list carries no badges", but S12 (Write) shows "2 💬" and "1 💬" on rows. **Fix:** decide (recommend none in Write) and redraw S12.

**F-B-53 · minor · S15 · Four counters per row.** "3💬 1⊖ 1✓ 1?" next to a long title at 320 px; three-digit counts don't fit. **Fix:** one number (pending + notes) and a tiny 4-color stacked bar, with the breakdown in a tooltip.

**F-B-54 · minor · S14 · The hover "+" for a note collides with the bubble already on that line.** **Fix:** on a line with a bubble, the "+" sits above the bubble, or the bubble's menu holds "Add another".

**F-B-55 · major · S15 · Review at a small zoom or in a short window.** Cards are taller than the text they belong to, so the "level with its line" model collapses. **Fix:** when card density exceeds a threshold, the margin becomes a list (line number, initial, first words) and clicking it expands the card.

### E. Structure: parts, chapters, scenes, Discarded

**F-B-56 · blocker · S05, S31 · Delete… vs Move to Discarded.** Chapter and scene menus have both, yet "Delete… from [Discarded] is the only real deletion". So what does Delete… on a chapter do: delete for real (contradicting that sentence) or discard (a duplicate command)? **Fix:** one command. Delete… on a row moves it to Discarded with a passing notice and Undo, and only Discarded has "Delete for good…".

**F-B-57 · major · S05 · Discarding a chapter "as scenes".** A chapter with 8 scenes, a heading and notes: does it become 8 Discarded scenes or 1? What happens to the heading text and to "Put back" when the original neighbors are gone? **Fix:** Discarded keeps the **unit** you discarded (a chapter stays a chapter, shown with a chapter icon and its scenes indented). Put back returns it after the row it used to follow; if that row is gone, it goes to the end with a notice.

**F-B-58 · major · S05 · Joining across parts.** "Join with the previous chapter" on the first chapter of Part Two pulls its text into the last chapter of Part One. If Part Two had only that chapter, Part Two is now an empty heading. Join on the first scene of a chapter ("Join with the previous scene") would cross chapters. **Fix:** the join stays within its part. Across a part boundary the menu shows "Join with the previous chapter (moves it out of Part Two)" with a notice; an empty part is removed with Undo. "Join with the previous scene" is disabled on a chapter's first scene, or reads "Join with chapter 6's last scene".

**F-B-59 · major · S05, S06 · The joined chapter's heading.** The text joins, but its title, for instance "Closing time", is lost, and notes on the heading have nowhere to go. **Fix:** the heading becomes the name of the scene that starts at the join, and a scene break is inserted there. The notice says so.

**F-B-60 · blocker · S32, S07 · Deleting a selection across a chapter heading in the whole-book view.** Select from the middle of chapter 7 to the middle of chapter 9 and press Delete: chapter 8 vanishes entirely (2,300 words, its file, its notes, its Plan card labels) and 7 and 9 merge. The list asks "in words and pages" before a delete, but the text does not. **Fix:** allow it (it is text editing) with a standing notice "Deleted chapter 8 'Closing time' (2,300 words) and joined 7 and 9 · Undo · Open in Discarded". The removed chapter goes to Discarded.

**F-B-61 · major · S05 · A part between two scenes.** The + between scene rows "offers Scene, Chapter, Part", but "a part always begins where a chapter begins". **Fix:** between scenes, the + offers "Scene" and "Chapter here (splits chapter 7)". "Part here" also says "(splits chapter 7)" and does both, so it is never an impossible choice.

**F-B-62 · major · S05 · A scene dragged above the first chapter, or into front matter.** Draft 7 does not say whether that is refused, makes a new chapter, or makes front matter. **Fix:** drop above chapter 1 = "New unnumbered chapter (Prologue?)" with a ghost row preview. Front matter accepts only front-matter items. Dragging a chapter there asks "Make it a front-matter page (unnumbered, no scenes)?"

**F-B-63 · major · S05 · Deleting the only chapter.** Is the list empty, and what does Write show? **Fix:** allowed. Write shows the empty state "No chapters · Start writing" and typing creates Chapter 1 (draw it).

**F-B-64 · blocker · S02, S24 · No unnumbered chapters.** A writer types "Prologue" as chapter 1's title. Libreto prints "1 · Prologue" and the next chapter is "2". Epilogue, Interlude and the Spanish *Prólogo*/*Interludio* or Catalan *Pròleg* hit the same problem. **Fix:** right-click ▸ "Numbered / Not numbered". Libreto proposes "not numbered" (blue) when the title matches a known word in the project's language. The list shows no number for those rows.

**F-B-65 · major · S24 · Numbering format.** Book's Chapter heading look has "number and title" but no format: 7, Seven, VII, "Chapter Seven", "Capítulo siete"; restart per part; continuous. The list's numbers must match the printed ones. **Fix:** Book ▸ Chapter numbers ▸ format (1 · One · I · Chapter One), restart per part (on/off), and the language follows the project. The list shows the printed label ("VII").

**F-B-66 · major · S05 · "Typing 'Chapter 8' on its own line still works".** Is this automatic (against rule 5) or proposed? It is English-only (*Capítulo 8*, *Capítol VIII*, *CAPÍTULO OCHO*), and it catches a line of dialogue in a novel about writing. **Fix:** always a blue proposal, with language-aware patterns from the project language.

**F-B-67 · major · S06 · Scene-break auto-conversion.** A single `-` or `*` line becomes a break. In a play or poem, or a list typed with "-", that is wrong. On disk, a `---` line under a paragraph is a CommonMark **setext heading**, and `---` at the top of a file is YAML front matter. **Fix:** convert only 3+ symbols. A single symbol is proposed in blue. The serializer always writes `***` surrounded by blank lines and escapes a literal `---`.

**F-B-68 · minor · S06 · Unnamed scenes read as their first words.** If a scene starts with a picture, a footnote, a 60-character URL or "—¿Quién…", or is empty, its row is blank or garbage. **Fix:** the fallback is "Untitled scene" in italics, skipping leading punctuation and dashes; an empty scene reads "Empty scene".

**F-B-69 · minor · S05, S32 · The 200-chapter breadcrumb menu "does not filter".** Each breadcrumb part is "a menu of its siblings": 200 items with no filter, against S31's "menus do not filter". **Fix:** past 20 items, breadcrumb menus become palettes with a filter box (the rule becomes "short menus don't filter; long lists are palettes").

**F-B-70 · major · S05, S16, S32 · A huge book (200 chapters, 2,000 scenes, 500k words).** The whole-book view is the default, so a 500k-word single editable surface is a known Electron/contenteditable performance cliff. The scrollbar becomes meaningless (1 px ≈ 500 words). **Fix:** spec budgets (open < 3 s, keystroke < 16 ms at 500k words, Find < 1 s, Book layout < 10 s for 1,000 pages) and a virtualized per-chapter rendering. A **scrollbar with chapter ticks** and the chapter name shown while dragging. List: "Collapse all / Expand all", parts collapsible, type-ahead.

### F. Stale proposals, AI failure states

**F-B-71 · blocker · S09, S15, S22, S34 · A proposal whose text changed meanwhile.** The AI proposes for ch. 7 ¶4, the writer edits ¶4, then clicks Take proposed. Or an AI pass from the session start proposes on paragraphs edited since. Or Marta's change is on a paragraph rewritten by an applied AI proposal. **Fix:** every proposal stores the exact text it was made against. When the current text differs: the card turns gray, titled "Out of date · the text changed since", with **Show what changed**, **Ask again** (AI) or **Compare** (reader), and Dismiss. **There is no Apply.** Rebasing applies only when the changed range is untouched. Draw it.

**F-B-72 · major · S09 · AI offline.** The question row is preselected, `Enter` asks, and nothing happens, or a spinner appears (the design says "nothing spins"). **Fix:** the Ask button gets a fourth state (connected but unreachable: a small slash). The bottom row reads "Offline · the question waits and is sent when you're back" (or "Copy question"), and `Enter` falls through to the first result.

**F-B-73 · blocker · S09, S25 · Cut off mid-proposal** (network drop, rate limit, budget reached mid-stream). A half-streamed before/after block with "Take proposed" would apply half a rewrite. **Fix:** the proposal buttons appear only when the proposal is complete and validated (it parses, and the Was matches). Otherwise: "The answer was cut off (rate limit · budget · network) · Retry · Keep what came as a note".

**F-B-74 · major · S18, S25 · A rate limit or budget hit during the session-start pass over 200 chapters.** What happens to the half-read book and what is recorded? **Fix:** the pass is resumable by chapter. Standing notice: "AI read 42 of 200 changed chapters · paused (limit) · Continue tomorrow / Raise the limit". The Codex marks which entries were read by the AI.

**F-B-75 · major · S25 · The budget stop during a writer's own request.** "The AI stops at the limit and says so" — where? **Fix:** on the request itself, in the conversation: "Stopped: this month's limit (€10) · Raise it · Ask anyway once". It is never silent.

**F-B-76 · major · S22 · "Merge for me" or "Take Marta's" after you changed the paragraph since sending.** S22 shows "changed since sending", but the two-column view shows yours vs hers. The writer's own post-send edits appear as differences and can be lost by "Take Marta's". **Fix:** compute a three-way diff from the "Sent to Marta" snapshot. "Take Marta's" applies only **her** edits onto your current text. Your post-send changes are tinted differently ("yours, since Nov 7") in the left column.

**F-B-77 · minor · S22 vs S09 · Button order.** On the page: Keep mine, Take Marta's. In the margin card: **Take Marta's, Keep mine**. S09's rule is Keep mine first. **Fix:** the same order everywhere.

**F-B-78 · major · S21, S22 · The Word round trip breaks the ids.** The reader edits without Track Changes, pastes paragraphs from another file, or round-trips through Google Docs, which strips the hidden ids. Two copies come from Marta the same day, and "(1).docx" duplicates appear. **Fix:** fall back to text alignment when ids are missing, and say so ("matched 212 of 230 paragraphs by text · 18 unmatched → list"). A second import on the same date is labeled "Marta · Nov 7 (2)". Untracked edits arrive as pending changes, not as silent replacements.

**F-B-79 · minor · S16 · Pending Plan moves when the scene is edited, deleted or moved in the list from another place** (the left column of Write is reachable via `Back`). **Fix:** moves are validated at Apply. Invalid ones show "can't apply: scene deleted".

### G. Disk, files, sync, crashes, two windows

**F-B-80 · blocker · status bar · Disk full, or the USB stick pulled.** Autosave fails and "Saved 19:32" keeps showing a reassuring stale time. **Fix:** the status item turns red, "Not saved since 19:32", plus a standing notice: "Can't save to /media/USB/The Blue Lamp (not reachable / disk full) · your words are kept in a safe copy · Save a copy elsewhere…". Writing continues into a journal in the app's data folder and is flushed when the folder returns. Big actions (Plan Apply, Rename everywhere, Bring back this version) are refused while their snapshot cannot be written.

**F-B-81 · blocker · Start, Open · The same project open twice** (two windows, or two computers through Dropbox). **Fix:** a lock file with host, process and time. The second open shows "The Blue Lamp is open on *laptop-B* since 18:02 · Open read-only · Open anyway (the other one becomes read-only)". A stale lock after a crash is detected by a dead process or a time-out.

**F-B-82 · blocker · on disk · A file changed outside Libreto** (Obsidian, git pull, a sync bringing another computer's edit). Markdown is "readable without Libreto", which invites exactly this, and sidecar anchors then drift. **Fix:** a file watcher. If the chapter is not dirty here: reload silently, re-anchor marks by content, and show a passing notice "Chapter 7 changed outside Libreto · 2 notes could not be placed → list". If it is dirty in both places: a standing notice opens the two-column compare (yours vs the file's) with Keep mine / Take the file's per paragraph.

**F-B-83 · blocker · cloud folders · Conflict copies.** Dropbox writes "07 Lena's warning (laptop-B's conflicted copy 2026-11-18).md", Google Drive adds " (1)", OneDrive "-laptop-B", Syncthing ".sync-conflict-…". Libreto must never show them as new chapters or silently ignore them. **Fix:** detect the known patterns and make one standing notice per conflict, "A second version of chapter 7 appeared (from laptop-B, 18:02) · Compare", using the same two-column view. Resolving it deletes the copy.

**F-B-84 · major · on disk · Chapter file names follow position or title.** Renumbering or renaming then renames dozens of files, each of which is delete+create for sync clients, which multiplies conflicts and breaks git history. **Fix:** Option O6 (stable ids in file names).

**F-B-85 · major · S23 · Snapshot volume.** A snapshot every ten minutes of a 500k-word book is about 3 MB × dozens a day inside a cloud folder: quota and upload churn, and "disk full" sooner. **Fix:** content-addressed per-chapter storage (unchanged chapters are not copied), a retention policy (all from today, hourly for a week, daily after), and a size line in History.

**F-B-86 · major · crash recovery · Draft 7 is silent on it.** **Fix:** on reopen after a crash, a standing notice: "Libreto closed unexpectedly at 19:32 · all your words are here" (or "43 words typed after the last save were recovered · Show"). An interrupted multi-file action (Plan Apply, Rename everywhere) is finished or rolled back atomically, and the notice says which. The Review all position and an open conversation come back.

**F-B-87 · major · Start · Project title vs file system.** "Who? / What: A Novel" contains `/ : ?`, which are illegal on exFAT USB sticks and on Windows, and troublesome in Dropbox. Two projects named the same in one folder collide. **Fix:** show the cleaned folder name live in the gray line (d5 had "cleaned as you type"; keep it). Add "(2)" on a collision. Keep long paths middle-truncated with a tooltip.

**F-B-88 · minor · Settings, two projects in two windows · Styles live in Settings, shared by every project.** Editing "Letter" in one window changes the open book in the other window, and deleting it orphans `{.letter}` in every project. **Fix:** Option O7.

### H. Undo across modes

**F-B-89 · blocker · S33 · "Undo is one list" across modes.** In Research, the writer edits a topic and presses `Ctrl+Z`. If the latest stack entry is a manuscript fix, Undo "scrolls to what it undoes", which means switching to Write and changing the book while they were in a topic. The same happens for a Codex alias edit, a Book margin change, or the Ask input box. **Fix:** Option O3. Recommended: one stack **per surface** (manuscript, each topic, Codex, Book layout, text fields). History is the global record. `Ctrl+Z` never leaves the current mode; when the current surface has nothing to undo, it shows "Nothing to undo here · last change in Write: 'scene break removed' · Go there".

**F-B-90 · major · S33 · Undo after restart.** The bell keeps "the day's notices with their Undo". After a restart, is the stack persisted? If not, the bell's Undo buttons are dead. **Fix:** persist the stack (per surface) for the day, or turn old Undos into "Bring back this version" links into History.

**F-B-91 · minor · S33 · Undo of a multi-place action** (Replace all 27 hits, Rename everywhere, Review all as one step). "Undo shows its place", but there are 27 places. **Fix:** the label "Undo: replaced 27 in 12 chapters" with a list in the notice, and it scrolls to the first.

### I. Languages and text conventions

**F-B-92 · blocker · S02 · Auto-fix rules are English.** "Straight quotes to curly" is "one possible answer" only in English. Spanish and Catalan use « » primary, then “ ”, then ‘ ’; German uses „ “; French uses « » with thin no-break spaces. "A missing apostrophe" is English. "Space before a comma" is fine, but French requires a space before ; : ! ?. **Fix:** Project settings ▸ Language and typography: language (with region), quote style (default from language), dialogue dash (Spanish raya —), auto-fixes on/off each. Auto-fixes come from that, not hard-coded.

**F-B-93 · major · S01 · Start never asks the book's language** (the API has `project.create(type, title, language)`). A Spanish UI user writing in English, or an English UI user writing in Catalan, gets the wrong dictionary and wrong quotes from the first keystroke. **Fix:** a "Language" field on Start, defaulting to the UI language, with region (es-ES, es-AR, es-MX, ca, ca-valencia).

**F-B-94 · major · S02 · Regional dictionaries and dialect.** In es-ES, voseo ("vos tenés") is red, and Andalusian or rural dialogue ("comío", "pa'que", "naide") is auto-"fixed" when it is one slip away from a word ("comío" → "comió"), which changes the voice the writer chose. **Fix:** regional dictionaries. Auto-fix is off inside dialogue by default (or a "Voice" toggle per character in the Codex). A fix undone once is never applied to that word in the project (draft 7 says "not proposed again"; make it explicit for that word, not that instance).

**F-B-95 · major · S07 · Mixed languages.** A Spanish novel with English dialogue is all red. **Fix:** the "Foreign" style carries a language (Style as ▸ Foreign ▸ English). Libreto proposes (blue) a language for a paragraph it detects as another language. The dictionary follows the span.

**F-B-96 · minor · S07 · RTL quotes** (an Arabic or Hebrew line inside Spanish text). Underline overlays and Was/Now ranges computed in logical order break visually. **Fix:** spec requirement: bidi isolation for language spans, marks drawn from the rendered ranges, and the cursor follows visual order. Test with one fixture.

**F-B-97 · major · S18, S20 · Names that are words.** In Spanish, Rosa (pink), Blanca (white), Luz, Paz, Pilar and Dolores; in English, "Kit" vs "kit" and "Lamp". The index inflates mentions, and "Rename everywhere" changes "una blusa rosa" when renaming Rosa → Elena. **Fix:** Rename everywhere uses the same reviewed list as Replace all (checkbox per hit, case-sensitive by default, lowercase hits unchecked). An entry can be marked "also a common word" so lowercase is never counted.

**F-B-98 · minor · S18 · Elisions and possessives.** Catalan "d'Elena", "l'Anna", Spanish "del", English "Lena's". The index must split elisions, or the counts and renames miss them. **Fix:** a spec line with per-language tokenization.

**F-B-99 · minor · locale formatting.** "2,418 words", "Nov 7", "18:32", "p. 146 of 248" are hard-coded English formats. In Spanish, "86 240 palabras" (no separator for 4 digits under RAE rules, a space from 5), "7 nov.". Snapshot names stored as English strings stay English after a UI language switch. **Fix:** all numbers and dates through Intl, and snapshot names stored as data (kind, reader, date) and rendered in the current language.

### J. Styles and typefaces

**F-B-100 · major · S07 · Two styles that render identically.** Emphasis and Thought are both serif italic; Letter and Plain may differ only in indent. On the page they are indistinguishable; only the status chip at the caret tells. Under Reveal, only paragraph styles get a margin label, so text (span) styles get none. **Fix:** the style dialog warns "Looks the same as Emphasis on the page" and suggests a difference. Under Reveal, span styles get a thin gray bracket with a hover label (the four mark colors stay reserved).

**F-B-101 · blocker · S07 · "Not printed" can be restyled to look like Plain.** It is editable "the same way". Then working text silently leaves or stays out of the book, or a writer thinks text is printed when it isn't. **Fix:** Not printed keeps a fixed, non-removable marker (a hatched left rule and a gray background) whatever its working look. Export lists "3 passages not printed" before writing the file.

**F-B-102 · major · S07 vs S24 · Can you change typefaces? Which ones?** S07 offers "Serif, Sans, Mono" (no names); S24's print-style table shows "Charter", "Charter It.", "Charter SC". So the actual faces are chosen somewhere, but nowhere drawn. A writer who drafts in Courier Prime or wants Literata on screen has no path. Linux font sets differ between Ubuntu and Fedora, so "Serif" looks different on each. **Fix:** Settings ▸ Editor ▸ Typefaces: three slots (Serif / Sans / Mono) for the working look, from bundled fonts plus installed ones. Book ▸ Typefaces: three slots per project for print, with an embedding-license check and a **glyph-coverage check** ("Charter lacks ŀ (Catalan) · 3 places").

**F-B-103 · minor · S07 · Text color "not one of the four mark colors".** How close is too close? A dark red is not "red", but it reads as an error. **Fix:** enforce a hue distance (ΔE) from the mark colors in both light and dark themes, and show why a color is refused.

**F-B-104 · minor · S07 · The Chapter heading style applied inside a Research topic or front matter.** It "starts a new chapter there" in the book; in a topic it must not. **Fix:** in topics and front matter it is just a look; the palette shows "(starts a chapter only in the book)".

### K. Book, print, export

**F-B-105 · major · S24 · Running heads drawn, never designed.** S24 shows "THE BLUE LAMP" as a running head on page 146, but there are no controls. A 120-character chapter title as a recto head overflows. **Fix:** Book ▸ Headers and page numbers: left = book title / author, right = chapter title (with a "short title for running heads" field on the chapter, falling back to a truncated title); none on chapter openings, blank pages or front matter; roman numerals in front matter, arabic from chapter 1.

**F-B-106 · major · S24 · Blank versos.** With "Chapters start on a right-hand page", a chapter ending on a recto needs a blank verso with no header or folio. **Fix:** state it, and draw the thumbnail of a blank page.

**F-B-107 · major · S24 · Widows, orphans, hyphenation and the last-page runt.** None is mentioned. **Fix:** on by default (2 lines; language hyphenation, Spanish rules and Catalan l·l → l-l) and a "Fine typography" group folded away. Libreto flags (rule card in Review, no AI) a chapter ending with one line on a page.

**F-B-108 · major · S24, S29 · TOC and summaries.** Insert ▸ Front matter ▸ (Contents?) is not detailed. Long titles in the TOC wrap with dot leaders; EPUB needs a nav TOC; some books need chapter summaries or epigraphs. **Fix:** Front matter ▸ Contents (generated: titles, parts, page numbers, an option for numbers only), an "Epigraph" built-in style, and a Chapter subtitle/summary field shown under the heading if set.

**F-B-109 · major · S24 · Figures, captions, endnotes.** "Pictures are figures", but there are no captions, figure numbering (needed by the Paper type) or alt text (needed by EPUB). Footnotes only, no endnotes. A paragraph with 6 footnotes, or a 300-word footnote, shown "after the paragraph in smaller type" pushes the text apart in Write. **Fix:** caption + alt text on every picture; footnotes or endnotes per project; footnote numbering continuous or per chapter; in Write, footnotes after their paragraph clamped to 2 lines each with "show all".

**F-B-110 · major · S24, S29 · Print = Book.** From Write, a writer who wants a double-spaced draft to mark up, or a chapter only, or the notes, gets the paperback layout of the whole book. A writer also needs a submission manuscript (12 pt, double-spaced, "Not printed" excluded) and a paperback at once, but Book has one active template, so switching loses the tweaks. **Fix:** Option O9: named **outputs** (Paperback, Manuscript, Reading PDF, EPUB), each remembering its settings. The Print dialog offers output + range (whole book / this chapter / pages) + "with notes".

**F-B-111 · minor · S24 · The print-style table at the column's width.** Seven columns: long or Spanish style names ("Encabezado de capítulo", "Recorte de periódico") don't fit, and S24's right column is visibly wider than the 320 px rule. **Fix:** one row per style with an expandable detail, or admit that Book's right column is wider (and adjust the breakpoints for Book).

**F-B-112 · minor · S01 vs spec · Play and Paper on Start, yet the spec puts "project types other than novel and short story" out of v1.** A thesis writer finds no citations, no figure numbering, no endnotes; a playwright finds no character cues or stage directions. **Fix:** in v1, show Play and Paper as "later" or remove them, or ship their minimal styles (Character cue, Stage direction; Section numbering, Endnotes).

### L. Empty states (none are drawn)

**F-B-113 · major · all modes · Empty states.** **Fix:** draw one line each:
- No chapters: "Start writing", and typing creates chapter 1.
- Codex empty: "Names you write appear here by themselves · Add one".
- Research Inbox empty: "Drop files or links here".
- Review empty: "Nothing waits"; Review all disabled with a reason.
- Plan with no scenes.
- Statistics on day 1.
- History before the first snapshot.
- Bell empty.
- Readers none: the People row shows only "You", and Send a copy explains readers.
- "Add notes from a file" finds nothing: "No copies of this project in Downloads or on the Desktop · Browse…".
- Ask with no results and no AI: "Nothing found for 'xyz' · Connect an AI to ask".
- Reference panel opened by the right toggle with nothing chosen: show the entry at the caret or the recent entries, never a blank.

**F-B-114 · minor · S01 · Import a Word file.** A file with no heading styles (chapters as bold "CHAPTER ONE" lines or page breaks) becomes one 120k-word chapter. A file with pending Track Changes or comments: does it accept them silently? **Fix:** with no headings, chapter breaks are proposed (blue) from patterns and page breaks. Pending tracked changes and comments arrive as Review cards from "Word import".

---

## 3. Options

**O1. Revealing (S10).**
- **A. Hold Alt with guards** (alone, 500 ms, cancelled by any key, menu activation suppressed on all platforms). Pros: the owner's gesture. Cons: fragile on Linux WMs and with Alt+Tab, and impossible on Windows AltGr layouts, where the @ key = AltGr.
- **B. Toggle only** (`Ctrl+Shift+A`, plus a status-bar "Reveal" button). Pros: deterministic, works everywhere. Cons: two keystrokes to peek and back.
- **C. Hold a configurable key, default none, with A available in Settings.**
- **Recommend B as the default and A as an opt-in in Settings ▸ Keys.** Peek on `Ctrl`+click (F-B-02).

**O3. Undo scope.**
- **A. One global stack (draft 7).** Simple to explain; cross-mode jumps and surprise edits (F-B-89).
- **B. A stack per surface, with History as the global record.** No surprise; needs the "Nothing to undo here · last change in Write" hint.
- **C. A global stack, but `Ctrl+Z` refuses to cross mode** and offers "Go there". Halfway; the stack order is still confusing.
- **Recommend B.**

**O4. Column geometry.**
- **A. Fixed px (draft 7).** Easy to draw; breaks with zoom, Interface size and locale.
- **B. Everything in scaled units** (page in characters, columns × interface scale, breakpoints computed). Robust; harder to draw as one picture.
- **C. B, plus columns hug the page above about 1900 px.**
- **Recommend C.**

**O5. Review margin overflow.**
- **A. Google Docs-style shifting** (cards pushed down, connector slants, the selected card aligns). Familiar; slants (against "never slants").
- **B. One card per line** (stack card) with "+N below" pills. Calm; one more click for dense lines.
- **C. A list mode when dense.**
- **Recommend B, with C automatic below a density threshold.**

**O6. Chapter file names.**
- **A. Position or title in the name (`07-lenas-warning.md`).** Readable; a renumber renames many files (sync churn, conflicts).
- **B. Stable id (`ch-7f3a.md`) plus an order file.** No churn; less readable outside Libreto.
- **C. Stable id plus title slug, never renumbered (`lenas-warning-7f3a.md`); order in `book.yml`.** Readable, renamed only on a title change.
- **Recommend C.**

**O7. Style ownership.**
- **A. Styles user-wide (draft 7).** One place; projects change behind each other's back, and readers with Libreto see unknown styles.
- **B. The project owns its styles; Settings holds the defaults for new projects.** Portable; two places.
- **C. B, plus "Use my styles here" and "Save as my defaults" buttons.**
- **Recommend C.**

**O8. Strip at narrow widths and in long languages.**
- **A. The mode switch collapses to "Write ▾".** Saves about 400 px; modes hidden one click deeper.
- **B. Icons + active label.** Compact; needs learnable icons.
- **C. Drop Undo/Redo from the strip and truncate the breadcrumb by priority, keeping the switch full.** Least change; may still overflow in German at 125 %.
- **Recommend C first, then A below 1100 px (scaled).**

**O9. Print and outputs.**
- **A. Print = Book (draft 7).** Simple; wrong for drafts and manuscripts.
- **B. Named outputs (Paperback, Manuscript, Reading PDF, EPUB), each with its settings; Print picks one and a range.** One concept for export and print; slightly more UI in Book.
- **Recommend B.**

**O10. Auto-fixes and language.**
- **A. Fixed English rules.** No.
- **B. Rules from the project language and region, each switchable, off inside dialogue by default.**
- **Recommend B.**

**O11. Stale proposals.**
- **A. Block (Out of date card, no Apply).** Safe; occasionally annoying.
- **B. Auto-rebase when the changed range is untouched, otherwise block.** Fewer dead cards.
- **Recommend B.**

---

## 4. What the d8 screens should show (for this lens)

1. **S02-k "Keys on this system"**: the Keys tab with a Spanish layout detected, rows `Ctrl+.` (flag: "taken by input method (IBus emoji) · alias Alt+Enter"), `F8` (alias `Alt+↓`), a refused recording of `Ctrl+Alt+E` ("types € on this layout"), and `Alt+click` (alias `Ctrl+click`, "your window manager uses Alt+drag").
2. **S03-b "Stack card"**: the word "letters" with red + blue + Marta's change + a note; card header "4 on this word", sections in precedence order, each with buttons, focus on section 2.
3. **S03-c "Look-alike change"**: Was "don't" / Now "don’t" with the words "straight ' → curly ’"; a second card in Catalan, "col·legi", with spaces shown as ␣.
4. **S05-b "Long and huge"**: 200 chapters, parts collapsed. A 2-line clamped title "A note under the office door, left by someone who knew where the spare key was kept and never…" with its number on line 1; an unnumbered "Prologue" and "Interlude" (no numbers), roman printed labels; "Untitled scene" rows; the drag of a scene above chapter 1 showing the "New unnumbered chapter" ghost.
5. **S05-c "Joins and deletes"**: the notice "Deleted chapter 8 'Closing time' (2,300 words) and joined 7 and 9 · Undo · Open in Discarded"; a Discarded box holding a whole chapter with its scenes.
6. **S12-b "1260 px, honest"**: both columns open at 1280 with the gutter and the label lane measured; same at Interface size 150 % showing which column closes.
7. **S13-b "Zoom 200 % on 1440"**: the page as a character measure, the columns closed, no horizontal scroll.
8. **S15-b "Dense Review"**: a chapter with 312 items; a line with 10 notes as one stack card; "+3 below" pill; a 2,000-word note clamped with "Read all · Open in the panel"; a thread "28 earlier replies"; bulk bar "Resolve all 128 shown"; the count on the switch "99+".
9. **S15-c "Out of date"**: an AI card grayed "Out of date · the text changed since" with Show what changed / Ask again / Dismiss.
10. **S22-b "Three-way"**: the left column tints "yours, since Nov 7" differently from Marta's edits; "matched 212 of 230 paragraphs by text · 18 unmatched".
11. **S09-b "AI failures"**: three small states: offline (button with slash, bottom row "Offline · waits"), cut off mid-proposal ("The answer was cut off · rate limit · Retry", no Take button), budget stop ("Stopped: this month's limit · Raise it").
12. **S33-b "Save failed"**: the status bar "Not saved since 19:32" in red and the standing notice for an unplugged USB folder; the window title marked.
13. **S33-c "Reopened after a crash"**: the notice "Libreto closed unexpectedly at 19:32 · 43 words recovered · Show".
14. **S33-d "Conflicts"**: "A second version of chapter 7 appeared (laptop-B, 18:02) · Compare", and "Chapter 7 changed outside Libreto · 2 notes could not be placed".
15. **S01-b "Already open"**: "The Blue Lamp is open on laptop-B since 18:02 · Open read-only · Open anyway"; Start with a **Language** field (Español (España) ▾) and the cleaned folder name for "Who? / What: A Novel".
16. **S30-b "Five widths"**: 800 (switch collapsed to "Write ▾", status bar "⋯"), 1000 in Spanish at 125 %, 1440, 2560 (columns hugging the page), portrait 1080 × 1920 in Review with filters at the top of the margin.
17. **S07-b "Styles that look the same"**: the New style dialog warning "Looks the same as Emphasis on the page"; Not printed with its fixed hatched marker; Settings ▸ Editor ▸ Typefaces with three slots and a coverage warning.
18. **S24-b "Book details"**: Headers and page numbers group, a blank verso thumbnail, Chapter numbers format (VII / Seven / Capítulo siete), the running head using a short title, widows/orphans in "Fine typography", Outputs list (Paperback · Manuscript · EPUB).
19. **S24-c "Print"**: the Print dialog with output, range (Whole book / This chapter / Pages), "with notes".
20. **S20-b "Rename a name that is a word"**: Rename everywhere "Rosa → Elena" showing the hit list with "una blusa rosa" unchecked.
21. **S34-b "Editing during the walk"**: the caret in the text, the header "Editing · Alt+↓ to continue", the card without focus ring.
22. **Empty-state sheet**: one frame per mode with the one-line empty states from F-B-113.
23. **S11-b "Peek on a long, ambiguous name"**: two "Kit" entries (the boy, the bag) disambiguated in the peek; the panel head clamped to two lines.
