// S18: a Codex entry at full size. Research mode, People expanded in the library, Lena's entry in the middle, her mentions on the right.
const L = require('../lib');

// the library, People expanded
const lrow = (t, c, o = {}) => `<div class="lrow${o.cur ? ' cur' : ''}"><span class="cv">${o.coll ? L.icons['chevron-right'] : o.open ? L.icons.chevron : ''}</span><span class="t">${t}</span>${c ? `<span class="c">${c}</span>` : ''}</div>`;
const sub = (t, here) => `<div class="srow${here ? ' here' : ''}"><span class="t">${t}</span></div>`;
const library = `<div class="nav lib"><div class="libbody">`
  + `<div class="nh">Codex</div>`
  + lrow('People', '3', { open: true }) + sub('Lena', true) + sub('Vega') + sub('Kit')
  + lrow('Places', '4', { coll: true }) + lrow('Things', '2', { coll: true }) + lrow('Motifs', '1', { coll: true })
  + `<div class="nh">Research</div>`
  + lrow('Inbox', '2 new') + lrow('Bars in the 1950s') + lrow('Jazz records') + lrow('Police procedure') + lrow('Harbor district, 1950')
  + `</div><div class="navfoot"><span class="btn q">+ New topic</span></div></div>`;

// the entry
const ev = (q, where) => `<div class="pk-ev">“${q}”<small><span class="lk">${where}</span></small></div>`;
const rf = (t, src) => `<div class="pk-ev rf">${t}<small><span class="src">${src}</span></small></div>`;
const entry = `<div class="entry">`
  + `<div class="head"><div class="pic" style="width:120px;height:120px;border-radius:12px"></div><div class="hd">`
  + `<div class="pk-kind" style="margin-bottom:6px">Person <span class="alias">· also “the bartender”</span></div>`
  + `<div class="name"><span class="hovname">Lena</span></div>`
  + `<div class="line">Bartender at <span class="lk">the Blue Lamp</span>. Covers for <span class="lk">Kit</span>; knows more than she says.</div>`
  + `</div></div>`
  + `<div class="cols"><div><div class="nh">Facts from the text</div>`
  + ev('Nobody’s been in that room since Tuesday.', 'ch. 7, Lena’s warning')
  + ev('the lemon on her hands', 'ch. 2, The bartender')
  + ev('She had locked the back room herself on Tuesday night.', 'ch. 8, Closing time')
  + `</div><div><div class="nh">Facts from research</div>`
  + rf('Closes at two; bottles locked at half past one', 'Bars, 1952 · p. 14')
  + rf('A bartender who poured after hours lost the license, not the owner', 'Bars, 1952 · p. 21')
  + `</div></div>`
  + `<div class="nh">Knows</div><div class="row"><span class="lk">Vega</span>, <span class="lk">Kit</span></div>`
  + `<div class="nh">Appears</div><div class="row scenes">`
  + [['ch. 2', 'Vega meets the bartender'], ['ch. 6', 'A man asks for the back room'], ['ch. 7', 'Vega asks about Kit'], ['ch. 7', 'Lena lies about the back room'], ['ch. 8', 'Lena locks the back room']]
    .map(([c, t]) => `<span class="sc"><b>${c}</b> <span class="lk">${t}</span></span>`).join('')
  + `</div>`
  + `<div class="nh">Open questions</div><div class="q">How old is she? Ch. 2 says “not yet thirty”; ch. 6 implies older.</div>`
  + `<div class="nh">Research topics</div>`
  + `<div class="rrow"><div class="pic sm"></div><div class="t"><span class="lk">Bars in the 1950s</span><small>4 pages · 2 pictures</small></div></div>`
  + `<div class="rrow"><div class="pic sm pdf"></div><div class="t"><span class="lk">Bartenders in the 1950s (PDF)</span><small>14 pages</small></div></div>`
  + `</div>`;

// the Reference panel: where she is mentioned
const mention = (q, where) => `<div class="pk-ev">“${q}”<small><span class="lk">${where}</span></small></div>`;
const ref = `<div class="ref"><div class="refhead">${L.ib('back')}${L.ib('forward', 'off')}`
  + `<span class="kind">Person</span><span class="name">Lena</span><span class="sp"></span>${L.ib('magnifier', '', 'Ask about this')}</div>`
  + `<div class="refbody"><div class="nh">Mentioned in · 31 places</div>`
  + mention('The bartender was called Lena, and she did not look up.', 'ch. 2, The bartender')
  + mention('Lena poured without being asked.', 'ch. 2, The bartender')
  + mention('Lena said you’d come, Kit told her.', 'ch. 6, The back room')
  + mention('the only sound was Lena drying glasses that were already dry', 'ch. 7, Lena’s warning')
  + mention('Lena set a glass down hard enough to make it ring.', 'ch. 7, Lena’s warning')
  + mention('Lena looked at the coin, then at the door behind her', 'ch. 7, Lena’s warning')
  + mention('Lena leaned close enough that Vega could smell the lemon on her hands.', 'ch. 7, Lena’s warning')
  + mention('She had locked the back room herself on Tuesday night.', 'ch. 8, Closing time')
  + `<div style="margin-top:6px"><span class="lk">Show all 31</span></div>`
  + `</div></div>`;

