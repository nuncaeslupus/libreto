// S26: The Brief (new in draft 8). The book's intent, first in the Codex section, open in the center. One proposed field
// from an AI interview waits in blue.
const L = require('../lib');

const rows = [
  { type: 'matter', title: 'Brief', cur: true, hint: '≈ 900 tokens' },
  { type: 'group', title: 'Threads', count: '3 open' },
  { type: 'group', title: 'People', count: '4' },
  { type: 'matter', title: 'Vega' }, { type: 'matter', title: 'Kit' }, { type: 'matter', title: 'Lena' }, { type: 'matter', title: 'Teo' },
  { type: 'group', title: 'Places', count: '3' },
  { type: 'matter', title: 'The Blue Lamp' }, { type: 'matter', title: 'Harbor Street' }, { type: 'matter', title: 'The pawnshop' },
  { type: 'group', title: 'Things', count: '2' },
  { type: 'matter', title: 'Kit’s green ledger' }, { type: 'matter', title: 'The coin' },
  { type: 'group', title: 'Motifs', count: '1' },
  { type: 'matter', title: 'Glasses' },
];

const css = `<style>
.s26 .bpage{position:absolute;left:280px;right:0;top:0;bottom:0;overflow:hidden;background:var(--paper)}
.s26 .bin{width:900px;margin:0 auto;padding:22px 0 0;position:relative}
.s26 .bh{display:flex;align-items:baseline;gap:14px;margin-bottom:16px}
.s26 .bh h1{margin:0;font:600 26px var(--ui)}
.s26 .bh .sub{color:var(--ink3);font-size:12.5px;flex:1}
.s26 .cols{display:grid;grid-template-columns:1fr 1fr;gap:0 44px}
.s26 .f{margin-bottom:15px}
.s26 .f .fl{font:600 10.5px var(--ui);letter-spacing:.08em;text-transform:uppercase;color:var(--ink3);margin-bottom:4px;display:flex;gap:8px}
.s26 .f .fl i{font:400 11px var(--ui);letter-spacing:0;text-transform:none;color:var(--ink4)}
.s26 .f .fb{font:14.5px/1.5 var(--text);color:var(--ink);padding:7px 10px;border:1px solid var(--line2);border-radius:7px;background:#fff}
.s26 .dd2{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.s26 .dd2 .fb{font-size:13.5px;padding:6px 10px}
.s26 .dd2 .h{font:600 11px var(--ui);color:var(--ink3);margin-bottom:2px}
.s26 .dd2 ul,.s26 .w ul,.s26 .th ul{margin:0;padding-left:16px}
.s26 .smp{font:italic 13.5px/1.45 var(--text);color:var(--ink2);margin-top:6px;padding:6px 10px;border-left:2px solid var(--line)}
.s26 .smp small{display:block;font:11px var(--ui);color:var(--ink3);font-style:normal;margin-bottom:1px}
.s26 .pbar{height:6px;border-radius:3px;background:var(--line);margin-top:8px}
.s26 .pbar i{display:block;height:6px;border-radius:3px;background:var(--ink3);width:67.9%}
.s26 .nm{font:600 16px var(--ui)}
.s26 .nm span{font-weight:400;color:var(--ink2);font-size:13px}
.s26 .th li{margin-bottom:3px;font:13.5px/1.4 var(--ui)}
.s26 .th li .lk{margin-left:4px;font-size:12px}
.s26 .prop{border:1.5px dashed var(--accent);background:var(--accent-tint);border-radius:8px;padding:8px 10px;margin-top:7px}
.s26 .prop .pt{font:14px/1.45 var(--text);color:var(--ink)}
.s26 .prop .pm{display:flex;align-items:center;gap:8px;margin-top:7px;font:11.5px var(--ui);color:var(--ink2)}
.s26 .prop .pm .who{margin-left:0}
.s26 .prop .pm .sp{flex:1}
.s26 .prop .btn{height:24px;padding:0 10px;font-size:12px}
.s26 .sel{display:inline-flex;align-items:center;gap:8px;border:1px solid var(--line);border-radius:7px;padding:4px 10px;font:500 13px var(--ui);background:#fff}
.s26 .sel:after{content:"▾";font-size:10px;color:var(--ink3)}
.s26 .aiw{display:flex;flex-direction:column;align-items:flex-start;gap:6px;font:13px var(--ui);color:var(--ink2)}
.s26 .foot{margin-top:14px;padding-top:9px;border-top:1px solid var(--line2);font:12px var(--ui);color:var(--ink3);display:flex;gap:6px;align-items:center}
.s26 .foot svg{width:13px;height:13px}
</style>`;

