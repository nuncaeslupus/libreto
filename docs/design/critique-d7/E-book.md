# Critique E: structure, styles and the printed book (draft 7)

Lens: the structure model (S05, S06, S32), styles (S07, S26), typefaces, Book mode (S24), print/export/import (S21, S29, S01), and the non-novel kinds (Play, Paper). Benchmarks: Vellum, Atticus, Scrivener Compile, InDesign, Word, Final Draft, Pandoc.

## 1. Verdict

1. **The styles model is split along the wrong line.** Styles live per user (Settings) while the text that uses them and their print look live per project (Book). A project opened on another machine, sent as a Libreto file, restored from a backup or written with a co-author shows text tagged with styles that do not exist there. Renaming or deleting a style in Settings silently changes every project. Styles must belong to the project, with a personal set used to seed new projects.
2. **Every style has two looks (working and print) and two vocabularies** (Serif/Small/Indent in Write against Charter/10.5 pt/1.35/justify in Book). That is double the configuration, and the writer cannot predict the page from the screen. The working look should be derived from the print look.
3. **Book mode is a parameter table, not a book designer.** There are no front matter pages, no table of contents, no running-head rules, no chapter-number formats, no unnumbered prologue, no part pages, no drop caps or opener design, no widow/orphan or hyphenation control, no ebook preview, and no layout-problems list. Vellum and Atticus win on exactly these points. The cure is themes plus a few element editors, not more table columns.
4. **Print, Export and Share are three doors with three different option sets**, and none of them is drawn as a dialog. "File ▸ Print opens Book" cannot print a working draft on A4 with notes.
5. **Play and Paper are offered at Start but the style model cannot serve them.** A script needs element cycling and fixed per-element margins. A paper needs heading levels, numbered figures, citations, a bibliography, lists and tables. Today these choices only rename the structure levels, which promises more than the app delivers.
6. **Front and back matter is contradictory.** The Insert menu has it (S29), the d6 log says "+ New ▾", S05 says "not on screen" and the + between rows does not offer it. It has never been designed.
7. **Word import is one sentence** ("turns headings into chapters"). Most real manuscripts have no heading styles, and the most important data (custom styles, comments, tracked changes, footnotes) has no mapping screen.
8. **Language and typography conventions are missing.** The owner is Spanish, and Spanish books use the raya for dialogue, « » quotes, Spanish hyphenation and "Capítulo uno". The auto-fix "straight quotes to curly" assumes English.

## 2. Findings

### A. Where styles live

**F-E-01 · blocker · S07, S26, S24.** Styles are per user, but text in a project's Markdown is tagged with them (`::: {.whisper}`, per spec). When Kit opens Vega's project, or Vega opens it on a new laptop, "Whisper" does not exist: the text renders as what? The print row is missing. **Fix:** the styles are stored in the project (a `styles` file next to the chapters). Settings ▸ Styles becomes "**My styles for new projects**", with "Save this project's styles as my default" and "Copy styles from another project…". This is Word's document styles plus Normal template, and Scrivener's project styles plus defaults. See Option O1.

**F-E-02 · major · S07.** "+ New style…" is opened from inside a project, but the walkthrough says the style becomes global. Nothing in the dialog says the style will appear in every project and in every project's Book table. **Fix:** with per-project styles this goes away. If the split is kept, the dialog needs a scope line ("For: this project · all my projects").

**F-E-03 · major · S07, S26.** Deleting or renaming a style is undefined. The text that uses it, the print mapping and the Markdown class names all depend on it, and with per-user styles a deletion touches projects that are closed. **Fix:** a Delete dialog: "'Whisper' is used 14 times in this project · Turn into: Plain ▾ / another style", with Undo. Renaming changes the display name only, and the stored id stays stable (the class is a slug fixed at creation).

**F-E-04 · major · S24.** The Book table says it lists "every style of yours". With per-user styles, a style made for a thriller shows up in the print table of a book of poems. **Fix:** the table lists the styles used in this project, then "Unused (3)", folded.

**F-E-05 · minor · S07.** Built-ins can be edited "with Reset beside each" in Settings, and again with Reset in Book. That gives two Resets with different meanings. **Fix:** one style card with one Reset (see O2).

### B. Two looks, two vocabularies

**F-E-06 · blocker · S07, S24.** Each style has a working look (face, size step, B/I/U, indent, color) and a print look (face, pt, spacing, alignment, break). The writer sets Sign to "Large Sans" while writing, and it prints at 10 pt Charter small caps. Nothing explains the gap, and there are two places to change one style. The owner's d6 note asked to map working styles to print styles "with a preview". **Fix:** one look per style, defined in print terms by the book's theme. Write renders it relatively: the writing font replaces the body face, and differences in italic, small caps, alignment, indent and size step are kept. See O2.

