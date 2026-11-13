// S04: Coming back (draft 6). Libreto reopened as it was left; the notice card at the bottom of the page says what is
// waiting, with a button for each item and Got it; the bell shows its dot. No dialog.
// Under the window: the bell's menu after Got it, the same line as its first row.
const L = require('../lib');
const P = L.sample.chapter7Plain;

// scrolled to the middle of chapter 7: the heading is above the top edge; the cursor sits after “since Tuesday.”
const col = P.slice(1).map((p, i) => {
  if (i === 4) p = p.replace('since Tuesday.”', 'since Tuesday.”<span class="cursor"></span>');
  return `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`;
}).join('');

const css = `<style>
.s04 .notice{white-space:normal;align-items:flex-start;padding:10px 12px 10px 14px}
.s04 .notice>svg{margin-top:1px}
.s04 .notice .ntx{display:flex;flex-direction:column;gap:8px}
.s04 .notice .nl{white-space:nowrap}
.s04 .notice .nbtns{display:flex;gap:8px;align-items:center}
.s04 .notice .nbtns .btn{height:24px;padding:0 10px;font-size:12px}
.s04 .notice .nx{margin-top:1px}
.below.s04{position:relative}
/* work-around: the generic .dot rule in d4.css shrinks the bell to 7 px when it carries its unread dot */
.s04 .strip .ib.bel.dot{width:28px;height:28px;border-radius:6px;display:inline-flex}
.below.s04 .bellwrap{position:relative;height:200px}
.below.s04 .menu{left:16px;top:14px;width:520px}
.below.s04 .menu .mi{white-space:normal;align-items:flex-start}
.below.s04 .menu .mi svg{width:14px;height:14px;color:var(--ink3);flex:none;margin-top:2px}
.below.s04 .menu .mi .r{flex:none}
</style>`;

const noticeText = `<span class="nl">Tuesday, 1,240 words · 12 to review · 2 cards unplaced · 3 clippings in the Inbox</span>`
  + `<span class="nbtns"><span class="btn">Review</span><span class="btn">Plan</span><span class="btn">Research</span></span>`;
const notice = L.notice(noticeText, { kind: 'info', undo: false });

// the bell's menu after Got it, in the crop under the window
const menu = `<div class="menu"><div class="mhd">Notices</div>`
  + `<div class="mi hov">${L.icons.info}<span>Tuesday, 1,240 words · 12 to review · 2 cards unplaced · 3 clippings in the Inbox</span><span class="r">today 9:02</span></div>`
  + `<div class="mi">${L.icons.fix}<span>Scene break · ch. 7</span><span class="r">Tuesday</span></div>`
  + `<div class="mi">${L.icons.info}<span>New chapter 8 started here</span><span class="r">Tuesday</span></div>`
  + `<div class="msep"></div><div class="mi"><span style="color:var(--accent)">Open History</span></div>`
  + `</div>`;
const bellCrop = `<div class="crop" style="width:560px"><div class="lbl">The bell, after Got it</div><div class="bellwrap">${menu}</div></div>`;

const html = css + L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  page: L.pageCol(col, { paddingTop: 22 }),
  strip: { reviewCount: 12, bell: 'dot' },
  status: { style: 'Plain', words: '2,418 words', pages: 'book p. ~146/248', review: '12 to review' },
  ask: 'normal',
  content: notice,
  extra: L.ann(1, 'Nothing to answer: same mode, same chapter, same columns, the cursor where it was. The page is ready', 60, 120, { w: 300 })
    + L.ann(2, 'When you last wrote and how much, then what waits, each with a button', 60, 770, { w: 270 })
    + L.ann(3, 'Stays until Got it; typing does not dismiss it. Then in the bell and History', 1080, 770, { w: 260 })
    + L.ann(4, 'The bell’s dot: something there is unread', 1124, 76, { w: 240, r: true }),
}) + `<div class="below s04">${bellCrop}`
  + L.ann(5, 'The same line is the first row of the bell and of History: nothing seen late is lost. The card can be turned off in Settings', 620, 70, { w: 360 })
  + `</div>`;

module.exports = {
  id: 'S04',
  file: 's04-welcome-back',
  title: 'Coming back',
  width: 1440,
  height: 1171,
  html: html.replace('<div class="win"', '<div class="win s04"'),
  caption: L.caption({
    id: 'S04', title: 'Coming back',
    scene: 'Libreto reopened the next day, exactly as it was left: Write, chapter 7 scrolled to the middle, both columns closed, the cursor after “since Tuesday.” A notice card at the bottom of the page says when you last wrote and what is waiting, with a button for each item and Got it; the bell shows a dot. Under the window: the bell’s menu once the card is gone.',
    on: 'the strip (☰, both toggles off, the tabs with Write underlined and 12 on Review, Find, the bell with its dot), chapter 7 mid-scroll with the cursor, the notice card (“Tuesday, 1,240 words · 12 to review · 2 cards unplaced · 3 clippings in the Inbox”, Review, Plan, Research, Got it; no Undo), the Ask button, the status bar (Plain, 2,418 words, book p. ~146/248, ● 12 to review, ⌨, Whole book, Show, History, zoom); in the crop, the bell’s menu: the same line first, Scene break · ch. 7, New chapter 8 started here, Open History',
    off: 'a “What are you doing now?” dialog, a timer on the card, any dimming, navigator, Reference panel, History itself, the Settings switch',
  }),
};
