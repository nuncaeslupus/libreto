// S29: inventory. Top: every status bar menu open at once. Bottom: the seven menus opened together. Not a moment.
const L = require('../lib');
const P = L.sample.chapter7Plain;

const col = `<div class="chap"><div class="num">CHAPTER 7</div><h1>Lena’s warning</h1></div>`
  + P.map((p, i) => `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`).join('');
const dimPage = L.pageCol(col, { paddingTop: 40 }).replace('<div class="page">', '<div class="page" style="opacity:.35">');

const mi = (t, r = '', o = {}) => `<div class="mi${o.hov ? ' hov' : ''}${o.dis ? ' dis' : ''}"${o.style ? ` style="${o.style}"` : ''}><span${o.cls ? ` class="${o.cls}"` : ''}>${t}</span>${r ? `<span class="r">${r}</span>` : ''}</div>`;
const sep = '<div class="msep"></div>';
const menu = (st, inner, w) => `<div class="menu" style="${st};width:${w}px">${inner}</div>`;
const sw = (color) => `<span class="sw" style="background:${color};margin-left:auto;opacity:.8"></span>`;
const ck = (on) => `<span class="cb${on ? ' on' : ''}"></span>`;

// ---- top frame: the status bar menus ----
const styles = [['Plain', ''], ['Chapter heading', 'font:400 15px var(--text)'], ['Part heading', 'font:600 11px var(--ui);letter-spacing:.1em;text-transform:uppercase'], ['Subheading', 'font:600 13px var(--ui)'],
  ['Block quote', 'font:italic 13px var(--text);color:var(--ink2);border-left:2px solid var(--line);padding-left:6px'], ['Verse', 'font:13px var(--text);padding-left:14px'], ['Epigraph', 'font:italic 12.5px var(--text);color:var(--ink2)'],
  ['Sign', 'font:13px var(--text);font-variant:small-caps;letter-spacing:.08em'], ['Emphasis', 'font:italic 13px var(--text)'], ['Strong', 'font:600 13px var(--text)'], ['Thought', 'font:italic 13px var(--text)'],
  ['Foreign', 'font:italic 13px var(--text)'], ['Material (never prints)', 'color:var(--ink3)']];
const styleMenu = menu('left:10px;bottom:6px', `<div class="mhd">What is this text?</div>`
  + `<div class="filter" style="margin:4px 4px 6px;height:26px;padding:0 8px;font-size:12px">${L.icons.magnifier}<span>Filter styles</span></div>`
  + styles.map(([t, st]) => `<div class="mi${t === 'Thought' ? ' hov' : ''}"><span style="${st}">${t}</span></div>`).join(''), 220);
const wordsMenu = menu('left:240px;bottom:6px', `<div class="mhd">Words</div>` + mi('Chapter', '2,418') + mi('Book', '86,240') + sep + mi('Statistics…'), 200);
const fixRow = (a, b) => `<div class="mi"><span>“${a}” → “${b}”</span><span class="r" style="color:var(--fix)">✓ keep</span><span class="r" style="padding-left:10px;color:var(--ink2)">✕ undo</span></div>`;
const fixesMenu = menu('left:450px;bottom:6px', `<div class="mhd">3 fixes in this chapter</div>` + fixRow('teh', 'the') + fixRow('dont', 'don’t') + fixRow('nine ', 'nine, ') + sep + mi('Undo all three') + mi('Review on Fixes'), 280);
const hl = [['People', 'var(--accent)', true], ['Places', 'var(--place)', true], ['Things', 'var(--thing)', false], ['Motifs', '#8a7a4a', false], ['Styles', '#b98a1c', true],
  ['Notes', 'var(--note)', true, 'note'], ['Tasks', 'var(--task)', true, 'task'], ['Fixes', 'var(--fix)', true, 'fix'], ['AI-written', '#5d7f6e', false]];
const hlMenu = menu('left:740px;bottom:6px', `<div class="mhd">Highlights</div>` + hl.map(([t, c, on, ic]) => `<div class="mi">${ck(on)}${ic ? `<span class="gm ${ic}" style="width:14px;height:14px">${L.icons[ic]}</span>` : ''}<span>${t}</span>${sw(c)}</div>`).join(''), 190);
const histMenu = menu('left:940px;bottom:6px', `<div class="mhd">History</div>`
  + mi('<span class="lk">Today 9:12–10:40 · Write</span>', '+912 words') + mi('<span class="lk">Yesterday 21:05–22:30 · Review</span>', '14 tasks') + mi('<span class="lk">Yesterday 17:40–18:15 · Research</span>', '3 topics')
  + sep + mi('Open History'), 290);
const zoomPop = `<div class="pop" style="right:10px;bottom:184px">${['80', '90', '100', '110', '125'].map((z) => `<span${z === '100' ? ' class="hov"' : ''}>${z}</span>`).join('')}<span style="color:var(--ink4);padding:4px 2px">·</span><span>Fit width</span></div>`;

const top = L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  page: dimPage,
  content: styleMenu + wordsMenu + fixesMenu + hlMenu + histMenu + zoomPop,
  status: { style: 'Plain', words: '2,418 words', pages: 'book p. ~146/248', fixes: '3 fixes' },
  ask: 'normal',
  extra: L.ann(1, 'Every status bar item opens a menu: the palette has a filter, Highlights lists the nine kinds, zoom has Fit width', 20, 130, { w: 340 }),
});

