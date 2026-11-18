// S47: all menus of the menu bar opened together, and the right-click menus side by side. Not a moment.
const L = require('../lib');
const I = L.icons;

const css = `<style>
.s47{background:#d9d9d6;padding:22px 28px 26px}
.s47 .h{font:600 11.5px var(--ui);letter-spacing:.07em;text-transform:uppercase;color:#55585e;margin:0 0 10px}
.s47 .row{display:flex;gap:14px;align-items:flex-start;margin-bottom:20px}
.s47 .m{flex:none}
.s47 .tab{display:inline-block;background:#e2e2df;border-radius:5px 5px 0 0;padding:3px 11px;font-size:12.5px;margin-left:6px}
.s47 .menu{position:static;min-width:0;width:100%;box-shadow:0 1px 3px rgba(0,0,0,.1)}
.s47 .mi{padding:4px 10px;gap:8px;font-size:12.5px}
.s47 .mi .g{width:14px;flex:none;display:inline-flex;justify-content:center;font-size:12px}
.s47 .mi .g svg{width:13px;height:13px}
.s47 .mi .r{font-size:11px;padding-left:12px}
.s47 .mgray{color:var(--ink3);font-size:11.5px;padding:4px 10px 5px}
.s47 .mi.rad:before{content:"";flex:none;width:7px;height:7px;border-radius:50%;border:1.5px solid var(--ink4);margin-right:1px}
.s47 .mi.rad.on:before{background:var(--accent);border-color:var(--accent)}
.s47 .mi.mck:before{content:"✓";flex:none;width:12px;color:var(--accent);font-size:11px}
.s47 .mi.mck.mnot:before{visibility:hidden}
.s47 .rc .lbl{font:600 11px var(--ui);letter-spacing:.06em;text-transform:uppercase;color:#66696e;padding:0 0 7px 3px;white-space:nowrap}
.s47 .rc .menu{width:max-content;min-width:150px}
.s47 .g.ai{color:var(--ink2)}
.s47 .g.nt{color:var(--note)}.s47 .g.ok{color:var(--fix)}.s47 .g.no{color:var(--ink2)}
.s47 .key{display:flex;gap:18px;font-size:12.5px;color:var(--ink2);margin:-8px 0 16px}
.s47 .key span{display:inline-flex;align-items:center;gap:6px}
.s47 .key svg{width:13px;height:13px}
</style>`;

const SP = I.spark;
const mi = (t, r = '', o = {}) => `<div class="mi${o.cls ? ' ' + o.cls : ''}${o.dis ? ' dis' : ''}">${o.g !== undefined ? `<span class="g ${o.gc || ''}">${o.g}</span>` : ''}<span>${t}${o.ai ? ' ' + `<span style="color:var(--ink2)">${SP}</span>` : ''}</span>${r ? `<span class="r">${r}</span>` : ''}</div>`;
const ai = (t, r) => mi(t, r, { ai: true });
const sep = '<div class="msep"></div>';
const ck = (t, r, on) => mi(t, r, { cls: 'mck' + (on ? '' : ' mnot') });
const rad = (t, r, on) => mi(t, r, { cls: 'rad' + (on ? ' on' : '') });
const col = (name, w, items) => `<div class="m" style="width:${w}px"><span class="tab">${name}</span><div class="menu">${items.join('')}</div></div>`;

const file = col('File', 268, [
  `<div class="mgray">Saved automatically · 19:32</div>`,
  mi('New project…', 'Ctrl+N'), mi('Open…', 'Ctrl+O'), mi('Open recent', '▸'), mi('Close project', 'Ctrl+W'), sep,
  mi('Save a version…', 'Ctrl+S'), mi('Versions &amp; history', ''), sep,
  mi('Bring in a Word manuscript…'), mi('Send a copy…'), mi('Add notes from a reader’s file…'), sep,
  mi('Export…'), mi('Print…', 'Ctrl+P'), sep, mi('Book details…'), mi('Show project folder'), sep, mi('Quit', 'Ctrl+Q')]);
const edit = col('Edit', 268, [
  mi('Undo', 'Ctrl+Z'), mi('Redo', 'Ctrl+Shift+Z'), mi('Revert', '▸'), sep,
  mi('Cut', 'Ctrl+X'), mi('Copy', 'Ctrl+C'), mi('Paste', 'Ctrl+V'), mi('Paste as plain text'), mi('Paste into the Inbox'), mi('Select all', 'Ctrl+A'), sep,
  mi('Find…', 'Ctrl+F'), mi('Find next', 'F3'), mi('Replace…', 'Ctrl+H'), mi('Rename everywhere…'), sep, mi('Settings…', 'Ctrl+,')]);
const view = col('View', 290, [
  ck('Navigator', 'Ctrl+Shift+L'), ck('Side panel', 'Ctrl+Shift+R', true), ck('Review', 'Ctrl+Shift+V'), sep,
  rad('Text', 'Ctrl+1', true), rad('Board', 'Ctrl+2'), rad('Pages', 'Ctrl+3'), sep,
  mi('Book · Codex · Research', 'Ctrl+Shift+1/2/3'), sep,
  mi('Back', 'Alt+←'), mi('Forward', 'Alt+→'), mi('Next mark', 'Alt+↓ · F8'), mi('Previous mark', 'Alt+↑'), sep,
  mi('Show', '▸'), mi('Show names and styles', 'Ctrl+Shift+A'), rad('Whole book', '', true), rad('One chapter'), sep,
  mi('Focus', 'F11'), mi('Sprint', '▸'), mi('Zoom in · out · 100 %', 'Ctrl+= − 0')]);
