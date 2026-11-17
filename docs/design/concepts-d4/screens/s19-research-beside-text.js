// S19: Research beside the text. Write mode; a peek on "Blue Lamp" with Research hovered, and the topic open in the Reference panel.
const L = require('../lib');
const P = L.sample.chapter7Plain;

// the first "Blue Lamp" is the one Alt+clicked
const paras = P.map((p, i) => (i === 0 ? p.replace('The Blue Lamp', 'The <span class="picked">Blue Lamp</span>') : p));
const col = `<div class="chap"><div class="num">CHAPTER 7</div><h1>Lena’s warning</h1></div>`
  + paras.map((p, i) => `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`).join('');

// the peek: kind, the name as a link, a line, the chapters, and under Research the topics linked to the entry
const peek = `<div class="peek" style="left:40px;top:164px;width:320px">`
  + `<div style="display:flex;gap:12px;align-items:center;margin-bottom:8px"><div class="pic" style="width:48px;height:48px"></div><div>`
  + `<div class="pk-kind" style="margin:0">Place</div><div class="pk-title pk-link" style="margin:0">The Blue Lamp</div></div></div>`
  + `<div class="pk-line">Bar on Harbor Street; Lena’s bar. The back-room door is behind the till.</div>`
  + `<div class="pk-meta">In ch. 1–11 · 46 mentions</div>`
  + `<div class="pk-rh">Research</div>`
  + `<div class="pk-r"><span class="pic sm"></span><span class="lk">Bars in the 1950s</span></div>`
  + `<div class="pk-r hov"><span class="pic sm"></span><span class="lk">The Blue Lamp’s history</span></div>`
  + `<div class="pk-actions"><span class="btn">Open</span></div></div>`;

// the topic in the Reference panel: readable and scrollable, with its pictures
const topic = `<div class="rtopic">`
  + `<div class="pic" style="width:100%;height:160px;border-radius:6px"></div>`
  + `<div class="cap">The Blue Lamp, Harbor Street, about 1949 · lamp-front.jpg</div>`
  + `<div class="rt">The Blue Lamp opened in 1931 as a sailors’ bar, in a ground floor that had been a ship chandler’s. The lamp over the door was a ship’s lantern with blue glass; the name came from it, not the other way round.</div>`
  + `<div class="rt">The long counter is oak, brought from a bar on the other side of the harbor that closed in the war. The back room behind the till was a store room until 1946, then a room for cards.</div>`
  + `<div class="pic" style="width:100%;height:110px;border-radius:6px;margin:4px 0 4px"></div>`
  + `<div class="cap">The counter and the back-room door · counter.jpg</div>`
  + `<div class="rt">In winter the owner kept the stove in the back room lit all night, which is why the light upstairs was so often on.</div>`
  + `</div><div class="rsb"><i></i></div>`;

const css = `<style>
.picked{background:rgba(47,138,102,.12);box-shadow:inset 0 -2px 0 var(--place);border-radius:2px}
.peek .pk-link{color:var(--accent);text-decoration:underline;text-underline-offset:3px;text-decoration-thickness:1px}
.peek .pk-rh{font:600 10.5px var(--ui);letter-spacing:.08em;text-transform:uppercase;color:var(--ink3);margin:10px 0 4px}
.peek .pk-r{display:flex;gap:9px;align-items:center;padding:3px 6px;margin:0 -6px;border-radius:6px}
.peek .pk-r.hov{background:var(--accent-tint)}
.peek .pk-r .pic.sm{width:30px;height:22px;border-radius:4px;flex:none}
.peek .pk-actions{margin-top:10px}
.ref .refbody{position:relative}
.rtopic{padding:12px 16px 0 14px}
.rtopic .cap{font:11px var(--ui);color:var(--ink3);margin:5px 0 10px}
.rtopic .rt{font:14px/1.5 var(--text);margin-bottom:10px}
.rsb{position:absolute;right:3px;top:6px;bottom:6px;width:5px;border-radius:3px;background:rgba(0,0,0,.05)}
.rsb i{position:absolute;left:0;right:0;top:0;height:46%;border-radius:3px;background:rgba(0,0,0,.2)}
</style>`;

const html = css + L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  strip: { reviewCount: 12 },
  right: L.reference({ kind: 'Topic', name: 'The Blue Lamp’s history', backOn: true, body: topic, open: 'Edit in Research' }),
  page: L.pageCol(col + peek, { paddingTop: 40 }),
  status: { style: 'Plain', words: '2,418 words', pages: 'p. 146 of 248' },
  ask: 'normal',
  extra: L.ann(1, 'Alt+click a name: the peek lists under Research the topics linked to it; choose one and the panel shows it', 60, 520, { w: 300 })
    + L.ann(2, 'On the right, the topic, readable and scrollable, with its pictures: enough to check and go on', 40, 610, { w: 300 })
    + L.ann(3, 'The panel’s foot: Edit in Research opens the topic there; Back returns to the sentence', 40, 680, { w: 300 })
    + L.ann(4, 'Gathering happens in Research; using happens here, beside the text', 40, 750, { w: 300 }),
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
    scene: 'Writing chapter 7, the writer Alt+clicks “Blue Lamp”. The peek lists under Research the two topics linked to the entry, and the writer chose “The Blue Lamp’s history”: the Reference panel shows the topic, readable and scrollable, with its pictures.',
    on: 'the page with “Blue Lamp” marked and its peek (picture, PLACE, The Blue Lamp as a link, the line, “In ch. 1–11 · 46 mentions”, RESEARCH: Bars in the 1950s, The Blue Lamp’s history (hovered), Open), the Reference panel (‹ › TOPIC ✕, “The Blue Lamp’s history” large, two pictures with captions, the text with its scrollbar, the foot Edit in Research · Ask the AI), the Ask button over the panel’s corner, the status bar',
    off: 'the chapter list, tabs or a search box in the Reference panel, Research itself',
  }),
};
