// S07: Styles. A sentence selected, the styles palette open above the status chip, every row in its own look.
// A crop under the window shows the same list in the right-click menu, Style as ▸.
const L = require('../lib');
const P = L.sample.chapter7Plain;

// the selected sentence is still Plain: the writer is about to make it a Thought
const col = `<div class="chap"><div class="num">CHAPTER 7</div><h1>Lena’s warning</h1></div>`
  + P.slice(0, 8).map((p, i) => {
    if (i === 6) p = p.replace('<span class="thought">It was a good lie.</span>', '<span class="sel">It was a good lie.</span>');
    return `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`;
  }).join('');

const rows = [
  ['Plain', ''],
  ['Chapter heading', 'st-ch'],
  ['Part heading', 'st-part'],
  ['Subheading', 'st-sub'],
  ['Block quote', 'st-bq'],
  ['Verse', 'st-verse'],
  ['Epigraph', 'st-epi'],
  ['Sign', 'st-sign'],
  ['Emphasis', 'st-em'],
  ['Strong', 'st-strong'],
  ['Thought', 'st-th', true],
  ['Foreign', 'st-for'],
  ['Material (never prints)', 'st-mat'],
];
const rowsHtml = (hovIdx) => rows.map(([t, c], i) => `<div class="mi${i === hovIdx ? ' hov' : ''}"><span class="${c}">${t}</span></div>`).join('');

const palette = `<div class="menu pal" style="left:10px;bottom:34px">`
  + `<div class="palh">What is this text?</div>`
  + `<div class="filter palf">${L.icons.magnifier}<span>Filter styles</span></div>`
  + rowsHtml(10) + `</div>`;

const css = `<style>
.s07 .pal{width:270px;padding:8px 5px 5px;font-family:var(--text);font-size:14.5px}
.s07 .palh{font:600 13px var(--ui);padding:2px 10px 8px}
.s07 .palf{margin:0 5px 6px;height:28px;padding:0 9px;font:12.5px var(--ui)}
.s07 .pal .mi{padding:3px 10px;line-height:1.5}
.s07 .pal .mi>span{display:inline-block}
.s07 .st-ch{font-size:21px;line-height:1.2}
.s07 .st-part{font-variant:small-caps;letter-spacing:.1em;font-size:15px}
.s07 .st-sub{font-weight:600;font-size:15px}
.s07 .st-bq{padding-left:16px;border-left:2px solid var(--line);font-size:13.5px}
.s07 .st-verse{padding-left:16px;font-size:14px}
.s07 .st-epi{font-style:italic;font-size:13.5px;color:var(--ink2)}
.s07 .st-sign{font-variant:small-caps;letter-spacing:.08em}
.s07 .st-em{font-style:italic}
.s07 .st-strong{font-weight:700}
.s07 .st-th{font-style:italic}
.s07 .st-for{font-style:italic}
.s07 .st-mat{font:12.5px var(--ui);color:var(--ink3);background:var(--soft);padding:0 6px;border-radius:3px;border:1px dashed var(--line)}
.s07.below{position:relative}
.s07 .crop .menu{position:absolute;left:30px;top:50px}
.s07 .crop .menu.sub{left:282px;top:142px;width:250px;padding:5px;font-family:var(--text);font-size:14.5px}
.s07 .crop .menu.sub .mi{padding:3px 10px;line-height:1.5}
</style>`;

const crop = `<div class="below s07"><div class="crop" style="width:580px;height:560px"><div class="lbl">Right-click: the same list under Style as</div>`
  + `<div class="menu" style="width:230px"><div class="mi">Cut</div><div class="mi">Copy</div><div class="mi">Paste</div><div class="msep"></div>`
  + `<div class="mi hov">Style as<span class="r">Ctrl+T ›</span></div><div class="mi">Add note<span class="r">Ctrl+Shift+M</span></div><div class="mi">Ask about this</div><div class="mi">Look up</div><div class="mi">Scene break here</div></div>`
  + `<div class="menu sub">${rowsHtml(-1)}</div></div>`
  + L.ann(5, 'The same list in all three places: the chip, Ctrl+T and the right-click menu', 640, 90, { w: 300 })
  + L.ann(6, 'A scene break is not a style: it is structure, and lives in Insert with chapters and parts', 640, 160, { w: 300 })
  + `</div>`;

const html = css + L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  page: L.pageCol(col, { paddingTop: 40 }),
  status: { style: 'Plain', words: '2,418 words', pages: 'book p. ~146/248', fixes: '3 fixes' },
  ask: 'normal',
  content: palette,
  extra: L.ann(1, 'The palette asks what the text is, not how it should look; the look is chosen later, per book, in Book', 40, 150, { w: 320 })
    + L.ann(2, 'Every row drawn in its working look: a thought is italic, a sign is small caps, a heading is large', 40, 236, { w: 320 })
    + L.ann(3, 'The chip always shows the style at the cursor, written in that style’s look; click it or press Ctrl+T', 300, 790, { w: 320 })
    + L.ann(4, 'The selected sentence is still Plain; Thought is the row under the mouse', 1050, 574, { w: 300 }),
}) + crop;

module.exports = {
  id: 'S07',
  file: 's07-styles',
  title: 'Styles',
  width: 1440,
  height: 1500,
  html: html.replace('<div class="win"', '<div class="win s07"'),
  caption: L.caption({
    id: 'S07', title: 'Styles',
    scene: 'The writer selected “It was a good lie.” and clicked the style chip at the bottom left. The palette opens above it, headed “What is this text?”, with a filter and the styles each drawn in its own look; the mouse is on Thought. Under the window, the same list inside the right-click menu.',
    on: 'chapter 7 with the selected sentence, the styles palette (What is this text?, Filter styles, Plain, Chapter heading, Part heading, Subheading, Block quote, Verse, Epigraph, Sign, Emphasis, Strong, Thought hovered, Foreign, Material (never prints)), the status chip reading Plain ▾, the Ask button; in the crop: the right-click menu with Style as ▸ and its submenu',
    off: 'a Scene break row in the palette (it is in Insert), a formatting toolbar, font or size controls, navigator, Reference panel, Search &amp; ask box, provider icon in the status bar',
  }),
};
