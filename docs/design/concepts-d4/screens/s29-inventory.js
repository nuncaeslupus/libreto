// S29: inventory. Top: every status bar menu open at once. Bottom: the seven menus of the menu bar opened together. Not a moment.
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
const keyRow = (t, k) => `<div class="mi"><span>${t}</span><span class="r"><kbd>${k}</kbd></span></div>`;
const keysMenu = menu('left:520px;bottom:6px', `<div class="mhd">Keys here · in the text</div>`
  + keyRow('Mark card', 'Ctrl+.') + keyRow('Next mark', 'F8') + keyRow('Previous mark', 'Shift+F8') + keyRow('New chapter', 'Ctrl+Enter') + keyRow('Scene break', 'Ctrl+Shift+Enter')
  + keyRow('Emphasis', 'Ctrl+I') + keyRow('Ask', 'Ctrl+K') + keyRow('Reveal', 'Ctrl+Shift+A') + sep + mi('All keys…', 'Settings ▸ Keys'), 300);
const viewMenu = menu('left:828px;bottom:6px', `<div class="mhd">View</div>`
  + `<div class="mi rad on"><span>Whole book<span class="ex">every chapter on one long page</span></span></div>`
  + `<div class="mi rad"><span>By chapter<span class="ex">one chapter at a time</span></span></div>`, 200);
const shows = [['Underlines', true, `<span style="margin-left:auto;display:flex;gap:3px">${['var(--spell)', 'var(--gram)', 'var(--fix)'].map((c) => `<span style="width:9px;border-bottom:2px solid ${c};height:7px"></span>`).join('')}</span>`],
  ['Scene names', false, '<span style="margin-left:auto;color:var(--ink3);font-size:11px">at the rules</span>'],
  ['Status dots', true, '<span style="margin-left:auto;display:flex;gap:3px"><span style="width:7px;height:7px;border-radius:50%;background:#8fb08a"></span><span style="width:7px;height:7px;border-radius:50%;background:#d8b25a"></span></span>'],
  ['Your notes', true, `<span class="gm note" style="position:static;width:14px;height:14px;margin-left:auto">${L.icons.note}</span>`]];
const showMenu = menu('left:1036px;bottom:6px', `<div class="mhd">Show</div>` + shows.map(([t, on, mk]) => `<div class="mi">${ck(on)}<span>${t}</span>${mk}</div>`).join(''), 206);
const histMenu = menu('left:960px;bottom:290px', `<div class="mhd">History</div>`
  + mi('<span class="lk">Today 9:12–10:40 · Write</span>', '+912 words') + mi('<span class="lk">Yesterday 21:05–22:30 · Review</span>', '14 closed') + mi('<span class="lk">Yesterday 17:40–18:15 · Research</span>', '3 topics')
  + mi('<span class="lk">Nov 10, 20:10–21:00 · Plan</span>', '2 moves') + sep + mi('Open History'), 330);
const zoomMenu = menu('left:1262px;bottom:6px', `<div class="mhd">Zoom</div>` + ['50', '67', '75', '90', '100', '110', '125', '150', '200'].map((z) => mi(z + ' %', '', { hov: z === '100' })).join(''), 96);

const top = L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  strip: { reviewCount: 12 },
  page: dimPage,
  content: styleMenu + keysMenu + viewMenu + showMenu + histMenu + zoomMenu,
  status: { style: 'Plain', words: '2,418 words', pages: 'p. 146 of 248' },
  ask: 'normal',
  extra: L.ann(1, 'The style palette shows each row in its own look; a palette is the only place with a filter box', 20, 330, { w: 250 })
    + L.ann(2, 'The words and the page count open Statistics; “Saved 19:32” just says so', 250, 812, { w: 250 })
    + L.ann(3, 'The ⌨ button lists the keys that work where you are', 520, 520, { w: 260 })
    + L.ann(4, 'Whole book / By chapter, two exclusive rows; Show: Underlines, Scene names, Status dots, Your notes', 830, 640, { w: 290, r: true })
    + L.ann(5, 'History rows are links; zoom goes from 50 to 200 %, 100 % in the middle', 960, 258, { w: 330 }),
});

