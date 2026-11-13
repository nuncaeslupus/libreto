// S24: Book. Page thumbnails in pairs (spreads) on the left, the spread 146–147 in the middle, the layout panel on the right.
const L = require('../lib');
const P = L.sample.chapter7Plain;

const css = `<style>
.bookbg{position:absolute;inset:0;background:#e9e9e6}
.thumbs{position:absolute;left:0;top:0;bottom:0;width:320px;background:var(--soft);border-right:1px solid var(--line);z-index:4;padding:0 18px;overflow:hidden}
.thumbs .tt{height:40px;display:flex;align-items:center;gap:8px;font-size:12.5px;color:var(--ink2);margin-bottom:8px}
.thumbs .tt .seg{margin-left:auto}
.thumbs .grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px 20px}
.thumbs .sp2{display:flex;flex-direction:column;align-items:center;gap:4px;font:11px var(--ui);color:var(--ink3)}
.thumbs .sp2 .two{display:flex;box-shadow:0 1px 3px rgba(0,0,0,.08)}
.thumbs .sp2 .two .pg+.pg{border-left:0}
.thumbs .sp2.cur .two{box-shadow:0 0 0 2px var(--accent)}
.thumbs .sp2.cur{color:var(--ink);font-weight:600}
.thumbs .th{display:contents}
.thumbs .pg{width:60px;height:90px;background:#fff;border:1px solid #d8d8d4;position:relative;overflow:hidden}
.thumbs .pg:before{content:"";position:absolute;left:9px;right:9px;top:13px;bottom:12px;background:repeating-linear-gradient(#e2e2df 0 1.5px,transparent 1.5px 4.5px)}
.thumbs .pg.open:before{top:36px}
.thumbs .pg.open:after{content:"";position:absolute;left:20px;right:20px;top:23px;height:4px;background:#cfcfcb;border-radius:1px}
.thumbs .pg.short:before{bottom:44px}
.thumbs .pg.blank:before{display:none}
.spread{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);display:flex;box-shadow:0 8px 28px rgba(0,0,0,.14)}
.spread .pp{width:330px;height:495px;background:#fff;position:relative;padding:40px 40px 42px;font:10.4px/1.5 var(--text);color:var(--ink);overflow:hidden;text-align:justify;hyphens:auto}
.spread .pp+.pp{border-left:1px solid #ececea}
.spread .pp p{margin:0;text-indent:1.4em}
.spread .pp p.first{text-indent:0}
.spread .rh{text-align:center;font-size:7.5px;letter-spacing:.22em;color:var(--ink2);margin-bottom:14px;text-transform:uppercase}
.spread .pn{position:absolute;bottom:18px;left:0;right:0;text-align:center;font-size:9.5px;color:var(--ink2)}
.spread .cnum{margin-top:74px;text-align:center;font-size:9px;letter-spacing:.3em;color:var(--ink2)}
.spread .ctl{text-align:center;font:italic 17px var(--text);margin:5px 0 22px}
.lay{position:absolute;right:0;top:0;bottom:0;width:320px;background:var(--soft);border-left:1px solid var(--line);z-index:4;display:flex;flex-direction:column;font-size:12.5px}
.lay .lh{height:40px;flex:none;display:flex;align-items:center;gap:8px;padding:0 14px;border-bottom:1px solid var(--line2);font-weight:600}
.lay .lb{padding:6px 14px 0;flex:1}
.lay .fr{display:flex;align-items:center;gap:8px;padding:7px 0;min-height:34px}
.lay .fr .k{width:92px;flex:none;color:var(--ink2)}
.lay .fr .inp{padding:4px 9px;font-size:12.5px;display:inline-flex;align-items:center;gap:6px}
.lay .fr .inp.dd:after{margin-left:auto}
.lay .fr .inp.sm{width:44px;padding:4px 7px}
.lay .seg span{padding:3px 8px;font-size:11.5px}
.lay .ck{display:flex;align-items:center;justify-content:flex-start;gap:8px;padding:6px 0;border:0;width:auto;height:auto;background:none;border-radius:0;font-size:12.5px}
.lay .lf{flex:none;padding:10px 14px 12px;border-top:1px solid var(--line2);display:flex;align-items:center;gap:8px}
.lay .menu{width:236px}
.lay .menu .mi .r{padding-left:10px}
.lay .menu .mi.on:before{content:"✓";color:var(--accent);font-weight:600;width:12px}
.lay .menu .mi:before{content:"";width:12px;display:inline-block}
</style>`;

