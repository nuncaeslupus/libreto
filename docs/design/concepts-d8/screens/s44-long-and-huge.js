// S44: long and huge. A 200-chapter book, long and missing names, a 60-character word, a 70-character person name,
// two "Kit" entries. One window plus a row of small frames.
const L = require('../lib');

const URL60 = 'harborstreetarchive.example.org/licensing-hours/1987-ledger-p3';
const NAME70 = 'María de las Mercedes Fernández-Villaverde y Montalbán de la Rosa Vega';

const css = `<style>
.s44 .nrow.part{text-transform:none;letter-spacing:0;font:600 12.5px var(--ui);color:var(--ink2)}
.s44 .nrow .gc{font-size:11px}
.s44 .nrow.clamp .t{-webkit-line-clamp:2}
.s44 .nrow.top{align-items:flex-start}
.s44 .nrow.top .n,.s44 .nrow.top .cv{padding-top:1px}
.s44 .srow.un .t{font-style:italic;color:var(--ink3)}
.s44 .col p{overflow-wrap:anywhere}
.s44 .nrow.part{align-items:flex-start}
.s44 .refname.cl{white-space:normal;height:auto!important;max-height:44px;padding-bottom:0;font-size:17px!important;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;line-height:1.25}
.s44 .ql{position:absolute;z-index:30;width:330px;background:#fff;border:1px solid var(--line);border-radius:10px;box-shadow:0 10px 30px rgba(0,0,0,.16);padding:8px 8px 8px}
.s44 .ql .h{font:600 10.5px var(--ui);letter-spacing:.07em;text-transform:uppercase;color:var(--ink3);padding:3px 6px 5px}
.s44 .ql .e{display:flex;gap:10px;align-items:center;padding:6px 8px;border-radius:7px;font-size:13px}
.s44 .ql .e.sel{background:var(--soft)}
.s44 .ql .e i{font-style:normal;width:22px;height:22px;border-radius:50%;background:var(--people);color:#fff;font:600 11px/22px var(--ui);text-align:center;flex:none}
.s44 .ql .e i.t{background:var(--thing)}
.s44 .ql .e small{display:block;color:var(--ink3);font-size:11.5px}
.s44 .ql .f{border-top:1px solid var(--line2);margin-top:4px;padding:5px 8px 1px;font-size:11.5px;color:var(--ink3)}
.s44 .sm{position:relative;background:#fff;border:1px solid #d0d0cc;border-radius:10px;flex:none;overflow:hidden}
.s44 .sm>.lbl{font:600 11px var(--ui);letter-spacing:.06em;text-transform:uppercase;color:#66696e;padding:10px 14px 8px;background:#f2f2f0;border-bottom:1px solid #e2e2df}
.s44 .row2{display:flex;gap:16px;padding:18px 28px 22px;background:#e3e3e0;align-items:flex-start}
.s44 .bc{display:flex;align-items:center;gap:0;height:34px;margin:12px 14px 4px;border:1px solid var(--line2);border-radius:8px;padding:0 10px;font-size:12.5px;white-space:nowrap;overflow:hidden}
.s44 .bc .dd{overflow:hidden;text-overflow:ellipsis;min-width:0}
.s44 .bc .sep{margin:0 6px;color:var(--ink3);flex:none}
.s44 .bc .k{flex:none}
.s44 .note{font-size:12px;color:var(--ink2);padding:0 14px 12px}
.s44 .mc{position:relative;box-shadow:0 1px 3px rgba(0,0,0,.08)}
.s44 .mc-t{overflow-wrap:anywhere;display:block;min-width:0}
</style>`;

