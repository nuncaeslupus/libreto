// S07: Styles (draft 6). A Thought selected, the chip in the Thought look, the palette open above it: each row in its
// own look at one size, the key at the right where there is one, a filter on top, “+ New style…” at the bottom and the
// New style dialog beside it. Under the window: Chapter heading applied mid-chapter (the split and its notice), the
// text right-click menu with a selection, and ☰ ▸ Format.
const L = require('../lib');
const P = L.sample.chapter7Plain;
const I = L.icons;

// the selected sentence is a Thought: the chip shows it in its look
// scrolled to the middle of chapter 7, so the selection sits above the palette and the dialog
const col = P.slice(3, 10).map((p, i) => {
  if (i === 3) p = p.replace('<span class="thought">It was a good lie.</span>', '<span class="thought sel">It was a good lie.</span>');
  return `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`;
}).join('');

// [name, look class, key]: each row in its own look, all at one size
const paragraphStyles = [
  ['Plain', 'st-plain'], ['Chapter heading', 'st-ch'], ['Part heading', 'st-part'], ['Subheading', 'st-sub'],
  ['Block quote', 'st-bq'], ['Verse', 'st-verse'], ['Epigraph', 'st-epi'], ['Letter', 'st-let'], ['Sign', 'st-sign'],
  ['Material (never prints)', 'st-mat'],
];
const textStyles = [['Emphasis', 'st-em', 'Ctrl+I'], ['Strong', 'st-strong', 'Ctrl+B'], ['Thought', 'st-th'], ['Foreign', 'st-for']];
const srow = ([t, c, k], o = {}) => `<div class="mi${o.hov ? ' hov' : ''}${o.cur ? ' cur' : ''}"><span class="pk">${o.cur ? '✓' : ''}</span><span class="nm ${c}">${t}</span>${k ? `<span class="r">${k}</span>` : ''}</div>`;
const palette = `<div class="menu pal" style="left:10px;bottom:34px">`
  + `<div class="filter palf foc">${I.magnifier}<span>Filter styles</span></div>`
  + `<div class="mhd">Paragraph</div>` + paragraphStyles.map((r) => srow(r)).join('')
  + `<div class="mhd">Text</div>` + textStyles.map((r) => srow(r, { cur: r[0] === 'Thought' })).join('')
  + `<div class="msep"></div><div class="mi newst hov"><span class="pk"></span><span class="nm">+ New style…</span></div>`
  + `</div>`;

// the small New style dialog, opened from “+ New style…”
const look = (t, on, st = '') => `<span class="lkop${on ? ' on' : ''}"><span class="cb${on ? ' on' : ''}"></span><span style="${st}">${t}</span></span>`;
const newStyle = `<div class="dlg nsd" style="left:330px;bottom:34px;width:340px"><div class="dlg-h">New style</div><div class="dlg-b">`
  + `<div class="field"><label>Name</label><div class="inp foc">Whisper<span class="cursor" style="height:15px;vertical-align:-2px"></span></div></div>`
  + `<div class="field"><label>It is</label><div class="seg"><span>Paragraph</span><span class="on">Text</span></div></div>`
  + `<div class="field"><label>Based on</label><div class="inp dd2">Thought</div></div>`
  + `<div class="field" style="margin-bottom:0"><label>Working look</label><div class="looks">${look('Italic', true, 'font-style:italic')}${look('Small caps', false, 'font-variant:small-caps')}${look('Indent', false)}<span class="lkop"><span class="cb on"></span>Color<span class="swc"></span></span></div></div>`
  + `<div class="nsprev">She thought: <span>not here, not now</span></div>`
  + `</div><div class="dlg-f"><span class="sp"></span><span class="btn">Cancel</span><span class="btn pri">Create</span></div></div>`;

// ---------- crops ----------
// (1) Chapter heading applied to a paragraph in the middle of chapter 7: a new chapter starts there
const endOf7 = 'Outside, the rain had turned to the fine kind that does not fall so much as hang. Vega walked the long way around, past the station steps, because it was the way Kit always walked.';
const startOf8 = 'By the time she reached her own door the bar would be closing, Lena wiping the same glass, the back room dark or not dark. Vega did not turn around to check.';
const crop1 = `<div class="crop" style="width:620px"><div class="lbl">Chapter heading applied in the middle of chapter 7</div>`
  + `<div class="cbody" style="height:430px"><div class="col"><p>${endOf7}</p>`
  + `<div class="chap"><div class="num">CHAPTER 8</div><h1>Closing time<span class="cursor"></span></h1></div>`
  + `<p>${startOf8}</p></div>`
  + L.notice('New chapter 8 started here', { kind: 'fix' })
  + L.ann(6, 'A heading is where a chapter begins: the styled paragraph became chapter 8’s heading, the text after it its first paragraph; a notice with Undo', 222, 118, { w: 340 })
  + `</div></div>`;

