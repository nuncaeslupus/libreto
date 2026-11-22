// S16: Text view with notes. Your own note being typed beside its line, a hollow gray bubble for Marta's note
// (hover: "Marta · 1 note · Open in Review"), and the Show menu open with Notes: Mine · All · None.
const C = require('../rev-common');
const { L, I } = C;
const P = L.sample.chapter7Plain.slice();
P[4] = P[4].replace('He said he’d meet me here at nine.', '<span class="u-note" data-m="tint">He said he’d meet me here at nine.</span>');

const css = `<style>
.s16 .noted{position:absolute;left:calc(100% + 44px);width:262px;background:#fff;border:1px solid #e2aa28;border-radius:9px;box-shadow:0 0 0 3px rgba(226,170,40,.16),0 8px 22px rgba(0,0,0,.10);padding:8px 10px 8px;font:12.5px/1.4 var(--ui);text-indent:0;z-index:5}
.s16 .noted .h{display:flex;align-items:center;gap:7px;margin-bottom:5px}
.s16 .noted .h svg{width:14px;height:14px;color:var(--note)}
.s16 .noted .h b{font-weight:600}.s16 .noted .h .wh{margin-left:auto}
.s16 .noted .in{font:14px/1.45 var(--text);color:var(--ink);min-height:40px}
.s16 .noted .in .cursor{display:inline-block;width:1.5px;height:15px;background:var(--ink);vertical-align:-2px;margin-left:1px}
.s16 .noted .a{display:flex;gap:6px;align-items:center;border-top:1px solid var(--line2);padding-top:6px;margin-top:6px;color:var(--ink3);font-size:11.5px}
.s16 .noted .a .b{border:1px solid var(--accent);color:var(--accent);border-radius:6px;padding:2px 9px;font-size:12px;background:#fff}
.s16 .nl{position:absolute;left:calc(100% + 24px);width:22px;height:1.5px;background:#e2aa28;z-index:4}
.s16 .showm{position:absolute;right:24px;bottom:30px;width:300px;z-index:45;padding:6px}
.s16 .showm .mi .l{flex:1}
.s16 .showm .ck{width:14px;color:var(--accent);font-size:12px}
.s16 .seg3{display:inline-flex;border:1px solid var(--line);border-radius:6px;overflow:hidden;font-size:12px}
.s16 .seg3 span{padding:2px 9px;color:var(--ink2);background:#fff}.s16 .seg3 span+span{border-left:1px solid var(--line)}
.s16 .seg3 .on{background:var(--ink);color:#fff}
.s16 .status .sb.on{background:#e6e6e3}
</style>`;

const col = `<div class="chap"><div class="num">CHAPTER 7</div><h1>Lena’s warning</h1></div>`
  + P.map((p, i) => {
    const para = `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`;
    let g = '';
    if (i === 1) g = `<span class="bb oth" data-m="marta" style="top:${L.lineTop(0)}px">1<i></i></span>`;
    if (i === 4) g = `<span class="bb mine" data-m="mine" style="top:${L.lineTop(0)}px">1</span><span class="nl" style="top:${L.lineTop(0) + 7}px"></span>`
      + `<div class="noted" data-m="noted" style="top:${L.lineTop(0) - 8}px"><div class="h">${I.note}<b>New note</b><span class="wh Y">You</span></div><div class="in">Does Vega already know about the spare key? Check ch. 10<span class="cursor"></span></div><div class="a"><span class="b">Done</span><span>Enter adds · Shift+Enter new line · Esc cancels</span></div></div>`;
    return `<div class="para">${para}${g}</div>`;
  }).join('');

const showMenu = `<div class="menu showm">`
  + `<div class="mhd">Show</div>`
  + `<div class="mi"><span class="ck">✓</span><span class="l">Marks (spelling, suggestions)</span></div>`
  + `<div class="mi"><span class="ck">✓</span><span class="l">Notes</span><span class="r" style="padding:0"><span class="seg3"><span>Mine</span><span class="on">All</span><span>None</span></span></span></div>`
  + `<div class="mi"><span class="ck"></span><span class="l">Scene names</span></div>`
  + `<div class="msep"></div>`
  + `<div class="mi"><span class="ck">✓</span><span class="l">Whole book</span><span class="r">one chapter</span></div>`
  + `<div class="mi"><span class="ck"></span><span class="l">Show names and styles</span><span class="r"><kbd>Ctrl+Shift+A</kbd></span></div></div>`;

const html = css + C.css + L.win({
  view: 'Text', crumbs: L.sample.crumbs7, strip: { review: 12 },
  page: L.pageCol(col, { paddingTop: 24 }),
  status: { style: 'Plain', words: '812 of 1,000 today', goal: 81, pages: 'p. 146 of 248', show: 'Show' },
  ask: 'normal',
  extra: showMenu + L.tip('Marta · 1 note · Open in Review', { x: 1076, y: 296 }) + `<svg class="cursorptr" style="left:1056px;top:316px" width="14" height="20" viewBox="0 0 14 20"><path d="M1 1v15l4-3.5 2.5 6 2.5-1-2.5-5.5H13z" fill="#fff" stroke="#222" stroke-width="1.2" stroke-linejoin="round"/></svg>`
    + L.ann(2, 'Your note, typed right beside its line; the words it holds are tinted amber', 20, 440, { w: 270 })
    + L.ann(1, 'Marta’s note shows as a hollow gray bubble: it is someone else’s, so it is quiet. Hover says who and how many', 20, 290, { w: 280 })
    + L.ann(3, 'Show ▸ Notes decides whose notes the gutter shows: Mine (the default) · All · None. Here All is chosen, so Marta’s note shows', 20, 640, { w: 300 }),
}).replace('<div class="win"', '<div class="win s16"');

module.exports = {
  id: 'S16', file: 's16-notes-while-writing', title: 'Notes while you write', width: 1440, height: 900,
  html,
  caption: L.caption({
    id: 'S16', title: 'Notes while you write',
    scene: 'Text view of chapter 7. The writer is typing a note of their own beside “He said he’d meet me here at nine.”; its amber bubble and tinted words show where it will sit. Higher up, Marta’s note on another paragraph is a hollow gray bubble, and the mouse rests on it. The Show menu in the status bar is open on Notes: Mine · All · None, with All chosen.',
    on: 'the strip with Review 12 (not pressed); the note editor beside its line (New note · You, text with cursor, Done); one amber bubble and amber-tinted words; one hollow gray bubble with a tooltip “Marta · 1 note · Open in Review”; the Show menu (Marks, Notes Mine · All · None with All chosen, Scene names, Whole book, Show names and styles); the status bar with the goal ring; the Ask button',
    off: 'the Review margin, any suggestion or spelling mark card, the navigator, Marta’s note text',
  }),
};
