// S15: Review. The same text, underlines on, with the margin open: badges of four kinds at the exact lines, a 320 px
// margin with the cards level with their lines and two buttons at its top; the left column has counts and two toggle rows.
const L = require('../lib');
const I = L.icons;

const CT = 92; // top of the content area in window coordinates (title bar 30 + menu bar 26 + strip 36)

const extraCss = `<style>
.page{clip-path:inset(0 -420px)}
/* left column: four kinds of counts and the two toggle rows */
.nrow .cnt .k-unk{color:var(--spell)}
.navrev{gap:6px;padding:2px 10px 10px;border-bottom:1px solid var(--line2);margin-bottom:6px}
.u-note{border-bottom:2px dotted var(--note);padding-bottom:1px}
.ts{background:var(--task-tint);border-radius:2px}
.col>.gm{position:absolute;left:calc(100% + 14px)}
.navrev .kf{flex-wrap:nowrap;gap:0}
.kf span{display:inline-flex;align-items:center;gap:4px;font-size:12px;padding:2px 6px;white-space:nowrap}
.kf svg{width:12px;height:12px}
.kf .k-note svg{color:var(--note)}.kf .k-task svg{color:var(--task)}.kf .k-fix svg{color:var(--fix)}.kf .k-unk svg{color:var(--spell)}
.navfoot{display:flex;gap:6px;align-items:center}
.navfoot .btn{flex:1}
.navfoot .ib.on{background:#e6e6e3;box-shadow:none;color:var(--ink)}
/* the margin: 320 px, its own scrollbar, cards level with their lines */
.mrg{position:absolute;left:calc(100% + 90px);top:0;width:320px;height:779px;background:var(--soft);border-left:1px solid var(--line);text-indent:0;font:12.5px/1.4 var(--ui);z-index:3}
.mrg .mtop{position:absolute;left:12px;right:20px;top:10px;display:flex;align-items:center;gap:8px;color:var(--ink3);font-size:12px}
.mrg .mtop .btn{flex:1;justify-content:center}
.mrg .mtop .btn.hv{box-shadow:0 0 0 3px var(--accent-tint);border-color:var(--accent)}
.mrg .mtip{left:22px;width:270px;top:48px;font-size:11.5px;line-height:1.4;padding:7px 10px}
.mrg .mtop .sp{flex:1}
.mrg .sbar{position:absolute;right:3px;top:6px;bottom:6px;width:6px;border-radius:3px;background:rgba(0,0,0,.05)}
.mrg .sbar i{position:absolute;left:0;right:0;top:0;height:310px;border-radius:3px;background:rgba(0,0,0,.2)}
.mrg .mc{left:12px;width:290px;box-shadow:0 1px 3px rgba(0,0,0,.05);z-index:5;padding:7px 10px 7px}
.mrg .mc .mc-s{color:var(--ink2);font-weight:500}
.mrg .mc.q{color:var(--ink2)}
.mrg .mc.q .mc-b{border-color:var(--line);color:var(--ink2)}
.mrg .mc.sel{border-color:var(--task);box-shadow:0 0 0 3px var(--task-tint),0 6px 18px rgba(0,0,0,.08);z-index:6}
.mrg .mc-a{gap:5px;flex-wrap:wrap}
.mrg .mc-b{padding:2px 6px;gap:4px}
.mrg .mc-a{gap:4px}
.mrg .mc-b i svg{width:12px;height:12px;display:block}
.mrg .mc-ba{margin:0 0 5px}
.mrg .mc-x{margin:0 0 5px}
.mrg .mc-x .was{background:var(--red-tint);border-radius:2px}.mrg .mc-x .now{background:var(--fix-tint);border-radius:2px}
.mline{position:absolute;height:1.5px;background:var(--task);z-index:4}
.gcnt{font:600 10px var(--ui);color:var(--task);margin-left:2px}
</style>`;

