// S02: The empty first chapter (draft 8). Three quiet doors under the cursor: Just write · Plan first · Start from an
// idea ✦. They vanish with the first typing. Insets: after 12 words the doors are gone; "Start from an idea" opened as
// a conversation in the side panel asking three short questions.
const L = require('../lib');

const css = `<style>
.s02e .chap h1.ph{color:var(--ink3)}
.s02e .doors{margin:34px 0 0;display:flex;gap:10px;align-items:stretch;font:13px var(--ui)}
.s02e .door{flex:1;border:1px solid var(--line);border-radius:9px;padding:10px 12px;color:var(--ink2);background:#fff}
.s02e .door b{display:block;font-weight:600;color:var(--ink);font-size:13.5px;margin-bottom:2px}
.s02e .door span{font-size:12px;color:var(--ink3);line-height:1.35;display:block}
.s02e .door.ai b{color:var(--accent)}
.s02e .doorlbl{font:12px var(--ui);color:var(--ink3);margin:26px 0 -22px}
.s02e .col p.first{text-indent:0}
.s02e.below{display:flex;gap:16px;padding:18px 28px;background:#e3e3e0;align-items:flex-start}
.s02e .miniwin{position:relative;border:1px solid #d0d0cc;border-radius:10px;overflow:hidden;background:#fff}
.s02e .miniwin .win{box-shadow:none}
.s02e .dock .ref{position:static;width:auto;flex:none;height:100%}
.s02e .dock{overflow:hidden;position:absolute;right:0;top:0;bottom:0;width:390px;z-index:4;display:flex;flex-direction:column}
.s02e .dock .ask{min-height:0;overflow:hidden;position:static;width:auto;max-height:none;flex:1;border:0;border-radius:0;box-shadow:none;background:var(--soft)}
.s02e .dock .ask-h{background:var(--soft);border-radius:0}
.s02e .ctx{margin:0 14px 8px;font:11.5px var(--ui);color:var(--ink3);border:1px solid var(--line);border-radius:14px;padding:3px 10px;background:#fff;align-self:flex-start;white-space:nowrap}
.s02e .q{display:flex;gap:8px;margin:6px 0}
.s02e .q i{font-style:normal;flex:none;width:20px;height:20px;border-radius:50%;background:var(--accent-tint);color:var(--accent);font:600 11px/20px var(--ui);text-align:center}
.s02e .miniwin .page{left:0;right:0;width:auto;transform:none}
.s02e .miniwin.dk .page{right:390px}
.s02e .miniwin .col{width:auto!important;margin:0 48px!important}
.s02e .miniwin.nz .zoom,.s02e .miniwin.nz .vsep{display:none}
.s02e .note2{font:12px/1.4 var(--ui);color:var(--ink3);margin-top:8px}
.s02e .dock .ask-b{background:var(--soft)}
</style>`;

const pointer = (x, y) => `<svg class="cursorptr" style="left:${x}px;top:${y}px" width="14" height="20" viewBox="0 0 14 20"><path d="M1 1v15l4-3.5 2.5 6 2.5-1-2.5-5.5H13z" fill="#fff" stroke="#222" stroke-width="1.2" stroke-linejoin="round"/></svg>`;

// the main window: empty chapter, cursor in the first paragraph, the doors below it
const doors = `<div class="doors">`
  + `<div class="door"><b>Just write</b><span>Start typing. This all goes away.</span></div>`
  + `<div class="door"><b>Plan first</b><span>Open the Board and lay out scenes as cards.</span></div>`
  + `<div class="door ai"><b>Start from an idea ✦</b><span>Answer three short questions; Libreto sets up your Brief.</span></div>`
  + `</div>`;
const col = `<div class="chap"><h1 class="ph">Chapter 1</h1></div><div class="para"><p class="first"><span class="cursor"></span></p></div>${doors}`;

