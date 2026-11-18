// S46: when things go wrong. A window that cannot save, and small frames for the other failures.
const L = require('../lib');
const I = L.icons;
const P = L.sample.chapter7Plain;

const css = `<style>
.s46 .below{display:block;padding:18px 28px 22px;background:#e3e3e0}
.s46 .g{display:flex;gap:16px;align-items:flex-start;margin-bottom:16px}
.s46 .sm{position:relative;background:#fff;border:1px solid #d0d0cc;border-radius:10px;flex:none;overflow:hidden}
.s46 .sm>.lbl{font:600 11px var(--ui);letter-spacing:.06em;text-transform:uppercase;color:#66696e;padding:10px 14px 8px;background:#f2f2f0;border-bottom:1px solid #e2e2df}
.s46 .sm .pd{padding:14px}
.s46 .sm .notice{position:static;transform:none;display:flex;box-shadow:0 1px 3px rgba(0,0,0,.08);flex-wrap:wrap;row-gap:6px}
.s46 .sm .ntx{flex:1 1 220px}
.s46 .sm .cap{font-size:12.5px;color:var(--ink2);padding:10px 14px 12px;line-height:1.45}
.s46 .ask{position:static;width:auto;height:340px;box-shadow:none;border:0;border-radius:0}
.s46 .ask-b{font-size:13px}
.s46 .ask-b .lk,.s46 .lk{color:var(--accent)}
.s46 .st{color:#b3261e!important;font-weight:600}
.s46 .st:before{content:"";display:inline-block;width:7px;height:7px;border-radius:50%;background:#b3261e;margin-right:6px}
.s46 .wtitle{color:#b3261e}
.s46 .nx2{border:1px solid var(--line);border-radius:6px;padding:1px 8px;color:var(--ink);background:#fff;margin-left:6px;font-size:12.5px;white-space:nowrap}
.s46 .rowS{display:flex;align-items:center;gap:12px;padding:10px 12px;border:1px solid var(--line);border-radius:9px;font-size:13px}
.s46 .rowS .tt{width:34px;height:34px;border-radius:8px;background:var(--soft);display:flex;align-items:center;justify-content:center;font:600 13px var(--ui);color:var(--ink2);flex:none}
.s46 .rowS small{display:block;color:var(--ink3);font-size:12px}
.s46 .rowS.warn{border-color:#e3b9a0;background:#fffaf6}
.s46 .rowS.warn small{color:#9b4a14}
.s46 .btn{height:26px;font-size:12px}
.s46 .off{opacity:.55}
</style>`;

const col = `<div class="chap"><div class="num">CHAPTER 7</div><h1>Lena’s warning</h1></div>` + P.slice(0, 4).map((p, i) => `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`).join('');

let win = L.win({
  height: 560, view: 'Text', crumbs: L.sample.crumbs7, page: L.pageCol(col, { paddingTop: 30 }), strip: { review: 12 }, ask: 'normal',
  status: { style: 'Plain', words: '2,418 words', goal: 60, pages: 'p. 146 of 248', saved: 'Not saved since 19:32' },
  content: L.notice('The folder “USB · Libreto” is not available. Your words are kept in a safe copy on this computer.', { standing: true, undo: false, kind: 'info',
    acts: `<span class="nx2">Choose another place</span><span class="nx2">Retry</span>`, style: 'bottom:22px;width:max-content;max-width:1000px' }),
  extra: L.ann(1, 'Saved turns red and says since when; it never keeps a reassuring old time', 20, 430, { w: 250 })
    + L.ann(2, 'A notice that stays until you act or close it: what failed, that nothing is lost, two ways out', 1085, 300, { w: 300 })
    + L.ann(3, 'Typing goes on; the window title carries a dot too', 560, 12, { w: 240 }).replace('left:560px', 'left:950px;top:2px'),
});
win = win.replace('<span class="sb saved">Not saved since 19:32</span>', '<span class="sb saved st">Not saved since 19:32</span>').replace('The Blue Lamp — Libreto', '● The Blue Lamp — Libreto · not saved');

