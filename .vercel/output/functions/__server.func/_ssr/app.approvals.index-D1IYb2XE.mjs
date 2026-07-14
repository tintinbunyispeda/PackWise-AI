import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { t as Input } from "./input-B8Q2ztVi.mjs";
import { $ as Clock, T as Search, V as FileText, nt as CircleCheck, tt as CircleX } from "../_libs/lucide-react.mjs";
import { n as CardContent, t as Card } from "./card-CtX3ithx.mjs";
import { n as PageHeader, t as Badge } from "./page-header-Dam7wNGy.mjs";
import { r as loadApprovalRequests } from "./workflow-store-R0AzRa1j.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.approvals.index-D1IYb2XE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function StatusIcon({ status }) {
	if (status === "Approved") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5" });
	if (status === "Rejected") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "h-5 w-5" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-5 w-5" });
}
function statusColor(status) {
	if (status === "Approved") return "bg-[color:var(--success)]/15 text-[color:var(--success)]";
	if (status === "Rejected") return "bg-destructive/15 text-destructive";
	return "bg-[color:var(--warning)]/15 text-[color:var(--warning-foreground)]";
}
function EmptyState({ tab }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-col items-center justify-center rounded-xl border border-dashed border-border/70 bg-muted/10 py-16 text-center",
		children: tab === "pending" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-10 w-10 text-muted-foreground/40 mb-4" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-base font-medium text-foreground",
				children: "No pending approvals"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: "When a Packaging Engineer submits a plan, it will appear here."
			})
		] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-10 w-10 text-muted-foreground/40 mb-4" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-base font-medium text-foreground",
				children: "No accepted reports yet"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: "Approved plans will appear here as completed reports."
			})
		] })
	});
}
function ApprovalCard({ req }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		className: "border-border/70 shadow-none hover:border-primary/30 transition-colors",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
			className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${statusColor(req.status)}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusIcon, { status: req.status })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 flex-wrap",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-base font-semibold text-foreground",
							children: req.sku
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "outline",
							className: "text-[10px] font-medium text-muted-foreground",
							children: req.id
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: [
							"Submitted by ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-foreground",
								children: req.engineer
							}),
							" · ",
							req.date
						]
					}),
					req.decidedAt && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-0.5 text-xs text-muted-foreground",
						children: [
							req.status === "Approved" ? "Approved" : "Rejected",
							" at ",
							req.decidedAt
						]
					})
				] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-6 sm:gap-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden md:block text-right",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] font-medium uppercase text-muted-foreground",
							children: "Est. Cost"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold",
							children: req.cost
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden md:block text-right",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] font-medium uppercase text-muted-foreground",
							children: "Risk Level"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: `text-sm font-semibold ${req.risk === "Low" ? "text-[color:var(--success)]" : req.risk === "Medium" ? "text-amber-600" : "text-destructive"}`,
							children: req.risk
						})]
					}),
					req.laborTime && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden lg:block text-right",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] font-medium uppercase text-muted-foreground",
							children: "Labor"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold",
							children: req.laborTime
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-2 w-full sm:w-auto",
						children: req.status === "Pending" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							className: "w-full sm:w-auto",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/app/approvals/$id",
								params: { id: req.id },
								children: "View & Decide"
							})
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "outline",
							className: "w-full sm:w-auto",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/app/approvals/$id",
								params: { id: req.id },
								children: "View Report"
							})
						})
					})
				]
			})]
		})
	});
}
function ApprovalsPage() {
	const [all, setAll] = (0, import_react.useState)([]);
	const [search, setSearch] = (0, import_react.useState)("");
	const [tab, setTab] = (0, import_react.useState)("pending");
	(0, import_react.useEffect)(() => {
		setAll(loadApprovalRequests());
		const interval = setInterval(() => setAll(loadApprovalRequests()), 2e3);
		return () => clearInterval(interval);
	}, []);
	const filtered = all.filter((r) => {
		const q = search.toLowerCase();
		return r.sku.toLowerCase().includes(q) || r.id.toLowerCase().includes(q) || r.engineer.toLowerCase().includes(q);
	});
	const pending = filtered.filter((r) => r.status === "Pending");
	const accepted = filtered.filter((r) => r.status === "Approved" || r.status === "Rejected");
	const pendingCount = all.filter((r) => r.status === "Pending").length;
	const acceptedCount = all.filter((r) => r.status === "Approved").length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Attachment Approvals",
				description: "Review, approve, or reject pending attachment plans submitted by the engineering team.",
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						variant: "outline",
						className: "border-border/70 font-normal",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "mr-1 h-3 w-3" }),
							" ",
							pendingCount,
							" pending"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						variant: "outline",
						className: "border-border/70 font-normal text-[color:var(--success)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mr-1 h-3 w-3" }),
							" ",
							acceptedCount,
							" approved"
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center gap-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex-1 max-w-md",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						placeholder: "Search by product name, ID, or engineer…",
						className: "pl-9 bg-background",
						value: search,
						onChange: (e) => setSearch(e.target.value)
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-2 border-b border-border/70 pb-0",
				children: ["pending", "accepted"].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setTab(t),
					className: `px-4 py-2 text-sm font-medium border-b-2 transition-colors -mb-px ${tab === t ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`,
					children: t === "pending" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5" }),
							"Pending Approval",
							pending.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-1 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-primary/15 text-primary text-[10px] font-bold px-1",
								children: pending.length
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-3.5 w-3.5" }),
							"Accepted Reports",
							accepted.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-1 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-muted text-muted-foreground text-[10px] font-bold px-1",
								children: accepted.length
							})
						]
					})
				}, t))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4",
				children: tab === "pending" ? pending.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, { tab: "pending" }) : pending.map((req) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApprovalCard, { req }, req.id)) : accepted.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, { tab: "accepted" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [accepted.filter((r) => r.status === "Approved").length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs font-semibold uppercase tracking-wider text-[color:var(--success)] flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5" }), " Approved"]
					}), accepted.filter((r) => r.status === "Approved").map((req) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApprovalCard, { req }, req.id))]
				}), accepted.filter((r) => r.status === "Rejected").length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3 mt-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs font-semibold uppercase tracking-wider text-destructive flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "h-3.5 w-3.5" }), " Rejected"]
					}), accepted.filter((r) => r.status === "Rejected").map((req) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApprovalCard, { req }, req.id))]
				})] })
			})
		]
	});
}
//#endregion
export { ApprovalsPage as component };
