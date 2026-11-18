// S09: Styles (draft 8; from draft 7's S07). A Thought selected with the selection bar over it (I Italic · B Bold ·
// Style as ▾), the palette with every style in its own look, and the style dialog: project scope, "Save to my styles",
// and the warning "Looks the same as Emphasis on the page".
const L = require('../lib');
const P = L.sample.chapter7Plain;
const I = L.icons;

const css = `<style>
.s09 .pal{width:300px;padding:8px 5px 5px}
.s09 .palf{margin:0 5px 4px;height:28px;padding:0 9px;font:12.5px var(--ui)}
.s09 .palf.foc{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-tint)}
.s09 .pal .mhd{padding:7px 10px 2px}
.s09 .pal .mi{display:flex;align-items:center;gap:6px;height:28px;padding:0 10px 0 6px}
.s09 .pal .pk{width:14px;flex:none;color:var(--accent);font-size:12px;text-align:center}
.s09 .pal .nm{font:15px/1 var(--text);color:var(--ink);white-space:nowrap}
.s09 .pal .newst .nm{font:13px var(--ui)}
.s09 .pal .st-ch{font-weight:600!important;font-size:17px!important}
.s09 .pal .st-sub{font-weight:600!important;font-family:var(--ui)!important;font-size:13.5px!important}
.s09 .pal .st-verse{padding-left:16px}
.s09 .pal .st-let{padding-left:8px;font-style:normal}
.s09 .pal .st-sign{font-variant:small-caps;letter-spacing:.1em}
.s09 .pal .st-mat{font:12.5px var(--ui)!important;color:var(--ink3)!important;background:var(--soft);padding:3px 6px;border-radius:3px;border:1px dashed var(--ink4)}
.s09 .pal .st-em,.s09 .pal .st-th,.s09 .pal .st-for{font-style:italic}
.s09 .pal .st-strong{font-weight:700!important}
.s09 .pal .st-for{color:#5a6b7d!important}
.s09 .pal .st-th{font-size:14.5px}
.s09 .fbar{position:absolute;z-index:45;display:flex;align-items:center;background:#fff;border:1px solid var(--line);border-radius:8px;box-shadow:0 6px 18px rgba(0,0,0,.14);padding:3px;font:13px var(--ui)}
.s09 .fbar span{padding:4px 10px;border-radius:5px;color:var(--ink);white-space:nowrap}
.s09 .fbar span+span{border-left:1px solid var(--line2)}
.s09 .fbar i{font-family:var(--text);font-size:14px;margin-right:3px}
.s09 .fbar b{font-family:var(--text);margin-right:3px}
.s09 .fbar .fsa{color:var(--ink2)}
.s09 .dlg{width:480px}
.s09 .dlg-b{padding:14px 18px 8px}
.s09 .fr{display:flex;align-items:center;gap:10px;margin-bottom:9px}
.s09 .fr>label{width:92px;flex:none;font-size:12px;color:var(--ink2);font-weight:500}
.s09 .sg{display:inline-flex;border:1px solid var(--line);border-radius:7px;overflow:hidden}
.s09 .sg span{padding:4px 10px;font-size:12.5px;color:var(--ink2)}
.s09 .sg span+span{border-left:1px solid var(--line)}
.s09 .sg span.on{background:var(--accent-tint);color:var(--accent);font-weight:600}
.s09 .sg.dis{opacity:.45}
.s09 .fr .pt{font:12px var(--ui);color:var(--ink3)}
.s09 .fr.dis>label{color:var(--ink4)}
.s09 .dis .only{font:12px var(--ui);color:var(--ink4)}
.s09 .nsprev{margin:6px 0 10px;padding:8px 10px;background:var(--soft);border-radius:6px;font:15px var(--text);color:var(--ink2)}
.s09 .nsprev span{font-style:italic;font-size:13.5px}
.s09 .warn{display:flex;gap:8px;align-items:flex-start;border:1px solid #e6d2a8;background:#fbf5e6;border-radius:7px;padding:7px 10px;font:12.5px/1.4 var(--ui);color:#6a521a;margin-bottom:10px}
.s09 .warn svg{width:14px;height:14px;flex:none;margin-top:2px}
.s09 .warn .lk{margin-left:auto;color:var(--accent);white-space:nowrap}
.s09 .scope{border-top:1px solid var(--line2);padding-top:10px;font:12.5px/1.45 var(--ui);color:var(--ink2)}
.s09 .scope .cbx{display:flex;gap:8px;align-items:center;margin-top:5px;color:var(--ink)}
.s09 .scope .box{width:14px;height:14px;border-radius:3px;background:var(--accent);color:#fff;font-size:10px;line-height:14px;text-align:center;flex:none}
</style>`;

const col = P.slice(5, 10).map((p, i) => {
  if (i === 1) p = p.replace('<span class="thought">It was a good lie.</span>', '<span class="thought sel">It was a good lie.</span>');
  return `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`;
}).join('');

const pStyles = [['Plain', 'st-plain'], ['Chapter heading', 'st-ch'], ['Subheading', 'st-sub'], ['Letter', 'st-let'], ['Sign', 'st-sign'], ['Verse', 'st-verse'], ['Not printed', 'st-mat']];
const tStyles = [['Emphasis', 'st-em', 'Ctrl+I'], ['Strong', 'st-strong', 'Ctrl+B'], ['Thought', 'st-th'], ['Foreign', 'st-for']];
const srow = ([t, c, k], o = {}) => `<div class="mi${o.hov ? ' hov' : ''}"><span class="pk">${o.cur ? '✓' : ''}</span><span class="nm ${c}">${t}</span>${k ? `<span class="r">${k}</span>` : ''}</div>`;
const palette = `<div class="menu pal" style="left:10px;bottom:8px">`
  + `<div class="filter palf foc">${I.magnifier}<span>Filter styles</span></div>`
  + `<div class="mhd">Paragraph</div>` + pStyles.map((r) => srow(r)).join('')
  + `<div class="mhd">A few words</div>` + tStyles.map((r) => srow(r, { cur: r[0] === 'Thought' })).join('')
  + `<div class="msep"></div><div class="mi newst hov"><span class="pk"></span><span class="nm">+ New style…</span></div></div>`;