// (2) the text right-click menu with a selection (as in S31)
const mi = (t, o = {}) => `<div class="mi${o.hov ? ' hov' : ''}"><span class="mic">${o.icon || ''}</span>${t}${o.r ? `<span class="r">${o.r}</span>` : ''}</div>`;
const rmenu = `<div class="menu" style="left:20px;top:18px;width:282px">`
  + mi('Emphasis', { r: 'Ctrl+I' }) + mi('Strong', { r: 'Ctrl+B' }) + mi('Style as', { r: 'Ctrl+T ▸', hov: true })
  + `<div class="msep"></div>` + mi('Add note', { icon: `<span style="color:var(--note);display:inline-flex">${I.note}</span>` }) + mi('Ask the AI about this', { icon: I.spark, r: 'Ctrl+K' })
  + mi('Find in the book', { r: 'Ctrl+F' })
  + `<div class="msep"></div>` + mi('Cut', { r: 'Ctrl+X' }) + mi('Copy', { r: 'Ctrl+C' }) + mi('Paste', { r: 'Ctrl+V' })
  + `</div>`;
const crop2 = `<div class="crop" style="width:330px"><div class="lbl">Right-click on the selection</div><div class="cbody" style="height:430px">${rmenu}</div></div>`;

// (3) ☰ ▸ Format: the two styles every keyboard knows first, the rest one level down
const fmenu = `<div class="menu" style="left:20px;top:18px;width:250px"><div class="mhd">Format</div>`
  + mi('Emphasis', { r: 'Ctrl+I' }) + mi('Strong', { r: 'Ctrl+B' }) + `<div class="msep"></div>` + mi('Style as', { r: 'Ctrl+T ▸' }) + mi('Styles…')
  + `</div>`;
const crop3 = `<div class="crop" style="width:390px"><div class="lbl">☰ ▸ Format</div><div class="cbody" style="height:430px">${fmenu}</div></div>`;

const css = `<style>
.s07 .pal{width:300px;padding:8px 5px 5px}
.s07 .palf{margin:0 5px 4px;height:28px;padding:0 9px;font:12.5px var(--ui)}
.s07 .palf.foc{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-tint)}
.s07 .pal .mhd{padding:7px 10px 2px}
.s07 .pal .mi{display:flex;align-items:center;gap:6px;height:28px;padding:0 10px 0 6px}
.s07 .pal .pk{width:14px;flex:none;color:var(--accent);font-size:12px;text-align:center}
/* every row in its own look, all at one size */
.s07 .pal .nm{font:15px/1 var(--text);color:var(--ink);white-space:nowrap}
.s07 .pal .newst .nm{font:13px var(--ui);color:var(--ink)}
.s07 .pal .st-ch{font-weight:600!important}
.s07 .pal .st-part{font-variant:small-caps;letter-spacing:.1em}
.s07 .pal .st-sub{font-weight:600!important;font-family:var(--ui)!important;font-size:14px!important}
.s07 .pal .st-bq{padding-left:8px;border-left:2px solid var(--ink4)}
.s07 .pal .st-verse{padding-left:16px}
.s07 .pal .st-epi{font-style:italic;padding-left:16px}
.s07 .pal .st-let{padding-left:8px}
.s07 .pal .st-sign{font-variant:small-caps;letter-spacing:.1em}
.s07 .pal .st-mat{font:12.5px var(--ui)!important;color:var(--ink3)!important;background:var(--soft);padding:3px 6px;border-radius:3px;border:1px dashed var(--ink4)}
.s07 .pal .st-em,.s07 .pal .st-th,.s07 .pal .st-for{font-style:italic}
.s07 .pal .st-strong{font-weight:700!important}
.s07 .pal .st-for{color:#5a6b7d!important}
.s07 .nsd .dlg-b{padding:14px 18px 12px}
.s07 .nsd .field{margin-bottom:11px}
.s07 .seg{display:inline-flex;border:1px solid var(--line);border-radius:7px;overflow:hidden;align-self:flex-start}
.s07 .seg span{padding:5px 14px;font-size:12.5px;color:var(--ink2)}
.s07 .seg span.on{background:var(--accent-tint);color:var(--accent);font-weight:600}
.s07 .inp.dd2:after{content:" ▾";font-size:10px;color:var(--ink3);float:right;margin-top:3px}
.s07 .looks{display:flex;gap:14px;flex-wrap:wrap;font-size:13px}
.s07 .lkop{display:inline-flex;align-items:center;gap:6px}
.s07 .lkop .swc{width:14px;height:14px;border-radius:50%;background:#6a5a8c;display:inline-block}
.s07 .nsprev{margin-top:12px;padding:8px 10px;background:var(--soft);border-radius:6px;font:15px var(--text);color:var(--ink2)}
.s07 .nsprev span{font-style:italic;color:#6a5a8c}
.s07.below{position:relative}
.s07 .crop .cbody{position:relative;background:var(--paper);overflow:hidden}
.s07 .crop .col{position:relative;width:560px;margin:0 auto;padding:16px 0 0;font:16px/1.6 var(--text);color:var(--ink)}
.s07 .crop .col p{text-indent:0;margin:0}
.s07 .crop .chap{margin:14px 0 10px;padding-top:16px;border-top:1px solid var(--line2)}
.s07 .crop .chap .num{font-size:12px;margin-bottom:2px}
.s07 .crop .chap h1{font-size:26px}
.s07 .crop .cursor{height:1.05em;vertical-align:-4px}
.s07 .crop .menu .mic{display:inline-flex;width:15px;flex:none;color:var(--ink2)}
.s07 .crop .menu .mic svg{width:15px;height:15px}
.s07 .crop .menu .mi{padding-left:10px}
</style>`;

