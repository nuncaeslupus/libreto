// S11: Ask, the conversation docked in the side panel (draft 8; from draft 7's S09).
const L = require('../lib');
const P = L.sample.chapter7Plain.slice();

// the proposal in the text: dashed blue under the words that would change; a thin bar beside the paragraph discussed
P[5] = P[5].replace('Nobody’s been in that room since', '<span class="u-prop">Nobody’s been in that room since</span>');
const col = `<div class="chap"><div class="num">CHAPTER 7</div><h1>Lena’s warning</h1></div>`
  + P.map((p, i) => {
    const para = `<p${i === 0 ? ' class="first"' : ''}>${p}</p>`;
    return i === 5 ? `<div class="para"><span class="lbar"></span>${para}</div>` : para;
  }).join('');

const css = `<style>
.s11 .page .lbar{position:absolute;left:-14px;top:3px;height:60px;width:2px;background:var(--accent);border-radius:1px}
.s11 .ref{width:390px}
.s11 .chat{flex:1;min-height:0;overflow:hidden;padding:12px 14px 0;font-size:13px;line-height:1.5;display:flex;flex-direction:column;gap:10px}
.s11 .ctx{flex:none;display:flex;flex-wrap:wrap;gap:5px;align-items:center;padding:8px 12px;border-bottom:1px solid var(--line2);font-size:11.5px;color:var(--ink2);background:var(--paper)}
.s11 .ctx .chip{border:1px solid var(--line);border-radius:11px;padding:1px 8px;background:#fff}
.s11 .ctx .tok{margin-left:auto;color:var(--ink3)}
.s11 .ctx .lbl2{color:var(--ink3);margin-right:2px}
.s11 .me{align-self:flex-end;max-width:85%;background:#ebebe8;border-radius:12px 12px 3px 12px;padding:6px 11px}
.s11 .ai{position:relative}
.s11 .ai .links{display:flex;gap:14px;margin:5px 0 2px}
.s11 .ai .links .lk{text-decoration:underline;text-underline-offset:2px}
.s11 .small .btn{height:24px;padding:0 9px;font-size:12px}
.s11 .prop{border:1px solid var(--line);border-radius:9px;background:#fff;overflow:hidden;box-shadow:0 0 0 3px var(--accent-tint)}
.s11 .prop .ph{display:flex;align-items:center;gap:7px;padding:6px 10px 2px;font-weight:600;font-size:12.5px}
.s11 .prop .ph svg{width:15px;height:15px;color:var(--gram)}
.s11 .prop .ph .who{margin-left:auto}
.s11 .prop .ba{display:grid;grid-template-columns:auto 1fr;gap:2px 10px;padding:2px 10px 8px;font:14px/1.45 var(--text)}
.s11 .prop .ba .l{font:10.5px/2 var(--ui);letter-spacing:.06em;text-transform:uppercase;color:var(--ink3)}
.s11 .prop .was{background:var(--red-tint,rgba(196,61,61,.12));border-radius:2px}
.s11 .prop .now{background:var(--accent-soft);border-radius:2px}
.s11 .prop .pa{display:flex;gap:6px;padding:7px 10px;border-top:1px solid var(--line2);background:var(--soft)}
.s11 .prop .pa .btn{height:26px;padding:0 10px;font-size:12px}
.s11 .prop.old{background:#eef1f5;border-color:#cdd6e2;box-shadow:none}
.s11 .prop.old .ph svg{color:var(--ink3)}
.s11 .prop.old .ba{color:var(--ink2)}
.s11 .prop.old .pa{background:#e7ebf1}
.s11 .prop .why{padding:0 10px 6px;color:var(--ink2);font-size:12px}
.s11 .chip-out{display:inline-block;border:1px solid #b9c3d3;border-radius:10px;padding:0 7px;font-size:11px;color:#4d5d76;background:#fff;margin-left:auto}
.s11 .ai.hv{margin-bottom:30px}
.s11 .cost{position:absolute;right:0;bottom:-34px;white-space:nowrap;background:#222326;color:#fff;border-radius:6px;padding:5px 9px;font-size:11.5px;line-height:1.4;white-space:nowrap;z-index:8;box-shadow:0 4px 12px rgba(0,0,0,.2)}
.s11 .cost span{color:#c7c8cc}
.s11 .inp{flex:none;margin:8px 12px 12px;border:1px solid var(--line);border-radius:10px;padding:7px 7px 7px 12px;display:flex;gap:8px;align-items:center;color:var(--ink3);background:#fff}
.s11 .inp .ph{flex:1}
.s11 .inp .snd{width:24px;height:24px;border-radius:12px;background:var(--ink4);display:flex;align-items:center;justify-content:center}
.s11 .inp .snd svg{width:12px;height:12px;stroke:#fff}
.s11 .askh{height:40px;flex:none;display:flex;align-items:center;gap:2px;padding:0 10px 0 14px;border-bottom:1px solid var(--line2)}
.s11 .askh .kind{font:600 10.5px var(--ui);letter-spacing:.08em;text-transform:uppercase;color:var(--ink3);margin-right:8px}
.s11 .askh b{font-weight:600;flex:1;min-width:0}
.s11 .ib{width:26px;height:26px}
</style>`;

