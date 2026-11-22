// S29: History (draft 8; from draft 7's S23). File ▸ Versions & history, or the status bar History. A sheet over the
// window: search in past versions with Scope and Since, a found deleted scene with Put back…, the list by day then
// activity blocks, "Save a version…", and the note that automatic versions are thinned.
const L = require('../lib');

const css = `<style>
.s29 .hist{position:absolute;left:300px;width:840px;top:0;padding:14px 0 0;font-size:13px}
.s29 .sr{display:flex;gap:8px;align-items:center;margin-bottom:10px}
.s29 .sr .inp{flex:1;display:flex;align-items:center;gap:8px;height:32px;padding:0 11px;border:1px solid var(--accent);border-radius:8px;background:#fff;color:var(--ink);box-shadow:0 0 0 3px var(--accent-tint)}
.s29 .sr .inp svg{color:var(--ink3);flex:none}
.s29 .sr .inp .ph{color:var(--ink3)}
.s29 .sr .chp{height:32px;display:inline-flex;align-items:center;gap:6px;padding:0 11px;border:1px solid var(--line);border-radius:8px;background:#fff;color:var(--ink2);white-space:nowrap}
.s29 .sr .chp b{font-weight:600;color:var(--ink)}
.s29 .found{position:relative;border:1px solid var(--line);border-radius:10px;background:#fff;margin-bottom:12px;overflow:visible}
.s29 .found .fh{display:flex;gap:10px;align-items:center;padding:8px 14px;border-bottom:1px solid var(--line2);background:var(--soft);font-size:12px;color:var(--ink2);border-radius:10px 10px 0 0}
.s29 .found .fh b{color:var(--ink);font-weight:600}
.s29 .found .fh .sp{flex:1}
.s29 .found .fb{padding:10px 14px 12px;display:flex;gap:18px;align-items:flex-start}
.s29 .found .tx{flex:1;font:15px/1.55 var(--text);color:var(--ink);border-left:3px solid var(--spell);padding-left:12px;background:rgba(194,59,59,.04)}
.s29 .found .tx .gone{text-decoration:line-through;text-decoration-color:rgba(194,59,59,.55);color:var(--ink2)}
.s29 .found .tx .hit{background:rgba(232,190,60,.4)}
.s29 .found .tx small{display:block;font:12px var(--ui);color:var(--ink3);margin-top:4px;text-decoration:none}
.s29 .found .side{width:250px;flex:none;position:relative}
.s29 .found .side .why{font-size:12px;color:var(--ink2);margin-bottom:8px}
.s29 .found .pb{display:flex;gap:8px;align-items:center}
.s29 .pbm{position:absolute;left:0;top:56px;width:290px;z-index:5}
.s29 .pbm .mi small{margin-left:auto;color:var(--ink3);font-size:11.5px;padding-left:12px}
.s29 .lst{background:#fff;border:1px solid var(--line);border-radius:10px;overflow:hidden}
.s29 .gh{display:flex;font:600 10.5px var(--ui);letter-spacing:.08em;text-transform:uppercase;color:var(--ink3);padding:8px 16px 3px;border-top:1px solid var(--line2);background:#fafaf9}
.s29 .gh:first-child{border-top:0}
.s29 .gh .sp{flex:1}
.s29 .gh .tn{font-weight:400;letter-spacing:0;text-transform:none;font-size:11.5px}
.s29 .row{display:flex;gap:14px;align-items:center;padding:4px 16px}
.s29 .row .cv{width:10px;flex:none;color:var(--ink3);display:inline-flex}.s29 .row .cv svg{width:10px;height:10px}
.s29 .row .h{width:96px;flex:none;font-variant-numeric:tabular-nums}
.s29 .row .ic{width:56px;flex:none;display:flex;gap:6px;color:var(--ink2)}
.s29 .row .ic span{width:16px;text-align:center}
.s29 .row .w{width:92px;flex:none;font-variant-numeric:tabular-nums}
.s29 .row .w .p{color:var(--fix)}.s29 .row .w .m{color:var(--spell);margin-left:6px}
.s29 .row .s{flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.s29 .row .lk{font-size:12px}
.s29 .snap{display:flex;gap:10px;align-items:center;padding:2px 16px 2px 50px;color:var(--ink2);font-size:12.5px}
.s29 .snap .dot{width:8px;height:8px;border-radius:2px;transform:rotate(45deg);background:var(--ink4);flex:none}
.s29 .snap.named .dot{background:var(--accent)}
.s29 .snap.named b{font-weight:600;color:var(--ink)}
.s29 .snap .t{width:44px;flex:none;color:var(--ink3);font-variant-numeric:tabular-nums}
.s29 .snap .sp{flex:1}
.s29 .snap.more{color:var(--ink3)}
.s29 .thin{display:flex;gap:8px;align-items:center;margin:9px 2px 0;color:var(--ink3);font-size:12px}
.s29 .thin svg{width:13px;height:13px}
.s29 .sheet-h .acts .btn{height:26px}
</style>`;

const ICON = { w: ['✎', 'wrote'], p: ['⇅', 'planned'], r: ['✓', 'reviewed'] };
const row = (h, ic, plus, minus, s, lk) => `<div class="row"><span class="cv">${L.icons['chevron-right']}</span><span class="h">${h}</span>`
  + `<span class="ic">${ic.split('').map((k) => `<span title="${ICON[k][1]}">${ICON[k][0]}</span>`).join('')}</span>`
  + `<span class="w"><span class="p">+${plus}</span><span class="m">−${minus}</span></span><span class="s">${s}</span>${lk ? `<span class="lk">${lk}</span>` : ''}</div>`;
