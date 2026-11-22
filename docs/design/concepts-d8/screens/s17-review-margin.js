// S17: the Review margin open beside chapter 7 (Review pressed in the strip): rounds, filters, Page | List, Review all,
// and cards level with their lines: a continuity finding, an out-of-date card, a stack, a folded thread, a long note.
const C = require('../rev-common');
const { L, I, rc, btn, who } = C;

const css = `<style>
.s17 .col{padding-top:0}
.s17 .para{position:relative}
.s17 .para>.gm{position:absolute;left:calc(100% + 16px)}
.s17 .u-prop{background:rgba(58,111,216,.07)}
.s17 .stalew{border-bottom:2px dashed #9aa7bd}
.s17 .rc{z-index:3}
.s17 .cnt-l{position:absolute;left:0;right:0;height:1.5px;background:rgba(0,0,0,.12);z-index:1}
</style>`;
const Y = {fnd:378,stk:502,old:687,thr:842,long:1028};
const CT = 96, CARDS = 260;
const ytop = (k) => Y[k] - CT - CARDS - 7;

const col = `<div style="height:250px"></div>`
  + `<div class="para"><p class="first">Lena looked at the coin, then at the door behind her, then at nothing at all. “Nobody came in at nine. <span class="u-gram" data-m="fnd">Nobody’s been in that room since Tuesday.</span>”</p>${L.gm('pending', L.lineTop(1))}</div>`
  + `<div class="para"><p>The jukebox clicked over to a new record, an old one, all brass and static, and neither of them said anything until it had finished.</p></div>`
  + `<div class="para"><p>“Lena,” she said quietly, “if he’s in trouble, I’d rather hear it from you.”</p></div>`
  + `<div class="para"><p>“Then hear this.” Lena leaned close enough that Vega could smell <span class="u-note" data-m="stk">the lemon on her hands</span>. “Go home. Don’t come back to the Blue Lamp tomorrow.”</p><span class="bb stk" style="top:${L.lineTop(0)}px">3</span></div>`
  + `<div class="para"><p>She did not answer. There was nothing in the room that could help her, only the ring of the coin on the wood and the smell of lemons, and Lena’s hands, which would not be still.</p></div>`
  + `<div class="para"><p>Outside, the rain had turned to the fine kind that does not fall so much as hang. Vega walked <span class="stalew" data-m="old">the long way around</span>, past the station steps, because it was the way Kit always walked.</p>${L.gm('pending', L.lineTop(1))}</div>`
  + `<div class="para"><p>The street was empty. A bus went by with its lights on and nobody in it, and the puddles took the light and broke it, and she walked on through them.</p></div>`
  + `<div class="para"><p>She had asked him once, on the station steps, whether he would ever lie to her. <span class="u-note" data-m="thr">Kit said no.</span></p><span class="bb oth" style="top:${L.lineTop(1)}px">28<i></i></span></div>`
  + `<div class="para"><p>Behind her the door of the Blue Lamp closed on its slow spring, and the music thinned to a thread and then to nothing, and for a moment she could hear only the rain on the awning.</p></div>`
  + `<div class="para"><p>He said it too fast, the way people answer a question they have rehearsed on the walk over, and she had let it go because it was late.</p></div>`
  + `<div class="para"><p>At the corner of Harbor Street she stopped under <span class="u-note" data-m="long">the awning of the pawnshop</span> and counted the windows above the Blue Lamp. Three dark, one lit.</p><span class="bb oth" style="top:${L.lineTop(0)}px">1<i></i></span></div>`;

