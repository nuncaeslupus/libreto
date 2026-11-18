// S45: sizes. Four frames of the same window at 200 % zoom, 150 % interface size with large text, 1000 px in Spanish, 2560 px.
const L = require('../lib');
const P = L.sample.chapter7Plain;

const css = `<style>
.s45{background:#d9d9d6;padding:20px 28px 24px;display:grid;grid-template-columns:684px 684px;gap:18px 16px;align-items:start}
.s45 .fr{background:#fff;border:1px solid #c9c9c5;border-radius:10px;overflow:hidden}
.s45 .fr>.lbl{font:600 11px var(--ui);letter-spacing:.06em;text-transform:uppercase;color:#55585e;padding:9px 14px 8px;background:#f2f2f0;border-bottom:1px solid #e2e2df}
.s45 .fr .vp{overflow:hidden;position:relative;border-bottom:1px solid #e2e2df}
.s45 .fr .in{transform-origin:0 0;position:absolute;left:0;top:0}
.s45 .fr .nt{padding:9px 14px 11px;font-size:13px;line-height:1.45;color:var(--ink2)}
.s45 .fr .nt b{color:var(--ink)}
.s45 .fA .page{left:0;width:1440px;transform:none}
.s45 .fA .col{width:1180px;font-size:36px;line-height:1.6}
.s45 .fA .col .chap h1{font-size:56px}
.s45 .fB .page{left:320px;right:0;width:auto;transform:none}
.s45 .fB .col{width:auto;margin:0 28px;font-size:21px}
.s45 .fC .modes.views span.ic{padding:3px 10px;color:var(--ink3);font-size:13px}
.s45 .fC .modes.views span.on{display:inline-flex;gap:6px;align-items:center}
.s45 .zl{zoom:1.5}
</style>`;

const col = (n = 4, big) => `<div class="chap"><div class="num">CHAPTER 7</div><h1>Lena’s warning</h1></div>` + P.slice(0, n).map((p, i) => `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`).join('');

function frame(cls, label, inner, w, h, scale, note) {
  return `<div class="fr ${cls}"><div class="lbl">${label}</div><div class="vp" style="height:${Math.round(h * scale)}px"><div class="in" style="width:${w}px;height:${h}px;transform:scale(${scale})">${inner}</div></div><div class="nt">${note}</div></div>`;
}

// A: 200 % on 1440
const A = L.win({ view: 'Text', crumbs: L.sample.crumbs7, page: L.pageCol(col(2), { paddingTop: 60 }), strip: { review: 12 }, ask: 'normal',
  status: { style: 'Plain', words: '2,418 words', goal: 60, pages: 'p. 146 of 248', zoom: 200 } });

// B: interface 150 % + large text at 1280: the window is 853 css px wide, scaled 1.5
const B = `<div class="zl">` + L.win({ width: 853, height: 600, view: 'Text', left: L.navigator({ section: 'Book' }), crumbs: 'Chapter 7', page: L.pageCol(col(2), { paddingTop: 36 }),
  strip: { review: 12, leftOn: true }, ask: 'normal', status: { style: 'Plain', words: '2,418 words', goal: 60, pages: 'p. 146 of 248', zoom: 125 } }) + `</div>`;

// C: 1000 px, Spanish
const esViews = '<span class="modes views"><span class="on">A Texto</span><span class="ic">▦</span><span class="ic">▯▯</span></span>';
let C = L.win({ width: 1000, height: 520, view: 'Text', crumbs: { chapter: 'Cap. 7', scene: 'Lena miente' }, page: L.pageCol(`<div class="chap"><div class="num">CAPÍTULO 7</div><h1>La advertencia de Lena</h1></div><p class="first">El Blue Lamp estaba medio vacío a las diez, que era como le gustaba a Vega. La gramola se había rendido y lo único que se oía era a Lena secando vasos que ya estaban secos.</p><p>—Llegas pronto —dijo Lena sin levantar la vista—. O tarde. Contigo nunca lo sé.</p><p>Vega tomó el taburete del fondo, el que miraba a la puerta del cuarto de atrás.</p>`, { paddingTop: 40 }),
  strip: { review: 12 }, ask: 'normal', status: { style: 'Texto', words: '54 300 palabras', goal: 80, pages: 'p. 146 de 248', show: 'Mostrar', saved: 'Guardado 19:32' } });
