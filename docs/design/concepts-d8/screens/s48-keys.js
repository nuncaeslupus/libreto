// S48: Settings ▸ Keys with a Spanish layout detected: conflicts flagged, search, recording a key.
const L = require('../lib');
const I = L.icons;

const css = `<style>
.s48{position:relative;background:#d9d9d6;height:760px}
.s48 .sw{position:absolute;left:230px;top:26px;width:980px;height:700px;background:#fff;border:1px solid #c9c9c5;border-radius:13px;box-shadow:0 22px 60px rgba(0,0,0,.18);display:flex;flex-direction:column;overflow:hidden}
.s48 .sh{display:flex;align-items:center;gap:14px;padding:12px 16px;border-bottom:1px solid var(--line2);font:600 15px var(--ui)}
.s48 .sh .filter{margin-left:auto;width:300px;font-weight:400}
.s48 .sb{display:flex;flex:1;min-height:0}
.s48 .tabs{width:170px;flex:none;border-right:1px solid var(--line2);padding:10px 8px;background:var(--soft);font-size:13px}
.s48 .tabs div{padding:6px 10px;border-radius:6px;color:var(--ink2)}
.s48 .tabs div.on{background:#fff;color:var(--ink);font-weight:600;box-shadow:0 1px 2px rgba(0,0,0,.08)}
.s48 .mn{flex:1;min-width:0;padding:14px 18px 10px;overflow:hidden}
.s48 .lay{display:flex;gap:8px;align-items:center;background:var(--soft);border:1px solid var(--line);border-radius:8px;padding:8px 12px;font-size:12.5px;color:var(--ink2);margin-bottom:10px}
.s48 .lay b{color:var(--ink)}
.s48 .lay svg{color:var(--fix);width:14px;height:14px}
.s48 .bar2{display:flex;gap:10px;align-items:center;margin-bottom:8px}
.s48 .bar2 .filter{flex:1;height:30px}
.s48 .chip{border:1px solid var(--line);border-radius:14px;padding:3px 11px;font-size:12px;color:var(--ink2);white-space:nowrap}
.s48 .chip.on{background:var(--accent-tint);border-color:var(--accent);color:var(--accent)}
.s48 .tb{border:1px solid var(--line);border-radius:9px;overflow:hidden;font-size:13px}
.s48 .tr{display:grid;grid-template-columns:190px 190px 1fr;gap:10px;padding:7px 12px;border-top:1px solid var(--line2);align-items:start}
.s48 .tr.hd{border-top:0;background:var(--soft);font:600 11px var(--ui);letter-spacing:.06em;text-transform:uppercase;color:var(--ink3)}
.s48 .tr .why{font-size:12px;color:#9b4a14;line-height:1.35;margin-top:3px;display:flex;gap:5px}
.s48 .tr .why svg{width:13px;height:13px;flex:none;margin-top:1px}
.s48 .tr.cf{background:#fffaf5}
.s48 .tr.rec{background:var(--accent-tint)}
.s48 .tr.rf{background:#fff6f4}
.s48 .tr.rf .why{color:#b3261e}
.s48 .tr .kc kbd{font-size:12px}
.s48 .tr .kc .al{color:var(--ink3);font-size:12px;margin-left:6px}
.s48 .ki{display:inline-block;border:1.5px solid var(--accent);border-radius:6px;padding:1px 9px;background:#fff;color:var(--ink2);font-size:12.5px}
.s48 .tr .wh{color:var(--ink3);font-size:12.5px}
.s48 .opt{display:flex;gap:8px;align-items:center;margin-top:12px;font-size:12.5px;color:var(--ink2)}
.s48 .box{width:14px;height:14px;border:1.5px solid var(--ink3);border-radius:3px;flex:none}
</style>`;

