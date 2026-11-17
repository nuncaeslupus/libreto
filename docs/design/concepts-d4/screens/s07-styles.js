// S07: Styles (draft 7). A Thought selected with the floating bar over it (Emphasis · Strong · Style as ▾), the chip
// in the Thought look, the palette open above it (each row in its own look, keys at the right, “+ New style…”), and
// the New style dialog: name, Paragraph/Text, face, size, B I U, indent, text color, a sample. Under the window: Chapter
// heading applied mid-chapter, the right-click menu on a selection, and the Format menu.
const L = require('../lib');
const P = L.sample.chapter7Plain;
const I = L.icons;
const FB = { x: 432, y: 206 }; // window coordinates: the floating bar, just over the selection

// the selected sentence is a Thought: the chip shows it in its look
// scrolled to the middle of chapter 7, so the selection sits above the palette and the dialog
const col = P.slice(4, 10).map((p, i) => {
  if (i === 2) p = p.replace('<span class="thought">It was a good lie.</span>', '<span class="thought sel">It was a good lie.</span>');
  return `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`;
}).join('');

// [name, look class, key]: each row in its own look, all at one size
const paragraphStyles = [
  ['Plain', 'st-plain'], ['Chapter heading', 'st-ch'], ['Subheading', 'st-sub'], ['Letter', 'st-let'], ['Sign', 'st-sign'],
  ['Verse', 'st-verse'], ['Not printed', 'st-mat'],
];
const textStyles = [['Emphasis', 'st-em', 'Ctrl+I'], ['Strong', 'st-strong', 'Ctrl+B'], ['Thought', 'st-th'], ['Foreign', 'st-for']];
const srow = ([t, c, k], o = {}) => `<div class="mi${o.hov ? ' hov' : ''}${o.cur ? ' cur' : ''}"><span class="pk">${o.cur ? '✓' : ''}</span><span class="nm ${c}">${t}</span>${k ? `<span class="r">${k}</span>` : ''}</div>`;
const palette = `<div class="menu pal" style="left:10px;bottom:34px">`
  + `<div class="filter palf foc">${I.magnifier}<span>Filter styles</span></div>`
  + `<div class="mhd">Paragraph</div>` + paragraphStyles.map((r) => srow(r)).join('')
  + `<div class="mhd">Text</div>` + textStyles.map((r) => srow(r, { cur: r[0] === 'Thought' })).join('')
  + `<div class="msep"></div><div class="mi newst hov"><span class="pk"></span><span class="nm">+ New style…</span></div>`
  + `</div>`;

// the New style dialog, opened from “+ New style…”: simple on purpose, nothing is “based on” anything
const seg = (opts, on, st = []) => `<div class="seg">${opts.map((t, i) => `<span class="${t === on ? 'on' : ''}" style="${st[i] || ''}">${t}</span>`).join('')}</div>`;
// text colors: never one of the four mark colors (red, blue, green, amber)
const tcolors = ['#222326', '#6b6e74', '#5b4a86', '#7a4a3a', '#2f5d6b', '#8a4f72']
  .map((c, i) => `<span class="tcol${i === 2 ? ' on' : ''}" style="background:${c}"></span>`).join('');
const newStyle = `<div class="dlg nsd" style="left:326px;bottom:20px;width:440px"><div class="dlg-h">New style</div><div class="dlg-b">`
  + `<div class="field"><label>Name</label><div class="inp foc">Whisper<span class="cursor" style="height:15px;vertical-align:-2px"></span></div></div>`
  + `<div class="frow"><label>It is</label>${seg(['Paragraph', 'Text'], 'Text')}</div>`
  + `<div class="frow"><label>Face</label>${seg(['Serif', 'Sans', 'Mono'], 'Serif', ['font-family:var(--text)', 'font-family:var(--ui)', 'font-family:monospace'])}</div>`
  + `<div class="frow"><label>Size</label>${seg(['Small', 'Normal', 'Large', 'Larger', 'Largest'], 'Small')}</div>`
  + `<div class="frow"><label>Look</label><div class="seg biu"><span style="font-weight:700">B</span><span class="on" style="font-style:italic;font-family:var(--text)">I</span><span style="text-decoration:underline">U</span></div>`
  + `<span class="lkop"><span class="cb"></span>Indent</span></div>`
  + `<div class="frow"><label>Text color</label><div class="tcols">${tcolors}</div></div>`
  + `<div class="nsprev"><small>Sample</small>She thought: <span>not here, not now.</span></div>`
  + `</div><div class="dlg-f"><span class="sp"></span><span class="btn">Cancel</span><span class="btn pri">Create</span></div></div>`;

// the floating bar over a selection: the bridge for the two styles every writer reaches for
const fbar = (x, y) => `<div class="fbar" style="left:${x}px;top:${y}px"><span><i>Emphasis</i></span><span><b>Strong</b></span><span class="fsa">Style as ▾</span></div>`;

