// S50: the alternative cut, drawn only for comparison: four modes (Write · Plan · Notebook · Book) with Review as a separate toggle.
const L = require('../lib');
const P = L.sample.chapter7Plain;

const css = `<style>
.s50{background:#d9d9d6;padding:20px 28px 24px;display:grid;grid-template-columns:688px 688px;gap:16px;align-items:start}
.s50 .fr{background:#fff;border:1px solid #c9c9c5;border-radius:10px;overflow:hidden}
.s50 .fr>.lbl{font:600 11px var(--ui);letter-spacing:.06em;text-transform:uppercase;color:#55585e;padding:9px 14px 8px;background:#f2f2f0;border-bottom:1px solid #e2e2df}
.s50 .win{border-radius:0;width:686px!important}
.s50 .page{left:320px;right:0;width:auto;transform:none}
.s50 .col{width:auto;margin:0 22px;font-size:16px}
.s50 .nt{padding:9px 14px 11px;font-size:13px;line-height:1.45;color:var(--ink2);border-top:1px solid #e2e2df}
.s50 .nt b{color:var(--ink)}
.s50 .strip .views span{padding:3px 11px}
.s50 .cmp{padding:14px 16px 6px;font-size:13px;line-height:1.45;color:var(--ink)}
.s50 .cmp h4{margin:0 0 4px;font:600 13px var(--ui)}
.s50 .cmp ul{margin:0 0 12px;padding-left:18px;color:var(--ink2)}
.s50 .cmp li{margin:2px 0}
.s50 .cmp .pro{color:var(--fix)}
.s50 .cmp .con{color:#b3261e}
.s50 .own{background:#fff7ec;border:1px solid #efd3a8;border-radius:8px;padding:9px 12px;margin:2px 0 14px;font-size:13px;color:#6b4a14}
</style>`;

const col = `<div class="chap"><div class="num">CHAPTER 7</div><h1 style="font-size:24px">Lena’s warning</h1></div>` + P.slice(0, 2).map((p, i) => `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`).join('');
const base = { width: 686, height: 336, crumbs: 'Chapter 7', page: L.pageCol(col, { paddingTop: 24 }), ask: false };
const status = { style: 'Plain', words: '2,418 words', goal: 60, pages: 'p. 146 of 248' };

const d8 = L.win({ ...base, view: 'Text', left: L.navigator({ section: 'Book' }), strip: { review: 12, leftOn: true }, status });

const four = (active) => `<span class="modes views">${['Write', 'Plan', 'Notebook', 'Book'].map((m) => `<span${m === active ? ' class="on"' : ''}>${m}</span>`).join('')}</span>`;
const withModes = (h, active) => h.replace(/<span class="modes views">.*?<\/span><\/span>/, four(active));

const w4 = withModes(L.win({ ...base, view: 'Text', left: L.navigator({ section: false }), strip: { review: 12, leftOn: true }, status }), 'Write');

const grp = (t, c) => ({ type: 'group', title: t, count: c });
const nb = withModes(L.win({ ...base, view: 'Text', crumbs: '<span class="crumbs"><span class="dd">Lena</span></span>', height: 440,
  left: L.navigator({ section: false, placeholder: 'Filter the Notebook', rows: [grp('The Brief', ''), grp('People', '8'), { type: 'raw', html: '<div class="nrow cur"><span class="cv"></span><span class="t">Lena</span></div><div class="nrow"><span class="cv"></span><span class="t">Kit</span></div><div class="nrow"><span class="cv"></span><span class="t">Vega</span></div>' }, grp('Places', '5'), grp('Things', '6'), grp('Threads', '4'), grp('Research', ''), { type: 'raw', html: '<div class="nrow"><span class="cv"></span><span class="t">Inbox</span><span class="gc">3</span></div><div class="nrow"><span class="cv"></span><span class="t">Licensing hours</span></div>' }] }),
  page: L.pageCol(`<div class="chap"><h1 style="font-size:26px">Lena</h1><div style="font:13px var(--ui);color:var(--ink3)">Person · owns the Blue Lamp</div></div><p class="first" style="font-size:15px">Runs the bar alone since her brother left. Lies easily, and badly. Dries glasses when she is nervous.</p>`, { paddingTop: 24 }),
  strip: { review: 12, leftOn: true, find: true }, status: { ...status, style: false } }), 'Notebook');

const html = css + `<div class="s50">
 <div class="fr"><div class="lbl">Draft 8 · one window, three views, three Navigator sections</div>${d8}<div class="nt"><b>Text · Board · Pages</b> are views of the same manuscript; <b>Book · Codex · Research</b> sit at the head of the Navigator; Review is a toggle.</div></div>
 <div class="fr"><div class="lbl">The alternative · four modes (Write is open)</div>${w4}<div class="nt"><b>Write · Plan · Notebook · Book</b> are places; the Navigator and the right column change with the place. Review stays a separate toggle in the strip.</div></div>
 <div class="fr"><div class="lbl">The alternative · Notebook mode (Codex and Research together)</div>${nb}<div class="nt">One mode for everything the writer knows, with the Brief on top, Codex groups, then Research below. The view switch is gone here.</div></div>
 <div class="fr"><div class="lbl">Pros and cons, against draft 8</div><div class="cmp">
  <div class="own">The owner chooses. This cut is drawn only so the two can be put side by side.</div>
  <h4 class="pro">What four modes gives</h4><ul><li>Keeps the idea of dressing the window for a job (write, plan, know, publish).</li><li>Four labels fit narrow windows and Spanish better than six.</li><li>Less redraw: most draft 7 screens stay as they were.</li></ul>
  <h4 class="con">What it costs</h4><ul><li>Left and right columns change meaning per mode; Back must still cross modes.</li><li>A mode switch <i>and</i> a Navigator that changes: two things to learn, not one.</li><li>Codex and Research merge into a long list; the Inbox gets buried under the Codex.</li><li>Opening a Codex entry while writing changes mode, so the text leaves the screen; in draft 8 it opens beside it.</li><li>Book mixes the page preview and its settings in one place.</li></ul>
 </div></div>
</div>`;

module.exports = {
  id: 'S50', file: 's50-four-modes', title: 'The alternative: four modes', width: 1440, height: 920, html,
  caption: L.caption({
    id: 'S50', title: 'The alternative: four modes',
    scene: 'Not the proposal: the other way to cut the app, drawn beside the draft 8 model so the owner can choose. Same chapter, same window width; the Notebook frame is drawn taller so its whole list shows.',
    on: 'draft 8’s strip and Navigator; the four-mode strip (Write · Plan · Notebook · Book) with Review as a separate toggle; the Notebook mode with Codex and Research in one list; a short list of what each cut gives and costs',
    off: 'a recommendation drawn into the window; any other screen in this draft depends on this cut',
  }),
};
