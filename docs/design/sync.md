# Libreto — sync between machines (draft 1, deferred)

Topic 3 of the Libreto design agenda. Status: **deferred** (Ivan, 2026-11-04): the tool must work first. v1 only needs to be safe inside a backup folder (`storage.md` §10). This page keeps what we already know so sync can be added later without changing the storage.

## 1. Constraints for later

- Users are non-technical (P-6): whatever is chosen is configured by Libreto, never by the user. No git commands, no remotes, no keys to set up by hand.
- Works offline, no Libreto account (R-66); no real-time co-editing (R-9).

## 2. What v1 already does that sync will need

- Small files and atomic writes: a sync client never sees half a file, and two machines rarely touch the same file.
- No database in the project; the index is per machine.
- Ids made from names, with a uniqueness check after any external change, so duplicates created on two machines are caught.
- Snapshots as new, never-modified files: they never conflict.
- Libreto reloads files changed from outside and detects cloud "conflicted copy" files, showing both versions per chapter, entity or node so the writer picks one.

## 3. Options to choose from later

| | Cloud folder the user already has | Git hidden behind the app |
|---|---|---|
| Setup | None beyond the cloud client | Libreto creates and configures everything; user signs in once |
| Two machines editing at once | Conflict copies, resolved in Libreto | Real merge; conflicts only on the same paragraph or node |
| History | Libreto snapshots | Snapshots + full history |
| AI agents in the cloud | No access | Clone, change, review (how this project works today) |

Likely answer: the cloud folder for most writers, hidden git as an option for pro and game projects. Decided when sync becomes a topic again.

## 4. Decisions

Ivan, 2026-11-04: sync deferred; non-technical users; v1 = backup-safe storage. AI inside the app moves to topic 4 (app type).
