# Libreto — sync between machines (draft 0)

Topic 3 of the Libreto design agenda. Status: **for discussion**; nothing here is built yet.
Builds on `docs/design/storage.md`. Inputs: requirements R-1, R-5, R-6, R-9 (real-time multi-user: won't), R-48, R-66.

## 1. The question

The same project is edited on several computers (Ivan's Linux machines first, Windows and macOS later) and by agents in the cloud. How do changes travel, and what happens when two places changed the same thing?

## 2. Options

| | Git (GitHub or any remote) | Synced folder (Syncthing, Dropbox, Drive, OneDrive, iCloud, Nextcloud) |
|---|---|---|
| Setup | Remote + credentials | Install client, pick folder |
| History, diff, restore (R-6) | Built in | Service-specific, coarse, per file |
| Concurrent edits | Three-way merge; conflicts are explicit | Last writer wins, or a "conflicted copy" file appears |
| Cloud agents (Claude) | Clone, branch, PR: already how we work | Usually no access |
| Offline (R-66) | Full | Full |
| Learning curve | High without help | None |

## 3. Proposal: git first, synced folders supported

**Git is the supported way** (R-5) and Libreto hides it behind three actions, so nobody needs to know git:

- **Snapshot** = commit of all changed project files, with a message Libreto proposes from what changed ("Bar Pelayo: 2 nodes, 5 lines").
- **Get latest** = fetch + merge from the remote.
- **Send** = push (Get latest first if needed).

Libreto uses the system's git and its credentials (SSH keys, credential helper), so whatever already works on the machine works in Libreto. A project with no remote still gets local history.

**Synced folders also work** (R-5 "any file sync must also work") because of how storage is laid out: small files, atomic writes, no lock files, derived data outside the project (`storage.md` §1, §7). What Libreto adds:

- Watches the folder and reloads files changed by the sync client.
- Detects conflict copies by their known name patterns (`(conflicted copy …)`, `.sync-conflict-…`, `(1)` …) and shows them as conflicts to resolve (§4), instead of leaving duplicates around.
- Warns once if it finds a `.git` folder inside a synced folder: syncing a live git repository is a known way to corrupt it. Use one or the other per project.

## 4. Conflicts

Small files make conflicts rare and local, but they happen. Handling, from simplest to richest:

1. **Detect.** After a merge or a sync, Libreto finds conflict markers or conflict copies and blocks only the affected files (the rest of the project keeps working).
2. **Resolve by unit.** Libreto parses both versions and shows the difference per node, per entity field, per line id, not per text line: "Mine: `rosa_trust += 1`. Theirs: `rosa_trust += 2`." Choose one, or edit.
3. **Merge driver** (later, S). A `libreto merge` git driver registered in `.gitattributes` merges YAML by id, so two people editing different nodes of the same scene never see a conflict at all.

After any merge, the full check (node-model §6b) runs, catching what no text merge can: duplicate ids created on two machines, a reference to a node deleted elsewhere, a broken dependency.

## 5. What travels and what does not

| Travels (in the project) | Stays on each machine |
|---|---|
| All files in `storage.md` §2, including `views/` | Index, search tables, compiled ink, undo history, window layout (OS cache folder) |
| `.gitattributes` (LF endings, merge driver later) | Credentials |
| A `.gitignore` Libreto creates (OS junk, `*.pot`) | |

## 6. Agents and the cloud

Agents (Claude in a cloud session, or locally through the CLI/MCP, R-48) work on a git clone like any machine: branch, change files, open a PR, merge. Libreto's checks run in CI on every PR, so an agent's change is validated before it reaches `main`. A Libreto project is therefore also a normal reviewable repository.

## 7. Not in scope

- Real-time co-editing (R-9 is *won't*).
- A Libreto server or account (R-66).
- Libreto implementing its own sync protocol.

## 8. Decisions and open questions

Decided (Ivan, 2026-11-03):

1. Ivan's machines sync through GitHub; synced folders are tested later.
2. Snapshots are manual, plus automatic ones before risky operations (migrate, bulk rename, merge).

Proposed (to confirm):

1. Git first, behind Snapshot / Get latest / Send; synced folders supported with conflict-copy detection.
2. Never git inside a synced folder; Libreto warns.
3. Conflicts resolved per node/field/line; structural merge driver later.
4. Libreto checks run in CI for every PR.

