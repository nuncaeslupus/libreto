// S33: Notices, Undo and tips. Not a moment: a board. A passing notice at twice the size with its parts labeled,
// the bell list, a standing notice, the old-undo case, a tip, an Undo showing its place, and the one undo stack.
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

// (1) a passing notice at twice the size, each part labeled under it
const big = L.notice('Scene break removed in chapter 7', { kind: 'fix' })
  .replace(/(<svg[\s\S]*?<\/svg>)/, '<span class="pt" data-l="The icon">$1</span>')
  .replace('<span class="ntx">', '<span class="ntx pt" data-l="One line that names the place">')
  .replace('<span class="lk">Undo', '<span class="lk pt" data-l="Undo · Ctrl+Z">Undo')
  .replace('<span class="nx">', '<span class="nx pt" data-l="Closes it">');

// (2) the bell at the top right, its list open on today's notices
const brow = (what, t, undo) => `<div class="mi brow"><span class="bw">${what}</span><span class="r">${t}</span>${undo}</div>`;
const bell = `<div class="bstrip"><span class="ib">${I.magnifier}</span><span class="ib bel dot on">${I.bell}</span><span class="ib">${I['sidebar-right']}</span></div>`
  + `<div class="menu bmenu"><div class="mhd">Today</div>`
  + brow('Scene break removed in chapter 7', '21:12', '<span class="lk">Undo</span>')
  + brow('Moved “Vega asks about Kit” · continuity', '21:11', '<span class="lk">Undo</span>')
  + brow('Fixed “teh” → “the” in chapter 7', '21:10', '<span class="lk">Undo</span>')
  + brow('Last session · Thursday 19:32', '20:40', '<span class="gr"></span>')
  + brow('Scenes moved in Plan (3)', '20:28', '<span class="gr">Undo</span>')
  + `<div class="bsub">changed since</div>`
  + `<div class="msep"></div><div class="mi"><span class="lk" style="margin-left:auto">Clear</span></div></div>`;

// (3) a standing notice: a continuity warning
const standing = L.notice('Moved “Vega asks about Kit” after chapter 8 · Kit finds the ledger only in chapter 9', { kind: 'info', standing: true, acts: '<span class="lk">Add to Review</span>' })
  .replace('<span class="lk">Add to Review</span><span class="lk">Undo<kbd>Ctrl+Z</kbd></span>', '<span class="lk">Undo<kbd>Ctrl+Z</kbd></span><span class="lk">Add to Review</span>');

// (4) the old Undo: something later touched the same place
const oldUndo = L.notice('Something later changed this place', { kind: 'info', undo: false, acts: '<span class="lk">Bring back this version</span>' });

// (5) a tip, the same card
const tipCard = L.notice('<b>Tip</b> · Undo a fix with <kbd>Ctrl+Z</kbd> or the ✗ on its card', { kind: 'info', undo: false, acts: '<span class="lk">Show me</span><span class="lk">Not this one again</span>' })
  .replace(/<svg[\s\S]*?<\/svg>/, BULB);

// (6) every Undo shows its place: the page scrolled there, the paragraph flashed, a small label
const place = `<div class="inpage"><div class="pg"><p>“Then hear this.” Lena leaned close enough that Vega could smell the lemon on her hands. “Go home. Don’t come back to the Blue Lamp tomorrow.”</p>`
  + `<div class="flash"><span class="undid">Undid: scene break removed</span><div class="srule"></div><p class="first">Outside, the rain had turned to the fine kind that does not fall so much as hang.<span class="cursor"></span></p></div></div></div>`;