const cards = `<div class="cards" data-m="cards">`
  + rc('pend sel', ytop('fnd'), `<div class="h">${I.pending}<b>Continuity</b><small>ch. 7 against ch. 10</small>${who('ai')}</div><div class="x">Here the back room is empty “since Tuesday”. In <span class="lk">ch. 10</span> Kit uses it on Monday night. One of the two has to give.</div><div class="a">${btn('Fix here', { p: 1 })}${btn('Fix there')}${btn(I.spark + 'Why?')}</div>`)
  + rc('', ytop('stk'), `<div class="h">${I.note}<b>3 on this line</b><small>“the lemon on her hands”</small></div><div class="x" style="margin:0"><div style="display:flex;gap:7px;align-items:center;padding:2px 0">${who('M')}<span>Lemon again? It was on her hands in ch. 2…</span></div><div style="display:flex;gap:7px;align-items:center;padding:2px 0">${who('T')}<span>Love this detail.</span></div><div style="display:flex;gap:7px;align-items:center;padding:2px 0">${who('ai')}<span>Suggestion: “lemon and bleach”</span></div></div>`)
  + rc('stale', ytop('old'), `<div class="h">${I.pending}<b>Out of date</b><small>your text changed since</small>${who('ai')}</div><div class="x"><span class="q">“the long way around”</span> was proposed as <span class="now">“the long way home”</span> for an earlier wording.</div><div class="a">${btn('Show both')}${btn('Ask again · ≈0.01 €')}${btn('Reject')}</div>`)
  + rc('nt', ytop('thr'), `<div class="h">${I.note}<b>Note</b><small>Marta, Teo, You · 28 messages</small>${who('M')}</div><div class="fold">▸ 26 earlier messages</div><div class="rep"><b>Teo</b> Maybe he does lie, just not to her face.</div><div class="x" style="margin:0 0 6px"><b>Marta</b> Then ch. 10 has to show it.</div><div class="a">${btn('Reply')}${btn('Resolve')}</div>`)
  + rc('nt', ytop('long'), `<div class="h">${I.note}<b>Note</b><small>Teo · 2,000 words</small>${who('T')}</div><div class="x clamp">I read this scene four times. What strikes me is the pawnshop: it appears in chapter 3 as a place Vega avoids, then here as a place she shelters, and I think the book wants you to notice that she has changed her mind about it without saying so. Three suggestions follow, with reasons for each…</div><span class="rall">Read all</span>`)
  + `</div>`;

const margin = `<div class="rvm" data-m="rvm">${C.head({ on: 0 })}${cards}</div>`;

const html = css + C.css + L.win({
  view: 'Text', crumbs: { chapter: 'Chapter 7 · Lena’s warning', scene: 'Lena lies about the back room' },
  strip: { review: 12, reviewOn: true },
  left: L.navigator({ rows: L.sample.navRows.map((r) => (r.type === "front" ? { type: "group", title: "Front", open: false } : r)) }),
  page: L.pageCol(col, { paddingTop: 0 }),
  right: margin,
  height: 1200,
  status: { style: 'Plain', words: '2,418 words', pages: 'p. 146 of 248' },
  ask: false,
  extra: L.ann(1, 'Every import, AI pass and the Libreto rules is a round, with progress and a cost; click one to see only its cards', 440, 128, { w: 440 })
    + L.ann(2, 'Filters are plain on/off toggles; Unread and Resolved are among them. The number on Review counts what waits for you', 440, 184, { w: 440 })
    + L.ann(3, 'Cards sit level with their lines. A dense line becomes a stack; a proposal whose text moved on turns gray-blue', 440, 240, { w: 440 })
    + L.ann(4, 'A long thread keeps the last replies; a long note is clamped, Read all opens it', 440, 296, { w: 440 })
    + L.ann(5, 'The Navigator keeps counts per chapter, so you can see where the notes are', 20, 700, { w: 270 })
}).replace('<div class="win"', '<div class="win s17"');

module.exports = {
  id: 'S17', file: 's17-review-margin', title: 'The Review margin', width: 1440, height: 1200 + 150,
  html,
  caption: L.caption({
    id: 'S17', title: 'The Review margin',
    scene: 'Chapter 7 with Review pressed in the strip. The margin opens in the side panel beside the same, still editable text: rounds at its head, filters, Page | List, and cards level with their lines.',
    on: 'Review pressed (12); the navigator with counts; the margin head (rounds Marta · Nov 7 · 150 / 300, Teo · Nov 9 · 0 / 41, AI pass · Nov 12 · 12 / 80 · ≈0.42 €, Libreto rules · ongoing; six on/off filters; Page | List; Review all ▶; Add notes from a reader’s copy…); a continuity finding (Fix here · Fix there · Why?); a stack card “3 on this line”; an Out-of-date card; a thread folded to “26 earlier messages”; a 2,000-word note clamped with Read all; the gutter marks',
    off: 'the Ask button (hidden behind the margin), the walk (S19), the List view (S18), a bell',
  }),
};