// ---- bottom frame: the seven menus ----
const MW = 240;
const fileM = menu(`left:8px;top:4px`, `<div class="mhd">File</div>` + mi('New book', 'Ctrl+N') + mi('Open…', 'Ctrl+O') + mi('Open recent', '▸') + sep + mi('Import Word…') + mi('Share…') + mi('Export', '▸') + sep + mi('Settings…') + mi('Close', 'Ctrl+W'), MW);
const editM = menu(`left:189px;top:330px`, `<div class="mhd">Edit</div>` + mi('Undo', 'Ctrl+Z') + mi('Redo', 'Ctrl+Y') + sep + mi('Cut', 'Ctrl+X') + mi('Copy', 'Ctrl+C') + mi('Paste', 'Ctrl+V') + mi('Paste as plain text', 'Ctrl+Alt+V') + sep + mi('Find', 'Ctrl+F') + mi('Replace', 'Ctrl+H') + sep + mi('Add note', 'Ctrl+Shift+M'), MW);
const viewM = menu(`left:370px;top:4px`, `<div class="mhd">View</div>` + mi('Chapters', 'Ctrl+Shift+L') + mi('Reference', 'Ctrl+Shift+R') + mi('Panels', 'Ctrl+Shift+H') + mi('Focus', 'F11') + sep + mi('Reveal', 'Ctrl+Shift+A') + mi('Highlights', '▸') + mi('Zoom', '▸', { hov: true }) + sep + mi('History') + mi('Statistics'), MW)
  + menu(`left:612px;top:222px`, ['80%', '90%', '100%', '110%', '125%'].map((z) => mi(z, z === '100%' ? '✓' : '')).join('') + sep + mi('Fit width') + mi('Reset', 'Ctrl+0'), 170);
const insertM = menu(`left:551px;top:470px`, `<div class="mhd">Insert</div>` + mi('New chapter', 'Ctrl+Enter') + mi('New part') + mi('Scene break', 'Ctrl+Shift+Enter') + sep + mi('Picture…') + mi('Note', 'Ctrl+Shift+M') + sep + mi('Research topic'), MW);
const formatM = menu(`left:732px;top:4px`, `<div class="mhd">Format</div>` + mi('Style as', '▸ &nbsp;Ctrl+T') + sep + mi('Emphasis', 'Ctrl+I') + mi('Strong', 'Ctrl+B') + mi('Thought', 'Ctrl+Shift+I') + sep + mi('Plain', 'Ctrl+Shift+P'), MW);
const aiM = menu(`left:913px;top:330px`, `<div class="mhd">AI</div>` + mi('Ask', 'Ctrl+K') + sep + mi('Review this chapter') + mi('Update Codex') + sep + mi('Level', '▸') + mi('Connect…') + mi('What the AI wrote'), MW);
const helpM = menu(`left:1094px;top:4px`, `<div class="mhd">Help</div>` + mi('Help window', 'F1') + mi('Tutorials', '▸') + mi('Shortcuts') + sep + mi('About'), MW);

let bottom = L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  page: dimPage,
  content: fileM + editM + viewM + insertM + formatM + aiM + helpM,
  status: { style: 'Plain', words: '2,418 words', pages: 'book p. ~146/248', fixes: '3 fixes' },
  ask: 'normal',
  extra: L.ann(2, 'Focus, Panels and Statistics live in View; Share… in File; Ctrl+0 resets zoom', 420, 790, { w: 340 })
    + L.ann(3, 'Every key is a letter, digit, F-key or Enter with Ctrl, Shift and Alt: no brackets, slashes or backslashes', 790, 790, { w: 400 }),
});
// all seven menu titles open at once
for (const m of ['File', 'Edit', 'View', 'Insert', 'Format', 'AI', 'Help']) bottom = bottom.replace(`<span>${m}</span>`, `<span class="open">${m}</span>`);
bottom = bottom.replace('<div class="strip">', '<div class="strip dimmed">');

const css = `<style>
.frames{display:flex;flex-direction:column;gap:16px;background:#d9d9d6}
.frames .menu .mi{padding:4px 10px}
.frames .status{z-index:8}
.gm.note,.gm.task,.gm.fix{flex:none}
</style>`;

module.exports = {
  id: 'S29',
  file: 's29-inventory',
  title: 'Everything in the status bar and the menus',
  width: 1440,
  height: 1816,
  html: css + `<div class="frames">${top}${bottom}</div>`,
  caption: L.caption({
    id: 'S29', title: 'Everything in the status bar and the menus',
    scene: 'Not a moment. Top: Write mode with every status bar menu open at once. Bottom: the seven menus of the menu bar opened together, to see what lives where after the changes.',
    on: 'top: the style palette (“What is this text?”, a filter, every style in its own look), the words menu (Chapter, Book, Statistics…), the fixes list (each with keep and undo), Highlights (People, Places, Things, Motifs, Styles, Notes, Tasks, Fixes, AI-written with swatches and the mark icons), History (three sessions as rows, Open History), the zoom menu (80 90 100 110 125 · Fit width), the Ask button; bottom: File, Edit, View (with the Zoom submenu and Reset Ctrl+0), Insert, Format, AI and Help',
    off: 'a provider icon or AI menu in the status bar, a Search &amp; ask box, a Chat item, bracket or slash shortcuts',
  }),
};
