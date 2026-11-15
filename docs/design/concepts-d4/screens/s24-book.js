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
.spread{position:absolute;left:665px;top:50%;transform:translate(-50%,-50%);display:flex;box-shadow:0 8px 28px rgba(0,0,0,.14)}
.spread .pp{width:300px;height:450px;background:#fff;position:relative;padding:36px 34px 40px;font:9.5px/1.5 var(--text);color:var(--ink);overflow:hidden;text-align:justify;hyphens:auto}
.spread .pp+.pp{border-left:1px solid #ececea}
.spread .pp p{margin:0;text-indent:1.4em}
.spread .pp p.first{text-indent:0}
.spread .rh{text-align:center;font-size:7px;letter-spacing:.22em;color:var(--ink2);margin-bottom:12px;text-transform:uppercase}
.spread .pn{position:absolute;bottom:16px;left:0;right:0;text-align:center;font-size:9px;color:var(--ink2)}
.spread .cnum{margin-top:66px;text-align:center;font-size:8.5px;letter-spacing:.3em;color:var(--ink2)}
.spread .ctl{text-align:center;font:italic 16px var(--text);margin:5px 0 20px}
.lay{position:absolute;right:0;top:0;bottom:0;width:430px;background:var(--soft);border-left:1px solid var(--line);z-index:4;display:flex;flex-direction:column;font-size:12.5px}
.lay .lb{padding:4px 16px 0;flex:1;min-height:0;overflow:hidden}
.lay .gh{font:600 10.5px var(--ui);letter-spacing:.09em;text-transform:uppercase;color:var(--ink3);margin:12px 0 4px;display:flex;align-items:baseline;gap:8px}
.lay .gh .ghs{text-transform:none;letter-spacing:0;font-weight:400;font-size:11.5px}
.lay .fr{display:flex;align-items:center;gap:7px;padding:4px 0;min-height:32px}
.lay .fr .k{width:66px;flex:none;color:var(--ink2)}
.lay .fr .inp{padding:4px 9px;font-size:12.5px;display:inline-flex;align-items:center;gap:6px;height:26px;box-sizing:border-box}
.lay .fr .inp.dd:after{margin-left:auto}
.lay .fr .x{color:var(--ink3)}
.lay .mg{display:flex;align-items:center;gap:7px}
.lay .gr{color:var(--ink3);font-size:11.5px;width:40px;text-align:right}
.lay .seg.unit{margin-left:6px}
.lay .seg.unit span{padding:2px 7px;font-size:11px}
.lay .ck{display:flex;align-items:center;justify-content:flex-start;gap:8px;padding:5px 0 5px 73px;border:0;width:auto;height:auto;background:none;border-radius:0;font-size:12.5px;white-space:nowrap}
.lay .psr{display:grid;grid-template-columns:106px 68px 30px 46px 44px 32px 1fr;align-items:center;gap:0 4px;padding:4px 6px;border-top:1px solid var(--line2);font-size:11.5px;color:var(--ink2);min-height:26px}
.lay .psr .n{font:13px var(--text);color:var(--ink)}
.lay .psr .act{text-align:right;color:var(--ink3);font-size:11px}
.lay .psr .act .lk{font-size:11.5px}
.lay .psr.ch{background:#fff}
.lay .psr.hd{border-top:0;font:600 10px var(--ui);color:var(--ink3);text-transform:uppercase;letter-spacing:.05em;min-height:0;padding-bottom:2px}
.lay .psr.hd .n{font:inherit;color:inherit}
.lay .psub{padding:0 6px 6px 114px;font-size:11.5px;color:var(--ink3);display:flex;align-items:center;gap:7px}
.lay .psub .inp{padding:3px 8px;font-size:12px;display:inline-flex;align-items:center;height:24px;box-sizing:border-box;color:var(--ink)}
.lay .rds{display:flex;gap:18px;padding:4px 0 2px;font-size:12.5px}
.lay .rds>span{display:inline-flex;align-items:center;gap:7px}
.lay .lf{flex:none;padding:6px 76px 14px 16px;border-top:1px solid var(--line2)}
</style>`;

// thumbnails in pairs, as the spreads print: 138|139 … 156|157; 146|147 current.
// 146 ends chapter 6 (short), 147 opens chapter 7 on a right-hand page; 151 ends chapter 7 on a
// right-hand page, so 152 is left blank and chapter 8 opens on 153.
const pgCls = (n) => ({ 146: 'short', 147: 'open', 151: 'short', 152: 'blank', 153: 'open' })[n] || '';
const thumbs = `<div class="thumbs"><div class="tt">Pages<span style="margin-left:auto;color:var(--ink3);font-size:11.5px">two-page spreads</span></div><div class="grid">${Array.from({ length: 10 }, (_, i) => {
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

const fr = (k, v, st = '') => `<div class="fr"${st ? ` style="${st}"` : ''}><span class="k">${k}</span>${v}</div>`;
const unit = '<span class="seg unit"><span class="on">cm</span><span>in</span></span>';
const f = (v, w = 62) => `<span class="inp" style="width:${w}px">${v}</span>`;
const g = (t) => `<span class="gr">${t}</span>`;
// print styles: name in its own look · face · size · spacing · alignment · page break · Standard/Reset
const ps = [
  ['Plain', '', 'Charter', '11', '1.35', 'justify', '—', 0],
  ['Thought', 'font-style:italic', 'Charter It.', '11', '1.35', 'justify', '—', 0],
  ['Letter', '', 'Charter', '10.5', '1.25', 'left', '—', 1],
  ['SIGN', 'font-variant:small-caps;letter-spacing:.06em', 'Charter SC', '10', '1.3', 'center', '—', 0],
  ['Chapter heading', 'font-weight:600', 'Charter', '17', '—', 'center', 'page', 0],
  ['Scene break', 'color:var(--ink2)', '* * *', '11', '2 lines', 'center', '—', 0],
];
const psRows = ps.map(([n, look, face, size, sp, al, br, changed]) => `<div class="psr${changed ? ' ch' : ''}"><span class="n" style="${look}">${n}</span><span>${face}</span><span>${size}</span><span>${sp}</span><span>${al}</span><span>${br}</span><span class="act">${changed ? '<span class="lk">Reset</span>' : 'Standard'}</span></div>`
  + (n === 'Chapter heading' ? `<div class="psub">shows <span class="inp dd" style="width:150px"><span style="flex:1">number and title</span></span></div>` : '')).join('');
const lay = `<div class="lay">
  <div class="lb">
    <div class="gh">Page</div>
    ${fr('Template', '<span class="inp dd" style="width:200px"><span style="flex:1">Trade 6 × 9 in</span></span>')}
    ${fr('Size', `${f('15.24')}<span class="x">×</span>${f('22.86')}${unit}`)}
    ${fr('Margins', `<span class="mg">${g('inside')}${f('1.90', 54)}${g('outside')}${f('1.50', 54)}</span>`)}
    ${fr('', `<span class="mg">${g('top')}${f('1.80', 54)}${g('bottom')}${f('2.00', 54)}</span>`, 'margin-top:-6px')}
    <div class="ck"><span class="cb on"></span>Two-page spreads</div>
    <div class="ck"><span class="cb on"></span>Chapters start on a right-hand page</div>
    <div class="gh">Print styles <span class="ghs">filled with a good standard</span></div>
    <div class="psr hd"><span class="n">Style</span><span>Face</span><span>Size</span><span>Spacing</span><span>Align</span><span>Break</span><span class="act"></span></div>
    ${psRows}
    <div class="gh">Pictures <span class="ghs">as figures</span></div>
    <div class="rds"><span><span class="rd on"></span>In place</span><span><span class="rd"></span>Top of page</span><span><span class="rd"></span>Own page</span></div>
    <div class="gh">Footnotes</div>
    <div class="rds"><span>At the foot of their page</span><span style="color:var(--ink3);font-size:11.5px">in Write, after their paragraph</span></div>
  </div>
  <div class="lf"><div class="gh" style="margin:0 0 8px">Export</div><div style="display:flex;align-items:center;gap:8px"><span class="btn">PDF</span><span class="btn">EPUB</span><span class="btn">Word</span><span class="ck" style="padding:0 0 0 8px"><span class="cb"></span>Include notes</span></div></div>
</div>`;

const html = L.win({
  mode: 'Book',
  crumbs: false,
  left: thumbs,
  right: lay,
  page: `<div class="bookbg"></div>${spread}`,
  status: L.statusBar({ style: false, view: false, words: '86,240 words', pages: 'p. 146 of 248', left: '<span class="sb">laid out in 1.8 s</span>' }),
  ask: 'normal',
  extra: css
    + L.ann(1, 'Two-page spreads on: the thumbnails come in pairs, as the book prints, and “Chapters start on a right-hand page” can be ticked (grayed out otherwise, with the reason)', 330, 104, { w: 330 })
    + L.ann(2, 'A template to start from: paperback 5.5 × 8.5 in, trade 6 × 9 in, A5, manuscript, reading PDF', 738, 104, { w: 230, r: true })
    + L.ann(3, 'Wide fields, and the unit as a small selector beside them: cm or in', 738, 196, { w: 230, r: true })
    + L.ann(4, 'Print styles: every style of yours with its print look, a good standard, Reset beside each; the Chapter heading says number and title, title only, number only, or nothing but a new page and space', 620, 712, { w: 350, r: true })
    + L.ann(5, 'Export: PDF, EPUB, or Word with Include notes; File ▸ Print opens Book and prints the same pages', 690, 800, { w: 280, r: true })
    + L.ann(6, 'Arrows and Page Up/Down turn pages; the whole book lays out in seconds and updates as you adjust', 330, 790, { w: 270 }),
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
    scene: 'Book mode shows the book as it will print: page thumbnails in pairs on the left (Two-page spreads is on), the spread 146–147 in the middle (chapter 6 ends on the left page, chapter 7 opens on the right-hand page), the layout on the right in plain groups.',
    on: 'thumbnails in pairs with 146–147 marked; the spread with running head and page numbers; Page (Template Trade 6 × 9 in, Size and Margins in wide fields with the cm | in selector, ☑ Two-page spreads, ☑ Chapters start on a right-hand page); Print styles (each style in its own look with face, size, spacing, alignment, page break, Standard or Reset; the Chapter heading showing “number and title ▾”); Pictures In place · Top of page · Own page; Footnotes at the foot of their page; Export PDF · EPUB · Word with ☐ Include notes; the status bar with p. 146 of 248 and “laid out in 1.8 s”; the Ask button',
    off: 'a breadcrumb, a Book layout dialog, an arrow on Export, a Print button (File ▸ Print opens Book), fine typography settings, shared templates (later)',
  }),
};