// thumbnails in pairs, as the spreads print: 138|139 … 156|157; 146|147 current.
// 146 ends chapter 6 (short), 147 opens chapter 7 on a right-hand page; 151 ends chapter 7 on a
// right-hand page, so 152 is left blank and chapter 8 opens on 153.
const pgCls = (n) => ({ 146: 'short', 147: 'open', 151: 'short', 152: 'blank', 153: 'open' })[n] || '';
const thumbs = `<div class="thumbs"><div class="tt">Pages<span class="seg"><span>1</span><span class="on">2</span></span></div><div class="grid">${Array.from({ length: 10 }, (_, i) => {
  const a = 138 + i * 2, b = a + 1;
  return `<div class="sp2${a === 146 ? ' cur' : ''}"><div class="two"><div class="pg ${pgCls(a)}"></div><div class="pg ${pgCls(b)}"></div></div><span>${a}–${b}</span></div>`;
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
    ${fr('Template', '<span class="inp dd" style="width:176px"><span style="flex:1">Trade 6 × 9 in</span></span>')}
    ${fr('Page size', '<span class="inp sm">15.24</span><span style="color:var(--ink3)">×</span><span class="inp sm">22.86</span><span style="color:var(--ink3)">cm</span>')}
    ${fr('Margins', '<span style="display:flex;flex-direction:column;gap:5px"><span style="display:flex;gap:6px;align-items:center"><span class="inp sm">1.9</span><span style="color:var(--ink3);width:38px">inside</span><span class="inp sm">1.5</span><span style="color:var(--ink3)">outside</span></span><span style="display:flex;gap:6px;align-items:center"><span class="inp sm">1.8</span><span style="color:var(--ink3);width:38px">top</span><span class="inp sm">2.0</span><span style="color:var(--ink3)">bottom</span></span></span>')}
    <div style="padding:0 0 4px 100px;color:var(--ink3);font-size:11.5px">cm · <span class="lk">change in Settings</span></div>
    ${fr('Body font', '<span class="inp dd" style="width:112px"><span style="flex:1">Charter</span></span><span class="inp dd" style="width:68px"><span style="flex:1">11 pt</span></span>')}
    <div class="fr" style="position:relative"><span class="k">Chapter head</span><span class="inp dd foc" style="width:176px"><span style="flex:1">Number and title</span></span>
      <div class="menu" style="top:36px;left:30px"><div class="mi on">Number and title</div><div class="mi">Title only</div><div class="mi">Number only</div><div class="mi">Nothing (new page and space)</div></div>
    </div>
    <div class="ck" style="margin-top:132px"><span class="cb on"></span>Start chapters on a right-hand page</div>
    <div class="ck"><span class="cb on"></span>Running heads</div>
    <div class="fr" style="flex-wrap:wrap;row-gap:6px"><span class="k">Pictures</span><span style="color:var(--ink3);font-size:11.5px">as figures</span><span class="seg" style="margin-left:0"><span class="on">in the text</span><span>top of page</span><span>own page</span></span></div>
    ${fr('Footnotes', '<span>at the foot of the page</span>')}
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
    + L.ann(1, 'Pages in pairs, as the spreads print; the switch shows them one by one', 330, 76, { w: 270 })
    + L.ann(2, 'A template to start from: paperback 5.5 × 8.5 in, trade 6 × 9 in, A5, manuscript, reading PDF', 780, 92, { w: 290 })
    + L.ann(3, 'Sizes in the unit Settings chose (cm or in)', 880, 236, { w: 200 })
    + L.ann(4, 'A chapter opens with number and title, title only, number only, or nothing but a new page and space', 770, 330, { w: 290, r: true })
    + L.ann(5, 'Pictures as figures: in the text, at the top of the page, or on a page of their own; footnotes at the foot of their page', 1132, 690, { w: 250 })
    + L.ann(6, 'Arrows and Page Up/Down turn pages; the whole book lays out in seconds and updates as you adjust', 340, 776, { w: 300 }),
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
    scene: 'Book mode shows the book as it will print: page thumbnails in pairs on the left, as the spreads print, the spread 146–147 in the middle (chapter 6 ends on the left page, chapter 7 opens on the right-hand page), the layout on the right. The Chapter head menu is open.',
    on: 'thumbnails in pairs with the 1 | 2 switch and 146–147 marked, the spread with running head and page numbers, the layout panel (Template, Page size and Margins in cm with “cm · change in Settings”, Body font, Chapter head with its four options, Start chapters on a right-hand page, Running heads, Pictures in the text · top of page · own page, Footnotes at the foot of the page, Export PDF · Word · EPUB), the status bar with p. 146 of 248 and “laid out in 1.8 s”, no Whole book / By chapter item, the Ask button',
    off: 'a Book layout dialog, a units switch in the layout (units are a Setting), a “~” in the page number, fine typography settings, a Return to text button in the strip',
  }),
};