const sp = L.icons.spark;
const panel = `<div class="ref">`
  + `<div class="askh"><span class="kind">Ask</span><b>Lena’s lie</b>${L.ib('history-list', '', 'Earlier conversations')}${L.ib('plus', '', 'New conversation')}<span class="ib rx" title="Close the panel">✕</span></div>`
  + `<div class="ctx"><span class="lbl2">Sent with this:</span><span class="chip">Brief</span><span class="chip">ch. 7 · scene 2</span><span class="chip">Lena</span><span class="chip">Kit</span><span class="tok">≈ 3.1k tokens</span></div>`
  + `<div class="chat">`
  + `<div class="me">Tighten the paragraph after the lie.</div>`
  + `<div class="prop old"><div class="ph">${L.icons.pending}Suggestion<span class="chip-out">Out of date</span></div>`
  + `<div class="why">Your text changed since this was written.</div>`
  + `<div class="pa small"><span class="btn">Show both</span><span class="btn">Ask again</span><span class="btn q">Reject</span></div></div>`
  + `<div class="me">Does Lena give herself away in this scene?</div>`
  + `<div class="ai hv">Once. She says nobody has been in the back room “since Tuesday”, but in <span class="lk">chapter 11</span> she tells <span class="lk">Kit</span> she unlocked it for him that Wednesday.`
  + `<div class="links"><span class="lk">Go to chapter 7</span><span class="lk">Go to chapter 11</span></div>`
  + `<div class="cost">≈ 0.02 € · 3.3k tokens · Claude Desktop</div></div>`
  + `<div class="me">Make her second line colder.</div>`
  + `<div class="prop"><div class="ph">${L.icons.pending}Suggestion · ch. 7${L.who('ai')}</div>`
  + `<div class="ba"><span class="l">Was</span><span>“Nobody came in at nine. <span class="was">Nobody’s been in that room since</span> Tuesday.”</span><span class="l">Now</span><span>“Nobody came in at nine. <span class="now">That room has been locked since</span> Tuesday.”</span></div>`
  + `<div class="pa"><span class="btn pri">Accept</span><span class="btn">Reject</span><span class="btn">Edit</span></div></div>`
  + `</div>`
  + `<div class="inp"><span class="ph">Message</span><span class="snd">${L.icons.send}</span></div>`
  + `</div>`;

const html = css + L.win({
  view: 'Text', crumbs: L.sample.crumbs7, strip: { review: 12 },
  right: panel,
  page: L.pageCol(col, { paddingTop: 40 }),
  status: { style: 'Plain', words: '812 of 1,000 today', goal: 81, pages: 'p. 146 of 248' },
  ask: false,
  extra: L.ann(1, 'The conversation docks in the side panel beside the text; nothing floats over the page', 24, 130, { w: 330 })
    + L.ann(2, 'The context strip says what travels with the question: the Brief, this scene, the entries it mentions, and the size', 24, 250, { w: 330 })
    + L.ann(3, 'An answer links to where it points: a chapter moves the page (Back returns), a name opens in this panel', 24, 380, { w: 330 })
    + L.ann(4, 'Hover an answer for what it cost and which connection answered', 24, 500, { w: 330 })
    + L.ann(5, 'A suggestion shows only the words that change, tinted. The same dashed blue underline marks them in the text; nothing is applied until Accept', 24, 610, { w: 330 })
    + L.ann(6, 'A suggestion stores the text it was based on. If that text changed, the card turns gray-blue, “Out of date”, and is never applied blindly', 24, 750, { w: 330 }),
});

module.exports = {
  id: 'S11', file: 's11-ask-chat', title: 'Ask: a conversation', width: 1440, height: 900,
  html: html.replace('<div class="win"', '<div class="win s11"'),
  caption: L.caption({
    id: 'S11', title: 'Ask: a conversation',
    scene: 'Chapter 7, scene 2, with the Ask conversation docked in the side panel. An earlier suggestion (“Tighten the paragraph after the lie”) is Out of date because the writer edited the paragraph since. The writer asked whether Lena gives herself away; the answer links to chapter 11 and to Kit, and a hover shows its cost. The last request, a colder second line, is a suggestion with the changed words tinted and Accept, Reject and Edit.',
    on: 'the side panel headed Ask · Lena’s lie (history, new, close); the context strip Brief · ch. 7 · scene 2 · Lena · Kit · ≈ 3.1k tokens; the Out of date suggestion with Show both · Ask again · Reject; the answer with Go to chapter 7 and Go to chapter 11; the cost hover (≈ 0.02 €); the new suggestion with Was/Now and Accept · Reject · Edit; the Message box; the dashed blue underline and the thin bar in the text; Review 12 in the strip',
    off: 'a floating panel, the navigator, the Ask round button (the panel is open), an applied change, a provider logo',
  }),
};
