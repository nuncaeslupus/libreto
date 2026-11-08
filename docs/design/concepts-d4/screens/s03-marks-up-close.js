// S03: The marks, up close. Not a window: a board of crops at twice the size, so the rules can be checked once:
// the underlines, one word one underline, the gutter icons (one per line, with a count), the stack list card a
// count opens, the keys, the Review filter chips (kinds, then people), the counts beside chapters, the Highlights menu.
const L = require('../lib');
const I = L.icons;

// --- marks the toolkit does not have yet (lib.js has no proposal icon): the look defined here is reused in S02 ---
const svg = (inner, sw = 1.5) => `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;
const propIcon = svg('<circle cx="8" cy="8" r="6.3" stroke-dasharray="2.6 2.4"/>');
const icon = (kind) => (kind === 'prop' ? propIcon : I[kind]);
// one icon per line: the first mark's icon, then a small count when the line holds several (sel: the clicked count)
const gmCount = (kind, n, top, o = {}) => `<span class="gms" style="top:${top}px"><span class="gm ${kind}">${icon(kind)}</span><span class="gm more${o.sel ? ' sel' : ''}">${n}</span></span>`;
const gmProp = (top) => `<span class="gm prop" style="top:${top}px">${propIcon}</span>`;

const css = `<style>
.s03{position:relative;display:flex;flex-wrap:wrap;gap:20px;padding:24px 28px 14px;background:#d9d9d6;align-items:flex-start}
.s03 .crop>.z{zoom:2;padding:14px 16px 16px}
.s03 .crop>.z.tall{padding-bottom:44px}
.s03 .crop>.z1{padding:14px 16px 16px}
.s03 .text{font:18px/1.72 var(--text);color:var(--ink)}
.s03 .text p{margin:0}
.s03 .para{position:relative;width:250px}
.s03 .proplbl{font:11px var(--ui);color:var(--ink3);margin-left:8px;vertical-align:1px}
.s03 .gm.prop{color:var(--ink3)}
.s03 .gm.prop svg{width:16px;height:16px}
.s03 .gm.more.sel{box-shadow:0 0 0 2px #fff,0 0 0 3.5px currentColor;border-radius:4px;background:#fff}
.s03 .ex{display:flex;gap:18px;align-items:flex-start}
.s03 .ex>div{flex:none}
.s03 .ex .cap{font:9.5px/1.35 var(--ui);color:var(--ink3);margin-top:6px;white-space:normal}
.s03 .ex .text{white-space:nowrap}
.s03 .gi{display:inline-flex;align-items:center;gap:4px;margin-left:12px;vertical-align:middle;color:var(--ink3)}
.s03 .gi svg{width:16px;height:16px}
.s03 .gi .more{font:600 10px var(--ui);color:var(--ink3)}
.s03 .navbox{background:var(--soft);border:1px solid var(--line);border-radius:8px;padding:6px 8px;width:270px;font-size:13px}
.s03 .nrow .cnt{width:auto;flex:none;display:flex;gap:7px;justify-content:flex-end;font-size:11px;color:var(--ink2);padding:0 2px 0 6px}
.s03 .nrow .cnt span{display:inline-flex;align-items:center;gap:3px}
.s03 .nrow .cnt svg{width:11px;height:11px}
.s03 .nrow .cnt .k-note{color:var(--note)}.s03 .nrow .cnt .k-task{color:var(--task)}
.s03 .nrow.cur{background:#e6e6e3;font-weight:600}.s03 .nrow.cur .cnt{font-weight:500}
.s03 .kf{display:flex;gap:4px;flex-wrap:nowrap;align-items:center}
.s03 .kf span{display:inline-flex;align-items:center;gap:4px;font-size:12px;padding:2px 9px;border-radius:12px;color:var(--ink2);border:1px solid transparent;white-space:nowrap}
.s03 .kf span.on{background:#fff;border-color:var(--line);color:var(--ink);font-weight:600}
.s03 .kf svg{width:12px;height:12px}
.s03 .kf .k-note svg{color:var(--note)}.s03 .kf .k-task svg{color:var(--task)}.s03 .kf .k-fix svg{color:var(--fix)}
.s03 .kf .sep{width:1px;height:16px;background:var(--line);margin:0 5px;padding:0;border:0;border-radius:0}
.s03 .kf .sp{display:inline-block;width:6px;height:6px;border-radius:50%;background:var(--spell);padding:0;border:0}
.s03 .menu{position:static;width:200px;box-shadow:0 1px 3px rgba(0,0,0,.08)}
.s03 .menu .mi{padding:4px 10px;gap:8px}
.s03 .menu .mi svg{width:13px;height:13px}
.s03 .menu .mi .lb{flex:1}
/* the stack list card: what a click on a count opens */
.s03 .stk{width:320px;background:#fff;border:1px solid var(--line);border-radius:9px;box-shadow:0 10px 30px rgba(0,0,0,.14),0 1px 3px rgba(0,0,0,.06);font:12.5px/1.35 var(--ui);color:var(--ink);padding:8px 10px}
.s03 .stk-h{display:flex;align-items:center;gap:7px;margin-bottom:6px;font-weight:600}
.s03 .stk-h .gm{flex:none}
.s03 .stk-r{display:flex;align-items:center;gap:8px;padding:5px 6px;border-radius:6px;border-top:1px solid var(--line2)}
.s03 .stk-r.cur{background:var(--accent-tint);border-top-color:transparent}
.s03 .stk-r .gm{flex:none}
.s03 .stk-r .ba{flex:1;min-width:0;font:14px/1.3 var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.s03 .stk-r .ba .was{color:var(--ink2)}
.s03 .stk-r .ba i{font-style:normal;color:var(--ink3);margin:0 6px}
.s03 .stk-r .acts{display:flex;gap:4px;flex:none}
.s03 .stk-r .acts span{width:22px;height:22px;border:1px solid var(--line);border-radius:5px;display:inline-flex;align-items:center;justify-content:center;font-size:12px;color:var(--ink)}
.s03 .stk-r .acts span:first-child{color:var(--accent);border-color:var(--accent)}
.s03 .stk-f{border-top:1px solid var(--line2);margin-top:4px;padding-top:7px;color:var(--ink3);font-size:11.5px;display:flex;gap:5px;align-items:center;flex-wrap:wrap}
/* the keys */
.s03 .keys{display:grid;grid-template-columns:auto 1fr;gap:9px 12px;align-items:center;font:12.5px var(--ui);color:var(--ink)}
.s03 .keys .k{display:flex;gap:4px;justify-content:flex-end;align-items:center;white-space:nowrap;color:var(--ink3)}
.s03 .keys kbd{font-size:11.5px;padding:1px 6px}
.s03 .legend{width:290px;font:14px/1.5 var(--ui);color:var(--ink);padding:4px 4px 0}
.s03 .legend b{font-weight:600}
</style>`;

const crop = (label, w, inner, z = 'z') => `<div class="crop" style="width:${w}px"><div class="lbl">${label}</div><div class="${z}">${inner}</div></div>`;

// 1. the underlines
const underlines = `<div class="text" style="white-space:nowrap">Vega had <span class="u-spell">recieved</span> <span class="u-fix">the</span> letters<span class="u-fix">, </span><span class="u-gram">which were</span> still sealed.&nbsp;&nbsp;&nbsp;&nbsp;<span class="u-prop">Chapter 8</span><span class="proplbl">proposed heading</span></div>`;

// 2. one word, one underline
const oneWord = `<div class="ex">`
  + `<div style="width:236px"><div class="text"><span class="u-gram">the letters was still sealed</span></div><div class="cap">One problem, one underline under the whole affected text, never one per word</div></div>`
  + `<div style="width:186px"><div class="text"><span class="u-gram">the </span><span class="u-spell">leters</span><span class="u-gram"> was</span></div><div class="cap">Red over blue: spelling is settled before grammar is judged</div></div>`
  + `<div style="width:200px"><div class="text"><span class="u-gram">the letters was</span><span class="gi">${propIcon}<span class="more">2</span></span></div><div class="cap">Blue over green: “the” was fixed, but the open proposal shows; the gutter icon still counts both</div></div>`
  + `</div>`;

// 3. the gutter: one icon per line, a count when the line holds several; the clicked count carries a ring
const gutterText = `<div class="text"><div class="para"><p>“Lena,” she said quietly, “if he’s in trouble, I’d rather hear it from you.” “Then hear this.” Lena leaned close enough that Vega could smell the lemon on her hands.</p>`
  + L.gm('note', L.lineTop(0)) + L.gm('task', L.lineTop(1)) + L.gm('fix', L.lineTop(2)) + gmProp(L.lineTop(3))
  + gmCount('note', 2, L.lineTop(4)) + gmCount('fix', 3, L.lineTop(5), { sel: true }) + `</div></div>`;

// 4. the stack list card a count opens
const stkRow = (kind, was, now, cur) => `<div class="stk-r${cur ? ' cur' : ''}"><span class="gm ${kind}">${icon(kind)}</span><span class="ba"><span class="was">${was}</span><i>→</i>${now}</span><span class="acts"><span>✓</span><span>✗</span></span></div>`;
const stack = `<div class="stk"><div class="stk-h"><span class="gm fix">${I.fix}</span>3 marks on this line</div>`
  + stkRow('fix', 'teh', 'the', true) + stkRow('fix', 'recieved', 'received') + stkRow('prop', 'the letters was', 'the letters were')
  + `<div class="stk-f"><kbd>Enter</kbd> ✓ and walks to the next row · <kbd>Delete</kbd> ✗ · <kbd>Esc</kbd> closes</div></div>`;

// 5. the keys
const keys = `<div class="keys">`
  + `<span class="k"><kbd>Ctrl+.</kbd></span><span>opens the card of the mark at the cursor</span>`
  + `<span class="k"><kbd>Enter</kbd></span><span>✓ Keep or Apply</span>`
  + `<span class="k"><kbd>Delete</kbd></span><span>✗ Undo or Skip</span>`
  + `<span class="k"><kbd>Esc</kbd></span><span>closes the card</span>`
  + `<span class="k"><kbd>F8</kbd> · <kbd>Shift+F8</kbd></span><span>next · previous mark</span>`
  + `</div>`;

// 6. the Review filter chips: kinds, then people; Spelling shows the red marks
const chips = `<div class="kf"><span class="on">All 11</span><span class="k-note">${I.note}Notes 5</span><span class="k-task">${I.task}Tasks 3</span><span class="k-fix">${I.fix}Fixes 3</span><span class="sep"></span><span>You 6</span><span>Marta 2</span><span>AI 3</span><span><span class="sp"></span>Spelling 4</span></div>`;

// 7. counts beside chapters
const counts = `<div class="navbox">`
  + `<div class="nrow"><span class="cv"></span><span class="n">6</span><span class="t">The back room</span><span class="cnt"><span class="k-note">2${I.note}</span></span></div>`
  + `<div class="nrow cur"><span class="cv">${I.chevron}</span><span class="n">7</span><span class="t">Lena’s warning</span><span class="cnt"><span class="k-note">1${I.note}</span><span class="k-task">2${I.task}</span></span></div>`
  + `<div class="nrow"><span class="cv"></span><span class="n">9</span><span class="t">The pawnshop</span><span class="cnt"><span class="k-task">99+${I.task}</span></span></div>`
  + `</div>`;

// 8. the Highlights menu
const row = (on, sw, label, ic) => `<div class="mi"><span class="cb${on ? ' on' : ''}"></span><span class="sw" style="background:${sw}"></span>${ic ? `<span style="color:${sw};display:inline-flex">${ic}</span>` : ''}<span class="lb">${label}</span></div>`;
const highlights = `<div class="menu">`
  + row(true, 'rgba(59,110,168,.55)', 'People') + row(true, 'rgba(47,138,102,.55)', 'Places') + row(true, 'rgba(138,92,194,.55)', 'Things')
  + row(false, 'rgba(176,86,126,.55)', 'Motifs') + row(true, '#d1a73a', 'Styles')
  + row(false, 'var(--note)', 'Notes', I.note) + row(false, 'var(--task)', 'Tasks', I.task) + row(false, 'var(--fix)', 'Fixes', I.fix)
  + row(false, '#9a9ca1', 'AI-written')
  + `</div>`;

const html = css + `<div class="s03">`
  + crop('Underlines', 1384, underlines, 'z tall')
  + crop('One word, one underline', 1384, oneWord)
  + crop('Gutter icons: one per line, a count when the line holds several', 664, gutterText)
  + crop('Click a count: the stack as a list', 352, stack, 'z1')
  + crop('Keys', 328, keys, 'z1')
  + crop('Filter chips (Review): kinds, then people', 1384, chips, 'z tall')
  + crop('Counts beside chapters', 600, counts)
  + crop('Highlights menu', 444, highlights)
  + `<div class="legend"><b>Dotted green</b> = done · <b>dashed gray</b> = proposed · <b>icons in the gutter</b> = things to look at · every one of them opens the same card.</div>`
  + L.ann(1, 'Nothing exists until you keep it: a proposed heading stays an ordinary paragraph; only Keep styles it and starts the chapter file at the next save', 867, 156, { w: 440 })
  + L.ann(2, 'The proposal icon is the dashed gray look as a circle: the same mark as the dashed underline and the dashed rule', 704, 858, { w: 300 })
  + L.ann(3, 'One icon per line, at the exact line, with a count when the line holds several marks. Red marks have no icon: they are fixed by typing', 704, 792, { w: 300 })
  + L.ann(4, 'A click on a count opens the stack as a list card: one row per mark, Was → Now, ✓ and ✗; Enter walks down the rows', 1076, 740, { w: 300 })
  + L.ann(5, 'Review filters by people, not roles: You, Marta, the AI. Names come from sharing and from Word comments; anyone unnamed is “A reader”. Spelling lists the red marks', 1000, 1128, { w: 340 })
  + L.ann(6, 'The same icons, with numbers, count notes and tasks beside each chapter, capped at 99+', 40, 1514, { w: 300 })
  + `</div>`;

module.exports = {
  id: 'S03',
  file: 's03-marks-up-close',
  title: 'The marks, up close',
  width: 1440,
  height: 1831,
  html,
  caption: L.caption({
    id: 'S03', title: 'The marks, up close',
    scene: 'Not a moment in the app: a legend. The family of marks at twice the size: the four underlines, the one-word-one-underline rule, the gutter icons with one icon per line and a count, the list a count opens, the keys, the same icons on the Review filter chips (then the people), as counts beside chapters and in the Highlights menu.',
    on: 'Underlines: “recieved” red dotted (unknown word), “the” green dotted (done), “, ” green dotted on the comma and the space, “which were” blue dotted (proposed), “Chapter 8” dashed gray (proposed heading). One word, one underline: one underline under “the letters was still sealed”; red “leters” inside a blue phrase; a blue phrase over a fixed “the” with a proposal icon and the count 2. Gutter icons: a note, a task, a fix, a dashed proposal, a note with the count 2, a fix with the count 3 and a ring. The stack list card: 3 marks on this line, rows teh → the (current), recieved → received, the letters was → the letters were, each with ✓ ✗, “Enter ✓ and walks to the next row · Delete ✗ · Esc closes”. Keys: Ctrl+. · Enter · Delete · Esc · F8 / Shift+F8. Filter chips: All 11, Notes 5, Tasks 3, Fixes 3, then You 6, Marta 2, AI 3, Spelling 4. Counts: 6 The back room 2 notes, 7 Lena’s warning 1 note 2 tasks, 9 The pawnshop 99+ tasks. Highlights menu: People, Places, Things, Motifs, Styles, Notes, Tasks, Fixes, AI-written with swatches and the icons. The rule in one line',
    off: 'a window, text around the marks, any moment in the book, the mark card itself (S02 shows it), the walker in Review (S15)',
  }),
};
