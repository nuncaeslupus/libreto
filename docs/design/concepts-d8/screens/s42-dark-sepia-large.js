// S42: Settings ▸ Reading & seeing, with a live sample of the four marks; insets: Dark, Sepia, interface size 175 %.
const L = require('../lib');
const K = require('../d8-kit-s37');

const css = `<style>
.s42 .top{position:relative;height:640px;background:#e3e3e0}
.s42 .top .dlg{position:absolute}
.s42 .opt3{display:flex;align-items:center;gap:8px;padding:2px 0;font-size:13px}
.s42 .sample{border:1px solid var(--line);border-radius:9px;padding:14px 18px 12px;font:17px/1.7 var(--text);color:var(--ink);margin-top:6px;background:#fff}
.s42 .legend{display:flex;gap:16px;margin-top:8px;font:11.5px var(--ui);color:var(--ink2);flex-wrap:wrap}
.s42 .legend span{display:inline-flex;gap:6px;align-items:center}
.s42 .fonts{display:flex;gap:8px;flex-wrap:wrap}
.s42 .fonts span{border:1px solid var(--line);border-radius:7px;padding:3px 10px;font-size:13px;background:#fff}
.s42 .fonts span.on{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-tint)}
.s42 .insets{display:flex;gap:16px;flex-wrap:wrap}
.s42 .crop .lbl{white-space:nowrap}
.s42 .ct{width:100%;border-collapse:collapse;font-size:12.5px;margin:6px 0 4px}
.s42 .ct th{font:600 10.5px var(--ui);letter-spacing:.07em;text-transform:uppercase;color:var(--ink3);text-align:left;padding:6px 8px;border-bottom:1px solid var(--line)}
.s42 .ct td{padding:7px 8px;border-bottom:1px solid var(--line2);font-variant-numeric:tabular-nums}
.s42 .big .page .col{width:354px}
.s42 .gray{color:var(--ink3);font-size:12px}
/* dark: the d4 variables flip; these are the places d4.css hard-codes white */
.dark{--spell:#ff8f87;--gram:#8db4ff;--fix:#6fcf97;--note:#e0b04a;--task:#8db4ff;background:var(--paper)}
.dark .u-fix{border-bottom-color:rgba(111,207,151,.85)}
.dark .u-note{background:rgba(224,176,74,.26)}
.dark .strip .views .on,.dark .navsec .secs .on,.dark .modes .on{background:#2f3033;color:var(--ink)}
.dark .askbtn{background:#2a2b2e;box-shadow:0 2px 10px rgba(0,0,0,.5),0 0 0 1px rgba(255,255,255,.08)}
.dark .askbtn .logo g{stroke:#8db4ff;fill:rgba(141,180,255,.18)}
.dark .status .sb.m{background:rgba(255,255,255,.06)}
.dark .nrow.cur,.dark .nrow.hov{background:#2c2d30}
.dark .filter{background:#26272a;border-color:var(--line)}
.dark .revbtn{background:var(--paper);color:var(--ink2)}
.dark .revbtn i.n{background:#8c8d8a;color:#111}
.dark .titlebar .appic{background:#3a3b3e;border-color:#4a4b4e}
.dark .chap h1{color:var(--ink)}
.dark .cursor{background:var(--ink)}
.dark .win{color:var(--ink)}
.sepia{--spell:#b32f2f;--gram:#2f5fc0;--fix:#27764a;--note:#9a6b0a;background:var(--paper)}
.sepia .u-fix{border-bottom-color:rgba(39,118,74,.8)}
.sepia .strip .views .on,.sepia .modes .on{background:#fbf7ec}
.sepia .askbtn,.sepia .filter,.sepia .revbtn{background:#fbf7ec}
.sepia .nrow.cur{background:#e8dfc8}
.sepia .status .sb.m{background:rgba(120,90,30,.07)}
.sepia .titlebar .appic{background:#e0d6bf;border-color:#cfc2a3}
</style>`;

