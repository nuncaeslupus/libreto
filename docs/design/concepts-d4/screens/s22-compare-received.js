// S22: A reader's copy, in Review. Marta's Word copy came back through "Add notes from a file…";
// Review opens filtered to that import: her changes side by side at their paragraphs, her note as a card.
const L = require('../lib');
const I = L.icons;
const CT = 92; // top of the content area in window coordinates (title bar 30 + menu bar 26 + strip 36)

// the page: one folded decided row, a change only Marta made, a folded stretch, a paragraph both changed, her note
const two = (o) => `<div class="choice two" data-b="${o.id}"><div class="cols">`
  + `<div><div class="lab">Yours${o.mineLab ? ` <i>${o.mineLab}</i>` : ''}</div>${o.mine}</div>`
  + `<div><div class="lab">Marta’s <i>Nov 7</i></div>${o.hers}</div></div>`
  + `<div class="acts"><span class="btn">Keep mine</span><span class="btn">Take Marta’s</span><span class="btn">Edit</span>${o.merge ? `<span class="btn">${I.spark}Merge for me</span>` : ''}<span class="sp"></span><small>${o.note || ''}</small></div></div>`;

const col = `<div class="decided">${I.fix}<span>Took Marta’s</span><span class="q">“You’re early,” Lena said without looking up. “Or late…”</span><span class="lk">Undo</span></div>`
  + `<p>Vega took the stool at the end of the bar, the one with a view of the back-room door. “Has Kit been in?”</p>`
  + two({ id: 'a',
    mine: '“Kit who?” Lena set a glass down <span class="chg">hard enough to make it ring</span>. “Half the city’s called Kit.”',
    hers: '“Kit who?” Lena set a glass down <span class="chg">harder than she meant to</span>. “Half the city’s called Kit.”',
    })
  + `<div class="fold"><span class="cv">${I['chevron-right']}</span>14 paragraphs unchanged</div>`
  + two({ id: 'b', mineLab: 'changed since sending', merge: true,
    mine: 'Lena looked at the coin, then at the door behind her, <span class="chg">then at nothing at all</span>. “Nobody came in at nine. Nobody’s been in that room since Tuesday.”',
    hers: 'Lena looked at the coin, then at the door behind her. “Nobody came in at nine. Nobody’s been in <span class="chg">there</span> since Tuesday.”',
    })
  + `<div class="fold"><span class="cv">${I['chevron-right']}</span>2 paragraphs unchanged</div>`
  + `<p class="para">“Then hear this.” Lena leaned close enough that Vega could smell <span class="ntint">the lemon on her hands</span>. “Go home. Don’t come back to the Blue Lamp tomorrow. And don’t ask Kit what he saw.”<span class="gms" style="top:39px"><span class="gm note">${I.note}</span></span></p>`;

// the margin (content coordinates), filtered to Marta's import
const mc = (o) => L.markCard({ ...o, x: 12, w: 292 });
const margin = `<div class="mrg">`
  + `<div class="mtop"><span class="btn pri">Review all ▶</span><span class="btn">Add notes from a file…</span></div>`
  + `<div class="mh2"><span class="imp">${L.who('M')}Marta · Nov 7<span class="x">✕</span></span><span class="sp"></span><span>3 here · 11 in all</span></div>`
  + mc({ kind: 'pending', title: 'Pending · change', who: 'M', y: 138, text: '2 words changed · decide at the paragraph', acts: [['✓', 'Take Marta’s', ''], ['✗', 'Keep mine', '']] })
  + mc({ kind: 'pending', title: 'Pending · change', who: 'M', y: 323, text: 'You changed it too since sending', acts: [['✓', 'Take Marta’s', ''], ['✗', 'Keep mine', '']] })
  + mc({ kind: 'note', title: 'Note · Marta', who: 'M', y: 527, text: '<span class="nq">“Lemon again? It was on her hands in <span class="lk">ch. 2</span> too.”</span>' })
  + `</div>`;

// the chooser, before: Add notes from a file… (window coordinates)
const chooser = `<div class="inset" style="left:14px;top:634px;width:356px"><div class="lbl">Before: Add notes from a file…</div>`
  + `<div class="dlg chs"><div class="dlg-h">Add notes from a file<span class="x">✕</span></div>`
  + `<div class="fl"><div class="fh">Found in Downloads and on the Desktop · newest first</div>`
  + `<div class="f on"><span class="doc">DOCX</span><span class="t">The Blue Lamp – for Marta.docx<small>Downloads · Nov 12 · Marta, sent Nov 7</small></span></div>`
  + `<div class="f"><span class="doc">DOCX</span><span class="t">The Blue Lamp – for Marta (1).docx<small>Desktop · Oct 4 · Marta, sent Oct 2</small></span></div></div>`
  + `<div class="dlg-f"><span class="btn">Browse…</span><span class="sp"></span><span class="btn">Cancel</span><span class="btn pri">Add notes</span></div></div></div>`;

// the left column: Review filters, only Marta on
const rows = L.sample.navRows.map((r) => {
  const { notes, tasks, fixes, ...rest } = r;
  const c = { 2: { notes: 1 }, 7: { notes: 1, tasks: 3 }, 8: { tasks: 4 }, 9: { tasks: 2 }, 11: { notes: 1 } }[r.n] || {};
  return r.type === 'chapter' ? { ...rest, ...c } : rest;
});
const nav = L.navigator({ rows, review: true, kinds: [['Notes'], ['Pending'], ['Done'], ['Unknown']], people: [['You', false], ['Marta', true], ['AI', false]] });

