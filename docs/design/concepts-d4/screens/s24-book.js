// S24: Book. Page thumbnails on the left, the spread 146–147 in the middle, the layout panel on the right.
const L = require('../lib');
const P = L.sample.chapter7Plain;

const css = `<style>
.bookbg{position:absolute;inset:0;background:#e9e9e6}
.thumbs{position:absolute;left:0;top:0;bottom:0;width:280px;background:var(--soft);border-right:1px solid var(--line);z-index:4;padding:14px 14px;overflow:hidden}
.thumbs .grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px 12px}
.thumbs .th{display:flex;flex-direction:column;align-items:center;gap:4px;font:11px var(--ui);color:var(--ink3)}
.thumbs .th .pg{width:70px;height:105px;background:#fff;border:1px solid #d8d8d4;border-radius:2px;position:relative;overflow:hidden}
.thumbs .th .pg:before{content:"";position:absolute;left:11px;right:11px;top:16px;bottom:14px;background:repeating-linear-gradient(#e2e2df 0 1.5px,transparent 1.5px 4.5px)}
.thumbs .th .pg.open:before{top:40px}
.thumbs .th .pg.open:after{content:"";position:absolute;left:24px;right:24px;top:26px;height:4px;background:#cfcfcb;border-radius:1px}
.thumbs .th .pg.short:before{bottom:48px}
.thumbs .th.cur .pg{box-shadow:0 0 0 2px var(--accent)}
.thumbs .th.cur{color:var(--ink);font-weight:600}
.spread{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);display:flex;box-shadow:0 8px 28px rgba(0,0,0,.14)}
.spread .pp{width:330px;height:495px;background:#fff;position:relative;padding:40px 40px 42px;font:10.4px/1.5 var(--text);color:var(--ink);overflow:hidden;text-align:justify;hyphens:auto}
.spread .pp+.pp{border-left:1px solid #ececea}
.spread .pp p{margin:0;text-indent:1.4em}
.spread .pp p.first{text-indent:0}
.spread .rh{text-align:center;font-size:7.5px;letter-spacing:.22em;color:var(--ink2);margin-bottom:14px;text-transform:uppercase}
.spread .pn{position:absolute;bottom:18px;left:0;right:0;text-align:center;font-size:9.5px;color:var(--ink2)}
.spread .cnum{margin-top:74px;text-align:center;font-size:9px;letter-spacing:.3em;color:var(--ink2)}
.spread .ctl{text-align:center;font:italic 17px var(--text);margin:5px 0 22px}
.lay{position:absolute;right:0;top:0;bottom:0;width:350px;background:var(--soft);border-left:1px solid var(--line);z-index:4;display:flex;flex-direction:column;font-size:12.5px}
.lay .lh{height:40px;flex:none;display:flex;align-items:center;gap:8px;padding:0 14px;border-bottom:1px solid var(--line2);font-weight:600}
.lay .lb{padding:6px 14px 0;flex:1}
.lay .fr{display:flex;align-items:center;gap:8px;padding:7px 0;min-height:34px}
.lay .fr .k{width:100px;flex:none;color:var(--ink2)}
.lay .fr .inp{padding:4px 9px;font-size:12.5px;display:inline-flex;align-items:center;gap:6px}
.lay .fr .inp.dd:after{margin-left:auto}
.lay .fr .inp.sm{width:50px}
.lay .ck{display:flex;align-items:center;justify-content:flex-start;gap:8px;padding:6px 0;border:0;width:auto;height:auto;background:none;border-radius:0;font-size:12.5px}
.lay .lf{flex:none;padding:10px 14px 12px;border-top:1px solid var(--line2);display:flex;align-items:center;gap:8px}
.lay .menu{width:236px}
.lay .menu .mi .r{padding-left:10px}
.lay .menu .mi.on:before{content:"✓";color:var(--accent);font-weight:600;width:12px}
.lay .menu .mi:before{content:"";width:12px;display:inline-block}
</style>`;

// thumbnails: pages 140–157, 146 and 147 current; 146 ends a chapter (short), 147 opens one
const thumbs = `<div class="thumbs"><div class="grid">${Array.from({ length: 18 }, (_, i) => {
  const n = 140 + i; const cls = n === 146 ? 'short' : n === 147 ? 'open' : n === 151 ? 'short' : n === 152 ? 'open' : '';
  return `<div class="th${n === 146 || n === 147 ? ' cur' : ''}"><div class="pg ${cls}"></div><span>${n}</span></div>`;
}).join('')}</div></div>`;