C = C.replace(/<span class="modes views">.*?<\/span><\/span>/, esViews).replace('Review<i', 'Revisión<i').replace('>History<', '>Historial<')
  .replace('<span>File</span><span>Edit</span><span>View</span><span>Insert</span><span>Format</span><span>Tools</span><span>Help</span>', '<span>Archivo</span><span>Editar</span><span>Ver</span><span>Insertar</span><span>Formato</span><span>Herramientas</span><span>Ayuda</span>');

// D: 2560, columns hug the page
let D = L.win({ width: 2560, height: 900, view: 'Text', left: L.navigator({ section: 'Book' }), right: L.reference({ kind: 'Person', name: 'Lena', body: L.refCard({ name: 'Lena', initial: 'L', pic: false, line: 'owns the Blue Lamp' }) }),
  crumbs: L.sample.crumbs7, page: L.pageCol(col(4), { paddingTop: 60 }), strip: { review: 12, leftOn: true, rightOn: true }, ask: 'normal',
  status: { style: 'Plain', words: '2,418 words', goal: 60, pages: 'p. 146 of 248' } });
D = D.replace('<div class="nav">', '<div class="nav" style="left:582px">').replace('<div class="ref">', '<div class="ref" style="right:582px">');

const html = css + `<div class="s45">`
  + frame('fA', '1 · Zoom 200 % on a 1440 window', A, 1440, 900, 0.47, '<b>The columns close; the page does not leave the window.</b> At 200 % the page is a measure in characters, about 50 to a line, not a fixed 1,240 px; nothing scrolls sideways. Zoom changes the text only, never the menus or the strip.')
  + frame('fB', '2 · Interface size 150 %, large text, 1280 window', B, 1280, 900, 0.53, '<b>The Navigator stays, the side panel closes.</b> Columns grow with the interface size (320 becomes 480 px), so with the text size the second column no longer fits: the one you opened last wins, the other waits behind its button.')
  + frame('fC', '3 · A 1000 px window with Spanish labels', C, 1000, 520, 0.68, '<b>The strip gives way, in this order:</b> the view switch becomes icons with the active label; the breadcrumb loses the part and then shortens the chapter; “Revisión” keeps its count. Numbers and dates follow the language (54 300 palabras). The status bar keeps Saved, words, style; the rest folds into ⋯ below 900.')
  + frame('fD', '4 · A 2560 px window', D, 2560, 900, 0.266, '<b>The columns hug the page</b> with a 48 px gap; the outer space stays empty, so the eye never travels half a screen to reach the list. The page stays the same width: wider windows add margin, not longer lines.')
  + `</div>`;

module.exports = {
  id: 'S45', file: 's45-sizes', title: 'Zoom, interface size and window width', width: 1440, height: 1260, html,
  caption: L.caption({
    id: 'S45', title: 'Zoom, interface size and window width',
    scene: 'The same chapter in four situations that stress the layout: page zoom 200 %, interface size 150 % with large text, a narrow window in Spanish, and a very wide one. Frames are drawn to scale, so the chrome in frames 1 and 4 is small on purpose: those frames show proportions, not labels.',
    on: 'closed columns at zoom 200 %; a Navigator that stays while the side panel closes at 150 %; the view switch as icons with the active label at 1000 px and Spanish menu, strip and status labels; columns that hug the page at 2560 px',
    off: 'a horizontal scroll bar, a column over the text being typed, a strip that wraps',
  }),
};
