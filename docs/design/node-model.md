# Libreto — node and data model (draft 0)

Topic 1 of the Libreto design agenda. Status: **for discussion**; nothing here is built yet. ALAIF ideas are hypotheses, not settled rules: each one is kept only if the test scenes show it works.
Inputs: `docs/research/requirements.md` (§2 C, L, M, N, O), the ALAIF design document, and ALAIF's software notes (event class attributes, link restrictions, decision graph).

## 1. The idea in five lines

1. A story is **world state** (variables, inventory, what each knower knows) plus a **graph of nodes**.
2. A node is an **event that happens at most once**: a puzzle solved, an action taken, something the world does.
3. A node becomes **available** when everything in `requires` has happened **and** its `when` condition is true.
4. When it happens, it applies its `effects` to the state.
5. Branching is **state, not deletion**: a dilemma option sets a variable; nodes of one branch carry a `when` on it. Pruning (ALAIF §75–77) is *computed* from that, not stored.

## 2. Node types

Six types, each a row of ALAIF's legend or a merge of several. Hints and reactions are fields, not nodes.

| Type | Who makes it happen | ALAIF equivalent | Example |
|---|---|---|---|
| `puzzle` | Player; a real goal, named with a verb | Puzzle | Get into the back office |
| `action` | Player; a step that is not a goal | Action | Talk to Rosa |
| `event` | The world, by itself. `timing: at_once` (ALAIF trigger) or a window such as `timing: {after: 2-5 min}` or `timing: {when: idle}` (ALAIF interrupt) | Interrupt, Trigger | The phone rings |
| `dilemma` | Player picks an option now (`mode: immediate`), or a condition picks it later (`mode: deferred`) | Immediate/Delayed dilemma + Voluntary/Default/Involuntary decision | "Who are you?" — truth or lie |
| `ending` | Reached; the game ends | (end node) | Case closed |
| `set` | A container: its nodes act as one and, if `exclusive`, lock everything else until done | Indivisible set | The piano set |

Flags any node can carry instead of more types:

- `optional: true` — not needed to finish (side quest, optional interrupt).
- `until: <condition>` — availability window; with `optional` this is ALAIF's **collectible**.
- `hints:` — up to 3 levels (+ comic 4th) on `puzzle`/`action` only (R-78).
- `reactions:` — line, sound, music cue, animation id, filled in later by the game (R-79). Split into `on_done` and `on_wrong` (a wrong attempt), as ALAIF's right/wrong audio triggers.
- `evidence:` — the in-world facts/items that make the solution fair; checked against the ancestor set (R-92). Not to be confused with hints: ALAIF's *Clue* and *Hint* are the same thing, a `hints:` entry here.

## 3. Fields

| Field | Meaning |
|---|---|
| `id` | Stable, unique in the project (`snake_case`). |
| `type` | One of §2. |
| `title` | Designer's name for the node (not player-facing). |
| `requires` | Nodes or dilemma options that must have happened. **AND** by default; `any: [...]` for OR. |
| `when` | Condition over state; must be true to become available. |
| `effects` | State changes when it happens. |
| `actor` | Who can do it (`gomez_after`, `gomez_before`…), for DOTT-style protagonists (R-24). |
| `at` | Location id (R-84). |
| `timeline` | `solving` / `creating` … (R-28). |
| `options` | `dilemma` only: list of `{id, title, effects, when}`; `default` names the option taken if the player never chooses. |
| `estimate` | Expected play time (ALAIF `expectedLength`), for pacing and play-time estimates (R-32). |
| `difficulty` | 1–5 (ALAIF `level`), for tuning and the stuck-point checks (R-94). |
| `characters` | Characters present or involved; feeds the character × location × time grid (R-33). |
| `variants` | Same node, different content by state (see §6.1). |

A dilemma option is referenced as `<dilemma>.<option>`, e.g. `who_are_you.truth`.

**Scope.** Ids are project-wide. A scene file is only where a node is written: any node may require a node in another scene or timeline, and `has(badge)` works anywhere. Items, characters and locations are entities with their own files (`items/badge.md`) and a state that changes (who holds it, where it is), so an object picked up in chapter 1 and used in chapter 9 needs nothing special (R-85).