// (5) one undo list
const steps = [['you · typing', '“Nobody came in at nine.”'], ['you · after a pause', '“Nobody’s been in that room…”'], ['Libreto · a fix', '“teh” → “the”'], ['you · Plan', 'applied 3 moves'], ['the AI', 'applied a change']];
const SW = 236, STW = 5 * SW + 4 * 30;
const stack = `<div class="stack">${steps.map(([who, what], i) => (i ? '<span class="cx"></span>' : '') + `<div class="step${i === steps.length - 1 ? ' now' : ''}" style="width:${SW}px"><small>${who}</small>${what}</div>`).join('')}</div>`
  + `<div class="walk"><svg width="${STW}" height="14" viewBox="0 0 ${STW} 14" fill="none" stroke="var(--ink3)" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M${STW - 12} 7H10"/><path d="m16 2-6 5 6 5"/></svg>`
  + `<span><kbd>Ctrl+Z</kbd>, the Undo on a notice and the Undo on a card walk back through all of them, one step at a time, in this order · Redo brings them back</span></div>`
  + `<div class="aside">Typing is grouped by pauses, so one <kbd>Ctrl+Z</kbd> takes back a phrase, not a letter. A fix you undid stays in History, gray, and is not proposed again.</div>`;

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
.s33 .inpage{position:relative;height:196px;overflow:hidden;background:#fff}
.s33 .inpage .flash{position:relative;background:rgba(59,110,168,.10);box-shadow:0 0 0 6px rgba(59,110,168,.10);border-radius:3px;margin-top:34px}
.s33 .inpage .flash .srule{margin:12px 80px 10px}
.s33 .inpage .undid{position:absolute;right:-6px;top:-30px;font:600 11px var(--ui);color:#fff;background:var(--accent);border-radius:5px;padding:2px 8px;white-space:nowrap}
.s33 .slide{position:absolute;right:14px;top:202px;display:flex;align-items:center;gap:8px;font:600 12.5px var(--ui);color:var(--ann)}
.s33 .inpage .pg{width:560px;margin:22px auto 0;font:16px/1.7 var(--text);color:var(--ink)}
.s33 .inpage .pg p{margin:0;text-indent:1.5em}
.s33 .inpage .notice.inpg{position:absolute;left:50%;bottom:36px;transform:translateX(-50%);box-shadow:0 8px 24px rgba(0,0,0,.14)}
.s33 .inpage .mst{position:absolute;left:0;right:0;bottom:0;height:26px;border-top:1px solid var(--line);background:var(--chrome);display:flex;gap:16px;align-items:center;padding:0 12px;font:12px var(--ui);color:var(--ink2)}
</style>` + `<div class="s33">`
  + `<div class="row">`
  + crop('A passing notice, at twice the size (bottom center of the page)', 900, big, 'x2',
    L.ann(1, 'Reports a small change you can undo: stays about twenty seconds, or until ✕, then slides visibly into the bell', 16, 196, { w: 470 })
    + `<div class="slide">slides into the bell after ~20 s<svg width="60" height="14" viewBox="0 0 60 14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 7h54M50 2l6 5-6 5"/></svg></div>`, 250)
  + crop('The bell, at the top right', 464, bell, 'nopad',
    L.ann(2, 'The day’s notices with their time and, where it still applies, their Undo; “Clear” empties it. The bell is not History', 16, 334, { w: 400 }), 410)
  + `</div>`
  + `<div class="row">`
  + crop('A standing notice', 820, standing, '',
    L.ann(3, 'Something to read or decide: it stays until ✕ or a button; one at a time, the others wait in the bell, which shows a dot', 16, 100, { w: 560 }), 170)
  + crop('An old Undo, after something later changed the place', 544, oldUndo, '',
    L.ann(4, 'Opens History at the snapshot from before, and keeps today’s text as a snapshot first', 16, 100, { w: 460 }), 170)
  + `</div>`
  + `<div class="row">`
  + crop('A tip, the same card', 600, tipCard, '',
    L.ann(5, 'One a day at most, only for a habit from a fixed list. “Show me” plays a ten-second demonstration on your own text; “Not this one again” is remembered; Settings ▸ Tips holds the switch', 16, 96, { w: 520 }), 240)
  + crop('Every Undo shows its place', 764, place, 'nopad2',
    L.ann(6, 'The page scrolls to the change and flashes it, with a small label saying what it was', 16, 196, { w: 330 }), 240)
  + `</div>`
  + crop('The stack, newest at the right', 1384, stack, '',
    L.ann(7, 'Undo is one list: typing grouped by pauses, a fix, a Plan apply, an AI change', 800, 8, { w: 520 }))
  + `</div>`;

module.exports = {
  id: 'S33',
  file: 's33-notices-and-undo',
  title: 'Notices, Undo and tips',
  width: 1440,
  height: 1180,
  html: html.replace('<div class="z nopad">', '<div class="z" style="padding:0">').replace('<div class="z nopad2">', '<div class="z" style="padding:0">'),
  caption: L.caption({
    id: 'S33', title: 'Notices, Undo and tips',
    scene: 'Not a moment in the app: a board. The one way Libreto tells you something, and the one way back: a passing notice at twice the size with its parts labeled, the bell with today’s notices, a standing notice, the old-undo case, a tip on the same card, an Undo showing its place, and the single Undo stack.',
    on: 'the passing notice “Scene break removed in chapter 7” (✓ icon, line, Undo Ctrl+Z, ✕) with “slides into the bell after ~20 s”; the bell with its dot and its list (time and Undo per notice, a gray Undo where something changed since, Clear); the standing continuity notice (Undo · Add to Review · ✕); “Something later changed this place · Bring back this version · ✕”; the tip (Show me · Not this one again · ✕); a flashed paragraph labeled “Undid: scene break removed”; five steps on one stack with the Ctrl+Z arrow under them',
    off: '“Got it”, a countdown, two standing notices at once, History (the bell is not History), Redo as a button, the Settings switch',
  }),
};
