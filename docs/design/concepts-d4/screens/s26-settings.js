// S26: Settings. One dialog, six groups; Shortcuts open: every key searchable and editable, checked against the keyboard layout.
const L = require('../lib');
const P = L.sample.chapter7Plain;

const col = `<div class="chap"><div class="num">CHAPTER 7</div><h1>Lena’s warning</h1></div>`
  + P.map((p, i) => `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`).join('');

const css = `<style>
.setd .side2{width:180px;flex:none;background:var(--soft);border-right:1px solid var(--line2);padding:10px 8px;font-size:13px}
.setd .side2 div{padding:7px 12px;border-radius:7px;color:var(--ink2)}
.setd .side2 div.on{background:#fff;box-shadow:0 0 0 1px var(--line);font-weight:600;color:var(--ink)}
.setd .main2{flex:1;min-width:0;padding:14px 22px 14px;display:flex;flex-direction:column}
.setd .kb{display:flex;gap:8px;align-items:center;font-size:12.5px;color:var(--ink2);margin:0 0 10px}
.setd .kb svg{color:var(--fix)}
.setd .tbl{border:1px solid var(--line);border-radius:8px;overflow:hidden;font-size:13px}
.setd .tr{display:flex;align-items:center;gap:10px;padding:5px 12px;border-top:1px solid var(--line2);min-height:30px}
.setd .tr:first-child{border-top:0;background:var(--soft);font:600 10.5px var(--ui);letter-spacing:.08em;text-transform:uppercase;color:var(--ink3);padding:6px 12px}
.setd .tr .a{flex:1}
.setd .tr kbd{font-size:12px;padding:2px 7px}
.setd .tr.ed{background:var(--accent-tint)}
.setd .tr.ed .ki{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--accent);box-shadow:0 0 0 3px var(--accent-tint);border-radius:5px;padding:2px 8px;background:#fff;font-size:12.5px;min-width:130px}
.setd .tr.ed .hint{font-size:11.5px;color:var(--ink3);margin-right:8px}
</style>`;

const rows = [['Ask', 'Ctrl+K'], ['Chapters', 'Ctrl+Shift+L'], ['Reference', 'Ctrl+Shift+R'], ['Panels', 'Ctrl+Shift+H'], ['Focus', 'F11'], ['New chapter', 'Ctrl+Enter'], ['Scene break', 'Ctrl+Shift+Enter'], ['Add note', 'Ctrl+Shift+M', true], ['Reveal', 'Ctrl+Shift+A'], ['Styles', 'Ctrl+T'], ['Plain', 'Ctrl+Shift+P'], ['Zoom reset', 'Ctrl+0']];
const tbl = `<div class="tbl"><div class="tr"><span class="a">Action</span><span>Key</span></div>`
  + rows.map(([a, k, ed]) => ed
    ? `<div class="tr ed"><span class="a">${a}</span><span class="hint">Press the new keys · Esc keeps the old one</span><span class="ki">${k}<span class="cursor" style="height:13px;vertical-align:-2px"></span></span></div>`
    : `<div class="tr"><span class="a">${a}</span><kbd>${k}</kbd></div>`).join('') + `</div>`;

const dlg = `<div class="dlg setd" style="left:300px;top:150px;width:840px">
  <div class="dlg-h">Settings<span class="x" style="margin-left:auto">?</span><span class="x" style="margin-left:0">✕</span></div>
  <div style="display:flex;flex:1;min-height:0">
    <div class="side2"><div>General</div><div>Writing</div><div>AI</div><div>Appearance</div><div class="on">Shortcuts</div><div>Files and backups</div></div>
    <div class="main2">
      <div class="filter" style="margin:0 0 10px;height:28px;padding:0 9px">${L.icons.magnifier}<span>Search shortcuts</span></div>
      <div class="kb">Keyboard: Spanish (es) · all shortcuts work on this layout ${L.icons.fix}</div>
      ${tbl}
      <div style="margin-top:12px"><span class="btn">Reset all</span></div>
    </div>
  </div>
</div>`;

const html = L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  page: L.pageCol(col, { paddingTop: 40 }),
  status: { style: 'Plain', words: '2,418 words', pages: 'book p. ~146/248', fixes: '3 fixes' },
  ask: 'normal',
  content: `<div class="scrim"></div>`,
  extra: css + dlg
    + L.ann(1, 'Every key is editable: click the key, press the new one', 1150, 480, { w: 220 })
    + L.ann(2, 'Checked against the current keyboard layout: a shortcut needing a dead key or AltGr would be flagged here', 1150, 262, { w: 240 })
    + L.ann(3, 'One dialog, six groups; the “?” opens the help of the open group', 40, 200, { w: 220 }),
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
    scene: 'File ▸ Settings… on Shortcuts: a search field, the layout check, the table of actions and keys. The writer clicked the key of “Add note” and is about to press a new one.',
    on: 'the Settings dialog with its six groups (Shortcuts open), the “?” in the header, Search shortcuts, “Keyboard: Spanish (es) · all shortcuts work on this layout ✓”, the Action · Key table with one row being edited, Reset all; the dimmed page and Ask button behind',
    off: 'the other five groups’ contents, per-book settings, an Apply or Close button, brackets, slashes or backslashes in any key',
  }),
};