const R = (o) => ({ type: 'raw', html: o });
const part = (t, c) => R(`<div class="nrow part"><span class="cv">${L.icons['chevron-right']}</span><span class="t">${t}</span><span class="gc">${c}</span></div>`);
const ch = (n, t, extra = '', cls = '') => R(`<div class="nrow top clamp${cls}${extra}"><span class="cv"></span><span class="n">${n}</span><span class="t">${t}</span></div>`);
const rows = [
  { type: 'matter', title: 'Front matter', hint: '6' },
  part('Part One: Winter in the Harbor District', '1–42'),
  part('Part Two: The long way around the pawnshop and everything that was left behind in it', '43–96'),
  R(`<div class="nrow part"><span class="cv">${L.icons.chevron}</span><span class="t">Part Three: The ledger</span><span class="gc">97–146</span></div>`),
  ch(97, 'Prologue to the ledger'),
  ch(98, 'A note under the office door, left by someone who knew where the spare key was kept and never said so to anyone at all'),
  { type: 'scene', title: 'Vega asks about Kit' },
  R('<div class="srow un"><span class="t">Untitled scene</span></div>'),
  R('<div class="srow un"><span class="t">Empty scene</span></div>'),
  ch(99, '', '', ''),
  ch(100, 'Closing time'),
  ch(101, 'Interlude: harbor lights, written by a different hand than the rest of this book and kept apart'),
  part('Part Four: Everything after', '147–200'),
  { type: 'pinned', title: 'Unplaced', count: '14' },
  { type: 'pinned', title: 'Discarded', count: '31' },
];
// chapter 99 has no title: shows as its number and the first words, gray
rows[9] = R('<div class="nrow top"><span class="cv"></span><span class="n">99</span><span class="t" style="color:var(--ink3);font-style:italic">Untitled</span></div>');
rows.splice(4, 0, R('<div class="nrow top"><span class="cv"></span><span class="n"></span><span class="t" style="font-style:italic">Prologue</span><span class="gc">no number</span></div>'));

const p1 = 'Kit had copied the address into the green ledger in his own cramped hand, and when Vega held the page to the lamp she could read it without turning her head: ';
const p2 = `<span class="u-spell">${URL60}</span>. She read it twice. It was the kind of address that nobody typed on purpose.`;
const p3 = 'Kit would know. Kit always knew, and that was the trouble with him.';
const col = `<div class="chap"><div class="num">CHAPTER 98</div><h1>A note under the office door, left by someone who knew…</h1></div>`
  + `<div class="para"><p class="first">${p1}${p2}</p></div><div class="para"><p><span class="u-note hov">${p3.split('.')[0]}</span>. Kit always knew, and that was the trouble with him.</p></div>`;

const win = L.win({
  view: 'Text', left: L.navigator({ rows, section: 'Book', placeholder: 'Filter 200 chapters' }),
  right: L.reference({ kind: 'Person', name: '', open: 'Open in Codex',
    body: `<div class="refname cl" style="margin:0 0 8px;font:600 19px var(--text)" title="${NAME70}">${NAME70}</div><div style="color:var(--ink3);font-size:12px;margin-bottom:10px">also: Doña Mercedes · la Condesa</div>` + L.refCard({ name: false, initial: 'M', pic: false, line: 'owner of the pawnshop' }) }),
  crumbs: `<span class="crumbs"><span class="dd ch" style="max-width:110px">Part Three: The ledger</span><span class="sep">›</span><span class="dd ch" style="max-width:150px">98 A note under the office door, left by…</span><span class="sep">›</span><span class="dd">Untitled scene</span></span>`,
  page: L.pageCol(col, { paddingTop: 70 }),
  strip: { review: 99, leftOn: true },
  status: { style: 'Plain', words: '412,306 words', goal: 41, pages: 'p. 612 of 1,004' },
  ask: 'normal',
  extra: `<div class="ql" style="left:610px;top:560px"><div class="h">Quick look · “Kit”: 2 entries</div>
      <div class="e sel"><i>K</i><span>Kit<small>Person · the boy with the green ledger</small></span></div>
      <div class="e"><i class="t">k</i><span>Kit, the bag<small>Thing · Vega’s canvas kit bag</small></span></div>
      <div class="f">Enter opens in the side panel · ↓ the other one</div></div>`
    + L.ann(1, '200 chapters, parts collapsed; a long title is cut at two lines (the full name on hover); the number stays on line 1', 330, 120, { w: 330 }).replace('left:330px', 'left:340px')
    + L.ann(2, 'Parts in mixed case, never forced capitals; an untitled chapter reads “Untitled”, an empty scene “Empty scene”', 20, 590, { w: 300 }).replace('left:20px', 'left:340px').replace('top:590px', 'top:445px')
    + L.ann(3, 'The breadcrumb gives up the deepest names first; past 20 siblings its menus have a filter', 340, 770, { w: 300 })
    + L.ann(4, 'A 60-character word with no spaces breaks at the column edge, so nothing runs under the panels', 1075, 330, { w: 250 }).replace('left:1075px', 'left:1070px')
    + L.ann(5, 'Two entries share a name: the quick look lists both, with what each is', 1070, 560, { w: 280 })
    + L.ann(6, 'A 70-character name clamps to two lines; the full name on hover, aliases under it', 1120, 130, { w: 290 }).replace('left:1120px', 'left:1070px').replace('top:130px', 'top:400px'),
}).replace('<div class="win"', '<div class="win s44"');

