# Libreto — node and data model (draft 0)

Topic 1 of the Libreto design agenda. Status: **for discussion**; nothing here is built yet.
Inputs: `docs/research/requirements.md` (§2 C, L, M, N, O) and the ALAIF design document.

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
| `event` | The world, by itself, as soon as available (optionally after `delay`) | Interrupt, Trigger | Rosa leaves the bar to dance |
| `dilemma` | Player picks an option now (`mode: immediate`), or a condition picks it later (`mode: deferred`) | Immediate/Delayed dilemma + Voluntary/Default/Involuntary decision | "Who are you?" — truth or lie |
| `ending` | Reached; the game ends | (end node) | Case closed |
| `set` | A container: its nodes act as one and, if `exclusive`, lock everything else until done | Indivisible set | The piano set |

Flags any node can carry instead of more types:

- `optional: true` — not needed to finish (side quest, optional interrupt).
- `until: <condition>` — availability window; with `optional` this is ALAIF's **collectible**.
- `hints:` — up to 3 levels (+ comic 4th) on `puzzle`/`action` only (R-78).
- `reactions:` — line, sound, music cue, animation id, filled in later by the game (R-79).
- `clues:` — the facts/items that make the solution fair; checked against the ancestor set (R-92).

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

A dilemma option is referenced as `<dilemma>.<option>`, e.g. `who_are_you.truth`.

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
    clues: [coat_heavy_on_one_side]
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

## 6. One graph or two levels?

ALAIF draws a decision graph whose nodes contain puzzle graphs. Proposal: **one graph**, with `set` and scene files as the collapsible levels (R-21). The decision-level view is then a *filter* (show only dilemmas, endings and sets), not a second structure to keep in sync. To be validated on a larger example with two timelines.

## 7. Open questions for Ivan

1. **Branching by state (proposed) vs ALAIF pruning with weak edges.** Does the example cover the cases you had in mind for weak edges (p.75–77)?
2. **`event` = interrupt + trigger.** ALAIF keeps them apart. Is there a difference the game needs, beyond "immediate" vs "after a delay"?
3. **Decisions as dilemma options**, not separate nodes (Voluntary/Default/Involuntary become `options`, `default`, `mode: deferred`). OK?
4. **File granularity.** One YAML file per scene graph (proposed) vs one file per node (R-2 literally). Per node is many small files; per scene keeps a graph readable in one place.
5. **Next test scene.** A cross-timeline one: Gómez-before hides the badge in the coat (creating timeline), Gómez-after finds it (solving timeline).
