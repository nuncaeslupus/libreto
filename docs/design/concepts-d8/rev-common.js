// Shared bits for the draft 8 review & versions screens (S16-S23). Not a screen module.
'use strict';
const L = require('./lib');
const I = L.icons;

const css = `<style>
.bb{position:absolute;left:calc(100% + 16px);width:19px;height:15px;border-radius:5px;text-indent:0;font:600 9.5px/15px var(--ui);text-align:center}
.bb:after{content:"";position:absolute;left:4px;bottom:-4px;width:6px;height:6px;background:inherit;border-left:inherit;border-bottom:inherit;transform:skewY(-30deg) rotate(0deg);clip-path:polygon(0 0,100% 0,0 100%)}
.bb.mine{background:#e2aa28;color:#fff}
.bb.oth{background:#fff;border:1.5px solid #8f939a;color:#6b6f76}
.bb.oth:after{display:none}
.bb.oth i{position:absolute;left:3px;bottom:-5.5px;width:7px;height:7px;background:#fff;border-right:1.5px solid #8f939a;border-bottom:1.5px solid #8f939a;transform:skewX(35deg) rotate(0deg);clip-path:none;border-radius:0 0 2px 0}
.bb.stk{width:auto;min-width:19px;padding:0 5px;background:#dcdad4;color:var(--ink2);border-radius:8px;box-shadow:-3px 1px 0 -1px #c8c6c0}
.bb.stk:after{display:none}
.wh{display:inline-flex;align-items:center;justify-content:center;min-width:18px;height:18px;border-radius:9px;background:#e6e4df;color:var(--ink2);font:600 10px/1 var(--ui);padding:0 5px;flex:none}
.wh.lib{background:var(--ink2);color:#fff}.wh.ai{background:rgba(59,110,168,.12);color:var(--accent)}.wh.ai svg{width:12px;height:12px}
.wh.M{background:#e8e1f6;color:#5b3fb0}.wh.T{background:#d9eef3;color:#177089}.wh.Y{background:#eceae4}
.tM{background:rgba(111,79,201,.14);box-shadow:inset 0 -2px 0 rgba(111,79,201,.55)}
.tT{background:rgba(26,127,156,.14);box-shadow:inset 0 -2px 0 rgba(26,127,156,.55)}
/* the Review margin (side panel) */
.rvm{position:absolute;right:0;top:0;bottom:0;width:340px;background:var(--soft);border-left:1px solid var(--line);font:12.5px/1.4 var(--ui);color:var(--ink);display:flex;flex-direction:column;z-index:4}
.rvm .rh{padding:10px 14px 0}
.rvm .r1{display:flex;align-items:center;gap:8px}
.rvm .r1 b{font:600 14px var(--ui)}
.rvm .r1 .sp{flex:1}
.pg2{display:inline-flex;background:#fff;border:1px solid var(--line);border-radius:7px;padding:2px;gap:2px}
.pg2 span{padding:2px 10px;border-radius:5px;color:var(--ink2);font-size:12px}
.pg2 .on{background:var(--ink);color:#fff;font-weight:600}
.rounds{margin:8px 0 0;border:1px solid var(--line);border-radius:8px;background:#fff}
.rd2{display:flex;align-items:center;gap:8px;padding:5px 8px;border-top:1px solid var(--line2);font-size:12px}
.rd2:first-child{border-top:0}
.rd2 .nm{flex:1;min-width:0;white-space:nowrap}
.rd2 .nm small{color:var(--ink3);font-size:11.5px}
.rd2 .pr{width:34px;height:4px;border-radius:2px;background:var(--line);position:relative;flex:none}
.rd2 .pr i{position:absolute;left:0;top:0;bottom:0;border-radius:2px;background:var(--ink2)}
.rd2 .ct{width:106px;text-align:right;color:var(--ink2);font-variant-numeric:tabular-nums;flex:none;white-space:nowrap}
.rd2.on{background:var(--accent-tint)}
.rd2.on .nm{font-weight:600}
.tg{display:flex;flex-wrap:wrap;gap:5px;margin:9px 0 0}
.tg span{display:inline-flex;align-items:center;gap:5px;border:1px solid var(--line);border-radius:6px;padding:2px 8px 2px 6px;background:#fff;color:var(--ink3);font-size:11.5px}
.tg span:before{content:"";width:11px;height:11px;border:1.5px solid var(--ink4);border-radius:3px;box-sizing:border-box;flex:none}
.tg span.on{color:var(--ink);border-color:var(--ink3)}
.tg span.on:before{background:var(--ink);border-color:var(--ink);box-shadow:inset 0 0 0 2px #fff}
.rvm .r3{display:flex;align-items:center;gap:8px;margin:9px 0 9px}
.rvm .r3 .sp{flex:1}
.rvm .r3 .btn{height:26px;font-size:12px;padding:0 10px}
.rvm .addl{color:var(--accent);font-size:12px}
.rvm .cards{position:relative;flex:1;min-height:0;border-top:1px solid var(--line)}
.rc{position:absolute;left:10px;right:12px;background:#fff;border:1px solid var(--line);border-radius:9px;padding:7px 10px 8px;box-shadow:0 1px 3px rgba(0,0,0,.05);font:12.5px/1.38 var(--ui)}
.rc .h{display:flex;align-items:center;gap:7px;margin-bottom:4px}
.rc .h svg{width:14px;height:14px;flex:none}
.rc .h b{font-weight:600}
.rc .h .wh{margin-left:auto}
.rc .h small{color:var(--ink3);font-size:11.5px}
.rc.pend .h svg{color:var(--gram)}.rc.nt .h svg{color:var(--note)}.rc.fixd .h svg{color:var(--fix)}
.rc .x{color:var(--ink);margin:0 0 6px}
.rc .x .q{font:italic 13.5px var(--text)}
.rc .a{display:flex;gap:5px;flex-wrap:wrap;border-top:1px solid var(--line2);padding-top:6px}
.rc .b{display:inline-flex;align-items:center;gap:4px;border:1px solid var(--line);border-radius:6px;padding:2px 8px;background:#fff;color:var(--ink);font-size:12px;white-space:nowrap}
.rc .b.p{border-color:var(--accent);color:var(--accent)}
.rc .b kbd{margin-left:3px;font-size:10px;padding:0 4px}
.rc .b svg{width:12px;height:12px}
.rc.stale{background:#eef1f6;border-color:#c3cddd}
.rc.stale .h svg{color:#6a7b96}
.rc.stale .b{background:#f8f9fb}
.rc.sel{border-color:var(--gram);box-shadow:0 0 0 3px rgba(58,111,216,.12),0 6px 18px rgba(0,0,0,.08)}
.rc .was{background:var(--red-tint);border-radius:2px;text-decoration:line-through}.rc .now{background:rgba(46,139,87,.14);border-radius:2px}
.rc .rep{border-left:2px solid var(--line);margin:0 0 5px 3px;padding:1px 0 1px 8px;color:var(--ink2)}
.rc .rep b{color:var(--ink);font-weight:600}
.rc .fold{display:flex;align-items:center;gap:6px;color:var(--accent);margin:0 0 5px 3px;padding-left:8px;border-left:2px dashed var(--line)}
.rc .clamp{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;color:var(--ink)}
.rc .fade{position:relative}
.rc .rall{color:var(--accent);margin-top:3px;display:inline-block}
.dotu{display:inline-block;width:7px;height:7px;border-radius:50%;background:var(--accent);flex:none}
.cline{position:absolute;height:1.5px;background:var(--line);z-index:2}
.s .gm{}
</style>`;

