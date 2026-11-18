// Shared by S31, S32, S34: the Pages view (book outline left, spread center, Book layout right).
const L = require('./lib');

const css = `<style>
.pg8 .nav{width:320px}
.pg8 .nav .navbody{padding:0 8px}
.pg8 .nrow{padding:3px 4px}
.pg8 .nrow .pr{margin-left:auto;font-size:11.5px;color:var(--ink3);padding-left:8px;flex:none;font-variant-numeric:tabular-nums}
.pg8 .nrow.cur .pr{color:var(--ink2)}
.pg8 .nrow.fm .t{color:var(--ink)}
.pg8 .nrow.fm.off .t{color:var(--ink3)}
.pg8 .nrow.fm .cb{margin:0 3px 0 0}
.pg8 .nrow.fm .gen{font-size:10.5px;color:var(--ink3);margin-left:auto;flex:none}
.pg8 .nrow.fm .wr{width:14px;flex:none}
.pg8 .nrow .pg-n{width:16px}
.bookbg{position:absolute;inset:0;background:#e9e9e6}
.bk-top{position:absolute;left:0;right:0;top:12px;display:flex;justify-content:center;align-items:center;gap:10px;font-size:12.5px;color:var(--ink2);z-index:3}
.bk-bot{position:absolute;left:0;right:0;bottom:12px;display:flex;justify-content:center;align-items:center;gap:12px;font-size:12px;color:var(--ink2);z-index:3}
.spread{position:absolute;left:50%;top:58px;transform:translateX(-50%);display:flex;box-shadow:0 8px 28px rgba(0,0,0,.14)}
.spread .pp{width:318px;height:478px;background:#fff;position:relative;padding:40px 36px 44px;font:10.2px/1.5 var(--text);color:var(--ink);overflow:hidden;text-align:justify;hyphens:auto}
.spread .pp+.pp{border-left:1px solid #ececea}
.spread .pp p{margin:0;text-indent:1.4em}
.spread .pp p.first{text-indent:0}
.spread .rh{text-align:center;font-size:7.4px;letter-spacing:.22em;color:var(--ink2);margin-bottom:14px;text-transform:uppercase}
.spread .pn{position:absolute;bottom:18px;left:0;right:0;text-align:center;font-size:9.5px;color:var(--ink2)}
.spread .sink{height:150px}
.spread .opener{text-align:center;position:relative}
.spread .cnum{font-size:8.6px;letter-spacing:.3em;color:var(--ink2);font-variant:small-caps;text-transform:uppercase}
.spread .ctl{font:italic 20px var(--text);margin:7px 0 26px}
.spread .dc{float:left;font:34px/28px var(--text);padding:3px 5px 0 0;margin-top:1px}
.spread .sc{font-variant:small-caps;letter-spacing:.05em}
.spread .hd-sel{margin-bottom:14px;outline:2px solid var(--accent);outline-offset:5px;border-radius:2px;background:var(--accent-tint)}
.lay8{position:absolute;right:0;top:0;bottom:0;width:340px;background:var(--soft);border-left:1px solid var(--line);z-index:4;display:flex;flex-direction:column;font-size:12.5px}
.lay8 .lh{display:flex;align-items:center;gap:8px;padding:12px 16px 8px;font:600 13.5px var(--ui)}
.lay8 .lh .iss{margin-left:auto;font:500 11.5px var(--ui);color:var(--warn);border:1px solid #e6c49c;background:#fdf3e6;border-radius:11px;padding:1px 9px;white-space:nowrap}
.lay8 .lb{padding:0 16px;flex:1;min-height:0;overflow:hidden}
.lay8 .fr{display:flex;align-items:center;gap:8px;padding:4px 0;min-height:32px}
.lay8 .fr .k{width:96px;flex:none;color:var(--ink2)}
.lay8 .inp{padding:4px 9px;font-size:12.5px;display:inline-flex;align-items:center;height:26px;box-sizing:border-box}
.lay8 .inp.dd:after{margin-left:auto}
.lay8 .ck{display:flex;align-items:center;gap:8px;padding:5px 0;font-size:12.5px;width:auto;height:auto;border:0;background:none;white-space:nowrap;justify-content:flex-start}
.lay8 .grp{border-top:1px solid var(--line);padding:9px 0 3px}
.lay8 .grp .gt{display:flex;align-items:center;gap:7px;font-weight:600;font-size:12.5px;min-height:22px}
.lay8 .grp .gt svg{width:10px;height:10px;color:var(--ink3)}
.lay8 .grp .gt small{margin-left:auto;font-weight:400;color:var(--ink3);font-size:11.5px}
.lay8 .grp .bd{padding:4px 0 2px 17px}
.lay8 .lf{flex:none;padding:12px 16px 14px;border-top:1px solid var(--line2);display:flex;justify-content:flex-end}
.lay8 .btn.pri{height:30px;padding:0 20px}
.lay8 .grp.warn .gt small{color:var(--warn)}
</style>`;

const chev = (open) => L.icons[open ? 'chevron' : 'chevron-right'];

