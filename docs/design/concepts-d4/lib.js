// Libreto concept draft 4: shared HTML helpers for the screens in screens/*.js.
// Every helper returns an HTML string; build.js assembles the file and renders it.
'use strict';

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const attr = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
const sty = (o) => Object.entries(o || {}).filter(([, v]) => v !== undefined && v !== null && v !== '')
  .map(([k, v]) => `${k}:${typeof v === 'number' && k !== 'opacity' && k !== 'z-index' && k !== 'flex' ? v + 'px' : v}`).join(';');

// ---------- icons (inline SVG, 16 × 16 unless noted; color = currentColor) ----------
const S = (inner, o = {}) => {
  const w = o.w || 16, h = o.h || w, vb = o.vb || `0 0 ${w} ${h}`;
  const sw = o.sw || 1.5;
  return `<svg width="${w}" height="${h}" viewBox="${vb}" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;
};
const icons = {
  'sidebar-left': S('<rect x="1.8" y="2.5" width="12.4" height="11" rx="1.8"/><path d="M6 2.5v11"/>', { sw: 1.4 }),
  'sidebar-left-on': S('<rect x="1.8" y="2.5" width="12.4" height="11" rx="1.8"/><path d="M2.5 3.2H6v9.6H2.5z" fill="currentColor" stroke="none"/><path d="M6 2.5v11"/>', { sw: 1.4 }),
  'sidebar-right': S('<rect x="1.8" y="2.5" width="12.4" height="11" rx="1.8"/><path d="M10 2.5v11"/>', { sw: 1.4 }),
  'sidebar-right-on': S('<rect x="1.8" y="2.5" width="12.4" height="11" rx="1.8"/><path d="M10 3.2h3.5v9.6H10z" fill="currentColor" stroke="none"/><path d="M10 2.5v11"/>', { sw: 1.4 }),
  back: S('<path d="M10 3 5 8l5 5"/>', { sw: 1.6 }),
  forward: S('<path d="m6 3 5 5-5 5"/>', { sw: 1.6 }),
  undo: S('<path d="M5 3 2 6l3 3"/><path d="M2 6h7.5a4 4 0 0 1 0 8H7"/>'),
  redo: S('<path d="m11 3 3 3-3 3"/><path d="M14 6H6.5a4 4 0 0 0 0 8H9"/>'),
  chevron: S('<path d="m3 6 5 5 5-5"/>', { sw: 2 }),
  'chevron-right': S('<path d="m6 3 5 5-5 5"/>', { sw: 2 }),
  // the mark family: note (sticky note), task (circle with a check), fix (small tick in a circle)
  note: S('<path d="M2.5 2.5h11v6.5L9 13.5H2.5z"/><path d="M9 13.5V9h4.5"/><path d="M5 6h5M5 8.5h2.5"/>', { sw: 1.4 }),
  task: S('<circle cx="8" cy="8" r="6.3"/><path d="m5 8.2 2.1 2.1L11.2 6"/>', { sw: 1.5 }),
  fix: S('<circle cx="8" cy="8" r="6.3"/><path d="m5.2 8.3 1.9 1.9 3.9-4"/>', { sw: 1.6 }),
  pen: S('<path d="m9.5 2.5 4 4-6 6H3.5v-4z"/><path d="M2 14.5h12"/>', { w: 14, vb: '0 0 16 16' }),
  clock: S('<circle cx="8" cy="8" r="6.2"/><path d="M8 4.5V8l2.5 1.6"/>', { w: 14, vb: '0 0 16 16' }),
  view: S('<rect x="3" y="2" width="10" height="12" rx="1.5"/><path d="M5.5 6h5M5.5 9h5M5.5 12h3"/>', { w: 14, vb: '0 0 16 16' }),
  magnifier: S('<circle cx="7" cy="7" r="4.6"/><path d="m10.5 10.5 3.5 3.5"/>', { w: 14, vb: '0 0 16 16', sw: 1.6 }),
  plus: S('<path d="M8 3v10M3 8h10"/>', { w: 14, vb: '0 0 16 16', sw: 1.6 }),
  'history-list': S('<circle cx="5" cy="5" r="3.2"/><path d="M5 3.4V5l1 .7"/><path d="M10 4h4M10 8h4M3 12h11"/>', { w: 15, vb: '0 0 16 16', sw: 1.4 }),
  collapse: S('<path d="M3.5 12h9"/>', { w: 14, vb: '0 0 16 16', sw: 1.6 }),
  send: S('<path d="M8 13V3M3.5 7.5 8 3l4.5 4.5"/>', { w: 12, vb: '0 0 16 16', sw: 2 }),
  logo: '<svg class="logo" width="13" height="13" viewBox="0 0 20 20"><g stroke="#c4673f" stroke-width="2.3" stroke-linecap="round"><path d="M10 2.2v15.6M2.2 10h15.6M4.5 4.5l11 11M15.5 4.5l-11 11"/></g></svg>',
  style: S('<path d="M3 13 7 3h2l4 10M5 9h6"/>', { w: 13, vb: '0 0 16 16' }),
  'arrow-out': S('<path d="M6 3H3v10h10v-3M9 3h4v4M13 3 7.5 8.5"/>', { w: 12, vb: '0 0 16 16', sw: 1.6 }),
};
const ib = (icon, cls = '', title = '') => `<span class="ib ${cls}"${title ? ` title="${attr(title)}"` : ''}>${icons[icon] || icon}</span>`;

// ---------- chrome ----------
const MODES = ['Write', 'Plan', 'Research', 'Review', 'Book'];

// crumbs: {chapter:"Chapter 7 · Lena’s warning", scene:"Lena lies about the back room"} or raw HTML
function crumbsHtml(c) {
  if (!c) return '';
  if (typeof c === 'string') return c.startsWith('<') ? c : `<span class="crumbs"><span class="dd ch">${esc(c)}</span></span>`;
  let h = `<span class="dd ch">${esc(c.chapter)}</span>`;
  if (c.scene) h += `<span class="sep">›</span><span class="dd">${esc(c.scene)}</span>`;
  return `<span class="crumbs">${h}</span>`;
}

// strip({mode, crumbs, leftOn, rightOn, back, forward, undo, redo})
function strip(o = {}) {
  const mode = o.mode || 'Write';
  const on = (v, d) => (v === undefined ? d : v);
  return `<div class="strip">`
    + ib(o.leftOn ? 'sidebar-left-on' : 'sidebar-left', 'tog' + (o.leftOn ? ' on' : ''))
    + `<span class="gap"></span>`
    + ib('back', on(o.back, true) ? '' : 'off') + ib('forward', on(o.forward, false) ? '' : 'off')
    + `<span class="gap"></span>`
    + ib('undo', on(o.undo, true) ? '' : 'off') + ib('redo', on(o.redo, false) ? '' : 'off')
    + `<span class="gap"></span>`
    + crumbsHtml(o.crumbs)
    + `<span class="right"><span class="modes">${MODES.map((m) => `<span${m === mode ? ' class="on"' : ''}>${m}</span>`).join('')}</span>`
    + ib(o.rightOn ? 'sidebar-right-on' : 'sidebar-right', 'tog' + (o.rightOn ? ' on' : '')) + `</span>`
    + `</div>`;
}

const titlebar = () => `<div class="titlebar"><span class="appic"></span><div class="wtitle">The Blue Lamp — Libreto</div><div class="wctl"><span>–</span><span>▢</span><span>✕</span></div></div>`
  + `<div class="menubar"><span>File</span><span>Edit</span><span>View</span><span>Insert</span><span>Format</span><span>AI</span><span>Help</span></div>`;

// win({mode, crumbs, left, right, page, status, ask, extra, content, width, height})
//   left/right: panel HTML (navigator(), reference()) or falsy = closed; the toggles follow.
//   page: HTML from pageCol(); status: statusBar() HTML or its options object.
//   ask: a state ('normal' | 'off' | 'busy' | 'dot'), false, or HTML (e.g. askButton('dot') + askPanel({...})).
//   content: extra HTML inside .content (toast, sheet, menus, tooltips in content coordinates).
//   extra: extra HTML inside .win after the status bar (annotations, tooltips in window coordinates).
function win(o = {}) {
  const width = o.width || 1440, height = o.height || 900;
  const status = typeof o.status === 'string' ? o.status : statusBar(o.status || {});
  let ask = '';
  if (o.ask !== false) {
    if (typeof o.ask === 'string' && o.ask.startsWith('<')) ask = o.ask;
    else ask = askButton(o.ask || 'normal');
  }
  return `<div class="win" style="width:${width}px;height:${height}px">${titlebar()}`
    + strip({ mode: o.mode, crumbs: o.crumbs, leftOn: !!o.left, rightOn: !!o.right, ...(o.strip || {}) })
    + `<div class="content">${o.left || ''}${o.page || ''}${o.right || ''}${ask}${o.content || ''}</div>`
    + status + (o.extra || '') + `</div>`;
}

// pageCol(innerHtml, {paddingTop}) → the centered page with its 620 px column
function pageCol(inner, o = {}) {
  const st = o.paddingTop !== undefined ? ` style="padding-top:${o.paddingTop}px"` : '';
  return `<div class="page"><div class="col"${st}>${inner}</div></div>`;
}
const page = pageCol;

// statusBar({style, styleLook, words, pages, fixes, highlightsOn, zoom, left, right})
//   styleLook: 'plain' | 'thought' (italic) | 'sign' (small caps)
function statusBar(o = {}) {
  const look = o.styleLook === 'thought' ? ' th' : o.styleLook === 'sign' ? ' sc' : '';
  const zoom = o.zoom === undefined ? 100 : o.zoom;
  const knob = Math.min(100, Math.max(0, (zoom - 50) / 150 * 100));
  let h = `<div class="status">`;
  if (o.style !== false) h += `<span class="sb m"><span class="chipst${look}">${icons.style}${esc(o.style || 'Plain')}<span class="dd" style="margin-left:-2px"></span></span></span>`;
  if (o.words) h += `<span class="sb m"><span class="dd">${esc(o.words)}</span></span>`;
  if (o.pages) h += `<span class="sb m"><span class="dd">${esc(o.pages)}</span></span>`;
  if (o.fixes) h += `<span class="sb m cnt">${icons.fix}<span class="dd">${esc(o.fixes)}</span></span>`;
  if (o.left) h += o.left;
  h += `<span class="sp"></span>`;
  if (o.right) h += o.right;
  if (o.view !== false) h += `<span class="sb m">${icons.view}<span class="dd">${esc(o.view || 'By chapter')}</span></span>`;
  h += `<span class="sb m${o.highlightsOn ? ' act' : ''}">${icons.pen}<span class="dd">Highlights</span></span>`;
  h += `<span class="sb m">${icons.clock}<span class="dd">History</span></span>`;
  h += `<span class="vsep"></span>`;
  h += `<span class="zoom"><span>–</span><span class="track"><span class="knob" style="left:${knob}%"></span></span><span>+</span><span class="pct">${zoom}%</span></span>`;
  return h + `</div>`;
}

// ---------- Ask ----------
// askButton(state): 'normal' | 'off' | 'busy' | 'dot'
function askButton(state = 'normal') {
  const cls = state && state !== 'normal' ? ` ${state}` : '';
  return `<span class="askbtn${cls}" title="Ask · Ctrl+K">${icons.logo}</span>`;
}

// askPanel({title, messages, results, input, noai, focus})
//   messages: [{me:true, html} | string(html, the AI)]; results: [{head, rows:[{kind, text, hint, cur, gray}]}]
//   input: the typed text ('' or undefined shows the placeholder)
function askPanel(o = {}) {
  const msgs = (o.messages || []).map((m) => (typeof m === 'string' ? `<div>${m}</div>`
    : m.me ? `<div class="msg-me"><div>${m.html}</div></div>` : `<div>${m.html}</div>`)).join('');
  let res = '';
  if (o.results && o.results.length) {
    res = `<div class="ask-res">${o.results.map((g) => `<div class="grp"><div class="gh">${esc(g.head)}</div>`
      + g.rows.map((r) => `<div class="r${r.cur ? ' cur' : ''}${r.gray ? ' gray' : ''}"><span class="k">${esc(r.kind || '')}</span><span class="t">${r.text}</span>${r.hint ? `<span class="h">${esc(r.hint)}</span>` : ''}</div>`).join('')
      + `</div>`).join('')}</div>`;
  }
  const typed = o.input ? `<span class="typed">${esc(o.input)}</span>` : `<span class="ph">Ask, find, or jump…</span>`;
  return `<div class="ask${o.noai ? ' noai' : ''}">`
    + `<div class="ask-h"><b${o.title ? ' class="dd"' : ''}>${esc(o.title || 'Ask')}</b>${ib('history-list', '', 'History')}${ib('plus', '', 'New')}${ib('collapse', '', 'Collapse')}</div>`
    + `<div class="ask-b">${msgs}</div>`
    + res
    + `<div class="ask-f${o.focus || o.input ? ' foc' : ''}">${typed}<span class="snd${o.input ? '' : ' off'}">${icons.send}</span></div>`
    + `</div>`;
}

// ---------- panels ----------
const cntIcon = (kind) => ({ note: icons.note, task: icons.task, fix: icons.fix })[kind];
const cap99 = (n) => (n > 99 ? '99+' : String(n));
function counts(r) {
  const parts = [];
  for (const k of ['note', 'task', 'fix']) {
    const n = r[k + 's'];
    if (n) parts.push(`<span class="k-${k}">${cap99(n)}${cntIcon(k)}</span>`);
  }
  return `<span class="cnt">${parts.join('')}</span>`;
}

// navigator({rows, filterText, review, menuAt, chips, footer})
//   rows: [{type:'front'|'part'|'chapter'|'scene', n, title, notes, tasks, fixes, cur, hov, open, here, det}]
//   review: true adds the filter chips and the "Review all ▶" button; chips: {All:11, Notes:5, ...} with .on
//   menuAt: {x, y, hov} → the right-click menu at that point (navigator coordinates)
function navigator(o = {}) {
  const rows = (o.rows || sample.navRows).map((r) => {
    if (r.type === 'front') return `<div class="nrow"><span class="cv"></span><span class="n"></span><span class="t" style="color:var(--ink2)">${esc(r.title || 'Front matter')}</span></div>`;
    if (r.type === 'part') return `<div class="nrow part"><span class="cv"></span><span class="t">${esc(r.title)}</span></div>`;
    if (r.type === 'scene') return `<div class="srow${r.here ? ' here' : ''}${r.det ? ' det' : ''}"><span class="t">${esc(r.title)}</span></div>`;
    const cv = r.cur || r.open ? icons.chevron : r.hov ? icons['chevron-right'] : '';
    return `<div class="nrow${r.cur ? ' cur' : ''}${r.hov ? ' hov' : ''}"><span class="cv">${cv}</span><span class="n">${r.n}</span><span class="t">${esc(r.title)}</span>${counts(r)}</div>`;
  }).join('');
  let review = '';
  if (o.review) {
    const chips = o.chips || { All: 11, Notes: 5, Tasks: 3, Fixes: 3, Editor: 1, AI: 2 };
    const onKey = o.chipOn || 'All';
    review = `<div class="navrev"><div class="kf">${Object.entries(chips).map(([k, v]) => `<span${k === onKey ? ' class="on"' : ''}>${k}${v !== undefined && v !== null ? ` ${v}` : ''}</span>`).join('')}</div>`
      + `<div><span class="btn pri">Review all ▶</span></div></div>`;
  }
  let menu = '';
  if (o.menuAt) {
    const items = ['New chapter before', 'New chapter after', 'New part', 'Rename', 'Delete chapter…'];
    menu = `<div class="menu" style="left:${o.menuAt.x}px;top:${o.menuAt.y}px">${items.map((t, i) => (i === 3 ? '<div class="msep"></div>' : '') + `<div class="mi${o.menuAt.hov === t ? ' hov' : ''}">${t}</div>`).join('')}</div>`;
  }
  return `<div class="nav">`
    + `<div class="navtop"><div class="filter">${icons.magnifier}<span>${esc(o.filterText || 'Filter chapters (titles and text)')}</span></div></div>`
    + review
    + `<div class="navbody">${rows}</div>`
    + (o.footer === false ? '' : `<div class="navfoot"><span class="btn q">+ New chapter</span></div>`)
    + menu + `</div>`;
}

// reference({kind, name, body, backOn, forwardOn})
function reference(o = {}) {
  return `<div class="ref"><div class="refhead">`
    + ib('back', o.backOn === false ? 'off' : '') + ib('forward', o.forwardOn ? '' : 'off')
    + `<span class="kind">${esc(o.kind || 'Person')}</span><span class="name">${esc(o.name || '')}</span><span class="sp"></span>`
    + ib('magnifier', '', 'Ask about this') + `<span class="lk">Open in Research ↗</span>`
    + `</div><div class="refbody">${o.body || ''}</div></div>`;
}

// refCard({pic, initial, name, line, facts:[[dt, ddHtml]], textFacts:[{q, where}], researchFacts:[{t, src}], questions:[html], research:[{t, sub, pdf}], button})
//   The Codex card body for the Reference panel.
function refCard(o = {}) {
  const pic = o.pic === false ? `<div class="avatar" style="width:64px;height:64px;font-size:24px">${esc(o.initial || (o.name || '?')[0])}</div>` : `<div class="pic"></div>`;
  let h = `<div class="tcard"><div style="display:flex;gap:14px;align-items:center;margin-bottom:10px">${pic}<div style="min-width:0"><div class="pk-title" style="margin:0 0 3px;font-size:16px">${esc(o.name || '')}</div><div style="color:var(--ink2)">${o.line || ''}</div></div></div>`;
  if (o.facts) h += `<dl class="facts">${o.facts.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${v}</dd>`).join('')}</dl>`;
  if (o.textFacts) h += `<div class="nh">Facts from the text</div>` + o.textFacts.map((f) => `<div class="pk-ev">“${f.q}”<small><span class="lk">${esc(f.where)}</span></small></div>`).join('');
  if (o.researchFacts) h += `<div class="nh">Facts from research</div>` + o.researchFacts.map((f) => `<div class="pk-ev" style="font-style:normal;font-family:var(--ui);font-size:12.5px">${f.t}<small><span class="src">${esc(f.src)}</span></small></div>`).join('');
  if (o.questions) h += `<div class="nh">Open questions</div>` + o.questions.map((q) => `<div class="q">${q}</div>`).join('');
  if (o.research) h += `<div class="nh">Research</div>` + o.research.map((r) => `<div class="rrow"><div class="pic sm${r.pdf ? ' pdf' : ''}"></div><div class="t"><span class="lk">${esc(r.t)}</span>${r.sub ? `<small>${esc(r.sub)}</small>` : ''}</div></div>`).join('');
  if (o.button) h += `<div style="margin-top:12px"><span class="btn">${esc(o.button)}</span></div>`;
  return h + `</div>`;
}

// ---------- marks ----------
// gm(kind, top, {sel}) → one gutter icon at `top` px inside a .para; kinds: note | task | fix
function gm(kind, top, o = {}) {
  return `<span class="gm ${kind}${o.sel ? ' sel' : ''}"${top !== undefined ? ` style="top:${top}px"` : ''}>${cntIcon(kind)}</span>`;
}
// gutter(kinds, top, {sel}) → several marks on one line: three at most, then "+N"
function gutter(kinds, top, o = {}) {
  const shown = kinds.slice(0, 3), more = kinds.length - shown.length;
  return `<span class="gms" style="top:${top}px">${shown.map((k, i) => `<span class="gm ${k}${o.sel === i ? ' sel' : ''}">${cntIcon(k)}</span>`).join('')}${more > 0 ? `<span class="gm more">+${more}</span>` : ''}</span>`;
}
// lineTop(n, lineHeight=30.96) → top of a 16 px mark on the n-th line (0-based) of body text
const lineTop = (n, lh = 18 * 1.72) => Math.round((n * lh + (lh - 16) / 2) * 10) / 10;

// ---------- sheets, toast, tooltip ----------
// sheet({title, body, actions})
function sheet(o = {}) {
  return `<div class="sheet"><div class="sheet-h"><span class="back">${icons.back}Back to the text<kbd>Esc</kbd></span><span class="ttl">${esc(o.title || '')}</span><span class="acts">${o.actions || ''}</span></div><div class="sheet-b">${o.body || ''}</div></div>`;
}
// toast(text) — text may contain a trailing <span class="lk">action ▸</span>
const toast = (text) => `<div class="toast">${text}</div>`;
// tip(text, {x, y, right, key}) → a tooltip; window coordinates by default
function tip(text, o = {}) {
  const pos = o.right !== undefined ? `right:${o.right}px` : `left:${o.x}px`;
  return `<div class="tip${o.wrap ? ' wrap' : ''}" style="${pos};top:${o.y}px">${esc(text)}${o.key ? `<span class="k">${esc(o.key)}</span>` : ''}</div>`;
}


// ---------- mark card (hover / Ctrl+.) and notices (draft 5) ----------
// markCard({kind:'fix'|'prop'|'spell'|'gram'|'note', title, sub, before, after, acts:[['✓','Keep','Enter'],['✗','Undo','Delete']], x, y, w, right})
//   One card for every mark, everywhere: the title says what happened, the body shows before → after,
//   the buttons decide. Window coordinates by default.
function markCard(o = {}) {
  const pos = o.right !== undefined ? `right:${o.right}px` : `left:${o.x || 0}px`;
  const acts = o.acts || (o.kind === 'fix'
    ? [['✓', 'Keep', 'Enter'], ['✗', 'Undo', 'Delete']]
    : [['✓', 'Apply', 'Enter'], ['✗', 'Skip', 'Delete']]);
  const ico = o.kind === 'fix' ? icons.fix : o.kind === 'note' ? icons.note : o.kind === 'task' ? icons.task : (icons.prop || icons.fix);
  let body = '';
  if (o.before !== undefined || o.after !== undefined) {
    body = `<div class="mc-ba"><span class="mc-l">Was</span><span class="mc-t">${o.before || ''}</span><span class="mc-l">Now</span><span class="mc-t">${o.after || ''}</span></div>`;
  }
  if (o.text) body += `<div class="mc-x">${o.text}</div>`;
  return `<div class="mc ${o.kind || 'fix'}" style="${pos};top:${o.y || 0}px${o.w ? `;width:${o.w}px` : ''}">`
    + `<div class="mc-h">${ico}<b>${esc(o.title || 'Fixed')}</b>${o.sub ? `<span class="mc-s">${esc(o.sub)}</span>` : ''}</div>`
    + body
    + `<div class="mc-a">${acts.map(([g, t, k]) => `<span class="mc-b"><i>${g}</i>${esc(t)}${k ? `<kbd>${esc(k)}</kbd>` : ''}</span>`).join('')}</div>`
    + `</div>`;
}
// notice(text, {kind:'fix'|'info', undo:true, place}) — the one notice card: bottom center of the page,
//   never on a timer; folds when the writer moves on and stays in Changes (status bar) and History.
function notice(text, o = {}) {
  const ico = o.kind === 'fix' ? icons.fix : (icons.info || icons.note);
  return `<div class="notice ${o.kind || 'info'}"${o.style ? ` style="${o.style}"` : ''}>${ico}<span class="ntx">${text}</span>${o.undo === false ? '' : `<span class="lk">Undo<kbd>Ctrl+Z</kbd></span>`}<span class="nx">✕</span></div>`;
}

// ---------- annotations and captions ----------
// ann(n, text, x, y, {w, r}) — orange numbered callout, window coordinates; w wraps at that width
function ann(n, text, x, y, o = {}) {
  const cls = ['ann', o.w ? 'wrap' : '', o.r ? 'r' : ''].filter(Boolean).join(' ');
  const st = `left:${x}px;top:${y}px${o.w ? `;--w:${o.w}px` : ''}`;
  return `<div class="${cls}" style="${st}"><b>${n}</b><span>${text}</span></div>`;
}
// caption({id, title, scene, on, off})
function caption(o = {}) {
  return `<div class="caption"><span class="id">${esc(o.id)}</span><span class="scn">${esc(o.title)}.</span> ${o.scene || ''}`
    + `<div class="vis"><b>On screen:</b> ${o.on || ''} &nbsp;·&nbsp; <b>Not on screen:</b> ${o.off || ''}</div></div>`;
}

// ---------- sample text ----------
const chapter7Paragraphs = [
  'The <span class="rv-p">Blue Lamp</span> was half empty by ten, which was how <span class="rv-c">Vega</span> liked it. The jukebox had given up on the evening, and the only sound was <span class="rv-c">Lena</span> drying glasses that were already dry, one after another, as if the cloth could rub the night off them.',
  '“You’re early,” <span class="rv-c">Lena</span> said without looking up. “Or late. I can never tell with you.”',
  '<span class="rv-c">Vega</span> took the stool at the end of the bar, the one with a view of the <span class="rv-p">back-room door</span>. “Has <span class="rv-c">Kit</span> been in?”',
  '“<span class="rv-c">Kit</span> who?” <span class="rv-c">Lena</span> set a glass down hard enough to make it ring. “Half the city’s called <span class="rv-c">Kit</span>.”',
  '“Mine. Thin, nervous, writes everything down in a <span class="rv-t">little green ledger</span>.” <span class="rv-c">Vega</span> slid a coin across the counter and left her hand on it. “He said he’d meet me here at nine.”',
  '<span class="rv-c">Lena</span> looked at the coin, then at the door behind her, then at nothing at all. “Nobody came in at nine. Nobody’s been in that room since Tuesday.”',
  '<span class="thought rv-s">It was a good lie.</span> <span class="rv-c">Vega</span> had heard worse from people who were paid to tell them. But there was a wet ring on the bar by the <span class="rv-p">back-room door</span>, and a second glass upside down on the drainer, still beaded.',
  '“<span class="rv-c">Lena</span>,” she said quietly, “if he’s in trouble, I’d rather hear it from you.”',
  '“Then hear this.” <span class="rv-c">Lena</span> leaned close enough that <span class="rv-c">Vega</span> could smell the lemon on her hands. “Go home. Don’t come back to the <span class="rv-p">Blue Lamp</span> tomorrow. And don’t ask <span class="rv-c">Kit</span> what he saw.”',
  'Outside, the rain had turned to the fine kind that does not fall so much as hang. <span class="rv-c">Vega</span> walked the long way around, past the <span class="rv-p">station steps</span>, because it was the way <span class="rv-c">Kit</span> always walked.',
];
// the same text without the entity tints (the Thought style stays, it is a paragraph style, not a highlight)
const chapter7Plain = chapter7Paragraphs.map((p) => p.replace(/<span class="rv-[cpt]">([^<]*)<\/span>/g, '$1').replace('class="thought rv-s"', 'class="thought"'));

const chapter1Paragraphs = [
  'Rain had been falling on the Blue Lamp since noon, and by six the gutters on Harbor Street had given up. Vega sat at the window table with her coat still on, watching the door the way other people watch a kettle.',
  'She had been told the man would come at half past, and it was a quarter to seven now. The only person who had come in was a boy with wet hair and a green ledger under his arm, who looked at her, looked away, and then walked straight to her table as if someone had sent him',
];

const navRows = [
  { type: 'front', title: 'Front matter' },
  { type: 'part', title: 'Part One: Winter in the Harbor District' },
  { type: 'chapter', n: 1, title: 'Rain on the glass' },
  { type: 'chapter', n: 2, title: 'The bartender' },
  { type: 'chapter', n: 3, title: 'A note under the office door, left by someone who knew where the spare key was kept', tasks: 1 },
  { type: 'chapter', n: 4, title: 'Quarter past three', tasks: 1 },
  { type: 'chapter', n: 5, title: 'Kit’s ledger' },
  { type: 'chapter', n: 6, title: 'The back room', notes: 2 },
  { type: 'chapter', n: 7, title: 'Lena’s warning', notes: 1, tasks: 2, cur: true },
  { type: 'scene', title: 'Vega asks about Kit' },
  { type: 'scene', title: 'Lena lies about the back room, and Vega pretends to believe her', here: true },
  { type: 'scene', title: 'Vega leaves without paying' },
  { type: 'chapter', n: 8, title: 'Closing time', tasks: 1 },
  { type: 'chapter', n: 9, title: 'The pawnshop', tasks: 1 },
  { type: 'part', title: 'Part Two: Spring' },
  { type: 'chapter', n: 10, title: 'Station steps' },
  { type: 'chapter', n: 11, title: 'The back room, finally', notes: 1 },
];

const crumbs7 = { chapter: 'Chapter 7 · Lena’s warning', scene: 'Lena lies about the back room' };

// Lena's card, as the Reference panel shows it
const lena = {
  kind: 'Person', name: 'Lena',
  line: 'Bartender at <span class="lk">the Blue Lamp</span>. Covers for <span class="lk">Kit</span>; knows more than she says.',
  facts: [['Appears', 'ch. 2–8 · 31 mentions'], ['First', '<span class="lk">ch. 2, “The bartender”</span>'], ['Knows', '<span class="lk">Kit</span>, <span class="lk">Vega</span>']],
  textFacts: [
    { q: 'Nobody’s been in that room since Tuesday.', where: 'ch. 7, Lena’s warning' },
    { q: 'the lemon on her hands', where: 'ch. 2, The bartender' },
  ],
  researchFacts: [{ t: 'Closes at two; bottles locked at half past one', src: 'Bars, 1952 · p. 14' }],
  questions: ['How old is she? Ch. 2 says “not yet thirty”; ch. 6 implies older.'],
  research: [{ t: 'The Blue Lamp, photos', sub: '3 photos' }, { t: 'Bartenders in the 1950s (PDF)', sub: '14 pages', pdf: true }],
};

const sample = { chapter7Paragraphs, chapter7Plain, chapter1Paragraphs, navRows, crumbs7, lena };

module.exports = {
  markCard, notice,
  esc, attr, sty, icons, ib, win, strip, navigator, reference, refCard, askButton, askPanel, statusBar,
  pageCol, page, gm, gutter, lineTop, sheet, toast, tip, caption, ann, sample, MODES,
};
