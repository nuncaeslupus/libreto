// S03: The marks, up close (draft 6). Not a window: a board of crops at twice the size, so the rules can be checked
// once: the four underlines (red unknown, blue pending, green done, amber note), the blue dashed rule of a detected
// break or heading, the four Review badges, the four cards side by side, and the rule in one line.
const L = require('../lib');
const I = L.icons;

const css = `<style>
.s03{position:relative;display:flex;flex-wrap:wrap;gap:20px;padding:24px 28px 14px;background:#d9d9d6;align-items:flex-start}
.s03 .crop>.z{zoom:2;padding:12px 16px 14px}
.s03 .crop>.z1{padding:18px 20px 86px}
.s03 .text{font:18px/1.72 var(--text);color:var(--ink)}
/* notes underline their words in amber in this legend only */
.s03 .u-note{border-bottom:2px dotted var(--note);padding-bottom:1px}
.s03 .urow{display:grid;grid-template-columns:200px 1fr;align-items:baseline;gap:0 14px;white-space:nowrap}
.s03 .urow .cap{font:9.5px/1.3 var(--ui);color:var(--ink2)}
.s03 .urow .cap b{font-weight:600}
.s03 .k-spell{color:var(--spell)}.s03 .k-gram{color:var(--task)}.s03 .k-fix{color:var(--fix)}.s03 .k-note{color:var(--note)}
.s03 .rule{border-top:1.5px dashed var(--gram);height:0;margin:16px 40px 14px;-webkit-mask-image:linear-gradient(90deg,transparent,#000 15%,#000 85%,transparent)}
.s03 .struct p{margin:0;font:13px/1.6 var(--text);color:var(--ink2)}
.s03 .struct .cap{font:9.5px/1.35 var(--ui);color:var(--ink2);margin-top:6px}
.s03 .struct h4{margin:6px 0 0;font:400 17px/1.3 var(--text);display:inline-block}
.s03 .bdgs{display:flex;gap:10px;align-items:flex-start}
.s03 .bdgs>div{display:flex;flex-direction:column;align-items:center;gap:5px;width:84px;text-align:center}
.s03 .bdgs>div{width:76px}.s03 .bdgs>div:nth-child(5){width:96px}.s03 .bdgs>div.exp{width:96px}
.s03 .bdgs .gms,.s03 .bdgs .gm.stack{position:static}
.s03 .wholeg{display:flex;gap:12px;align-items:center;margin-top:12px;padding-top:9px;border-top:1px solid var(--line2);font:10px var(--ui);color:var(--ink2);white-space:nowrap}
.s03 .wholeg span{display:inline-flex;gap:5px;align-items:center}
.s03 .wholeg .wl{font:600 9px var(--ui);letter-spacing:.06em;text-transform:uppercase;color:var(--ink3)}
.s03 .bdgs .gm{width:16px;height:16px}
.s03 .bdgs b{font:600 10px/1.2 var(--ui);color:var(--ink)}
.s03 .bdgs small{font:9px/1.25 var(--ui);color:var(--ink3)}
.s03 .bdgs small.both{color:var(--note);font-weight:600}
.s03 .gms2{display:inline-flex;align-items:center;gap:2px;height:16px}
.s03 .gms2 .more{font:600 10px var(--ui);color:var(--task)}
.s03 .cards{display:flex;gap:22px;align-items:flex-start}
.s03 .cards .mc{position:relative;left:auto!important;top:auto!important;box-shadow:0 1px 3px rgba(0,0,0,.08);width:310px}
.s03 .cards .mc-b{white-space:nowrap}
.s03 .cards .cand{display:flex;flex-direction:column;gap:2px;margin:0 0 6px}
.s03 .cards .cand span{font:14px/1.4 var(--text);padding:2px 6px;border-radius:5px}
.s03 .cards .cand span.cur{background:var(--accent-tint)}
.s03 .cards .cand small{font:10.5px var(--ui);letter-spacing:.06em;text-transform:uppercase;color:var(--ink3);margin-bottom:2px}
.s03 .cards .mc-x.nt{font:14px/1.45 var(--text);color:var(--ink)}
.s03 .legend{width:1384px;font:600 22px/1.5 var(--ui);color:var(--ink);padding:6px 4px 0;text-align:center}
.s03 .legend span{font-weight:700}
</style>`;

const crop = (label, w, inner, z = 'z') => `<div class="crop" style="width:${w}px"><div class="lbl">${label}</div><div class="${z}">${inner}</div></div>`;

// 1. the four underlines, one meaning each
const urow = (cap, text) => `<div class="urow"><span class="cap">${cap}</span><span class="text">${text}</span></div>`;
const underlines = urow('<b class="k-spell">Red</b> · a word Libreto does not know', 'by six the gutters on <span class="u-spell">Harborstreet</span> had given up')
  + urow('<b class="k-gram">Blue</b> · pending: proposed, not decided', 'on the table the letters <span class="u-gram">was</span> still sealed')
  + urow('<b class="k-fix">Green</b> · done by Libreto, one Undo away', 'she had <span class="u-fix">received</span> no word, and')
  + urow('<b class="k-note">Amber</b> · a note on the words it is about', 'a view of the <span class="u-note">back-room door</span>');

