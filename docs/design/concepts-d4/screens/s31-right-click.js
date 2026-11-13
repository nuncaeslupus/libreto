// S31: Right-click, everywhere. Not a moment: the right-click menus side by side, each under the name of
// the place it opens, so they can be checked as one family. No window.
const L = require('../lib');
const I = L.icons;

const css = `<style>
.s31{position:relative;background:#d9d9d6;padding:26px 28px 0;height:560px;box-sizing:border-box}
.s31 .row{display:flex;justify-content:space-between;align-items:flex-start}
.s31 .cell{flex:none}
.s31 .lbl{font:600 11px var(--ui);letter-spacing:.06em;text-transform:uppercase;color:#66696e;padding:0 0 8px 3px;white-space:nowrap}
.s31 .menu{position:static;min-width:150px;width:max-content}
.s31 .mi{padding:5px 11px 5px 10px;gap:8px}
.s31 .mi .g{width:15px;flex:none;display:inline-flex;justify-content:center;align-items:center;font-size:12.5px;line-height:1}
.s31 .mi .g svg{width:14px;height:14px}
.s31 .g.ok{color:var(--fix)}.s31 .g.no{color:var(--ink2)}.s31 .g.nt{color:var(--note)}.s31 .g.ai{color:var(--ink2)}
.s31 .stack{display:flex;flex-direction:column;gap:22px}
.s31 .mi.dis .r{color:var(--ink4)}
.s31 .mi .r{padding-left:14px;font-size:11px}
</style>`;

// mi(text, {g: glyph or icon in the icon column, gc: its color class, r: text at the right})
const mi = (t, o = {}) => `<div class="mi${o.dis ? ' dis' : ''}">${o.g !== undefined ? `<span class="g ${o.gc || ''}">${o.g}</span>` : ''}<span>${t}</span>${o.r ? `<span class="r">${o.r}</span>` : ''}</div>`;
const sep = '<div class="msep"></div>';
const menu = (items) => `<div class="menu">${items.join('')}</div>`;
const cell = (label, items) => `<div class="cell"><div class="lbl">${label}</div>${menu(items)}</div>`;
const cellIn = (label, items) => `<div><div class="lbl">${label}</div>${menu(items)}</div>`;
const E = { g: '' };                       // an empty slot: menus that carry an icon keep one column for it
const NOTE = { g: I.note, gc: 'nt' };      // the note icon
const AI = { g: I.spark, gc: 'ai' };       // the spark: the AI, wherever it is meant

const board = `<div class="row">`
  + cell('Text, with a selection', [mi('Emphasis', E), mi('Strong', E), mi('Style as', { ...E, r: '▸' }), sep,
    mi('Add note', NOTE), mi('Ask the AI about this', AI), mi('Look up “Lena”', E), mi('Find in the book', E), sep,
    mi('Cut', E), mi('Copy', E), mi('Paste', E)])
  + cell('Text, no selection', [mi('Style as', { ...E, r: '▸' }), sep, mi('New scene here', E), mi('New chapter here', E), sep,
    mi('Add note', NOTE), sep, mi('Paste', E)])
  + cell('A mark (here a blue one)', [mi('Apply', { g: '✓', gc: 'ok' }), mi('Skip', { g: '✗', gc: 'no' }), sep,
    mi('Add note', NOTE), mi('Open in Review', E), sep, mi('Add to dictionary', { ...E, dis: true, r: 'red marks' })])
  + cell('A chapter row', [mi('New chapter before'), mi('New chapter after'), sep, mi('Start a new part at this chapter'), sep,
    mi('Rename'), mi('Remove the chapter mark'), sep, mi('Delete chapter…')])
  + `<div class="cell stack">`
  + cellIn('A scene row', [mi('New scene before'), mi('New scene after'), sep, mi('Rename'), mi('Start a new chapter here'), mi('Remove the scene break'), sep, mi('Delete scene…')])
  + cellIn('A part row', [mi('Rename'), mi('Remove the part mark')])
  + `</div>`
  + cell('A Plan card', [mi('Open'), mi('Rename'), sep, mi('Labels', { r: '▸' }), mi('Move to', { r: '▸' }), sep, mi('Unplace'), mi('Discard…')])
  + cell('A Codex entry', [mi('Open'), mi('Rename everywhere'), sep, mi('Show in the text'), mi('Research this')])
  + `</div>`;

const anns = L.ann(1, 'One rule for all of them: the few things done here most often, then the way to the rest. Look up appears only when the selection is a name', 28, 400, { w: 300 })
  + L.ann(2, 'They walk, they don’t filter: arrows and Enter, Esc closes. Only the menu bar’s menus and the palettes filter as you type', 28, 480, { w: 300 })
  + L.ann(3, 'The only icons are the ones the app already uses: ✓ ✗ for marks, the note, the spark for the AI', 400, 400, { w: 280 })
  + L.ann(4, 'Add to dictionary shows on a red mark only; ✓ reads Keep on a green one', 400, 480, { w: 280 })
  + L.ann(5, 'One menu per level. Remove takes the mark away and keeps the text, without asking; Delete… asks, in words and pages', 760, 440, { w: 300 })
  + L.ann(6, 'Unplace moves the card to the Unplaced lane; Discard… keeps it, out of the book, in the Discarded lane', 1090, 330, { w: 300 });

module.exports = {
  id: 'S31',
  file: 's31-right-click',
  title: 'Right-click, everywhere',
  width: 1440,
  height: 680,
  html: css + `<div class="s31">${board}${anns}</div>`,
  caption: L.caption({
    id: 'S31', title: 'Right-click, everywhere',
    scene: 'Not a moment in the app: the right-click menus side by side, each under the name of the place it opens on, so they can be checked as one family.',
    on: 'TEXT, WITH A SELECTION: Emphasis, Strong, Style as ▸ · Add note, Ask the AI about this, Look up “Lena”, Find in the book · Cut, Copy, Paste. TEXT, NO SELECTION: Style as ▸ · New scene here, New chapter here · Add note · Paste. A MARK: ✓ Apply, ✗ Skip · Add note, Open in Review · Add to dictionary (gray: red marks only). A CHAPTER ROW: New chapter before, New chapter after · Start a new part at this chapter · Rename, Remove the chapter mark · Delete chapter…. A SCENE ROW: New scene before, New scene after · Rename, Start a new chapter here, Remove the scene break · Delete scene…. A PART ROW: Rename, Remove the part mark. A PLAN CARD: Open, Rename · Labels ▸, Move to ▸ · Unplace, Discard…. A CODEX ENTRY: Open, Rename everywhere · Show in the text, Research this. Icons: the note on Add note, the spark on Ask the AI about this, ✓ and ✗ on the mark menu, nothing else',
    off: 'a window or the thing each menu was opened on, the Style as, Labels and Move to submenus, shortcuts at the right of the items, a hovered item, a filter box, the delete dialogs, the full inventory (a page of the specification)',
  }),
};
