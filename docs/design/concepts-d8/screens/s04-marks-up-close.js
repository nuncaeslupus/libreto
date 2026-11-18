// S04: The marks, up close (draft 8; from draft 7's S03). Not a window: a board of crops at 2x. The family of marks
// (one shape per meaning), the same row in simulated deuteranopia and protanopia, the author initials, a stacked card
// ("4 on this word") and a look-alike change card written in words.
const L = require('../lib');
const I = L.icons;

const css = `<style>
.s04{position:relative;display:flex;flex-wrap:wrap;gap:20px;padding:24px 28px 14px;background:#d9d9d6;align-items:flex-start}
.s04 .z{padding:14px 18px 16px}
.s04 .text{font:18px/1.72 var(--text);color:var(--ink)}
.s04 .fam{display:grid;grid-template-columns:repeat(4,1fr);gap:0 22px}
.s04 .fam>div{padding:4px 0}
.s04 .fam .w{font:18px/1.9 var(--text);white-space:nowrap}
.s04 .fam .nm{font:600 12px var(--ui);color:var(--ink);margin-top:2px}
.s04 .fam .nm i{font-style:normal;font-weight:400;color:var(--ink3)}
.s04 .fam .sh{font:11.5px/1.35 var(--ui);color:var(--ink3);margin-top:2px}
.s04 .bigtxt{zoom:1.6}
.s04 .sim .w2{font:20px/1.9 var(--text);white-space:nowrap;display:flex;gap:26px;flex-wrap:wrap}
.s04 .sim .cp{font:12px/1.4 var(--ui);color:var(--ink2);margin-top:6px}
.s04 .who2{display:flex;flex-direction:column;gap:9px;font:13px var(--ui);color:var(--ink2)}
.s04 .who2 div{display:flex;align-items:center;gap:10px;white-space:nowrap}
.s04 .who2 .who{transform:scale(1.35);transform-origin:left center;margin-right:8px}
.s04 .who2 .who.ai svg{display:block}
.s04 .k{width:120px;flex:none}
.s04 .stk{width:360px;border:1px solid var(--line);border-radius:10px;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.08);font-size:13px}
.s04 .stk .hd{display:flex;align-items:center;gap:8px;padding:9px 12px;border-bottom:1px solid var(--line2);font-weight:600}
.s04 .stk .hd .nv{margin-left:auto;font-weight:400;color:var(--ink3);font-size:12px}
.s04 .stk .it{padding:9px 12px;border-bottom:1px solid var(--line2)}
.s04 .stk .it:last-of-type{border-bottom:0}
.s04 .stk .t1{display:flex;align-items:center;gap:7px;font-weight:600;font-size:12.5px}
.s04 .stk .t1 .who{margin-left:auto}
.s04 .stk .t1 svg{width:14px;height:14px;flex:none}
.s04 .stk .body{font:13.5px/1.4 var(--text);color:var(--ink);margin:3px 0 6px 21px}
.s04 .stk .ac{display:flex;gap:6px;margin-left:21px}
.s04 .stk .ac span{border:1px solid var(--line);border-radius:5px;padding:1px 8px;font:12px var(--ui);color:var(--ink)}
.s04 .stk .ft{padding:6px 12px;font:11px var(--ui);color:var(--ink4);border-top:1px solid var(--line2)}
.s04 .k-spell{color:var(--spell)}.s04 .k-gram{color:var(--gram)}.s04 .k-fix{color:var(--fix)}.s04 .k-note{color:#a87b12}
.s04 .tint-m{background:rgba(120,80,170,.14);border-radius:2px;padding:0 1px}
.s04 .mc{position:relative;left:auto!important;top:auto!important;box-shadow:0 1px 3px rgba(0,0,0,.08);width:360px}
.s04 .mc-b{white-space:nowrap}
.s04 .look .big{font:22px/1.5 var(--text)}
.s04 .look .cp{font:12px/1.4 var(--ui);color:var(--ink2);margin:4px 0 8px}
.s04 .glyph{display:inline-block;background:#fde8e2;border-radius:3px;padding:0 3px}
.s04 .glyph.g{background:#e3f1e7}
</style>`;

const crop = (label, w, inner) => `<div class="crop" style="width:${w}px"><div class="lbl">${label}</div><div class="z">${inner}</div></div>`;

// 1. the family, at 2x
const fam = `<div class="fam bigtxt">`
  + `<div><div class="w">on <span class="u-spell">leters</span> down</div><div class="nm k-spell">Wavy <i>· red</i></div><div class="sh">check spelling</div></div>`
  + `<div><div class="w">the envelopes <span class="u-gram">was</span> still</div><div class="nm k-gram">Dashed <i>· blue</i></div><div class="sh">a suggestion waits</div></div>`
  + `<div><div class="w">she had <span class="u-fix">received</span> no</div><div class="nm k-fix">Thin solid <i>· green</i></div><div class="sh">fixed for you; fades after the session</div></div>`
  + `<div><div class="w"><span class="u-note">someone had sent him</span></div><div class="nm k-note">Tint <i>· amber</i></div><div class="sh">a note, on its words</div></div>`
  + `</div>`;

