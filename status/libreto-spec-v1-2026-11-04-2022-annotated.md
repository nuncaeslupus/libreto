# Libreto — Specification (annotated edition)

> Generated 2026-11-04. This is the document with a **note slot** after every section that has text of its own. Read it in any Markdown app. To annotate, replace the `_(your notes…)_` placeholder under any section. When done, send the file back — notes are acted on.

---

# Specification

## Preamble & scope

**Date**: 2026-11-04
**Ticket / PR**: design agenda topic 5
**Author**: Claude, with Ivan
**Revision**: 1
**Status**: draft
**Revision log**:
- r1 — first draft, from design topics 1–4 (`docs/design/`) and `docs/research/requirements.md`

<!-- -->

> **✎ Notes** · `SPEC · intro`
> _(your notes here — replace this line)_

## §1 Problem statement

Writers who plan as much as they write (novelists, short-story writers, and later screenwriters, journalists, game writers) split their work across a word processor, scattered notes and, at best, Scrivener, which has no Linux version, no AI and no structure beyond the binder. Word's revisions are hard to read, notes drift away from the text they are about, and an AI can only help through copy and paste. Libreto v1 is a desktop **writer's tool** that feels like a word processor (P-5) for non-technical users (P-6): a binder of chapters, a full view of the whole text, comments that stay attached to their paragraph, notes, research, links with backlinks, character and place cards, snapshots, export to DOCX and PDF, and Claude working through Libreto's own commands with every change shown clearly before it is accepted. The files stay plain Markdown in one folder, safe in any backup folder (`docs/design/storage.md`). Game tools (puzzle graphs, ink, translations: `docs/design/node-model.md`) come after v1, as a module on the same core; Alter Ego is their first user.

**Success criteria (measurable)**:

- [ ] `open_project_s <= 3` for a 150,000-word novel in 40 chapters on a 2020-era laptop; `keystroke_to_paint_p95_ms <= 50` in the full view of that project.
- [ ] `bytes_changed_on_save_without_edit == 0` across the test corpus (round-trip is lossless, R-1).
- [ ] `corrupted_files == 0` after 1,000 forced kills during save, and after syncing the project through a cloud-folder client while editing (R-107).
- [ ] `comment_anchor_survival == 100%` on the anchor test suite: comments stay on their paragraph through edits around it, chapter reorders and full-view edits (R-101).
- [ ] A rename asked of Claude Desktop through "Connect Claude" updates every mention, link and card, is shown as one proposal with a plain summary and side-by-side before/after, and is undone by one snapshot restore (R-104, app-type §5). Judged by an end-to-end test.
- [ ] Exported DOCX opens in Word and LibreOffice with headings, emphasis and (when chosen) comments intact; PDF matches the full view's text. Judged on the test corpus.
- [ ] `core_line_coverage >= 0.80`; every command has a CLI and an MCP test.
- [ ] Three writers who never saw Libreto create a project, write and reorder chapters, comment, link a character, take and restore a snapshot, and export to DOCX without help or reading a manual. Judged by Ivan watching the sessions.
- [ ] Linux package (AppImage and .deb) installs and runs on Ubuntu 24.04 and Fedora 41; download `<= 150 MB`.

<!-- -->

> **✎ Notes** · `SPEC §1`
> _(your notes here — replace this line)_

## §2 Systems & Impact

| System | Type | Role | Needs changes? | Impact | Severity |
|--------|------|------|----------------|--------|----------|
| Core library (TypeScript) | Primary | Project files, index, commands, checks, snapshots, export | Yes, new | Every other part depends on its command API | High |
| Desktop app (Electron + ProseMirror) | UI | Binder, editor, full view, panels, workspaces, proposal review | Yes, new | What the writer sees; usability decides adoption | High |
| CLI | Dependent | Same commands from a terminal | Yes, new | Scripts, tests, power users | Low |
| MCP server | Dependent | Same commands as tools for Claude Desktop / Claude Code | Yes, new | The only AI path in v1 ("Connect Claude") | High |
| Project folder | Shared resource | Markdown + YAML files (`storage.md`) | Yes, format v1 | Format must stay readable and migratable | High |
| Index in the OS cache folder | Shared resource | Search, backlinks, mentions | Yes, new | Rebuilt from files; never synced | Low |
| Claude Desktop / Claude Code | External | Chat with the writer's own subscription | No (configured by Libreto) | Depends on Anthropic's MCP support | Med |
| Packaging and CI | Infrastructure | Linux builds, tests, releases | Yes, new | Windows and macOS builds after v1 | Med |

<!-- -->

> **✎ Notes** · `SPEC §2`
> _(your notes here — replace this line)_

## §3 Options

### Option A: Core first, thin app (Conservative)

- **Description**: build the core, CLI and MCP server; the app is a single-document Markdown editor with a binder; comments, full view, cards and proposal review later.
- **Scope**: core, CLI, MCP, minimal app.
- **Effort**: Medium
- **Tradeoffs**: lowest risk and early AI use through Claude Desktop, but writers get little that a Markdown editor does not already give; the word-processor feel, the real goal, is postponed.
- **Compatibility**: same file format; nothing thrown away.