**Interrupt vs trigger (ALAIF re-check).** ALAIF defines both as non-player events; the only difference is timing. A trigger fires right after its dependencies (mostly to start music or sound); an interrupt is a plot twist ("the phone rings") that fires at a moment the player does not expect, chosen by the game master. ALAIF itself says they could be one type. In a video game there is no game master, so the moment becomes a rule: `timing`. Most decorative triggers become plain `reactions` on the node before them.

**Allowed links.** Not every type may require every other (ALAIF's *Restricciones eventos* matrix): e.g. a dilemma is followed only by its own options, and nothing requires an `ending`. The schema enforces this table (R-7).

**Runtime status** of a node, derived, never stored: `locked` → `available` → `done`, or `unreachable` (its `when` can no longer hold; ALAIF's *anulado*). Optional nodes show as `available` until their `until` closes them.

## 4. State and conditions

Declared once per project (`variables.yaml`):

```yaml
approach:   { type: enum, values: [unknown, truth, lie], initial: unknown }
rosa_trust: { type: int, initial: 0, range: [-3, 3] }
```

Built in, no declaration needed: inventory, knowledge, history.

| In a condition | In an effect |
|---|---|
| `rosa_trust >= 1`, `approach == truth` | `rosa_trust += 1`, `approach = truth` |
| `has(badge)` | `give badge`, `take badge` |
| `knows(note_from_myself)` (the player) / `knows(rosa, ...)` | `learn note_from_myself` |
| `done(play_piano)`, `chose(who_are_you.lie)` | — |

Syntax follows ink's expressions (`and`, `or`, `not`, `==`, `>=`), so dialogue conditions and graph conditions read the same.

## 5. Worked example — "Bar Pelayo, 1 a.m."

Invented test scene, solving timeline. Gómez (memory erased) wants into the back office of a jazz bar, where his former self left something. Rosa, the bartender, asks who he is. Truth or lie gives two routes that **merge** at the office door.

![Bar Pelayo: split and merge](diagrams/node-model-1.svg) <!-- drawspec-render -->

<details><summary>Diagram source</summary>

```drawspec
{"version": 1, "kind": "flow",
 "title": "Bar Pelayo: split and merge",
 "nodes": [
  {"id": "talk", "text": "action\nTalk to Rosa"},
  {"id": "dil", "text": "dilemma\nWho are you?", "role": "decision"},
  {"id": "badge", "text": "puzzle\nFind your badge"},
  {"id": "show", "text": "puzzle\nShow the badge"},
  {"id": "music", "text": "puzzle\nGet sheet music"},
  {"id": "piano", "text": "puzzle\nPlay the piano set"},
  {"id": "dance", "text": "event\nRosa goes dancing"},
  {"id": "sneak", "text": "action\nSneak behind the bar"},
  {"id": "office", "text": "puzzle\nEnter the office", "role": "emphasis"},
  {"id": "note", "text": "event\nRead your own note", "role": "terminal"},
  {"id": "match", "text": "optional\nMatchbook", "role": "note"}
 ],
 "edges": [
  {"from": "talk", "to": "dil"},
  {"from": "dil", "to": "show", "label": "truth"},
  {"from": "badge", "to": "show"},
  {"from": "dil", "to": "piano", "label": "lie"},
  {"from": "music", "to": "piano"},
  {"from": "piano", "to": "dance"},
  {"from": "dance", "to": "sneak"},
  {"from": "show", "to": "office", "label": "any"},
  {"from": "sneak", "to": "office", "label": "any"},
  {"from": "office", "to": "note"}
 ],
 "groups": [
  {"id": "g_truth", "text": "truth branch", "members": ["show"]},
  {"id": "g_lie", "text": "lie branch", "members": ["piano", "dance", "sneak"]}
 ]}
```

</details>

The data (one YAML file for the scene graph; long text lives in Markdown/ink files by id):

```yaml
scene: bar_pelayo
timeline: solving
at: bar_pelayo
actor: gomez_after        # default for every node below

nodes:
  - id: talk_rosa
    type: action
    title: Talk to Rosa

  - id: who_are_you
    type: dilemma
    mode: immediate
    title: Rosa asks who you are
    requires: [talk_rosa]
    default: lie            # walking away counts as lying
    options:
      - id: truth
        title: "I'm a detective"
        effects: [approach = truth, rosa_trust += 1]
      - id: lie
        title: "I'm the new pianist"
        effects: [approach = lie]

  # --- truth branch ---
  - id: find_badge
    type: puzzle
    title: Find your badge
    evidence: [coat_heavy_on_one_side]
    effects: [give badge]
    hints:
      - Your coat hangs oddly.
      - Something is sewn into the lining.
      - Tear the lining open.

  - id: show_badge
    type: puzzle
    title: Convince Rosa you're a cop
    requires: [who_are_you.truth]
    when: has(badge)

  # --- lie branch ---
  - id: get_sheet_music
    type: puzzle
    title: Get sheet music from the busker
    at: street_outside

  - id: play_piano
    type: puzzle
    title: Play the piano set
    requires: [who_are_you.lie, get_sheet_music]

  - id: rosa_dances
    type: event
    title: Rosa leaves the bar to dance
    requires: [play_piano]
    delay: 1 turn

  - id: sneak_in
    type: action
    title: Sneak behind the bar
    requires: [rosa_dances]

  # --- merge ---
  - id: enter_office
    type: puzzle
    title: Get into the back office
    requires:
      any: [show_badge, sneak_in]

  - id: read_note
    type: event
    title: A note in your own handwriting
    requires: [enter_office]
    effects: [learn note_from_myself]

  - id: matchbook
    type: action
    title: Pick up the old matchbook
    optional: true
    until: not done(enter_office)
    effects: [give matchbook]
```

Later, a **deferred** dilemma uses the state the scene left behind:

```yaml
  - id: police_at_the_bar
    type: dilemma
    mode: deferred
    requires: [read_note]
    options:
      - { id: rosa_covers, when: rosa_trust >= 1 }
      - { id: rosa_tells,  when: rosa_trust < 1 }
```

### 5.1 How the branch works here

- **Split.** `who_are_you` sets `approach`. `show_badge` requires `who_are_you.truth`; `play_piano` requires `who_are_you.lie`. Only one can ever happen.
- **Merge.** `enter_office` requires `any` of the two branch ends. No special node type.
- **Pruning is derived.** After choosing `lie`, Libreto can show that `show_badge` can no longer become available, so it greys it out (branch preview, R-98). Nothing is deleted.
- **Shared nodes survive by themselves.** `find_badge` has no branch condition, so it stays in both branches. In the lie branch Libreto flags the badge as **useless here** (red herring check, R-81) — the designer decides if that is fine.
- **No weak edges needed.** ALAIF needs weak edges so the cascade stops in the right place. Here each node states its own condition, so "is this still reachable?" is answered by evaluating the graph, not by the shape of the deletion.

### 5.2 Two scripted playthroughs (preview of R-89)

```yaml
- name: truth route
  steps: [talk_rosa, who_are_you.truth, find_badge, show_badge, enter_office]
  expect: { rosa_trust: 1, knows: [note_from_myself], has: [badge] }

- name: lie route
  steps: [talk_rosa, who_are_you.lie, get_sheet_music, play_piano, sneak_in, enter_office]
  expect: { rosa_trust: 0, unreachable: [show_badge] }
```

`rosa_dances` and `read_note` are events: the runtime fires them; the test does not list them.

## 5b. Worked example — "One week earlier" (cross-timeline)

Same bar, creating timeline. Gómez-before prepares his own mystery: he hides the badge and leaves himself a note, then erases his memory. The solving scene of §5 now depends on it.

![Two timelines, one graph](diagrams/node-model-2.svg) <!-- drawspec-render -->

<details><summary>Diagram source</summary>

```drawspec
{"version": 1, "kind": "lanes",
 "title": "Two timelines, one graph",
 "nodes": [
  {"id": "favour", "text": "puzzle\nGet Rosa's tip jar back", "actor": "Gómez-before (creating)"},
  {"id": "needle", "text": "action\nBorrow needle and thread", "actor": "Gómez-before (creating)"},
  {"id": "hide", "text": "puzzle\nSew the badge into the coat", "actor": "Gómez-before (creating)"},
  {"id": "leave", "text": "action\nLeave a note in the office", "actor": "Gómez-before (creating)"},
  {"id": "wipe", "text": "event\nThe memory wipe", "actor": "Gómez-before (creating)", "role": "emphasis"},
  {"id": "find", "text": "puzzle\nFind your badge", "actor": "Gómez-after (solving)"},
  {"id": "office", "text": "puzzle\nEnter the office", "actor": "Gómez-after (solving)"},
  {"id": "read", "text": "event\nRead your own note", "actor": "Gómez-after (solving)", "role": "terminal"}
 ],
 "edges": [
  {"from": "favour", "to": "needle"},
  {"from": "favour", "to": "leave"},
  {"from": "needle", "to": "hide"},
  {"from": "hide", "to": "wipe"},
  {"from": "leave", "to": "wipe"},
  {"from": "hide", "to": "find", "label": "badge in lining"},
  {"from": "office", "to": "read"},
  {"from": "leave", "to": "read", "label": "note in office"}
 ]}
```

</details>

```yaml
scene: pelayo_before
timeline: creating
story_time: -7 days        # relative to the solving timeline's day 0
at: bar_pelayo
actor: gomez_before

nodes:
  - id: rosa_tip_jar
    type: puzzle
    title: Get Rosa's stolen tip jar back
    effects: [rosa_trust += 1]          # still true a week later

  - id: borrow_needle
    type: action
    title: Borrow needle and thread
    requires: [rosa_tip_jar]
    effects: [give needle_thread]

  - id: hide_badge
    type: puzzle
    title: Sew the badge into the coat lining
    requires: [borrow_needle]
    when: has(badge)
    effects: [take badge, put badge in coat_lining, learn badge_in_coat]

  - id: leave_note
    type: action
    title: Leave a note in the back office
    requires: [rosa_tip_jar]             # Rosa lets him in
    effects: [put note in back_office]

  - id: memory_wipe
    type: event
    timing: at_once
    requires: [hide_badge, leave_note]
```

In §5, two nodes gain a cross-timeline requirement:

```yaml
  - id: find_badge
    requires: [hide_badge]       # pelayo_before, other timeline
  - id: read_note
    requires: [enter_office, leave_note]
```

### 5b.1 What this example tests

- **Two knowers, one body (R-39).** `learn badge_in_coat` runs with `actor: gomez_before`, so only Gómez-before knows it. Gómez-after starts empty; the player may know it if the flashback was played first, which is the fun of the design and also what the fair-puzzle check (R-92) must take into account.
- **State crosses time through the world, not through the inventory.** The badge goes into `coat_lining`; Gómez-after does not "have" it until `find_badge`. `rosa_trust` set a week earlier still holds.
- **Story time vs play order (R-29).** `story_time` orders events in the world; play order is whatever the graph allows. Libreto checks every cross-timeline edge: if the cause comes *later* in story time than its effect, it is a paradox and is flagged, unless marked `paradox: intended`.
- **Play order is a design choice.** If the flashback is a chapter played *after* the bar scene, `find_badge` cannot be solved in the bar, and Libreto reports it as a dead end for that chapter order. If the player can switch timelines freely (DOTT style), it is solvable. The same data shows both.

## 6. One graph or two levels?

ALAIF draws a decision graph whose nodes contain puzzle graphs. Proposal: **one graph**, with `set` and scene files as the collapsible levels (R-21). The decision-level view is then a *filter* (show only dilemmas, endings and sets), not a second structure to keep in sync. To be validated on a larger example with two timelines.

### 6.1 Variants instead of copies

ALAIF's *Graf de decisions* draws Room 6 twelve times (3 × 2 × 2 choices: `Axa`, `Axb`…). Copying rooms per branch explodes and drifts apart. Here a room or node exists **once** and carries variants:

```yaml
- id: room_6
  type: event
  title: Final room
  variants:
    - when: saved_gm and route == A
      script: room_6_a_saved
    - when: not saved_gm
      script: room_6_infected      # covers A, B and C
```

Only what really differs gets a variant; the rest is shared. Libreto can still draw the twelve combinations as a view.

## 7. Decisions and open questions

Decided (Ivan, 2026-11-03):

1. Branching by state; no weak edges.
2. `event` merges interrupt and trigger, with `timing` (ALAIF re-checked, §3).
3. Decisions are options inside the dilemma.
4. One YAML file per scene; ids are project-wide, so objects and dependencies cross scenes freely (§3 Scope).
5. Cross-timeline test scene added (§5b).
6. Clue = Hint, confirmed: ALAIF's English *Clue* (events list) and *Hint* (class sheet) both translate *Pista*; in-world facts are `evidence` here.

Open:

7. **Play order.** Free switching between timelines (DOTT), fixed chapters, or both per chapter?
8. **Knowledge of the player vs Gómez-after.** Should the game ever let the player use what only Gómez-before knows, or must Gómez-after rediscover it in-world?
