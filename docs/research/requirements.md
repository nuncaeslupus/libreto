# Libreto — requirements research (draft 1)

Input for `specify`. Covers decision D-8 of the Alter Ego backlog and feeds D-4 (file format), D-5 (app type) and D-6 (indexing).
Priorities use MoSCoW for the **first usable version** (M = must, S = should, C = could, W = won't for now).
Every requirement has a stable id `R-N`; ids are never renumbered.

## 1. Benchmark

| Tool | What it is | Take | Gap for us |
|---|---|---|---|
| Scrivener | Long-form writing studio | Binder tree, corkboard, research folder, snapshots, compile to many formats, labels/status colors, per-document notes and metadata | No graphs, no branching, no game export, no AI; Linux unsupported |
| articy:draft X | Pro game narrative database (Windows, macOS since 2025) | Flow graphs nested by level, entities/templates, global variables and conditions, simulation mode, localization, engine exports | Heavy, proprietary, closed format, no Linux |
| Arcweave | Cloud narrative design board | Boards + components, play mode, JSON export and engine plugins (Godot, Unity), built-in AI assistant | Cloud-only and paid; data lives on their servers |
| Twine | Hypertext story editor | Passages as nodes, instant playtest | No timeline, no characters, weak for large projects |
| ink / inky | Narrative scripting language | Plain-text, diffable, state and variables, engine runtime | Text-only; no visual planning |
| Yarn Spinner | Dialogue language for engines | Dialogue nodes, line ids, localization string tables | Dialogue only |
| Fountain | Plain-text screenplay markup | Human-readable script format | No structure beyond the script |
| Plottr | Visual plot timelines | Grid of plotlines × chapters, series bible | No logic, no graphs |
| Aeon Timeline | Timeline for writers | Story time vs narrative order, character participation, dependencies | No script writing; proprietary |
| Puzzle dependency charts (Ron Gilbert) | Design method | Goals/actions/items as a DAG read backwards from the ending | A method, not a tool |
| literary-critic (own) | LLM manuscript analysis | Stable anchors, Codex knowledge base, evidence-backed checks | Analysis, not authoring |
| drawspec (own) | JSON → diagrams | LLM-writable graphs without coordinates | Render only, not interactive |

## 2. Requirements

### A. Project and files
- R-1 M — A project is a folder of plain-text files that git can diff and merge; no opaque database is the source of truth.
- R-2 M — One file per entity (scene, puzzle, character, item, location, timeline event), with structured metadata plus free text.
- R-3 M — Stable ids for every entity and for paragraphs/lines inside text, surviving edits and reorders (literary-critic anchors).
- R-4 M — Runs on Linux; Windows and macOS later with the same files.
- R-5 M — Continue work on another computer by syncing the folder (git first; any file sync must also work).
- R-6 S — Snapshots before big edits, with diff and restore (git underneath, friendly UI on top).
- R-7 S — Schema for all files, validated on save, errors pointing at the exact field.
- R-8 C — Entity templates, editable per project.
- R-9 W — Real-time multi-user editing.

### B. Writing
- R-10 M — Editor for scenes with screenplay elements (action, dialogue, parenthetical, transitions), Fountain-compatible where possible.
- R-11 M — Dialogue lines carry speaker, line id and optional conditions, ready for localization and voice.
- R-12 M — Binder/outline tree to order and nest acts, chapters, scenes.
- R-13 S — Per-entity synopsis, notes and status (idea / draft / revised / final).
- R-14 S — Labels and colors defined per project (timeline, protagonist, tone…).
- R-15 S — Inline comments and TODOs addressable by humans and AI.
- R-16 S — Word counts and targets per scene, chapter, project.
- R-17 C — Humor/tone tags to review the balance of jokes per section.

### C. Puzzles and dependency graphs
- R-18 M — Puzzle dependency graph: nodes are goals, actions, items, information and events; edges are "requires".
- R-19 M — Graph and text are the same data: editing one updates the other.
- R-20 M — Detect cycles, unreachable nodes, dead ends and unused items.
- R-21 M — Collapse a subgraph (a location, a chapter) into one node and expand it again.
- R-22 M — Frontier view: what is solvable at any point given what the player has.
- R-23 S — Group, filter and color nodes by timeline, character, location or chapter.
- R-24 S — Mark which protagonist can perform each action (DOTT style), and items/info passed between timelines.
- R-25 S — Measure graph width (parallel puzzles open) and depth, to tune difficulty and avoid bottlenecks.
- R-26 S — Render graphs with drawspec; export SVG/PNG.
- R-27 C — Hint levels attached to each puzzle node.

### D. Time and structure
- R-28 M — Several timelines (e.g. "creating the mystery" and "solving it"), each with its own chronology.
- R-29 M — Story time (when it happened) vs play order (when the player sees it); flashbacks link both.
- R-30 M — Timeline view where each event links to the scenes that show or explain it.
- R-31 M — Cross-timeline links and constraints (a past action changes the present) shown visually; the combined view may not be a DAG and needs its own representation.
- R-32 S — Estimated play time per scene/puzzle and a pacing curve per chapter and timeline.
- R-33 S — Character × location × time grid, with clash detection.
- R-34 S — Multiple protagonists: switch points and what each one can carry or know.
- R-35 C — In-world calendar and time of day (night, rain…).

### E. Knowledge and coherence
- R-36 M — Knowledge tracking: for each fact, who knows it and since when (each character and the player), derived from scenes and puzzles.
- R-37 M — Warn when a character or the player uses a fact before learning it.
- R-38 M — Codex / story bible: characters, places, items, facts, with references back to the text.
- R-39 S — Gómez-before and Gómez-after (memory erased) as separate knowledge holders.
- R-40 S — Consistency checks (names, descriptions, facts) across the project, with evidence links.
- R-41 S — Clue chains: every revelation lists the clues that lead to it and where the player finds them.
- R-42 C — Spoiler map: which scenes reveal what, to order reveals.

### F. Research and planning
- R-43 M — Research folder: notes, images, links, PDFs, audio, linkable from any entity.
- R-44 M — Corkboard / card view of any set of entities, reorderable.
- R-45 S — Mood boards for locations and characters.
- R-46 S — Tasks attached to entities (inside Libreto or linked to claude-arsenal).
- R-47 C — Map of locations and their connections.

### G. AI integration
- R-48 M — An AI agent (Claude) can read and change the project through files and/or an MCP server, without the app open.
- R-49 M — Every AI change is reviewable: proposed as a diff or suggestion, accepted per change (doc-control style).
- R-50 M — The project carries its own AI context (style guide, tone, rules) in plain files.
- R-51 S — Search across the project; evaluate whether anchors + structured index suffice before adding embeddings/RAG (D-6).
- R-52 S — AI checks on demand: coherence, pacing, knowledge leaks, puzzle fairness, humor density.
- R-53 S — AI can render and read the graphs (drawspec) to reason about structure.
- R-54 C — AI playtest: an agent walks the puzzle graph and reports where it got stuck.
- R-55 W — Bundled model or paid AI service inside the app.

### H. Simulation and play
- R-56 S — Play mode: walk the story/puzzle graph as a player, with inventory and known facts.
- R-57 S — Variables and conditions (flags, inventory) evaluated in play mode.
- R-58 C — Coverage: nodes/lines a set of play-throughs never reached.

### I. Localization
- R-59 M — Every player-facing string has an id and lives apart from logic; translations are separate files.
- R-60 S — Translation status per language; Spanish and English first.
- R-61 C — Translation tables export/import (CSV, XLIFF, PO).

### J. Export
- R-62 M — Export the whole project as documented JSON for building the game.
- R-63 S — Export the script as Fountain/PDF/Markdown/DOCX for reading and review.
- R-64 S — Export graphs and timelines as images.
- R-65 C — Engine-specific exporters (ink, Yarn, plugins) once the engine is chosen.

### K. UI and platform
- R-66 M — Works offline; no account needed.
- R-67 M — Usable by a non-technical writer; keyboard-friendly.
- R-68 S — Several views of the same data side by side (text, graph, timeline, cards).
- R-69 S — Visual style consistent with nacho-viewer (optional, I-30).
- R-70 S — UI in English first, translatable.
- R-71 C — Dark mode and themes.

## 3. Open questions

1. **Format (D-4):** Markdown + YAML front matter per entity, or something stricter (JSON/TOML/custom)? Proposal: Markdown + front matter for prose entities, JSON for graphs, all schema-validated.
2. **App type (D-5):** local web app, desktop shell (Tauri/Electron), or CLI + MCP first with UI later? Proposal: data model + CLI/MCP first, UI second.
3. **Indexing (D-6):** start with anchors + structured index; add embeddings only if search falls short.
4. **Graph model:** one graph with typed edges (requires, happens-before, reveals, flashback-to) or separate graphs per concern?
5. **Scope of v1:** the smallest Libreto that lets us start writing Alter Ego. Proposal: R-1–R-3, R-10–R-12, R-18–R-22, R-28–R-30, R-36–R-38, R-48–R-50.

## Sources

- [articy:draft X — what's new](https://www.articy.com/help/adx/WhatsNew.html), [macOS launch](https://www.businesswire.com/news/home/20250403759310/de)
- [Arcweave — AI assistant](https://arcweave.com/whats-new/articles/ai-credits-usage-tracking-and-assistant-improvements), [Godot plugin](https://godotengine.org/asset-library/asset/1601)
- Ron Gilbert's puzzle dependency charts (Grumpy Gamer); public docs of Scrivener, Twine, ink, Yarn Spinner, Fountain, Plottr, Aeon Timeline.
