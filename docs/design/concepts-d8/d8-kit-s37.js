// Shared helpers for S37-S43 (Settings, agents, AI activity, Help). Not a screen module: lives outside screens/.
'use strict';
const L = require('./lib');

const css = `<style>
.sx{font-size:13px;color:var(--ink)}
.sx-h{display:flex;align-items:center;gap:14px;padding:11px 16px 11px 20px;border-bottom:1px solid var(--line2);flex:none}
.sx-h b{font:600 15px var(--ui)}
.sx-h .seg{margin-left:6px}
.sx-h .seg span{padding:4px 13px}
.sx-h .filter{margin:0 0 0 auto;width:300px;height:30px;padding:0 10px}
.sx-h .x{color:var(--ink3);font-size:14px;width:24px;text-align:center}
.sx-body{display:flex;flex:1;min-height:0}
.sx-nav{width:184px;flex:none;background:var(--soft);border-right:1px solid var(--line2);padding:10px 8px;font-size:13px}
.sx-nav div{padding:7px 12px;border-radius:7px;color:var(--ink2)}
.sx-nav div small{display:block;font-size:11px;color:var(--ink3);margin-top:1px}
.sx-nav div.on{background:var(--paper);box-shadow:0 0 0 1px var(--line);font-weight:600;color:var(--ink)}
.sx-nav div.na{color:var(--ink4)}
.sx-nav div.na small{color:var(--ink4)}
.sx-main{flex:1;min-width:0;padding:14px 24px 12px;overflow:hidden}
.sx-sub{font-size:12px;color:var(--ink3);margin:0 0 8px}
.sx-sec{font:600 10.5px var(--ui);letter-spacing:.09em;text-transform:uppercase;color:var(--ink3);margin:14px 0 7px}
.sx-sec:first-child{margin-top:0}
.sx-row{display:flex;gap:16px;align-items:center;padding:8px 0;border-top:1px solid var(--line2)}
.sx-row:first-of-type{border-top:0}
.sx-row>.k{width:150px;flex:none;font-weight:600;font-size:12.5px}
.sx-row>.v{flex:1;min-width:0;display:flex;align-items:center;gap:10px;flex-wrap:wrap}
.sx .gray{color:var(--ink3);font-size:12px}
.sx .ddb{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--line);border-radius:7px;padding:3px 10px;font-size:12.5px;background:var(--paper);min-width:120px}
.sx .ddb:after{content:"▾";margin-left:auto;color:var(--ink3);font-size:10px}
.sx .opt2{display:flex;align-items:center;gap:8px;padding:2px 0}
.sx .inp{padding:3px 9px;font-size:12.5px}
.sx .lk{color:var(--accent)}
.hit{background:rgba(226,170,40,.32);border-radius:2px}
</style>`;

const SECTIONS = [['General'], ['Writing'], ['Reading & seeing'], ['Styles', 'My styles'], ['Keys'], ['AI'], ['Privacy'], ['Tips']];
// which sections exist in "This book"
const BOOK_SECS = ['General', 'Styles', 'AI', 'Privacy'];

// dialog({x,y,w,h, scope:'all'|'book', active, main, search, results})
function dialog(o) {
  const scope = o.scope || 'all';
  const nav = SECTIONS.map(([t, sub]) => {
    const na = scope === 'book' && !BOOK_SECS.includes(t);
    const s = scope === 'book' && sub ? 'This book’s styles' : sub;
    return `<div class="${t === o.active ? 'on' : ''}${na ? ' na' : ''}">${t}${s ? `<small>${s}</small>` : ''}${na ? '<small>yours only</small>' : ''}</div>`;
  }).join('');
  return `<div class="dlg sx" style="left:${o.x}px;top:${o.y}px;width:${o.w}px;height:${o.h}px${o.style ? ';' + o.style : ''}">`
    + `<div class="sx-h"><b>Settings</b><span class="seg"><span${scope === 'all' ? ' class="on"' : ''}>All my projects</span><span${scope === 'book' ? ' class="on"' : ''}>This book</span></span>`
    + `<div class="filter${o.search ? ' act' : ''}">${L.icons.magnifier}<span>${o.search || 'Search settings'}</span>${o.search ? '<span class="fx">✕</span>' : ''}</div><span class="x">✕</span></div>`
    + `<div class="sx-body"><div class="sx-nav">${nav}</div><div class="sx-main">${o.main}</div></div></div>`;
}
const row = (k, v) => `<div class="sx-row"><span class="k">${k}</span><span class="v">${v}</span></div>`;
const dd = (t, w) => `<span class="ddb"${w ? ` style="min-width:${w}px"` : ''}>${t}</span>`;
const cb = (on, t) => `<span class="opt2"><span class="cb${on ? ' on' : ''}"></span>${t}</span>`;
const rd = (on, t) => `<span class="opt2"><span class="rd${on ? ' on' : ''}"></span>${t}</span>`;

// a Text view window to sit behind dialogs and sheets (chapter 7), optionally dimmed
function textWin(o = {}) {
  const P = L.sample.chapter7Plain;
  const col = `<div class="chap"><div class="num">CHAPTER 7</div><h1>Lena’s warning</h1></div>`
    + P.map((p, i) => `<div class="para"><p${i === 0 ? ' class="first"' : ''}>${p}</p></div>`).join('');
  return L.win({
    view: 'Text', crumbs: L.sample.crumbs7, strip: { review: 12 },
    page: L.pageCol(col, { paddingTop: 40 }),
    status: { style: 'Plain', words: '812 of 1,000 today', goal: 81, pages: 'p. 146 of 248' },
    ask: 'normal', content: o.scrim === false ? '' : '<div class="scrim"></div>', extra: o.extra || '', ...(o.win || {}),
  });
}

// mini(html, {scale, w, h}): a full window drawn small; w,h = the cropped size in real (unscaled) pixels
function mini(html, o = {}) {
  const s = o.scale || 0.5, cw = o.w || 1440, ch = o.h || 900;
  return `<div style="width:${Math.round(cw * s)}px;height:${Math.round(ch * s)}px;overflow:hidden;position:relative;border-top:1px solid var(--line)">`
    + `<div style="width:${cw}px;height:${ch}px;transform:scale(${s});transform-origin:0 0;position:absolute;left:0;top:0;overflow:hidden">${html}</div></div>`;
}

module.exports = { css, dialog, row, dd, cb, rd, textWin, mini, SECTIONS };
