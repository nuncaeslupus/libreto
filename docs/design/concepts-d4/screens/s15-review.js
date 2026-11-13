// S15: Review. The same text with the margin open: badges of four kinds at the exact lines, a 320 px margin with
// its own scrollbar and the cards level with their lines; the left column carries counts and two filter rows.
const L = require('../lib');
const I = L.icons;

const CT = 66; // top of the content area in window coordinates (title bar 30 + strip 36; the menu bar row is hidden)

const extraCss = `<style>
.page{clip-path:inset(0 -420px)}
/* left column: four kinds of counts, two filter rows, the column's ⋯ menu in the foot */
.nrow .cnt .k-unk{color:var(--spell)}
.navrev{gap:5px;padding:2px 10px 10px;border-bottom:1px solid var(--line2);margin-bottom:6px}
.navrev .kf{flex-wrap:nowrap;gap:0}
.kf span{display:inline-flex;align-items:center;gap:4px;font-size:12px;padding:2px 6px;white-space:nowrap}
.kf svg{width:12px;height:12px}
.kf .k-note svg{color:var(--note)}.kf .k-task svg{color:var(--task)}.kf .k-fix svg{color:var(--fix)}.kf .k-unk svg{color:var(--spell)}
.navfoot{display:flex;gap:6px;align-items:center}
.navfoot .btn{flex:1}
.navfoot .ib.on{background:#e6e6e3;box-shadow:none;color:var(--ink)}
/* the margin: 320 px, its own scrollbar, cards level with their lines */
.mrg{position:absolute;left:calc(100% + 90px);top:0;width:320px;height:806px;background:var(--soft);border-left:1px solid var(--line);text-indent:0;font:12.5px/1.4 var(--ui);z-index:3}
.mrg .mtop{position:absolute;left:12px;right:20px;top:10px;display:flex;align-items:center;gap:8px;color:var(--ink3);font-size:12px}
.mrg .mtop .sp{flex:1}
.mrg .sbar{position:absolute;right:3px;top:6px;bottom:6px;width:6px;border-radius:3px;background:rgba(0,0,0,.05)}
.mrg .sbar i{position:absolute;left:0;right:0;top:0;height:310px;border-radius:3px;background:rgba(0,0,0,.2)}
.mrg .mc{left:12px;width:290px;box-shadow:0 1px 3px rgba(0,0,0,.05);z-index:5;padding:7px 10px 7px}
.mrg .mc .mc-s{color:var(--ink2);font-weight:500}
.mrg .mc.q{color:var(--ink2)}
.mrg .mc.q .mc-b{border-color:var(--line);color:var(--ink2)}
.mrg .mc.sel{border-color:var(--task);box-shadow:0 0 0 3px var(--task-tint),0 6px 18px rgba(0,0,0,.08);z-index:6}
.mrg .mc-a{gap:5px;flex-wrap:wrap}
.mrg .mc-b{padding:2px 7px}
.mrg .mc-b i svg{width:12px;height:12px;display:block}
.mrg .mc-ba{margin:0 0 5px}
.mrg .mc-x{margin:0 0 5px}
.mrg .mc-x .was{background:var(--red-tint);border-radius:2px}.mrg .mc-x .now{background:var(--fix-tint);border-radius:2px}
.mline{position:absolute;height:1.5px;background:var(--task);z-index:4}
.gcnt{font:600 10px var(--ui);color:var(--task);margin-left:2px}
.tf{background:rgba(0,0,0,.045);border-radius:2px}
.ts{background:var(--task-tint);box-shadow:inset 0 -2px 0 rgba(47,111,179,.6);border-radius:2px}
</style>`;

// ---- the text (the end of chapter 7) ----
const col0 = `<p>“Lena,” she said <span class="tf" data-m="done">quietly</span>, “if he’s in trouble, I’d rather hear it from you.”</p>`
  + `<p>“Then hear this.” Lena leaned close enough that Vega could smell <span class="tf" data-m="marta">the lemon on her hands</span>. “Go home. Don’t come back to the Blue Lamp tomorrow. And don’t ask Kit what he saw.”</p>`
  + `<div class="srule"></div>`
  + `<p class="first">Outside, the rain had turned to <span class="tf" data-m="unk">mizzle</span>, the fine kind that does not fall so much as hang. Vega walked the long way around, past the station steps, because it was the way Kit always walked.</p>`
  + `<p>She had asked him once, on the station steps, whether he would ever lie to her.</p>`
  + `<p>Kit <span class="ts" data-m="sel">said no</span>.</p>`
  + `<p>He said it too fast, the way people answer a question they have rehearsed on the walk over, and she had let it go because it was late and she wanted to believe him.</p>`
  + `<p>At the corner of Harbor Street she stopped under <span class="tf" data-m="you">the awning of the pawnshop</span> and counted the windows above the Blue Lamp. Three dark, one lit. The lit one was the back room.</p>`
  + `<p>She did not go back in. She stood there long enough for the light to go out, and then a little longer, in case it came on again.</p>`;

