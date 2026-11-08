// S06: Scene breaks, typed and detected. A typed break (soft rule, hovered with its tooltip), a detected one
// (dashed rule with Keep · Not a scene), and, in a crop under the window, the message after a removal.
const L = require('../lib');
const P = L.sample.chapter7Plain;

const p10 = 'At the corner of Harbor Street she stopped under the awning of the pawnshop and counted the windows above the Blue Lamp. Three dark, one lit. She stood there long enough for the light to go out.';
const p11 = 'The next morning, the awning was rolled up and the pawnshop was shut, with a card in the window that said <i>back at ten</i> in a hand she knew from somewhere.';

const pointer = (x, y) => `<svg class="cursorptr" style="left:${x}px;top:${y}px" width="14" height="20" viewBox="0 0 14 20"><path d="M1 1v15l4-3.5 2.5 6 2.5-1-2.5-5.5H13z" fill="#fff" stroke="#222" stroke-width="1.2" stroke-linejoin="round"/></svg>`;

const col = `<p class="first">${P[7]}</p><p>${P[8]}</p>`
  + `<div class="para"><div class="srule hov"></div></div>`
  + `<p class="first">${P[9]}</p><p>${p10}</p>`
  + `<div class="para"><div class="srule det"></div><span class="detlbl">Scene, detected</span><div class="pop" style="left:522px;top:-16px"><span class="hov">Keep</span><span>Not a scene</span></div></div>`
  + `<p class="first">${p11}</p>`;

const css = `<style>
.s06 .srule.hov{background:linear-gradient(90deg,transparent,#8d8d88 25%,#8d8d88 75%,transparent)}
.s06 .detlbl{position:absolute;left:0;top:-8px;font:11.5px var(--ui);color:var(--ink3);text-indent:0}
.s06 .para .pop{white-space:nowrap}
.s06 .crop .col{padding:18px 0 0;width:560px;font-size:16px;line-height:1.6}
.s06 .crop .col p{text-indent:0}
.s06 .crop .toast{bottom:14px}
.s06.below{position:relative}
</style>`;

const html = css + L.win({
  mode: 'Write',
  crumbs: L.sample.crumbs7,
  page: L.pageCol(col, { paddingTop: 40 }),
  status: { style: 'Plain', words: '2,418 words', pages: 'book p. ~146/248', fixes: '3 fixes' },
  ask: 'normal',
  extra: pointer(728, 282) + L.tip('Scene break · click to remove', { x: 748, y: 252 })
    + L.ann(1, 'Typed “***” on its own line: a soft gray rule, nothing else', 80, 268, { w: 300 })
    + L.ann(2, 'Backspace or Delete next to it, or a click on the rule, removes it like a character; the two scenes merge', 80, 334, { w: 300 })
    + L.ann(3, 'Proposed, not done: a dashed rule, the same look as any other proposal, with two choices. Nothing changes until one is clicked', 1076, 430, { w: 300 })
    + L.ann(4, 'The chapter list shows the detected scene in lighter text until it is kept', 1076, 574, { w: 300 }),
}) + `<div class="below s06"><div class="crop" style="width:640px;height:232px"><div class="lbl">After removing a break</div>`
  + `<div class="col"><p>Don’t ask Kit what he saw.”</p><p>Outside, the rain had turned to the fine kind that does not fall so much as hang. Vega walked the long way around, past the station steps, because it was the way Kit always walked.</p></div>`
  + L.toast('Scene break removed<span class="lk">Undo</span>') + `</div>`
  + L.ann(5, 'The two scenes merged, the row faded out of the list, and the message at the bottom offers Undo for a few seconds', 700, 70, { w: 320 })
  + `</div>`;

module.exports = {
  id: 'S06',
  file: 's06-scene-breaks',
  title: 'Scene breaks, typed and detected',
  width: 1440,
  height: 1170,
  html: html.replace('<div class="win"', '<div class="win s06"'),
  caption: L.caption({
    id: 'S06', title: 'Scene breaks, typed and detected',
    scene: 'The end of chapter 7. The writer typed “***” after Lena’s warning, and the mouse rests on that rule. Two paragraphs later, the time jumps to the next morning without a break, so Libreto proposes one with a dashed rule and two buttons. Under the window: the message after a break is removed.',
    on: 'the typed scene break as a soft gray rule with the pointer on it and the tooltip “Scene break · click to remove”, the detected scene as a dashed rule with the gray label “Scene, detected” and the popover “Keep · Not a scene”, chapter 7 text around them, the Ask button, the status bar; in the crop: the merged text and the toast “Scene break removed · Undo”',
    off: 'a Scene break style in the styles palette, navigator, Reference panel, Search &amp; ask box, provider icon in the status bar, the “Remove” popover on the typed rule',
  }),
};
