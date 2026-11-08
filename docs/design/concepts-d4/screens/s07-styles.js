// S07: Styles (draft 5). A sentence selected, the palette open above the status chip: style names in the
// interface font, a short sample in each style’s look at the right, the filter “What is this text?” on top and
// “+ New style…” at the bottom. Under the window: Chapter heading applied mid-chapter (the split and its notice),
// and the text right-click menu.
const L = require('../lib');
const P = L.sample.chapter7Plain;
const I = L.icons;

// the selected sentence is still Plain: the writer is about to make it a Thought
const col = `<div class="chap"><div class="num">CHAPTER 7</div><h1>Lena’s warning</h1></div>`
  + P.slice(0, 8).map((p, i) => {
    if (i === 6) p = p.replace('<span class="thought">It was a good lie.</span>', '<span class="sel">It was a good lie.</span>');
    return `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`;
  }).join('');

// [name, sample class, sample]
const paragraphStyles = [
  ['Plain', 'st-plain', 'Aa'],
  ['Chapter heading', 'st-ch', 'Closing time'],
  ['Part heading', 'st-part', 'Part Two'],
  ['Subheading', 'st-sub', 'Aa'],
  ['Block quote', 'st-bq', 'Aa'],
  ['Verse', 'st-verse', 'Aa'],
  ['Epigraph', 'st-epi', 'Aa'],
  ['Letter', 'st-let', 'Dear Vega,'],
  ['Sign', 'st-sign', 'Closed'],
  ['Material (never prints)', 'st-mat', 'Aa'],
];
const textStyles = [
  ['Emphasis', 'st-em', 'Aa'],
  ['Strong', 'st-strong', 'Aa'],
  ['Thought', 'st-th', 'she thought'],
  ['Foreign', 'st-for', 'déjà vu'],
];
const srow = ([t, c, s], hov) => `<div class="mi${hov ? ' hov' : ''}"><span class="nm">${t}</span><span class="smp ${c}">${s}</span></div>`;
const palette = `<div class="menu pal" style="left:10px;bottom:34px">`
  + `<div class="filter palf foc">${I.magnifier}<span>What is this text?</span></div>`
  + `<div class="mhd">Paragraph</div>` + paragraphStyles.map((r) => srow(r)).join('')
  + `<div class="mhd">Text</div>` + textStyles.map((r) => srow(r, r[0] === 'Thought')).join('')
  + `<div class="msep"></div><div class="mi newst"><span class="nm">+ New style…</span></div>`
  + `</div>`;

// ---------- crops ----------
// (1) Chapter heading applied to a paragraph in the middle of chapter 7: a new chapter starts there
const endOf7 = 'Outside, the rain had turned to the fine kind that does not fall so much as hang. Vega walked the long way around, past the station steps, because it was the way Kit always walked.';
const startOf8 = 'By the time she reached her own door the bar would be closing, Lena wiping the same glass, the back room dark or not dark. Vega did not turn around to check.';
const crop1 = `<div class="crop" style="width:700px"><div class="lbl">Chapter heading applied in the middle of chapter 7</div>`
  + `<div class="cbody" style="height:360px"><div class="col"><p>${endOf7}</p>`
  + `<div class="chap"><div class="num">CHAPTER 8</div><h1>Closing time<span class="cursor"></span></h1></div>`
  + `<p>${startOf8}</p></div>`
  + L.notice('New chapter 8 started here', { kind: 'fix' })
  + L.ann(4, 'A heading is where a chapter begins: the styled paragraph became chapter 8’s heading, the text after it its first paragraph; a notice with Undo', 262, 120, { w: 380 })
  + `</div></div>`;

// (2) the text right-click menu, Thought the current row
const mi = (t, o = {}) => `<div class="mi${o.hov ? ' hov' : ''}">${o.icon || ''}${t}${o.r ? `<span class="r">${o.r}</span>` : ''}</div>`;
const rmenu = `<div class="menu" style="left:24px;top:22px;width:260px">`
  + mi('Style as', { r: 'Ctrl+T ▸' }) + mi('Emphasis') + mi('Thought', { hov: true })
  + `<div class="msep"></div>` + mi('Add note', { icon: `<span class="mic">${I.note}</span>`, r: 'Ctrl+Shift+M' }) + mi('Ask about this', { r: 'Ctrl+K' })
  + `<div class="msep"></div>` + mi('Find in the book', { r: 'Ctrl+F' })
  + `<div class="msep"></div>` + mi('Cut', { r: 'Ctrl+X' }) + mi('Copy', { r: 'Ctrl+C' }) + mi('Paste', { r: 'Ctrl+V' })
  + `</div>`;
const crop2 = `<div class="crop" style="width:310px"><div class="lbl">Right-click on the text</div><div class="cbody" style="height:360px">${rmenu}</div></div>`;