// ---- bottom frame: the ☰ menu and its seven menus, opened together ----
const ex = (t) => `<span class="ex">${t}</span>`;
const item = (t, r = '', sub = '') => `<div class="mi"><span>${t}${sub ? ex(sub) : ''}</span>${r ? `<span class="r">${r}</span>` : ''}</div>`;
const rad = (t, on) => `<div class="mi rad${on ? ' on' : ''}"><span>${t}</span></div>`;
const at = (x, y) => `left:${x}px;top:${y}px`;
const fileM = menu(at(6, 57), item('New project', 'Ctrl+N') + item('Open…', 'Ctrl+O') + item('Recent', '▸') + sep
  + item('Import a Word file…') + item('Share', '▸', 'Send a copy… · Add notes from a file…') + item('Export', '▸', 'PDF · EPUB · Word') + item('Print…', 'Ctrl+P') + sep + item('Project settings…'), 280);
const editM = menu(at(292, 57), item('Undo', 'Ctrl+Z') + item('Redo', 'Ctrl+Y') + sep + item('Cut', 'Ctrl+X') + item('Copy', 'Ctrl+C') + item('Paste', 'Ctrl+V') + item('Paste into the Inbox') + sep
  + item('Find', 'Ctrl+F') + item('Replace', 'Ctrl+H') + item('Rename everywhere…'), 230);
const insertM = menu(at(518, 57), item('Part here') + item('Chapter here', 'Ctrl+Enter') + item('Scene break', 'Ctrl+Shift+Enter') + sep
  + item('Picture…') + item('Footnote') + sep + item('Front matter', '▸') + item('Back matter', '▸'), 250);
const formatM = menu(at(774, 57), item('Emphasis', 'Ctrl+I') + item('Strong', 'Ctrl+B') + sep + item('Style as', '▸'), 180);
const viewM = menu(at(960, 57), item('Chapters') + item('Reference panel') + item('Panels', 'Ctrl+Shift+H') + item('Focus', 'F11') + sep
  + rad('Whole book', true) + rad('By chapter') + sep + item('Show', '▸') + item('Reveal', 'Ctrl+Shift+A') + sep
  + item('Zoom in', 'Ctrl++') + item('Zoom out', 'Ctrl+−') + item('Zoom 100 %', 'Ctrl+0'), 236);
const reportsM = menu(at(1202, 57), item('Statistics') + item('What the AI wrote') + item('AI log') + item('History'), 196);
const helpM = menu(at(1202, 246), `<div class="mhd">Help</div>` + item('Help', 'F1') + item('Keys here') + item('Tips') + item('Tutorials') + sep + item('About'), 196);

const bottom = `<div class="f2">` + L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  strip: { reviewCount: 12 },
  page: dimPage,
  status: { style: 'Plain', words: '2,418 words', pages: 'p. 146 of 248' },
  ask: 'normal',
  extra: fileM + editM + insertM + formatM + viewM + reportsM + helpM
    + L.ann(6, 'The menu bar holds the seven menus (opened together here; Help sits under Reports for room). No ☰ button, no AI menu: the AI is set in Settings ▸ AI and its reports live in Reports. Menus do not filter as you type.', 20, 520, { w: 330 }),
}) + `</div>`;

const css = `<style>
.frames{display:flex;flex-direction:column;gap:16px;background:#d9d9d6}
.frames .menu{min-width:0}
.frames .menu .mi{padding:4px 10px;align-items:baseline}
.frames .menu .mi.rad:before{content:"";flex:none;width:8px;height:8px;border-radius:50%;border:1.5px solid var(--ink4);margin-right:1px;position:relative;top:1px}
.frames .menu .mi.rad.on:before{background:var(--accent);border-color:var(--accent)}
.frames .f2 .menubar>span{background:#e2e2df}
.frames .f2 .menubar>span:not(:last-child){border-radius:4px}
.frames .menu .mi .ex{display:block;color:var(--ink3);font-size:11.5px}
.frames .menu kbd{font-size:11px}
.frames .status{z-index:8}
.gm.note{flex:none}
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
    scene: 'Not a moment. Top: Write with every status bar menu open at once. Bottom: the seven menus of the menu bar opened together, to see what lives where.',
    on: 'top: the style palette (“What is this text?”, a filter, every style in its own look), the ⌨ keys for where you are, Whole book / By chapter as exclusive rows, Show (Underlines, Scene names, Status dots, Your notes), History (sessions as links, Open History), zoom 50 to 200 % with 100 % in the middle, “Saved 19:32”, the Ask button; bottom: the menu bar with File, Edit, Insert, Format, View, Reports, Help open and their items',
    off: 'a ☰ button, an AI menu (Connect, level: those are in Settings ▸ AI), filter boxes in menus, a words menu (the count opens Statistics), Fit width, a provider icon in the status bar',
  }),
};
