# Libreto — storage on disk (draft 0)

Topic 2 of the Libreto design agenda. Status: **for discussion**; nothing here is built yet.
Builds on `docs/design/node-model.md` (layout and schema v0 in §6b); does not repeat it.
Inputs: `docs/research/requirements.md` R-1…R-7, R-11, R-43, R-48, R-50, R-59, R-66; principles P-1, P-2.

## 1. Rules

1. **The folder is the truth** (R-1). Every fact lives in a plain-text file a person can open, diff and merge. Anything else Libreto keeps (index, search tables, window layout) is derived and lives outside the project (§7).
2. **Standards first** (P-2): YAML, Markdown with YAML front matter, ink, gettext PO, JSON, JSON Schema. Libreto invents only the conventions on top (ids, file kinds).
3. **Hand edits are first class.** A file written by a text editor, by Claude, or by the app is the same file. Libreto reloads on external change and never needs its own "import".
4. **Stable diffs.** Libreto writes deterministically (key order, quoting, indentation, line endings) and keeps comments and the author's order when it rewrites a file. Saving without changes changes nothing.
5. **One thing per file** (R-2): one entity, one scene graph, one dialogue script per scene. Small files make sync conflicts rare and local (see `sync.md`).

## 2. Project layout (extends §6b)

```text
my-game/
  libreto.yaml            project: name, schema version, languages, timelines
  variables.yaml          story variables
  facts.yaml              facts and mysteries
  knowers.yaml            minds that can know facts
  scenes/<scene>.yaml     scene header + nodes
  entities/<kind>/<id>.md items, characters, locations… (front matter + notes)
  script/<scene>.ink      dialogue and every sequenced player-facing line
  script/_variables.ink   generated from variables.yaml (do not edit)
  locale/<lang>.po        translations
  tests/<name>.yaml       scripted playthroughs
  views/<view>.json       graph/timeline positions and view settings
  research/               notes, images, PDFs, audio, links (R-43)
  context/                AI context: style guide, tone, rules (R-50)
  AGENTS.md               points agents at context/ and the CLI/MCP (R-48)
```

- A project is any folder with a `libreto.yaml`. It does **not** have to be the root of a git repository: Alter Ego can keep its project in `alter-ego/story/`.
- Folder names under `entities/` are the entity kinds (`items`, `characters`, `locations`, more can be added in `libreto.yaml`). File name = id, so the id is visible in any file browser.
- Scenes may be grouped in subfolders (`scenes/ch1/bar_pelayo.yaml`); folders are for people, ids stay global.

## 3. Formats

| Kind | Format | Notes |
|---|---|---|
| Project, variables, facts, knowers, scenes, tests | YAML 1.2 | Restricted subset: no anchors, aliases or tags; one document per file. Strings that YAML 1.1 would misread (`no`, `on`, `1:30`) are written quoted. |
| Entities, research notes, context | Markdown (CommonMark + GFM tables) with YAML front matter between `---` lines | Front matter = structured fields; body = free text. Readable on GitHub as is. |
| Dialogue | ink | §5 |
| Translations | gettext PO | §6 |
| Views | JSON | Machine-written, never hand-edited; pretty-printed, sorted keys, one node per line so diffs stay small. |

All text files: UTF-8 without BOM, LF line endings, trailing newline. Libreto writes them atomically (temporary file in the same folder, then rename), so a crash or a sync client never sees half a file.

**Why views are separate.** Node positions change every time a graph is tidied; keeping them out of `scenes/*.yaml` keeps story diffs about the story. A missing or stale view file is harmless: Libreto lays the graph out again.

## 4. Ids

**Grammar.** `[a-z][a-z0-9_]*`, at most 48 characters, English, readable: `talk_rosa`, `badge`, `bar_pelayo`. A dilemma option is addressed as `dilemma.option`.

**One namespace.** Nodes, entities, scenes, facts, knowers, variables and line ids share one project-wide namespace, so a reference like `requires: [badge]` or `learn alter_ego badge_owner` can never be ambiguous. The schema check reports duplicates with both file locations.

**Line ids.** Every player-facing line has one (R-3, R-59). Lines a node points at get readable ids written by the author (`rosa_who_truth`); every other line gets an automatic id the first time Libreto saves the file: `<scene>_<4 random base-32 chars>` (`bar_pelayo_k7q2`). Random, not numbered, so two machines adding lines at the same time never collide, and reordering never renumbers.

