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
const keyRow = (t, k) => `<div class="mi"><span>${t}</span><span class="r"><kbd>${k}</kbd></span></div>`;
const keysMenu = menu('left:500px;bottom:6px', `<div class="mhd">Keys here · in the text</div>`
  + keyRow('Mark card', 'Ctrl+.') + keyRow('Next mark', 'F8') + keyRow('Previous mark', 'Shift+F8') + keyRow('New chapter', 'Ctrl+Enter') + keyRow('Scene break', 'Ctrl+Shift+Enter')
  + keyRow('Emphasis', 'Ctrl+I') + keyRow('Ask', 'Ctrl+K') + keyRow('Reveal', 'Ctrl+Shift+A') + sep + mi('All keys…', 'Settings ▸ Keys'), 300);
const viewMenu = menu('left:830px;bottom:6px', `<div class="mhd">View</div>`
  + `<div class="mi on"><span>Whole book<span class="ex">every chapter, one after another</span></span></div>`
  + `<div class="mi"><span>By chapter<span class="ex">one chapter at a time</span></span></div>`, 210);
const ul = (c, dash) => `<span style="margin-left:auto;width:16px;border-bottom:2px ${dash ? 'dashed' : 'dotted'} ${c}"></span>`;
const shows = [['Underlines', true, `<span style="margin-left:auto;display:flex;gap:3px">${['var(--spell)', 'var(--gram)', 'var(--fix)'].map((c) => `<span style="width:9px;border-bottom:2px dotted ${c};height:7px"></span>`).join('')}</span>`],
  ['People', true, sw('var(--accent)')], ['Places', true, sw('var(--place)')], ['Things', false, sw('var(--thing)')], ['Motifs', false, sw('#8a7a4a')],
  ['Styles', false, sw('#b98a1c')], ['Notes', true, `<span class="gm note" style="position:static;width:14px;height:14px;margin-left:auto">${L.icons.note}</span>`], ['AI-written text', false, sw('#5d7f6e')]];
const showMenu = menu('left:1050px;bottom:6px', `<div class="mhd">Show</div>` + shows.map(([t, on, mk]) => `<div class="mi">${ck(on)}<span>${t}</span>${mk}</div>`).join(''), 196);
const histMenu = menu('left:960px;bottom:330px', `<div class="mhd">History</div>`
  + mi('<span class="lk">Today 9:12–10:40 · Write</span>', '+912 words') + mi('<span class="lk">Yesterday 21:05–22:30 · Review</span>', '14 closed') + mi('<span class="lk">Yesterday 17:40–18:15 · Research</span>', '3 topics')
  + mi('<span class="lk">Nov 10, 20:10–21:00 · Plan</span>', '2 moves') + sep + mi('Open History'), 330);
const zoomMenu = menu('left:1262px;bottom:6px', `<div class="mhd">Zoom</div>` + ['50', '67', '75', '90', '100', '110', '125', '150', '200'].map((z) => mi(z + ' %', '', { hov: z === '100' })).join(''), 96);

const top = L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  strip: { reviewCount: 12 },
  page: dimPage,
  content: styleMenu + wordsMenu + keysMenu + viewMenu + showMenu + histMenu + zoomMenu,
  status: { style: 'Plain', words: '2,418 words', pages: 'book p. ~146/248', review: '12 to review' },
  ask: 'normal',
  extra: L.ann(1, 'Every status bar item opens a menu; the style palette shows each row in its own look', 20, 340, { w: 260 })
    + L.ann(2, 'The ⌨ button lists the keys that work where you are', 500, 548, { w: 260 })
    + L.ann(3, 'Show: underlines, people, places, things, motifs, styles, notes, AI-written text', 806, 630, { w: 196, r: true })
    + L.ann(4, 'History rows are links; zoom goes from 50 to 200 %, 100 % in the middle, no Fit width', 960, 300, { w: 330 }),
});

// ---- bottom frame: the ☰ menu and its seven menus, opened together ----
const ex = (t) => `<span class="ex">${t}</span>`;
const item = (t, r = '', sub = '') => `<div class="mi"><span>${t}${sub ? ex(sub) : ''}</span>${r ? `<span class="r">${r}</span>` : ''}</div>`;
const SEVEN = ['File', 'Edit', 'Insert', 'Format', 'View', 'Reports', 'Help'];
const rootM = menu('left:8px;top:4px', SEVEN.map((m) => mi(m, '▸')).join(''), 150);
const fileM = menu('left:180px;top:4px', `<div class="mhd">File</div>` + item('New project', 'Ctrl+N') + item('Open…', 'Ctrl+O') + item('Recent', '▸') + sep
  + item('Import a Word file…') + item('Share', '▸', 'Send a copy… · Receive a copy…') + item('Export', '▸', 'PDF · Word · EPUB') + sep + item('Project settings…'), 250);
