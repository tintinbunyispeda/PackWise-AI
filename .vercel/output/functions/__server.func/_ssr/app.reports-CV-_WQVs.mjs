import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { H as FileDown, V as FileText, at as ChevronRight, nt as CircleCheck, tt as CircleX, y as Sparkles } from "../_libs/lucide-react.mjs";
import { n as CardContent, t as Card } from "./card-CtX3ithx.mjs";
import { n as PageHeader, t as Badge } from "./page-header-Dam7wNGy.mjs";
import { r as loadApprovalRequests } from "./workflow-store-R0AzRa1j.mjs";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-DIo89e4g.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.reports-CV-_WQVs.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function toReport(req) {
	return {
		id: `RPT-${req.id}`,
		reqId: req.id,
		name: `${req.sku} — Attachment Plan`,
		product: req.sku,
		engineer: req.engineer,
		date: req.date,
		status: req.status,
		decidedAt: req.decidedAt,
		risk: req.risk,
		cost: req.cost,
		laborTime: req.laborTime,
		sustainability: req.sustainability,
		snapshot: req.reportSnapshot
	};
}
function ReportDetailModal({ report, onClose }) {
	const snap = report.snapshot;
	const onExportPdf = () => {
		const zonesHtml = (snap?.zones || []).map((z) => `
      <tr>
        <td>${z.zone}</td>
        <td>${z.recommendedMethod}</td>
        <td>${z.action}</td>
        <td>$${Number(z.cost).toFixed(2)}</td>
        <td>${z.laborMins} min</td>
        <td>${z.sustainability}%</td>
      </tr>`).join("");
		const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>PackWise AI — ${report.id}</title>
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
      <p>${report.product} &nbsp;·&nbsp; Report ID: ${report.id} &nbsp;·&nbsp; Submitted: ${report.date}</p>
    </div>
    <div style="text-align:right;font-size:9px;color:#888;">
      <span class="${report.status === "Approved" ? "badge-approved" : "badge-rejected"}">${report.status}</span>
      ${report.decidedAt ? `<div style="margin-top:4px;">Decided: ${report.decidedAt}</div>` : ""}
    </div>
  </div>

  <div class="section">
    <div class="section-title">Summary Metrics</div>
    <div class="metrics">
      <div class="metric"><div class="mlabel">Risk Level</div><div class="mval" style="font-size:14px;">${report.risk}</div></div>
      <div class="metric"><div class="mlabel">Est. Cost</div><div class="mval" style="font-size:14px;">${report.cost}</div></div>
      ${report.laborTime ? `<div class="metric"><div class="mlabel">Labor Time</div><div class="mval" style="font-size:14px;">${report.laborTime}</div></div>` : ""}
      ${report.sustainability ? `<div class="metric"><div class="mlabel">Sustainability</div><div class="mval" style="font-size:14px;">${report.sustainability}%</div></div>` : ""}
      ${snap ? `
      <div class="metric"><div class="mlabel">Drop Survival</div><div class="mval">${snap.dropSurvival}<span style="font-size:9px;">/100</span></div></div>
      <div class="metric"><div class="mlabel">Movement Risk</div><div class="mval">${snap.movementRisk}</div></div>
      <div class="metric"><div class="mlabel">Accessory Loss</div><div class="mval">${snap.accessoryLoss}<span style="font-size:9px;">%</span></div></div>
      <div class="metric"><div class="mlabel">Overall Risk</div><div class="mval" style="font-size:13px;">${snap.overallRisk}</div></div>
      ` : ""}
    </div>
  </div>

  ${snap?.imageDataUrl || snap?.annotatedImageDataUrl ? `
  <div class="section">
    <div class="section-title">Product Detection Image</div>
    <div class="photo-grid">
      ${snap?.imageDataUrl ? `<div class="photo-box"><div class="photo-label">Original Captured</div><img src="${snap.imageDataUrl}" alt="original" /></div>` : ""}
      ${snap?.annotatedImageDataUrl ? `<div class="photo-box"><div class="photo-label">Annotated — Skeleton & Zones</div><img src="${snap.annotatedImageDataUrl}" alt="annotated" /></div>` : ""}
    </div>
    <div class="kv" style="margin-top:6px;">
      ${snap?.accessories?.length ? `<div class="kvi"><div class="kvl">Accessories</div><div class="kvv">${snap.accessories.join(", ")}</div></div>` : ""}
      ${snap?.detectedPoses?.length ? `<div class="kvi"><div class="kvl">Detected Pose</div><div class="kvv">${snap.detectedPoses.join(", ")}</div></div>` : ""}
    </div>
  </div>` : ""}

  ${snap?.zones?.length ? `
  <div class="section">
    <div class="section-title">Attachment Zones Plan</div>
    <table>
      <thead><tr><th>Zone</th><th>Recommended Method</th><th>Action</th><th>Cost</th><th>Labor</th><th>Sustainability</th></tr></thead>
      <tbody>${zonesHtml}</tbody>
    </table>
  </div>` : ""}

  ${snap?.finalRecommendation ? `
  <div class="section">
    <div class="section-title">Final Recommendation</div>
    <div class="kv">
      <div class="kvi"><div class="kvl">Packaging</div><div class="kvv">${snap.finalRecommendation.packaging}</div></div>
      <div class="kvi"><div class="kvl">Cushion</div><div class="kvv">${snap.finalRecommendation.cushion}</div></div>
      <div class="kvi"><div class="kvl">Attachment</div><div class="kvv">${snap.finalRecommendation.attachment}</div></div>
      <div class="kvi"><div class="kvl">Support</div><div class="kvv">${snap.finalRecommendation.support}</div></div>
      <div class="kvi"><div class="kvl">ISTA</div><div class="kvv">${snap.finalRecommendation.ista}</div></div>
    </div>
  </div>` : ""}

  <div class="footer">
    <div>PackWise AI · Report ID: ${report.id}</div>
    <div>Engineer: ${report.engineer} · Submitted: ${report.date}</div>
  </div>
</div>
</body>
</html>`;
		const win = window.open("", "_blank");
		if (win) {
			win.document.write(html);
			win.document.close();
			setTimeout(() => win.print(), 500);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: true,
		onOpenChange: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-w-xl max-h-[90vh] overflow-y-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 flex-wrap",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "outline",
						className: "border-border/70 text-xs font-mono",
						children: report.id
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						variant: "outline",
						className: `text-xs font-semibold border-transparent ${report.status === "Approved" ? "bg-[color:var(--success)]/10 text-[color:var(--success)]" : "bg-destructive/10 text-destructive"}`,
						children: [report.status === "Approved" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mr-1 h-3 w-3 inline" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "mr-1 h-3 w-3 inline" }), report.status]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "text-left text-base leading-snug",
					children: report.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, {
					className: "text-left text-xs text-muted-foreground",
					children: [
						report.engineer,
						" · ",
						report.date,
						report.decidedAt && ` · Decided: ${report.decidedAt}`
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-2",
						children: [
							{
								label: "Risk Level",
								value: report.risk
							},
							{
								label: "Est. Cost",
								value: report.cost
							},
							report.laborTime ? {
								label: "Labor Time",
								value: report.laborTime
							} : null,
							report.sustainability ? {
								label: "Sustainability",
								value: `${report.sustainability}%`
							} : null,
							snap ? {
								label: "Drop Survival",
								value: `${snap.dropSurvival}/100`
							} : null,
							snap ? {
								label: "Movement Risk",
								value: String(snap.movementRisk)
							} : null
						].filter(Boolean).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-border/60 bg-muted/20 p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] uppercase font-medium text-muted-foreground tracking-wide",
								children: item.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-base font-bold text-foreground mt-0.5",
								children: item.value
							})]
						}, item.label))
					}),
					(snap?.imageDataUrl || snap?.annotatedImageDataUrl) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
							children: "Product Images"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-2",
							children: [snap.imageDataUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg border border-border/60 overflow-hidden bg-muted/20",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[9px] uppercase font-semibold text-muted-foreground px-2 py-1 border-b border-border/40",
									children: "Original"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: snap.imageDataUrl,
									alt: "product",
									className: "w-full h-36 object-contain bg-white"
								})]
							}), snap.annotatedImageDataUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg border border-border/60 overflow-hidden bg-muted/20",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[9px] uppercase font-semibold text-muted-foreground px-2 py-1 border-b border-border/40",
									children: "Annotated"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: snap.annotatedImageDataUrl,
									alt: "annotated",
									className: "w-full h-36 object-contain bg-white"
								})]
							})]
						})]
					}),
					snap?.zones && snap.zones.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
							children: "Attachment Zones"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-lg border border-border/60 overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
								className: "w-full text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
									className: "bg-muted/50 text-muted-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-3 py-2 text-left font-medium",
											children: "Zone"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-3 py-2 text-left font-medium",
											children: "Method"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-3 py-2 text-left font-medium",
											children: "Cost"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-3 py-2 text-left font-medium",
											children: "Labor"
										})
									] })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: snap.zones.map((z, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-t border-border/40",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-3 py-2 font-medium",
											children: z.zone
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-3 py-2 text-muted-foreground",
											children: z.recommendedMethod
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
											className: "px-3 py-2",
											children: ["$", Number(z.cost).toFixed(2)]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
											className: "px-3 py-2",
											children: [z.laborMins, " min"]
										})
									]
								}, i)) })]
							})
						})]
					}),
					snap?.finalRecommendation && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-[color:var(--primary)]/20 bg-[color:var(--primary-soft)]/20 p-3 space-y-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
								children: "Final Recommendation"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Packaging:"
									}),
									" ",
									snap.finalRecommendation.packaging
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Cushion:"
									}),
									" ",
									snap.finalRecommendation.cushion
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Attachment:"
									}),
									" ",
									snap.finalRecommendation.attachment
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "ISTA:"
									}),
									" ",
									snap.finalRecommendation.ista
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2 pt-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							className: "flex-1",
							onClick: onExportPdf,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileDown, { className: "h-4 w-4 mr-2" }), " Export PDF"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "outline",
							onClick: onClose,
							children: "Close"
						})]
					})
				]
			})]
		})
	});
}
function ReportsPage() {
	const [reports, setReports] = (0, import_react.useState)([]);
	const [selected, setSelected] = (0, import_react.useState)(null);
	const [tab, setTab] = (0, import_react.useState)("approved");
	(0, import_react.useEffect)(() => {
		setReports(loadApprovalRequests().filter((r) => r.status === "Approved" || r.status === "Rejected").map(toReport));
	}, []);
	const approved = reports.filter((r) => r.status === "Approved");
	const rejected = reports.filter((r) => r.status === "Rejected");
	const displayed = tab === "approved" ? approved : rejected;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Reports",
				description: "Accepted and rejected attachment plan reports from the approval workflow.",
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						variant: "outline",
						className: "border-border/70 font-normal text-[color:var(--success)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mr-1 h-3 w-3" }),
							" ",
							approved.length,
							" approved"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						variant: "outline",
						className: "border-border/70 font-normal text-destructive",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "mr-1 h-3 w-3" }),
							" ",
							rejected.length,
							" rejected"
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
				children: [
					{
						label: "Total Reports",
						value: reports.length.toString(),
						icon: FileText,
						hint: "Decided by manager"
					},
					{
						label: "Approved",
						value: approved.length.toString(),
						icon: CircleCheck,
						hint: "Ready for production"
					},
					{
						label: "Rejected",
						value: rejected.length.toString(),
						icon: CircleX,
						hint: "Returned to engineer"
					},
					{
						label: "System Status",
						value: "Online",
						icon: Sparkles,
						hint: "All services operational"
					}
				].map(({ label, value, icon: Icon, hint }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					className: "border-border/70 shadow-none",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
						className: "p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-8 w-8 items-center justify-center rounded-md bg-[color:var(--primary-soft)] text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-xs font-medium uppercase tracking-wide text-muted-foreground",
								children: label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-2xl font-semibold tracking-tight text-foreground",
								children: value
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: hint
							})
						]
					})
				}, label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-2 border-b border-border/70",
				children: ["approved", "rejected"].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setTab(t),
					className: `px-4 py-2 text-sm font-medium border-b-2 transition-colors -mb-px flex items-center gap-1.5 ${tab === t ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`,
					children: t === "approved" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5" }), " Approved Reports"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "h-3.5 w-3.5" }), " Rejected Plans"] })
				}, t))
			}),
			displayed.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center justify-center rounded-xl border border-dashed border-border/70 bg-muted/10 py-16 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-10 w-10 text-muted-foreground/40 mb-4" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-base font-medium text-foreground",
						children: [
							"No ",
							tab,
							" reports yet"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: tab === "approved" ? "Once the Operations Manager approves a plan, the report will appear here." : "Rejected plans will appear here."
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
				children: displayed.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setSelected(r),
					className: "group flex items-start gap-3 rounded-xl border border-border/60 p-4 text-left transition hover:border-primary/40 hover:bg-[color:var(--primary-soft)]/20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `flex h-9 w-9 shrink-0 items-center justify-center rounded-md ${r.status === "Approved" ? "bg-[color:var(--success)]/10 text-[color:var(--success)]" : "bg-destructive/10 text-destructive"}`,
						children: r.status === "Approved" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "h-4 w-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-sm font-semibold text-foreground",
								children: r.product
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-0.5 text-xs text-muted-foreground",
								children: r.date
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-1.5 flex items-center gap-2 flex-wrap",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: `text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${r.risk === "Low" ? "bg-[color:var(--success)]/10 text-[color:var(--success)]" : r.risk === "Medium" ? "bg-amber-100 text-amber-700" : "bg-destructive/10 text-destructive"}`,
									children: [r.risk, " Risk"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] text-muted-foreground",
									children: r.cost
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex items-center gap-1 text-xs text-primary opacity-0 transition group-hover:opacity-100",
								children: ["View report ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3 w-3" })]
							})
						]
					})]
				}, r.id))
			}),
			selected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportDetailModal, {
				report: selected,
				onClose: () => setSelected(null)
			})
		]
	});
}
//#endregion
export { ReportsPage as component };
