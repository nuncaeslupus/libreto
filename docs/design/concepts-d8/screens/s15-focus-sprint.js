// S15: Focus (F11) and the sprint. Draft 8; from draft 7's S13. Only the page; sprint = a thin time bar; the end = one line and Close.
const L = require('../lib');
const P = L.sample.chapter7Plain;
const plain = `<div class="chap"><div class="num">CHAPTER 7</div><h1>Lena’s warning</h1></div>`
  + P.map((p, i) => `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`).join('');

const css = `<style>
.s15 .exitf{position:absolute;left:50%;top:12px;transform:translateX(-50%);display:inline-flex;gap:8px;align-items:center;background:#fff;border:1px solid var(--line);border-radius:14px;padding:4px 12px;font:12.5px var(--ui);color:var(--ink2);box-shadow:0 2px 8px rgba(0,0,0,.08);z-index:5}
.s15 .sbar{position:absolute;left:50%;top:20px;width:620px;margin-left:-310px;z-index:4}
.s15 .sbar .tr{height:3px;border-radius:2px;background:var(--line)}
.s15 .sbar .tr i{display:block;height:3px;border-radius:2px;background:var(--ink3);width:74.7%}
.s15 .sbar .lb{display:flex;justify-content:space-between;margin-top:6px;font:11.5px var(--ui);color:var(--ink3)}
.s15 .endcard{position:absolute;left:50%;top:104px;transform:translateX(-50%);z-index:6;width:420px;background:#fff;border:1px solid var(--line);border-radius:12px;box-shadow:0 14px 40px rgba(0,0,0,.14);padding:22px 24px 18px;text-align:center}
.s15 .endcard .big{font:600 24px var(--ui);white-space:nowrap;color:var(--ink)}
.s15 .endcard .sub{font:13px var(--ui);color:var(--ink2);margin:6px 0 16px}
.s15 .dim .page{opacity:.35}
.below.s15{gap:24px;padding:22px 28px}
.below.s15 .crop{height:330px;background:#fff;position:relative}
.below.s15 .crop:after{content:"";position:absolute;left:0;right:0;bottom:0;height:60px;background:linear-gradient(rgba(255,255,255,0),#fff 85%);z-index:7}
.below.s15 .crop .win{margin-left:-382px;margin-top:0;width:1440px;height:900px}
</style>`;

const focusWin = (extra, cls) => `<div class="win ${cls || ''}" style="width:1440px;height:900px"><div class="content">${L.pageCol(plain, { paddingTop: 72 })}${extra}</div></div>`;
const exitChip = `<div class="exitf"><span>Exit focus</span><kbd>F11</kbd></div>`;
const bar = `<div class="sbar"><div class="tr"><i></i></div><div class="lb"><span>Sprint</span><span>18:40 left of 25:00</span></div></div>`;
const end = `<div class="endcard"><div class="big">+412 words in 25 minutes</div><div class="sub">Sprint finished · 1,224 words today</div><span class="btn pri">Close</span></div>`;

const main = css + `<div class="s15">` + focusWin(exitChip) + `</div>`
  + L.ann(1, 'Focus (F11 or View ▸ Focus) leaves only the page: no strip, status bar or Ask button. The book’s own spacing and indent', 24, 150, { w: 320 })
  + L.ann(2, 'Move the mouse and “Exit focus · F11” appears at the top; F11 leaves. Esc closes only what is open on the page, never Focus', 1060, 40, { w: 340 })
  + L.ann(3, 'A sprint starts from View ▸ Sprint, 25 minutes by default. Nothing else changes on the page', 24, 280, { w: 320 })
  + L.ann(4, 'Whole book or one chapter: Focus shows whichever you had open, scrolled where you were', 1060, 420, { w: 320 });

const html = main.replace('<div class="win ', '<div class="win ')
  + `<div class="below s15 s15b"><div class="crop" style="width:676px"><div class="lbl">A sprint: only a thin time bar; it does not blink or count words</div><div class="s15">${focusWin(bar)}</div>`
  + `</div><div class="crop" style="width:676px"><div class="lbl">The end: one line, no trophies</div><div class="s15 dim">${focusWin(end)}</div></div></div>`;

module.exports = {
  id: 'S15', file: 's15-focus-sprint', title: 'Focus and the sprint', width: 1440, height: 1300,
  html,
  caption: L.caption({
    id: 'S15', title: 'Focus and the sprint',
    scene: 'The writer pressed F11 on chapter 7: Focus leaves only the page, and the mouse has just moved, so the small “Exit focus · F11” shows at the top. Below, a sprint started from View ▸ Sprint: a thin time bar with “18:40 left of 25:00” is the only addition; and the end of the sprint, a card that says “+412 words in 25 minutes” and offers Close.',
    on: 'the page alone on the paper with “Exit focus F11”; inset 1: the thin bar with “Sprint” and “18:40 left of 25:00”; inset 2: the dimmed page and the card “+412 words in 25 minutes · Sprint finished · 1,224 words today · Close”',
    off: 'title bar, menu bar, strip, status bar, Ask button, a trophy, a streak, a sound',
  }),
};
