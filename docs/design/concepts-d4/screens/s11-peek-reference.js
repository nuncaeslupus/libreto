// S11: Peek and the Reference panel. Alt+click on "Lena" opened a peek; the panel shows her card.
const L = require('../lib');
const P = L.sample.chapter7Plain.slice();

// the clicked name
P[3] = P[3].replace('“Kit who?” Lena', '“Kit who?” <span class="rv-c">Lena</span>');

const col = `<div class="chap"><div class="num">CHAPTER 7</div><h1>Lena’s warning</h1></div>`
  + P.map((p, i) => `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`).join('');

const peek = `<div class="peek" style="left:520px;top:352px;width:320px">`
  + `<div style="display:flex;gap:12px;align-items:center;margin-bottom:8px"><div class="pic" style="width:40px;height:40px;border-radius:8px"></div>`
  + `<div><div class="pk-kind" style="margin:0">Person</div><div class="pk-title pk-link" style="margin:0">Lena</div></div></div>`
  + `<div class="pk-line">Bartender at the Blue Lamp. Covers for Kit.</div>`
  + `<div class="pk-meta">In ch. 2–8 · 31 mentions</div>`
  + `<div class="pk-actions"><span class="btn">Open</span><span class="sp"></span><span class="pk-hint">opens it in the Reference panel</span></div></div>`;

const pointer = `<svg class="cursorptr" style="left:538px;top:324px" viewBox="0 0 14 20"><path d="M1 1v15l4-3.6 2.6 6 2.3-1-2.6-5.9H13z" fill="#111" stroke="#fff" stroke-width="1.2"/></svg>`
  + `<kbd style="position:absolute;left:556px;top:330px;z-index:47;box-shadow:0 1px 3px rgba(0,0,0,.15)">Alt</kbd>`;

// the fact's chapter link, hovered; the open questions and the topics as the walkthrough names them
const card = L.refCard({ ...L.sample.lena,
  questions: ['How old is she? “about fifty” in <span class="lk">ch. 2</span>, “not yet forty” in <span class="lk">ch. 8</span>'],
  research: [{ t: 'Bars in the 1950s', sub: 'topic · 6 notes' }, { t: 'Bartenders in the 1950s (PDF)', sub: 'in Bars in the 1950s · 14 pages', pdf: true }] })
  .replace('<div class="nh">Research</div>', '<div class="nh">Topics</div>')
  .replace('<span class="lk">ch. 7, Lena’s warning</span>', '<span class="lk" style="text-decoration:underline">ch. 7, Lena’s warning</span>');

const css = `<style>
.peek .pk-link{color:var(--accent);text-decoration:underline;text-underline-offset:3px;text-decoration-thickness:1px}
.peek .pk-hint{color:var(--ink3);font-size:11.5px}
</style>`;

const html = css + L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  right: L.reference({ kind: 'Person', name: 'Lena', backOn: true, body: card }),
  page: L.pageCol(col, { paddingTop: 40 }),
  strip: { reviewCount: 12 },
  status: { style: 'Plain', words: '2,418 words', pages: 'book p. ~146/248', review: '12 to review' },
  ask: 'normal',
  content: peek + pointer,
  extra: L.tip('Moves the page', { x: 1280, y: 334 })
    + L.ann(1, 'Alt+click or right-click ▸ Look up opens the peek; hovering never does', 40, 394, { w: 300 })
    + L.ann(2, 'The title is a link to the entry; Open puts it in the Reference panel', 40, 470, { w: 300 })
    + L.ann(3, 'Two rules: a link to the text moves the page (Back returns); a link to another entry moves the panel (‹ returns)', 1062, 712, { w: 290 })
    + L.ann(4, 'No tabs, no search box: click a name in the text or press Ctrl+K to look up something else', 1062, 790, { w: 250 })
    + L.ann(5, 'The spark asks the AI about this entry; Open in Codex shows it full size, to check and correct', 760, 92, { w: 280 }),
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
    scene: 'The writer held Alt and clicked “Lena” in the page: a small card says who she is, with her chapters; its title is a link to the entry. “Open” put her Codex entry, as the Codex computed it from the text, in the Reference panel on the right, where the mouse now rests on the chapter link of a fact.',
    on: 'the peek on “Lena” (picture, PERSON, the title Lena as a link, one line, In ch. 2–8 · 31 mentions, Open), the pointer with the Alt key, the Reference panel (‹ ›, PERSON · Lena, the spark, Open in Codex ↗) with the entry: picture, line, Appears/First/Knows, facts from the text with chapter links, a fact pinned from research with its source, the open question about her age (“about fifty” in ch. 2, “not yet forty” in ch. 8), the linked topics; the tooltip on the hovered ch. 7 link; the Ask button over the panel’s corner; the Review tab with 12; the status bar with 12 to review',
    off: 'navigator, tabs or a search box in the panel, a card popping up on hover, a magnifier in the panel',
  }),
};