// 2. pending structure: the blue dashed rule of a detected scene break, the dashed underline of a detected heading
const struct = `<div class="struct" style="width:300px"><p>She stood there long enough for the light to go out.</p><div class="rule"></div><p>The next morning the rain had started again.</p>`
  + `<div class="cap">A detected scene break: a blue dashed rule where it would go</div>`
  + `<h4 class="u-prop">Chapter 8</h4><div class="cap">A detected heading: the same dashed blue. Nothing exists until you keep it</div></div>`;

// 3. the four badges of Review, at the exact line
const bdg = (kind, name, where, cls = '') => `<div>${L.gm(kind)}<b>${name}</b><small class="${cls}">${where}</small></div>`;
const badges = `<div class="bdgs">`
  + bdg('unknown', 'Unknown', 'Review only') + bdg('pending', 'Pending', 'Review only') + bdg('done', 'Done', 'Review only') + bdg('note', 'Note', 'Write and Review', 'both')
  + `<div><span class="gms2">${L.gutter(['pending', 'done', 'note'], 0)}</span><b>Several</b><small>one line, one gray stack with the count</small></div>`
  + `<div class="exp"><span class="gms2">${L.gutter(['pending', 'done', 'note'], 0, { expanded: true })}</span><b>Clicked</b><small>the list opens in color</small></div>`
  + `</div>`
  + `<div class="wholeg"><span class="wl">Who it is from</span><span>${L.who('M')} Marta</span><span>${L.who('You')} you</span><span>${L.who('ai')} the AI</span></div>`;

// 4. the four cards, side by side: the same card, only the buttons differ
const cards = `<div class="cards">`
  + L.markCard({ kind: 'unknown', title: 'Unknown · word', who: 'ai', rows: ['Harbor Street', 'Harbor street'] })
  + L.markCard({ kind: 'pending', title: 'Pending · one word', who: 'M', before: 'she walked in<span class="ws">·</span>to the bar', after: 'she walked <span class="now">into</span> the bar' })
  + L.markCard({ kind: 'done', title: 'Done · typo', who: 'ai', before: 'rec<span class="was">ie</span>ved', after: 'rec<span class="now">ei</span>ved' })
  + L.markCard({ kind: 'note', title: 'Note · You', who: 'You', text: '<div class="mc-x nt">Same coin as in chapter 2? Check before Marta does.</div>' })
  + `</div>`;

const html = css + `<div class="s03">`
  + crop('Underlines: four colors, one meaning each', 1384, underlines)
  + crop('Pending structure', 684, struct)
  + crop('Badges in Review, at the exact line', 680, badges)
  + crop('One card for every mark: only the buttons differ', 1384, cards, 'z1')
  + `<div class="legend"><span class="k-spell">red</span> you fix by typing · <span class="k-gram">blue</span> waits in Review · <span class="k-fix">green</span> is done · <span class="k-note">amber</span> is a remark</div>`
  + L.ann(1, 'Blue like every proposal; dashed because it marks a place, not characters', 230, 640, { w: 300 })
  + L.ann(2, 'In Write only the amber bubble shows in the gutter; the other three, and the gray stack, belong to Review', 752, 744, { w: 560 })
  + L.ann(3, 'The changed part tinted, no italics; a space that matters shows as a middle dot (in·to)', 382, 990, { w: 290 })
  + L.ann(4, 'Unknown: the candidates as rows (Enter takes the first), Ignore here, Add to dictionary', 50, 1012, { w: 290 })
  + L.ann(5, 'Who it is from is the round initial at the right of the title (M, You, the spark for the AI), never another color; Resolve means “read, nothing more to do”', 1046, 970, { w: 300 })
  + `</div>`;

module.exports = {
  id: 'S03',
  file: 's03-marks-up-close',
  title: 'The marks, up close',
  width: 1440,
  height: 1154,
  html,
  caption: L.caption({
    id: 'S03', title: 'The marks, up close',
    scene: 'Not a moment in the app: a legend. The family of marks at twice the size: the four underlines, the blue dashed rule of pending structure, the four badges of Review, and the one card in its four versions, which differ only in their buttons.',
    on: 'Underlines: “Harborstreet” red dotted (unknown), “was” blue dotted (pending), “received” green dotted (done), “back-room door” amber dotted (a note, in this legend only). Pending structure: a blue dashed rule between two paragraphs (detected scene break) and “Chapter 8” with a dashed blue underline (detected heading). Badges: red ? Unknown, blue … Pending, green ✓ Done (Review only), amber bubble Note (Write and Review), the gray stack with the count 3 and the same stack opened in color; the who legend (M Marta, You, the spark for the AI). Cards, each with its initial and the keys footer: Unknown · word (rows Harbor Street, Harbor street; – Ignore here Delete · + Add to dictionary), Pending · one word from M (Was she walked in·to the bar, Now she walked into the bar; ✓ Apply Enter · ✗ Dismiss Delete), Done · typo from the AI (Was recieved, Now received; ✓ Keep Enter · ✗ Undo Delete), Note · You (↩ Reply · ✓ Resolve Enter). The rule in one line',
    off: 'a window, any moment in the book, gray “proposed structure” marks, a gutter in Write (S02), the Review margin (S15), replies under a note, “Make a Codex entry” (the right-click menu does that), the Show menu (S29)',
  }),
};