const sg = (opts, on, cls = '') => `<div class="sg ${cls}">${opts.map((t) => `<span class="${t === on ? 'on' : ''}">${t}</span>`).join('')}</div>`;
const dialog = `<div class="dlg" style="left:880px;top:8px"><div class="dlg-h">New style</div><div class="dlg-b">`
  + `<div class="fr"><label>Name</label><div class="inp foc" style="flex:1">Whisper<span class="cursor" style="height:15px;vertical-align:-2px"></span></div></div>`
  + `<div class="fr"><label>It is</label>${sg(['Paragraphs', 'A few words'], 'A few words')}</div>`
  + `<div class="fr"><label>Face role</label>${sg(['Body', 'Heading', 'Sans', 'Mono'], 'Body')}</div>`
  + `<div class="fr"><label>Size</label>${sg(['−2', '−1', 'Same', '+1', '+2'], 'Same')}<span class="pt">prints 11 pt</span></div>`
  + `<div class="fr"><label>Look</label><div class="sg"><span style="font-weight:700;font-family:var(--text)">B</span><span class="on" style="font-style:italic;font-family:var(--text)">I</span><span style="font-variant:small-caps">Small caps</span></div></div>`
  + `<div class="fr dis"><label>Align</label>${sg(['Left', 'Center', 'Right', 'Justify'], 'Left', 'dis')}<span class="only">paragraphs only</span></div>`
  + `<div class="fr dis"><label>Indent, space</label><span class="only">indent, space before and after, After Enter</span></div>`
  + `<div class="fr"><label>Key</label><div class="inp" style="width:150px;color:var(--ink3)">none</div><span class="pt">Ctrl+Shift+letter or a number</span></div>`
  + `<div class="nsprev">She thought: <span>not here, not now.</span></div>`
  + `<div class="warn">${I.info}<span>Looks the same as <b>Emphasis</b> on the page: both are italic at the same size.</span><span class="lk">Use Emphasis</span></div>`
  + `<div class="scope">This style belongs to <b>The Blue Lamp</b>, so the book prints the same anywhere.<div class="cbx"><span class="box">✓</span>Save to my styles (new books start with it)</div></div>`
  + `</div><div class="dlg-f"><span class="sp"></span><span class="btn">Cancel</span><span class="btn pri">Create</span></div></div>`;

const FB = { x: 416, y: 140 };
const fbar = `<div class="fbar" style="left:${FB.x}px;top:${FB.y}px"><span><i>I</i>Italic</span><span><b>B</b>Bold</span><span class="fsa">Style as ▾</span></div>`;

const html = css + '<div class="s09">' + L.win({
  view: 'Text', height: 960,
  crumbs: L.sample.crumbs7,
  page: L.pageCol(col, { paddingTop: 28 }),
  strip: { review: 12 },
  status: { style: 'Thought', styleLook: 'thought', words: '812 of 1,000 today', goal: 81, pages: 'p. 146 of 248' },
  ask: 'normal',
  content: palette + dialog,
  extra: fbar
    + L.ann(1, 'Select words: a small bar above them. Italic and Bold are the two everyone reaches for (Ctrl+I, Ctrl+B); Style as ▾ opens the rest', 20, 170, { w: 320 })
    + L.ann(2, 'The palette (the chip, or Style as ▾): every style in its own look, keys at the right, + New style… at the end. Styles belong to this book', 20, 380, { w: 320 })
    + L.ann(3, 'The chip shows the style at the cursor, in its own look', 330, 892, { w: 280 })
    + L.ann(4, 'Italic and Bold are the styles Emphasis and Strong: change how Emphasis looks in the theme and every italic follows', 440, 780, { w: 410 })
    + L.ann(5, 'A new style is plain: a name, paragraphs or a few words, a face role from the theme, a size step and what it prints at', 440, 690, { w: 410 }),
}) + '</div>';

module.exports = {
  id: 'S09',
  file: 's09-styles',
  title: 'Styles',
  width: 1440,
  height: 1250,
  html: html.replace(/<div class="win"/, '<div class="win s09"'),
  caption: L.caption({
    id: 'S09', title: 'Styles',
    scene: 'The writer selected “It was a good lie.”, a Thought: the selection bar appeared above it and the chip at the bottom left reads Thought in italics. The palette is open, each style in its own look, and “+ New style…” opened the dialog on the right, where a few-words style “Whisper” is being made.',
    on: 'the selection bar (I Italic · B Bold · Style as ▾); the palette (Filter styles; Paragraph: Plain, Chapter heading, Subheading, Letter, Sign, Verse, Not printed; A few words: Emphasis Ctrl+I, Strong Ctrl+B, Thought checked, Foreign; + New style…); the dialog (Name; It is Paragraphs / A few words; Face role; Size step with “prints 11 pt”; B, I, Small caps; paragraph-only rows grayed; Key; a sample; the note “Looks the same as Emphasis on the page · Use Emphasis”; “belongs to The Blue Lamp” and the box “Save to my styles”; Cancel, Create); the chip “Thought” in italics',
    off: 'a font picker, a color picker, “based on”, a formatting toolbar, the writing font and page color (they are personal, in Settings ▸ Writing), the Style as submenu',
  }),
};