// ---- the text (the end of chapter 7): the underlines stay on in Review ----
const col0 = `<p>“Lena,” she said <span class="u-fix" data-m="done">quietly</span>, “if he’s in trouble, I’d rather hear it from you.”</p>`
  + `<p>“Then hear this.” Lena leaned close enough that Vega could smell <span class="u-note" data-m="marta">the lemon on her hands</span>. “Go home. Don’t come back to the Blue Lamp tomorrow. And don’t ask Kit what he saw.”</p>`
  + `<div class="srule"></div>`
  + `<p class="first">Outside, the rain had turned to <span class="u-spell" data-m="unk">mizzle</span>, the fine kind that does not fall so much as hang. Vega walked the long way around, past the station steps, because it was the way Kit always walked.</p>`
  + `<p>She had asked him once, on the station steps, whether he would ever lie to her.</p>`
  + `<p><span class="u-note" data-m="kit">Kit</span> <span class="u-gram ts" data-m="sel">said no</span>.</p>`
  + `<p>He said it too fast, the way people answer a question they have rehearsed on the walk over, and she had let it go because it was late and she wanted to believe him.</p>`
  + `<p>At the corner of Harbor Street she stopped under <span class="u-note" data-m="you">the awning of the pawnshop</span> and counted the windows above the Blue Lamp. Three dark, one lit. The lit one was the back room.</p>`
  + `<p>She did not go back in. She stood there long enough for the light to go out, and then a little longer, in case it came on again.</p>`;

// window y of the top of each marked line (measured from the rendered page)
const Y = { done: 263, marta: 293, unk: 440, sel: 564, you: 656 };
const badgeTop = (y) => y - CT + 7.5;                  // a 16 px badge centered on a 31 px line, col coordinates
const gutterHtml = L.gm('done', badgeTop(Y.done)) + L.gm('note', badgeTop(Y.marta)) + L.gm('unknown', badgeTop(Y.unk))
  + L.gutter(['pending', 'note'], badgeTop(Y.sel), { sel: true }).replace('class="gm stack', 'data-m="stack" class="gm stack')
  + L.gm('note', badgeTop(Y.you))
  + `<span class="mline" style="left:calc(100% + 40px);width:50px;top:${badgeTop(Y.sel) + 7.5}px"></span>`;

// ---- the cards, in margin coordinates (window y − content top); no keys: they are not opened from the keyboard ----
const SPARK = I.spark;
const mc = (o, sel) => L.markCard({ foot: false, ...o, x: 12, y: o.y - CT }).replace('class="mc ', `class="mc ${sel ? 'sel ' : 'q '}`);
const cards = [
  mc({ kind: 'done', title: 'Done · typo', who: 'You', y: Y.done - 6, text: 'Was <span class="was">quitely</span>, now <span class="now">quietly</span>', acts: [['✓', 'Keep', ''], ['✗', 'Undo', '']] }),
  mc({ kind: 'note', title: 'Note · Marta', who: 'M', y: 350, text: 'The lemon is in <span class="lk">ch. 2</span> too. Keep one?', acts: [['↩', 'Reply', ''], ['✓', 'Resolve', '']] }),
  mc({ kind: 'unknown', title: 'Unknown · word', who: 'You', y: Y.unk + 4, acts: [['–', 'Ignore here', ''], ['+', 'Add to dictionary', '']] }),
  mc({ kind: 'pending', title: 'Pending · continuity', who: 'ai', y: Y.sel - 6, text: 'In <span class="lk">ch. 10</span> Kit says he “never once” lied to her. One of the two has to give.', before: 'Kit said <span class="was">no</span>.', after: 'Kit said <span class="now">maybe</span>.', acts: [['✓', 'Apply', ''], ['✗', 'Dismiss', ''], ['✎', 'Edit', ''], [SPARK, 'Why?', '']], foot: 'Ctrl+. opens · F8 next · Shift+F8 previous' }, true)
    .replace('class="mc ', 'data-m="selcard" class="mc '),
  mc({ kind: 'note', title: 'Note · Marta', who: 'M', y: 787, text: 'Give him a beat before he answers?', acts: [['↩', 'Reply', ''], ['✓', 'Resolve', '']] }),
  mc({ kind: 'note', title: 'Note · You', who: 'You', y: 890, text: 'The awning comes back in <span class="lk">ch. 9</span>: same word there.', acts: [['↩', 'Reply', ''], ['✓', 'Resolve', '']] }),
].join('');
const ADD_TIP = 'A copy of this project that came back with comments or changes, from Word or from Libreto: its notes arrive here as cards, with the reader’s name and date.';
const margin = `<div class="mrg"><div class="mtop" data-m="mtop"><span class="btn pri">Review all ▶</span><span class="btn hv" data-m="addbtn">Add notes from a file…</span></div>`
  + `<div class="tip wrap mtip">${L.esc(ADD_TIP)}</div>`
  + cards + `<div class="sbar"><i style="top:180px"></i></div></div>`;

