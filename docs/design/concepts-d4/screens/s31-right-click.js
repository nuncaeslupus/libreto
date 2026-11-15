// S31: Right-click, everywhere. Not a moment: the right-click menus side by side, each under the name of
// the place it opens, so they can be checked as one family. No window.
const L = require('../lib');
const I = L.icons;

const css = `<style>
.s31{position:relative;background:#d9d9d6;padding:26px 28px 0;height:620px;box-sizing:border-box}
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
.s31 .mwrap{position:relative;width:max-content}
.s31 .menu.sub{position:absolute;left:calc(100% - 6px);min-width:120px}
</style>`;

// mi(text, {g: glyph or icon in the icon column, gc: its color class, r: text at the right})
const mi = (t, o = {}) => `<div class="mi${o.dis ? ' dis' : ''}${o.hov ? ' hov' : ''}">${o.g !== undefined ? `<span class="g ${o.gc || ''}">${o.g}</span>` : ''}<span>${t}</span>${o.r ? `<span class="r">${o.r}</span>` : ''}</div>`;
const sep = '<div class="msep"></div>';
const menu = (items) => `<div class="menu">${items.join('')}</div>`;
const cell = (label, items) => `<div class="cell"><div class="lbl">${label}</div>${menu(items)}</div>`;
const cellIn = (label, items) => `<div><div class="lbl">${label}</div>${menu(items)}</div>`;
const E = { g: '' };                       // an empty slot: menus that carry an icon keep one column for it
const NOTE = { g: I.note, gc: 'nt' };      // the note icon
const AI = { g: I.spark, gc: 'ai' };       // the spark: the AI, wherever it is meant

const SUB = (items, top) => `<div class="menu sub" style="top:${top}px">${items.join('')}</div>`;
const board = `<div class="row">`
  + cell('Text, selection', [mi('Emphasis', E), mi('Strong', E), mi('Style as', { ...E, r: '▸' }), sep,
    mi('Add note', NOTE), mi('Ask the AI about this', AI), sep,
    mi('Look up “Lena”', E), mi('Add to the Codex', { ...E, r: '▸' }), mi('Send to the Inbox', E), mi('Find in the book', E), sep,
    mi('Cut', E), mi('Copy', E), mi('Paste', E)])
  + `<div class="cell"><div class="lbl">Text, no selection</div><div class="mwrap">`
  + menu([mi('Style as', { ...E, r: '▸' }), mi('Insert', { ...E, r: '▸', hov: true }), sep, mi('Add note', NOTE), sep, mi('Paste', E)])
  + SUB([mi('Scene break'), mi('Chapter here'), mi('Part here')], 33) + `</div></div>`
  + cell('On a mark (a blue one)', [mi('Apply', { g: '✓', gc: 'ok' }), mi('Dismiss', { g: '✗', gc: 'no' }), sep,
    mi('Add note', NOTE), mi('Open in Review', E)])
  + `<div class="cell stack">`
  + cellIn('Scene row', [mi('Rename'), mi('Make this scene a chapter'), mi('Join with the previous scene'), sep, mi('Move to Discarded'), mi('Delete…')])
  + cellIn('Chapter row', [mi('Rename'), mi('Start a new part here'), mi('Join with the previous chapter'), sep, mi('Move to Discarded'), mi('Delete…')])
  + cellIn('Part', [mi('Rename'), mi('Remove the part heading')])
  + `</div>`
  + `<div class="cell stack">`
  + cellIn('Plan card', [mi('Open'), mi('Rename'), sep, mi('Labels', { r: '▸' }), mi('Move to', { r: '▸' }), sep, mi('Unplace'), mi('Move to Discarded'), mi('Delete…')])
  + cellIn('Codex entry', [mi('Open'), mi('Rename everywhere'), sep, mi('Show in the text'), mi('Research', { r: '▸' })])
  + `</div>`
  + `</div>`;

const anns = L.ann(1, 'One rule for all of them: the few things done here most often, then the way to the rest, and nothing that is not expected. Look up appears only when the selection is a name', 28, 452, { w: 300 })
  + L.ann(2, 'They walk, they don’t filter: arrows and Enter, Esc closes. No menu filters as you type', 28, 540, { w: 300 })
  + L.ann(3, 'The only icons are the ones the app already uses: ✓ ✗ for marks, the note, the spark for the AI', 420, 300, { w: 260 })
  + L.ann(4, 'A mark’s menu starts with its card’s two buttons: Apply / Dismiss on blue, Keep / Undo on green, Ignore here / Add to dictionary on red', 420, 384, { w: 260 })
  + L.ann(5, 'One menu per level. Delete… asks, in words and pages; Remove the part heading keeps the chapters', 760, 560, { w: 300 })
  + L.ann(6, 'Unplace moves the card to the Unplaced row; Move to Discarded keeps it, out of the book, in the Discarded row', 1100, 452, { w: 290 });

module.exports = {
  id: 'S31',
  file: 's31-right-click',
  title: 'Right-click, everywhere',
  width: 1440,
  height: 700,
  html: css + `<div class="s31">${board}${anns}</div>`,
  caption: L.caption({
    id: 'S31', title: 'Right-click, everywhere',
    scene: 'Not a moment in the app: the right-click menus side by side, each under the name of the place it opens on, so they can be checked as one family.',
    on: 'TEXT, SELECTION: Emphasis, Strong, Style as ▸ · Add note, Ask the AI about this · Look up “Lena”, Add to the Codex ▸, Send to the Inbox, Find in the book · Cut, Copy, Paste. TEXT, NO SELECTION: Style as ▸, Insert ▸ (open: Scene break, Chapter here, Part here) · Add note · Paste. ON A MARK (blue): ✓ Apply, ✗ Dismiss · Add note, Open in Review. SCENE ROW: Rename, Make this scene a chapter, Join with the previous scene · Move to Discarded, Delete…. CHAPTER ROW: Rename, Start a new part here, Join with the previous chapter · Move to Discarded, Delete…. PART: Rename, Remove the part heading. PLAN CARD: Open, Rename · Labels ▸, Move to ▸ · Unplace, Move to Discarded, Delete…. CODEX ENTRY: Open, Rename everywhere · Show in the text, Research ▸. Icons: the note on Add note, the spark on Ask the AI about this, ✓ and ✗ on the mark menu, nothing else',
    off: 'a window or the thing each menu was opened on, the Style as, Add to the Codex, Labels, Move to and Research submenus, shortcuts at the right of the items, a filter box, the delete dialogs, the full inventory (a page of the specification)',
  }),
};