// the book outline as the Navigator's Book list
const frontRow = (t, o = {}) => `<div class="nrow fm${o.on === false ? ' off' : ''}">${o.gen ? `<span class="cb${o.on === false ? '' : ' on'}"></span>` : '<span class="wr"></span>'}<span class="t">${t}</span><span class="gen">${o.gen ? 'generated' : o.empty ? 'not written' : 'written'}</span></div>`;
const chRow = (n, t, pr, cur) => `<div class="nrow${cur ? ' cur' : ''}"><span class="cv">${cur ? L.icons.chevron : ''}</span><span class="n">${n}</span><span class="t">${t}</span><span class="pr">${pr}</span></div>`;
const grp = (t) => `<div class="nrow grp"><span class="cv">${L.icons.chevron}</span><span class="t">${t}</span></div>`;
const part = (t, pr) => `<div class="nrow part"><span class="cv"></span><span class="t">${t}</span><span class="pr" style="font-weight:400;letter-spacing:0;text-transform:none">${pr}</span></div>`;
function outline() {
  const rows = [
    grp('Front'),
    frontRow('Half-title', { gen: 1 }), frontRow('Title', { gen: 1 }), frontRow('Copyright', { gen: 1 }),
    frontRow('Dedication', { empty: 0 }), frontRow('Epigraph', { empty: 1 }), frontRow('Contents', { gen: 1, on: false }),
    part('Part One: Winter', 'p. 1'),
    chRow(1, 'Rain on the glass', '3–26'), chRow(2, 'The bartender', '27–46'),
    chRow(3, 'A note under the office door', '47–64'), chRow(4, 'Quarter past three', '65–84'),
    chRow(5, 'Kit’s ledger', '85–110'), chRow(6, 'The back room', '111–146'),
    chRow(7, 'Lena’s warning', '147–158', true),
    chRow(8, 'Closing time', '159–174'), chRow(9, 'The pawnshop and the man who never came back', '175–182'),
    part('Part Two: Spring', 'p. 183'),
    chRow(10, 'Station steps', '185–188'), chRow(11, 'The back room, finally', '189–238'),
    grp('Back'),
    frontRow('Acknowledgments', { empty: 0 }), frontRow('About the author', { empty: 0 }),
  ].map((h) => ({ type: 'raw', html: h }));
  return L.navigator({ rows, placeholder: 'Filter', section: 'Book' }).replace('<div class="nav">', '<div class="nav">');
}

const p146 = [
  'The back room was smaller than the stories made it. A table, two chairs that did not match, a safe with its door ajar and nothing inside but a ledger clip and the smell of oil. Vega stood in the doorway and let her eyes do the walking.',
  '“Nobody uses it,” Lena said behind her. “Not since the spring.”',
  '“Somebody wiped the table.”',
  'Lena did not answer that. She went back to the bar, and after a while the glasses started again, one after another, as if nothing in the world had been said.',
];
const rest = L.sample.chapter7Plain.slice(1, 5);
// the spread 146–147; sel: true outlines the chapter heading
function spread(sel) {
  const head = `<div class="cnum">Chapter seven</div><div class="ctl">Lena’s warning</div>`;
  return `<div class="spread">
  <div class="pp"><div class="rh">Nora Quiles</div>${p146.map((p, i) => `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`).join('')}<div class="pn">146</div></div>
  <div class="pp"><div class="sink"></div><div class="opener">${sel ? `<div class="hd-sel" style="display:inline-block;padding:4px 22px 2px">${head}</div>` : head}</div>
   <p class="first"><span class="dc">T</span><span class="sc">he Blue Lamp was half empty by ten,</span> which was how Vega liked it. The jukebox had given up on the evening, and the only sound was Lena drying glasses that were already dry.</p>
   ${rest.slice(0, 2).map((p) => `<p>${p}</p>`).join('')}<div class="pn">147</div></div>
</div>`;
}
const center = (sel) => `<div class="bookbg"></div><div class="bk-top">Preview as<span class="seg"><span class="on">Print</span><span>Ebook</span><span>Manuscript</span></span></div>${spread(sel)}<div class="bk-bot"><span>‹</span><span>Pages 146–147 of 248</span><span>›</span></div>`;

const fr = (k, v) => `<div class="fr"><span class="k">${k}</span>${v}</div>`;
const dd = (t, w) => `<span class="inp dd" style="width:${w || 170}px"><span>${t}</span></span>`;
const folded = (t, sm, warn) => `<div class="grp${warn ? ' warn' : ''}"><div class="gt">${chev(false)}${t}<small>${sm || ''}</small></div></div>`;
const layPanel = () => `<div class="lay8"><div class="lh">Book layout<span class="iss">Layout issues 3</span></div><div class="lb">
  ${fr('Theme', dd('Classic', 190))}${fr('Trim', dd('Trade · 6 × 9 in', 190))}
  <div class="grp"><div class="gt">${chev(true)}Type<small>Charter · 11 pt</small></div><div class="bd">${fr('Body face', dd('Charter', 120))}${fr('Size', dd('11 pt', 120))}<div class="ck"><span class="cb on"></span>Justified, hyphenated</div></div></div>
  ${folded('Chapter openers', 'one third sink')}${folded('Headers &amp; page numbers', 'author · title · footer')}${folded('Breaks', '* * *')}${folded('Pictures &amp; notes', 'notes at chapter end')}${folded('Fine typography', 'on')}
  </div><div class="lf"><span class="btn pri">Export…</span></div></div>`;

function pagesWin(o) {
  const html = css + L.win({
    view: 'Pages', crumbs: 'Chapter 7 · Lena’s warning', strip: { review: 12 }, height: o.height || 940,
    left: outline(), right: o.panel || layPanel(), page: center(o.sel),
    status: { style: false, words: '54,300 words', goal: 85, pages: 'p. 146 of 248' }, ask: false,
    content: o.content || '', extra: o.extra || '',
  });
  return html.replace('<div class="win"', '<div class="win pg8"');
}
module.exports = { css, outline, spread, center, layPanel, pagesWin, fr, dd, chev };