const insert = col('Insert', 230, [
  mi('Note', 'Ctrl+Shift+N', { g: I.note, gc: 'nt' }), mi('Footnote'), mi('Picture…'), sep,
  mi('Scene break', 'Ctrl+Shift+Enter'), mi('Chapter here', 'Ctrl+Enter'), mi('Part here'), sep,
  mi('Front matter', '▸'), mi('Back matter', '▸')]);
const format = col('Format', 250, [
  mi('<i>I</i> Italic', 'Ctrl+I'), mi('<b>B</b> Bold', 'Ctrl+B'), mi('Style as', '▸'), mi('Clear style'), sep,
  mi('New style…'), mi('Edit styles…'), sep, mi('Language of this passage', '▸'), mi('Book layout…')]);
const tools = col('Tools', 280, [
  mi('Ask', 'Ctrl+K', { ai: true }), ai('Check continuity'), ai('Read the book again'), ai('Name the unnamed scenes'), sep,
  mi('Statistics'), mi('AI activity', '', { ai: true }), mi('Language &amp; typography…'), sep, mi('Check spelling…'), sep, mi('Settings…', 'Ctrl+,')]);
const help = col('Help', 210, [mi('Help', 'F1'), mi('Keys here'), mi('Tips'), mi('Tutorials'), sep, mi('About Libreto')]);

// right-click menus
const E = { g: '' };
const NOTE = { g: I.note, gc: 'nt' };
const AIg = { g: SP, gc: 'ai' };
const rc = (label, items) => `<div class="rc"><div class="lbl">${label}</div><div class="menu">${items.join('')}</div></div>`;
const R = [
  rc('Text, selection', [mi('<i>I</i> Italic', '', E), mi('<b>B</b> Bold', '', E), mi('Style as', '▸', E), sep, mi('Add note', '', NOTE), mi('Ask about this', '', AIg), sep,
    mi('Look up “Lena”', '', E), mi('Add to the Codex', '▸', E), mi('Send to the Inbox', '', E), sep, mi('Cut', '', E), mi('Copy', '', E), mi('Paste', '', E)]),
  rc('Text, no selection', [mi('Style as', '▸', E), mi('Insert', '▸', E), sep, mi('Add note', '', NOTE), sep, mi('Paste', '', E)]),
  rc('A mark', [mi('Accept', '', { g: '✓', gc: 'ok' }), mi('Reject', '', { g: '✗', gc: 'no' }), mi('Edit', '', E), sep, mi('Add note', '', NOTE), mi('Show in Review', '', E)]),
  `<div class="rc" style="display:flex;flex-direction:column;gap:16px">` + [
    ['Chapter row', [mi('Open', '', E), mi('Rename', '', E), mi('Open beside the text', '', E), mi('Not numbered', '', E), sep, mi('Start a new part here', '', E), mi('Join with the previous', '', E), sep, mi('Move to Discarded', '', E)]],
  ].map(([l, it]) => `<div><div class="lbl">${l}</div><div class="menu">${it.join('')}</div></div>`).join('') + `</div>`,
  rc('A Board card', [mi('Open in the text', '', E), mi('Rename', '', E), sep, mi('Labels', '▸', E), mi('Move to', '▸', E), sep, mi('Unplace', '', E), mi('Move to Discarded', '', E)]),
  rc('A Codex entry', [mi('Open', '', E), mi('Open beside the text', '', E), mi('Rename everywhere…', '', E), sep, mi('Show in the text', '', E), mi('Research', '▸', E), mi('Brainstorm about Lena', '', AIg)]),
];

const html = css + `<div class="s47">
<div class="h">The menu bar, every menu opened</div>
<div class="key"><span>${SP} marks a feature that uses the AI; it is dimmed when none is connected</span><span>Settings… is in Edit (as on Linux) and in Tools: one window</span><span>Menus do not filter as you type</span></div>
<div class="row">${file}${edit}${view}</div>
<div class="row">${insert}${format}${tools}${help}</div>
<div class="h" style="margin-top:6px">Right-click, in six places</div>
<div class="row">${R.join('')}</div>
</div>`;

module.exports = {
  id: 'S47', file: 's47-menus', title: 'All the menus', width: 1440, height: 1230, html,
  caption: L.caption({
    id: 'S47', title: 'All the menus',
    scene: 'Not a moment: every menu of the menu bar opened at once, and the right-click menus of six places, to check that everything has a place where a person would look.',
    on: 'File with its “Saved automatically” line, Edit (Undo, Revert, Settings…), View (panels, Text · Board · Pages, Back and Forward, marks, Show), Insert, Format, Tools, Help; the spark on AI items; right-click menus for text with and without a selection, a mark, a chapter row, a Board card and a Codex entry',
    off: 'a Go menu or a Book menu, filter boxes in menus, items that exist only in a right-click menu',
  }),
};
