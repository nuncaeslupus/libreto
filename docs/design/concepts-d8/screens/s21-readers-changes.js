// S21: readers' changes inline in the text (Marta and Teo: initial + tint, ✓ ✗ per change), an auto-merged paragraph,
// one true conflict as a card with three rows, and the "Unplaced comments (4)" group in the margin.
const C = require('../rev-common');
const { L, I, who, btn } = C;

const css = `<style>
.s21 .col{font-size:17px}
.s21 .chg{position:relative}
.s21 .ini{display:inline-flex;align-items:center;justify-content:center;width:14px;height:14px;border-radius:7px;font:700 8.5px/1 var(--ui);vertical-align:2px;margin-right:2px;text-indent:0}
.s21 .M .ini{background:#6f4fc9;color:#fff}.s21 .T .ini{background:#177089;color:#fff}.s21 .Y .ini{background:#55585e;color:#fff}
.s21 .chg del{margin-right:4px;text-decoration:line-through;text-decoration-thickness:1.3px}
.s21 .M del,.s21 .M ins{background:rgba(111,79,201,.14);text-decoration-color:#6f4fc9}
.s21 .T del,.s21 .T ins{background:rgba(26,127,156,.14);text-decoration-color:#177089}
.s21 .M ins,.s21 .T ins{text-decoration:none;border-bottom:1.5px solid currentColor}
.s21 .M ins{border-color:#6f4fc9}.s21 .T ins{border-color:#177089}
.s21 .yr{background:rgba(0,0,0,.06);border-bottom:1.5px solid var(--ink3);border-radius:2px}
.s21 .dec{display:inline-flex;gap:2px;vertical-align:1px;margin-left:3px;text-indent:0;font:600 10px/1 var(--ui)}
.s21 .dec i{font-style:normal;width:15px;height:15px;border-radius:4px;border:1px solid var(--line);background:#fff;display:inline-flex;align-items:center;justify-content:center;color:var(--ink2)}
.s21 .dec i:first-child{color:var(--fix);border-color:#bcd9c9}
.s21 .merged{display:flex;align-items:center;gap:8px;font:12px var(--ui);color:var(--ink2);margin:2px 0 10px;text-indent:0;padding:4px 10px;background:var(--soft);border:1px solid var(--line2);border-radius:7px}
.s21 .merged svg{width:13px;height:13px;color:var(--fix)}
.s21 .merged .lk{margin-left:auto}
.s21 .cf{margin:12px 0 14px;border:1px solid var(--line);border-radius:10px;background:#fff;font:14.5px/1.5 var(--text);text-indent:0;box-shadow:0 0 0 3px rgba(226,170,40,.14),0 2px 10px rgba(0,0,0,.05)}
.s21 .cf .hd{display:flex;gap:8px;align-items:center;padding:8px 14px;border-bottom:1px solid var(--line2);font:600 12.5px var(--ui)}
.s21 .cf .hd small{font-weight:400;color:var(--ink3)}
.s21 .cf .r{display:flex;gap:12px;padding:8px 14px;border-bottom:1px solid var(--line2)}
.s21 .cf .r .l{width:76px;flex:none;font:600 10.5px/1.9 var(--ui);letter-spacing:.07em;text-transform:uppercase;color:var(--ink3)}
.s21 .cf .r .l.m{color:#5b3fb0}
.s21 .cf .r.t{background:#fafaf8}
.s21 .cf .a .btn svg{width:13px;height:13px;color:var(--accent)}
.s21 .cf .a{display:flex;gap:8px;align-items:center;padding:8px 14px;background:var(--soft);border-radius:0 0 10px 10px;font:12.5px var(--ui)}
.s21 .cf .a .sp{flex:1}
.s21 .cf mark{background:rgba(226,170,40,.28);border-radius:2px;padding:0 1px}
.s21 .ug{margin:0 12px 0;background:#fff;border:1px solid var(--line);border-radius:9px}
.s21 .ug .gh{display:flex;align-items:center;gap:6px;padding:7px 10px;font-weight:600}
.s21 .ug .gh small{font-weight:400;color:var(--ink3);margin-left:4px}
.s21 .ug .u{display:flex;gap:8px;padding:7px 10px;border-top:1px solid var(--line2);align-items:flex-start}
.s21 .ug .u .q{font:italic 13px var(--text);color:var(--ink)}
.s21 .ug .u small{display:block;color:var(--ink3);font:11.5px var(--ui)}
.s21 .ug .u .lk{margin-left:auto;white-space:nowrap;font-size:12px}
.s21 .rvm .sum2{margin:8px 14px 0;color:var(--ink2);font-size:12.5px}
</style>`;
const dec = '<span class="dec"><i>✓</i><i>✗</i></span>';
const chg = (w, del, ins) => `<span class="chg ${w}"><span class="ini">${w}</span><del>${del}</del><ins>${ins}</ins>${dec}</span>`;

