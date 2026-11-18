// S07: The Navigator on Codex, on Research, and on Book with a filter (draft 8). Three narrow frames.
const L = require('../lib');
const I = L.icons;

const css = `<style>
.s07{position:relative;display:flex;gap:18px;padding:22px 28px 20px;background:#d9d9d6;align-items:flex-start}
.s07 .crop{width:446px}
.s07 .fr{position:relative;height:660px;background:var(--paper)}
.s07 .fr .nav{position:absolute;left:0;top:0;bottom:0;width:292px;z-index:1}
.s07 .fr .side{width:auto;position:absolute;left:292px;right:0;top:0;bottom:0;padding:14px 14px;font:12.5px/1.45 var(--ui);color:var(--ink2)}
.s07 .nrow .gc{color:var(--ink3)}
.s07 .nrow.doc .t{font-weight:600}
.s07 .nrow .dot{width:7px;height:7px;border-radius:50%;background:var(--accent);flex:none;margin-right:2px}
.s07 .nrow.ind{padding-left:22px}
.s07 .nrow.ind2{padding-left:34px;color:var(--ink2)}
.s07 .nrow.more .t{color:var(--ink3)}
.s07 .nrow .ico{width:14px;height:14px;flex:none;color:var(--ink3);display:inline-flex}
.s07 .nrow .ico svg{width:14px;height:14px}
.s07 .hit{font-weight:700;background:rgba(0,0,0,.07);border-radius:2px;padding:0 1px}
.s07 .res{display:block;padding:5px 6px;border-radius:6px}
.s07 .res .where{font:600 10.5px var(--ui);letter-spacing:.06em;text-transform:uppercase;color:var(--ink3);margin-bottom:1px}
.s07 .res .sn{font:12.5px/1.4 var(--text);color:var(--ink2)}
.s07 .sum{font:12px var(--ui);color:var(--ink3);padding:2px 6px 6px}
.s07 .lock{margin:10px 4px 0;border:1px solid var(--line);border-radius:8px;background:#fff;padding:8px 10px;font:12px/1.4 var(--ui);color:var(--ink2);display:flex;gap:8px}
.s07 .lock svg{width:14px;height:14px;flex:none;margin-top:1px;color:var(--ink3)}
.s07 .nav .filter.act{border-color:var(--ink3);color:var(--ink)}
.s07 .nbh{font:600 10.5px var(--ui);letter-spacing:.08em;text-transform:uppercase;color:var(--ink3);margin:10px 6px 3px}
.s07 .side p{margin:0 0 9px}
</style>`;

const folder = (t, n, o = {}) => `<div class="nrow${o.cls ? ' ' + o.cls : ''}"><span class="cv">${o.open ? I.chevron : I['chevron-right']}</span><span class="t">${t}</span>${n !== undefined ? `<span class="gc">${n}</span>` : ''}</div>`;
const leaf = (t, cls = 'ind', ico = '') => `<div class="nrow ${cls}"><span class="cv"></span>${ico ? `<span class="ico">${ico}</span>` : ''}<span class="t">${t}</span></div>`;
const raw = (h) => ({ type: 'raw', html: h });

// ---- Codex ----
const codexRows = [
  raw(`<div class="nrow doc"><span class="cv"></span><span class="t">Brief</span><span class="gc">sent with every AI request</span></div>`),
  raw(folder('Threads', '6 open')),
  raw(folder('People', 8, { open: true })),
  raw(leaf('Vega')), raw(leaf('Kit')), raw(leaf('Lena')), raw(leaf('Tomas, the pawnbroker')), raw(leaf('4 more…', 'ind more')),
  raw(folder('Places', 5)),
  raw(folder('Things', 4)),
  raw(folder('Motifs', 2)),
];
const codex = L.navigator({ rows: codexRows, section: 'Codex', placeholder: 'Filter entries' });
const codexSide = `<div class="side"><p><b>Brief</b> and <b>Threads</b> come first: what the book is, and what it has promised.</p><p>Entries are plain pages. Clicking one opens it in the center; Ctrl+click looks it up beside the text.</p></div>`;

