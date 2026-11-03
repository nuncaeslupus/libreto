# Libreto — requirements research (draft 2)

Input for `specify`. Covers decision D-8 of the Alter Ego backlog and feeds D-4 (file format), D-5 (app type) and D-6 (indexing).
Priorities use MoSCoW for the **first usable version** (M = must, S = should, C = could, W = won't for now).
Every requirement has a stable id `R-N`; ids are never renumbered.

## 0. Principles

- P-1 — A professional, standalone application: anyone can install it and start writing. No copy-pasting into AI chats, no uploading or emailing files.
- P-2 — Standards first. Where an accepted format or practice exists (Markdown, YAML front matter, JSON Schema, gettext/XLIFF, Graphviz DOT/GraphML, ink), use it; invent only what nothing covers.
- P-3 — Graphics are a view layer. Story, puzzles and world state are data that can be run and tested without any graphics.
- P-4 — Every step aims at the finished game: what Libreto stores must be what the game runs.

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
| Puzzle dependency charts (Ron Gilbert; Game Developer primer) | Design method | Goals as a DAG read backwards from the ending; layered layout; in/out-degree; layer width = parallelism; ancestor set = what the story may safely mention; Monte Carlo play-time estimates | A method, not a tool |
| ALAIF design doc (Ivan's own) | Event graph for a software-driven escape room | Typed events, AND dependencies, weak edges, immediate/deferred dilemmas, indivisible sets, hint chains, reactions, 12-step design pipeline (see §2 L) | Live-action parts (GM, actors, panic button) do not transfer |
| Detroit: Become Human | Game | Post-scene flowchart of the choices made and the ones missed | A game feature, not a tool |
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
- R-56 M — Play mode: walk the story/puzzle graph as a player, with inventory and known facts (see §2 N).
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
- R-68 M — Several views of the same data side by side (text, graph, timeline, cards); graphs and timelines are interactive: zoom, pan, select, follow links to the text.
- R-69 S — Visual style consistent with nacho-viewer (optional, I-30).
- R-70 S — UI in English first, translatable.
- R-71 C — Dark mode and themes.

### L. Event model (from ALAIF)
- R-72 M — Typed nodes. Proposed set: puzzle (a goal, named with a verb: "Get the key"), action (a step that is not a goal), interruption (the world or an NPC acts on the player), trigger (an immediate reaction), collectible (optional, has an availability window), hint, dilemma, decision, side quest, indivisible set.
- R-73 M — Dependencies are AND by default; OR is either an alternative inside one node ("tape or marker") or a branch through a dilemma. The graph is not a flowchart.
- R-74 M — Story variables: player state, decision/attitude variables (trust, courage…), counters; decisions set, add to or subtract from them; initial values can be set per playthrough.
- R-75 M — Immediate dilemmas (the player chooses now, with a default) and deferred dilemmas (a condition over variables picks the branch later, e.g. `trust > 3 and lied_to_police`).
- R-76 M — Branch pruning: choosing one option removes the unchosen branch up to the first node with a strong dependency outside it; weak (dashed) edges exist only for this.
- R-77 M — Indivisible sets: a nestable subgraph that behaves as one node and locks out everything else until finished; this is also the collapse unit of R-21.
- R-78 S — Hint chains: up to 3 levels (plus an optional comic level 4) attached to puzzles and actions, never to decisions; delivered in-world (an NPC line, Gómez's memory voice); usage recorded.
- R-79 S — Reactions: every node can carry side effects (line of dialogue, sound, music cue, animation id) to be filled in later by the game.
- R-80 S — Guided design pipeline from ALAIF: three-act plot → variables → puzzle graph → dilemmas → interruptions → side quests → indivisible sets → actions → hints → triggers → collectibles; Libreto shows which steps each chapter has completed.
- R-81 S — Checks from ALAIF: dialogue must not mention a puzzle that may not be solved yet (ancestor set); overlapping reactions on events that can fire together; branches of very different length; objects useless in a branch (red herrings); "key before the lock".
- R-82 W — ~~Post-play decision flowchart~~ (dropped: it was only a way to show the data; Ivan, 2026-11-03).
- R-97 S — A fixed visual vocabulary per node type (fill, border style, shade), as in ALAIF's legend, so a graph reads at a glance; weak edges dashed.
- R-98 S — Branch preview: pick an option of a dilemma and see the pruned graph (ALAIF p.76–77); dilemma nodes show the possible range of each variable at that point (p.87).
- R-83 C — Graph shape metrics: the "balloon" (narrow start and end, wide middle), maximum open puzzles, linearity per chapter.

### M. World over time
- R-84 M — Locations form a graph; each connection (door, street, phone line…) has a condition over story state, so the map changes with the plot ("the bridge is closed after the fire").
- R-85 M — Every object, character and exit has a state that can change; the map, the inventory and who is where can be shown at any point of a playthrough or timeline.
- R-86 S — Map view over time: pick a moment (or scrub the timeline) and see which places are reachable and what is in them.

### N. Headless skeleton runtime
- R-87 M — A minimal text runtime that runs the project data: rooms, objects, characters, verbs ("Key → Get"), inventory, variables, dialogue. No walking, no art, no animation.
- R-88 M — A dev console to inspect and change state (inventory, variables, flags, current node).
- R-89 M — Scripted playthroughs as automated tests: a list of player commands plus expected state, run without any UI (CI-friendly).
- R-90 S — Solvers on the same data: find every reachable ending, detect dead ends and soft-locks, estimate play time.
- R-91 S — The real game engine later reads the same data and the same rules; the skeleton is its reference implementation, not a throwaway.

### O. Fair puzzles and playtesting
- R-92 M — No moon logic: every puzzle lists the clues that make its solution reasonable, and a check fails when a clue is not in the puzzle's ancestor set (the player may not have seen it).
- R-93 M — Difficulty comes from harder thinking, never from obscurity or padding: flag puzzles with no clue, a single obscure clue, or many plausible-but-wrong actions in reach.
- R-94 S — Stuck-point prediction: for each state, count the open puzzles and the plausible actions available; many actions with no progress = likely stuck point.
- R-95 S — Play telemetry (skeleton runtime first, real game later): time per puzzle, wrong attempts, hints used, where players quit; aggregated into a report.
- R-96 S — AI review of telemetry and graph together: name the clues that are not obvious and suggest fixes, as reviewable proposals (R-49).

## 3. Decisions so far (Ivan, 2026-11-03)

- Format (D-4): Markdown + YAML front matter to start.
- App type (D-5): data model + CLI + MCP first; UI after.
- Indexing (D-6): stable anchors and a structured index first; explanation in §5 before building.
- v1 scope: the basics first.
- ink for dialogue, if it fits our needs once tried.
- Skeleton runtime: a separate library in the libreto repo, used by both Libreto and the game.
- Translations: gettext PO files with line ids.
- No embeddings; structured index + full-text search.

## 4. Open questions

1. **Graph model for branching plots** (needs a long talk): one graph with typed edges, or ALAIF's two levels (a decision graph whose nodes hold puzzle graphs)? ALAIF never tested its branching part, so this needs prototyping with real Alter Ego examples.

## 5. Indexing, in short

- **What it is:** a lookup built from the project so a tool or an AI finds the relevant pieces without reading everything.
- **Structured index (what we start with):** every entity and paragraph has a stable id (R-3); Libreto keeps tables like "where is character X mentioned", "which scenes reveal fact Y", "what depends on puzzle Z". It is exact, cheap, explainable, and updates when files change. literary-critic works this way.
- **Full-text search:** finds words and phrases (like grep, but ranked). Cheap and standard (e.g. SQLite FTS).
- **Embeddings / vector search (RAG):** each passage becomes a list of numbers that captures its meaning; similar meanings land close together, so "scenes where Gómez feels guilty" can be found without those words. Useful for fuzzy questions; costs a model, a store, and gives approximate answers.
- **Plan:** structured index + full-text search first; add embeddings only if real questions go unanswered.

## Sources

- [articy:draft X — what's new](https://www.articy.com/help/adx/WhatsNew.html), [macOS launch](https://www.businesswire.com/news/home/20250403759310/de)
- [Arcweave — AI assistant](https://arcweave.com/whats-new/articles/ai-credits-usage-tracking-and-assistant-improvements), [Godot plugin](https://godotengine.org/asset-library/asset/1601)
- [Puzzle dependency graph primer (Game Developer)](https://www.gamedeveloper.com/design/puzzle-dependency-graph-primer); ALAIF design document (Ivan, private)
- Ron Gilbert's puzzle dependency charts (Grumpy Gamer); public docs of Scrivener, Twine, ink, Yarn Spinner, Fountain, Plottr, Aeon Timeline.
