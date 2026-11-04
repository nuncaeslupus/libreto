# Specification notes

_Exported 2026-11-04 · 8 notes._

> Send this file back to continue the review. Notes are embedded as data at the bottom
> so importing this file restores them in the reader.

## Specification

**§1 Problem statement**  `SPEC §1`
> ¶ _“Writers who plan as much as they write (novelists, short-story writers, and later scree…”_
>
> About styles, Word has it or too easy or too complex. I'd focus on _what_ is something instead of _how_ it is shown. I mean, there should be the possibility to create new styles apart from existing ones. For example, you can very simply create a new style "Sign" and just center it and put it in uppercase. That should be enough to show it is different. Final version could have a new styles applied, so "Sign" could be reinterpreted and put into a rectangle. Then, styles are to differentiate the function of texts. They must be easy to create in a simple way and understood by theit function.

**§1 Problem statement**  `SPEC §1`
> Our format must be compatible with Word, for example, and use comments, some styles, etc.

**§2 Systems & Impact**  `SPEC §2`
> Some of the parts should be specified (for example, design, CLI...). Whatever that is not clear or depends on opinion or need some work.

**Option A: Core first, thin app (Conservative)**  `SPEC › Option A: Core first, thin app (Conservative)`
> If we show Markdown files, we can reuse or at least read some nacho-viewer code.

**Option B: The writer core, in four milestones (Recommended)**  `SPEC › Option B: The writer core, in four milestones (Recommended)`
> ¶ _“Core + CLI + MCP: project format v1, index, commands (create, rename, move, link, comme…”_
>
> We must see which commands exactly we need.

**Option B: The writer core, in four milestones (Recommended)**  `SPEC › Option B: The writer core, in four milestones (Recommended)`
> ¶ _“App shell + editor: binder with drag and drop, chapter editor, full view, word counts, …”_
>
> Review the design so that it accepts more modules.

**Option B: The writer core, in four milestones (Recommended)**  `SPEC › Option B: The writer core, in four milestones (Recommended)`
> ¶ _“Writing tools: comments and notes, research, links and backlinks, character and place c…”_
>
> If a writer does not use "@" for mentions, the tool should be able to fix that.

**§4 Recommendation**  `SPEC §4`
> ¶ _“Open questions: - [ ] Export without extra installs: DOCX from a TypeScript library and…”_
>
> Yes.
> English and Spanish or at least English but prepared for an easy and quick translation.
> Ok for now.

<!-- SPEC-NOTES-DATA
{"s-spec-1~728xj7":"About styles, Word has it or too easy or too complex. I'd focus on _what_ is something instead of _how_ it is shown. I mean, there should be the possibility to create new styles apart from existing ones. For example, you can very simply create a new style \"Sign\" and just center it and put it in uppercase. That should be enough to show it is different. Final version could have a new styles applied, so \"Sign\" could be reinterpreted and put into a rectangle. Then, styles are to differentiate the function of texts. They must be easy to create in a simple way and understood by theit function.","s-spec-1~728xj7~q":"Writers who plan as much as they write (novelists, short-story writers, and later scree…","s-spec-1":"Our format must be compatible with Word, for example, and use comments, some styles, etc.","s-spec-2":"Some of the parts should be specified (for example, design, CLI...). Whatever that is not clear or depends on opinion or need some work.","s-spec-option-a-core-first-thin-app-con":"If we show Markdown files, we can reuse or at least read some nacho-viewer code.","s-spec-option-b-the-writer-core-in-four~jz6axl":"We must see which commands exactly we need.","s-spec-option-b-the-writer-core-in-four~jz6axl~q":"Core + CLI + MCP: project format v1, index, commands (create, rename, move, link, comme…","s-spec-option-b-the-writer-core-in-four~1r7w1f0":"Review the design so that it accepts more modules.","s-spec-option-b-the-writer-core-in-four~1r7w1f0~q":"App shell + editor: binder with drag and drop, chapter editor, full view, word counts, …","s-spec-option-b-the-writer-core-in-four~q5mty5":"If a writer does not use \"@\" for mentions, the tool should be able to fix that.","s-spec-option-b-the-writer-core-in-four~q5mty5~q":"Writing tools: comments and notes, research, links and backlinks, character and place c…","s-spec-4~tznt3":"Yes.\nEnglish and Spanish or at least English but prepared for an easy and quick translation.\nOk for now.","s-spec-4~tznt3~q":"Open questions: - [ ] Export without extra installs: DOCX from a TypeScript library and…"}
-->