const main = L.win({
  view: 'Text',
  crumbs: 'Chapter 1',
  strip: { review: 0 },
  page: L.pageCol(col, { paddingTop: 90 }),
  status: { style: 'Plain', words: '0 words', goal: 0, pages: 'p. 1 of 1', saved: 'Saved' },
  height: 640,
  ask: 'normal',
  extra: pointer(1010, 380)
    + L.ann(1, 'The empty chapter says what it can become: three quiet doors under the cursor, not a dialog and not a template', 30, 250, { w: 330 })
    + L.ann(2, 'Typing a single letter makes all three disappear, and they never come back for this chapter', 1090, 250, { w: 300 })
    + L.ann(3, '“Start from an idea ✦” is the only one that uses the AI, and it says so with the spark', 1090, 460, { w: 300 })
    + L.ann(4, '“0 words · Saved”: nothing is missing, nothing is lost. The goal ring is empty until you write', 30, 548, { w: 350 }),
});

// inset 1: after 12 words
const typed = 'Rain had been falling on the Blue Lamp since noon, and Vega<span class="cursor"></span>';
const col2 = `<div class="chap"><h1 class="ph">Chapter 1</h1></div><div class="para"><p class="first">${typed}</p></div>`;
const win2 = L.win({
  view: 'Text', crumbs: 'Chapter 1', strip: { review: 0 }, width: 580, height: 470, ask: false,
  page: L.pageCol(col2, { paddingTop: 50 }).replace('620px', '620px'),
  status: { style: 'Plain', words: '12 words', goal: 2, pages: 'p. 1 of 1', saved: 'Saved 19:02', keys: false },
});

// inset 2: Start from an idea, the conversation in the side panel
const chat = L.askPanel({
  title: 'Ask · New book',
  messages: [
    `<div class="ctx" style="margin:0 0 8px">Brief · empty · about 0.4k tokens</div>`,
    `I will ask three short questions and turn your answers into a Brief. I write nothing into your chapters. Skip any you like.`,
    `<div class="q"><i>1</i><span>Who is it about, and what do they want?</span></div><div class="q"><i>2</i><span>Where and when does it happen?</span></div><div class="q"><i>3</i><span>What should a reader feel at the end?</span></div>`,
    { me: true, html: 'A woman waits in a bar for a man who never comes. 1950s, a harbor town.' },
  ],
  input: '', focus: true,
});
const col3 = `<div class="chap"><h1 class="ph">Chapter 1</h1></div><div class="para"><p class="first"><span class="cursor"></span></p></div>`;
const win3 = L.win({
  view: 'Text', crumbs: 'Chapter 1', strip: { review: 0 }, rightOn: true, width: 780, height: 470, ask: false,
  right: `<div class="dock">${chat}</div>`,
  page: L.pageCol(col3, { paddingTop: 50 }),
  status: { style: 'Plain', words: '0 words', goal: 0, pages: 'p. 1 of 1', saved: 'Saved', keys: false },
});

const html = css + main.replace('<div class="win"', '<div class="win s02e"') + `<div class="below s02e">`
  + `<div class="crop" style="width:582px"><div class="lbl">After 12 words: the doors are gone, nothing else changed</div><div class="miniwin nz">${win2}</div></div>`
  + `<div class="crop" style="width:782px"><div class="lbl">“Start from an idea ✦” opened: the conversation docks in the side panel</div><div class="miniwin dk">${win3}</div></div>`
  + `</div>`;

module.exports = {
  id: 'S02',
  file: 's02-empty-chapter',
  title: 'The empty first chapter',
  width: 1440,
  height: 1150,
  html,
  caption: L.caption({
    id: 'S02', title: 'The empty first chapter',
    scene: 'A new project has just been created. Chapter 1 is open and empty, the cursor blinks, and below it three quiet doors offer a way in. Under the window: the same chapter after twelve words, and the “Start from an idea” door opened as a conversation in the side panel.',
    on: 'the strip with a plain Review button, the gray placeholder “Chapter 1”, the cursor, the three doors (Just write, Plan first, Start from an idea ✦), the status bar (“0 words”, an empty ring, “Saved”), the Ask button; inset 1 with twelve words and no doors; inset 2 with the side panel “Ask · New book”, a context strip, three numbered questions and one answer',
    off: 'the Navigator, a template gallery, a wizard, a pop-up, any mark or note, anything written into the chapter by the AI',
  }),
};
