// S41: one Settings window with two scopes (replaces d7 S26's two windows). Search finds a setting in both scopes.
const L = require('../lib');
const K = require('../d8-kit-s37');

const css = `<style>
.s41 .grp{font:600 10.5px var(--ui);letter-spacing:.09em;text-transform:uppercase;color:var(--ink3);margin:14px 0 4px;display:flex;align-items:center;gap:8px}
.s41 .grp small{font:12px var(--ui);letter-spacing:0;text-transform:none;font-weight:400}
.s41 .hitrow{display:flex;gap:14px;padding:10px 12px;border:1px solid var(--line);border-radius:9px;margin:6px 0;align-items:center;background:var(--paper)}
.s41 .hitrow .path{color:var(--ink3);font-size:11.5px}
.s41 .hitrow .nm{font-size:13.5px;margin:1px 0 2px}
.s41 .hitrow .ds{color:var(--ink2);font-size:12.5px}
.s41 .hitrow .go{margin-left:auto;white-space:nowrap}
.s41 .hitrow>div:first-child{min-width:0}
.s41 .sx-h .seg i{font-style:normal;font-size:10.5px;background:var(--ink2);color:#fff;border-radius:8px;padding:0 6px;margin-left:6px}
.s41 .sx-h .seg span{padding:4px 11px}
.s41 .sx-nav small b{font-weight:600;color:var(--ink2)}
.s41 .sample{border:1px solid var(--line);border-radius:8px;padding:12px 16px;margin:8px 0 2px;font:15px/1.6 var(--text);color:var(--ink)}
.s41 .insets{display:flex;gap:16px}
.s41 .crop .dlg{position:relative}
.s41 .crop .wrapd{padding:14px;background:var(--soft)}
.s41 .sx-main{padding-top:12px}
</style>`;

const H = (t) => `<span class="hit">${t}</span>`;
const hit = (path, nm, ds, go) => `<div class="hitrow"><div><div class="path">${path}</div><div class="nm">${nm}</div><div class="ds">${ds}</div></div><span class="btn go">${go}</span></div>`;

const results = `<div class="sx-sub">5 settings match “chapter heading”, 3 in All my projects and 2 in This book</div>
  <div class="grp">All my projects <small>yours, on this computer</small></div>
  ${hit('Styles ▸ My styles', `${H('Chapter heading')} <span class="gray">(style)</span>`, 'Seeds every new book: Heading 1, prints 24 pt, centered, Enter then Body', 'Open')}
  ${hit('Writing', `Show ${H('chapter headings')} larger than the text`, 'On your screen only; the book’s printed headings are set by its theme', 'Open')}
  ${hit('Keys', `Insert ${H('chapter heading')}`, '<kbd>Ctrl+Enter</kbd> · works on every keyboard layout', 'Open')}
  <div class="grp">This book <small>stored in The Blue Lamp</small></div>
  ${hit('Styles ▸ This book’s styles', `${H('Chapter heading')} <span class="gray">(style)</span>`, 'Looks come from the book’s theme, Classic: prints 18 pt, small caps. Different from your My styles version', 'Open')}
  ${hit('Pages ▸ Book layout ▸ Chapter openers', `${H('Chapter heading')} format`, 'Numbering (7, VII, Seven, Chapter seven) and where the heading sits belong to the theme', 'Open in Pages')}`;

const dlgMain = K.dialog({ x: 60, y: 56, w: 940, h: 640, scope: 'none', active: '', search: 'chapter heading', main: results })
  .replace('<span${scope', '<span')
  .replace('All my projects</span><span>This book</span>', 'All my projects<i>3</i></span><span>This book<i>2</i></span>');

// insets
const bookGeneral = `<div class="sx-sub">Stored in this book, shared when you send it</div>
  ${K.row('Book goal', `<span class="inp">about 80,000 words by June 30</span>`)}
  ${K.row('Writing days', `<span class="inp">5 a week</span><span class="gray">1,000 words a day</span>`)}
  ${K.row('Spelling', `${K.dd('English (UK)', 130)}<span class="gray">+ 41 words of this book</span>`)}
  ${K.row('Language, title…', `<span class="lk">File ▸ Book details…</span>`)}`;
const writing = `<div class="sx-sub">Yours: none of this changes the book</div>
  ${K.row('Writing font', `${K.dd('Charter', 130)}<span class="gray">size</span>${K.dd('18', 60)}`)}
  ${K.row('Line spacing', `<span class="seg"><span>Tight</span><span class="on">Normal</span><span>Open</span></span>`)}
  ${K.row('Page width', `<span class="inp">66</span><span class="gray">characters per line</span>`)}
  ${K.row('Page color', `<span style="display:inline-flex;gap:8px"><span class="rd on"></span><span class="rd"></span><span class="rd"></span></span><span class="gray">Light · Sepia · Dark: see Reading &amp; seeing</span>`)}`;
const mini = (scope, active, main, h) => `<div class="wrapd">${K.dialog({ x: 0, y: 0, w: 660, h, scope, active, main, style: 'position:relative;left:auto;top:auto' })}</div>`;

const html = css + K.css + K.textWin({
  extra: dlgMain
    + L.ann(1, 'One window, two scopes. “All my projects” is yours; “This book” travels with the book. The numbers show where a search found something', 1020, 96, { w: 380 })
    + L.ann(2, 'Search looks in both scopes and in every section at once; each result says where it lives and opens straight there', 1020, 280, { w: 380 })
    + L.ann(3, 'The same name can exist in both: your My styles seeds new books, the book’s own version is set by its theme', 1020, 480, { w: 380 })
    + L.ann(4, 'Sections: General, Writing, Reading & seeing, Styles, Keys, AI, Privacy, Tips', 1020, 620, { w: 380 }),
});
const below = `<div class="below"><div class="insets">
  <div class="crop" style="width:690px"><div class="lbl">This book ▸ General (sections that are only yours are gray)</div>${mini('book', 'General', bookGeneral, 420)}</div>
  <div class="crop" style="width:690px"><div class="lbl">All my projects ▸ Writing</div>${mini('all', 'Writing', writing, 420)}</div>
</div></div>`;

module.exports = {
  id: 'S41', file: 's41-settings', title: 'Settings', width: 1440, height: 1330,
  html: `<div class="s41">${html}${below}</div>`,
  caption: L.caption({
    id: 'S41', title: 'Settings',
    scene: 'Tools ▸ Settings… (Ctrl+,). The writer searched “chapter heading” and Settings found it in both scopes: three results in All my projects, two in This book. Under the window, two other states: This book ▸ General, and All my projects ▸ Writing.',
    on: 'the Settings window with its scope switch (All my projects 3 · This book 2), the search box holding “chapter heading”, the sections General · Writing · Reading & seeing · Styles (My styles) · Keys · AI · Privacy · Tips; five results in two groups, each with its path and an Open button; the insets: This book ▸ General (goal, writing days, spelling, a link to File ▸ Book details) with the sections that are only yours grayed, and Writing (font, size, line spacing, page width, page color)',
    off: 'a second Settings or Project settings window, an Apply button, the Reading & seeing and Keys contents (S42 and S48 show those), the book’s title, language and ISBN (they live in File ▸ Book details)',
  }),
};
