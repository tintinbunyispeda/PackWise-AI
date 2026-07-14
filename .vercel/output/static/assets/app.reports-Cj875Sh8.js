import{a as e,n as t,t as n}from"./jsx-runtime-n5LQ9ujS.js";import{i as r}from"./dist-CN5G41VA.js";import{t as i}from"./chevron-right-ay5EtK86.js";import{t as a}from"./circle-check-mun2aR76.js";import{t as o}from"./circle-x-CWtSRwsT.js";import{t as s}from"./file-text-C9CXQP0m.js";import{t as c}from"./sparkles-B5fPfOjd.js";import{n as l,t as u}from"./card-FPmRMPVM.js";import{t as d}from"./button-CWcZ2VcF.js";import{n as f,t as p}from"./page-header-7uK6fn2k.js";import{r as m}from"./workflow-store-Dshb2s7F.js";import{a as h,n as g,o as _,r as v,t as y}from"./dialog-BcPzixfq.js";var b=r(`file-down`,[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M12 18v-6`,key:`17g6i2`}],[`path`,{d:`m9 15 3 3 3-3`,key:`1npd3o`}]]),x=e(t()),S=n();function C(e){return{id:`RPT-${e.id}`,reqId:e.id,name:`${e.sku} — Attachment Plan`,product:e.sku,engineer:e.engineer,date:e.date,status:e.status,decidedAt:e.decidedAt,risk:e.risk,cost:e.cost,laborTime:e.laborTime,sustainability:e.sustainability,snapshot:e.reportSnapshot}}function w({report:e,onClose:t}){let n=e.snapshot;return(0,S.jsx)(y,{open:!0,onOpenChange:t,children:(0,S.jsxs)(g,{className:`max-w-xl max-h-[90vh] overflow-y-auto`,children:[(0,S.jsxs)(h,{children:[(0,S.jsxs)(`div`,{className:`flex items-center gap-2 flex-wrap`,children:[(0,S.jsx)(f,{variant:`outline`,className:`border-border/70 text-xs font-mono`,children:e.id}),(0,S.jsxs)(f,{variant:`outline`,className:`text-xs font-semibold border-transparent ${e.status===`Approved`?`bg-[color:var(--success)]/10 text-[color:var(--success)]`:`bg-destructive/10 text-destructive`}`,children:[e.status===`Approved`?(0,S.jsx)(a,{className:`mr-1 h-3 w-3 inline`}):(0,S.jsx)(o,{className:`mr-1 h-3 w-3 inline`}),e.status]})]}),(0,S.jsx)(_,{className:`text-left text-base leading-snug`,children:e.name}),(0,S.jsxs)(v,{className:`text-left text-xs text-muted-foreground`,children:[e.engineer,` · `,e.date,e.decidedAt&&` · Decided: ${e.decidedAt}`]})]}),(0,S.jsxs)(`div`,{className:`space-y-4`,children:[(0,S.jsx)(`div`,{className:`grid grid-cols-2 gap-2`,children:[{label:`Risk Level`,value:e.risk},{label:`Est. Cost`,value:e.cost},e.laborTime?{label:`Labor Time`,value:e.laborTime}:null,e.sustainability?{label:`Sustainability`,value:`${e.sustainability}%`}:null,n?{label:`Drop Survival`,value:`${n.dropSurvival}/100`}:null,n?{label:`Movement Risk`,value:String(n.movementRisk)}:null].filter(Boolean).map(e=>(0,S.jsxs)(`div`,{className:`rounded-lg border border-border/60 bg-muted/20 p-3`,children:[(0,S.jsx)(`p`,{className:`text-[10px] uppercase font-medium text-muted-foreground tracking-wide`,children:e.label}),(0,S.jsx)(`p`,{className:`text-base font-bold text-foreground mt-0.5`,children:e.value})]},e.label))}),(n?.imageDataUrl||n?.annotatedImageDataUrl)&&(0,S.jsxs)(`div`,{className:`space-y-2`,children:[(0,S.jsx)(`p`,{className:`text-xs font-semibold uppercase tracking-wide text-muted-foreground`,children:`Product Images`}),(0,S.jsxs)(`div`,{className:`grid grid-cols-2 gap-2`,children:[n.imageDataUrl&&(0,S.jsxs)(`div`,{className:`rounded-lg border border-border/60 overflow-hidden bg-muted/20`,children:[(0,S.jsx)(`p`,{className:`text-[9px] uppercase font-semibold text-muted-foreground px-2 py-1 border-b border-border/40`,children:`Original`}),(0,S.jsx)(`img`,{src:n.imageDataUrl,alt:`product`,className:`w-full h-36 object-contain bg-white`})]}),n.annotatedImageDataUrl&&(0,S.jsxs)(`div`,{className:`rounded-lg border border-border/60 overflow-hidden bg-muted/20`,children:[(0,S.jsx)(`p`,{className:`text-[9px] uppercase font-semibold text-muted-foreground px-2 py-1 border-b border-border/40`,children:`Annotated`}),(0,S.jsx)(`img`,{src:n.annotatedImageDataUrl,alt:`annotated`,className:`w-full h-36 object-contain bg-white`})]})]})]}),n?.zones&&n.zones.length>0&&(0,S.jsxs)(`div`,{className:`space-y-2`,children:[(0,S.jsx)(`p`,{className:`text-xs font-semibold uppercase tracking-wide text-muted-foreground`,children:`Attachment Zones`}),(0,S.jsx)(`div`,{className:`rounded-lg border border-border/60 overflow-hidden`,children:(0,S.jsxs)(`table`,{className:`w-full text-xs`,children:[(0,S.jsx)(`thead`,{className:`bg-muted/50 text-muted-foreground`,children:(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`th`,{className:`px-3 py-2 text-left font-medium`,children:`Zone`}),(0,S.jsx)(`th`,{className:`px-3 py-2 text-left font-medium`,children:`Method`}),(0,S.jsx)(`th`,{className:`px-3 py-2 text-left font-medium`,children:`Cost`}),(0,S.jsx)(`th`,{className:`px-3 py-2 text-left font-medium`,children:`Labor`})]})}),(0,S.jsx)(`tbody`,{children:n.zones.map((e,t)=>(0,S.jsxs)(`tr`,{className:`border-t border-border/40`,children:[(0,S.jsx)(`td`,{className:`px-3 py-2 font-medium`,children:e.zone}),(0,S.jsx)(`td`,{className:`px-3 py-2 text-muted-foreground`,children:e.recommendedMethod}),(0,S.jsxs)(`td`,{className:`px-3 py-2`,children:[`$`,Number(e.cost).toFixed(2)]}),(0,S.jsxs)(`td`,{className:`px-3 py-2`,children:[e.laborMins,` min`]})]},t))})]})})]}),n?.finalRecommendation&&(0,S.jsxs)(`div`,{className:`rounded-lg border border-[color:var(--primary)]/20 bg-[color:var(--primary-soft)]/20 p-3 space-y-1.5`,children:[(0,S.jsx)(`p`,{className:`text-xs font-semibold uppercase tracking-wide text-muted-foreground`,children:`Final Recommendation`}),(0,S.jsxs)(`p`,{className:`text-sm text-foreground`,children:[(0,S.jsx)(`span`,{className:`text-muted-foreground`,children:`Packaging:`}),` `,n.finalRecommendation.packaging]}),(0,S.jsxs)(`p`,{className:`text-sm text-foreground`,children:[(0,S.jsx)(`span`,{className:`text-muted-foreground`,children:`Cushion:`}),` `,n.finalRecommendation.cushion]}),(0,S.jsxs)(`p`,{className:`text-sm text-foreground`,children:[(0,S.jsx)(`span`,{className:`text-muted-foreground`,children:`Attachment:`}),` `,n.finalRecommendation.attachment]}),(0,S.jsxs)(`p`,{className:`text-sm text-foreground`,children:[(0,S.jsx)(`span`,{className:`text-muted-foreground`,children:`ISTA:`}),` `,n.finalRecommendation.ista]})]}),(0,S.jsxs)(`div`,{className:`flex gap-2 pt-1`,children:[(0,S.jsxs)(d,{size:`sm`,className:`flex-1`,onClick:()=>{let t=(n?.zones||[]).map(e=>`
      <tr>
        <td>${e.zone}</td>
        <td>${e.recommendedMethod}</td>
        <td>${e.action}</td>
        <td>$${Number(e.cost).toFixed(2)}</td>
        <td>${e.laborMins} min</td>
        <td>${e.sustainability}%</td>
      </tr>`).join(``),r=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>PackWise AI — ${e.id}</title>
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body { font-family:'Segoe UI',Arial,sans-serif; color:#1a1a2e; background:#fff; font-size:11px; }
  .page { max-width:900px; margin:0 auto; padding:32px; }
  .header { display:flex; justify-content:space-between; align-items:flex-start; border-bottom:2px solid #d946ef; padding-bottom:16px; margin-bottom:24px; }
  .header h1 { font-size:20px; font-weight:700; color:#d946ef; }
  .header p { font-size:10px; color:#666; margin-top:4px; }
  .section { margin-bottom:24px; }
  .section-title { font-size:12px; font-weight:700; color:#d946ef; text-transform:uppercase; letter-spacing:0.08em; border-bottom:1px solid #f3e8ff; padding-bottom:5px; margin-bottom:10px; }
  .metrics { display:grid; grid-template-columns:repeat(4,1fr); gap:8px; }
  .metric { background:#faf5ff; border:1px solid #e9d5ff; border-radius:8px; padding:8px 10px; }
  .mlabel { font-size:8px; text-transform:uppercase; color:#9333ea; font-weight:600; }
  .mval { font-size:18px; font-weight:700; color:#1a1a2e; margin-top:1px; }
  .kv { display:grid; grid-template-columns:repeat(3,1fr); gap:6px; }
  .kvi { background:#f9fafb; border:1px solid #e5e7eb; border-radius:6px; padding:7px 9px; }
  .kvl { font-size:8px; text-transform:uppercase; color:#9ca3af; font-weight:600; }
  .kvv { font-size:10px; font-weight:600; color:#111827; margin-top:2px; }
  .photo-grid { display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:10px; }
  .photo-box { border:1px solid #e5e7eb; border-radius:8px; overflow:hidden; }
  .photo-label { font-size:8px; text-transform:uppercase; color:#9ca3af; font-weight:600; padding:6px 8px; border-bottom:1px solid #e5e7eb; background:#f9fafb; }
  .photo-box img { width:100%; height:240px; object-fit:contain; background:#fff; }
  table { width:100%; border-collapse:collapse; font-size:9px; }
  th { background:#faf5ff; color:#7c3aed; font-weight:600; font-size:8px; text-transform:uppercase; padding:6px 8px; text-align:left; border-bottom:1px solid #e9d5ff; }
  td { padding:5px 8px; border-bottom:1px solid #f3f4f6; color:#374151; }
  .badge-approved { display:inline-block; background:#d1fae5; color:#065f46; border-radius:99px; padding:2px 10px; font-weight:700; font-size:10px; }
  .badge-rejected { display:inline-block; background:#fee2e2; color:#991b1b; border-radius:99px; padding:2px 10px; font-weight:700; font-size:10px; }
  .footer { margin-top:24px; padding-top:12px; border-top:1px solid #e5e7eb; display:flex; justify-content:space-between; font-size:8px; color:#9ca3af; }
  @media print { body { -webkit-print-color-adjust:exact; print-color-adjust:exact; } }
</style>
</head>
<body>
<div class="page">
  <div class="header">
    <div>
      <h1>📦 PackWise AI — Engineering Report</h1>
      <p>${e.product} &nbsp;·&nbsp; Report ID: ${e.id} &nbsp;·&nbsp; Submitted: ${e.date}</p>
    </div>
    <div style="text-align:right;font-size:9px;color:#888;">
      <span class="${e.status===`Approved`?`badge-approved`:`badge-rejected`}">${e.status}</span>
      ${e.decidedAt?`<div style="margin-top:4px;">Decided: ${e.decidedAt}</div>`:``}
    </div>
  </div>

  <div class="section">
    <div class="section-title">Summary Metrics</div>
    <div class="metrics">
      <div class="metric"><div class="mlabel">Risk Level</div><div class="mval" style="font-size:14px;">${e.risk}</div></div>
      <div class="metric"><div class="mlabel">Est. Cost</div><div class="mval" style="font-size:14px;">${e.cost}</div></div>
      ${e.laborTime?`<div class="metric"><div class="mlabel">Labor Time</div><div class="mval" style="font-size:14px;">${e.laborTime}</div></div>`:``}
      ${e.sustainability?`<div class="metric"><div class="mlabel">Sustainability</div><div class="mval" style="font-size:14px;">${e.sustainability}%</div></div>`:``}
      ${n?`
      <div class="metric"><div class="mlabel">Drop Survival</div><div class="mval">${n.dropSurvival}<span style="font-size:9px;">/100</span></div></div>
      <div class="metric"><div class="mlabel">Movement Risk</div><div class="mval">${n.movementRisk}</div></div>
      <div class="metric"><div class="mlabel">Accessory Loss</div><div class="mval">${n.accessoryLoss}<span style="font-size:9px;">%</span></div></div>
      <div class="metric"><div class="mlabel">Overall Risk</div><div class="mval" style="font-size:13px;">${n.overallRisk}</div></div>
      `:``}
    </div>
  </div>

  ${n?.imageDataUrl||n?.annotatedImageDataUrl?`
  <div class="section">
    <div class="section-title">Product Detection Image</div>
    <div class="photo-grid">
      ${n?.imageDataUrl?`<div class="photo-box"><div class="photo-label">Original Captured</div><img src="${n.imageDataUrl}" alt="original" /></div>`:``}
      ${n?.annotatedImageDataUrl?`<div class="photo-box"><div class="photo-label">Annotated — Skeleton & Zones</div><img src="${n.annotatedImageDataUrl}" alt="annotated" /></div>`:``}
    </div>
    <div class="kv" style="margin-top:6px;">
      ${n?.accessories?.length?`<div class="kvi"><div class="kvl">Accessories</div><div class="kvv">${n.accessories.join(`, `)}</div></div>`:``}
      ${n?.detectedPoses?.length?`<div class="kvi"><div class="kvl">Detected Pose</div><div class="kvv">${n.detectedPoses.join(`, `)}</div></div>`:``}
    </div>
  </div>`:``}

  ${n?.zones?.length?`
  <div class="section">
    <div class="section-title">Attachment Zones Plan</div>
    <table>
      <thead><tr><th>Zone</th><th>Recommended Method</th><th>Action</th><th>Cost</th><th>Labor</th><th>Sustainability</th></tr></thead>
      <tbody>${t}</tbody>
    </table>
  </div>`:``}

  ${n?.finalRecommendation?`
  <div class="section">
    <div class="section-title">Final Recommendation</div>
    <div class="kv">
      <div class="kvi"><div class="kvl">Packaging</div><div class="kvv">${n.finalRecommendation.packaging}</div></div>
      <div class="kvi"><div class="kvl">Cushion</div><div class="kvv">${n.finalRecommendation.cushion}</div></div>
      <div class="kvi"><div class="kvl">Attachment</div><div class="kvv">${n.finalRecommendation.attachment}</div></div>
      <div class="kvi"><div class="kvl">Support</div><div class="kvv">${n.finalRecommendation.support}</div></div>
      <div class="kvi"><div class="kvl">ISTA</div><div class="kvv">${n.finalRecommendation.ista}</div></div>
    </div>
  </div>`:``}

  <div class="footer">
    <div>PackWise AI · Report ID: ${e.id}</div>
    <div>Engineer: ${e.engineer} · Submitted: ${e.date}</div>
  </div>
</div>
</body>
</html>`,i=window.open(``,`_blank`);i&&(i.document.write(r),i.document.close(),setTimeout(()=>i.print(),500))},children:[(0,S.jsx)(b,{className:`h-4 w-4 mr-2`}),` Export PDF`]}),(0,S.jsx)(d,{size:`sm`,variant:`outline`,onClick:t,children:`Close`})]})]})]})})}function T(){let[e,t]=(0,x.useState)([]),[n,r]=(0,x.useState)(null),[d,h]=(0,x.useState)(`approved`);(0,x.useEffect)(()=>{t(m().filter(e=>e.status===`Approved`||e.status===`Rejected`).map(C))},[]);let g=e.filter(e=>e.status===`Approved`),_=e.filter(e=>e.status===`Rejected`),v=d===`approved`?g:_;return(0,S.jsxs)(`div`,{className:`space-y-8`,children:[(0,S.jsx)(p,{title:`Reports`,description:`Accepted and rejected attachment plan reports from the approval workflow.`,actions:(0,S.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,S.jsxs)(f,{variant:`outline`,className:`border-border/70 font-normal text-[color:var(--success)]`,children:[(0,S.jsx)(a,{className:`mr-1 h-3 w-3`}),` `,g.length,` approved`]}),(0,S.jsxs)(f,{variant:`outline`,className:`border-border/70 font-normal text-destructive`,children:[(0,S.jsx)(o,{className:`mr-1 h-3 w-3`}),` `,_.length,` rejected`]})]})}),(0,S.jsx)(`div`,{className:`grid gap-4 sm:grid-cols-2 xl:grid-cols-4`,children:[{label:`Total Reports`,value:e.length.toString(),icon:s,hint:`Decided by manager`},{label:`Approved`,value:g.length.toString(),icon:a,hint:`Ready for production`},{label:`Rejected`,value:_.length.toString(),icon:o,hint:`Returned to engineer`},{label:`System Status`,value:`Online`,icon:c,hint:`All services operational`}].map(({label:e,value:t,icon:n,hint:r})=>(0,S.jsx)(u,{className:`border-border/70 shadow-none`,children:(0,S.jsxs)(l,{className:`p-5`,children:[(0,S.jsx)(`div`,{className:`flex h-8 w-8 items-center justify-center rounded-md bg-[color:var(--primary-soft)] text-primary`,children:(0,S.jsx)(n,{className:`h-4 w-4`})}),(0,S.jsx)(`p`,{className:`mt-3 text-xs font-medium uppercase tracking-wide text-muted-foreground`,children:e}),(0,S.jsx)(`p`,{className:`mt-1 text-2xl font-semibold tracking-tight text-foreground`,children:t}),(0,S.jsx)(`p`,{className:`mt-1 text-xs text-muted-foreground`,children:r})]})},e))}),(0,S.jsx)(`div`,{className:`flex gap-2 border-b border-border/70`,children:[`approved`,`rejected`].map(e=>(0,S.jsx)(`button`,{onClick:()=>h(e),className:`px-4 py-2 text-sm font-medium border-b-2 transition-colors -mb-px flex items-center gap-1.5 ${d===e?`border-primary text-primary`:`border-transparent text-muted-foreground hover:text-foreground`}`,children:e===`approved`?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(a,{className:`h-3.5 w-3.5`}),` Approved Reports`]}):(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(o,{className:`h-3.5 w-3.5`}),` Rejected Plans`]})},e))}),v.length===0?(0,S.jsxs)(`div`,{className:`flex flex-col items-center justify-center rounded-xl border border-dashed border-border/70 bg-muted/10 py-16 text-center`,children:[(0,S.jsx)(s,{className:`h-10 w-10 text-muted-foreground/40 mb-4`}),(0,S.jsxs)(`p`,{className:`text-base font-medium text-foreground`,children:[`No `,d,` reports yet`]}),(0,S.jsx)(`p`,{className:`mt-1 text-sm text-muted-foreground`,children:d===`approved`?`Once the Operations Manager approves a plan, the report will appear here.`:`Rejected plans will appear here.`})]}):(0,S.jsx)(`div`,{className:`grid gap-3 sm:grid-cols-2 lg:grid-cols-3`,children:v.map(e=>(0,S.jsxs)(`button`,{onClick:()=>r(e),className:`group flex items-start gap-3 rounded-xl border border-border/60 p-4 text-left transition hover:border-primary/40 hover:bg-[color:var(--primary-soft)]/20`,children:[(0,S.jsx)(`div`,{className:`flex h-9 w-9 shrink-0 items-center justify-center rounded-md ${e.status===`Approved`?`bg-[color:var(--success)]/10 text-[color:var(--success)]`:`bg-destructive/10 text-destructive`}`,children:e.status===`Approved`?(0,S.jsx)(a,{className:`h-4 w-4`}):(0,S.jsx)(o,{className:`h-4 w-4`})}),(0,S.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,S.jsx)(`p`,{className:`truncate text-sm font-semibold text-foreground`,children:e.product}),(0,S.jsx)(`p`,{className:`mt-0.5 text-xs text-muted-foreground`,children:e.date}),(0,S.jsxs)(`div`,{className:`mt-1.5 flex items-center gap-2 flex-wrap`,children:[(0,S.jsxs)(`span`,{className:`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${e.risk===`Low`?`bg-[color:var(--success)]/10 text-[color:var(--success)]`:e.risk===`Medium`?`bg-amber-100 text-amber-700`:`bg-destructive/10 text-destructive`}`,children:[e.risk,` Risk`]}),(0,S.jsx)(`span`,{className:`text-[10px] text-muted-foreground`,children:e.cost})]}),(0,S.jsxs)(`div`,{className:`mt-2 flex items-center gap-1 text-xs text-primary opacity-0 transition group-hover:opacity-100`,children:[`View report `,(0,S.jsx)(i,{className:`h-3 w-3`})]})]})]},e.id))}),n&&(0,S.jsx)(w,{report:n,onClose:()=>r(null)})]})}export{T as component};