#!/usr/bin/env node
// Builds the annotatable review page for a walkthrough draft.
//   node make-review.js ../walkthrough.md out.html [--draft "draft 4"]
// Needs `marked` (npm i marked). Each "## sNN-file: Title" heading of the walkthrough becomes a
// section with the PNG `sNN-file.png` from this folder embedded (base64), a note field under it,
// and a zoomable lightbox. Other "## " headings become text sections with a note field.
const fs = require('fs'), path = require('path');
const { marked } = require(process.env.MARKED || 'marked');

const [,, mdPath, outPath, ...rest] = process.argv;
const draft = (rest.indexOf('--draft') >= 0 ? rest[rest.indexOf('--draft') + 1] : 'draft 4');
const md = fs.readFileSync(mdPath, 'utf8');
const dir = __dirname;

const parts = md.split(/\n(?=## )/);
const head = parts.shift();                       // title + status paragraph
const h1 = (head.match(/^# (.+)$/m) || [, 'Libreto walkthrough'])[1];
const intro = marked.parse(head.replace(/^# .+\n/, ''));

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
let n = 0, sections = [], nav = [];
for (const p of parts) {
  const m = p.match(/^## (.+)\n/); const title = m[1]; const body = p.slice(m[0].length);
  const sm = title.match(/^(s\d{2}-[a-z0-9-]+): (.+)$/);
  if (sm) {
    n++;
    const file = sm[1], id = file.slice(0, 3).toUpperCase(), name = sm[2];
    const png = path.join(dir, file + '.png');
    let img = '';
    if (fs.existsSync(png)) {
      const b64 = fs.readFileSync(png).toString('base64');
      img = `<img src="data:image/png;base64,${b64}" alt="${esc(name)}" loading="lazy">`;
    } else img = `<p class="missing">(picture ${file}.png not built yet)</p>`;
    nav.push(`<a href="#${file}">${n}</a>`);
    sections.push(`<section id="${file}"><h2>${n}. ${esc(name)}<small>${id}</small></h2>${marked.parse(body)}${img}
<label for="n-${file}">Your notes</label><textarea id="n-${file}" data-id="${file}" data-title="${esc(n + '. ' + name + ' (' + id + ')')}" placeholder="Clear? Too much? What would you change?"></textarea></section>`);
  } else {
    const tid = 't' + (sections.length + 1);
    nav.push(`<a href="#${tid}">${esc(title.split(' ')[0])}</a>`);
    sections.push(`<section id="${tid}"><h2>${esc(title)}</h2><div class="flow">${marked.parse(body)}</div>
<label for="n-${tid}">Your notes</label><textarea id="n-${tid}" data-id="${tid}" data-title="${esc(title)}" placeholder="Your notes"></textarea></section>`);
  }
}

const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Libreto walkthrough (${esc(draft)})</title><style>
:root{--ink:#222326;--ink2:#5a5d63;--line:#ddddd9;--bg:#f4f4f2;--card:#fff;--acc:#3b6ea5}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){--ink:#e8e8e6;--ink2:#a5a7ab;--line:#3a3b3e;--bg:#1c1d1f;--card:#26272a;--acc:#7aa7d6}}
:root[data-theme="dark"]{--ink:#e8e8e6;--ink2:#a5a7ab;--line:#3a3b3e;--bg:#1c1d1f;--card:#26272a;--acc:#7aa7d6}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--ink);font:15px/1.55 -apple-system,"Segoe UI",Inter,system-ui,sans-serif}
header,section,nav{max-width:1180px;margin:0 auto;padding:0 16px}header{padding-top:32px}h1{font-size:24px;margin:0 0 6px}header p,header li{color:var(--ink2)}
nav{display:flex;flex-wrap:wrap;gap:6px;padding-top:8px;padding-bottom:4px;position:sticky;top:0;background:var(--bg);z-index:5}
nav a{font-size:13px;color:var(--ink);text-decoration:none;border:1px solid var(--line);border-radius:14px;padding:2px 10px;background:var(--card)}
nav a.has{border-color:var(--acc);color:var(--acc)}
.bar{margin-left:auto;display:flex;gap:6px}button{font:inherit;font-size:13px;border:1px solid var(--line);background:var(--card);color:var(--ink);border-radius:6px;padding:3px 10px;cursor:pointer}
button.primary{background:var(--acc);color:#fff;border-color:var(--acc)}
section{padding-top:28px;padding-bottom:8px}h2{font-size:17px;margin:0 0 4px}h2 small{font-weight:400;color:var(--ink2);margin-left:8px;font-size:13px}section p{margin:0 0 10px;color:var(--ink2)}
section img{width:100%;height:auto;display:block;border:1px solid var(--line);border-radius:6px;cursor:zoom-in;background:#fff}
.flow table,header table{border-collapse:collapse;font-size:14px;margin:8px 0 12px}.flow td,.flow th,header td,header th{border:1px solid var(--line);padding:4px 8px;text-align:left;vertical-align:top}
.flow li,header li{margin:0 0 6px;color:var(--ink2)}code{font-size:13px;background:var(--card);border:1px solid var(--line);border-radius:4px;padding:0 4px}
.missing{color:#b5651d}
label{display:block;font-size:13px;color:var(--ink2);margin:10px 0 4px}
textarea{width:100%;min-height:90px;font:inherit;color:var(--ink);background:var(--card);border:1px solid var(--line);border-radius:6px;padding:8px 10px;resize:vertical}
textarea:focus{outline:2px solid var(--acc);border-color:transparent}
#status{font-size:12px;color:var(--ink2);align-self:center}
#lb{position:fixed;inset:0;background:rgba(10,10,12,.92);display:none;z-index:50;overflow:hidden;touch-action:none}#lb.on{display:block}
#lb img{position:absolute;left:0;top:0;transform-origin:0 0;cursor:grab;user-select:none;-webkit-user-drag:none;max-width:none}
#lb .tools{position:absolute;top:10px;right:10px;display:flex;gap:6px;z-index:2}#lb .tools button{background:#2b2c30;color:#eee;border-color:#444}
#lb .hint{position:absolute;bottom:10px;left:50%;transform:translateX(-50%);color:#bbb;font-size:12px;z-index:2}
footer{max-width:1180px;margin:24px auto 48px;padding:0 16px;color:var(--ink2);font-size:13px}
</style></head><body>
<header><h1>${esc(h1)}</h1>${intro}</header>
<nav>${nav.join('')}<span class="bar"><span id="status"></span><button id="cp">Copy notes</button><button id="dl" class="primary">Download notes</button></span></nav>
${sections.join('\n')}
<footer>Screens are concepts: no visual style yet. Numbers in the menu above jump to each section. Notes are kept in this browser; download them before closing.</footer>
<div id="lb"><div class="tools"><button data-z="out">−</button><button data-z="fit">Fit</button><button data-z="one">100%</button><button data-z="in">+</button><button data-z="prev">‹</button><button data-z="next">›</button><button data-z="x">✕ Esc</button></div><img alt=""><div class="hint">Scroll or pinch to zoom · drag to move · ← → screens · Esc closes</div></div>
<script>
const KEY='libreto-walkthrough-${draft.replace(/\s+/g, '-')}';
const tas=[...document.querySelectorAll('textarea')];
let store={};try{store=JSON.parse(localStorage.getItem(KEY)||'{}')}catch(e){}
const st=document.getElementById('status');
function mark(){tas.forEach(t=>{const a=document.querySelector('nav a[href="#'+t.dataset.id+'"]');if(a)a.classList.toggle('has',t.value.trim()!=='')})}
tas.forEach(t=>{t.value=store[t.dataset.id]||'';t.addEventListener('input',()=>{store[t.dataset.id]=t.value;try{localStorage.setItem(KEY,JSON.stringify(store));st.textContent='Saved'}catch(e){st.textContent='Not saved in browser: download before closing'}mark()})});mark();
function md(){let s='# Libreto walkthrough (${draft}): review notes\\n\\n_Exported '+new Date().toISOString().slice(0,16).replace('T',' ')+'_\\n';tas.forEach(t=>{s+='\\n## '+t.dataset.title+'\\n\\n'+(t.value.trim()||'_(no notes)_')+'\\n'});return s}
document.getElementById('dl').onclick=()=>{const b=new Blob([md()],{type:'text/markdown'});const a=document.createElement('a');a.href=URL.createObjectURL(b);a.download='libreto-walkthrough-d4-notes.md';document.body.appendChild(a);a.click();a.remove()};
document.getElementById('cp').onclick=async()=>{try{await navigator.clipboard.writeText(md());st.textContent='Copied'}catch(e){st.textContent='Copy failed: use Download'}};
const imgs=[...document.querySelectorAll('section img')],lb=document.getElementById('lb'),li=lb.querySelector('img');
let cur=0,s=1,x=0,y=0,drag=null,pts=new Map(),pinch=null;
function apply(){li.style.transform=\`translate(\${x}px,\${y}px) scale(\${s})\`}
function fit(){const W=innerWidth,H=innerHeight,w=li.naturalWidth,h=li.naturalHeight;s=Math.min(W/w,(H-20)/h);x=(W-w*s)/2;y=(H-h*s)/2;apply()}
function open(i){cur=(i+imgs.length)%imgs.length;li.src=imgs[cur].src;lb.classList.add('on');if(li.complete)fit();else li.onload=fit}
function zoomAt(f,cx,cy){const ns=Math.min(8,Math.max(.1,s*f));x=cx-(cx-x)*ns/s;y=cy-(cy-y)*ns/s;s=ns;apply()}
imgs.forEach((im,i)=>im.onclick=()=>open(i));
lb.addEventListener('wheel',e=>{e.preventDefault();zoomAt(e.deltaY<0?1.15:1/1.15,e.clientX,e.clientY)},{passive:false});
lb.addEventListener('pointerdown',e=>{if(e.target.closest('.tools'))return;lb.setPointerCapture(e.pointerId);pts.set(e.pointerId,[e.clientX,e.clientY]);if(pts.size===1)drag=[e.clientX-x,e.clientY-y];else if(pts.size===2){const p=[...pts.values()];pinch=[Math.hypot(p[0][0]-p[1][0],p[0][1]-p[1][1]),s];drag=null}});
lb.addEventListener('pointermove',e=>{if(!pts.has(e.pointerId))return;pts.set(e.pointerId,[e.clientX,e.clientY]);if(pinch&&pts.size===2){const p=[...pts.values()],d=Math.hypot(p[0][0]-p[1][0],p[0][1]-p[1][1]);zoomAt(pinch[1]*d/pinch[0]/s,(p[0][0]+p[1][0])/2,(p[0][1]+p[1][1])/2)}else if(drag){x=e.clientX-drag[0];y=e.clientY-drag[1];apply()}});
function up(e){pts.delete(e.pointerId);if(pts.size<2)pinch=null;if(pts.size===0)drag=null}
lb.addEventListener('pointerup',up);lb.addEventListener('pointercancel',up);
li.addEventListener('dblclick',e=>zoomAt(s<1.5?2:.5,e.clientX,e.clientY));
lb.querySelector('.tools').onclick=e=>{const z=e.target.dataset.z;if(!z)return;const W=innerWidth/2,H=innerHeight/2;
if(z==='in')zoomAt(1.3,W,H);if(z==='out')zoomAt(1/1.3,W,H);if(z==='fit')fit();if(z==='one'){zoomAt(1/s,W,H)}if(z==='prev')open(cur-1);if(z==='next')open(cur+1);if(z==='x')lb.classList.remove('on')};
addEventListener('keydown',e=>{if(!lb.classList.contains('on'))return;if(e.key==='Escape')lb.classList.remove('on');if(e.key==='ArrowRight')open(cur+1);if(e.key==='ArrowLeft')open(cur-1);if(e.key==='+'||e.key==='=')zoomAt(1.3,innerWidth/2,innerHeight/2);if(e.key==='-')zoomAt(1/1.3,innerWidth/2,innerHeight/2);if(e.key==='0')fit()});
addEventListener('resize',()=>{if(lb.classList.contains('on'))fit()});
</script></body></html>`;
fs.writeFileSync(outPath, html);
console.log(`wrote ${outPath}: ${sections.length} sections, ${n} screens, ${(fs.statSync(outPath).size / 1048576).toFixed(1)} MB`);