const who = (w) => w === 'ai' ? `<span class="wh ai" title="The AI">${I.spark}</span>`
  : w === 'L' ? `<span class="wh lib" title="A Libreto rule">L</span>`
  : `<span class="wh ${w === 'M' ? 'M' : w === 'T' ? 'T' : 'Y'}" title="${w}">${w === 'M' || w === 'T' ? w : 'You'}</span>`;

const rounds = (o = {}) => {
  const rows = [
    ['M', 'Marta', 'Nov 7', 150, 300, '150 / 300'],
    ['T', 'Teo', 'Nov 9', 0, 41, '0 / 41'],
    ['ai', 'AI pass', 'Nov 12', 12, 80, '12 / 80 · ≈0.42 €'],
    ['L', 'Libreto rules', 'ongoing', null, null, ''],
  ];
  return `<div class="rounds">${rows.map(([w, n, d, a, b, t], i) => `<div class="rd2${o.on === i ? ' on' : ''}">${who(w)}<span class="nm">${n} <small>· ${d}</small></span>${a === null ? '<span class="ct" style="color:var(--ink3)">always on</span>' : `<span class="pr"><i style="width:${Math.round(a / b * 100)}%"></i></span><span class="ct">${t}</span>`}</div>`).join('')}</div>`;
};
const toggles = (on = {}) => `<div class="tg">${['Notes', 'Suggestions', 'Fixed', 'Spelling', 'Unread', 'Resolved'].map((t) => `<span${on[t] === false ? '' : ' class="on"'}>${t}</span>`).join('')}</div>`;
const head = (o = {}) => `<div class="rh"><div class="r1"><b>Review</b><span class="sp"></span><span class="pg2"><span${o.list ? '' : ' class="on"'}>Page</span><span${o.list ? ' class="on"' : ''}>List</span></span></div>`
  + (o.rounds === false ? '' : rounds(o))
  + toggles(o.tg || { Notes: true, Suggestions: true, Fixed: false, Spelling: false, Unread: false, Resolved: false })
  + `<div class="r3"><span class="btn pri">Review all ▶</span><span class="sp"></span><span class="addl">Add notes from a reader’s copy…</span></div></div>`;

const rc = (cls, y, inner, extra = '') => `<div class="rc ${cls}"${extra} style="top:${y}px">${inner}</div>`;
const btn = (t, o = {}) => `<span class="b${o.p ? ' p' : ''}">${o.g ? `<i style="font-style:normal">${o.g}</i>` : ''}${t}${o.k ? `<kbd>${o.k}</kbd>` : ''}</span>`;

// page text: the end of chapter 7 (plain)
const P7 = [
  '“Lena,” she said quietly, “if he’s in trouble, I’d rather hear it from you.”',
  '“Then hear this.” Lena leaned close enough that Vega could smell the lemon on her hands. “Go home. Don’t come back to the Blue Lamp tomorrow. And don’t ask Kit what he saw.”',
];

module.exports = { css, who, rounds, toggles, head, rc, btn, P7, L, I };