const col = margin + col0 + gutterHtml;

// ---- the left column: chapters with counts of the four kinds, the two toggle rows ----
const K = { note: ['k-note', I.note], pending: ['k-task', I.pending], done: ['k-fix', I.fix], unknown: ['k-unk', I.unknown] };
const cnt = (c) => `<span class="cnt">${Object.entries(c).map(([k, n]) => `<span class="${K[k][0]}">${n}${K[k][1]}</span>`).join('')}</span>`;
const COUNTS = { 3: { pending: 1 }, 4: { pending: 1 }, 7: { note: 3, pending: 1, done: 1, unknown: 1 }, 8: { pending: 1, unknown: 1 }, 9: { done: 1 }, 11: { note: 1 } };
const rows = L.sample.navRows.map((r) => {
  const { notes, tasks, fixes, ...rest } = r;
  return r.type === 'scene' ? { ...rest, here: r.title === 'Vega leaves without paying' } : rest;
});
let nav = L.navigator({ rows, review: true }).replace('<div class="navrev">', '<div class="navrev" data-m="filters">');
for (const r of rows.filter((x) => x.type === 'chapter' && COUNTS[x.n])) {
  const t = `<span class="t">${L.esc(r.title)}</span><span class="cnt"></span>`;
  nav = nav.replace(t, `<span class="t">${L.esc(r.title)}</span>${cnt(COUNTS[r.n])}`);
}

const html = extraCss + L.win({
  mode: 'Review',
  crumbs: { chapter: 'Chapter 7 · Lena’s warning', scene: 'Vega leaves without paying' },
  strip: { reviewCount: 12 },
  left: nav,
  page: L.pageCol(col, { paddingTop: 170 }),
  status: { style: 'Plain', words: '2,418 words', pages: 'p. 146 of 248' },
  ask: 'normal',
  extra: L.ann(1, 'Filters are toggles that stack: one row by kind, one by person; “what did Marta say?” is one click', 300, 128, { w: 250 })
    + L.ann(2, 'The two things you do here, at the top of the margin; the hover says what “a file” means', 755, 98, { r: true, w: 330 })
    + L.ann(3, 'Each card names its person (M, You, the spark) and shows only its buttons: Apply · Dismiss · Edit, and Why? for the AI’s reasons', 16, 690, { w: 250 })
    + L.ann(4, 'Two kinds on one line: one gray stack with the count; the line to the selected card stays horizontal', 16, 772, { w: 250 }),
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
    scene: 'The end of chapter 7 in Review: the same text, still editable, its underlines still on, with everything that waits for a decision at its line. The AI’s continuity finding on “Kit said no.” is selected; Marta’s note on the same line sits under it. The pointer rests on Add notes from a file…, and its tooltip says what it means.',
    on: 'Review pressed on the mode switch with its count 12; the left column with the two toggle rows (Notes · Pending · Done · Unknown, You · Marta · AI) and chapters with counts of the four kinds; the text with its underlines (green, red, blue, amber on notes); the gutter badges at their lines (done, note, unknown, a gray stack of 2 on the selected line, note); the margin with Review all ▶ and Add notes from a file… at its top, the tooltip, and the cards, each with its person’s initial: a done typo (Keep · Undo), Marta’s note (Reply · Resolve), an unknown word (Ignore here · Add to dictionary), the selected AI finding (Apply · Dismiss · Edit · Why?) with its horizontal line and keys footer, Marta’s second note (your own note on the awning is below, the margin scrolls); the Ask button',
    off: 'the Reference panel, the walk itself (S34), the file chooser (S22), a People ▾ menu (only past three people)',
  }),
};