const css = `<style>
.lib .libbody{flex:1;min-height:0;overflow:hidden;padding:10px 10px 0 8px}
.lib .nh{margin:8px 6px 6px}
.lib .nh:first-child{margin-top:4px}
.lrow{display:flex;align-items:center;gap:6px;padding:5px 6px 5px 4px;border-radius:6px;line-height:1.3}
.lrow .cv{width:14px;flex:none;color:var(--ink3);display:inline-flex;justify-content:center}
.lrow .cv svg{width:10px;height:10px}
.lrow .t{flex:1;min-width:0}
.lrow .c{color:var(--ink3);font-size:11.5px}
.lib .srow{padding-left:40px}
.lib .srow:before{left:23px}
.lib .srow.here:before{left:22.5px}
.entry{font:13px/1.45 var(--ui);color:var(--ink)}
.entry .head{display:flex;gap:20px;align-items:center;margin-bottom:18px}
.entry .alias{text-transform:none;letter-spacing:0;font-weight:400;color:var(--ink3);font-size:12px}
.entry .name{font:400 30px/1.2 var(--text);margin-bottom:6px}
.entry .hovname{background:var(--accent-tint);box-shadow:0 0 0 4px var(--accent-tint);border-radius:3px}
.entry .line{color:var(--ink2);font-size:14px}
.entry .cols{display:grid;grid-template-columns:1fr 1fr;gap:0 28px}
.entry .nh{margin:14px 0 6px}
.entry .cols .nh{margin-top:0}
.entry .pk-ev{font-size:14px;margin-bottom:8px}
.entry .pk-ev.rf{font-style:normal;font-family:var(--ui);font-size:13px}
.entry .row{color:var(--ink2)}
.entry .scenes{display:flex;flex-wrap:wrap;gap:6px 18px}
.entry .sc b{font-weight:500;color:var(--ink3);font-size:12px;margin-right:2px}
.entry .q{color:var(--ink2);padding:2px 0 2px 10px;border-left:2px solid var(--line)}
.entry .rrow{padding:4px 0}
.refbody .pk-ev{font-size:13px;margin-bottom:8px}
</style>`;

const html = css + L.win({
  mode: 'Research',
  crumbs: { chapter: 'People', scene: 'Lena' },
  left: library,
  right: ref,
  page: L.pageCol(entry, { paddingTop: 36 }),
  status: { style: false, view: false, left: `<span class="sb">31 mentions · ch. 2–8</span><span class="sb">2 topics</span>` },
  ask: 'normal',
  extra: L.tip('Rename everywhere', { x: 612, y: 174 })
    + L.ann(1, 'The whole Codex, one entry at a time: this is the only place it shows at full size', 20, 600, { w: 240 })
    + L.ann(2, 'Facts from the text carry a chapter; facts from research carry their source', 420, 790, { w: 420 })
    + L.ann(3, 'Renaming here renames her in the text and in the topics', 1100, 630, { w: 250 })
    + L.ann(4, 'Everything on the entry is editable, including the name', 1100, 710, { w: 250 }),
});

module.exports = {
  id: 'S18',
  file: 's18-codex-entry',
  title: 'A Codex entry at full size',
  width: 1440,
  height: 900,
  html,
  caption: L.caption({
    id: 'S18', title: 'A Codex entry at full size',
    scene: 'Research mode with People expanded in the library and Lena chosen. Her entry fills the middle: picture, the line, facts from the text beside facts from research, who she knows, where she appears, the open question about her age, and her research topics. The mouse rests on her name, and the tooltip says what editing it does. On the right, the Reference panel lists her mentions.',
    on: 'the library with People open (Lena current, Vega, Kit) and the research topics below, the entry (120 px picture, PERSON · Lena · also “the bartender”, the line, FACTS FROM THE TEXT with chapter links, FACTS FROM RESEARCH with source chips, KNOWS, APPEARS by scene, OPEN QUESTIONS, RESEARCH TOPICS with thumbnails), the “Rename everywhere” tooltip on the name, the Reference panel with “Mentioned in · 31 places” and the quotes, the Ask button',
    off: 'a Codex window or table, tabs or a search box in the Reference panel, a Search &amp; ask box, a provider icon in the status bar',
  }),
};