const snap = (t, label, o = {}) => `<div class="snap${o.named ? ' named' : ''}${o.more ? ' more' : ''}">${o.more ? '<span class="t"></span>' : `<span class="dot"></span><span class="t">${t}</span>`}<span>${label}</span><span class="sp"></span></div>`;

const body = `<div class="hist">
  <div class="sr"><span class="inp">${L.icons.magnifier}<span>till drawer</span><span class="cursor"></span><span class="ph" style="margin-left:auto">Find text in past versions</span></span>`
  + `<span class="chp">Scope: <b>Chapter 8</b> ▾</span><span class="chp">Since: <b>Tue, Oct 27</b> ▾</span></div>`
  + `<div class="found"><div class="fh"><b>1 place found</b> in versions of Chapter 8 since Oct 27<span class="sp"></span>This text is no longer in the book</div>`
  + `<div class="fb"><div class="tx"><span class="gone">Lena counted the till twice. The <span class="hit">till drawer</span> stuck again, and she hit it with the heel of her hand, the way she did every night, until it gave.</span><small>Ch. 8 · “Lena counts the till” · in the version of Wed, Oct 28, 21:40 (end of a session) · taken out Nov 3</small></div>`
  + `<div class="side"><div class="why">Bring it back without touching the rest of today’s text.</div><div class="pb"><span class="btn pri">Put back… ▸</span><span class="lk">Open that version</span></div></div></div>`
  + `<div class="menu pbm" style="left:560px;top:128px"><div class="mi hov">Where it was<small>ch. 8, after “Kit runs”</small></div><div class="mi">To Discarded<small>as a new scene</small></div><div class="mi">At the cursor<small>ch. 7, ¶ 4</small></div></div></div>`
  + `<div class="lst">
    <div class="gh">Today · Wed, Nov 18<span class="sp"></span><span class="tn">Show changes</span></div>
    ${row('09:05–now', 'w', 212, 30, 'Lena’s warning, scene 3', 'Show changes')}
    ${snap('', '6 automatic', { more: true })}
    <div class="gh">Tue, Nov 17</div>
    ${row('20:40–22:10', 'r', 40, 96, 'Notes from Marta (Nov 7) added; 4 of 11 decided', 'Show changes')}
    ${row('18:02–19:30', 'wp', 86, 12, 'Lena’s warning, scenes 2–3; 4 moves on the Board', 'Show changes')}
    ${snap('19:30', '<b>Before Rename everywhere</b> (Harbour Street → Harbor Street)', { named: true })}
    <div class="gh">Tue, Nov 10</div>
    ${row('16:50–18:40', 'w', 310, 22, 'Closing time, first pass', 'Show changes')}
    ${snap('18:32', '<b>Sent to Marta</b> · named', { named: true })}
    <div class="gh">Earlier</div>
    ${row('Oct 28–Nov 5', 'wp', 1204, 160, 'Kit’s ledger: timeline fixes in ch. 4 and 5; 3 scenes removed', 'Show changes')}
  </div>
  <div class="thin">${L.icons.clock}<span>Automatic versions are thinned: one an hour for this week, one a day before that. Versions you save by name are kept for good.</span></div>
</div>`;

const html = css + L.win({
  height: 780,
  view: 'Text',
  crumbs: L.sample.crumbs7,
  strip: { review: 12 },
  page: L.pageCol('', { paddingTop: 40 }),
  status: { style: 'Plain', words: '2,418 words', goal: 60, pages: 'p. 146 of 248' },
  ask: 'normal',
  content: L.sheet({ title: 'Versions & history', actions: '<span class="btn">Save a version…</span>', body }),
  extra: L.ann(1, 'File ▸ Versions & history, or History in the status bar. Search the past, not just the present', 14, 150, { w: 200 })
    + L.ann(2, 'Scope and Since narrow the search; with the field empty they filter the list below', 1160, 236, { w: 200 })
    + L.ann(3, 'A scene that is gone is found in the version that still had it; Put back… asks where it goes', 14, 290, { w: 200 })
    + L.ann(4, 'Save a version… names this moment; named versions are never thinned', 1160, 146, { w: 200 })
    + L.ann(5, 'By day, then activity blocks: hours, ✎ wrote ⇅ planned ✓ reviewed, +86 −12 words', 14, 560, { w: 200 })
    + L.ann(6, 'Show changes opens that block as a redline in the page (S30)', 1160, 560, { w: 200 })
    + L.ann(7, 'Today’s passing messages live in History ▸ Today, in the status bar', 1160, 640, { w: 200 }),
});

module.exports = {
  id: 'S29',
  file: 's29-history',
  title: 'History',
  width: 1440,
  height: 780,
  html: html.replace('<div class="win"', '<div class="win s29"'),
  caption: L.caption({
    id: 'S29', title: 'History',
    scene: 'The writer remembers a paragraph about a sticking till drawer in chapter 8 and opens File ▸ Versions & history. The search “till drawer” with Scope: Chapter 8 and Since: Tue, Oct 27 finds it in the version of Oct 28; the scene is no longer in the book. Put back… is open on its three choices. Below, the list by day and activity block.',
    on: 'the sheet (Back to the text, Versions & history, Save a version…); the search field with “till drawer”, Scope: Chapter 8 ▾, Since: Tue, Oct 27 ▾; the found text struck through as no longer in the book with its version and date, Put back… ▸ and Open that version; the open menu (Where it was · To Discarded · At the cursor); days (Today, Tue, Nov 17, Tue, Nov 10, Earlier), blocks with hours, ✎ ⇅ ✓, +86 −12 words, a summary and Show changes; named versions (Before Rename everywhere, Sent to Marta); automatic versions folded; the line about thinning; the strip and status bar behind',
    off: 'a Restore button on the sheet itself (it is in Show changes), the bell, per-keystroke undo',
  }),
};
