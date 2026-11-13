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
.gm.fold2{width:auto!important;gap:1px!important}
.gm.fold2 i{font:600 10px var(--ui);font-style:normal;color:var(--note);margin-left:2px}
.ncard .hd.kd svg{color:var(--fix)}
.ncard.done{border-color:rgba(46,139,87,.45)}
.ncard .lk{color:var(--accent);text-decoration:underline;text-underline-offset:2px}
</style>`;

const noteCard = `<div class="ncard sel" style="top:${L.lineTop(1) - 10}px">`
  + `<div class="hd kn">${L.icons.note}<span class="kind dd">Note</span><span>· you · 2 min ago</span></div>`
  + `<div>Does the reader know about the spare key yet? Check with <span class="lk">chapter 10</span>.</div>`
  + `<div class="acts"><span>↩ Reply</span><span>✓ Done</span><span>Delete</span></div></div>`;

// two notes on one line fold into one icon with a count
const folded2 = `<span class="gm note fold2" style="top:${L.lineTop(0)}px">${L.icons.note}<i>2</i></span>`;

const col = `<div class="chap"><div class="num">CHAPTER 7</div><h1>Lena’s warning</h1></div>`
  + P.map((p, i) => {
    const para = `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`;
    if (i === 2) return `<div class="para">${para}${folded2}</div>`;
    if (i === 5) return `<div class="para">${para}${L.gm('note', L.lineTop(1), { sel: true })}<span class="nline" style="top:${L.lineTop(1) + 7.5}px"></span>${noteCard}</div>`;
    if (i === 8) return `<div class="para">${para}<span class="gm add" style="top:${L.lineTop(0)}px">${L.icons.plus}</span></div>`;
    return para;
  }).join('');

const pointer = `<svg class="cursorptr" style="left:720px;top:634px" viewBox="0 0 14 20"><path d="M1 1v15l4-3.6 2.6 6 2.3-1-2.6-5.9H13z" fill="#111" stroke="#fff" stroke-width="1.2"/></svg>`;

// the same note marked Done: green, kept (shown under the window)
const doneCard = `<div class="ncard done" style="position:relative;left:auto;width:300px;margin:16px 30px 20px">`
  + `<div class="hd kd">${L.icons.fix}<span class="kind">Note · done</span><span>· you · today</span></div>`
  + `<div>Does the reader know about the spare key yet? Check with <span class="lk">chapter 10</span>.</div>`
  + `<div class="acts"><span>↩ Reply</span><span>Reopen</span><span>Delete</span></div></div>`;

const html = extraCss + L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  page: L.pageCol(col, { paddingTop: 40 }),
  strip: { reviewCount: 12 },
  status: { style: 'Plain', words: '2,418 words', pages: 'book p. ~146/248', review: '12 to review' },
  ask: 'normal',
  content: pointer,
  extra: L.tip('Add note', { x: 1068, y: 712, key: 'Ctrl+Shift+M' })
    + L.ann(2, 'Click the amber icon: its card opens right there, with a short line from the icon to the card', 1062, 470, { w: 290 })
    + L.ann(3, 'The anchored words are tinted, so there is no doubt which words the note is about', 40, 540, { w: 300 })
    + L.ann(5, 'On the line under the mouse, a faint + in the gutter adds a note (or Ctrl+Shift+M, or right-click ▸ Add note)', 1062, 760, { w: 250 })
    + L.ann(4, 'Esc returns the cursor to the sentence; the card folds back to its icon', 40, 640, { w: 300 })
    + L.ann(1, 'Two notes on one line: one icon with a count', 1086, 316, { w: 300 }),
})
  + `<div class="below"><div class="crop" style="width:360px"><div class="lbl">The same note, marked Done</div>${doneCard}`
  + `</div><div style="padding-top:40px;position:relative;width:420px;height:150px">${L.ann(6, 'Your own notes are the only badges Write shows; readers’ and AI cards wait in Review, with the person’s name. “Done” turns a note green and keeps it', 0, 0, { w: 380 })}</div></div>`;

module.exports = {
  id: 'S14',
  file: 's14-note-in-write',
  title: 'A note, without leaving Write',
  width: 1440,
  height: 900,
  html,
  caption: L.caption({
    id: 'S14', title: 'A note, without leaving Write',
    scene: 'The writer clicked the amber icon at “Nobody came in at nine…”: its card opened beside the line, joined to the icon by a short line, with the anchored words tinted; the note says “check with chapter 10”, and the chapter became a link by itself. Higher up, two notes on one line fold into one icon with a count. The mouse rests on another line, where a faint + offers a new note. Under the window: the same note marked Done, green and kept.',
    on: 'the page with a selected amber note icon, its line and its card (Note ▾ · you · 2 min ago, the text with the link “chapter 10”, Reply · Done · Delete), “since Tuesday” tinted, a folded amber icon with the count 2, the faint + on the hovered line with the tooltip “Add note · Ctrl+Shift+M”, the pointer, the Review tab with 12, the Ask button, the status bar with 12 to review; below, the note marked Done (green, Reply · Reopen · Delete)',
    off: 'blue, green or red badges in the gutter, a reader’s or an AI card, Accept or Reject on a note, the navigator, the Reference panel',
  }),
};