const rows = [
  ['Mark card', '<kbd>Ctrl+.</kbd><span class="al">→ <kbd>Alt+Enter</kbd></span>', 'In the text', 'cf', `${I.unknown}<span>Ctrl+. is taken by the input method (emoji). Libreto added the alias Alt+Enter.</span>`],
  ['Next mark · Previous mark', '<kbd>Alt+↓</kbd> <kbd>Alt+↑</kbd><span class="al">F8</span>', 'In the text', '', ''],
  ['Quick look', '<kbd>Ctrl</kbd>+click', 'In the text', 'cf', `${I.unknown}<span>Alt+click: your window manager uses Alt+drag to move windows. Ctrl+click instead.</span>`],
  ['Show names and styles', '<kbd>Ctrl+Shift+A</kbd>', 'Everywhere', '', ''],
  ['Add note', '<span class="ki">Ctrl+Alt+E<span class="cursor" style="height:13px;vertical-align:-2px"></span></span>', 'In the text', 'rf', `${I.unknown}<span><b>Refused:</b> Ctrl+Alt+E types € on this layout (it is AltGr+E). Pick another, or stay with Ctrl+Shift+N.</span>`],
  ['Ask', '<kbd>Ctrl+K</kbd>', 'Everywhere', '', ''],
  ['Focus', '<kbd>F11</kbd>', 'Everywhere', '', ''],
  ['Settings', '<kbd>Ctrl+,</kbd>', 'Everywhere', '', ''],
];
const tbl = `<div class="tb"><div class="tr hd"><span>Command</span><span>Key</span><span>Where · notes</span></div>`
  + rows.map(([a, k, w, c, why]) => `<div class="tr ${c}"><span>${a}</span><span class="kc">${k}</span><span class="wh">${w}${why ? `<div class="why">${why}</div>` : ''}</span></div>`).join('') + `</div>`;

const tabs = ['General', 'Writing', 'Reading &amp; seeing', 'Styles', 'Keys', 'AI', 'Privacy', 'Tips'];
const win = `<div class="sw">
  <div class="sh"><b>Settings</b><span style="font-weight:400;color:var(--ink3);font-size:12.5px">Tools ▸ Settings… · Ctrl+,</span><div class="filter">${I.magnifier}<span>Search all settings</span></div><span style="color:var(--ink3)">✕</span></div>
  <div class="sb"><div class="tabs">${tabs.map((t) => `<div${t === 'Keys' ? ' class="on"' : ''}>${t}</div>`).join('')}</div>
   <div class="mn">
    <div class="lay">${I.fix}<span><b>Keyboard layout: Spanish (Spain)</b> detected. Every key below was checked against it and against the input method and window manager in use.</span></div>
    <div class="bar2"><div class="filter">${I.magnifier}<span>Search commands or keys</span></div><span class="chip">Flagged 3</span><span class="chip">Changed 0</span></div>
    ${tbl}
    <div class="opt"><span class="box"></span><span>Hold Alt to show names and styles (off: Alt+click and Alt+drag are often the window manager’s)</span></div>
    <div class="opt" style="margin-top:8px"><span class="lk" style="color:var(--accent)">Reset all keys</span><span style="margin-left:auto;color:var(--ink3)">Click a key to record a new one · Esc cancels · a refused key says why</span></div>
   </div></div>
</div>`;

const html = css + `<div class="s48">${win}`
  + L.ann(1, 'The layout is detected and named; the check is for this keyboard, not a generic one', 8, 140, { w: 205 })
  + L.ann(2, 'Search finds a command or a key', 8, 290, { w: 205 })
  + L.ann(3, 'A conflict is not hidden: it says who owns the key and what Libreto did (an alias)', 1222, 215, { w: 160 })
  + L.ann(4, 'Recording: press the keys; a refused one is never saved and says why', 1222, 400, { w: 160 })
  + L.ann(5, 'Only keys that exist on every layout are used by default: nothing needs AltGr or a dead key', 8, 520, { w: 205 })
  + `</div>`;

module.exports = {
  id: 'S48', file: 's48-keys', title: 'Settings, Keys, on a Spanish keyboard', width: 1440, height: 760, html,
  caption: L.caption({
    id: 'S48', title: 'Settings, Keys, on a Spanish keyboard',
    scene: 'Settings ▸ Keys for a writer with a Spanish keyboard and a Linux desktop. Add note is being recorded.',
    on: 'the detected layout line; a search box and a Flagged filter; Ctrl+. flagged as taken by the input method with the alias Alt+Enter; Alt+click flagged for the window manager with Ctrl+click instead; Ctrl+Alt+E refused because it types €; the Hold-Alt option off; Reset all keys',
    off: 'keys that need AltGr or a dead key, a silent override of a system key, a page of keys without the reason for a conflict',
  }),
};
