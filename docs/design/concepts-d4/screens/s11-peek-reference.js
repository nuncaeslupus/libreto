// S11: Peek and the Reference panel. Alt+click on "Lena" opened a peek; the panel shows her card.
const L = require('../lib');
const P = L.sample.chapter7Plain.slice();

// the clicked name
P[3] = P[3].replace('“Kit who?” Lena', '“Kit who?” <span class="rv-c">Lena</span>');

const col = `<div class="chap"><div class="num">CHAPTER 7</div><h1>Lena’s warning</h1></div>`
  + P.map((p, i) => `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`).join('');

const peek = `<div class="peek" style="left:520px;top:352px;width:320px">`
  + `<div style="display:flex;gap:12px;align-items:center;margin-bottom:8px"><div class="pic" style="width:40px;height:40px;border-radius:8px"></div>`
  + `<div><div class="pk-kind" style="margin:0">Person</div><div class="pk-title" style="margin:0">Lena</div></div></div>`
  + `<div class="pk-line">Bartender at the Blue Lamp. Covers for Kit.</div>`
  + `<div class="pk-meta">ch. 2–8 · 31 mentions</div>`
  + `<div class="pk-actions"><span class="btn">Open the card</span><span class="btn">Research</span></div></div>`;

const pointer = `<svg class="cursorptr" style="left:538px;top:324px" viewBox="0 0 14 20"><path d="M1 1v15l4-3.6 2.6 6 2.3-1-2.6-5.9H13z" fill="#111" stroke="#fff" stroke-width="1.2"/></svg>`
  + `<kbd style="position:absolute;left:556px;top:330px;z-index:47;box-shadow:0 1px 3px rgba(0,0,0,.15)">Alt</kbd>`;

// the fact's chapter link, hovered
const card = L.refCard(L.sample.lena)
  .replace('<span class="lk">ch. 7, Lena’s warning</span>', '<span class="lk" style="text-decoration:underline">ch. 7, Lena’s warning</span>');

const html = `<style>.tip.wrap{width:132px}</style>` + L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  right: L.reference({ kind: 'Person', name: 'Lena', backOn: true, body: card }),
  page: L.pageCol(col, { paddingTop: 40 }),
  status: { style: 'Plain', words: '2,418 words', pages: 'book p. ~146/248', fixes: '3 fixes' },
  ask: 'normal',
  content: peek + pointer,
  extra: L.tip('Goes to the text · Back returns', { x: 1284, y: 374, wrap: true })
    + L.ann(1, 'Alt+click or right-click ▸ Look up opens the peek; hovering never does', 40, 420, { w: 300 })
    + L.ann(2, 'A link to the text moves the page (Back returns); a link to another entry moves the panel (‹ returns)', 1062, 702, { w: 290 })
    + L.ann(3, 'No tabs, no search box: click a name in the text or press Ctrl+K to look up something else', 1062, 772, { w: 290 })
    + L.ann(4, 'A picture can be dropped on the card', 1062, 832),
});

module.exports = {
  id: 'S11',
  file: 's11-peek-reference',
  title: 'Peek and the Reference panel',
  width: 1440,
  height: 900,
  html,
  caption: L.caption({
    id: 'S11', title: 'Peek and the Reference panel',
    scene: 'The writer held Alt and clicked “Lena” in the page: a small card says who she is, with her chapters and two buttons. “Open the card” put her Codex entry in the Reference panel on the right, where the mouse now rests on the chapter link of a fact.',
    on: 'the peek on “Lena” (picture, PERSON · Lena, one line, ch. 2–8 · 31 mentions, Open the card · Research), the pointer with the Alt key, the Reference panel (‹ ›, PERSON · Lena, magnifier, Open in Research ↗) with the card: picture, line, Appears/First/Knows, facts from the text with chapter links, facts from research with a source chip, open questions, research topics; the tooltip on the hovered ch. 7 link; the Ask button over the panel’s corner; the status bar',
    off: 'navigator, tabs or a filter box in the panel, a card popping up on hover, Search &amp; ask box, provider icon in the status bar',
  }),
};
