// S03: The marks, up close. Not a window: five crops at twice the size, so the rules can be checked once.
const L = require('../lib');
const I = L.icons;

const css = `<style>
.s03{display:flex;flex-wrap:wrap;gap:20px;padding:24px 28px 10px;background:#d9d9d6;align-items:flex-start}
.s03 .crop>.z{zoom:2;padding:14px 16px 16px}
.s03 .text{font:18px/1.72 var(--text);color:var(--ink)}
.s03 .text p{margin:0}
.s03 .para{position:relative;width:250px}
.s03 .proplbl{font:11px var(--ui);color:var(--ink3);margin-left:8px;vertical-align:1px}
.s03 .navbox{background:var(--soft);border:1px solid var(--line);border-radius:8px;padding:6px 8px;width:270px;font-size:13px}
.s03 .nrow .cnt{width:auto;flex:none;display:flex;gap:7px;justify-content:flex-end;font-size:11px;color:var(--ink2);padding:0 2px 0 6px}
.s03 .nrow .cnt span{display:inline-flex;align-items:center;gap:3px}
.s03 .nrow .cnt svg{width:11px;height:11px}
.s03 .nrow .cnt .k-note{color:var(--note)}.s03 .nrow .cnt .k-task{color:var(--task)}
.s03 .nrow.cur{background:#e6e6e3;font-weight:600}.s03 .nrow.cur .cnt{font-weight:500}
.s03 .kf{display:flex;gap:4px;flex-wrap:nowrap}
.s03 .kf span{display:inline-flex;align-items:center;gap:4px;font-size:12px;padding:2px 9px;border-radius:12px;color:var(--ink2);border:1px solid transparent;white-space:nowrap}
.s03 .kf span.on{background:#fff;border-color:var(--line);color:var(--ink);font-weight:600}
.s03 .kf svg{width:12px;height:12px}
.s03 .kf .k-note svg{color:var(--note)}.s03 .kf .k-task svg{color:var(--task)}.s03 .kf .k-fix svg{color:var(--fix)}
.s03 .menu{position:static;width:200px;box-shadow:0 1px 3px rgba(0,0,0,.08)}
.s03 .menu .mi{padding:4px 10px;gap:8px}
.s03 .menu .mi svg{width:13px;height:13px}
.s03 .menu .mi .lb{flex:1}
.s03 .legend{width:100%;font:15px var(--ui);color:var(--ink);padding:6px 4px 14px}
</style>`;

const crop = (label, w, inner) => `<div class="crop" style="width:${w}px"><div class="lbl">${label}</div><div class="z">${inner}</div></div>`;

const underlines = `<div class="text" style="white-space:nowrap">Vega had <span class="u-spell">recieved</span> <span class="u-fix">the</span> letters<span class="u-fix">, </span><span class="u-gram">which were</span> still sealed.&nbsp;&nbsp;&nbsp;&nbsp;<span class="u-prop">Chapter 8</span><span class="proplbl">proposed heading</span></div>`;

const gutterText = `<div class="text"><div class="para"><p>“Lena,” she said quietly, “if he’s in trouble, I’d rather hear it from you.”</p>`
  + L.gm('note', L.lineTop(0)) + L.gm('task', L.lineTop(1)) + L.gutter(['note', 'task', 'fix', 'x', 'y'], L.lineTop(2)) + `</div></div>`;

const counts = `<div class="navbox">`
  + `<div class="nrow"><span class="cv"></span><span class="n">6</span><span class="t">The back room</span><span class="cnt"><span class="k-note">2${I.note}</span></span></div>`
  + `<div class="nrow cur"><span class="cv">${I.chevron}</span><span class="n">7</span><span class="t">Lena’s warning</span><span class="cnt"><span class="k-note">1${I.note}</span><span class="k-task">2${I.task}</span></span></div>`
  + `<div class="nrow"><span class="cv"></span><span class="n">9</span><span class="t">The pawnshop</span><span class="cnt"><span class="k-task">99+${I.task}</span></span></div>`
  + `</div>`;

const chips = `<div class="kf"><span class="on">All 11</span><span class="k-note">${I.note}Notes 5</span><span class="k-task">${I.task}Tasks 3</span><span class="k-fix">${I.fix}Fixes 3</span><span>Editor</span><span>AI</span></div>`;

const row = (on, sw, label, icon) => `<div class="mi"><span class="cb${on ? ' on' : ''}"></span><span class="sw" style="background:${sw}"></span>${icon ? `<span style="color:${sw};display:inline-flex">${icon}</span>` : ''}<span class="lb">${label}</span></div>`;
const highlights = `<div class="menu">`
  + row(true, 'rgba(59,110,168,.55)', 'People') + row(true, 'rgba(47,138,102,.55)', 'Places') + row(true, 'rgba(138,92,194,.55)', 'Things')
  + row(false, 'rgba(176,86,126,.55)', 'Motifs') + row(true, '#d1a73a', 'Styles')
  + row(false, 'var(--note)', 'Notes', I.note) + row(false, 'var(--task)', 'Tasks', I.task) + row(false, 'var(--fix)', 'Fixes', I.fix)
  + row(false, '#9a9ca1', 'AI-written')
  + `</div>`;

const html = css + `<div class="s03">`
  + crop('Underlines', 1384, underlines)
  + crop('Gutter icons', 760, gutterText)
  + crop('Counts', 604, counts)
  + crop('Filter chips (Review)', 920, chips)
  + crop('Highlights menu', 444, highlights)
  + `<div class="legend">Dotted green = done · Dashed gray = proposed · Icons in the gutter = things to look at</div>`
  + `</div>`;

module.exports = {
  id: 'S03',
  file: 's03-marks-up-close',
  title: 'The marks, up close',
  width: 1440,
  height: 900,
  html,
  caption: L.caption({
    id: 'S03', title: 'The marks, up close',
    scene: 'Not a moment in the app: a legend. The family of marks at twice the size: the four underlines, the three gutter icons and how they stack, the same icons as counts beside chapters, on the Review filter chips and in the Highlights menu.',
    on: 'Underlines: “recieved” red dotted (spelling), “the” green dotted (done), “, ” green dotted on the comma and the space, “which were” blue dotted (grammar), “Chapter 8” dashed gray (proposed heading). Gutter icons: a note, a task, and note + task + fix with “+2” on one line. Counts: 6 The back room 2 notes, 7 Lena’s warning 1 note 2 tasks, 9 The pawnshop 99+ tasks. Filter chips: All 11, Notes 5, Tasks 3, Fixes 3, Editor, AI. Highlights menu: People, Places, Things, Motifs, Styles, Notes, Tasks, Fixes, AI-written with swatches and the icons. The rule in one line',
    off: 'a window, text around the marks, any moment in the book',
  }),
};