// ---------- crops ----------
// (1) Chapter heading applied to a paragraph in the middle of chapter 7: a new chapter starts there
const endOf7 = 'Outside, the rain had turned to the fine kind that does not fall so much as hang. Vega walked the long way around, past the station steps, because it was the way Kit always walked.';
const startOf8 = 'By the time she reached her own door the bar would be closing, Lena wiping the same glass, the back room dark or not dark. Vega did not turn around to check.';
const crop1 = `<div class="crop" style="width:600px"><div class="lbl">Chapter heading applied in the middle of chapter 7</div>`
  + `<div class="cbody" style="height:430px"><div class="col"><p>${endOf7}</p>`
  + `<div class="chap"><div class="num">CHAPTER 8</div><h1>Closing time<span class="cursor"></span></h1></div>`
  + `<p>${startOf8}</p></div>`
  + L.notice('New chapter 8 started here', { kind: 'fix' })
  + L.ann(7, 'A chapter’s heading is its first line in Chapter heading: applied mid-chapter, it starts a new chapter there, with a notice and Undo', 212, 118, { w: 340 })
  + `</div></div>`;

// (2) the text right-click menu with a selection (as in S31)
const mi = (t, o = {}) => `<div class="mi${o.hov ? ' hov' : ''}"><span class="mic">${o.icon || ''}</span>${t}${o.r ? `<span class="r">${o.r}</span>` : ''}</div>`;
const rmenu = `<div class="menu" style="left:20px;top:18px;width:282px">`
  + mi('Emphasis', { r: 'Ctrl+I' }) + mi('Strong', { r: 'Ctrl+B' }) + mi('Style as', { r: '▸', hov: true })
  + `<div class="msep"></div>` + mi('Add note', { icon: `<span style="color:var(--note);display:inline-flex">${I.note}</span>` }) + mi('Ask the AI about this', { icon: I.spark })
  + mi('Add to the Codex', { r: '▸' }) + mi('Send to the Inbox') + mi('Find in the book')
  + `<div class="msep"></div>` + mi('Cut', { r: 'Ctrl+X' }) + mi('Copy', { r: 'Ctrl+C' }) + mi('Paste', { r: 'Ctrl+V' })
  + `</div>`;
const crop2 = `<div class="crop" style="width:330px"><div class="lbl">Right-click on the selection</div><div class="cbody" style="height:430px">${rmenu}</div></div>`;

// (3) Format in the menu bar: the two styles every keyboard knows, the rest one level down
const fmenu = `<div class="menu" style="left:20px;top:18px;width:250px">`
  + mi('Emphasis', { r: 'Ctrl+I' }) + mi('Strong', { r: 'Ctrl+B' }) + `<div class="msep"></div>` + mi('Style as', { r: '▸' })
  + `</div>`;