// window y of the top of each marked line (measured from the rendered page)
const Y = { done: 116, marta: 147, unk: 292, sel: 416, you: 509 };
const badgeTop = (y) => y - CT + 7.5;                  // a 16 px badge centered on a 31 px line, col coordinates
const badge = (kind, y, o = {}) => `<span class="gms" style="top:${badgeTop(y)}px"><span class="gm ${kind}${o.sel ? ' sel' : ''}">${I[kind === 'done' ? 'fix' : kind]}</span>${o.n ? `<span class="gcnt">${o.n}</span>` : ''}</span>`;
const gutterHtml = badge('done', Y.done) + badge('note', Y.marta) + badge('unknown', Y.unk) + badge('pending', Y.sel, { sel: true, n: 2 }) + badge('note', Y.you)
  + `<span class="mline" style="left:calc(100% + 50px);width:52px;top:${badgeTop(Y.sel) + 7.5}px"></span>`;

// ---- the cards, in margin coordinates (window y − content top) ----
const SPARK = I.spark;
const mc = (o, sel) => L.markCard({ ...o, x: 12, y: o.y - CT }).replace('class="mc ', `data-m="card-${o.sub}-${o.kind}" class="mc ${sel ? 'sel ' : 'q '}`);
const cards = [
  mc({ kind: 'done', title: 'Done · typo', sub: 'You', y: Y.done - 6, text: 'Was <span class="was">quitely</span>, now <span class="now">quietly</span>', acts: [['✓', 'Keep', ''], ['✗', 'Undo', '']] }),
  mc({ kind: 'note', title: 'Note', sub: 'Marta', y: 213, text: 'The lemon is in <span class="lk">ch. 2</span> too. Keep one?', acts: [['↩', 'Reply', ''], ['✓', 'Done', '']] }),
  mc({ kind: 'unknown', title: 'Unknown · word', sub: 'You', y: 309, acts: [['+', 'Add to dictionary', ''], ['◉', 'Make a Codex entry', '']] }),
  mc({ kind: 'pending', title: 'Pending · continuity', sub: 'AI', y: Y.sel - 6, text: 'In <span class="lk">ch. 10</span> Kit says he “never once” lied to her. One of the two has to give.', before: 'Kit said <span class="was">no</span>.', after: 'Kit said <span class="now">maybe</span>.', acts: [['✓', 'Apply', ''], ['✗', 'Skip', ''], ['E', 'Edit', ''], [SPARK, 'Why?', '']] }, true),
  mc({ kind: 'pending', title: 'Pending · rewrite', sub: 'Marta', y: 574, before: 'Kit <span class="was">said no</span>.', after: '<span class="now">“No,” Kit said</span>.', acts: [['✓', 'Apply', ''], ['✗', 'Skip', ''], ['E', 'Edit', ''], [SPARK, 'Why?', '']] }),
  mc({ kind: 'note', title: 'Note', sub: 'You', y: 700, text: 'The awning comes back in <span class="lk">ch. 9</span>: same word there.', acts: [['↩', 'Reply', ''], ['✓', 'Done', '']] }),
].join('');
const margin = `<div class="mrg"><div class="mtop"><span>Chapter 7 · 6 here</span><span class="sp"></span><span class="btn pri">Review all ▶</span></div>`
  + cards + `<div class="sbar"><i style="top:180px"></i></div></div>`;

const col = margin + col0 + gutterHtml;

