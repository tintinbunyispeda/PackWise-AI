import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { a as getUser } from "./auth-DIWjK7oO.mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { $ as Clock, I as Info, L as Image, P as Leaf, Y as DollarSign, ht as ArrowLeft, nt as CircleCheck, t as Zap, tt as CircleX, x as ShieldAlert } from "../_libs/lucide-react.mjs";
import { t as Route } from "./app.approvals._id-B7sVFeXg.mjs";
import { a as CardTitle, i as CardHeader, n as CardContent, r as CardDescription, t as Card } from "./card-CtX3ithx.mjs";
import { n as PageHeader, t as Badge } from "./page-header-Dam7wNGy.mjs";
import { c as updateApprovalStatus, n as loadAnalysis, r as loadApprovalRequests } from "./workflow-store-R0AzRa1j.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.approvals._id-D9ojywsb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var RISK_BADGE = {
	low: "bg-[color:var(--success)]/10 text-[color:var(--success)] border-transparent",
	medium: "bg-[color:var(--warning)]/15 text-[color:var(--warning-foreground)] border-transparent",
	high: "bg-destructive/10 text-destructive border-transparent"
};
var RISK_FILL = {
	low: "#22c55e",
	medium: "#f59e0b",
	high: "#ef4444"
};
function YoloImageOverlay({ imageUrl, detections, threshold }) {
	const [imgNatural, setImgNatural] = (0, import_react.useState)({
		w: 1,
		h: 1
	});
	const [imgRendered, setImgRendered] = (0, import_react.useState)({
		w: 0,
		h: 0
	});
	const imgRef = (0, import_react.useRef)(null);
	const handleLoad = (e) => {
		const el = e.currentTarget;
		setImgNatural({
			w: el.naturalWidth,
			h: el.naturalHeight
		});
		setImgRendered({
			w: el.clientWidth,
			h: el.clientHeight
		});
	};
	const filteredDetections = detections.filter((d) => d.confidence >= threshold);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-full h-full flex flex-col items-center justify-center p-4 gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative inline-block",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				ref: imgRef,
				src: imageUrl,
				alt: "Product Uploaded",
				className: "max-h-[300px] max-w-full object-contain rounded drop-shadow-md block",
				onLoad: handleLoad
			}), imgRendered.w > 0 && filteredDetections.map((d, i) => {
				const { xmin, ymin, xmax, ymax } = d.box;
				const scaleX = imgRendered.w / imgNatural.w;
				const scaleY = imgRendered.h / imgNatural.h;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute border-2 border-primary bg-primary/15 pointer-events-none",
					style: {
						left: `${xmin * scaleX}px`,
						top: `${ymin * scaleY}px`,
						width: `${(xmax - xmin) * scaleX}px`,
						height: `${(ymax - ymin) * scaleY}px`
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "absolute -top-[20px] left-0 bg-primary text-white text-[9px] px-1.5 py-0.5 rounded-t font-semibold whitespace-nowrap shadow-sm",
						children: [
							d.class_name,
							" ",
							Math.round(d.confidence * 100),
							"%"
						]
					})
				}, i);
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-center gap-2 text-xs",
			children: filteredDetections.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "bg-[color:var(--success)]/10 text-[color:var(--success)] border border-[color:var(--success)]/30 rounded-full px-2 py-0.5 font-semibold",
				children: [
					"✓ ",
					filteredDetections.length,
					" zone",
					filteredDetections.length > 1 ? "s" : "",
					" detected"
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "bg-muted/50 text-muted-foreground rounded-full px-2 py-0.5",
				children: "No zones detected"
			})
		})]
	});
}
function ApprovalDetailsPage() {
	const { id } = Route.useParams();
	const navigate = useNavigate();
	const [analysis, setAnalysis] = (0, import_react.useState)(null);
	const [selected, setSelected] = (0, import_react.useState)(null);
	const [approvalReq, setApprovalReq] = (0, import_react.useState)(null);
	const user = getUser();
	const isApprover = user?.role === "manager" || user?.role === "Admin";
	(0, import_react.useEffect)(() => {
		const req = loadApprovalRequests().find((r) => r.id === id);
		if (req) setApprovalReq(req);
		const a = loadAnalysis();
		if (a) {
			setAnalysis(a);
			setSelected(a.attachmentZones?.[0]?.zone ?? null);
		} else if (req?.reportSnapshot?.zones?.length) setSelected(req.reportSnapshot.zones[0]?.zone ?? null);
	}, [id]);
	const zones = analysis?.attachmentZones ?? approvalReq?.reportSnapshot?.zones?.map((z) => ({
		zone: z.zone,
		bodyRegion: z.zone,
		riskLevel: "medium",
		recommendedMethod: z.recommendedMethod,
		cost: `$${Number(z.cost).toFixed(2)}`,
		labor: `${z.laborMins} min`,
		sustainability: z.sustainability
	})) ?? [];
	const productName = analysis?.productName ?? approvalReq?.sku ?? "Unknown Product";
	const imageUrl = analysis?.imageDataUrl ?? approvalReq?.reportSnapshot?.imageDataUrl;
	const sel = zones.find((z) => z.zone === selected);
	const handleApprove = () => {
		updateApprovalStatus(id, "Approved");
		toast.success(`Request ${id} approved successfully.`);
		navigate({ to: "/app/approvals" });
	};
	const handleReject = () => {
		updateApprovalStatus(id, "Rejected");
		toast.error(`Request ${id} rejected.`);
		navigate({ to: "/app/approvals" });
	};
	const activeZones = zones.filter((z) => z.recommendedMethod !== "No Attachment Required" && z.recommendedMethod !== "Not needed");
	const totalLabor = activeZones.reduce((acc, z) => acc + (parseFloat(z.labor ?? "0") || 0), 0);
	const avgSustain = activeZones.length > 0 ? Math.round(activeZones.reduce((acc, z) => acc + (z.sustainability ?? 100), 0) / activeZones.length) : 100;
	const poseStab = analysis?.poseStabilityScore ?? 100;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: `Approval Request: ${id}`,
				description: `Reviewing attachment plan for ${productName}`,
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					size: "sm",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/app/approvals",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "mr-1 h-4 w-4" }), " Back to Approvals"]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
				children: [
					{
						label: "Zones Secured",
						value: `${activeZones.length} / ${zones.length}`,
						icon: Zap
					},
					{
						label: "Est. Labor / Unit",
						value: `${totalLabor.toFixed(1)} min`,
						icon: Clock
					},
					{
						label: "Avg. Pose Stability",
						value: `${poseStab}%`,
						icon: ShieldAlert
					},
					{
						label: "Sustainability Score",
						value: `${avgSustain}/100`,
						icon: Leaf
					}
				].map(({ label, value, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					className: "border-border/70 shadow-none",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
						className: "p-5 flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[color:var(--primary-soft)] text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
							children: label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 text-xl font-bold text-foreground",
							children: value
						})] })]
					})
				}, label))
			}),
			!approvalReq && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-xl border border-dashed border-border/70 bg-muted/10 p-8 text-center text-muted-foreground text-sm",
				children: "Approval request not found. It may have been cleared."
			}),
			approvalReq?.status !== "Pending" && approvalReq && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: `shadow-none border ${approvalReq.status === "Approved" ? "border-[color:var(--success)]/40 bg-[color:var(--success)]/5" : "border-destructive/30 bg-destructive/5"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "flex items-center gap-3 p-4",
					children: [approvalReq.status === "Approved" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 text-[color:var(--success)] shrink-0" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "h-5 w-5 text-destructive shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm font-semibold",
						children: ["This plan was ", approvalReq.status]
					}), approvalReq.decidedAt && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted-foreground",
						children: ["Decided at ", approvalReq.decidedAt]
					})] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "border-border/70 shadow-none lg:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
						className: "text-base",
						children: "Product Image & Detections"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Visual evidence from CV and AI processing" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
						className: "relative flex flex-col items-center justify-center overflow-hidden rounded-xl bg-zinc-950/5 p-4",
						style: { minHeight: 380 },
						children: imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(YoloImageOverlay, {
							imageUrl,
							detections: analysis?.cvDetections || [],
							threshold: .15
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-muted-foreground text-sm flex flex-col items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "h-8 w-8 opacity-20" }), "No image data available"]
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 lg:col-span-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "border-border/70 shadow-none",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
							className: "text-base",
							children: "Zone Inspector"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Select a zone to view attachment details, risk level, and cost impact" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
							className: "space-y-2",
							children: zones.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col items-center justify-center p-8 text-center border rounded-lg border-dashed bg-muted/10",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "h-8 w-8 text-muted-foreground mb-3 opacity-50" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-medium",
										children: "No Attachment Zones"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground mt-1",
										children: "Neither AI nor CV detected any required attachment zones for this product."
									})
								]
							}) : zones.map((z, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setSelected(z.zone),
								className: `w-full flex items-center gap-3 rounded-lg border px-4 py-3 text-left transition ${selected === z.zone ? "border-primary bg-[color:var(--primary-soft)]/40" : "border-border/60 hover:border-primary/30 hover:bg-muted/30"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white",
										style: { background: RISK_FILL[z.riskLevel] },
										children: i + 1
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1 min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm font-semibold",
												children: z.zone
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
												variant: "outline",
												className: `text-[10px] font-medium capitalize ${RISK_BADGE[z.riskLevel]}`,
												children: [z.riskLevel, " risk"]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-muted-foreground",
											children: z.bodyRegion
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "shrink-0 text-sm font-medium text-foreground",
										children: z.recommendedMethod
									})
								]
							}, z.zone))
						})]
					}), sel && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "border-[color:var(--primary)]/20 bg-[color:var(--primary-soft)]/20 shadow-none",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white text-xs font-bold",
									style: { background: RISK_FILL[sel.riskLevel] },
									children: zones.indexOf(sel) + 1
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
									className: "text-base",
									children: sel.zone
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
									variant: "outline",
									className: `text-[10px] font-medium capitalize ${RISK_BADGE[sel.riskLevel]}`,
									children: [sel.riskLevel, " risk"]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: sel.bodyRegion })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-3 gap-4 mb-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg bg-background border border-border/60 p-3 text-center",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DollarSign, { className: "mx-auto h-4 w-4 text-muted-foreground mb-1" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground",
											children: "Cost / Unit"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-lg font-bold",
											children: sel.cost ?? "$0.00"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg bg-background border border-border/60 p-3 text-center",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "mx-auto h-4 w-4 text-muted-foreground mb-1" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground",
											children: "Labor"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-lg font-bold",
											children: sel.labor ?? "0 min"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg bg-background border border-border/60 p-3 text-center",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { className: "mx-auto h-4 w-4 text-muted-foreground mb-1" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground",
											children: "Sustainability"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-lg font-bold",
											children: sel.sustainability ?? 100
										})
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-border/60 bg-background p-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1.5",
									children: "Recommended Method"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium text-foreground",
									children: sel.recommendedMethod
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "h-3.5 w-3.5 shrink-0 text-primary mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: sel.impact ?? "Attachment recommended based on stability analysis"
									})]
								})
							]
						})] })]
					})]
				})]
			}),
			approvalReq?.status === "Pending" && (isApprover ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "border-[color:var(--primary)]/30 bg-[color:var(--primary-soft)]/30 shadow-none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "flex items-center justify-between gap-4 p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-base font-semibold",
						children: "Make a Decision"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 text-sm text-muted-foreground",
						children: "Approve this attachment plan to move it to production, or reject it back to the engineer."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							className: "text-destructive hover:bg-destructive/10 hover:text-destructive border-destructive/20",
							onClick: handleReject,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "mr-2 h-4 w-4" }), " Reject Plan"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							className: "bg-[color:var(--success)] text-white hover:bg-[color:var(--success)]/90",
							onClick: handleApprove,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mr-2 h-4 w-4" }), " Approve Plan"]
						})]
					})]
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "border-border/70 bg-muted/20 shadow-none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "flex items-center justify-between gap-4 p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-base font-semibold",
						children: "Status: Under Review"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 text-sm text-muted-foreground",
						children: "This attachment plan is currently waiting for Operations Manager approval."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "outline",
						className: "border-[color:var(--warning)] text-[color:var(--warning-foreground)] px-3 py-1 text-xs",
						children: "Pending"
					})]
				})
			}))
		]
	});
}
//#endregion
export { ApprovalDetailsPage as component };
