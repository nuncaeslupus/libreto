// S00: the map of the whole app. Not a moment, not a window: one diagram in HTML/CSS.
const L = require('../lib');

const css = `<style>
.s00{background:#d9d9d6;padding:28px 28px 26px;font:14px/1.45 var(--ui);color:var(--ink);box-sizing:border-box;position:relative}
.s00 h1{font:600 22px var(--ui);margin:0 0 4px}
.s00 .m_sub{color:var(--ink2);font-size:14px;margin-bottom:18px}
.s00 .m_top{display:flex;gap:24px;align-items:flex-start}
.s00 .m_winmap{width:900px;flex:none;background:#fff;border:1px solid #c9c9c5;border-radius:12px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,.07)}
.s00 .m_wl{font:600 11px var(--ui);letter-spacing:.07em;text-transform:uppercase;color:#66696e;margin:0 0 6px}
.s00 .m_bar{display:flex;align-items:center;gap:10px;background:var(--chrome);border:1px solid var(--line);border-radius:7px;padding:6px 12px;font-size:12.5px;color:var(--ink2);margin-bottom:8px}
.s00 .m_bar b{color:var(--ink);font-weight:600}
.s00 .m_bar .m_sp{flex:1}
.s00 .m_cols{display:grid;grid-template-columns:250px 1fr 270px;gap:8px;align-items:stretch}
.s00 .m_c{border:1.5px solid var(--line);border-radius:9px;padding:10px 12px 12px;background:var(--soft);min-height:420px}
.s00 .m_c.mid{background:#fff;border-color:#bdbdb8}
.s00 .m_c h3{font:600 15px var(--ui);margin:0 0 2px}
.s00 .m_c .m_r{font-size:12px;color:var(--ink3);margin-bottom:8px}
.s00 .m_sw{display:flex;background:var(--chrome);border:1px solid var(--line);border-radius:8px;padding:2px;gap:2px;margin:6px 0 8px;font-size:12.5px;width:max-content}
.s00 .m_sw span{padding:3px 11px;border-radius:6px;color:var(--ink2)}
.s00 .m_sw span.on{background:#fff;color:var(--ink);font-weight:600;box-shadow:0 1px 2px rgba(0,0,0,.1)}
.s00 .opt{background:#fff;border:1px solid var(--line);border-radius:7px;padding:6px 9px;margin:5px 0;font-size:13px}
.s00 .m_c.mid .opt{background:var(--soft)}
.s00 .opt small{display:block;color:var(--ink3);font-size:11.5px;margin-top:1px}
.s00 .opt kbd{float:right;margin-left:6px}
.s00 .opt.sp2{border-style:dashed}
.s00 .m_fl{font-size:11.5px;color:var(--ink3);margin:8px 0 2px;text-transform:uppercase;letter-spacing:.06em;font-weight:600}
.s00 .m_over{flex:1;min-width:0}
.s00 .m_grp{background:#fff;border:1px solid #c9c9c5;border-radius:10px;padding:10px 14px 11px;margin-bottom:10px}
.s00 .m_grp h4{font:600 13.5px var(--ui);margin:0 0 1px}
.s00 .m_grp .m_how{font-size:12px;color:var(--ink3);margin-bottom:6px}
.s00 .tags{display:flex;flex-wrap:wrap;gap:5px}
.s00 .tag{border:1px solid var(--line);background:var(--soft);border-radius:6px;padding:2px 8px;font-size:12.5px}
.s00 .tag.ai{border-color:#b9c9de}
.s00 .m_back{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:20px}
.s00 .bk{background:#fff;border:1px solid #c9c9c5;border-radius:10px;padding:12px 14px 13px}
.s00 .bk kbd{font-size:12.5px}
.s00 .bk h4{font:600 14px var(--ui);margin:6px 0 3px}
.s00 .bk p{margin:0;font-size:13px;color:var(--ink2)}
.s00 .m_sec{font:600 12px var(--ui);letter-spacing:.07em;text-transform:uppercase;color:#55585e;margin:22px 0 8px}
.s00 .arrow{color:var(--ink3);font-size:12px;margin:3px 0}
.s00 .m_stack{margin-top:0;border:1.5px dashed #a9a9a4;border-radius:9px;padding:9px 12px;background:#fbfbfa;font-size:12.5px;color:var(--ink2)}
.s00 svg{width:13px;height:13px}
</style>`;

const sp = L.icons.spark;
const op = (t, s, k) => `<div class="opt">${k ? `<kbd>${k}</kbd>` : ''}${t}${s ? `<small>${s}</small>` : ''}</div>`;
const tg = (list) => `<div class="tags">${list.map((t) => `<span class="tag${t.includes('✦') ? ' ai' : ''}">${t.replace('✦', sp)}</span>`).join('')}</div>`;