const H = (cls, t) => `<span class="${cls}">${t}</span>`;
const sample = `<div class="sample">Vega kept her eyes on the ${H('u-spell', 'leters')} while Lena dried a glass that was already dry. The envelopes ${H('u-prop', 'was')} still sealed; she had ${H('u-fix', 'received')} no word since half past, and ${H('u-note', 'Kit’s ledger')} had not been mentioned once.</div>
  <div class="legend"><span>${H('u-spell', 'wavy')} check spelling</span><span>${H('u-prop', 'dashed')} a suggestion waits</span><span>${H('u-fix', 'thin solid')} fixed for you</span><span>${H('u-note', 'tinted')} a note</span></div>`;

const main = `<div class="sx-sub">Yours: how Libreto looks and reads on this computer; the book is not changed</div>
  ${K.row('Theme', `<span class="seg"><span class="on">Light</span><span>Sepia</span><span>Dark</span><span>High contrast</span><span>Follow system</span></span>`)}
  ${K.row('Page font', `<span class="fonts"><span class="on" style="font-family:Charter,Georgia,serif">Charter</span><span style="font-family:Atkinson Hyperlegible,Verdana,sans-serif">Atkinson Hyperlegible</span><span style="font-family:OpenDyslexic,Comic Sans MS,sans-serif">OpenDyslexic</span><span style="font-family:Lexend,Verdana,sans-serif">Lexend</span></span>`)}
  ${K.row('Interface size', `<span class="seg"><span>System</span><span class="on">100 %</span><span>125 %</span><span>150 %</span><span>175 %</span><span>200 %</span></span><span class="gray">menus, strip, panels and status bar; the page keeps its own size</span>`)}
  ${K.row('Messages', `${K.rd(true, 'stay until I close them')}${K.rd(false, 'fade after a few seconds')}`)}
  ${K.row('Motion', `${K.cb(false, 'Reduce motion')}${K.cb(false, 'Open cards on click only')}`)}
  <div class="sx-sec" style="margin-top:12px">Live sample: the four marks, one shape each</div>${sample}
  <div class="gray" style="margin-top:6px">Meaning never rests on color alone: the shape tells the marks apart, color comes second.</div>`;

const dlg = K.dialog({ x: 24, y: 20, w: 900, h: 600, active: 'Reading & seeing', main });
const top = `<div class="top">${dlg}
  ${L.ann(1, 'Theme in one row. “High contrast” and “Follow system” are here too', 944, 70, { w: 440 })}
  ${L.ann(2, 'Page fonts built for easier reading are part of the list, not a hidden option', 944, 150, { w: 440 })}
  ${L.ann(3, 'Interface size up to 200 %, or the system’s. It scales the chrome and the panels together, so nothing overlaps', 944, 250, { w: 440 })}
  ${L.ann(4, 'Messages stay until you close them, so nothing is missed because it faded', 944, 350, { w: 440 })}
  ${L.ann(5, 'The sample is live: change the theme or font and it changes here, with all four marks', 944, 470, { w: 440 })}
</div>`;

// the Text view used in the insets: navigator open, a few marks, one note in the gutter
const P = L.sample.chapter7Plain;
const body = [
  'The Blue Lamp was half empty by ten, which was how Vega liked it. The jukebox had given up on the evening, and the only sound was Lena drying glasses that were already dry, one after another, as if the cloth could rub the night off them.',
  '“You’re early,” Lena said without looking up. “Or <span class="u-spell">leters</span> late. I can never tell with you.”',
  'Vega took the stool at the end of the bar, the one with a view of the back-room door. “Has Kit been in?”',
  '“Kit who?” Lena set a glass down hard enough to make it ring. <span class="u-note">“Half the city’s called Kit.”</span>',
  '“Mine. Thin, nervous, writes everything down in a little green ledger.” She had <span class="u-fix">received</span> no better answer, and the envelopes <span class="u-prop">was</span> still sealed on the bar.',
];
const col = `<div class="chap"><div class="num">CHAPTER 7</div><h1>Lena’s warning</h1></div>` + body.map((p, i) => `<div class="para"><p${i === 0 ? ' class="first"' : ''}>${p}${i === 3 ? L.gm('note', L.lineTop(1)) : ''}</div>`).join('').replace(/<\/p>/g, '') .replace(/<\/div>/g, '</p></div>');
const tw = (o = {}) => L.win({
  view: 'Text', crumbs: L.sample.crumbs7, strip: { review: 12 }, left: o.left === false ? '' : L.navigator({ rows: L.sample.navRows.slice(0, 12) }),
  page: L.pageCol(col, { paddingTop: 36 }), status: { style: 'Plain', words: '812 of 1,000 today', goal: 81, pages: 'p. 146 of 248' }, ask: 'normal', ...o.win,
});
const scaled = (inner, s, extraCls = '') => `<div style="width:${Math.round(1440 * s)}px;height:${Math.round(900 * s)}px;overflow:hidden;position:relative"><div class="${extraCls}" style="width:1440px;height:900px;transform:scale(${s});transform-origin:0 0;position:absolute;left:0;top:0">${inner}</div></div>`;
const big = `<div class="big" style="zoom:1.75;width:823px;height:514px"><div style="width:823px;height:514px">${L.win({
  view: 'Text', crumbs: { chapter: 'Chapter 7 · Lena’s warning' }, strip: { review: 12 }, width: 823, height: 514,
  page: L.pageCol(`<div style="zoom:${(1 / 1.75).toFixed(4)};width:620px;margin:0 auto">${col}</div>`, { paddingTop: 12 }),
  status: { style: 'Plain', words: '812 of 1,000 today', goal: 81, pages: 'p. 146 of 248' }, ask: 'normal',
})}</div></div>`;