**F-E-07 · major · S24.** The print look has attributes the style dialog lacks: alignment, line spacing, space before and after, page break, small caps. The SIGN row prints in Charter SC, but small caps cannot be chosen anywhere in the dialog, and the spec says "Sign, centred and in capitals". **Fix:** the style card has a fixed, short list: face role, size step, B/I/small caps, alignment (left, justify, center, right), indent (first line, or the whole block left/right), space before/after (none, half, one line), "starts a new page", and "keep with next" (headings on by default).

**F-E-08 · major · S07.** Underline is offered in the dialog, yet the `Ctrl+U` tip says "underlining is not a style in a book". Both cannot be true. **Fix:** drop Underline from the dialog (keep it only for the Mono/manuscript theme), or remove the tip. I recommend dropping it.

**F-E-09 · major · S07.** Text color is a style attribute, and its meaning in print is undefined. A purple Thought would print purple, go grey on a black-and-white press, and be ignored by an e-ink EPUB reader. The owner also said colors should not show in the text ("it's a book; Alt helps"). **Fix:** remove text color from styles. The reveal (S10) already gives each style a margin label. If color stays, it applies to the screen only and the dialog says "not printed".

**F-E-10 · major · S07.** "Three faces" is never tied to real fonts. Book shows Charter, but nowhere chooses Charter, and nothing says what Sans and Mono are. **Fix:** Book ▸ Type, with three slots, *Body (serif)*, *Display/Sans*, *Mono*, each a font menu from a curated, embeddable set plus "Other font file…", with a license note for EPUB embedding. Ten bundled open fonts (EB Garamond, Crimson Pro, Libre Baskerville, Literata, Source Serif, Charter, Inter, Courier Prime…) should cover most needs.

**F-E-11 · major · S26.** There is no writing font. Many writers want to draft in Courier Prime, iA Writer Duo or Literata at 18 px with 1.6 line spacing, whatever the book's design. Settings has only Interface size. **Fix:** Settings ▸ Editor: writing font (or "As the book"), size, line spacing, page width (520–760 px), light/sepia/dark page. This separates "how I like to write" (user) from "how the book prints" (project), which is the split question 7 was reaching for.

**F-E-12 · minor · S26.** The UI font cannot be changed and Interface size is the only control. That is acceptable, but for dyslexic users add "Interface font: system / Atkinson Hyperlegible".

**F-E-13 · major · S07.** Five size names (Small…Largest) against points in Book give two scales for one property. **Fix:** size steps are relative to the body (−1, 0, +1, +2, +3), and the theme decides the points. The style card shows "Larger · prints 14 pt in this theme".

**F-E-14 · minor · S24.** Spacing "1.35" and "—" sit next to "2 lines" for the scene break, with unitless numbers mixed with words. **Fix:** use words with a small number: "Line spacing: Comfortable (1.35)".

### C. Built-in styles and missing kinds of text

**F-E-15 · major · S07.** The built-ins (Plain, Chapter heading, Subheading, Thought, Emphasis, Strong, Letter, Sign, Verse, Not printed) lack what every book and every Word import needs: **Block quote, Epigraph + Attribution, Dedication, Caption, Centered, Section heading 2/3** (papers, nonfiction), **Lists** (bulleted and numbered: nonfiction cannot live without them), **Footnote text**, **Small caps** (text). **Fix:** add them, and hide the irrelevant ones per kind (a Book project hides Section 3).

**F-E-16 · major · S07.** There is no **next style**. After a Chapter heading, Enter should give Plain; after a Letter paragraph, Letter; after a Character cue in a script, Dialogue. This one field also makes scripts possible (F-E-63). **Fix:** add "After Enter: same / Plain / ▾" to the style card, with sensible defaults on the built-ins.

**F-E-17 · major · S07.** Paragraph styles have no notion of a **block**. A Letter is five paragraphs with a salutation and a signature: space before the first, after the last, and a right-aligned signature. Pandoc's `:::` divs are blocks, but the UI treats styles paragraph by paragraph. **Fix:** consecutive paragraphs of a block style form one block (space before and after the group, not each paragraph). A "Signature" option is a later step.

**F-E-18 · major · S07.** Nesting is not defined. Emphasis inside Thought (italic inside italic) must turn roman, which is standard typography and what Vellum does. Strong inside Sign is also unspecified. **Fix:** a rule in the spec, "a text style inside an italic context toggles", shown in the sample.

**F-E-19 · major · S07, S10.** Two styles can look identical on the page: Thought and Emphasis are both italic, and Foreign is italic too. On the page the writer cannot tell whether a word is Thought or Emphasis, and a Word import maps all italics to Emphasis. That matters later, when Thought should print differently or the AI reads interior monologue. **Fix:** (a) the dialog warns "Looks the same as Emphasis on the page; you'll tell them apart with the chip or Alt"; (b) the reveal labels text styles inline (a thin tag over the span), not only paragraph styles in the margin; (c) Find ▸ Style plus "Change all Emphasis in these 12 hits to Thought" (Replace with style).

**F-E-20 · minor · S07.** Shortcuts per style are shown only for Emphasis and Strong, though the owner asked for one per style. **Fix:** a "Key" field in the style card that records keys. Use `Ctrl+Shift+1…9`, never `Ctrl+Alt+digit`: on a Spanish Windows layout Ctrl+Alt is AltGr, and AltGr+2/3 type @ and #.