const card = `<div class="sm" style="width:420px"><div class="lbl">A card’s Was / Now with the long word</div><div style="padding:14px">`
  + L.markCard({ kind: 'pending', title: 'Suggestion · link without https', who: 'L', before: `see <span class="was">${URL60}</span>`, after: `see <span class="now">https://${URL60}</span>`, x: 0, y: 0, w: 390, foot: false }).replace('class="mc pending"', 'class="mc pending" ')
  + `</div><div class="note">Long words wrap inside the card; a long Was or Now shows six lines, then “Show the whole paragraph”.</div></div>`;

const bcs = `<div class="sm" style="width:540px"><div class="lbl">Breadcrumb, truncated by priority as the strip narrows</div>`
  + [['Part Three: The ledger', '98 A note under the office door…', 'Untitled scene', 330], ['Part Th…', '98 A note under…', 'Untitled scene', 330], ['', '98 A note un…', 'Untitled s…', 330]].map(([a, b, c], i) => `<div class="bc" style="width:${[480, 330, 220][i]}px">${a ? `<span class="dd">${a}</span><span class="sep">›</span>` : ''}<span class="dd">${b}</span><span class="sep">›</span><span class="dd k">${c}</span></div>`).join('')
  + `<div class="note">First the part goes, then the chapter shrinks; the scene, where you are, is kept longest.</div></div>`;

const nav = `<div class="sm" style="width:380px"><div class="lbl">Two ways to move in 200 chapters</div><div style="padding:12px 14px 12px;font-size:13px;color:var(--ink2);line-height:1.5">`
  + `<div class="opt" style="border:1px solid var(--line);border-radius:7px;padding:6px 9px;margin-bottom:8px"><b style="color:var(--ink)">Filter</b> at the head of the Navigator finds a title in the whole list.</div>`
  + `<div class="opt" style="border:1px solid var(--line);border-radius:7px;padding:6px 9px"><b style="color:var(--ink)">Whole book</b> shows only the chapters near you; the scroll bar is the book, and Show ▾ ▸ One chapter keeps one chapter at a time.</div></div></div>`;

const html = css + win + `<div class="s44"><div class="row2">${card}${bcs}${nav}</div></div>`;

module.exports = {
  id: 'S44', file: 's44-long-and-huge', title: 'A long book and long names', width: 1440, height: 1230, html,
  caption: L.caption({
    id: 'S44', title: 'A long book and long names',
    scene: 'The Blue Lamp as a 412,000-word book of 200 chapters, with everything too long: titles, a name, a web address. Under the window: a card with the long word, the breadcrumb at three widths, and how to move in a book this size.',
    on: 'the Navigator with parts collapsed and one open, two-line clamped titles, an unnumbered Prologue, “Untitled” and “Empty scene” rows, Unplaced and Discarded; a breadcrumb cut by priority; a 60-character word wrapping in the text; the side panel head clamped at two lines; a quick look with two Kit entries',
    off: 'capitals forced on part names, a filter box in short menus, a scroll bar that jumps, horizontal scrolling',
  }),
};
