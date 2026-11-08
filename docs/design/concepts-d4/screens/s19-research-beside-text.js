// S19: Research beside the text. Write mode; a peek on "Blue Lamp" with Research hovered, and the topic open in the Reference panel.
const L = require('../lib');
const P = L.sample.chapter7Plain;

// the first "Blue Lamp" is the one Alt+clicked
const paras = P.map((p, i) => (i === 0 ? p.replace('The Blue Lamp', 'The <span class="picked">Blue Lamp</span>') : p));
const col = `<div class="chap"><div class="num">CHAPTER 7</div><h1>Lena’s warning</h1></div>`
  + paras.map((p, i) => `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`).join('');

// the peek
const peek = `<div class="peek" style="left:40px;top:164px;width:320px">`
  + `<div style="display:flex;gap:12px;align-items:center;margin-bottom:8px"><div class="pic" style="width:48px;height:48px"></div><div>`
  + `<div class="pk-kind" style="margin:0">Place</div><div class="pk-title" style="margin:0">The Blue Lamp</div></div></div>`
  + `<div class="pk-line">Bar on Harbor Street; Lena’s bar. The back-room door is behind the till.</div>`
  + `<div class="pk-meta">ch. 1–11 · 46 mentions</div>`
  + `<div class="pk-actions"><span class="btn">Open the card</span><span class="btn hov">Research</span></div></div>`;

// the topic in the Reference panel
const topic = `<div class="tcard" style="padding:0;overflow:hidden">`
  + `<div class="pic" style="width:100%;height:170px;border-radius:0"></div>`
  + `<div style="padding:10px 14px 14px">`
  + `<div style="font:11px var(--ui);color:var(--ink3);margin-bottom:10px">Bar counter, harbor district, about 1950</div>`
  + `<div class="rt">Most of the bars on Harbor Street kept the same hours and the same furniture: a long counter, a brass rail, a jukebox that nobody fed after ten. The back room was for cards, or for whoever the owner owed a favor.</div>`
  + `<div class="rt">The city licensed bars until two. A bartender who kept pouring after that was the one who lost the license, not the owner.</div>`
  + `<div class="nh">Facts</div>`
  + `<div class="pk-ev rf">Closes at two; bottles locked at half past one<small><span class="src">Bars, 1952 · p. 14</span></small></div>`
  + `<div class="pk-ev rf">A bartender who poured after hours lost the license, not the owner<small><span class="src">Bars, 1952 · p. 21</span></small></div>`
  + `<div style="margin-top:12px"><span class="btn">Edit in Research</span></div>`
  + `</div></div>`;

const css = `<style>
.picked{background:rgba(47,138,102,.12);box-shadow:inset 0 -2px 0 var(--place);border-radius:2px}
.peek .btn.hov{background:var(--accent-tint);border-color:var(--accent-soft)}
.refhead{padding:0 8px 0 4px}
.refhead .kind{white-space:nowrap;margin-left:4px}
.refhead .ib{width:21px}
.refhead .lk{font-size:11.5px}
.refhead .name{font-size:12px}
.refhead .kind{font-size:10px}
.refbody .rt{font:14px/1.5 var(--text);margin-bottom:10px}
.refbody .pk-ev.rf{font-style:normal;font-family:var(--ui);font-size:12.5px}
</style>`;

const html = css + L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  right: L.reference({ kind: 'Topic', name: 'Bars in the 1950s', backOn: true, body: topic }),
  page: L.pageCol(col + peek, { paddingTop: 40 }),
  status: { style: 'Plain', words: '2,418 words', pages: 'book p. ~146/248', fixes: '3 fixes' },
  ask: 'normal',
  extra: L.ann(1, 'Alt+click a name, choose Research on the peek: the topic opens beside the text, readable and scrollable', 60, 420, { w: 300 })
    + L.ann(2, '“Edit in Research” opens the topic in the mode; Back returns to the sentence', 1090, 722, { w: 240 })
    + L.ann(3, 'Gathering happens in Research; using happens here, beside the text', 1090, 792, { w: 220 }),
});

module.exports = {
  id: 'S19',
  file: 's19-research-beside-text',
  title: 'Research beside the text',
  width: 1440,
  height: 900,
  html,
  caption: L.caption({
    id: 'S19', title: 'Research beside the text',
    scene: 'Writing chapter 7, the writer Alt+clicks “Blue Lamp” and points at Research on the peek. The Reference panel shows the topic “Bars in the 1950s” with its picture, its first paragraphs and two facts, enough to check and go on.',
    on: 'the page with “Blue Lamp” marked and its peek (picture, PLACE · The Blue Lamp, the line, “ch. 1–11 · 46 mentions”, Open the card · Research with Research hovered), the Reference panel (TOPIC · Bars in the 1950s, back and forward, magnifier, Open in Research ↗, the first picture with its caption, two paragraphs, two facts with source chips, “Edit in Research”), the Ask button over the panel’s corner, the status bar',
    off: 'the chapter list, tabs or a search box in the Reference panel, Research mode itself, a Search &amp; ask box, a provider icon in the status bar',
  }),
};