const css = `<style>
.s07 .pal{width:300px;padding:8px 5px 5px}
.s07 .palf{margin:0 5px 4px;height:28px;padding:0 9px;font:12.5px var(--ui)}
.s07 .palf.foc{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-tint)}
.s07 .pal .mhd{padding:7px 10px 2px}
.s07 .pal .mi{display:flex;align-items:center;justify-content:space-between;gap:12px;height:29px;padding:0 10px}
.s07 .pal .nm{font:13px var(--ui);color:var(--ink)}
.s07 .pal .newst .nm{color:var(--ink2)}
.s07 .pal .smp{font:15px/1 var(--text);color:var(--ink3);white-space:nowrap;flex:none}
.s07 .st-ch{font-size:19px}
.s07 .st-part{font-variant:small-caps;letter-spacing:.1em;font-size:13.5px}
.s07 .st-sub{font-weight:600;font-size:14px}
.s07 .st-bq{padding-left:8px;border-left:2px solid var(--ink4);font-size:14px}
.s07 .st-verse{padding-left:10px;font-size:14px}
.s07 .st-epi{font-style:italic;font-size:13.5px}
.s07 .st-let{font-size:14px;padding-left:10px}
.s07 .st-sign{font-variant:small-caps;letter-spacing:.1em;font-size:14px}
.s07 .st-mat{font:11.5px var(--ui);color:var(--ink3);background:var(--soft);padding:2px 5px;border-radius:3px;border:1px dashed var(--ink4)}
.s07 .st-em,.s07 .st-th,.s07 .st-for{font-style:italic}
.s07 .st-strong{font-weight:700}
.s07.below{position:relative}
.s07 .crop .cbody{position:relative;background:var(--paper);overflow:hidden}
.s07 .crop .col{position:relative;width:560px;margin:0 auto;padding:16px 0 0;font:16px/1.6 var(--text);color:var(--ink)}
.s07 .crop .col p{text-indent:0;margin:0}
.s07 .crop .chap{margin:14px 0 10px;padding-top:16px;border-top:1px solid var(--line2)}
.s07 .crop .chap .num{font-size:12px;margin-bottom:2px}
.s07 .crop .chap h1{font-size:26px}
.s07 .crop .cursor{height:1.05em;vertical-align:-4px}
.s07 .crop .menu .mic{display:inline-flex;width:15px;color:var(--note)}
.s07 .crop .menu .mic svg{width:15px;height:15px}
.s07 .crop .menu .mi{padding-left:10px}
.s07 .crop .menu .mi:not(:has(.mic)){padding-left:34px}
</style>`;

const html = css + L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  page: L.pageCol(col, { paddingTop: 40 }),
  status: { style: 'Plain', words: '2,418 words', pages: 'book p. ~146/248', fixes: '3 fixes' },
  ask: 'normal',
  content: palette,
  extra: L.ann(1, 'Style names in the interface font, regular, all the same size: the list reads as a list', 40, 104, { w: 300 })
    + L.ann(2, 'A short sample in each style’s working look at the right, in gray; the final look is chosen per book, in Book', 40, 168, { w: 300 })
    + L.ann(5, 'With no selection, a paragraph style takes the whole paragraph; a text style takes the word under the cursor or what you type next', 40, 232, { w: 300 })
    + L.ann(3, 'Opened from the chip (the style at the cursor, in its look), Ctrl+T or right-click ▸ Style as; “+ New style…” asks a name and what it is based on', 332, 788, { w: 320 }),
}) + `<div class="below s07">${crop1}${crop2}`
  + L.ann(6, 'Every menu walks with the arrows and Enter, and typing filters it; the only icons are the ones the app already uses (the note), so the menu teaches the icon', 1080, 60, { w: 290 })
  + `</div>`;

module.exports = {
  id: 'S07',
  file: 's07-styles',
  title: 'Styles',
  width: 1440,
  height: 1300,
  html: html.replace('<div class="win"', '<div class="win s07"'),
  caption: L.caption({
    id: 'S07', title: 'Styles',
    scene: 'The writer selected “It was a good lie.” and clicked the style chip at the bottom left. The palette opens above it with the filter “What is this text?”, the style names in the interface font and a sample of each look at the right; the mouse is on Thought. Under the window: Chapter heading applied in the middle of chapter 7, and the text right-click menu.',
    on: 'chapter 7 with the selected sentence, the palette (filter “What is this text?”; Paragraph: Plain, Chapter heading, Part heading, Subheading, Block quote, Verse, Epigraph, Letter, Sign, Material (never prints); Text: Emphasis, Strong, Thought hovered, Foreign; “+ New style…”), the status chip reading Plain ▾ and the other status pills, the strip with the modes at the right, the Ask button; crop 1: the end of chapter 7, the new “CHAPTER 8 · Closing time” heading with the cursor, its first paragraph, the notice “New chapter 8 started here · Undo Ctrl+Z”; crop 2: the right-click menu (Style as ▸, Emphasis, Thought, Add note with the note icon, Ask about this, Find in the book, Cut, Copy, Paste) with shortcuts',
    off: 'a Scene break row in the palette (it is structure: Insert and the right-click menu), a formatting toolbar, font or size controls, the Style as submenu, Look up and Find in the book (shown in S31), navigator, Reference panel, Search &amp; ask box, provider icon in the status bar',
  }),
};
