// Shared pieces for the draft 8 screens S10 to S15 and S26 (not a screen: build.js only loads screens/*.js).
const L = require('./lib');

const pointer = (x, y) => `<svg class="cursorptr" style="left:${x}px;top:${y}px" width="14" height="20" viewBox="0 0 14 20"><path d="M1 1v15l4-3.5 2.5 6 2.5-1-2.5-5.5H13z" fill="#fff" stroke="#222" stroke-width="1.2" stroke-linejoin="round"/></svg>`;

// Lena as the side panel shows her: a summary, not the whole Codex entry
const facts5 = [
  ['Nobody’s been in that room since Tuesday.', 'ch. 7'],
  ['Locks the back room herself at closing.', 'ch. 8'],
  ['Drives a green Fiat.', 'ch. 6'],
  ['Smells of lemon; dries dry glasses.', 'ch. 7'],
  ['Has known Kit since he was a boy.', 'ch. 5'],
];
const lenaCss = `<style>
.lena-body .tcard{padding:12px 14px 8px}
.lena-body .f5>div{display:flex;gap:8px;justify-content:space-between;padding:3px 0;border-bottom:1px solid var(--line2);font-size:12.5px}
.lena-body .f5 .lk{flex:none;font-size:11.5px}
.lena-body .all{margin:6px 0 0;font-size:12px}
.lena-body .all .lk{text-decoration:underline;text-underline-offset:2px}
.lena-body .nh .tn{color:var(--ink4)}
.lena-body .rrow{padding:3px 0}
.ref .refname{padding:2px 16px 8px;font:600 19px var(--ui);color:var(--ink)}
.refhead .kind.nodot:after{content:""}
</style>`;
const lenaBody = () => `<div class="lena-body">` + L.refCard({ name: '', line: L.sample.lena.line,
  facts: [['Appears', 'ch. 2–8 · 31 mentions'], ['With', '<span class="lk">Kit</span>, <span class="lk">Vega</span> · at <span class="lk">the Blue Lamp</span>']] })
  + `<div class="nh">Facts <span class="sp"></span><span class="tn">five most recent</span></div>`
  + `<div class="f5">${facts5.map(([t, w]) => `<div><span>${t}</span><span class="lk">${w}</span></div>`).join('')}</div>`
  + `<div class="all"><span class="lk">All 84 facts in the Codex</span></div>`
  + `<div class="nh">Open questions</div><div class="q">How old is she? “about fifty” in <span class="lk">ch. 2</span>, “not yet forty” in <span class="lk">ch. 8</span></div>`
  + `<div class="nh">Research topics</div>`
  + `<div class="rrow"><div class="pic sm"></div><div class="t"><span class="lk">Bars in the 1950s</span><small>topic · 6 notes</small></div></div>`
  + `<div class="rrow"><div class="pic sm"></div><div class="t"><span class="lk">The Blue Lamp’s history</span><small>topic · 2 photos</small></div></div>`
  + `</div>`;

// kind glyphs for Go to rows (people violet, places cyan, things brown, never the mark colors)
const g = (inner, color) => `<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="${color}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;
const KIND = {
  chapter: [L.icons.view, 'Chapter'],
  scene: [g('<path d="M3 4h10M3 8h10M3 12h6"/>', '#6b6e73'), 'Scene'],
  person: [g('<circle cx="8" cy="5.6" r="2.8" fill="#6f4fc9" stroke="none"/><path d="M2.8 14a5.2 5.2 0 0 1 10.4 0z" fill="#6f4fc9" stroke="none"/>', '#6f4fc9'), 'Person'],
  thing: [g('<path d="M8 1.8 13.6 8 8 14.2 2.4 8z" fill="#8b5a3c" stroke="none"/>', '#8b5a3c'), 'Thing'],
  topic: [g('<path d="M4 2h8v12.5l-4-3-4 3z" fill="#7d8087" stroke="none"/>', '#7d8087'), 'Topic'],
  cmd: [g('<path d="m4 5 3 3-3 3M8.5 11.5h4"/>', '#6b6e73'), 'Command'],
  ai: [L.icons.spark, 'AI'],
  ask: [L.icons.spark, 'Ask'],
  link: [g('<path d="M6.5 9.5 9.5 6.5M7 4.5l1.2-1.2a2.6 2.6 0 0 1 3.7 3.7L10.7 8.2M9 11.5l-1.2 1.2a2.6 2.6 0 0 1-3.7-3.7L5.3 7.8"/>', '#9a9ca1'), ''],
};

module.exports = { pointer, lenaBody, lenaCss, KIND, g };
