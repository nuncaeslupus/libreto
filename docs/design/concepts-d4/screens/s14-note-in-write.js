// S14: a note, without leaving Write. A selected note icon with its card beside the line.
const L = require('../lib');
const P = L.sample.chapter7Plain.slice();

P[5] = P[5].replace('since Tuesday', '<span class="tint-n">since Tuesday</span>');

const extraCss = `<style>
.tint-n{background:rgba(184,134,11,.22);box-shadow:inset 0 -2px 0 rgba(184,134,11,.55);border-radius:2px}
.ncard{position:absolute;left:calc(100% + 72px);width:300px;background:var(--paper);border:1px solid var(--line);border-radius:9px;padding:9px 12px 8px;font:12.5px/1.45 var(--ui);box-shadow:0 1px 4px rgba(0,0,0,.04);text-indent:0;z-index:5}
.ncard.sel{border-color:var(--note);box-shadow:0 0 0 3px var(--note-tint),0 4px 14px rgba(0,0,0,.06);background:#fff}
.ncard .hd{display:flex;gap:6px;align-items:center;margin-bottom:5px;font-size:11px;color:var(--ink3)}
.ncard .hd svg{width:13px;height:13px}
.ncard .hd .kind{color:var(--ink2);font-weight:500}
.ncard .hd.kn svg{color:var(--note)}.ncard .hd.kt svg{color:var(--task)}
.page{clip-path:inset(0 -400px)}
.ncard .acts{display:flex;gap:14px;margin-top:8px;padding-top:7px;border-top:1px solid var(--line2);font-size:12px;color:var(--accent)}
.ncard .ba{margin-top:8px;border:1px solid var(--line2);border-radius:7px;overflow:hidden;font:14px/1.45 var(--text)}
.ncard .ba>div{padding:6px 10px}
.ncard .ba>div+div{border-top:1px solid var(--line2)}
.ncard .ba .lab{font:600 10px var(--ui);letter-spacing:.08em;text-transform:uppercase;color:var(--ink3);margin-bottom:2px}
.ncard .ba .chg{background:var(--accent-soft);border-radius:2px;padding:0 2px}
.nline{position:absolute;left:calc(100% + 32px);width:40px;height:1.5px;background:var(--note)}
.gm.add{color:var(--ink4);border:1px solid var(--line);border-radius:4px;background:#fff}
.gm.add svg{width:11px;height:11px}
</style>`;

const noteCard = `<div class="ncard sel" style="top:${L.lineTop(1) - 10}px">`
  + `<div class="hd kn">${L.icons.note}<span class="kind dd">Note</span><span>· you · 2 min ago</span></div>`
  + `<div>Does the reader know about the spare key yet?</div>`
  + `<div class="acts"><span>Reply</span><span>Ask</span><span>Done</span><span>Delete</span></div></div>`;

const col = `<div class="chap"><div class="num">CHAPTER 7</div><h1>Lena’s warning</h1></div>`
  + P.map((p, i) => {
    const para = `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`;
    if (i === 5) return `<div class="para">${para}${L.gm('note', L.lineTop(1), { sel: true })}<span class="nline" style="top:${L.lineTop(1) + 7.5}px"></span>${noteCard}</div>`;
    if (i === 7) return `<div class="para">${para}${L.gm('task', L.lineTop(0))}</div>`;
    if (i === 8) return `<div class="para">${para}<span class="gm add" style="top:${L.lineTop(0)}px">${L.icons.plus}</span></div>`;
    return para;
  }).join('');

const pointer = `<svg class="cursorptr" style="left:720px;top:634px" viewBox="0 0 14 20"><path d="M1 1v15l4-3.6 2.6 6 2.3-1-2.6-5.9H13z" fill="#111" stroke="#fff" stroke-width="1.2"/></svg>`;

// the task card with a change attached (shown under the window)
const taskCard = `<div class="ncard" style="position:relative;left:auto;width:300px;margin:16px 30px 20px">`
  + `<div class="hd kt">${L.icons.task}<span class="kind dd">Task</span><span>· AI</span></div>`
  + `<div>“never once” in ch. 10: one of the two has to give</div>`
  + `<div class="ba"><div><div class="lab">Before · ch. 10</div>“I never once lied to you,” Kit said.</div>`
  + `<div><div class="lab">After</div>“I never <span class="chg">lied to you. Not about that</span>,” Kit said.</div></div>`
  + `<div class="acts"><span>Accept</span><span>Reject</span><span>Reply</span><span>Ask</span><span>Delete</span></div></div>`;

const html = extraCss + L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  page: L.pageCol(col, { paddingTop: 40 }),
  status: { style: 'Plain', words: '2,418 words', pages: 'book p. ~146/248', fixes: '3 fixes' },
  ask: 'normal',
  content: pointer,
  extra: L.tip('Add note', { x: 1068, y: 738, key: 'Ctrl+Shift+M' })
    + L.ann(1, 'The selected icon draws a short line to its card; the card sits level with the line', 1062, 486, { w: 290 })
    + L.ann(2, 'The anchored words are tinted, so there is no doubt which words the note is about', 40, 540, { w: 300 })
    + L.ann(3, 'On the line under the mouse, a faint + in the gutter adds a note (or Ctrl+Shift+M, or right-click)', 1062, 776, { w: 250 })
    + L.ann(4, 'Esc returns the cursor to the sentence; the card folds back to its icon', 40, 640, { w: 300 }),
})
  + `<div class="below"><div class="crop" style="width:360px"><div class="lbl">A task card with a change attached</div>${taskCard}`
  + `</div><div style="padding-top:60px;position:relative;width:360px;height:120px">${L.ann(5, 'Every card has the same buttons: Reply, Ask, Done, Delete. Accept and Reject appear only when a change is attached', 0, 0, { w: 320 })}</div></div>`;

module.exports = {
  id: 'S14',
  file: 's14-note-in-write',
  title: 'A note, without leaving Write',
  width: 1440,
  height: 900,
  html,
  caption: L.caption({
    id: 'S14', title: 'A note, without leaving Write',
    scene: 'The writer clicked the amber icon at “Nobody came in at nine…”: its card opened beside the line, joined to the icon by a short line, with the anchored words tinted. A task icon sits lower, folded. The mouse rests on another line, where a faint + offers a new note. Under the window: a task card with a change attached.',
    on: 'the page with a selected note icon, its line and its card (Note ▾ · you · 2 min ago, the text, Reply Ask Done Delete), “since Tuesday” tinted, a folded task icon, the faint + on the hovered line with the tooltip “Add note · Ctrl+Shift+M”, the pointer, the Ask button, the status bar; below, a task card (Task ▾ · AI) with a before/after pair and Accept Reject Reply Ask Delete',
    off: 'navigator, Reference panel, Review mode, a line on the unselected icon, Search &amp; ask box, provider icon in the status bar',
  }),
};