const n1 = L.notice('Recovered <b>43 words</b> after Libreto closed unexpectedly.', { undo: false, kind: 'fix', acts: '<span class="lk">Show</span>' });
const n2 = L.notice('A second copy of chapter 7 appeared (<b>laptop-B</b>, 18:02).', { undo: false, acts: '<span class="lk">Compare</span>' });

const start = `<div class="sm" style="width:440px"><div class="lbl">Start · a project open elsewhere</div><div class="pd">
  <div class="rowS warn"><span class="tt">BL</span><span style="flex:1;min-width:0"><b>The Blue Lamp</b><small>Open on another computer (laptop-B) since 18:02</small></span></div><div style="padding:8px 0 0 46px;display:flex;gap:8px"><span class="btn pri">Open read-only</span><span class="btn">Open anyway</span></div>
  <div class="rowS" style="margin-top:8px"><span class="tt">ES</span><span><b>Ensayo sobre la lluvia</b><small>Edited yesterday</small></span></div>
  <div class="cap" style="padding:10px 2px 0">“Open anyway” asks first: two computers writing at once make two copies of every chapter.</div></div></div>`;

const ai = (t, body, foot) => `<div class="sm" style="width:290px"><div class="lbl">${t}</div>${body}<div class="cap">${foot}</div></div>`;
const askOff = L.askPanel({ title: 'Ask', messages: [{ me: true, html: 'Does Kit know about the back room in chapter 3?' }, '<span style="color:var(--ink2)">Offline. The question waits and is sent when the connection returns.</span> <span class="lk">Send now</span>'], input: '' });
const askBudget = L.askPanel({ title: 'Ask', messages: [{ me: true, html: 'Check chapter 7 against the Brief' }, '<b>Stopped: this month’s limit (€10).</b> <span class="lk">Raise it</span> · <span class="lk">Ask anyway, once</span>'], input: '' });
const askCut = L.askPanel({ title: 'Ask', messages: [{ me: true, html: 'Rewrite Lena’s lie so it sounds less rehearsed' }, 'Here is a version that keeps her pauses: “Nobody came in at nine. I wouldn’t know, I was in the cell…” <span style="color:var(--ink3)">…</span><div style="margin-top:8px;color:#9b4a14">The answer was cut off (rate limit). Nothing was changed.</div><div class="acts" style="margin:8px 0 0"><span class="btn pri">Retry</span><span class="btn">Copy what came</span></div>'], input: '' });

const html = css + win.replace('<div class="win"', '<div class="win s46"') + `<div class="s46"><div class="below">
 <div class="g">
  <div class="sm" style="width:640px"><div class="lbl">After a crash</div><div class="pd">${n1}</div><div class="cap">Shown when Libreto reopens. “Show” opens the recovered words in History ▸ Today, in place, nothing merged silently.</div></div>
  <div class="sm" style="width:688px"><div class="lbl">A sync conflict</div><div class="pd">${n2}</div><div class="cap">A cloud folder made a second copy. Compare shows both, three-way: yours, the copy, what you last saw. Nothing is overwritten.</div></div>
 </div>
 <div class="g">${start}${ai('AI · offline', askOff, 'Finding still works from the index; only questions wait.')}${ai('AI · limit reached', askBudget, 'Said where you asked, never silently.')}${ai('AI · answer cut off', askCut, 'No Accept button on a half answer; only a complete, checked one has it.')}</div>
</div></div>`;

module.exports = {
  id: 'S46', file: 's46-when-things-go-wrong', title: 'When things go wrong', width: 1440, height: 1290, html,
  caption: L.caption({
    id: 'S46', title: 'When things go wrong',
    scene: 'The USB stick that held the project was pulled out while chapter 7 was open. Under the window, the other failures a writer meets: a crash, a second copy, a project open on another computer, and three AI failures.',
    on: '“Not saved since 19:32” in red with a dot in the window title; a standing notice (Choose another place · Retry); “Recovered 43 words…· Show”; “A second copy… · Compare”; Start with “Open read-only · Open anyway”; Ask offline, at the budget limit and cut off (Retry, Copy what came)',
    off: 'a stale “Saved” time, a notice that disappears on a timer, Accept on a half-finished answer, a silent overwrite',
  }),
};