const field = (label, body, note) => `<div class="f"><div class="fl">${label}${note ? `<i>${note}</i>` : ''}</div>${body}</div>`;
const left = field('Premise', `<div class="fb">A bartender lies to protect a boy who keeps a ledger of the harbor’s debts. Vega, who owes him, has to decide whether the truth is worth the Blue Lamp.</div>`)
  + field('Audience', `<div class="fb">Adult crime readers who like it slow and literary. Not a thriller: the dread is in what people leave out.</div>`)
  + field('Voice', `<div class="dd2"><div class="fb"><div class="h">Do</div><ul><li>Short sentences in action</li><li>Weather as mood</li></ul></div><div class="fb"><div class="h">Don’t</div><ul><li>Adverbs on dialogue tags</li><li>Explaining a lie after it is told</li></ul></div></div>`
    + `<div class="smp"><small>Sample 1 · action</small>She put the glass down. It rang. Nobody looked up.</div>`
    + `<div class="smp"><small>Sample 2 · quiet</small>The rain had turned to the fine kind that does not fall so much as hang.</div>`);
const right = field('Length', `<div class="fb"><div class="nm">80,000 words <span>· 24 chapters</span></div><div class="pbar"><i></i></div><div style="font:12px var(--ui);color:var(--ink3);margin-top:4px">54,300 so far · 11 of 24 chapters</div></div>`)
  + field('World rules', `<div class="fb w"><ul><li>Winter 1952; the only phone in the bar is the booth by the door</li><li>The bar closes at two; bottles are locked at half past one</li></ul></div>`
    + `<div class="prop"><div class="pt">New rule: Rain falls in every chapter until chapter 12.</div><div class="pm">${L.who('ai')}<span>From the interview, Nov 12</span><span class="sp"></span><span class="btn pri">Accept</span><span class="btn">Reject</span></div></div>`)
  + field('Open threads', `<div class="fb th"><ul><li>Who sent the boy with the letters? <span class="lk">set up ch. 1</span></li><li>The back-room door <span class="lk">set up ch. 2</span></li><li>What is written in Kit’s ledger? <span class="lk">set up ch. 5</span></li></ul></div>`, 'setups waiting for a payoff')
  + field('What the AI may do in this book', `<div class="aiw"><span class="sel">Suggest edits</span><span>Nothing · Suggest edits · Draft scenes when asked</span></div>`);

const bpage = `<div class="bpage"><div class="bin"><div class="bh"><h1>Brief</h1><span class="sub">What this book is. Every AI request starts from it.</span><span class="btn">${L.icons.spark} Fill in by interview</span></div>`
  + `<div class="cols"><div>${left}</div><div>${right}</div></div>`
  + `<div class="foot">${L.icons.spark}<b style="font-weight:600;color:var(--ink2)">≈ 900 tokens</b> · sent with every AI request · kept in the book as brief.md</div></div></div>`;

const html = css + L.win({
  view: false, crumbs: { chapter: 'Codex', scene: 'Brief' }, strip: { review: 12 },
  left: L.navigator({ section: 'Codex', rows, placeholder: 'Filter the Codex' }),
  page: bpage,
  status: { style: false, saved: 'Saved 19:32' },
  ask: 'normal',
  extra: L.ann(1, 'The Brief is the first row of the Codex: the book’s intent in one document, not a settings page', 20, 600, { w: 250 })
    + L.ann(2, 'Voice is do and don’t plus two samples: the AI copies samples better than rules', 420, 700, { w: 200 })
    + L.ann(3, 'Targets come with where you stand: 54,300 of 80,000', 650, 700, { w: 200 })
    + L.ann(4, 'Blue, dashed: a field proposed after a short AI interview; not part of the Brief until you Accept', 880, 700, { w: 220 })
    + L.ann(5, 'The permission is yours: Nothing, Suggest edits, or Draft scenes when asked', 1120, 700, { w: 210 })
    + L.ann(6, 'The size is shown, because it is sent every time', 20, 740, { w: 250 }),
});

module.exports = {
  id: 'S26', file: 's26-brief', title: 'The Brief', width: 1440, height: 900,
  html: html.replace('<div class="win"', '<div class="win s26"'),
  caption: L.caption({
    id: 'S26', title: 'The Brief',
    scene: 'The Navigator is on Codex, and the first row, Brief, is selected; the Brief is open in the center. It holds what the book is: premise, audience, voice with two samples, length targets with progress, world rules, open threads, and what the AI may do in this book. One new world rule, proposed from an AI interview, waits in blue.',
    on: 'the Navigator with Book · Codex · Research (Codex), Brief selected, Threads, People, Places, Things, Motifs; the document “Brief” with Premise, Audience, Voice (Do / Don’t, Sample 1, Sample 2), Length (80,000 words · 24 chapters · 54,300 so far), World rules with a blue dashed proposal and Accept / Reject, Open threads (3), “What the AI may do in this book: Suggest edits ▾”, the line “≈ 900 tokens · sent with every AI request”; Fill in by interview; Review 12 in the strip',
    off: 'the view switch (the center is not the manuscript), a side panel, a floating Ask panel, any applied AI change',
  }),
};