const html = css + L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  page: L.pageCol(col, { paddingTop: 28 }),
  strip: { reviewCount: 12 },
  status: { style: 'Thought', styleLook: 'thought', words: '2,418 words', pages: 'book p. ~146/248', review: '12 to review' },
  ask: 'normal',
  content: palette + newStyle,
  extra: L.ann(1, 'The chip at the bottom left shows the style at the cursor in that style’s look: here Thought, in italics. Click it, Ctrl+T, or right-click ▸ Style as', 690, 790, { w: 330 })
    + L.ann(2, 'The palette: each row in its own look at one size, the key at the right where there is one, a filter on top. Palettes filter as you type; right-click menus only walk', 14, 214, { w: 300 })
    + L.ann(3, '“+ New style…” opens a small dialog: the name, paragraph or text, what it is based on, and its working look (italic, small caps, indent, a color)', 690, 682, { w: 320 })
    + L.ann(4, 'A style says what the text is, not how it looks: the working look only lets you see it; the final look is chosen per project, in Book', 1060, 150, { w: 300 })
    + L.ann(5, 'With no selection, a paragraph style takes the whole paragraph; a text style takes the word under the cursor or what you type next', 1060, 250, { w: 300 }),
}) + `<div class="below s07">${crop1}${crop2}${crop3}` + L.ann(7, 'Right-click with a selection: Emphasis and Strong first, Style as ▸ for the rest, then Add note, Ask the AI (spark), Find, Cut / Copy / Paste', 676, 360, { w: 290 })
  + L.ann(8, 'Emphasis (Ctrl+I) and Strong (Ctrl+B), the two text styles every keyboard knows, come first; Thought, Foreign and the rest are under Style as ▸', 1024, 244, { w: 330 }) + `</div>`;

module.exports = {
  id: 'S07',
  file: 's07-styles',
  title: 'Styles',
  width: 1440,
  height: 1401,
  html: html.replace('<div class="win"', '<div class="win s07"'),
  caption: L.caption({
    id: 'S07', title: 'Styles',
    scene: 'The writer selected “It was a good lie.”, a Thought, so the chip at the bottom left reads Thought in italics. A click on the chip opened the palette above it, every style in its own look; “+ New style…” opened the small dialog beside it, where a text style “Whisper”, based on Thought, gets its working look. Under the window: Chapter heading applied in the middle of chapter 7, the right-click menu on the selection, and ☰ ▸ Format.',
    on: 'chapter 7 mid-scroll with the selected Thought, the palette (Filter styles; Paragraph: Plain, Chapter heading, Part heading, Subheading, Block quote, Verse, Epigraph, Letter, Sign, Material (never prints); Text: Emphasis Ctrl+I, Strong Ctrl+B, Thought checked, Foreign; “+ New style…”), each name in its own look at one size, the New style dialog (Name “Whisper”, It is Paragraph / Text with Text on, Based on Thought, Working look: Italic on, Small caps, Indent, Color on with a swatch, a preview, Cancel, Create), the chip “Thought” in italics and the other status items (2,418 words, book p. ~146/248, ● 12 to review, ⌨, Whole book, Show, History, zoom), the strip with the tabs and 12 on Review, the Ask button; crop 1: the end of chapter 7, the new “CHAPTER 8 · Closing time” heading with the cursor, its first paragraph, the notice “New chapter 8 started here · Undo Ctrl+Z · Got it”; crop 2: the right-click menu (Emphasis, Strong, Style as ▸, Add note, Ask the AI about this with the spark, Find in the book, Cut, Copy, Paste) with keys; crop 3: Format (Emphasis Ctrl+I, Strong Ctrl+B, Style as ▸, Styles…)',
    off: 'a Scene break row in the palette (it is structure: Insert and the right-click menu), a formatting toolbar, font or size controls, the Style as submenu open, Look up (the selection is not a name), the final looks chosen in Book, the background review of headings (“Reviewing 7 of 11 · Stop”), navigator, Reference panel',
  }),
};