const crop3 = `<div class="crop" style="width:410px"><div class="lbl">Format, in the menu bar</div><div class="cbody" style="height:430px">${fmenu}</div></div>`;

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
.s07 .pal .st-xx{font:12.5px var(--ui)!important;color:var(--ink3)!important;background:var(--soft);padding:3px 6px;border-radius:3px;border:1px dashed var(--ink4)}
.s07 .pal .st-em,.s07 .pal .st-th,.s07 .pal .st-for{font-style:italic}
.s07 .pal .st-strong{font-weight:700!important}
.s07 .pal .st-for{color:#5a6b7d!important}
.s07 .nsd .dlg-b{padding:14px 18px 12px}
.s07 .nsd .field{margin-bottom:12px}
.s07 .frow{display:flex;align-items:center;gap:12px;margin-bottom:11px}
.s07 .frow>label{width:70px;flex:none;font-size:12px;color:var(--ink2);font-weight:500}
.s07 .seg.biu span{width:30px;text-align:center;padding:5px 0;font-size:14px}
.s07 .tcols{display:flex;gap:9px}
.s07 .tcol{width:20px;height:20px;border-radius:50%;display:inline-block}
.s07 .tcol.on{box-shadow:0 0 0 2px #fff,0 0 0 4px #5b4a86}
.s07 .cb{width:14px;height:14px;border:1.5px solid var(--ink4);border-radius:3px;display:inline-block}
.s07 .nsprev small{display:block;font:600 9.5px var(--ui);letter-spacing:.08em;text-transform:uppercase;color:var(--ink3);margin-bottom:3px}
.s07 .fbar{position:absolute;width:auto!important;z-index:45;display:flex;align-items:center;background:#fff;border:1px solid var(--line);border-radius:8px;box-shadow:0 6px 18px rgba(0,0,0,.14);padding:3px;font:13px var(--ui)}
.s07 .fbar span{padding:4px 10px;border-radius:5px;color:var(--ink)}
.s07 .fbar span+span{border-left:1px solid var(--line2)}
.s07 .fbar i{font-family:var(--text);font-size:14px}
.s07 .fbar .fsa{color:var(--ink2)}
.s07 .seg{display:inline-flex;border:1px solid var(--line);border-radius:7px;overflow:hidden;align-self:flex-start}
.s07 .seg span{padding:5px 11px;font-size:12.5px;color:var(--ink2)}
.s07 .seg span+span{border-left:1px solid var(--line)}
.s07 .seg span.on{background:var(--accent-tint);color:var(--accent);font-weight:600}
.s07 .inp.dd2:after{content:" ▾";font-size:10px;color:var(--ink3);float:right;margin-top:3px}
.s07 .looks{display:flex;gap:14px;flex-wrap:wrap;font-size:13px}
.s07 .lkop{display:inline-flex;align-items:center;gap:6px}
.s07 .lkop .swc{width:14px;height:14px;border-radius:50%;background:#6a5a8c;display:inline-block}
.s07 .nsprev{margin-top:12px;padding:8px 10px;background:var(--soft);border-radius:6px;font:15px var(--text);color:var(--ink2)}
.s07 .nsprev span{font-style:italic;color:#5b4a86;font-size:13.5px}
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
  status: { style: 'Thought', styleLook: 'thought', words: '2,418 words', pages: 'p. 146 of 248' },
  ask: 'normal',
  content: palette + newStyle,
  extra: fbar(FB.x, FB.y)
    + L.ann(1, 'Select some text: a small bar over it with Emphasis, Strong and Style as ▾ (Ctrl+I and Ctrl+B do the same; Ctrl+U explains in a tip that underlining is not a style in a book)', 1060, 126, { w: 300 })
    + L.ann(2, 'The palette (the chip, Ctrl+T, or right-click ▸ Style as): each row in its own working look, the key at the right where there is one, + New style… at the bottom', 14, 150, { w: 290 })
    + L.ann(3, 'Simple on purpose: a name, Paragraph or Text, one of three faces, one of five sizes, B I U, an indent; nothing is “based on” anything', 790, 420, { w: 300 })
    + L.ann(4, 'Text colors never include the four mark colors; the sample shows the choice as you make it', 790, 640, { w: 300 })
    + L.ann(5, 'The chip always shows the style at the cursor, in its own look', 160, 840, { w: 300 })
    + L.ann(6, 'Styles are yours, for every project: Settings ▸ Styles (built-in ones with Reset). How each prints is set once per project in Book ▸ Print styles', 1060, 246, { w: 300 }),
}) + `<div class="below s07">${crop1}${crop2}${crop3}` + L.ann(8, 'Right-click on a selection: Emphasis and Strong first, Style as ▸ for the rest, then Add note, Ask the AI, Add to the Codex ▸, Send to the Inbox, Find, Cut / Copy / Paste', 1004, 270, { w: 300 })
  + L.ann(9, 'Format: Emphasis (Ctrl+I), Strong (Ctrl+B), Style as ▸', 1004, 196, { w: 300 }) + `</div>`;

module.exports = {
  id: 'S07',
  file: 's07-styles',
  title: 'Styles',
  width: 1440,
  height: 1400,
  html: html.replace('<div class="win"', '<div class="win s07"'),
  caption: L.caption({
    id: 'S07', title: 'Styles',
    scene: 'The writer selected “It was a good lie.”, a Thought: the small bar appeared over it, and the chip at the bottom left reads Thought in italics. A click on the chip opened the palette, every style in its own look; “+ New style…” opened the dialog beside it, where a text style “Whisper” gets a face, a size, italics and a color. Under the window: Chapter heading applied in the middle of chapter 7, the right-click menu on a selection, and the Format menu.',
    on: 'the selected Thought with the floating bar (Emphasis · Strong · Style as ▾), the palette (Filter styles; Paragraph: Plain, Chapter heading, Subheading, Letter, Sign, Verse, Not printed; Text: Emphasis Ctrl+I, Strong Ctrl+B, Thought checked, Foreign; + New style…), each name in its own look, the New style dialog (Name “Whisper”; It is Paragraph / Text; Face Serif / Sans / Mono; Size Small … Largest; B I U with I on; Indent; Text color, six colors and none of the four mark colors; a sample; Cancel, Create), the chip “Thought” in italics, the strip with 12 on Review, the Ask button; crop 1: the new “CHAPTER 8 · Closing time” heading with its notice (Undo, ✕); crop 2: the right-click menu on a selection; crop 3: Format (Emphasis, Strong, Style as ▸)',
    off: '“Based on”, small caps or a free font picker in the dialog, a formatting toolbar, Settings ▸ Styles itself (S26), Book ▸ Print styles (S24), the Style as submenu open, the Ctrl+U tip, navigator, Reference panel',
  }),
};
