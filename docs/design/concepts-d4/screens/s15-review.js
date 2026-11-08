// S15: Review. The same page with the margin open; the navigator carries counts, filter chips and the walker.
const L = require('../lib');
const I = L.icons;

const extraCss = `<style>
.page{clip-path:inset(0 -400px)}
.kf span span{padding:0;border:0;margin-right:4px;display:inline-flex;align-items:center}
.kf span svg{width:11px;height:11px}
.kf .k-note{color:var(--note)}.kf .k-task{color:var(--task)}.kf .k-fix{color:var(--fix)}
.navrev .btn{padding:0 9px;font-size:12px}
.mcard{position:absolute;left:calc(100% + 72px);width:300px;background:var(--paper);border:1px solid var(--line);border-radius:9px;padding:9px 12px 8px;font:12.5px/1.45 var(--ui);box-shadow:0 1px 4px rgba(0,0,0,.04);text-indent:0;z-index:5;color:var(--ink2)}
.mcard.sel{border-color:var(--task);box-shadow:0 0 0 3px var(--task-tint),0 4px 14px rgba(0,0,0,.06);color:var(--ink);z-index:6}
.mcard .hd{display:flex;gap:6px;align-items:center;margin-bottom:4px;font-size:11px;color:var(--ink3)}
.mcard .hd svg{width:13px;height:13px}
.mcard .hd .kind{color:var(--ink2);font-weight:500}
.mcard .hd.kn svg{color:var(--note)}.mcard .hd.kt svg{color:var(--task)}
.mcard .acts{display:flex;gap:14px;margin-top:8px;padding-top:7px;border-top:1px solid var(--line2);font-size:12px;color:var(--accent)}
.mline{position:absolute;width:20px;height:1.5px;background:var(--task)}
.tf{background:rgba(0,0,0,.045);border-radius:2px}
.ts{background:var(--task-tint);box-shadow:inset 0 -2px 0 rgba(47,111,179,.6);border-radius:2px}
</style>`;

const card = (o) => `<div class="mcard${o.sel ? ' sel' : ''}" style="top:${o.top}px"><div class="hd ${o.kind === 'note' ? 'kn' : 'kt'}">${I[o.kind]}<span class="kind dd">${o.kind === 'note' ? 'Note' : 'Task'}</span><span>· ${o.who}</span></div><div>${o.text}</div>${o.acts ? `<div class="acts">${o.acts.map((a) => `<span>${a}</span>`).join('')}</div>` : ''}</div>`;

const t0 = L.lineTop(0);
const col = `<div class="para"><p class="first">“Then hear this.” Lena leaned close enough that Vega could smell <span class="tf">the lemon on her hands</span>. “Go home. Don’t come back to the Blue Lamp tomorrow. And don’t ask Kit what he saw.”</p>`
  + L.gm('note', t0) + card({ kind: 'note', who: 'Marta (editor)', top: t0 - 10, text: 'The lemon on her hands is in <span class="lk">ch. 2</span> as well. Keep it as her signature, or drop one?' }) + `</div>`
  + `<div class="srule"></div>`
  + `<p class="first">Outside, the rain had turned to the fine kind that does not fall so much as hang. Vega walked the long way around, past the station steps, because it was the way Kit always walked.</p>`
  + `<p>She had asked him once, on the station steps, whether he would ever lie to her.</p>`
  + `<div class="para"><p>Kit <span class="ts">said no</span>.</p>`
  + L.gutter(['task', 'task'], t0, { sel: 0 }) + `<span class="mline" style="left:calc(100% + 52px);top:${t0 + 7.5}px"></span>`
  + card({ kind: 'task', who: 'you', sel: true, top: t0 - 10, text: 'He could have said maybe. Check after the confession in ch. 10.', acts: ['Reply', 'Ask', 'Done', 'Delete'] })
  + card({ kind: 'task', who: 'AI', top: t0 + 102, text: 'In ch. 10 Kit says he “never once” lied to her. One of the two has to give.', acts: ['Accept', 'Reject', 'Reply', 'Ask', 'Delete'] })
  + `</div>`
  + `<p>He said it too fast, the way people answer a question they have rehearsed on the walk over, and she had let it go because it was late and she wanted to believe him.</p>`
  + `<div class="para"><p>At the corner of Harbor Street she stopped under <span class="tf">the awning of the pawnshop</span> and counted the windows above the Blue Lamp. Three dark, one lit. The lit one was the back room.</p>`
  + L.gm('note', t0) + card({ kind: 'note', who: 'AI · idea', top: t0 + 130, text: 'The pawnshop awning comes back in ch. 9.' }) + `</div>`
  + `<p>She did not go back in. She stood there long enough for the light to go out, and then a little longer, in case it came on again.</p>`;

// navigator: the current scene is the last one of chapter 7
const rows = L.sample.navRows.map((r) => (r.type === 'scene' ? { ...r, here: r.title === 'Vega leaves without paying' } : r));
const chipKey = (k, t) => `<span class="${k}">${I[k.slice(2)]}</span>${t}`;
const chips = { All: 11, [chipKey('k-note', 'Notes')]: 5, [chipKey('k-task', 'Tasks')]: 3, [chipKey('k-fix', 'Fixes')]: 3, Editor: null, AI: null };
const nav = L.navigator({ rows, review: true, chips })
  .replace('<div><span class="btn pri">Review all ▶</span></div>', '<div style="display:flex;gap:6px"><span class="btn pri">Review all ▶</span><span class="btn">AI: review this chapter</span></div>');

const html = extraCss + L.win({
  mode: 'Review',
  crumbs: { chapter: 'Chapter 7 · Lena’s warning', scene: 'Vega leaves without paying' },
  left: nav,
  page: L.pageCol(col, { paddingTop: 40 }),
  status: { style: 'Plain', words: '2,418 words', pages: 'book p. ~146/248', fixes: '3 fixes' },
  ask: 'normal',
  extra: L.ann(1, 'The same page, with the margin open: every card level with its line', 400, 98)
    + L.ann(2, 'Filters by kind and by author: “what did Marta say?” is one click', 20, 768, { w: 250 })
    + L.ann(3, 'Only the selected card draws its line and tints its words strongly; the others stay quiet and push away when they collide', 1062, 690, { w: 290 })
    + L.ann(4, 'Review all ▶ walks the book one card at a time: Enter accepts or marks done, Tab skips', 400, 700, { w: 420 })
    + L.ann(5, 'AI findings arrive in the margin as tasks, never in the text', 1062, 790, { w: 290 }),
});

module.exports = {
  id: 'S15',
  file: 's15-review',
  title: 'Review',
  width: 1440,
  height: 900,
  html,
  caption: L.caption({
    id: 'S15', title: 'Review',
    scene: 'The end of chapter 7 in Review mode. The navigator carries counts, filter chips and the walker; in the margin, four cards sit level with their lines: the editor’s note, the writer’s task (selected, with its line and its words tinted), the AI’s task with a change to accept or reject, and an AI idea. Two cards on one line stack; the idea card was pushed down by the one above.',
    on: 'the navigator with filter chips (All 11 · Notes 5 · Tasks 3 · Fixes 3 · Editor · AI, with the mark icons), Review all ▶ and AI: review this chapter, chapters with counts, chapter 7 open with its scenes; the page with gutter icons at the exact lines, the selected task card with its line and strongly tinted words, three quiet cards with faint tints; the Ask button; the status bar',
    off: 'Reference panel, highlights, a line on the unselected cards, the fixes as cards (folded in the counter), Search &amp; ask box, provider icon in the status bar',
  }),
};
