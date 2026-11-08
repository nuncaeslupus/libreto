// S30: three window sizes. 1440 (both columns in the margins), 1200 (one column at a time), 1000 (the column lies over the page edge).
const L = require('../lib');
const P = L.sample.chapter7Plain;
const SC = 0.55;

const col = `<div class="chap"><div class="num">CHAPTER 7</div><h1>Lena’s warning</h1></div>`
  + P.map((p, i) => `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`).join('');
const status = { style: 'Plain', words: '2,418 words', pages: 'book p. ~146/248', fixes: '3 fixes' };

const w1440 = L.win({
  width: 1440, mode: 'Write', crumbs: L.sample.crumbs7,
  left: L.navigator({ rows: L.sample.navRows }),
  right: L.reference({ kind: 'Person', name: 'Lena', backOn: true, body: L.refCard(L.sample.lena) }),
  page: L.pageCol(col, { paddingTop: 40 }), status, ask: 'normal',
});
const w1200 = L.win({
  width: 1200, mode: 'Write', crumbs: L.sample.crumbs7,
  left: L.navigator({ rows: L.sample.navRows }),
  page: L.pageCol(col, { paddingTop: 40 }), status, ask: 'normal',
  extra: L.tip('Opens in place of the chapters', { right: 10, y: 128 }),
});
const w1000 = L.win({
  width: 1000, mode: 'Write', crumbs: L.sample.crumbs7,
  left: L.navigator({ rows: L.sample.navRows }),
  page: L.pageCol(col, { paddingTop: 40 }), status, ask: 'normal',
});

const frame = (html, w, x, y, cls) => `<div class="${cls}" style="position:absolute;left:${x}px;top:${y}px;width:${w * SC}px;height:${900 * SC}px;box-shadow:0 6px 24px rgba(0,0,0,.14)">`
  + `<div style="transform:scale(${SC});transform-origin:top left">${html}</div></div>`;
const label = (t, x, y) => `<div style="position:absolute;left:${x}px;top:${y}px;font:600 11px var(--ui);letter-spacing:.06em;text-transform:uppercase;color:#66696e">${t}</div>`;

const extraCss = `<style>
.w1200 .strip .crumbs{max-width:220px}
.w1000 .strip .crumbs{max-width:120px}
.w1000 .strip .crumbs .dd.ch{flex:0 1 auto}
.w1000 .nav{box-shadow:6px 0 22px rgba(0,0,0,.14);border-right-color:#d6d6d2}
</style>`;

const H = 1180;
const html = extraCss + `<div style="position:relative;width:1440px;height:${H}px;background:#d9d9d6">`
  + label('1440 px and above · both columns fit in the margins', 324, 22)
  + frame(w1440, 1440, 324, 42, 'w1440')
  + label('1200 to 1440 px · one column at a time', 90, 622)
  + frame(w1200, 1200, 90, 642, 'w1200')
  + label('Below 1200 px · the column lies over the edge', 800, 622)
  + frame(w1000, 1000, 800, 642, 'w1000')
  + L.ann(1, 'Page centered on the window; the columns take the margins', 40, 260, { w: 250 })
  + L.ann(2, 'Only one column open; the right toggle would open the Reference in place of the chapters', 90, 556, { w: 480 })
  + L.ann(3, 'The open column lies over the edge of the page with a soft shadow; the page did not move', 800, 556, { w: 480 })
  + `</div>`;

module.exports = {
  id: 'S30',
  file: 's30-window-sizes',
  title: 'Three window sizes',
  width: 1440,
  height: H,
  html,
  caption: L.caption({
    id: 'S30', title: 'Three window sizes',
    scene: 'The same chapter in three windows, drawn at reduced scale. At 1440 px both columns sit in the margins beside the centered page. At 1200 px only one column fits: the chapters are open, and the right toggle says the Reference would open in their place. At 1000 px the open column lies over the edge of the page, with a shadow; the page stays where it was.',
    on: 'three windows labeled with their widths: 1440 with navigator, page and Reference panel; 1200 with the navigator and the tooltip “Opens in place of the chapters” at the right toggle; 1000 with the navigator over the page edge, casting a shadow; the Ask button in each; the status bar in each',
    off: 'a narrowed page (that happens below about 900 px), the Ask panel, Search &amp; ask box, provider icon in the status bar',
  }),
};