const editM = menu('left:446px;top:4px', `<div class="mhd">Edit</div>` + item('Undo', 'Ctrl+Z') + item('Redo', 'Ctrl+Y') + sep + item('Cut', 'Ctrl+X') + item('Copy', 'Ctrl+C') + item('Paste', 'Ctrl+V') + sep
  + item('Find', 'Ctrl+F') + item('Replace', 'Ctrl+H') + item('Rename everywhere…'), 230);
const insertM = menu('left:692px;top:4px', `<div class="mhd">Insert</div>` + item('Scene break', 'Ctrl+Shift+Enter') + item('New chapter here', 'Ctrl+Enter') + item('Start a new part at this chapter') + sep
  + item('Picture…') + item('Footnote') + sep + item('Front matter', '▸') + item('Back matter', '▸'), 290);
const formatM = menu('left:998px;top:4px', `<div class="mhd">Format</div>` + item('Emphasis', 'Ctrl+I') + item('Strong', 'Ctrl+B') + sep + item('Style as', '▸') + item('Styles…'), 210);
const viewM = menu('left:180px;top:356px', `<div class="mhd">View</div>` + item('Chapters') + item('Reference panel') + item('Panels', 'Ctrl+Shift+H') + item('Focus', 'F11') + sep
  + `<div class="mi on"><span>Whole book</span></div><div class="mi"><span>By chapter</span></div>` + item('Show', '▸') + item('Reveal', 'Ctrl+Shift+A') + sep
  + item('Zoom in', 'Ctrl++') + item('Zoom out', 'Ctrl+−') + item('Zoom 100 %', 'Ctrl+0'), 250);
const reportsM = menu('left:446px;top:356px', `<div class="mhd">Reports</div>` + item('Statistics') + item('What the AI wrote') + item('AI log') + item('History'), 210);
const helpM = menu('left:672px;top:356px', `<div class="mhd">Help</div>` + item('Help', 'F1') + item('Tips') + item('Tutorials') + sep + item('About'), 190);

const bottom = `<div class="f2">` + L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  strip: { reviewCount: 12 },
  page: dimPage,
  content: rootM + fileM + editM + insertM + formatM + viewM + reportsM + helpM,
  status: { style: 'Plain', words: '2,418 words', pages: 'book p. ~146/248', review: '12 to review' },
  ask: 'normal',
  extra: L.ann(5, 'The ☰ button holds the seven menus; there is no menu bar row', 20, 300, { w: 140 })
    + L.ann(6, 'The AI is set in Settings ▸ AI; its reports live in Reports. No AI menu, no Fit width, no Highlights', 1070, 470, { w: 300 }),
}) + `</div>`;

const css = `<style>
.frames{display:flex;flex-direction:column;gap:16px;background:#d9d9d6}
.frames .menu{min-width:0}
.frames .menu .mi{padding:4px 10px;align-items:baseline}
.frames .menu .mi.on:before{content:"✓";color:var(--accent);font-weight:600;width:12px;margin-right:-2px}
.frames .menu .mi .ex{display:block;color:var(--ink3);font-size:11.5px}
.frames .menu kbd{font-size:11px}
.frames .status{z-index:8}
.frames .f2 .strip .ib.mn{background:#e2e2df;border-radius:6px}
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
    scene: 'Not a moment. Top: Write mode with every status bar menu open at once. Bottom: the ☰ button’s seven menus opened together, to see what lives where.',
    on: 'top: the style palette (“What is this text?”, a filter, every style in its own look), the words menu, the ⌨ keys for where you are, Whole book / By chapter, Show (underlines, people, places, things, motifs, styles, notes, AI-written text), History (sessions as links, Open History), zoom 50 to 200 % with 100 % in the middle, the Ask button; bottom: the ☰ list and File, Edit, Insert, Format, View, Reports, Help with their items',
    off: 'a menu bar row, an AI menu (Connect, level: those are in Settings ▸ AI), Fit width, a Highlights menu, a provider icon in the status bar, bracket or slash shortcuts',
  }),
};