**Paragraph anchors in Markdown** (R-3). Only added when something links to a paragraph (a fact's evidence, a consistency finding). Proposed form, the Obsidian block-id convention, at the end of the paragraph:

```markdown
Rosa has run the bar since her father died in 1979. ^rosa_father
```

Alternative: an invisible HTML comment, `<!-- ^rosa_father -->`. See question 1.

**Renames.** `libreto rename <old> <new>` (and the app) rewrites every reference, including ink tags and PO contexts, in one change, using the index. Ids are never reused for something else; the check warns when a deleted id reappears with another kind.

## 5. ink for dialogue

ink is kept if the Bar Pelayo scene can be written in it without workarounds (fit test before the v1 spec). Conventions:

- One `script/<scene>.ink` per scene. A knot per node that talks, named after the node: `=== talk_rosa ===`.
- Every line ends with its id tag: `Who's asking? #id:rosa_who`. Libreto adds missing ones (§4).
- Speaker = character id before a colon: `rosa: Who's asking?`. Lines with no speaker are narration or player-facing text (look-at descriptions, hints).
- Variables are declared once in `variables.yaml`; Libreto generates `script/_variables.ink` (`VAR rosa_trust = 0`) and each scene file `INCLUDE`s it, so the ink compiles in Inky and in any ink runtime unchanged.
- Conditions in ink and in node `when:` use the same expression syntax (node-model §4), so one parser checks both.
- Labels that are not sequenced lines (an item's name in the inventory) live in entity front matter and are marked translatable in the schema; their id is `<entity>.<field>` (`badge.name`).

## 6. Translations: PO

- `libreto.yaml` declares `source_language` and `languages`. The script is written in the source language; every other language is a translation.
- Libreto extracts all player-facing strings into `locale/<lang>.po`, one entry per line:

```po
#. speaker: rosa · node: talk_rosa · scene: bar_pelayo
#: script/bar_pelayo.ink:12
msgctxt "rosa_who"
msgid "Who's asking?"
msgstr "¿Quién lo pregunta?"
```

- `msgctxt` = line id (identity), `msgid` = source text (what translators see). When the source line changes, the entry turns *fuzzy*, the standard gettext signal that it needs review. Works with Poedit, Weblate, Lokalise and `msgmerge` without anything Libreto-specific.
- The `.pot` template is generated on demand and not committed: it is fully derived from `script/` and entities.

## 7. Schemas and derived data

- **JSON Schema (2020-12)** for every file kind (YAML and front matter are validated as JSON data), shipped inside Libreto and published so editors (VS Code YAML extension) validate as you type. Errors point at file, line and field (R-7).
- `libreto.yaml` has `schema: 1`. A newer Libreto opening an older project offers `libreto migrate`, which first takes a snapshot (R-6) and changes files in one reviewable step. An older Libreto refuses to write a newer project.
- Unknown fields are errors (typos get caught), except fields starting with `x_`, kept untouched for game-specific data.
- **Derived data lives outside the project**, in the OS cache folder (`~/.cache/libreto/<project id>/` on Linux): the index (R-48 "where is X mentioned"), search tables, compiled ink, undo history, window layout. It can be a database because it is not the truth; deleting it only costs a rebuild. Keeping it outside means sync never carries it (see `sync.md`).

## 8. Research and binary files (R-43)

- `research/` holds anything: Markdown notes (with front matter, linkable like entities), images, PDFs, audio.
- Any file links to research by relative path; Libreto tracks those links in the index and fixes them on move.
- Large binaries stay in git by default; Git LFS is optional and only changes how they are stored, not how Libreto sees them.

## 9. Decisions and open questions

Proposed (to confirm):

1. Layout in §2, project folder may sit inside a bigger repo.
2. One id namespace; readable author ids, random suffix for automatic line ids.
3. ink conventions in §5; generated `_variables.ink`.
4. PO with `msgctxt` = line id, `msgid` = source text.
5. Derived data outside the project folder.

Open:

1. **Paragraph anchors**: Obsidian-style `^id` (visible, works in Obsidian) or HTML comment (invisible everywhere)?
2. **Source language for Alter Ego**: write the script in English and translate to Spanish, or write in Spanish and translate to English? Libreto supports both; this only sets the project default.
3. **Views**: commit `views/*.json` (same graph layout on every machine) or keep them local (less noise in history)? Proposal: commit.