// 2. the same row as simulated by color-blind viewers (real color matrices, Machado et al.)
const svg = `<svg width="0" height="0" style="position:absolute"><defs>`
  + `<filter id="deut"><feColorMatrix type="matrix" values="0.367 0.861 -0.228 0 0  0.280 0.673 0.047 0 0  -0.012 0.043 0.969 0 0  0 0 0 1 0"/></filter>`
  + `<filter id="prot"><feColorMatrix type="matrix" values="0.152 1.053 -0.205 0 0  0.115 0.786 0.099 0 0  -0.004 -0.048 1.052 0 0  0 0 0 1 0"/></filter>`
  + `</defs></svg>`;
const row = `<span class="u-spell">leters</span><span class="u-gram">was</span><span class="u-fix">received</span><span class="u-note">someone had sent him</span>`;
const sim = (id) => `<div class="sim"><div class="w2" style="filter:url(#${id})">${row}</div>`
  + `<div class="cp">Wavy, dashed, thin solid and tinted are still four different things, color or not.</div></div>`;

// 3. who
const initials = `<div class="who2">`
  + `<div><span class="k">${L.who('L')}</span>a Libreto rule (spelling, typography)</div>`
  + `<div><span class="k">${L.who('You')}</span>your own note or change</div>`
  + `<div><span class="k">${L.who('M')}</span>Marta, a beta reader</div>`
  + `<div><span class="k">${L.who('T')}</span>Teo, a second reader</div>`
  + `<div><span class="k">${L.who('ai')}</span>the AI</div>`
  + `<div><span class="k"><span class="agentchip" style="margin:0;height:22px;font-size:11px">✦ Claude Code</span></span>an external agent, by name</div>`
  + `</div>`;

// 4. a stack: four things on one word
const it = (ico, color, title, who, body, acts) => `<div class="it"><div class="t1"><span style="color:${color};display:inline-flex">${ico}</span>${title}${L.who(who)}</div><div class="body">${body}</div><div class="ac">${acts.map((a) => `<span>${a}</span>`).join('')}</div></div>`;
const stack = `<div class="stk"><div class="hd">4 on “leters”<span class="nv">1 of 4 · Alt+↓</span></div>`
  + it(I.unknown, 'var(--spell)', 'Check spelling', 'L', 'leters → letters, letter', ['Leave as is', 'Add to dictionary'])
  + it(I.pending, 'var(--gram)', 'Suggestion', 'ai', 'two leters → two notes (chapter 3 calls them notes)', ['Accept', 'Reject', 'Edit'])
  + it(I.pending, 'var(--gram)', 'Change by Marta', 'M', 'leters → <span class="tint-m">letters</span>', ['Accept', 'Reject'])
  + it(I.note, '#a87b12', 'Note', 'You', 'Letters or notes? Check with the chapter 3 scene.', ['Reply', 'Resolve'])
  + `<div class="ft">Ctrl+. opens · Alt+↓ next · Alt+↑ previous</div></div>`;

// 5. look-alike change, in words
const look = `<div class="look">`
  + L.markCard({
    kind: 'prop', title: 'Change by Marta', who: 'M',
    before: 'Lena<span class="glyph">\'</span>s glasses',
    after: 'Lena<span class="glyph g">’</span>s glasses',
    text: '<b>A straight apostrophe becomes a curly one.</b> One character changes: <span style="font-family:var(--ui)">\'</span> (U+0027) to <span style="font-family:var(--ui)">’</span> (U+2019). The words are the same.',
    acts: [['✓', 'Accept', 'Enter'], ['✗', 'Reject', 'Delete']], foot: false,
  })
  + `</div>`;

const html = svg + css + `<div class="s04">`
  + crop('The family of marks at 2×: one shape per meaning, color second', 1384, fam)
  + crop('The same four marks as a deuteranope sees them (simulated)', 682, sim('deut'))
  + crop('As a protanope sees them (simulated)', 682, sim('prot'))
  + crop('Who it is from: the round initial on every card', 440, initials)
  + crop('One word, four things: a stacked card', 400, stack)
  + crop('A change you cannot see: said in words', 400, look)
  + L.ann(1, 'Never color alone: spelling is wavy, a waiting suggestion is dashed, a fix is a thin solid line, a note is a tint', 36, 640, { w: 400 })
  + L.ann(2, 'One underline per word. When several things meet on one word, they stack into one card', 36, 730, { w: 400 })
  + L.ann(3, 'Each row has its own buttons and its own initial; Alt+↓ steps through the four', 36, 810, { w: 400 })
  + `</div>`;

module.exports = {
  id: 'S04',
  file: 's04-marks-up-close',
  title: 'The marks, up close',
  width: 1440,
  height: 1180,
  html,
  caption: L.caption({
    id: 'S04', title: 'The marks, up close',
    scene: 'Not a moment in the book: a legend at twice the size. The four marks, the same row as two kinds of color blindness would show it, the round initials that say who a card is from, one card that holds four things on one word, and a card for a change that looks like nothing.',
    on: 'wavy red “leters” (check spelling), dashed blue “was” (a suggestion waits), thin solid green “received” (fixed for you), amber tint “someone had sent him” (a note); the same row in simulated deuteranopia and protanopia; the initials L, You, M, T, the spark and an agent chip; the card “4 on “leters”” with Check spelling, Suggestion, Change by Marta and a Note, each with its own buttons; the card “Change by Marta” for ' + "'" + ' becoming ’ (U+0027 to U+2019)',
    off: 'a window, any moment of the book, color as the only difference, the Review margin (S17 onward), the gutter bubbles (S03)',
  }),
};
