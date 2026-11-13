// S26: Settings. One window, tabs on the left, a search box that finds any setting; Keys open:
// a table of command · key · where, like a code editor's, with a key being recorded, a conflict
// flagged and the check against the keyboard layout.
const L = require('../lib');
const P = L.sample.chapter7Plain;

const col = `<div class="chap"><div class="num">CHAPTER 7</div><h1>Lena’s warning</h1></div>`
  + P.map((p, i) => `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`).join('');

const css = `<style>
.setw .sh{display:flex;align-items:center;gap:12px;padding:12px 16px 12px 20px;border-bottom:1px solid var(--line2)}
.setw .sh b{font:600 15px var(--ui)}
.setw .sh .filter{margin:0 0 0 18px;width:340px;height:30px;padding:0 10px}
.setw .sh .x{color:var(--ink3);font-size:14px}
.setw .tabs2{width:170px;flex:none;background:var(--soft);border-right:1px solid var(--line2);padding:10px 8px;font-size:13px}
.setw .tabs2 div{padding:7px 12px;border-radius:7px;color:var(--ink2)}
.setw .tabs2 div.on{background:#fff;box-shadow:0 0 0 1px var(--line);font-weight:600;color:var(--ink)}
.setw .tabs2 small{display:block;font-size:11px;color:var(--ink3);font-weight:400;margin-top:1px}
.setw .main2{flex:1;min-width:0;padding:14px 22px 10px;display:flex;flex-direction:column}
.setw .kb{display:flex;gap:8px;align-items:center;font-size:12.5px;color:var(--ink2);margin:0 0 10px}
.setw .kb svg{color:var(--fix)}
.setw .tbl{border:1px solid var(--line);border-radius:8px;overflow:hidden;font-size:13px}
.setw .tr{display:flex;align-items:center;gap:10px;padding:4px 12px;border-top:1px solid var(--line2);min-height:30px}
.setw .tr:first-child{border-top:0;background:var(--soft);font:600 10.5px var(--ui);letter-spacing:.08em;text-transform:uppercase;color:var(--ink3);padding:6px 12px;min-height:0}
.setw .tr .a{flex:1;min-width:0}
.setw .tr .kc{width:250px;flex:none;display:flex;align-items:center;gap:8px}
.setw .tr .wh{width:110px;flex:none;color:var(--ink2);font-size:12.5px}
.setw .tr kbd{font-size:12px;padding:2px 7px}
.setw .tr.ed{background:var(--accent-tint)}
.setw .tr.ed .ki{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--accent);box-shadow:0 0 0 3px var(--accent-tint);border-radius:5px;padding:2px 8px;background:#fff;font-size:12px;color:var(--ink3)}
.setw .tr.cf{background:#fbeeee}
.setw .tr.cf kbd{border-color:#e0a3a3;color:#b03030}
.setw .tr.cf .why{color:#b03030;font-size:11.5px;display:inline-flex;gap:4px;align-items:center}
.setw .tr.cf .why svg{width:13px;height:13px}
</style>`;

const rows = [
  ['Ask', 'Ctrl+K', 'Everywhere'], ['Find', 'Ctrl+F', 'Everywhere'], ['Chapters', 'Ctrl+Shift+L', 'Everywhere'],
  ['Reference panel', 'Ctrl+Shift+R', 'Everywhere'], ['Panels', 'Ctrl+Shift+H', 'Everywhere'], ['Focus', 'F11', 'Everywhere'],
  ['Mark card', 'Ctrl+.', 'In the text'], ['Next mark', 'F8', 'In the text'], ['New chapter here', 'Ctrl+Enter', 'In the text'],
  ['Scene break', 'Ctrl+Shift+Enter', 'In the text'],
  ['Start a new part at this chapter', 'Ctrl+Shift+Enter', 'In the text', 'cf'],
  ['Add note', '', 'In the text', 'ed'],
  ['Reveal', 'Ctrl+Shift+A', 'In the text'], ['New card', 'Ctrl+Enter', 'In Plan'], ['Zoom 100 %', 'Ctrl+0', 'Everywhere'],
];
const tbl = `<div class="tbl"><div class="tr"><span class="a">Command</span><span class="kc">Key</span><span class="wh">Where</span></div>`
  + rows.map(([a, k, w, st]) => {
    if (st === 'ed') return `<div class="tr ed"><span class="a">${a}</span><span class="kc"><span class="ki">Press the new key…<span class="cursor" style="height:13px;vertical-align:-2px"></span></span></span><span class="wh">${w}</span></div>`;
    if (st === 'cf') return `<div class="tr cf"><span class="a">${a}</span><span class="kc"><kbd>${k}</kbd><span class="why">${L.icons.unknown}same as Scene break</span></span><span class="wh">${w}</span></div>`;
    return `<div class="tr"><span class="a">${a}</span><span class="kc"><kbd>${k}</kbd></span><span class="wh">${w}</span></div>`;
  }).join('') + `</div>`;

