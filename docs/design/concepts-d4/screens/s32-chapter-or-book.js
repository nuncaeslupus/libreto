// S32: By chapter, or the whole book. Two frames. Top: Write, By chapter, the end of chapter 7 with the gray
// Next line and the status bar menu open. Bottom: Whole book, the same place with the chapter 8 divider and the
// chapter list following the scroll.
const L = require('../lib');
const P = L.sample.chapter7Plain;

// the end of chapter 7 (the last scene, as in S15) and the first paragraphs of chapter 8
const q0 = P[9];
const q1 = 'She had asked him once, on the station steps, whether he would ever lie to her.';
const q2 = 'Kit said no.';
const q3 = 'He said it too fast, the way people answer a question they have rehearsed on the walk over, and she had let it go because it was late and she wanted to believe him.';
const q4 = 'At the corner of Harbor Street she stopped under the awning of the pawnshop and counted the windows above the Blue Lamp. Three dark, one lit. The lit one was the back room.';
const q5 = 'She did not go back in. She stood there long enough for the light to go out, and then a little longer, in case it came on again.';
const c1 = 'The Blue Lamp emptied the way it always did, all at once and for no reason anyone could name. By half past one Lena had locked the bottles away, counted the till twice, and still not looked at the back-room door.';
const c2 = 'She had locked the back room herself on Tuesday night. That part was true, and she held on to it the way Vega had held on to her coin: the one thing on the counter that could not be argued with.';
const c3 = 'The green Fiat was where she had left it, under the only lamp on Harbor Street that still worked. She sat in it with the engine off and watched the window above the pawnshop until the light went out.';

const css = `<style>
.frames{display:flex;flex-direction:column;gap:16px;background:#d9d9d6}
.frames .status{z-index:8}
.s32 .nextln{margin-top:38px;text-align:center;text-indent:0;font:13.5px var(--ui);color:var(--ink3)}
.s32 .chdiv{margin-top:40px;padding-top:38px;background:linear-gradient(90deg,transparent,#c9c9c4 12%,#c9c9c4 88%,transparent) top/100% 1.5px no-repeat}
.s32 .chdiv .chap{margin-bottom:26px}
.s32 .menu .mi{padding:4px 10px}
</style>`;

const status7 = L.statusBar({ style: 'Plain', words: '2,418 words', pages: 'book p. ~146/248', fixes: '3 fixes' })
  .replace(`<span class="sb m">${L.icons.view}`, `<span class="sb m act">${L.icons.view}`);
const viewMenu = `<div class="menu" style="left:954px;bottom:6px;width:172px"><div class="mhd">On the page</div>`
  + `<div class="mi hov"><span>By chapter</span><span class="r">✓</span></div><div class="mi"><span>Whole book</span></div></div>`;

const back = { type: 'front', title: 'Back matter' };
const rows7 = L.sample.navRows.map((r) => (r.type === 'scene' ? { ...r, here: r.title === 'Vega leaves without paying' } : r)).concat([back]);

const topCol = `<p class="first">${q0}</p><p>${q1}</p><p>${q2}</p><p>${q3}</p><p>${q4}</p><p>${q5}<span class="cursor"></span></p>`
  + `<div class="nextln">Next · 8 Closing time ↓</div>`;

const top = L.win({
  mode: 'Write',
  crumbs: { chapter: 'Chapter 7 · Lena’s warning', scene: 'Vega leaves without paying' },
  left: L.navigator({ rows: rows7 }),
  page: L.pageCol(topCol, { paddingTop: 16 }),
  status: status7,
  content: viewMenu,
  ask: 'normal',
  extra: L.ann(1, 'The chapter’s edge: click the line, or press the down arrow on the last line, and the cursor crosses into the first line of chapter 8. Up on the first line goes back into 6', 1080, 520, { w: 300 })
    + L.ann(2, 'Ctrl+Page Down / Ctrl+Page Up jump a whole chapter from anywhere; Back returns from any jump', 640, 796, { w: 270 })
    + L.ann(3, 'By chapter is the default; the switch is remembered per book', 954, 728),
});

// ---- bottom frame: Whole book ----
const rows8 = [];
for (const r of L.sample.navRows) {
  if (r.type === 'scene') continue;
  if (r.n === 7) rows8.push({ ...r, cur: false });
  else if (r.n === 8) rows8.push({ ...r, cur: true }, { type: 'scene', title: 'Lena locks the back room', here: true }, { type: 'scene', title: 'Kit finds the ledger' }, { type: 'scene', title: 'Vega reads the ledger' });
  else rows8.push(r);
}
rows8.push(back);

const botCol = `<p class="first">${q4}</p><p>${q5}</p>`
  + `<div class="chdiv"><div class="chap"><div class="num">CHAPTER 8</div><h1>Closing time</h1></div></div>`
  + `<p class="first"><span class="cursor"></span>${c1}</p><p>${c2}</p><p>${c3}</p>`;

const bottom = L.win({
  mode: 'Write',
  crumbs: { chapter: 'Chapter 8 · Closing time', scene: 'Lena locks the back room' },
  left: L.navigator({ rows: rows8 }),
  page: L.pageCol(botCol, { paddingTop: 16 }),
  status: { style: 'Plain', words: '1,960 words', pages: 'book p. ~151/248', fixes: '1 fix', view: 'Whole book' },
  ask: 'normal',
  extra: L.ann(4, 'Whole book: every chapter on one long page, each heading a divider. When the part changes, its name sits small above the number', 1080, 300, { w: 300 })
    + L.ann(5, 'The list follows the scroll and highlights where you are; a double click on a row scrolls there', 20, 770, { w: 236 })
    + L.ann(6, 'The status bar still counts the chapter under the cursor; marks, notes and the Reference panel behave the same', 300, 800, { w: 330 }),
});

module.exports = {
  id: 'S32',
  file: 's32-chapter-or-book',
  title: 'By chapter, or the whole book',
  width: 1440,
  height: 1816,
  html: css + `<div class="frames s32">${top}${bottom}</div>`,
  caption: L.caption({
    id: 'S32', title: 'By chapter, or the whole book',
    scene: 'Two frames. Top: Write, By chapter, chapter 7 scrolled to its end: the last paragraph, the cursor after its last word, and the gray line “Next · 8 Closing time ↓”; the writer opened the “By chapter ▾” item at the right of the status bar. Bottom: the same place in Whole book: the end of chapter 7, the chapter 8 divider, its first paragraphs with the cursor on the first line, and the chapter list highlighting chapter 8.',
    on: 'top: the chapter list with chapter 7 open and “Vega leaves without paying” marked, the last six paragraphs of chapter 7 with the cursor at the end, “Next · 8 Closing time ↓”, the status bar with By chapter ▾ active and its menu (On the page: By chapter ✓ · Whole book), the Ask button; bottom: the list with chapter 7 plain and chapter 8 bold with its three scenes, the end of chapter 7, the divider (a soft rule, CHAPTER 8, Closing time), the first three paragraphs of chapter 8, the breadcrumb “Chapter 8 · Closing time › Lena locks the back room”, the status bar “1,960 words · book p. ~151/248 · ✓ 1 fix · Whole book ▾”, the Ask button',
    off: 'the “Previous · 6 The back room ↑” line at the top of the chapter, a part line above the divider (chapter 8 stays in Part One), gutter marks, the Reference panel, the Next line in Whole book',
  }),
};
