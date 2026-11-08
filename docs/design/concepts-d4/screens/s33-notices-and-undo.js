// S33: Notices, Undo and tips. Not a moment: a board. The notice card at twice the size with its parts labeled,
// the same card as a tip, the History sheet's Today list, the fixes menu of the status bar, and the one undo stack.
const L = require('../lib');
const I = L.icons;

const svg = (inner, sw = 1.5) => `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;
// lib's notice() has no info or tip icon yet (it falls back to the note glyph), so the two are drawn here
const INFO = svg('<circle cx="8" cy="8" r="6.3"/><path d="M8 7.4v3.8"/><path d="M8 5v.1"/>', 1.6);
const BULB = svg('<path d="M8 1.8a4.2 4.2 0 0 0-2.5 7.6c.5.4.8 1 .8 1.6v.4h3.4v-.4c0-.6.3-1.2.8-1.6A4.2 4.2 0 0 0 8 1.8z"/><path d="M6.6 13.6h2.8"/>');
const swapIcon = (html, icon) => html.replace(/<svg[\s\S]*?<\/svg>/, icon);

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

const crop = (label, w, inner, cls = '') => `<div class="crop" style="width:${w}px"><div class="lbl">${label}</div><div class="z${cls ? ' ' + cls : ''}">${inner}</div></div>`;

// (1) the notice card at twice the size, each part labeled under it
const big = swapIcon(L.notice('Scene break removed in ch. 7', { kind: 'info' }), `<span class="pt" data-l="The icon">${INFO}</span>`)
  .replace('<span class="ntx">', '<span class="ntx pt" data-l="One line that names the place">')
  .replace('<span class="lk">Undo', '<span class="lk pt" data-l="Undo · Ctrl+Z">Undo')
  .replace('<span class="nx">', '<span class="nx pt" data-l="✕ closes">');

// (2) the same card as a tip
const tipCard = swapIcon(L.notice('<b>Tip</b> · Undo a fix with <kbd>Ctrl+Z</kbd> or the ✗ on its card<span class="lk">Show me</span><span class="lk">Not this one again</span>', { kind: 'info', undo: false }), BULB);

// (3) History ▸ Today
const hrow = (t, what, where) => `<div class="hr"><span class="t">${t}</span><span class="w">${what}</span><span class="p">${where}</span><span class="lk">Undo</span></div>`;
const today = `<div class="gh">Today</div>`
  + hrow('21:12', 'Scene break removed', 'ch. 7')
  + hrow('21:10', 'Fixed “teh” → “the”', 'ch. 7')
  + hrow('21:04', 'Chapter 8 added after chapter 7', 'ch. 8')
  + hrow('20:58', 'Cards moved (3)', 'Plan');
const history = L.sheet({ title: 'History', body: today });

// (4) the fixes menu of the status bar, as in S29, over the item it opens from
const mi = (t) => `<div class="mi"><span>${t}</span></div>`;
const fixRow = (a, b) => `<div class="mi"><span>“${a}” → “${b}”</span><span class="r" style="color:var(--fix)">✓ keep</span><span class="r" style="padding-left:10px;color:var(--ink2)">✕ undo</span></div>`;
const fixesMenu = `<div class="menu" style="width:280px"><div class="mhd">3 fixes in this chapter</div>` + fixRow('teh', 'the') + fixRow('dont', 'don’t') + fixRow('nine ', 'nine, ')
  + `<div class="msep"></div>` + mi('Undo all three') + mi('Review on Fixes') + `</div>`;
const miniStatus = `<div class="status"><span class="sb m cnt" style="background:rgba(0,0,0,.09)">${I.fix}<span class="dd">3 fixes</span></span></div>`;

// (5) one undo stack
const steps = [['you', 'typed a sentence'], ['Libreto', 'fixed “teh” → “the”'], ['you', 'kept a proposal'], ['you', 'deleted a scene'], ['the AI', 'applied a change']];
const STW = 5 * 168 + 4 * 30;
const stack = `<div class="stack">${steps.map(([who, what], i) => (i ? '<span class="cx"></span>' : '') + `<div class="step${i === steps.length - 1 ? ' now' : ''}"><small>${who}</small>${what}</div>`).join('')}</div>`
  + `<div class="walk"><svg width="${STW}" height="14" viewBox="0 0 ${STW} 14" fill="none" stroke="var(--ink3)" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M${STW - 12} 7H10"/><path d="m16 2-6 5 6 5"/></svg>`
  + `<span><kbd>Ctrl+Z</kbd> walks back through all of them, one step at a time · Redo brings them back</span></div>`;