const tabs = [['General'], ['Editor'], ['Keys'], ['AI'], ['Project', 'this project only'], ['Privacy'], ['Tips']];
const dlg = `<div class="dlg setw" style="left:270px;top:84px;width:900px;height:670px">
  <div class="sh"><b>Settings</b><div class="filter">${L.icons.magnifier}<span>Search all settings</span></div><span class="x" style="margin-left:auto">?</span><span class="x">✕</span></div>
  <div style="display:flex;flex:1;min-height:0">
    <div class="tabs2">${tabs.map(([t, s]) => `<div${t === 'Keys' ? ' class="on"' : ''}>${t}${s ? `<small>${s}</small>` : ''}</div>`).join('')}</div>
    <div class="main2">
      <div class="kb">Keyboard layout: Spanish (Spain) · no shortcut needs a dead key or AltGr ${L.icons.fix}</div>
      ${tbl}
      <div style="margin-top:12px;display:flex;gap:8px"><span class="btn">Reset all</span></div>
    </div>
  </div>
</div>`;

const html = L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  strip: { reviewCount: 12 },
  page: L.pageCol(col, { paddingTop: 40 }),
  status: { style: 'Plain', words: '2,418 words', pages: 'book p. ~146/248', review: '12 to review' },
  ask: 'normal',
  content: `<div class="scrim"></div>`,
  extra: css + dlg
    + L.ann(1, 'The search box finds any setting, in any tab', 732, 98, { w: 200 })
    + L.ann(2, 'Like a code editor: command · key · where; click a key and press the new one', 1182, 560, { w: 230 })
    + L.ann(3, 'Conflicts are flagged in red', 1182, 522, { w: 230 })
    + L.ann(4, 'Checked against the current keyboard layout: a shortcut needing a dead key or AltGr would be flagged', 1182, 150, { w: 230 })
    + L.ann(5, 'Project settings live here: structure level names, readers, the styles’ working looks, the tile', 20, 296, { w: 230 })
    + L.ann(6, 'The “?” opens Help at this spot, the same “?” everywhere', 1182, 76, { w: 230 }),
});

module.exports = {
  id: 'S26',
  file: 's26-settings',
  title: 'Settings',
  width: 1440,
  height: 900,
  html,
  caption: L.caption({
    id: 'S26', title: 'Settings',
    scene: 'The Settings window on Keys: the search box at the top, the tabs on the left, the layout check and the table of commands, keys and where each applies. The writer clicked the key of “Add note” and is about to press a new one; one key is used twice in the text, flagged in red.',
    on: 'the Settings window (search box, tabs General · Editor · Keys · AI · Project · Privacy · Tips, “?” and ✕), “Keyboard layout: Spanish (Spain) · no shortcut needs a dead key or AltGr ✓”, the Command · Key · Where table (Everywhere, In the text, In Plan) with one row recording and one conflict, Reset all; the dimmed page and Ask button behind',
    off: 'the other tabs’ contents, an Apply or Close button, brackets, slashes or backslashes in any key',
  }),
};