const col = `<div class="para"><p class="first">Vega took the stool at the end of the bar, the one with a view of the back-room door. “Has Kit been in?”</p></div>`
  + `<div class="para"><p>“Kit who?” Lena set a glass down ${chg('M', 'hard enough to make it ring', 'harder than she meant to')}. “Half the city’s called ${chg('T', 'Kit', 'any Kit you like')}.”</p></div>`
  + `<div class="para"><p>“Mine. Thin, nervous, writes everything down in a <span class="chg Y"><span class="yr">little green ledger</span></span>.” Vega slid a coin across the counter and left her hand on it. “He said he’d meet me ${chg('M', 'here at nine', 'here at nine, no later')}.”</p><div class="merged">${I.fix}<span>You and Marta changed different words: merged</span><span class="lk">Undo</span></div></div>`
  + `<div class="cf" data-m="cf"><div class="hd">${who('M')}<span>You and Marta both changed this paragraph</span><small>choose which to use</small></div>`
  + `<div class="r t"><span class="l">Sent Nov 7</span><span>Lena looked at the coin, then at the door behind her, then at nothing at all.</span></div>`
  + `<div class="r"><span class="l">Yours</span><span>Lena looked at the coin, then at the door behind her, <mark>and at nothing</mark>.</span></div>`
  + `<div class="r"><span class="l m">Marta’s</span><span>Lena looked at the coin, then <mark>at the door. She would not look at Vega</mark>.</span></div>`
  + `<div class="a"><span class="btn">Use mine</span><span class="btn">Use Marta’s</span><span class="sp"></span><span class="btn">${I.spark}Merge for me</span><span style="color:var(--ink3)">≈0.01 €</span></div></div>`
  + `<div class="para"><p>“Nobody came in at nine. Nobody’s been in that room since Tuesday.”</p></div>`;

const unplaced = `<div class="ug"><div class="gh">▾ Unplaced comments (4)<small>words cut</small></div>`
  + `<div class="u">${who('M')}<span><span class="q">“a green door that never opened”</span><small>ch. 7 · Marta · Nov 7</small></span><span class="lk">Place…</span></div>`
  + `<div class="u">${who('M')}<span><span class="q">“the clock over the till”</span><small>ch. 7 · Marta · Nov 7</small></span><span class="lk">Place…</span></div>`
  + `<div class="u">${who('T')}<span><span class="q">“Is Lena older than forty?”</span><small>ch. 7 · Teo · Nov 9</small></span><span class="lk">Place…</span></div>`
  + `<div class="u">${who('M')}<span><span class="q">“two glasses, one dry”</span><small>ch. 7 · Marta · Nov 7</small></span><span class="lk">Place…</span></div></div>`;

const panel = `<div class="rvm" data-m="rvm"><div class="rh"><div class="r1"><b>Review</b><span class="sp"></span><span class="pg2"><span class="on">Page</span><span>List</span></span></div>`
  + `<div class="rounds"><div class="rd2 on">${who('M')}<span class="nm">Marta <small>· Nov 7</small></span><span class="pr"><i style="width:50%"></i></span><span class="ct">150 / 300</span></div><div class="rd2 on">${who('T')}<span class="nm">Teo <small>· Nov 9</small></span><span class="pr"><i style="width:0"></i></span><span class="ct">0 / 41</span></div></div>`
  + C.toggles({ Notes: true, Suggestions: true, Fixed: false, Spelling: false, Unread: false, Resolved: false })
  + `<div class="sum2" style="margin:9px 0 10px;margin-left:0">In this chapter: <b>11 changes</b> · 5 taken · 1 conflict</div></div>`
  + unplaced + `</div>`;

const html = css + C.css + L.win({
  view: 'Text', crumbs: { chapter: 'Chapter 7 · Lena’s warning', scene: 'Lena lies about the back room' },
  strip: { review: 12, reviewOn: true },
  page: L.pageCol(col, { paddingTop: 30 }),
  right: panel, ask: false,
  status: { style: 'Plain', words: '2,418 words', pages: 'p. 146 of 248' },
  extra: L.ann(1, 'Each reader’s changes sit in the text: their initial and tint, ✓ takes the change, ✗ leaves yours', 20, 180, { w: 330 })
    + L.ann(2, 'Different readers, different tints, the same sentence', 20, 262, { w: 330 })
    + L.ann(3, 'Different words changed by you and Marta: merged on its own, and one click undoes it', 20, 460, { w: 330 })
    + L.ann(4, 'A true conflict is one card with three rows: what you sent, yours, hers. Merge for me is the AI and shows its price', 20, 600, { w: 330 })
    + L.ann(5, 'Comments whose words are gone are kept, grouped at the top of the margin, to place by hand', 760, 770, { w: 320 }),
}).replace('<div class="win"', '<div class="win s21"');

module.exports = {
  id: 'S21', file: 's21-readers-changes', title: 'Readers’ changes in the text', width: 1440, height: 900,
  html,
  caption: L.caption({
    id: 'S21', title: 'Readers’ changes in the text',
    scene: 'After the import, Review is open on chapter 7. Marta’s and Teo’s changes appear inline, each with an initial and a tint and a ✓ ✗. One paragraph was merged on its own because you and Marta changed different words. One paragraph is a real conflict and is a card with three rows.',
    on: 'Review pressed; inline changes by M (violet) and T (teal) with ✓ ✗; your own change marked gray; the merged line “You and Marta changed different words: merged · Undo”; the conflict card (Sent Nov 7 / Yours / Marta’s, Use mine · Use Marta’s · Merge for me ✦ ≈0.01 €); the margin with two rounds, the toggles, “Unplaced comments (4)”',
    off: 'a side-by-side compare sheet, per-paragraph “Yours | Marta’s” columns, the walk',
  }),
};