const css = `<style>
.choice.two{margin:12px -60px 10px}
.choice.two .cols>div{font-size:15.5px;line-height:1.55}
.choice .lab i{font-style:normal;font-weight:400;letter-spacing:0;text-transform:none;color:var(--ink3);margin-left:4px}
.choice .acts .btn svg{width:13px;height:13px;color:var(--accent)}
.page .col p.para{position:relative}
.decided{display:flex;align-items:center;gap:10px;font:12.5px var(--ui);color:var(--ink2);background:var(--soft);border:1px solid var(--line2);border-radius:7px;padding:6px 12px;margin:0 0 12px;text-indent:0}
.decided svg{width:14px;height:14px;color:var(--fix)}
.decided .q{flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font:italic 14px var(--text);color:var(--ink3)}
.fold{display:flex;align-items:center;gap:8px;color:var(--ink3);font:12px var(--ui);margin:6px 0;padding:4px 10px;border-top:1px dashed var(--line);border-bottom:1px dashed var(--line);text-indent:0}
.fold .cv{display:inline-flex}.fold .cv svg{width:10px;height:10px}
.ntint{background:rgba(184,134,11,.16);border-radius:2px}
.mrg{position:absolute;right:0;top:0;bottom:0;width:320px;background:var(--soft);border-left:1px solid var(--line);font:12.5px/1.4 var(--ui);z-index:5}
.mrg .mtop{display:flex;gap:6px;padding:10px 12px 6px}
.mrg .mh2{display:flex;align-items:center;gap:8px;padding:4px 12px 8px;color:var(--ink3);font-size:12px;border-bottom:1px solid var(--line2)}
.mrg .mh2 .sp{flex:1}
.mrg .imp{display:inline-flex;align-items:center;gap:6px;background:#fff;border:1px solid var(--line);border-radius:12px;padding:2px 8px 2px 3px;color:var(--ink);font-weight:500}
.mrg .imp .x{color:var(--ink3);margin-left:2px}
.mrg .mc{box-shadow:0 1px 3px rgba(0,0,0,.05)}
.mrg .mc .nq{font:italic 14px var(--text);color:var(--ink)}
.mline{position:absolute;height:1.5px;background:var(--line);z-index:4}
.inset{position:absolute;z-index:32}
.inset .lbl{display:inline-block;font:600 10.5px var(--ui);letter-spacing:.08em;text-transform:uppercase;color:var(--ink2);margin:0 0 5px;background:#d9d9d6;border-radius:5px;padding:2px 8px}
.inset .dlg{position:relative;font:13px var(--ui)}
.chs .dlg-h{padding:11px 14px 10px 16px;font-size:14px}
.chs .fl{padding:8px 10px}
.chs .fh{font-size:11.5px;color:var(--ink3);margin:0 4px 6px}
.chs .f{display:flex;gap:10px;align-items:center;padding:6px 6px;border-radius:7px}
.chs .f.on{background:var(--accent-tint)}
.chs .doc{width:26px;height:32px;border:1px solid var(--line);border-radius:3px;background:#fff;flex:none;font:600 7px/32px var(--ui);text-align:center;color:#3b6ea8}
.chs .t{min-width:0;font-size:12.5px}.chs .t small{display:block;color:var(--ink3);font-size:11.5px}
.chs .dlg-f{padding:9px 12px}
</style>`;

let html = css + L.win({
  mode: 'Review',
  crumbs: L.sample.crumbs7,
  strip: { reviewCount: 12 },
  left: nav,
  page: L.pageCol(col, { paddingTop: 22 }),
  status: { style: 'Plain', words: '2,418 words', pages: 'p. 146 of 248' },
  ask: 'normal',
  content: margin,
  extra: chooser
    + L.ann(1, 'Review opens filtered to the import: only Marta on', 14, 196, { w: 290 })
    + L.ann(2, 'Her comments and changes arrive as cards labeled with her name and the date; a second file gets its own date', 1128, 548, { w: 290 })
    + L.ann(3, 'Only she changed it: yours left, hers right', 742, 338)
    + L.ann(4, 'Both changed it: Merge for me is an AI proposal', 750, 541)
    + L.ann(5, 'Unchanged paragraphs fold to one line; a click opens it', 640, 382)
    + L.ann(6, 'The chooser lists this project’s files in Downloads and on the Desktop, newest first; Browse… for anywhere else', 420, 720, { w: 340 }),
});

module.exports = {
  id: 'S22',
  file: 's22-compare-received',
  title: 'A reader’s copy, in Review',
  width: 1440,
  height: 900,
  html,
  caption: L.caption({
    id: 'S22', title: 'A reader’s copy, in Review',
    scene: 'Marta’s Word copy came back. The writer chose it in Add notes from a file… (shown at the bottom left as it looked a moment before), and Review opened filtered to that import. At each paragraph she changed, the page shows the two versions side by side; between them, the unchanged paragraphs are folded. Her comment waits in the margin as a note card.',
    on: 'Review on the mode switch with its count; the left column with the two toggle rows, only Marta on among the people; the margin with Review all ▶ and Add notes from a file… at its top, the chip “Marta · Nov 7” with ✕, two Pending cards and her note, each with her initial; on the page a decided row folded with Undo, a paragraph only Marta changed (Yours | Marta’s, changed words marked, Keep mine · Take Marta’s · Edit), the folded line “14 paragraphs unchanged”, a paragraph you both changed with Merge for me added, her note’s words tinted with the bubble badge; the chooser inset (two files, newest first, Browse…, Add notes); the Ask button',
    off: 'a Compare sheet, a receive dialog, “theirs” and “mine”, a wavy fold mark',
  }),
};