const p146 = [
  'The back room was smaller than the stories made it. A table, two chairs that did not match, a safe with its door ajar and nothing inside but a ledger clip and the smell of oil. Vega stood in the doorway and let her eyes do the walking.',
  '“Nobody uses it,” Lena said behind her. “Not since the spring.”',
  '“Somebody wiped the table.”',
  'Lena did not answer that. She went back to the bar, and after a while the glasses started again, one after another, as if nothing in the world had been said.',
];
const spread = `<div class="spread">
  <div class="pp"><div class="rh">The Blue Lamp</div>${p146.map((p, i) => `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`).join('')}<div class="pn">146</div></div>
  <div class="pp"><div class="cnum">7</div><div class="ctl">Lena’s warning</div>${P.slice(0, 6).map((p, i) => `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`).join('')}<div class="pn">147</div></div>
</div>`;

const fr = (k, v) => `<div class="fr"><span class="k">${k}</span>${v}</div>`;
const lay = `<div class="lay">
  <div class="lh">Layout</div>
  <div class="lb">
    ${fr('Template', '<span class="inp dd" style="width:170px"><span style="flex:1">Trade 6 × 9 in</span></span>')}
    ${fr('Units', '<span style="display:inline-flex;align-items:center;gap:6px;margin-right:16px"><span class="rd"></span>cm</span><span style="display:inline-flex;align-items:center;gap:6px"><span class="rd on"></span>in</span>')}
    ${fr('Page size', '<span class="inp sm">6</span><span style="color:var(--ink3)">×</span><span class="inp sm">9</span><span style="color:var(--ink3)">in</span>')}
    ${fr('Margins', '<span style="display:flex;flex-direction:column;gap:5px"><span style="display:flex;gap:6px;align-items:center"><span class="inp sm">0.75</span><span style="color:var(--ink3);width:44px">inside</span><span class="inp sm">0.6</span><span style="color:var(--ink3)">outside</span></span><span style="display:flex;gap:6px;align-items:center"><span class="inp sm">0.7</span><span style="color:var(--ink3);width:44px">top</span><span class="inp sm">0.8</span><span style="color:var(--ink3)">bottom</span></span></span>')}
    ${fr('Body font', '<span class="inp dd" style="width:116px"><span style="flex:1">Charter</span></span><span class="inp dd" style="width:72px"><span style="flex:1">11 pt</span></span>')}
    <div class="ck"><span class="cb on"></span>Start chapters on a right-hand page</div>
    <div class="ck"><span class="cb on"></span>Running heads</div>
    ${fr('Pictures', '<span>as figures with captions</span>')}
    <div class="fr" style="position:relative"><span class="k">Chapter opening</span><span class="inp dd foc" style="width:190px"><span style="flex:1">Number and title</span></span>
      <div class="menu" style="top:36px;left:40px"><div class="mi on">Number and title</div><div class="mi">Title only</div><div class="mi">Number only</div><div class="mi">Nothing (new page and space)</div></div>
    </div>
  </div>
  <div class="lf"><span style="color:var(--ink2)">Export ▸</span><span class="btn">PDF</span><span class="btn">Word</span><span class="btn">EPUB</span></div>
</div>`;

const html = L.win({
  mode: 'Book',
  crumbs: { chapter: 'Chapter 7 · Lena’s warning' },
  left: thumbs,
  right: lay,
  page: `<div class="bookbg"></div>${spread}`,
  status: L.statusBar({ style: false, view: false, words: '86,240 words', pages: 'p. 146 of 248', left: '<span class="sb">laid out in 1.8 s</span>' }),
  ask: 'normal',
  extra: css
    + L.ann(1, 'A template to start from: paperback 5.5 × 8.5 in, trade 6 × 9 in, A5, manuscript, reading PDF', 770, 104, { w: 290 })
    + L.ann(2, 'Sizes in cm or in', 946, 186, { r: true })
    + L.ann(3, 'A chapter can open with number and title, title only, number only, or nothing but a new page and space', 760, 690, { w: 300 })
    + L.ann(4, 'Pictures in the text are laid out as figures with captions', 760, 760, { w: 300 })
    + L.ann(5, 'Arrows and Page Up/Down turn pages; the layout of the whole book takes seconds and updates as you adjust', 300, 760, { w: 300 }),
});

module.exports = {
  id: 'S24',
  file: 's24-book',
  title: 'Book',
  width: 1440,
  height: 900,
  html,
  caption: L.caption({
    id: 'S24', title: 'Book',
    scene: 'Book mode shows the book as it will print: page thumbnails on the left, the spread 146–147 in the middle (chapter 6 ends on the left page, chapter 7 opens on the right), the layout on the right. The Chapter opening menu is open.',
    on: 'thumbnails with 146–147 marked, the spread with running head and page numbers, the layout panel (Template, Units cm/in, Page size, Margins, Body font, right-hand starts, Running heads, Pictures as figures, Chapter opening with its four options, Export PDF · Word · EPUB), the status bar with p. 146 of 248 and “laid out in 1.8 s”, the Ask button',
    off: 'a Book layout dialog, a “~” in the page number, fine typography settings, a Return to text button in the strip',
  }),
};