const html = css + `<div class="s33">`
  + `<div style="display:flex;width:1384px">${crop('The notice card, at twice the size', 804, big, 'x2')}</div>`
  + crop('History ▸ Today', 700, history)
  + crop('The same card as a tip', 560, tipCard)
  + crop('The fixes item in the status bar', 360, `<div style="padding:14px 16px 0">${fixesMenu}</div>${miniStatus}`, 'nopad')
  + crop('One undo stack', 1000, stack)
  + `<div class="legend">One card at the bottom · one line in History ▸ Today · one step on the stack: Ctrl+Z, the Undo on the card and the ✗ on a mark’s card are the same step</div>`
  + L.ann(1, 'Never on a timer: no countdown, nothing fades while you read', 860, 64, { w: 300 })
  + L.ann(2, 'It folds away when you type or click elsewhere, and nothing is lost: the line stays in History', 860, 116, { w: 300 })
  + L.ann(4, 'Every notice is a line in History ▸ Today, each with its own Undo: a notice seen late is a notice, not a loss', 748, 466, { w: 300 })
  + L.ann(5, 'Today’s fixes with keep and undo; History keeps the snapshots for anything bigger, such as a chapter deleted last week', 408, 732, { w: 300 })
  + L.ann(3, 'Tips: one a day at most, only for a habit from a fixed list (retyping what a fix changed, removing detected breaks by hand). Not this one again is remembered; Help ▸ Tips lists them; Settings has the switch', 748, 378, { w: 340 })
  + L.ann(6, 'One stack: your typing, Libreto’s fixes, a kept proposal, a deleted scene, a move in Plan, an AI change, all in order', 900, 732, { w: 300 })
  + `</div>`;

module.exports = {
  id: 'S33',
  file: 's33-notices-and-undo',
  title: 'Notices, Undo and tips',
  width: 1440,
  height: 1000,
  html: html.replace('<div class="z nopad">', '<div class="z" style="padding:0">'),
  caption: L.caption({
    id: 'S33', title: 'Notices, Undo and tips',
    scene: 'Not a moment in the app: a board. The one way Libreto says something changed, and the one way back: the notice card at twice the size with its four parts labeled, the same card as a tip, the Today list of the History sheet, the fixes menu of the status bar, and the single undo stack.',
    on: 'the notice “Scene break removed in ch. 7” with its icon, line, Undo Ctrl+Z and ✕ labeled; the tip “Tip · Undo a fix with Ctrl+Z or the ✗ on its card · Show me · Not this one again”; History ▸ Today with four lines (21:12 Scene break removed ch. 7, 21:10 Fixed “teh” → “the” ch. 7, 21:04 Chapter 8 added after chapter 7 ch. 8, 20:58 Cards moved (3) Plan), each with Undo; the fixes menu (3 fixes in this chapter, three rows with ✓ keep · ✕ undo, Undo all three, Review on Fixes) over its status bar item; five steps on one stack (you typed, Libreto fixed, you kept a proposal, you deleted a scene, the AI applied a change) with the Ctrl+Z arrow under them; the rule in one line',
    off: 'a window, the page under a notice, the rest of the History sheet (yesterday and older sessions, View as it was, Compare), Redo as a button, Help ▸ Tips, the Settings switch, a mark card',
  }),
};
