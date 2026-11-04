# Libreto — app type (draft 0)

Topic 4 of the Libreto design agenda. Status: **for discussion**; nothing here is built yet.
Builds on `storage.md` (writer core first, modules, non-technical users) and requirements §2 G, K, P.

## 1. What the app must be

- A desktop app installed like any other, on Linux first, then Windows and macOS with the same project folders (R-4, P-1). Works offline, no account (R-66).
- Feels like a word processor (P-5): binder, editor, full view, comments panel, export.
- One **command layer** that does every change (rename, move chapter, add comment, create character…). The UI, the CLI, the MCP server and the in-app AI chat all call it, so anything a person can do, the AI can do, and the other way round (R-48, R-102).

## 2. Shape

![One core, four ways in](diagrams/app-type-1.svg) <!-- drawspec-render -->

<details><summary>Diagram source</summary>

```drawspec
{"version": 1, "kind": "flow", "title": "One core, four ways in",
 "nodes": [{"id": "ui", "text": "Desktop app UI: binder, editor, panels", "role": "step"},
           {"id": "chat", "text": "In-app AI chat", "role": "io"},
           {"id": "cli", "text": "CLI", "role": "io"},
           {"id": "mcp", "text": "MCP server (Claude Code, Claude Desktop)", "role": "io"},
           {"id": "core", "text": "Core library: commands, index, checks, snapshots, export", "role": "emphasis"},
           {"id": "files", "text": "Project folder (storage.md)", "role": "store"}],
 "edges": [{"from": "ui", "to": "core"}, {"from": "chat", "to": "core"}, {"from": "cli", "to": "core"},
           {"from": "mcp", "to": "core"}, {"from": "core", "to": "files"}]}
```

</details>

The core is a library with no UI. The CLI and MCP server are thin wrappers around it, usable without the app open (R-48).

## 3. Technology options

| | A. Electron + TypeScript | B. Tauri (Rust) + TypeScript UI | C. Qt (C++ or Python) |
|---|---|---|---|
| Rich-text editor | Best available (ProseMirror/TipTap, used by many writing apps) | Same web editors | Weaker; long-document editing is hard |
| One language for core, CLI, MCP, UI | Yes (TypeScript) | No: core in Rust or split | Yes, but no web editor ecosystem |
| Download size / memory | Large (~100 MB) | Small (~10 MB) | Medium |
| Linux, Windows, macOS | Yes | Yes (webview differences per OS) | Yes |
| AI SDKs (Claude Agent SDK, MCP) | First-class in TypeScript | Via a TypeScript sidecar | Python SDK, if Python |

**Proposal: A.** The editor is the heart of a writer's tool and the web editors are far ahead; one language keeps the core, CLI and MCP server identical. Size is the price; Tauri stays possible later because the UI would be the same web code.

## 4. The editor

- ProseMirror-based (TipTap), editing Markdown underneath: paragraphs, headings, emphasis, lists, quotes, links, `@mentions`.
- Full view: the chapters of the binder (or a selection) shown and edited as one continuous text; edits go back to each chapter's file.
- Comments as side notes anchored to a paragraph and quote (storage §6); AI suggestions shown as suggested changes to accept or reject one by one.
- Modules add their own views next to the text: timeline, map, graph (Game), screenplay-style dialogue editor (Game).

## 5. AI inside the app (R-102)

- A **chat panel** next to the text. The writer asks in plain words ("rename the town to Vilaclara", "is chapter 4 consistent if it goes before 3?").
- The AI acts only through the **command layer**, offered to it as tools; it never writes files directly. Every change arrives as a reviewable suggestion (R-49).
- **Skills**: Libreto ships task guides (rename, reorder and check, plan characters, fair-puzzle review…) and the project's own `context/` files (style, tone, rules, R-50) are given to the AI each time.
- **Provider**: the writer connects their own; Claude first (Claude Agent SDK). No model is bundled (R-55). Without a provider, the app works fully, just without the chat.
- The same tools are exposed through the MCP server, so Claude Code or Claude Desktop can work on a project with the app closed.

## 6. Open questions

1. **Technology**: Electron + TypeScript (proposed), or do you prefer small downloads (Tauri) even at some extra complexity?
2. **AI connection**: for v1, is "paste an Anthropic API key" acceptable, or must it sign in with a Claude subscription? (The second depends on what Anthropic allows third-party apps; to check before the spec.)
3. **nacho-viewer**: what should Libreto take from it (look, packaging, something else)?