<!-- -->

> **✎ Notes** · `SPEC › Option A: Core first, thin app (Conservative)`
> _(your notes here — replace this line)_

### Option B: The writer core, in four milestones (Recommended)

- **Description**: everything in §1, delivered in order, each milestone usable on its own:
  1. **Core + CLI + MCP**: project format v1, index, commands (create, rename, move, link, comment, snapshot, export), checks.
  2. **App shell + editor**: binder with drag and drop, chapter editor, full view, word counts, Write workspace.
  3. **Writing tools**: comments and notes, research, links and backlinks, character and place cards with `@mentions`, snapshots and compare, Plan and Review workspaces.
  4. **AI + export + release**: "Connect Claude", proposal review UI, DOCX and PDF export, Linux packages.
- **Scope**: core, CLI, MCP, app, packaging.
- **Effort**: Large
- **Tradeoffs**: the full promise of P-5 in v1; more to build before the first release, mitigated by milestones 1–2 being usable early (Ivan can write in Libreto from milestone 2).
- **Compatibility**: game module, timeline and maps plug in later as modules (`app-type.md` §4).

<!-- -->

> **✎ Notes** · `SPEC › Option B: The writer core, in four milestones (Recommended)`
> _(your notes here — replace this line)_

### Option C: Writer core plus World tools

- **Description**: Option B plus timeline, maps and the optional in-app chat with an API key.
- **Scope**: B + World module + API-key chat.
- **Effort**: Large+
- **Tradeoffs**: closer to Alter Ego's needs, but delays v1 and adds features a first-time writer does not need.
- **Compatibility**: same as B.

<!-- -->

> **✎ Notes** · `SPEC › Option C: Writer core plus World tools`
> _(your notes here — replace this line)_

### Comparison

| | Option A | Option B | Option C |
|---|---|---|---|
| Effort | Medium | Large | Large+ |
| Risk | Low | Medium | High |
| Completeness | Low: a Markdown editor | The writer core (P-5) | Writer core + World |
| Compatibility | Full | Full | Full |
| Maintenance | Low | Medium | High |

<!-- -->

> **✎ Notes** · `SPEC › Comparison`
> _(your notes here — replace this line)_

## §4 Recommendation

**Recommended option**: Option B — it delivers the writer's tool Ivan described, in milestones that are each usable, without pulling World or Game tools into v1.

**Immediate next action**: once this spec is approved, run `design` to write `status/plan.md`: tasks per milestone, each with its gate from §1, starting with project format v1 and the command API.

**Out of v1** (planned as modules or later versions): timeline, maps, puzzle graphs and the whole Game module (node model, ink, PO, playthrough tests), sync between computers, in-app chat with an API key, in-app Claude sign-in (pending Anthropic approval), EPUB, Windows and macOS builds, project types other than novel and short story.

**Open questions**:
- [ ] Export without extra installs: DOCX from a TypeScript library and PDF from Electron's own renderer (proposed), rather than requiring Pandoc on the writer's computer?
- [ ] App language in v1: English only (R-70), or English and Spanish from the start?
- [ ] Character and place cards in v1: name, picture, description, notes and mentions only (proposed); no relationship maps yet?

**Decisions log**:

| ID | Decision | Status | Date |
|----|----------|--------|------|
| D-1 | Node and data model for the Game module (`node-model.md`) | agreed | 2026-11-03 |
| D-2 | Writer's tool first; game tools are modules (P-5); non-technical users (P-6) | agreed | 2026-11-04 |
| D-3 | Project = folder of Markdown + YAML under a word-processor UI; index in the OS cache folder | agreed | 2026-11-04 |
| D-4 | Writers type names, never ids; renames are one command | agreed | 2026-11-04 |
| D-5 | Comments beside the text, anchored to paragraphs; snapshots instead of tracked changes | agreed | 2026-11-04 |
| D-6 | Sync between computers deferred; v1 is backup-folder safe | agreed | 2026-11-04 |
| D-7 | Build order: writer core first, then Game module; project types are templates (R-109) | agreed | 2026-11-04 |
| D-8 | Electron + TypeScript; ProseMirror editor; adaptive workspaces | agreed | 2026-11-04 |
| D-9 | AI changes as plain summary + side-by-side before/after, accepted one by one | agreed | 2026-11-04 |
| D-10 | AI in v1 through "Connect Claude" (MCP in Claude Desktop, the writer's subscription); ask Anthropic for in-app sign-in | agreed | 2026-11-04 |
| D-11 | Alter Ego's script is written in Spanish | agreed | 2026-11-03 |


> Sections 5–6 (contracts, risks) are appended by `design`.

<!-- -->

> **✎ Notes** · `SPEC §4`
> _(your notes here — replace this line)_

