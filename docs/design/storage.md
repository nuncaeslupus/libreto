# Libreto — storage on disk (draft 1)

Topic 2 of the Libreto design agenda. Status: **for discussion**; nothing here is built yet.
Draft 1 follows review notes (2026-11-04): Libreto is a **writer's tool first** (P-5), for non-technical users (P-6); game tools are modules.
Builds on `docs/design/node-model.md` (game module) and `docs/research/requirements.md` §2 A, B, P.

## 1. What the writer sees, and what is on disk

The writer never sees files. Libreto looks and feels like a word processor: a binder of chapters on the left, the text in the middle, notes and comments on the right, a full view that reads the whole book as one text, and export to Word or PDF at any time (R-100, R-103).

Underneath, a project is **one folder of plain-text files** (Markdown with a small header, plus a few YAML lists). Why not a Word-like single file:

- **The work outlives the app.** Any editor opens Markdown; nothing is locked in a format only Libreto reads.
- **The AI can read and change it** precisely (R-48, R-104). A `.docx` is a zip of XML that AI and tools handle badly.
- **Backups stay small and safe**: changing one chapter rewrites one small file, not the whole book (R-107).
- **Word is still one click away**: export to DOCX/PDF, with or without comments and notes.

On macOS the folder can show as a single document icon (a package, like Scrivener's `.scriv`); on Linux and Windows it is a folder named `My novel.libreto`.

## 2. Rules

1. **The folder is the truth** (R-1). Everything the writer made lives in it; everything Libreto can rebuild lives outside it (§9).
2. **Standards first** (P-2): Markdown, YAML, and only in game projects ink and PO.
3. **Hand and AI edits are first class.** A file changed by the AI, by a text editor or by the app is the same file; Libreto reloads on change.
4. **Stable files.** Libreto writes deterministically and atomically (temporary file, then rename), keeps comments and the author's order, and saving without changes changes nothing.
5. **Small files.** One chapter, one entity, one scene graph per file.

## 3. Modules decide what exists

A project type (novel, short story, screenplay, game) switches modules on; any module can be switched on or off later (R-99). A module that is off has no files and no menus.

| Module | On for | Adds |
|---|---|---|
| **Core** | everything | Manuscript, binder, comments, notes, research, links, snapshots, export |
| **World** | novel (optional), game | Characters, places, items as entity cards; timeline; maps |
| **Game** | game | Puzzle/event graphs (node model), variables, facts and knowers, dialogue scripting (ink), translations (PO), playthrough tests |

## 4. Layout

```text
My novel.libreto/
  libreto.yaml                 project: title, type, modules on, language, schema version
  binder.yaml                  order and nesting of manuscript documents
  manuscript/<id>.md           chapters and scenes: header + text
  notes/<id>.md                free notes, linkable from anywhere
  comments/<doc id>.yaml       comment threads anchored to paragraphs (§6)
  research/                    images, PDFs, audio, web clips (R-43)
  context/                     AI context: style guide, tone, rules (R-50)
  history/                     snapshots (§10)
  # World module
  entities/<kind>/<id>.md      characters, places, items…
  timeline.yaml                story events and when they happen
  # Game module (node-model.md §6b)
  variables.yaml  facts.yaml  knowers.yaml
  scenes/<id>.yaml  script/<id>.ink  locale/<lang>.po  tests/<name>.yaml
  views/<view>.json            graph and map positions (committed: same layout everywhere)
```

- **Moving chapter 3 after chapter 4** changes only `binder.yaml`; file names never carry numbers, so nothing is renamed (R-100). The move then runs the checks it may break: facts used before they are introduced, timeline order (R-106).
- A manuscript document's header holds title, status (idea / draft / revised / final), synopsis, and optional point of view and story time.
- A project can sit inside a bigger folder or repository (for example a game repository's `story/` folder).

## 5. References and ids

Writers never type ids (P-6). They type names: `@Lena` or `[[Blue Lamp]]` autocompletes to the entity, and Libreto stores the id. The AI can create characters, places and links from a plain description before a word of the book is written (R-105).

Under the hood, for the AI and pro users:

- **Ids** are made from the name (`lena`, `blue_lamp`): `[a-z][a-z0-9_]*`, ≤ 48 chars, one project-wide namespace so no reference is ambiguous.
- **Paragraph anchors** are added only when something points at a paragraph (a comment, a link, a definition), as an invisible HTML comment at its end: `… died in 1979. <!-- ^lena_father -->`.
- **Everything is linkable**: document, paragraph, entity, note, research file, comment; every target shows its backlinks. A term can link to its first appearance or definition, as in a glossary (R-102).
- **Renames are one command.** "Rename Lena to Lenore" is `libreto rename lena lenario --name Lenore`: it changes the name in the text, the id, and every reference. The app, the CLI, the MCP server and the in-app AI chat all call the same command (R-104).

## 6. Comments and notes (R-101)

- Comments live **beside** the text, not inside it (`comments/<doc id>.yaml`), anchored to a paragraph plus the quoted words. The text file stays clean; a comment survives edits around it and moves with its paragraph when chapters are reordered.
- A comment has author (person or AI), date, thread replies and a resolved flag. AI suggestions are comments with a proposed change, accepted one by one (R-49).
- Notes are full documents (`notes/`) for longer thinking; any comment can link to a note and vice versa.
- Revision history is snapshots (§10), not tracked changes: compare any two versions of a chapter side by side.

## 7. Dialogue (Game module only)

Novels write dialogue as prose; nothing changes for them. In a game project the writer writes dialogue **screenplay style**, the way a script reads:

```text
LENA
Who's asking?

KIT
* A friend of Vega.
* Nobody you know.
```

Libreto stores it as ink underneath (`script/<scene>.ink`, each line tagged with an id), so it runs in the skeleton runtime and in the game. Choices, conditions and variables are added from the editor; the ink is visible only in the data view. ink stays if the Blue Lamp scene works this way (fit test before the v1 spec).

## 8. Translations (Game module only)

- Script written in the project language; other languages are translations in gettext PO, one entry per line id (`msgctxt` = id, `msgid` = source text), so changed lines are flagged for review and standard tools (Poedit, Weblate) work.
- Novels are translated as whole texts, outside Libreto's scope for now.

## 9. Checks and derived data

- Every file kind has a JSON Schema; errors point at the field (R-7). `libreto.yaml` carries a schema version; a newer Libreto migrates older projects after taking a snapshot.
- **The index lives outside the project**, in the computer's cache folder (`~/.cache/libreto/` on Linux, the equivalents on Windows and macOS). It is a database (search, backlinks, "where is Lena mentioned"), and a backup client copying a database while it changes can corrupt it. Since the index is rebuilt from the files in seconds, keeping it out of the backed-up folder costs nothing and removes that risk.
- Pro users can open a read-only data view of any element (R-108); changing data by hand is normally left to the AI.

## 10. Backup and history

- **Backup** (R-107): put the project in any cloud folder (Google Drive, OneDrive, Dropbox, Syncplicity). Atomic writes, small files and no database inside make this safe.
- **Snapshots**: automatic before risky operations (migration, bulk rename, reorders, accepting AI changes) and on demand. Each is a new, never-modified file in `history/`, so backup clients only ever add files; restore or compare from the app. No git and no configuration (P-6).
- **Sync between computers** is deferred (see `sync.md`); nothing here blocks adding it.

## 11. Decisions and open questions

Decided (decided 2026-11-03 / 04):

1. Writer's tool first; game tools are modules (P-5). Non-technical users (P-6).
2. Graph and map layouts (`views/`) are part of the project.
3. Sync deferred; v1 only has to be backup-safe.
4. **Build order: the writer core first** (plus the World module's characters and chapters tooling), then the Game module. Other kinds of text (paper, article, newspaper, screenplay) are added as project types when needed, so the core must not assume a novel: a project type is a template (binder skeleton, header fields, export style) over the same files, and kind-specific needs (citations for a paper, columns for a newspaper) come as modules.

Proposed (to confirm): folder-of-files under a word-processor UI (§1), layout (§4), names not ids for writers (§5), comments beside the text (§6), screenplay-style dialogue stored as ink (§7), index in the cache folder (§9), snapshots as files (§10).