// ---- Research ----
const G = I.view;
const researchRows = [
  raw(`<div class="nrow doc"><span class="cv"></span><span class="dot"></span><span class="t">Inbox</span><span class="gc">3</span></div>`),
  raw(folder('1950s harbor bars', 3, { open: true })),
  raw(leaf('Bars, 1952 (PDF)', 'ind', G)), raw(leaf('The Blue Lamp, photos', 'ind', G)), raw(leaf('Interview: an old bartender', 'ind', G)),
  raw(folder('Pawnshops', 2)),
  raw(folder('Police and the law', 4)),
  raw(folder('Clothing and weather', 5)),
  raw(leaf('Harbor map, 1953.jpg', 'nrow', G).replace('class="nrow nrow"', 'class="nrow"')),
];
const research = L.navigator({ rows: researchRows, section: 'Research', placeholder: 'Filter' });
const researchSide = `<div class="side"><p>The <b>Inbox</b> collects what you clip or drop in; sort it into a topic when you have a minute.</p><p>Topics are folders, one level deep, so everything is two clicks away.</p></div>`;

// ---- Book, filtered ----
const hit = (w) => `<span class="hit">${w}</span>`;
const filteredBody = `<div class="sum">12 matches in 5 chapters</div>`
  + `<div class="res"><div class="where">Ch. 5 · ${hit('Ledger')}, Kit’s</div><div class="sn">Title</div></div>`.replace(`${hit('Ledger')}, Kit’s`, 'Kit’s ' + hit('ledger'))
  + `<div class="res"><div class="where">Ch. 2 · The bartender</div><div class="sn">…a green ${hit('ledger')} under his arm…</div></div>`
  + `<div class="res"><div class="where">Ch. 7 · Lena’s warning</div><div class="sn">…writes everything down in a little green ${hit('ledger')}.”</div></div>`
  + `<div class="res"><div class="where">Ch. 8 · Closing time</div><div class="sn">…Kit’s ${hit('ledger')} was not on the shelf…</div></div>`
  + `<div class="res"><div class="where">Ch. 9 · The pawnshop</div><div class="sn">…the ${hit('ledger')} lay open on the counter…</div></div>`
  + `<div class="lock">${I.info}<span>Filtering: rows cannot be moved, added or removed. Clear the filter (Esc) to rearrange.</span></div>`;
let booknav = L.navigator({ rows: [raw(filteredBody)], section: 'Book', filterText: 'ledger' });

const ann = (n, t, y) => L.ann(n, t, 14, y, { w: 230 });
const frame = (label, nav, side, anns) => `<div class="crop"><div class="lbl">${label}</div><div class="fr">${nav}${side}${anns}</div></div>`;

const html = css + '<div class="s07">'
  + frame('Codex', codex, codexSide, ann(1, 'Brief first, then Threads, then the kinds, each with its count', 420) + ann(2, 'People opens in place; no deeper than one level', 520))
  + frame('Research', research, researchSide, ann(3, 'The Inbox is always on top, with its count', 360) + ann(4, 'Topics are folders; files sit inside them', 460))
  + frame('Book, with a filter', booknav, '<div class="side"><p>Type in the filter and the list becomes the matches: titles and text, each with its chapter.</p><p>Click a result to go there; <b>Esc</b> or ✕ brings the whole list back.</p></div>', ann(5, 'Matches in titles and text, with the sentence around them', 450) + ann(6, 'While a filter is on, nothing can be dragged or added', 560))
  + '</div>';

module.exports = {
  id: 'S07',
  file: 's07-navigator-codex-research',
  title: 'The Navigator on Codex, Research and a filter',
  width: 1440,
  height: 960,
  html,
  caption: L.caption({
    id: 'S07', title: 'The Navigator on Codex, Research, and a filtered Book',
    scene: 'The same left column in three states. On Codex it lists the Brief, Threads and the kinds of entry; on Research it lists the Inbox and the topics; on Book, after typing “ledger” in the filter, it lists only what matches, and says that nothing can be moved while the filter is on.',
    on: 'the switch Book · Codex · Research with the matching one pressed; Codex: Brief, Threads (6 open), People 8 (opened: Vega, Kit, Lena, Tomas, 4 more), Places 5, Things 4, Motifs 2; Research: Inbox 3 with a dot, the topic “1950s harbor bars” opened with three files, three more topics, one loose file; Book: the filter “ledger” with its ✕, “12 matches in 5 chapters”, five results with the sentence around the word, and the note about moving',
    off: 'chapters and scenes under a filter on Codex or Research, a second level of folders, drag handles while filtering, counts of marks, the center document (the gray notes beside the frames are explanations, not part of the app)',
  }),
};
