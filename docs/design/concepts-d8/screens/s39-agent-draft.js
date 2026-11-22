// S39: a draft scene from an agent, shown in the page (new in draft 8): blue left rule, provenance header, accept whole.
const L = require('../lib');
const K = require('../d8-kit-s37');

const css = `<style>
.s39 .dhead{border:1px solid var(--line);border-left:3px solid var(--gram);border-radius:9px;background:rgba(58,111,216,.045);padding:11px 14px 12px;margin:0 0 26px;font:13px/1.45 var(--ui)}
.s39 .dhead .t1{display:flex;align-items:center;gap:8px;font-weight:600;font-size:13.5px}
.s39 .dhead .t1 .who{background:rgba(58,111,216,.12);color:var(--gram)}
.s39 .dhead .t1 .ag{color:var(--gram)}
.s39 .dhead .meta{margin:5px 0 0;color:var(--ink2);font-size:12.5px}
.s39 .dhead .chk{display:flex;flex-direction:column;gap:3px;margin:8px 0 10px;font-size:12.5px;color:var(--ink2)}
.s39 .dhead .chk span{display:flex;gap:7px;align-items:center}
.s39 .dhead .chk .ok svg{color:var(--fix)}
.s39 .dhead .chk .w svg{color:var(--warn)}
.s39 .dhead .chk b{font-weight:600;color:var(--ink)}
.s39 .dhead .btns{display:flex;gap:8px}
.s39 .dhead .btn{height:28px}
.s39 .dbody{border-left:3px solid var(--gram);padding-left:20px;margin-left:-23px}
.s39 .col p.first{text-indent:0}
.s39 .gray{color:var(--ink3);font-size:12px}
</style>`;

const rows = [
  { type: 'part', title: 'Part Two: Spring' },
  { type: 'raw', html: `<div class="nrow"><span class="cv"></span><span class="n">11</span><span class="t">The back room, finally</span></div>` },
  { type: 'raw', html: `<div class="nrow"><span class="cv">${L.icons.chevron}</span><span class="n">12</span><span class="t">Vega follows Kit</span><span class="gc" style="color:var(--gram)">agent</span></div>` },
  { type: 'raw', html: `<div class="srow draft here" style="background:var(--accent-tint)"><span class="t">Vega follows Kit to the station</span><span class="dtag">draft</span></div>` },
  { type: 'draft', title: 'The ledger changes hands' },
  { type: 'raw', html: `<div class="nrow"><span class="cv"></span><span class="n">13</span><span class="t">The pawnshop at night</span><span class="gc" style="color:var(--gram)">agent</span></div>` },
  { type: 'raw', html: `<div class="nrow"><span class="cv"></span><span class="n">14</span><span class="t">Teo’s question</span><span class="gc" style="color:var(--gram)">agent</span></div>` },
  { type: 'raw', html: `<div class="nrow"><span class="cv"></span><span class="n">15</span><span class="t">Harbor Street, empty</span></div>` },
];

const P = [
  'Kit left the Blue Lamp by the kitchen door, which Vega had not known was a door. She gave him to the count of twenty and followed, keeping to the wet side of Harbor Street where the awnings hid her.',
  'He walked fast and did not look back, a thin figure with the green ledger pressed under one arm. At the corner of Pier Lane a man in a long coat fell into step beside him, and Kit did not seem surprised.',
  '“Mr. Abel says Thursday,” she heard the man say, and then the wind took the rest.',
  'Vega stopped under the pawnshop’s dark window. Kit would never let a stranger walk beside him in the open; he had told her so himself, in this same street, the night he gave her the first page.',
  'They crossed to the station steps. The man put a hand on Kit’s shoulder, and Kit let him, and that was the moment she knew the ledger was not his to protect any more.',
];
const col = `<div class="dhead">
    <div class="t1"><span class="who">${L.icons.spark}</span>Draft by <span class="ag">Claude Code</span><span class="gray" style="margin-left:auto;font-weight:400">read-only until accepted</span></div>
    <div class="meta">from card “Vega follows Kit to the station” · 2,940 words</div>
    <div class="chk"><span class="w">${L.icons.unknown}<span><b>Checks:</b> 1 name not in the Codex (“Mr. Abel”) · <span class="lk">Add to the Codex</span></span></span><span class="ok">${L.icons.fix}<span>point of view ok (Vega, close third)</span></span></div>
    <div class="btns"><span class="btn pri">Accept into the book</span><span class="btn">Ask for changes…</span><span class="btn q">Discard</span></div>
  </div>`
  + `<div class="dbody">` + P.map((p, i) => {
    let t = p;
    if (i === 3) t = p.replace('Kit would never let a stranger walk beside him in the open', '<span class="u-note">Kit would never let a stranger walk beside him in the open</span>');
    return `<div class="para"><p${i === 0 ? ' class="first"' : ''}>${t}</p></div>`;
  }).join('') + `</div>`;

const html = css + K.css + L.win({
  view: 'Text', crumbs: { chapter: 'Chapter 12 · Vega follows Kit', scene: 'Vega follows Kit to the station (draft)' },
  left: L.navigator({ rows }),
  strip: { review: 19 },
  page: L.pageCol(col, { paddingTop: 28 }),
  status: { style: 'Plain', words: '2,940 words in this draft', pages: 'not in the book yet' },
  ask: 'normal',
  extra: `<span style="position:absolute;left:1042px;top:595px;z-index:5;color:var(--note)">${L.icons.note}</span>` + L.markCard({ kind: 'note', title: 'Note', who: 'You', text: 'Kit wouldn’t say this. He never lets Vega see him near the station.', x: 1076, y: 566, w: 290 })
    + L.ann(1, 'A draft is shown in the page like any scene, with a blue rule down its left edge and a header that says whose it is and where it came from', 20, 400, { w: 285 })
    + L.ann(2, 'Checks ran before it reached you: names against the Codex, point of view', 1020, 150, { w: 340 })
    + L.ann(3, 'Three ways out: accept the whole scene into the book, ask for changes (a short note goes back to the agent), or discard it. Discarded stays', 1020, 300, { w: 340 })
    + L.ann(4, 'You can leave a note on any paragraph while it is still a draft; the agent sees it when you ask for changes', 1020, 740, { w: 340 })
    + L.ann(5, 'Not in the page count or the book’s word total until accepted', 20, 780, { w: 270 }),
});

module.exports = {
  id: 'S39', file: 's39-agent-draft', title: 'A draft from an agent', width: 1440, height: 900,
  html: `<div class="s39">${html}</div>`,
  caption: L.caption({
    id: 'S39', title: 'A draft from an agent',
    scene: 'The writer opened the blue draft scene “Vega follows Kit to the station” that Claude Code wrote from a Board card. The scene reads like the rest of the book but cannot be typed into, and it is not part of the book until accepted. One paragraph carries an amber note of the writer’s.',
    on: 'the Navigator with chapter 12’s two draft scenes (this one selected); the header “Draft by Claude Code · from card ‘Vega follows Kit to the station’ · 2,940 words · checks: 1 name not in the Codex (‘Mr. Abel’), point of view ok”; Accept into the book · Ask for changes… · Discard; the blue left rule; five paragraphs; an amber tint, a gutter bubble and the note card “Kit wouldn’t say this” from You',
    off: 'the draft’s words in the book’s totals, editing inside the draft, an Apply or Undo (Accept is the only way in, and Revert the session undoes it afterwards)',
  }),
};
