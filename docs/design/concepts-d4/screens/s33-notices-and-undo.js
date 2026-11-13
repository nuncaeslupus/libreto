// S33: Notices, Undo and tips. Not a moment: a board. The notice card at twice the size with its parts labeled,
// the same card as a tip, the History sheet's Today list, the fixes menu of the status bar, and the one undo stack.
const L = require('../lib');
const I = L.icons;

const svg = (inner, sw = 1.5) => `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;
// lib has no tip (bulb) icon, so it is drawn here
const BULB = svg('<path d="M8 1.8a4.2 4.2 0 0 0-2.5 7.6c.5.4.8 1 .8 1.6v.4h3.4v-.4c0-.6.3-1.2.8-1.6A4.2 4.2 0 0 0 8 1.8z"/><path d="M6.6 13.6h2.8"/>');

const css = `<style>
.s33{display:flex;flex-wrap:wrap;gap:20px;padding:24px 28px 10px;background:#d9d9d6;align-items:flex-start;position:relative}
.s33 .crop>.z{padding:14px 16px 16px;position:relative}
.s33 .crop>.z.x2{zoom:2;padding:14px 16px 30px}
.s33 .notice{position:static;transform:none;display:inline-flex}
.s33 .notice b{font-weight:600}
.s33 .notice .lk+.lk{margin-left:10px}
.s33 .pt{position:relative}
.s33 .pt:before{content:"";position:absolute;left:50%;top:calc(100% + 5px);height:8px;width:1px;background:#a3a5a8}
.s33 .pt:after{content:attr(data-l);position:absolute;left:50%;top:calc(100% + 15px);transform:translateX(-50%);font:600 5.5px var(--ui);letter-spacing:.05em;text-transform:uppercase;color:#66696e;white-space:nowrap;line-height:1}
.s33 .pt.lk:after,.s33 .pt.nx:after{color:#66696e}
.s33 .sheet{position:static;height:auto}
.s33 .sheet-b{overflow:visible}
.s33 .gh{font:600 10.5px var(--ui);letter-spacing:.08em;text-transform:uppercase;color:var(--ink3);padding:12px 16px 4px}
.s33 .hr{display:flex;gap:14px;align-items:baseline;padding:7px 16px;font-size:13px;color:var(--ink)}
.s33 .hr .t{width:40px;flex:none;color:var(--ink3);font-variant-numeric:tabular-nums}
.s33 .hr .w{flex:1;min-width:0;white-space:nowrap}
.s33 .hr .p{width:52px;flex:none;color:var(--ink2)}
.s33 .hr .lk{flex:none}
.s33 .menu{position:static;box-shadow:0 1px 3px rgba(0,0,0,.08)}
.s33 .menu .mi{padding:4px 10px}
.s33 .status{height:28px;border-top:1px solid var(--line);margin-top:12px;padding:0 10px;display:flex;align-items:center;font-size:12px}
.s33 .stack{display:flex;align-items:center;padding:4px 0 0}
.s33 .step{border:1px solid var(--line);border-radius:8px;background:#fff;padding:8px 14px 9px;min-width:168px;text-align:center;font:13px var(--ui);color:var(--ink);box-shadow:0 1px 3px rgba(0,0,0,.06);position:relative}
.s33 .step small{display:block;font:600 10px var(--ui);letter-spacing:.07em;text-transform:uppercase;color:var(--ink3);margin-bottom:3px}
.s33 .step.now{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-tint)}
.s33 .step.now:after{content:"now";position:absolute;right:-4px;top:-9px;font:600 9.5px var(--ui);letter-spacing:.06em;text-transform:uppercase;color:var(--accent);background:#fff;padding:0 4px;border-radius:3px}
.s33 .cx{width:30px;height:1px;background:var(--ink4);flex:none}
.s33 .walk{position:relative;height:40px;margin-top:12px}
.s33 .walk svg{position:absolute;left:0;top:0}
.s33 .walk span{position:absolute;left:0;right:0;top:16px;text-align:center;font:13px var(--ui);color:var(--ink2)}
.s33 .walk span kbd{margin-right:2px}
.s33 .legend{width:100%;font:15px var(--ui);color:var(--ink);padding:6px 4px 14px}
</style>`;

const crop = (label, w, inner, cls = '', after = '', h = '') => `<div class="crop" style="width:${w}px${h ? `;height:${h}px` : ''}"><div class="lbl">${label}</div><div class="z${cls ? ' ' + cls : ''}">${inner}</div>${after}</div>`;

// (1) the notice card at twice the size, each part labeled under it
const big = L.notice('Scene break removed in chapter 7', { kind: 'info' })
  .replace(/(<svg[\s\S]*?<\/svg>)/, '<span class="pt" data-l="The icon">$1</span>')
  .replace('<span class="ntx">', '<span class="ntx pt" data-l="One line that names the place">')
  .replace('<span class="lk">Undo', '<span class="lk pt" data-l="Undo · Ctrl+Z">Undo')
  .replace('<span class="got">', '<span class="got pt" data-l="Closes it">');

// (2) the bell at the top right, its menu open on today's notices
const brow = (what, t, undo) => `<div class="mi brow"><span class="bw">${what}</span><span class="r">${t}</span>${undo}</div>`;
const bell = `<div class="bstrip"><span class="ib">${I.magnifier}</span><span class="ib bel dot on">${I.bell}</span><span class="ib">${I['sidebar-right']}</span></div>`
  + `<div class="menu bmenu"><div class="mhd">Today</div>`
  + brow('Scene break removed in chapter 7', '21:12', '<span class="lk">Undo</span>')
  + brow('Fixed “teh” → “the” in chapter 7', '21:10', '<span class="lk">Undo</span>')
  + brow('Scenes moved in Plan (3)', '20:58', '<span class="gr">Undo</span>')
  + `<div class="bsub">changed since · <span class="lk">Restore this version</span></div>`
  + `<div class="msep"></div><div class="mi"><span style="color:var(--ink2)">All of today in History ▸ Today</span></div></div>`;

// (3) the same card as a tip
const tipCard = L.notice('<b>Tip</b> · Undo a fix with <kbd>Ctrl+Z</kbd> or the ✗ on its card<span class="lk">Show me</span><span class="lk">Not this one again</span>', { kind: 'info', undo: false })
  .replace(/<svg[\s\S]*?<\/svg>/, BULB);

// (4) History ▸ Today
const hrow = (t, what, where) => `<div class="hr"><span class="t">${t}</span><span class="w">${what}</span><span class="p">${where}</span><span class="lk">Undo</span></div>`;
const today = `<div class="gh">Today</div>`
  + hrow('21:12', 'Scene break removed', 'ch. 7')
  + hrow('21:10', 'Fixed “teh” → “the”', 'ch. 7')
  + hrow('21:04', 'AI change applied: Lena’s look, shorter', 'ch. 7')
  + hrow('20:58', 'Scenes moved (3)', 'Plan');
const history = L.sheet({ title: 'History', body: today });

// (5) one undo list
const steps = [['you · typing', '“Nobody came in at nine.”'], ['you · after a pause', '“Nobody’s been in that room…”'], ['Libreto · a fix', '“teh” → “the”'], ['you · Plan', 'applied 3 moves'], ['the AI', 'applied a change']];
const SW = 236, STW = 5 * SW + 4 * 30;
const stack = `<div class="stack">${steps.map(([who, what], i) => (i ? '<span class="cx"></span>' : '') + `<div class="step${i === steps.length - 1 ? ' now' : ''}" style="width:${SW}px"><small>${who}</small>${what}</div>`).join('')}</div>`
  + `<div class="walk"><svg width="${STW}" height="14" viewBox="0 0 ${STW} 14" fill="none" stroke="var(--ink3)" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M${STW - 12} 7H10"/><path d="m16 2-6 5 6 5"/></svg>`
  + `<span><kbd>Ctrl+Z</kbd>, the Undo on a notice and the ✗ on a card walk back through all of them, one step at a time, in this order · Redo brings them back</span></div>`
  + `<div class="aside">Typing is grouped by pauses, so one <kbd>Ctrl+Z</kbd> takes back a phrase, not a letter. A fix you undid stays in the Done list, gray, so it is not proposed again.</div>`;

// (6) the card in place, at the bottom center of the page, over the text
const inPage = `<div class="inpage"><div class="pg"><p>“Then hear this.” Lena leaned close enough that Vega could smell the lemon on her hands. “Go home. Don’t come back to the Blue Lamp tomorrow.”</p>`
  + `<p>Outside, the rain had turned to the fine kind<span class="cursor"></span></p></div>`
  + L.notice('Scene break removed in chapter 7', { kind: 'info' }).replace('class="notice info"', 'class="notice info inpg"')
  + `<div class="mst"><span>Plain</span><span>2,418 words</span><span style="color:var(--task)">12 to review</span></div></div>`;

const html = css + `<style>
.s33 .row{display:flex;gap:20px;width:1384px}
.s33 .notice{padding:8px 10px 8px 12px}
.s33 .got.pt:before,.s33 .got.pt:after{top:calc(100% + 6px)}
.s33 .got.pt:after{top:calc(100% + 16px)}
.s33 .bstrip{display:flex;justify-content:flex-end;gap:2px;padding:8px 10px;border-bottom:1px solid var(--line);background:var(--paper)}
.s33 .bstrip .ib{position:relative;width:28px;height:26px;display:inline-flex;align-items:center;justify-content:center;color:var(--ink2);border-radius:6px}
.s33 .bstrip .ib.on{background:#e9e9e6;color:var(--ink)}
.s33 .bstrip .ib.dot:after{content:"";position:absolute;top:3px;right:5px;width:7px;height:7px;border-radius:50%;background:var(--task);border:1.5px solid var(--paper)}
.s33 .bmenu{margin:6px 10px 0 auto;width:380px}
.s33 .brow .bw{flex:1;min-width:0}
.s33 .brow .r{padding-left:10px}
.s33 .brow .lk,.s33 .brow .gr{width:40px;text-align:right;font-size:12.5px}
.s33 .brow .gr{color:var(--ink4)}
.s33 .bsub{font:12px var(--ui);color:var(--ink3);padding:0 10px 6px;text-align:right}
.s33 .aside{font:13px var(--ui);color:var(--ink2);margin-top:10px}
.s33 .aside kbd{margin:0 2px}
.s33 .crop .ann{z-index:5}
.s33 .inpage{position:relative;height:250px;overflow:hidden;background:#fff}
.s33 .inpage .pg{width:500px;margin:64px auto 0;font:16px/1.7 var(--text);color:var(--ink)}
.s33 .inpage .pg p{margin:0;text-indent:1.5em}
.s33 .inpage .notice.inpg{position:absolute;left:50%;bottom:36px;transform:translateX(-50%);box-shadow:0 8px 24px rgba(0,0,0,.14)}
.s33 .inpage .mst{position:absolute;left:0;right:0;bottom:0;height:26px;border-top:1px solid var(--line);background:var(--chrome);display:flex;gap:16px;align-items:center;padding:0 12px;font:12px var(--ui);color:var(--ink2)}
</style>` + `<div class="s33">`
  + `<div class="row"><div style="display:flex;flex-direction:column;gap:20px">`
  + crop('The notice card, at twice the size', 900, big, 'x2',
    L.ann(1, 'Never on a timer, and typing does not dismiss it: it stays until Got it', 16, 196, { w: 380 })
    + L.ann(2, 'One at a time: the others wait in the bell', 470, 196, { w: 300 }), 250)
  + crop('The same card as a tip', 900, tipCard, '',
    L.ann(4, 'Tips: one a day at most, only for a habit from a fixed list (retyping what a fix changed, removing detected breaks by hand, the mouse for something with a key). “Not this one again” is remembered; Help ▸ Tips lists them; Settings has the switch', 16, 96, { w: 560 }), 170)
  + `</div>`
  + crop('The bell, at the top right', 464, bell, 'nopad',
    L.ann(3, 'An old Undo works while nothing later touched the same place; otherwise “Restore this version” opens History at the snapshot from before', 16, 290, { w: 400 }), 440)
  + `</div>`
  + `<div class="row">`
  + crop('History ▸ Today', 700, history, '',
    L.ann(5, 'Every notice is also a line in History ▸ Today', 330, 90, { w: 330 }))
  + crop('Where it sits: the bottom center of the page', 664, inPage, 'nopad2',
    L.ann(7, 'The welcome-back card is one of these notices too', 16, 46, { w: 330 }))
  + `</div>`
  + crop('The stack, newest at the right', 1384, stack, '',
    L.ann(6, 'One stack: typing grouped by pauses, a fix, a Plan apply, an AI change', 900, 8, { w: 460 }))
  + `<div class="legend">One card at the bottom center of the page · one line in the bell and in History ▸ Today · one step on the stack</div>`
  + `</div>`;

module.exports = {
  id: 'S33',
  file: 's33-notices-and-undo',
  title: 'Notices, Undo and tips',
  width: 1440,
  height: 1000,
  html: html.replace('<div class="z nopad">', '<div class="z" style="padding:0">').replace('<div class="z nopad2">', '<div class="z" style="padding:0">'),
  caption: L.caption({
    id: 'S33', title: 'Notices, Undo and tips',
    scene: 'Not a moment in the app: a board. The one way Libreto says something changed, and the one way back: the notice card at twice the size with its parts labeled, the same card as a tip, the bell at the top right with today’s notices, the Today list of History, the card in place at the bottom center of the page, and the single Undo stack.',
    on: 'the notice “Scene break removed in chapter 7” with its icon, line, Undo Ctrl+Z and Got it labeled; the tip “Tip · Undo a fix with Ctrl+Z or the ✗ on its card · Show me · Not this one again · Got it”; the strip’s right end with the bell and its dot, its menu open on Today (21:12 Scene break removed in chapter 7 · Undo, 21:10 Fixed “teh” → “the” in chapter 7 · Undo, 20:58 Scenes moved in Plan (3) with Undo gray and “changed since · Restore this version”, All of today in History ▸ Today); History ▸ Today with four lines, each with Undo; the card at the bottom center of a page over the status bar; five steps on one stack (typing, typing after a pause, a fix, a Plan apply, an AI change) with the Ctrl+Z arrow under them',
    off: 'a ✕ on the card, a timer or countdown, two notices at once, the status bar fixes menu, Redo as a button, Help ▸ Tips, the Settings switch',
  }),
};