**F-E-21 · minor · S07.** There is no way to clear a style. **Fix:** "Plain" at the top of the bar on a selection, and the key `Ctrl+Shift+0` or `Ctrl+Space`. The palette shows which style a selection already has.

**F-E-22 · minor · S07.** There is no way to center one line ("THE END", a sign) without creating a style. That is by design, but "Centered" should be a built-in, so the first instinct works.

**F-E-23 · major · S07.** "Not printed", Discarded, Unplaced and notes are four ways of keeping text out of the book, and their export behavior is undefined. Should a Word copy for Marta include Not printed text? **Fix:** one rule in the export dialog: "Include: ☐ notes ☐ Not printed text (greyed, boxed)". Not printed text is excluded from word and page counts, and the status bar says so when the cursor is inside it.

**F-E-24 · minor · S07.** The style palette groups Paragraph and Text, but a Thought can be either (a single thought sentence or a whole paragraph). **Fix:** make "Text" styles applicable to whole paragraphs. That is just a selection rule, not a second style.

### D. Structure model

**F-E-25 · major · S07, S05.** "Applying Chapter heading mid-chapter starts a chapter" is powerful but dangerous with paste. Pasting 30 pages from Word that contain Heading 1 lines silently creates 12 chapters. **Fix:** a paste that would create chapters asks once in a notice: "This paste starts 12 chapters · Keep · Paste as Plain headings · Undo".

**F-E-26 · major · S05, S24.** There is no unnumbered chapter. Prologue, Epilogue, Interlude and Afterword print without a number, and later chapters must not count them. The list in S05 numbers every row. **Fix:** chapter right-click ▸ "Numbered / Not numbered", with "Prologue" and "Epilogue" offered as names. An unnumbered row shows "·" instead of a number.

**F-E-27 · major · S24.** Chapter number formats are limited to "number and title / title only / number only / nothing". Missing: digits, words ("Chapter Seven", "Capítulo siete"), roman, the label word itself ("Chapter", "Capítulo", none), numbering restarting per part or continuous, and the number on its own line or inline. **Fix:** an opener editor (S-new-2) with these as menus and a live sample.

**F-E-28 · major · S05, S24.** Parts have no print design: no part page (recto, blank verso), no number format ("Part One", "I"), no title/number split like chapters (S05 shows "PART ONE: WINTER IN THE HARBOR DISTRICT" as one string), and no part epigraph. **Fix:** a part's heading has number plus title like a chapter. Book ▸ Parts: "Part pages on their own right-hand page ☑", number style. A short text under a part heading (an epigraph) is allowed before the first chapter.

**F-E-29 · major · S05.** The owner's d6 question, "a part starting with a scene without a chapter", is unanswered. **Fix:** say no in the walkthrough: a part's text before its first chapter is "part opening text" (epigraph, intro) and is not a scene.

**F-E-30 · major · S01, S05.** Paper is described as "parts and sections, no scenes", but papers need three to four heading levels (1, 1.1, 1.1.1) and these are not structure levels. Are they Subheading styles? Do they appear in the list and the TOC? **Fix:** in a Paper, the third level is "Subsection", a heading (printed, numbered optionally), not a separator. More generally, each structure level has a print behavior: *heading* or *separator (scene break)*. The project kind sets the default, and Project settings can change it.

**F-E-31 · minor · S02.** The gray "Chapter 1" placeholder versus a writer who types "Chapter One" as the title prints as "1 / Chapter One". **Fix:** detect a title that only restates the number and offer "Use as the chapter label" (a blue card).

**F-E-32 · minor · S06.** A scene break at the top or bottom of a page vanishes in print if its look is blank space. **Fix:** the break's print look is an ornament by default ("* * *", ❧, a small image). If the writer chooses "blank line", Libreto switches to the ornament at page edges automatically, the standard practice in Vellum and InDesign, and says so in the option.

**F-E-33 · major · S24.** "Scene break" is a row in the Print styles table, but it is not a style (the break is a block). This mixes categories. **Fix:** move it to a "Breaks & ornaments" group: glyph or image, space, "ornament at page edges".

**F-E-34 · minor · S06.** "Every chapter begins with a first scene that needs no rule" is correct. Add the matching typographic rule to Book: the first paragraph after a heading or a break is not indented. The spread in S24 already does this, so state it.

**F-E-35 · minor · S32.** In the whole-book view nothing shows where a page break or a "Starts a new page" style falls. **Fix:** a thin "new page" hairline in the margin where it applies (Show ▸ Page breaks, off by default).

### E. Front and back matter

