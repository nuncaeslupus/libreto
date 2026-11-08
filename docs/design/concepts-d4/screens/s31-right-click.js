// S31: Right-click, everywhere. Not a moment: the seven right-click menus side by side, each under the name of
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
.s31 .g.ok{color:var(--fix)}.s31 .g.no{color:var(--ink2)}.s31 .g.nt{color:var(--note)}
.s31 .mi .r{padding-left:14px;font-size:11px}
</style>`;

// mi(text, {g: glyph or icon in the icon column, gc: its color class, r: text at the right})
const mi = (t, o = {}) => `<div class="mi">${o.g !== undefined ? `<span class="g ${o.gc || ''}">${o.g}</span>` : ''}<span>${t}</span>${o.r ? `<span class="r">${o.r}</span>` : ''}</div>`;
const sep = '<div class="msep"></div>';
const menu = (items) => `<div class="menu">${items.join('')}</div>`;
const cell = (label, items) => `<div class="cell"><div class="lbl">${label}</div>${menu(items)}</div>`;
const E = { g: '' };                       // an empty slot: menus that carry an icon keep one column for it
const NOTE = { g: I.note, gc: 'nt' };      // the note icon, the one icon the text menus have

const board = `<div class="row">`
  + cell('Text, with a selection', [mi('Style as', { ...E, r: '▸' }), mi('Emphasis', E), mi('Thought', E), sep,
    mi('Add note', NOTE), mi('Ask about this', E), mi('Look up “Lena”', E), mi('Find in the book', E), sep,
    mi('Cut', E), mi('Copy', E), mi('Paste', E)])
  + cell('Text, no selection', [mi('Style as', { ...E, r: '▸' }), sep, mi('New chapter here', E), mi('Scene break here', E), sep,
    mi('Add note', NOTE), mi('Ask', E), sep, mi('Paste', E)])
  + cell('A mark or its icon', [mi('Keep', { g: '✓', gc: 'ok' }), mi('Undo', { g: '✗', gc: 'no' }), sep,
    mi('Add note', NOTE), mi('Why?', E), sep, mi('Ignore this word', E)])
  + cell('A chapter row', [mi('New chapter before'), mi('New chapter after'), sep, mi('New part before'), mi('New part after'), sep,
    mi('Rename'), mi('Remove the chapter mark'), sep, mi('Delete chapter…')])
  + cell('A scene row', [mi('Rename'), sep, mi('Start a new chapter here'), mi('Remove the scene break'), sep, mi('Delete scene…')])
  + cell('A Plan card', [mi('Open'), mi('Rename'), sep, mi('Labels', { r: '▸' }), mi('Move to', { r: '▸' }), sep, mi('Unplace'), sep, mi('Delete…')])
  + cell('A Codex entry', [mi('Open'), mi('Rename everywhere'), sep, mi('Highlight in the text'), mi('Research this'), sep, mi('Delete…')])
  + `</div>`;

const anns = L.ann(1, 'One rule for all seven: the few things done here most often, then the way to the rest, below the lines. Look up appears only when the selection is a name', 28, 376, { w: 300 })
  + L.ann(4, 'Without a selection the menu is structure, in the same words as the Insert menu: New chapter, Scene break', 222, 470, { w: 300 })
  + L.ann(2, 'The only icons are the ones the app already has for marks: ✓ ✗ and the note. Why? asks the AI to explain a proposal; Ignore this word shows on a red mark only', 425, 376, { w: 300 })
  + L.ann(3, 'One menu per level. Remove takes the mark away and keeps the text, without asking; Delete… asks, in words and pages', 844, 376, { w: 300 })
  + L.ann(6, 'Move to ▸ lists the chapters; Unplace keeps the card without a place in the book', 1066, 470, { w: 300 })
  + L.ann(5, 'Every menu walks with the arrows and Enter, typing filters it, Esc closes it', 617, 470, { w: 300 });

module.exports = {
  id: 'S31',
  file: 's31-right-click',
  title: 'Right-click, everywhere',
  width: 1440,
  height: 660,
  html: css + `<div class="s31">${board}${anns}</div>`,
  caption: L.caption({
    id: 'S31', title: 'Right-click, everywhere',
    scene: 'Not a moment in the app: the seven right-click menus side by side, each under the name of the place it opens on, so they can be checked as one family.',
    on: 'TEXT, WITH A SELECTION: Style as ▸, Emphasis, Thought · Add note, Ask about this, Look up “Lena”, Find in the book · Cut, Copy, Paste. TEXT, NO SELECTION: Style as ▸ · New chapter here, Scene break here · Add note, Ask · Paste. A MARK OR ITS ICON: ✓ Keep, ✗ Undo · Add note, Why? · Ignore this word. A CHAPTER ROW: New chapter before, New chapter after · New part before, New part after · Rename, Remove the chapter mark · Delete chapter…. A SCENE ROW: Rename · Start a new chapter here, Remove the scene break · Delete scene…. A PLAN CARD: Open, Rename · Labels ▸, Move to ▸ · Unplace · Delete…. A CODEX ENTRY: Open, Rename everywhere · Highlight in the text, Research this · Delete…. The note icon on Add note, ✓ and ✗ on the mark menu, nothing else',
    off: 'a window or the thing each menu was opened on, the Style as, Labels and Move to submenus, shortcuts at the right of the items, a hovered item, a filter typed into a menu, the delete dialogs',
  }),
};
