# Libreto, a walk through the window (concept draft 8)

Status: **for annotation.** One document, in the order a writer who has never seen Libreto would meet things. Before each screen, a short paragraph says how you get there, what it is for and what it lets you do; then the picture. Not a guide and not a specification.

Draft 8 is not an answer to notes: it answers an outside critique of draft 7 (`critique-d7.md`, six reports, about 525 findings), written as if someone else had designed the app, and it changes the frame. **The six modes are gone.** The reasons, and everything else that changed, are at the end, with the questions that are yours to decide. Screen S50 draws the smaller alternative (four modes) so the two cuts can be compared.

## Libreto in one minute

Libreto is a writing app for long texts: novels first. Its window has **three columns** and only the middle one is always open. On the **left**, the **Navigator** lists what you work on, in three sections chosen at its head: **Book** (front matter, parts, chapters, scenes, back matter), **Codex** (the Brief, threads, people, places, things, motifs) and **Research** (the Inbox, your topics, files). In the **center**, whatever you opened: the manuscript, an entry of the Codex, a topic, the Brief. On the **right**, the **side panel** shows one thing beside it: a person or a topic for reference, a chapter to read while you write another, the **Review** margin, the **Ask** conversation, or, when you look at pages, the book's layout.

When the center holds the manuscript, a small switch at the top shows three **views** of it: **Text** for writing, **Board** for the scenes as cards, **Pages** for the printed book. They are the same book: a scene moved on the Board has moved in the Text, a style changed in Pages has changed in the Text. Nothing else in Libreto is a "place": **Review** is a button that opens the margin beside the text you are on; History, Statistics and AI activity open over the window and close back to where you were; Settings and Help are windows; Export, Print and Send a copy are dialogs.

The AI has **one door**: the round **Ask** button at the bottom right, or `Ctrl+K`. The same box finds a chapter, opens a person, runs a command and, when you ask a question, becomes a conversation in the side panel. The AI can do what you can do in Libreto, but it never changes your text, your chapters or your cards without a button you press; everything it proposes waits in Review. Without an AI, Ask still finds, opens and runs commands; everything else in Libreto works without one, and where the AI adds something, the screen says so and what it costs.

Seven rules hold everywhere:

1. **The page stays put.** Columns open beside the text; the text stays centered. Only a narrow window moves it, once.
2. **One shape per meaning, color second.** A **wavy** red underline: check this spelling. A **dashed** blue one: a suggestion waits. A **thin** green line: Libreto fixed it for you. An **amber tint** behind words: a note. Every mark can be told without seeing color.
3. **Nothing replaces your words unasked.** Fixes while you type are small, green and undoable; everything else is a suggestion with Accept and Reject, and a suggestion whose text you changed since is marked **out of date**, never applied over your words.
4. **One way back for each kind of thing.** `Esc` closes the innermost thing that is open. `Back` (`Alt+←`) returns from any jump. `Ctrl+Z` undoes the last thing **here**. **Revert** takes back one older thing (a reorder, a round of review, an agent's session) and says what it could not.
5. **Libreto saves as you type, and says so.** "Saved 19:32" in the status bar; when it cannot save, it says that in red and keeps your words.
6. **Keys that exist on every keyboard and every desktop**: no brackets or slashes, nothing a Spanish layout types with AltGr, nothing Linux desktops or input methods take. Every key can be changed, and the change is checked against your layout.
7. **Plain words.** Accept, Reject, Resolve, Undo, Leave as is, versions; the same verb for the same act everywhere.

| What you want | Where it is |
|---|---|
| write | Book in the Navigator, Text view |
| see and move scenes | Board view |
| see the printed book, design it, export | Pages view; File ▸ Export…, File ▸ Print… |
| decide on notes and suggestions | the Review button, beside the text |
| look someone up while writing | `Ctrl`+click a name, or the side panel |
| what the book says about Lena | Codex in the Navigator |
| your material | Research in the Navigator |
| ask, find, run a command | Ask, `Ctrl+K` |
| what changed, and go back | History in the status bar, File ▸ Versions & history |
| goals and numbers | the word count in the status bar, View ▸ Statistics |
| preferences | Tools ▸ Settings (`Ctrl+,`) |