const S = 0.475;
const ct = `<table class="ct"><tr><th>Theme</th><th>Text on page</th><th>Gray text</th><th>Lowest mark</th></tr>
  <tr><td>Light</td><td>15.7 : 1</td><td>7.1 : 1</td><td>4.2 : 1 (fixed)</td></tr>
  <tr><td>Sepia</td><td>14.0 : 1</td><td>6.3 : 1</td><td>4.9 : 1 (fixed)</td></tr>
  <tr><td>Dark</td><td>13.5 : 1</td><td>8.3 : 1</td><td>7.7 : 1 (spelling)</td></tr></table>
  <div class="gray">Every mark is at least 3 : 1 against its page (the minimum for a shape), and none of them is told apart by color alone.</div>`;
const W = 1384, SB = W / 1440;
const clip = (inner, hClip, extraCls = '') => `<div style="width:${W}px;height:${Math.round(hClip * SB)}px;overflow:hidden;position:relative"><div class="${extraCls}" style="width:1440px;height:900px;transform:scale(${SB});transform-origin:0 0;position:absolute;left:0;top:0">${inner}</div></div>`;
const below = `<div class="below" style="flex-direction:column;gap:16px">
  <div class="crop" style="width:${W}px"><div class="lbl">Dark (top of the window, near full size)</div>${clip(tw(), 560, 'dark')}</div>
  <div class="crop" style="width:${W}px"><div class="lbl">Sepia (top of the window, near full size)</div>${clip(tw(), 560, 'sepia')}</div>
  <div class="crop" style="width:${W}px"><div class="lbl">Interface size 175 %: chrome larger, the page keeps its size and measure</div>${clip(big, 540)}</div>
  <div class="crop" style="width:760px"><div class="lbl">Contrast, measured on these colors</div><div style="padding:12px 18px 14px">${ct}</div></div>
</div>`;

module.exports = {
  id: 'S42', file: 's42-dark-sepia-large', title: 'Reading & seeing', width: 1440, height: 2600,
  html: `<div class="s42">${css}${K.css}${top}${below}</div>`,
  caption: L.caption({
    id: 'S42', title: 'Reading & seeing',
    scene: 'Settings ▸ Reading & seeing, with the live sample under the choices. Under it, the same Text view in Dark and in Sepia (the .dark and .sepia themes), at interface size 175 %, and the contrast measured for each theme.',
    on: 'the Settings window on Reading & seeing (Theme Light · Sepia · Dark · High contrast · Follow system; four page fonts including Atkinson Hyperlegible and OpenDyslexic; Interface size System · 100 % to 200 %; messages stay until closed; Reduce motion); the sample paragraph with a wavy red, a dashed blue, a thin solid green and a tinted amber mark and their legend; the top of the Text view in Dark, in Sepia and at 175 %, each near full size (strip, view switch, Review, Navigator, the page with its marks); the contrast table',
    off: 'the High contrast theme drawn (it follows the system’s forced colors), a Back to defaults button, any color picker, the page font in the book (it is a personal setting)',
  }),
};