**F-E-36 · blocker · S05, S29, S24.** Front and back matter appear only as two Insert submenus with no contents. The d6 log says "+ New ▾", S05 shows no rows and the + between rows does not offer them. The owner asked in d5 how it is filled, how you know you are in it, whether it is a dialog, and about a pseudonym or "lema" for contests. **Fix:** see O6. Generated pages come from **Book information** (title, subtitle, author or pen name, publisher, year, rights line, ISBN per edition, edition, contest motto). Short written pages (Dedication, Epigraph, Acknowledgments, About the author, Also by, Author's note) are edited in place and appear in the chapter list as two groups, "Front" (top) and "Back" (bottom, above Discarded). They are folded and not counted in the word count.

**F-E-37 · major · S24.** There is no title page, half-title or copyright page. The Start "look" tile "is shown on the Book title page until a real cover exists", but a line-drawn teacup on a title page is wrong, because title pages are typographic. **Fix:** the tile is used for the project icon only. The title page is generated from Book information in the theme's display face.

**F-E-38 · major · S24.** There is no table of contents. Print novels often skip one, but an EPUB requires a navigation TOC, and nonfiction and papers need a printed one. **Fix:** Book ▸ Contents: "Printed contents page ☐ (front / back)", levels (parts, chapters, sections), page numbers or dotted leaders, plus "EPUB navigation: always on". Its title follows the book language ("Contents" / "Índice").

**F-E-39 · major · S24.** There is no page-number sequence: roman for front matter, arabic from the first chapter, and no number on blank or opener pages. The status bar's "p. 146 of 248" is ambiguous (physical or folio?). **Fix:** Book ▸ Headers & numbers sets the sequence. The status bar shows the folio, and its hover says "page 146 of 248 in Trade 6 × 9".

**F-E-40 · major · S24.** Running heads: the left page shows THE BLUE LAMP and the right page shows nothing (correct for a chapter opener, but never specified). There are no rules for verso and recto content (author / book title / chapter title / part), suppression on openers and blank pages, or long chapter titles. **Fix:** Headers & numbers: verso ▾ (Author, Title, Part, Chapter, None), recto ▾, position (header outside, footer center). A chapter's right-click ▸ "Short title for headers…", used automatically when the title is too long to fit, with a Layout issue card when it is truncated.

**F-E-41 · minor · S24.** Pen name and contest anonymity: the owner raised submitting under a "lema". **Fix:** in Book information, "Author shown as: name / pen name / motto only", and the Manuscript theme's header follows it.

**F-E-42 · minor.** Back matter for ebooks needs a live link ("Join my newsletter", "Also by"). **Fix:** links in text work in EPUB and PDF. In print they show as plain text, or as a QR code when "QR in print" is chosen (later).

### F. Book mode: page, themes, typesetting

**F-E-43 · major · S24.** The template list mixes trim sizes (5.5 × 8.5, 6 × 9, A5) with purposes (manuscript, reading PDF). A manuscript submission (Shunn format: Courier or TNR 12, double spaced, 1 in margins, a "Surname / TITLE / page" header, word count on page 1, `#` for breaks) is a whole typographic theme, not a size. **Fix:** split into **Theme** (Classic, Modern, Romance, Thriller, Literary, Manuscript submission, Plain reading) × **Trim** (sizes) × **Output** (print, ebook). See O3.

**F-E-44 · major · S24.** The margin labels inside/outside are shown even with spreads off, where they mean left/right. **Fix:** the labels switch with the checkbox ("left / right" when off). Also add a **gutter warning**: print-on-demand services require the inside margin to grow with the page count. A 248-page book needs a larger gutter than a 120-page one (KDP's own table), so Libreto should warn ("For 248 pages, Amazon KDP needs an inside margin of at least 1.27 cm").

**F-E-45 · major · S24.** There is no hyphenation, widow, orphan or keep control. Justified text without hyphenation in a 6 × 9 page makes rivers, and in Spanish it is worse. **Fix:** a "Typesetting" group of three items: Hyphenation (on, in the book's language), "Avoid single lines at page top/bottom" (on), "Keep headings with the next lines" (on). Everything finer stays out.

**F-E-46 · major · S24.** There is no list of layout problems. A writer cannot hunt for a widow on page 173 of 248 by flipping pages. **Fix:** a "Layout issues · 4" item in Book's header: lines that overflow, a chapter ending with one line on its last page (a runt), a scene break at the page edge, a truncated running head, a picture under 300 dpi, an empty verso before a recto opener where it is avoidable. Each issue is a row that jumps to the page. This fits Libreto's card idea without using the Review colors.

**F-E-47 · major · S24.** Chapter openers have no design: no sink (start lower on the page), drop cap, small-caps lead-in (first words), ornament under the heading, or heading image. Vellum's main selling point is exactly this. **Fix:** an opener editor in the theme (S-new-2), with 4–6 presets plus the switches drop cap ☐, small caps first line ☐ and ornament ▾.

**F-E-48 · major · S24.** There is no ebook preview. An EPUB is reflowable: no page size, margins, running heads or page numbers, and the reader's font may replace yours. The current Book mode shows only paper pages, so the EPUB is never seen before export. **Fix:** a "Preview as: Print · Ebook · Manuscript" selector at the top of the center, where Ebook shows a device frame with a font-size slider (Vellum's device previews).

**F-E-49 · major · S24.** The 7-column Print styles table does not fit a 320 px column: S24 squeezes Face, Size, Spacing, Align, Break and Reset into it, and with 10+ styles it is a spreadsheet. Editing a cell has no interaction defined. **Fix:** a list of the styles used, each row showing "Thought · Charter italic 11". A click opens the style's card in the panel, and the matching paragraphs are highlighted in the preview. The reverse also works: **clicking any element in the preview selects its style or element** (heading, folio, running head, break) in the panel. That gives the "mapping with a preview" the owner asked for.

**F-E-50 · major · S24.** Book is read-only, so a typo found in proof cannot be fixed. **Fix:** double click a word in the preview opens Write at that place (`Back` returns to the same spread). There is no in-place editing in the preview.

**F-E-51 · minor · S24.** 248 pages make 124 tiny thumbnails with no chapter landmarks. **Fix:** group the thumbnails under chapter names, or replace them with the book outline (front matter, parts, chapters with page ranges) and the thumbnails of the current chapter. Clicking a row jumps.

**F-E-52 · minor · S24.** "Laid out in 1.8 s" in the status bar is developer information. **Fix:** remove it, and show a thin progress line only while layout runs.

**F-E-53 · major · S02, S24.** The status bar page count in Write requires a constant layout of the whole book with the current Book settings. On a 120k-word book, every keystroke has a cost, and switching the template changes the page number under the writer's eyes. **Fix:** the spec names the engine (Typst or Paged.js, so the preview and the PDF are the same output) and an "approximate while typing, exact when idle" policy. The page is shown as "≈ p. 146" until the layout settles.

**F-E-54 · minor · S24.** "Chapters start on a right-hand page" is the only opener rule. Add "Parts start on a right-hand page" and "Start on any page (no blank pages)" for ebook-like PDFs.

**F-E-55 · minor · S24.** Dark spreads: Book should always render paper white, even in dark UI. State it.

### G. Pictures, notes, references

**F-E-56 · major · S24.** Picture placement is a single global radio. Real books mix in-place images, full-page maps and a frontispiece. Captions, alt text (EPUB accessibility; the EU Accessibility Act has applied to ebooks sold in the EU since June 2025), sizing and resolution are absent, and inserting a picture in Write is never drawn. **Fix:** the global default plus a per-picture card (right-click ▸ Picture…: width as a share of the text block, placement, caption, alt text, "number this figure"), with a dpi warning in Layout issues.

**F-E-57 · major · S24.** Only "footnotes at the foot of their page" is supported. Missing: endnotes (per chapter, or at the book's end: the norm in narrative nonfiction), restart numbering per chapter, symbols (*, †) for sparse novel notes, a separate translator's note series (the owner mentioned it), and EPUB pop-up notes. **Fix:** Notes ▾: Foot of page / End of chapter / End of book; Numbering: 1 2 3 per chapter or continuous / * † ‡. EPUB always uses linked endnotes with back-links. Inserting a footnote in Write (Insert ▸ Footnote, `Ctrl+Shift+F`) needs a drawing.

**F-E-58 · major · S01.** Paper promises "an essay, an article, a thesis", but there are no citations, bibliography, figure or table numbering, cross-references ("see Figure 3"), tables, abstract or author/affiliation block. A thesis writer abandons Libreto on day one. **Fix:** see O5. At minimum: tables (simple grid), numbered captions with "Insert ▸ Reference to ▸ Figure 3", and citations via a CSL/BibTeX file (Zotero export) using Pandoc's `[@key]` under the hood, so "Insert ▸ Citation…" searches the .bib and the bibliography is a generated back matter page. Otherwise, rename the choice "Essay" and say "no citations yet".

**F-E-59 · minor.** Tables are absent everywhere (nonfiction and papers both need them). Add a simple table (no merged cells) or mark it as later in the spec.

### H. Print, Export, Share

**F-E-60 · blocker · S24, S29, S21.** "File ▸ Print opens Book and prints the same pages" means a writer who wants to proofread chapter 7 on paper (A4, double spaced, with notes) gets a 6 × 9 trim page floating on A4, or nothing, if Book was never set up. **Fix:** a **Print dialog** (S-new-6) with *What*: "Working copy" (the manuscript look on your paper size, with notes optionally in the margin) or "Book pages" (trim pages centered or 2-up, with crop marks optionally); *Range*: whole book, this chapter, selection, pages; then the system dialog.

**F-E-61 · major · S24, S21.** Export is configured in Book (PDF, EPUB, Word + Include notes) and in Share (Word, PDF, Libreto + Include notes) with no shared settings. Which theme does Share's PDF use? Which does Word use? The owner asked about this ("why here so many options and not when sharing?"). **Fix:** one **Export dialog** (File ▸ Export…, `Ctrl+E`) built on **output profiles**: *Print PDF (for printing services)*, *Reading PDF*, *EPUB*, *Word manuscript*, *Word for a reader (with notes, with paragraph ids)*. Share ▸ Send a copy reuses the profiles, and Book's Export buttons open the dialog preselected. See O4.

**F-E-62 · major · S24.** The PDF for print-on-demand needs embedded fonts, exact trim, optional bleed for full-bleed images and PDF/X, plus a separate cover file. EPUB needs metadata (language, author, ISBN, description) and a **cover image**: stores reject an EPUB without one. "Cover design later" cannot mean "no cover". **Fix:** in v1, Book information has a cover image slot (import a JPG), used in the EPUB and as an optional first page of a reading PDF. A cover designer stays out of scope.

**F-E-63 · major · S21.** Word export of styles: which look goes to Word, working or print? The spec says "Libreto styles become Word named styles", which are not defined. **Fix:** Word manuscript exports the Manuscript theme's look as named styles (Body Text, Heading 1 = chapter, Heading 2 = part, plus custom character and paragraph styles by name), scene breaks as a centered `#` or `***` paragraph, and notes as threaded Word comments with replies.

### I. Word import

**F-E-64 · blocker · S01.** "Import a Word file turns a manuscript's headings into chapters" covers the minority. Most manuscripts mark chapters with a bold, centered "Chapter 1" in Normal style, or with page breaks. **Fix:** an **Import preview** dialog (S-new-7). It shows the detected structure on the left (from Heading 1/2, "Chapter N" / "Capítulo N" lines, page breaks, or `***`/`#` lines), with a choice of what marks a chapter, a part and a scene break, and a preview of the chapter list.

**F-E-65 · major · S01.** There is no style mapping. Word documents carry custom styles ("Carta", "Pensamiento") plus direct formatting. **Fix:** in the import dialog, a "Styles found" table: Word style → Libreto style ▾ (Create "Carta" / Map to Letter / Plain). Direct italics become Emphasis, bold becomes Strong, underline becomes Emphasis (with a note), and a centered short line becomes Centered. Fonts and sizes are dropped, and the dialog says so.

**F-E-66 · major · S01, S22.** Comments and tracked changes on import: a first import of a manuscript that came back from an editor carries both. **Fix:** comments become notes with the author's initial, and tracked changes become blue pending cards per author, which fits Review exactly (S15). The import dialog asks "Bring the 34 tracked changes as proposals to review, or accept them all, or reject them all".

**F-E-67 · minor.** Footnotes, endnotes, images and section breaks in Word import: state that they are kept.

**F-E-68 · minor · S01.** Other imports: Scrivener (.scriv), Markdown/Fountain folders, Google Docs (via .docx). Scrivener is the most likely migration source for the target users. **Fix:** list Scrivener as a planned import in the spec; Markdown folder for v1, since it is cheap.

### J. Plays and screenplays

**F-E-69 · blocker · S01.** Start offers Play ("a play or a screenplay"), but the style model cannot write one. A screenplay needs per-element margins (character cue at about 3.7 in, dialogue 2.5–6 in), uppercase cues and sluglines, Tab/Enter element cycling (Action → Character → Dialogue → Parenthetical), cue autocomplete, (CONT'D) and (MORE) across page breaks, scene numbers and a fixed Courier 12 page-per-minute layout. The style dialog offers one indent value and no next style. The owner wrote in d5 that "we don't have yet the tools". **Fix:** see O5.

**F-E-70 · major.** Character cues are a natural fit for the Codex (the cast), and an autocomplete of cues from People is a quick win if scripts are in scope. Note it in the module plan.

**F-E-71 · minor.** A stage play format (character name centered or caps on the left, stage directions italic in parentheses, act/scene headings) is a different format from a screenplay. A "Play" kind must choose which, or offer both formats.

### K. Language and typography conventions

**F-E-72 · major · S02, S26.** "Straight quotes to curly" assumes English. A Spanish book uses « » with “ ” inside, and the raya (—) for dialogue, with specific spacing ("—Hola —dijo Lena—. ¿Vienes?"). French uses « » with thin spaces. **Fix:** Project settings ▸ **Language of the book** (separate from the interface language) sets quotes, the dialogue dash (an auto-fix "-- at line start → —"), hyphenation, the spell-check dictionary, and the generated words (Capítulo, Índice, Parte).

**F-E-73 · minor.** Special characters: em/en dash, ellipsis, non-breaking space (before ? ! in French, between "p." and a number). **Fix:** auto-fixes per language, plus Insert ▸ Special character (a small palette), with no keys that need brackets.

**F-E-74 · minor.** Small caps and old-style figures depend on the font. Themes should use fonts that have them, and the style card greys out "small caps" when the chosen font has no real small caps (or fakes them, with a note).

### L. Smaller contradictions and gaps

**F-E-75 · minor · S24.** "Pictures as figures": the label means nothing to a writer (the owner asked). **Fix:** "Pictures: where they go".

**F-E-76 · minor · S24.** The Ask button floats over the Export row (bottom right of S24). **Fix:** the panel content ends above it, as S12 promises.

**F-E-77 · minor · S13.** "The Focus page keeps the project's paragraph spacing and first-line indent as set in Book" binds the writing view to print settings. That contradicts F-E-11's writer preference. **Fix:** Focus follows Settings ▸ Editor ("As the book" being one choice).

**F-E-78 · minor · S07.** The palette's "Filter styles" box conflicts with the rule "only palettes have a filter box". The palette is a palette, so this is fine, but the same rows in Format ▸ Style as ▸ have no filter. That is consistent; just confirm it.

**F-E-79 · minor · S24.** Book thumbnails' header "two-page spreads" duplicates the checkbox. Remove it.

**F-E-80 · minor · S24.** Ask in Book ("start chapters on the right page") is good. Also let Ask apply a theme ("make it look like a thriller paperback") as a proposal: a preview diff of the settings with Keep/Take.

**F-E-81 · major · API.** For the MCP goal (an LLM writing a book from a specification), Book settings, styles and front matter must be plain project files (YAML), so a "book specification" can declare the theme, trim, front matter and styles. With per-user styles, an LLM-created project cannot be self-contained. This is a further argument for O1-B.

## 3. Options

### O1. Where styles live
- **A. Per user (current).** Pros: set once, same everywhere. Cons: projects are not portable; sharing, backup and API all break; deletions reach closed projects (F-E-01, 03, 81).
- **B. Per project, seeded from "My styles" (recommended).** New projects copy your default set, and "Save as my default" and "Copy from project…" move styles back and forth. Pros: portable and self-contained, matches Word and Scrivener, makes API specs possible. Cons: an improvement made in one project does not reach the others unless you save it as default (one extra click).
- **C. Layered (user library + project overrides).** Pros: maximum reuse. Cons: inheritance comes back, which the owner explicitly rejected ("nothing based on anything").

### O2. One look or two
- **A. Two looks, working and print (current).** Pros: freedom to write in big sans and print in Garamond. Cons: double configuration, no predictability, two vocabularies.
- **B. One look, defined by the theme; Write renders it relatively in your writing font (recommended).** Pros: one place, one Reset, WYSIWYG where it matters (italic, small caps, centering, indent), while writing comfort is a separate user setting (F-E-11). Cons: a writer who wants Sign in red on screen loses that, but the reveal (S10) covers it.
- **C. No style looks at all; themes decide everything (Vellum).** Pros: the simplest. Cons: custom styles ("Whisper") have no look until a theme knows them, so it needs a fallback.

### O3. How Book is configured
- **A. A free table per style (current).** Cons: a spreadsheet; no openers, TOC or matter.
- **B. Themes plus element editors (recommended).** About 6–8 curated themes (Classic, Modern, Romance, Thriller, Literary, Nonfiction, Manuscript submission, Plain reading). Clicking an element in the preview (heading, folio, break, a style's paragraph) edits it in the panel, and "Save as my theme" is available. Pros: one click gives a good book, with tweaks where you point. Cons: themes need real design work, and so does the curated font set.
- **C. A Scrivener-style compile with section layouts.** Cons: the opposite of the owner's simplicity.

### O4. Print / Export / Share
- **A. Current: three places.** Cons: contradictory options.
- **B. One Export dialog with profiles; Print has its own small dialog; Share and Book's buttons open them preselected (recommended).**
- **C. Everything only from Book.** Cons: printing a working draft becomes a layout job.

### O5. Play and Paper in version 1
- **A. Keep them as level names only (current).** Cons: a broken promise on the first screen.
- **B. Ship minimal kind-specific tools (recommended for Play if R-10 stays a "must").** Script element styles with fixed formats, next-style cycling (F-E-16), cue autocomplete from the Codex, and Fountain import/export. For Paper: heading levels, numbered captions, tables and BibTeX/CSL citations through Pandoc.
- **C. Start shows only Book in v1; Play and Paper appear as "coming" with what they will add.** Pros: honest and cheap. Cons: loses those users now. If B is too much for v1, choose C rather than A.

### O6. Front and back matter
- **A. Ordinary chapters with special styles.** Cons: the copyright page gets counted and numbered; no structure.
- **B. Generated pages only, from forms in Book.** Cons: the dedication and acknowledgments are real writing, not form fields.
- **C. Hybrid (recommended).** Generated pages (half-title, title, copyright, contents, also-by) come from Book information and are toggled in Book's outline. Written pages (dedication, epigraph, foreword, author's note, acknowledgments, about the author) are short texts in Front and Back groups of the chapter list, created by "+" in those groups or from Insert ▸ Front matter ▸, with order and recto rules handled by the theme.

## 4. What d8 screens should show

1. **S24 Book, redesigned.** The left column is the book outline, not thumbnails: Front (Half-title ☑, Title ☑, Copyright ☑, Dedication, Epigraph, Contents ☐), Part One (p. 1), chapters 1–11 with page ranges and "7 Lena's warning 141–158" selected, Back (Acknowledgments, About the author). In the center, "Preview as: **Print** · Ebook · Manuscript" and the 146–147 spread, with the chapter 7 opener on the right showing a 1/3 sink, "CHAPTER SEVEN", "Lena's warning", a drop cap T and a small-caps first line. The right panel shows Theme "Classic ▾", Trim "Trade 6 × 9 in ▾", the groups Type · Chapter openers · Headers & numbers · Breaks · Pictures & notes · Typesetting (folded), and "Layout issues · 3" in the header. There is one Export… button.
2. **Book, an element selected.** The writer clicked the chapter heading on the spread, so it is outlined and the panel shows "Chapter opener": label "Chapter ▾", number "in words ▾", title on its own line, sink "One third ▾", drop cap ☑, first line in small caps ☑, ornament "none ▾", "Chapters start on a right-hand page ☑", with a live update.
3. **Book, a style selected.** The writer clicked "It was a good lie." on the spread, so every Thought paragraph is tinted in the preview and the panel shows the Thought card: face role Body, italic, size Normal (prints 11 pt), alignment as Plain, "Looks the same as Emphasis on the page", Reset.
4. **Book information** (sheet or dialog): title "The Blue Lamp", subtitle, author "Vega Marín" / pen name, show as ▾, publisher, year, rights line, ISBN print / ISBN ebook, language "English (UK) ▾", cover image slot with a thumbnail, contest motto field.
5. **Headers & numbers panel**: verso "Author", recto "Chapter title", folio "Footer, center", front matter roman, "No header on opener and blank pages", and the Layout issue example "Chapter 9's title is too long for the header · Set a short title…".
6. **Ebook preview**: a device frame, the chapter 7 opener reflowed, a font-size slider, the TOC drawer open, "Your fonts are embedded · readers may replace them".
7. **Layout issues list**: four rows ("p. 173 · a single line at the top of the page", "p. 188 · chapter 10 ends with one line", "p. 201 · picture 'Blue Lamp 1952' is 140 dpi", "p. 64 · scene break at page bottom · ornament used"), each jumping to the page.
8. **Export dialog** (File ▸ Export…): profiles as rows (Print PDF for KDP/IngramSpark, Reading PDF, EPUB, Word manuscript, Word for a reader), the selected profile's 3–4 options (include notes, include Not printed, cover page, file name), a destination and Export.
9. **Print dialog**: What: ◉ Working copy (A4, double spaced, notes in margin ☑) / ○ Book pages (6 × 9 on A4, centered, crop marks ☐); Range: Whole book / Chapter 7 / Pages 141–158; "Print…" opens the system dialog.
10. **Word import preview**: the left shows the detected chapter list (14 chapters from "Capítulo N" lines; 2 parts from Heading 1); the right shows "Chapters start at: lines like 'Capítulo 1' ▾", "Scene breaks: '* * *' lines", "Styles found: 'Carta' → Create Letter ▾, 'Pensamiento' → Thought ▾, direct italics → Emphasis", "Comments: 23 by M. → notes", "Tracked changes: 34 by M. → proposals in Review ▾", and an Import button.
11. **Style card, revised** (from the palette, "+ New style…"): a scope line "In this project · Save to my styles ☐", Name, Paragraph/Text, Face role, Size step with "prints 14 pt", B / I / Small caps, Alignment, Indent, Space before/after, After Enter ▾, Key (record), the sample, and a warning row. Also show the **Delete style** dialog with "used 14 times · turn into Plain ▾".
12. **Settings ▸ Editor**: writing font (As the book / Literata / Courier Prime / …), size, line spacing, page width, page color (white / sepia / dark), and Settings ▸ General ▸ Interface size + interface font.
13. **Project settings ▸ Language & typography**: book language "Español (España)", quotes « » / “ ”, dialogue with raya ☑ and a sample "—Hola —dijo Lena—.", hyphenation ☑, generated words (Capítulo, Índice, Parte) with an override.
14. **Chapter list with front/back groups and an unnumbered row**: "Front: Dedication, Epigraph", "· Prologue" without a number, chapters 1–11, "· Epilogue", "Back: Acknowledgments, About the author", then Discarded. Right-click on Prologue shows "Numbered ☐ · Short title for headers…".
15. **Footnote in Write and Notes settings**: a superscript ¹ in chapter 7, the note shown after its paragraph in smaller type, and in Book "Notes: End of chapter ▾, numbering per chapter".
16. **Picture card**: right-click ▸ Picture… on "Blue Lamp, 1952": width 100 % of the text block, placement Own page, caption "The Blue Lamp in 1952", alt text, "Number this figure ☐".
17. **(If O5-B) Screenplay in Write**: INT. BLUE LAMP – NIGHT, an action line, the cue LENA (autocompleted from the Codex, a dropdown with Lena and Kit), a parenthetical, and dialogue. The chip at the bottom reads "Character", with a hint "Tab: Parenthetical · Enter: Dialogue".
18. **(If O5-B) Paper**: a section 2.1 heading, Table 1 with a numbered caption, the citation "(Marín 2019)" inserted from a "Insert citation" palette searching a .bib, and a generated References page in Book.
19. **Paste creating chapters**: the notice "This paste starts 12 chapters · Keep · Paste headings as Plain · Undo".
