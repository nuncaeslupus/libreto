// S26: Settings. Two windows: Settings (yours, every project; General shown, search box at the top)
// and Project settings (this project: level names, readers, the look); each links to the other.
// An inset shows the Keys tab: command · key · where, a key being recorded, a conflict, the layout check.
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
.setw .sub{font-size:12px;color:var(--ink3);margin:0 0 10px}
.setw .gr2{display:flex;align-items:center;gap:14px;padding:11px 0;border-top:1px solid var(--line2);font-size:13px}
.setw .gr2 .k{width:110px;flex:none;font-weight:600;font-size:12.5px}
.setw .gr2 .v{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
.setw .gray{color:var(--ink3);font-size:12px}
.setw .ddb{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--line);border-radius:7px;padding:3px 10px;font-size:12.5px;background:#fff;width:130px}
.setw .ddb:after{content:"▾";margin-left:auto;color:var(--ink3);font-size:10px}
.setw .opts{display:flex;flex-direction:column;gap:6px}
.setw .opts>span{display:inline-flex;align-items:center;gap:8px}
.setw .link2{margin-top:14px;padding-top:12px;border-top:1px solid var(--line2);font-size:12.5px;color:var(--ink2)}
.setw .ph{font:600 10.5px var(--ui);letter-spacing:.09em;text-transform:uppercase;color:var(--ink3);margin:14px 0 6px;display:flex;gap:8px;align-items:baseline}
.setw .lvls{display:flex;gap:8px;align-items:center}
.setw .lvls .inp{padding:4px 10px;font-size:12.5px;width:96px}
.setw .ppl{display:flex;align-items:center;gap:8px;padding:4px 0;font-size:13px}
.setw .look{display:flex;align-items:center;gap:10px}
.setw .look .tile{width:34px;height:34px;border-radius:8px;background:#3b6ea8;color:#fff;font:600 13px var(--ui);display:flex;align-items:center;justify-content:center}
.setw .look .lamp{width:34px;height:34px;border-radius:8px;border:1px solid var(--line);display:flex;align-items:center;justify-content:center;background:#fff}
.setw .look .dot{width:16px;height:16px;border-radius:50%}
.setw .look .dot.on{box-shadow:0 0 0 2px #fff,0 0 0 3.5px var(--ink2)}
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
  ['Ask', 'Ctrl+K', 'Everywhere'], ['Find', 'Ctrl+F', 'Everywhere'], ['Mark card', 'Ctrl+.', 'In the text'],
  ['Scene break', 'Ctrl+Shift+Enter', 'In the text'],
  ['Start a new part at this chapter', 'Ctrl+Shift+Enter', 'In the text', 'cf'],
  ['Add note', '', 'In the text', 'ed'],
];
const tbl = `<div class="tbl"><div class="tr"><span class="a">Command</span><span class="kc">Key</span><span class="wh">Where</span></div>`
  + rows.map(([a, k, w, st]) => {
    if (st === 'ed') return `<div class="tr ed"><span class="a">${a}</span><span class="kc"><span class="ki">Press the new key…<span class="cursor" style="height:13px;vertical-align:-2px"></span></span></span><span class="wh">${w}</span></div>`;
    if (st === 'cf') return `<div class="tr cf"><span class="a">${a}</span><span class="kc"><kbd>${k}</kbd><span class="why">${L.icons.unknown}same as Scene break</span></span><span class="wh">${w}</span></div>`;
    return `<div class="tr"><span class="a">${a}</span><span class="kc"><kbd>${k}</kbd></span><span class="wh">${w}</span></div>`;
  }).join('') + `</div>`;

const tabs = ['General', 'Editor', 'Styles', 'Keys', 'AI', 'Privacy', 'Tips'];
const row = (k, v) => `<div class="gr2"><span class="k">${k}</span><span class="v">${v}</span></div>`;
const settings = `<div class="dlg setw" style="left:24px;top:104px;width:760px;height:396px">
  <div class="sh"><b>Settings</b><div class="filter">${L.icons.magnifier}<span>Search all settings</span></div><span class="x" style="margin-left:auto">✕</span></div>
  <div style="display:flex;flex:1;min-height:0">
    <div class="tabs2">${tabs.map((t) => `<div${t === 'General' ? ' class="on"' : ''}>${t}</div>`).join('')}</div>
    <div class="main2">
      <div class="sub">Yours, for every project</div>
      ${row('Language', '<span class="ddb">English</span>')}
      ${row('Interface size', '<span class="seg"><span>Smaller</span><span class="on">Standard</span><span>Larger</span><span>Largest</span></span><span class="gray">menus, panels and the strip; the page has its own zoom</span>')}
      ${row('Start with', '<span class="opts"><span><span class="rd"></span>The Start window</span><span><span class="rd on"></span>The last project, where you left it</span></span>')}
      <div class="link2">This project’s level names, readers and look: <span class="lk">Project settings…</span></div>
    </div>
  </div>
</div>`;

const swatch = (c, on) => `<span class="dot${on ? ' on' : ''}" style="background:${c}"></span>`;
const project = `<div class="dlg setw" style="left:824px;top:150px;width:590px;height:372px">
  <div class="sh"><b>Project settings</b><span class="gray" style="margin:0">The Blue Lamp</span><span class="x" style="margin-left:auto">✕</span></div>
  <div class="main2">
    <div class="sub">This project only · File ▸ Project settings…</div>
    <div class="ph">Structure levels</div>
    <div class="lvls"><span class="inp">Part</span><span class="gray" style="margin:0">›</span><span class="inp">Chapter</span><span class="gray" style="margin:0">›</span><span class="inp">Scene</span></div>
    <div class="ph">People <span class="gray" style="margin:0;font-weight:400;text-transform:none;letter-spacing:0">readers you send copies to</span></div>
    <div class="ppl"><span class="who">M</span><b>Marta</b><span class="gray" style="margin:0">editor · Word</span></div>
    <div class="ppl"><span class="lk">+ Add a reader</span></div>
    <div class="ph">The look</div>
    <div class="look"><span class="tile">BL</span><span class="lamp"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3b6ea8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 4h8l3 8H5z"/><path d="M12 12v6M8 20h8"/></svg></span>${swatch('#3b6ea8', 1)}${swatch('#6d7f5a')}${swatch('#a0574a')}${swatch('#5b5f66')}</div>
    <div class="link2">Settings for every project: <span class="lk">Settings…</span></div>
  </div>
</div>`;

const keys = `<div class="crop" style="position:absolute;left:24px;top:516px;width:760px;z-index:32">
  <div class="lbl">Settings ▸ Keys</div>
  <div class="setw" style="padding:10px 14px 12px">
    <div class="kb">Keyboard layout: Spanish (Spain) · no shortcut needs a dead key or AltGr ${L.icons.fix}</div>
    ${tbl}
  </div>
</div>`;

const html = L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  strip: { reviewCount: 12 },
  page: L.pageCol(col, { paddingTop: 40 }),
  status: { style: 'Plain', words: '2,418 words', pages: 'p. 146 of 248' },
  ask: 'normal',
  content: `<div class="scrim"></div>`,
  extra: css + settings + project + keys
    + L.ann(1, 'Finds any setting, in any tab', 482, 120)
    + L.ann(2, 'Interface size: menus, panels and the strip larger or smaller', 210, 448)
    + L.ann(3, 'Each window links to the other', 824, 538, {})
    + L.ann(4, 'Project settings: this project only (level names, readers, the look)', 824, 104, {})
    + L.ann(5, 'Keys like a code editor’s: command · key · where; click a key to record a new one; conflicts flagged; checked against the keyboard layout', 824, 640, { w: 330 })
    + L.ann(6, 'No “?” buttons: F1 and the Help menu open Help at the view you are in', 824, 730, { w: 330 }),
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
    scene: 'Two windows, because they are two things. Settings (yours, for every project) on General: language, Interface size, what to start with, the search box at the top. Project settings (this project only, from File ▸ Project settings…): the names of the structure levels, the readers, the look. Each links to the other. Below, the Keys tab in an inset: a key being recorded, a conflict flagged, the layout check.',
    on: 'Settings (search box, tabs General · Editor · Styles · Keys · AI · Privacy · Tips, General shown, link to Project settings…); Project settings (Part › Chapter › Scene, People with Marta and + Add a reader, the look with its tile and colors, link to Settings…); the Keys inset (Command · Key · Where, one row recording, one conflict in red, “Keyboard layout: Spanish (Spain) · no shortcut needs a dead key or AltGr ✓”); the dimmed page and the Ask button behind',
    off: '“?” buttons, the other tabs’ contents (Privacy: anonymous usage statistics, asked once at install, off unless you said yes), an Apply button, brackets or slashes in any key',
  }),
};
