// S04: Coming back. Libreto reopened as it was left; the notice card at the bottom of the page says what is waiting,
// with a button for each item, and a faint motion hint shows where it goes: into the Ask button. No dialog.
// Under the window: Ask's clock menu, whose first row is “Where you left off”.
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
.s04 .ghost{position:absolute;z-index:25;background:#fff;border:1px solid var(--line);border-left:3px solid var(--note);border-radius:9px;box-shadow:0 6px 18px rgba(0,0,0,.12);pointer-events:none}
.below.s04{position:relative}
.below.s04 .askwrap{position:relative;width:420px;margin:16px auto 0}
.below.s04 .ask{position:static;max-height:none;box-shadow:0 1px 3px rgba(0,0,0,.08)}
.below.s04 .menu{left:112px;top:42px;width:270px}
.below.s04 .menu .mi svg{width:14px;height:14px;color:var(--ink3);flex:none}
.below.s04 .menu .mi.hov svg{color:var(--accent)}
</style>`;

// the notice: the toolkit has no info icon yet (notice() falls back to the note glyph), so the clock stands in for it
const noticeText = `<span class="nl">Yesterday 21:05 · ch. 7, 412 words · 2 cards not placed · 3 clippings in the Inbox · 1 note from Marta</span>`
  + `<span class="nbtns"><span class="btn">Place cards</span><span class="btn">Open Inbox</span><span class="btn">Read note</span></span>`;
const notice = L.notice(noticeText, { kind: 'info', undo: false }).replace(/<svg[\s\S]*?<\/svg>/, L.icons.clock);

// three fading copies of the card, toward the Ask button (window coordinates)
const ghost = (x, y, w, h, op) => `<div class="ghost" style="left:${x}px;top:${y}px;width:${w}px;height:${h}px;opacity:${op}"></div>`;
const trail = ghost(1092, 804, 150, 46, 0.38) + ghost(1232, 814, 88, 30, 0.24) + ghost(1330, 823, 38, 16, 0.14);

// Ask's clock menu, in the crop under the window
const menu = `<div class="menu">`
  + `<div class="mi hov">${L.icons.clock}Where you left off<span class="r">yesterday 21:05</span></div>`
  + `<div class="msep"></div>`
  + `<div class="mi">Lena and the back room<span class="r">yesterday</span></div>`
  + `<div class="mi">Chapter 8 timing<span class="r">Oct 30</span></div>`
  + `</div>`;
const askCrop = `<div class="crop" style="width:470px;height:250px"><div class="lbl">Ask’s clock menu, after the card folded</div>`
  + `<div class="askwrap">${L.askPanel({}).replace(`${L.icons['history-list']}</span>`, `${L.icons['history-list']}</span>`).replace('<span class="ib "', '<span class="ib on"')}${menu}</div></div>`;

const html = css + L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  page: L.pageCol(col, { paddingTop: 22 }),
  status: { style: 'Plain', words: '2,418 words', pages: 'book p. ~146/248', fixes: '3 fixes' },
  ask: 'dot',
  content: notice,
  extra: trail
    + L.ann(1, 'Nothing to answer: same mode, same chapter, same columns, the cursor where it was. The page is ready', 60, 150, { w: 300 })
    + L.ann(2, 'On no timer: the card stays until you type or click elsewhere, then it folds. One button per waiting item', 60, 770, { w: 280 })
    + L.ann(3, 'When you move on, the card slides into the Ask button, so you see where it went; the dot says something waits there', 1080, 724, { w: 300 })
    + L.ann(4, 'Nothing is dimmed and no dialog asks what you want to do', 1060, 150, { w: 300 }),
}) + `<div class="below s04">${askCrop}`
  + L.ann(5, 'From then on “Where you left off” is the first row of Ask’s clock menu, the top suggestion in an empty Ask box, and the first row in History: nothing seen late is lost', 520, 60, { w: 400 })
  + L.ann(6, 'The card can be turned off in Settings', 520, 140, { w: 300 })
  + `</div>`;

module.exports = {
  id: 'S04',
  file: 's04-welcome-back',
  title: 'Coming back',
  width: 1440,
  height: 1186,
  html: html.replace('<div class="win"', '<div class="win s04"'),
  caption: L.caption({
    id: 'S04', title: 'Coming back',
    scene: 'Libreto reopened the next day, exactly as it was left: Write, chapter 7 scrolled to the middle, both columns closed, the cursor after “since Tuesday.” A notice card at the bottom of the page says when you last wrote and what is waiting, with a button for each item; the faint copies show where it goes when you move on: into the Ask button. Under the window: Ask’s clock menu.',
    on: 'the strip with both toggles off, chapter 7 mid-scroll with the cursor, the notice card (clock, “Yesterday 21:05 · ch. 7, 412 words · 2 cards not placed · 3 clippings in the Inbox · 1 note from Marta”, Place cards, Open Inbox, Read note, ✕; no Undo), three fading copies toward the Ask button, the Ask button with its dot, the status bar as pills (Plain, 2,418 words, book p. ~146/248, ✓ 3 fixes, By chapter, Highlights, History, zoom); in the crop, the Ask panel header with the clock pressed and the menu “Where you left off · yesterday 21:05”, “Lena and the back room”, “Chapter 8 timing”',
    off: 'the old “What are you doing now?” dialog, a timer on the card, any dimming, the black toast, navigator, Reference panel, History’s Today list, the Settings switch, Search &amp; ask box, provider icon in the status bar',
  }),
};