const html = css + `<div class="s00">
<h1>The map of Libreto</h1>
<div class="m_sub">One window, three columns. Everything else opens over it and closes the same way it came. Not a screen: a plan of all the others.</div>
<div class="m_top">
 <div class="m_winmap">
  <div class="m_wl">The window · always one</div>
  <div class="m_bar"><b>Menu bar</b> File · Edit · View · Insert · Format · Tools · Help<span class="m_sp"></span>Settings: Tools ▸ Settings… <kbd>Ctrl+,</kbd></div>
  <div class="m_bar"><b>Strip</b> Navigator · ‹ › · where you are<span class="m_sp"></span><b>Text · Board · Pages</b> (only over the manuscript)<span class="m_sp"></span>${sp} agent · Review 12 · Find · side panel</div>
  <div class="m_cols">
   <div class="m_c"><h3>Navigator</h3><div class="m_r">the list of what you can open <kbd>Ctrl+Shift+L</kbd></div>
    <div class="m_sw"><span class="on">Book</span><span>Codex</span><span>Research</span></div>
    <div class="m_r" style="margin:0 0 2px"><kbd>Ctrl+Shift+1/2/3</kbd></div>
    ${op('Book', 'Front matter · parts · chapters · scenes · Back matter · Unplaced · Discarded')}
    ${op('Codex', 'The Brief · People · Places · Things · Motifs · Threads')}
    ${op('Research', 'Inbox · topics · files')}
   </div>
   <div class="m_c mid"><h3>The open document</h3><div class="m_r">one thing at a time; opening another replaces it</div>
    <div class="m_fl">The manuscript, whole book or one chapter</div>
    ${op('Text', 'write', 'Ctrl+1')}${op('Board', 'scenes as cards', 'Ctrl+2')}${op('Pages', 'the printed book; the side panel becomes Book layout', 'Ctrl+3')}
    <div class="m_fl">Or a document from the Navigator</div>
    ${op('A Codex entry · a research topic · the Brief', 'the view switch is hidden; Back returns to the text')}
   </div>
   <div class="m_c"><h3>Side panel</h3><div class="m_r">shows one thing at a time <kbd>Ctrl+Shift+R</kbd></div>
    ${op('Reference', 'an entry or topic beside the text, or a chapter to read alongside')}
    ${op('Review', 'the margin: notes, suggestions, readers’ changes <b></b>', 'Ctrl+Shift+V')}
    ${op(sp + ' Ask conversation', 'opened with the round button', 'Ctrl+K')}
    ${op('Book layout', 'only in Pages: theme, trim, headers, breaks')}
   </div>
  </div>
  <div class="m_bar" style="margin:8px 0 0"><b>Status bar</b> style · words and goal · page · Saved 19:32<span class="m_sp"></span>Show ▾ · History ▾ · zoom · keys</div>
 </div>
 <div class="m_over">
  <div class="m_wl">What opens over it</div>
  <div class="m_grp"><h4>Over the text, small</h4><div class="m_how">no dimming; Esc closes the innermost</div>
   ${tg(['Quick look (Ctrl+click)', 'Mark card', 'Menus and right-click', 'Find', 'Notices', 'Ask results'])}</div>
  <div class="m_grp"><h4>Sheets</h4><div class="m_how">cover the work area; “Back to the text” · Esc</div>
   ${tg(['History', 'Statistics', 'AI activity ✦'])}</div>
  <div class="m_grp"><h4>Dialogs</h4><div class="m_how">ask one thing, then close; the text waits behind</div>
   ${tg(['Export…', 'Print…', 'Send a copy…', 'Add notes…', 'Replace all…', 'Rename everywhere…', 'Book details…', 'Agent permissions ✦'])}</div>
  <div class="m_grp"><h4>Windows of their own</h4><div class="m_how">stay open beside the project</div>
   ${tg(['Settings', 'Help'])}</div>
  <div class="m_stack"><b>Layers, front to back:</b> dialog · menu or card · notice · side panel · page. Esc always closes the one in front; it never closes a window.</div>
 </div>
</div>
<div class="m_sec">The ways back</div>
<div class="m_back">
 <div class="bk"><kbd>Esc</kbd><h4>Closes the innermost thing</h4><p>A menu, a card, the quick look, a sheet, a dialog: the one in front, then the next. In the text it clears a selection and nothing else.</p></div>
 <div class="bk"><kbd>Alt+←</kbd> <kbd>Alt+→</kbd><h4>Back and Forward</h4><p>Walk every jump between documents: a chapter, a Codex entry, a topic. Long-press ‹ for the list. They never undo an edit.</p></div>
 <div class="bk"><kbd>Ctrl+Z</kbd><h4>Undo the last thing here</h4><p>Linear and local: the manuscript is one stack; each entry, topic and field has its own. It never takes you somewhere else.</p></div>
 <div class="bk"><h4 style="margin-top:2px">Revert takes back one older thing</h4><p>A review round, an agent session, a Board move after typing: a new step that undoes just that, and says what it could not. Edit ▸ Revert, or a notice once later steps exist.</p></div>
</div>
</div>`;

module.exports = {
  id: 'S00', file: 's00-map', title: 'The map of the whole app', width: 1440, height: 900,
  html,
  caption: L.caption({
    id: 'S00', title: 'The map of the whole app',
    scene: 'Not a moment and not a window: a plan of the app, to read before the other screens.',
    on: 'the window with its menu bar, strip and status bar; the three columns (Navigator with Book · Codex · Research, the open document in Text · Board · Pages or an entry, topic or Brief, the side panel with Reference · Review · Ask conversation · Book layout); what opens over it (small cards, sheets, dialogs, windows); the four ways back',
    off: 'modes, tabs, a bell, floating panels, a second window for the same project',
  }),
};