// ---- the left column: chapters with counts of the four kinds, two filter rows, the ⋯ menu ----
const K = { note: ['k-note', I.note], pending: ['k-task', I.pending], done: ['k-fix', I.fix], unknown: ['k-unk', I.unknown] };
const cnt = (c) => `<span class="cnt">${Object.entries(c).map(([k, n]) => `<span class="${K[k][0]}">${n}${K[k][1]}</span>`).join('')}</span>`;
const COUNTS = { 3: { pending: 1 }, 4: { pending: 1 }, 7: { note: 2, pending: 2, done: 1, unknown: 1 }, 8: { pending: 1, unknown: 1 }, 9: { done: 1 }, 11: { note: 1 } };
const rows = L.sample.navRows.map((r) => {
  const { notes, tasks, fixes, ...rest } = r;
  return r.type === 'scene' ? { ...rest, here: r.title === 'Vega leaves without paying' } : rest;
});
let nav = L.navigator({ rows });
for (const r of rows.filter((x) => x.type === 'chapter' && COUNTS[x.n])) {
  const t = `<span class="t">${L.esc(r.title)}</span><span class="cnt"></span>`;
  nav = nav.replace(t, `<span class="t">${L.esc(r.title)}</span>${cnt(COUNTS[r.n])}`);
}
const chip = (k, label, on) => `<span class="${k || ''}${on ? ' on' : ''}">${k ? K[{ 'k-note': 'note', 'k-task': 'pending', 'k-fix': 'done', 'k-unk': 'unknown' }[k]][1] : ''}${label}</span>`;
const filters = `<div class="navrev">`
  + `<div class="kf">${chip('', 'All', true)}${chip('k-note', 'Notes')}${chip('k-task', 'Pending')}${chip('k-fix', 'Done')}${chip('k-unk', 'Unknown')}</div>`
  + `<div class="kf">${chip('', 'Anyone', true)}${chip('', 'You')}${chip('', 'Marta')}${chip('', 'AI')}</div></div>`;
nav = nav.replace('<div class="navbody">', filters + '<div class="navbody">')
  .replace('<span class="btn q">+ New chapter</span></div>', `<span class="btn q">+ New chapter</span><span class="ib on" title="More">⋯</span></div>`)
  .replace(/<\/div>$/, `<div class="menu" style="right:10px;bottom:52px;width:262px">`
    + `<div class="mi hov" style="flex-direction:column;align-items:flex-start;gap:1px"><span>Import a reader’s notes…</span><span class="ex">A Word file: its comments and changes</span></div>`
    + `<div class="msep"></div><div class="mi">Collapse all chapters</div></div></div>`);

const html = extraCss + L.win({
  mode: 'Review',
  crumbs: { chapter: 'Chapter 7 · Lena’s warning', scene: 'Vega leaves without paying' },
  strip: { reviewCount: 12 },
  left: nav,
  page: L.pageCol(col, { paddingTop: 50 }),
  status: { style: 'Plain', words: '2,418 words', pages: 'book p. ~146/248', review: '12 to review' },
  ask: 'normal',
  extra: L.ann(1, 'Filters by kind and by person combine: “what did Marta say?” is one click, “AI, pending” two', 330, 252)
    + L.ann(2, 'Comments and changes arrive as blue cards with the reader’s name: from sharing, or Word’s author; anything unnamed is “A reader”; the AI never guesses who someone is', 330, 712, { w: 300 })
    + L.ann(3, 'The four badges at the exact line, one per line; a count when a line holds several', 700, 682, { w: 300 })
    + L.ann(4, 'The margin: 320 px with its own scrollbar; every card level with its line, naming who it is from', 700, 740, { w: 300 })
    + L.ann(5, 'The selected card draws its line and tints its words strongly; the others stay quiet and push away when they collide', 700, 806, { w: 300 })
    + L.ann(6, 'Review all walks the cards one at a time (S34)', 790, 75, { r: true }),
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
    scene: 'The end of chapter 7 in Review: the same text, still editable, with everything that waits for a decision at its line. The AI’s continuity finding on “Kit said no.” is selected; Marta’s rewrite of the same line was pushed down below it. The column’s ⋯ menu is open on Import a reader’s notes….',
    on: 'the Review tab with its count 12; the left column with two filter rows (All · Notes · Pending · Done · Unknown, and Anyone · You · Marta · AI), chapters with counts of the four kinds, chapter 7 open with its scenes, the ⋯ menu with Import a reader’s notes…; the gutter with the four badges at their lines (done, note, unknown, pending with a count of 2, note); the 320 px margin with its scrollbar, Review all ▶ at its top and six cards, each naming its person: a done typo (Keep · Undo), Marta’s note (Reply · Done), an unknown word (Add to dictionary · Make a Codex entry), the selected AI finding (✓ Apply · ✗ Skip · E Edit · Why?) with its line and strongly tinted words, Marta’s pending rewrite, your own note; “12 to review” in the status bar; the Ask button',
    off: 'underlines (they belong to Write), the Reference panel, the walk itself (S34), the import dialog',
  }),
};
