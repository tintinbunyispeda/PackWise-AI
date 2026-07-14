import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { a as getUser, i as getToken } from "./auth-DIWjK7oO.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { t as Separator } from "./separator-B3hsz7IR.mjs";
import { A as Package, J as Download, M as LoaderCircle, O as Printer, R as GitBranch, S as Share2, V as FileText, W as FileBraces, X as Database, Z as Cpu, _t as Activity, b as ShieldCheck, et as ClipboardList, f as TriangleAlert, ft as Award, g as Table, mt as ArrowRight, nt as CircleCheck, p as TrendingUp, r as Wrench, ut as BookOpen, w as Send, y as Sparkles } from "../_libs/lucide-react.mjs";
import { a as CardTitle, i as CardHeader, n as CardContent, r as CardDescription, t as Card } from "./card-CtX3ithx.mjs";
import { n as PageHeader, t as Badge } from "./page-header-Dam7wNGy.mjs";
import { i as loadPlan, n as loadAnalysis, o as saveApprovalRequest } from "./workflow-store-R0AzRa1j.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Progress } from "./progress-DOIEKRJF.mjs";
import { t as runAssemblyEngine } from "./assembly-engine-Dbp0jpIf.mjs";
import { t as supabase } from "./supabase-BpdZR28q.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.submit-approval-Co9zytOp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
function SectionHeader({ index, icon: Icon, title, sub, action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start justify-between gap-4 mb-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-10 w-10 rounded-xl bg-[color:var(--pink-soft)] text-[color:var(--pink)] grid place-items-center ring-1 ring-[color:var(--pink)]/15",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-xs font-medium text-muted-foreground tracking-wider uppercase",
					children: ["Section ", String(index).padStart(2, "0")]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: title
				}),
				sub && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground mt-0.5",
					children: sub
				})
			] })]
		}), action]
	});
}
function KV({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-card p-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[11px] uppercase tracking-wider text-muted-foreground font-medium",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-sm font-semibold text-foreground mt-1 tabular-nums",
			children: value
		})]
	});
}
function MetricStat({ label, value, unit, tone, bar }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `rounded-xl p-4 ring-1 ${tone === "success" ? "ring-emerald-200 bg-emerald-50/40" : tone === "warning" ? "ring-amber-200 bg-amber-50/40" : tone === "danger" ? "ring-rose-200 bg-rose-50/40" : "ring-border bg-card"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[11px] uppercase tracking-wider text-muted-foreground font-medium",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-1 flex items-baseline gap-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-2xl font-semibold text-foreground tabular-nums",
					children: value
				}), unit && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs text-muted-foreground",
					children: unit
				})]
			}),
			typeof bar === "number" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
				value: bar,
				className: "mt-3 h-1.5 [&>[data-slot=progress-indicator]]:bg-[#d946ef]"
			})
		]
	});
}
function severityTone(s) {
	if (s === "High") return "bg-rose-50 text-rose-700 ring-1 ring-rose-200";
	if (s === "Medium") return "bg-amber-50 text-amber-700 ring-1 ring-amber-200";
	return "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200";
}
function ExecutiveSummary({ summary }) {
	const riskTone = summary.overallRisk === "LOW" ? "bg-emerald-50 text-emerald-700 ring-emerald-200" : summary.overallRisk === "MEDIUM" ? "bg-amber-50 text-amber-700 ring-amber-200" : "bg-rose-50 text-rose-700 ring-rose-200";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		className: "overflow-hidden border-border/70 shadow-none",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative bg-gradient-to-br from-[color:var(--pink-soft)] to-background p-6 md:p-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col md:flex-row md:items-center md:justify-between gap-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative h-24 w-24 rounded-3xl bg-background ring-1 ring-[color:var(--pink)]/20 grid place-items-center shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-4xl font-semibold tracking-tight text-[color:var(--pink)]",
							children: summary.grade
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute -top-2 -right-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-6 w-6 text-[color:var(--pink)]" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs font-medium uppercase tracking-wider text-muted-foreground",
							children: "Overall Packaging Grade"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-1 flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
								className: `${riskTone} ring-1 rounded-full px-2.5 py-0.5 font-semibold border-transparent`,
								children: [summary.overallRisk, " RISK"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-sm text-muted-foreground",
								children: [
									"Confidence ",
									summary.confidence,
									"%"
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-foreground/70 mt-2 max-w-lg",
							children: "Aggregated engineering verdict from the PackWise rule engine, literature knowledge base, and simulation stack."
						})
					] })]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricStat, {
						label: "Drop Survival",
						value: summary.dropSurvival,
						unit: "/ 100",
						tone: "success",
						bar: summary.dropSurvival
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricStat, {
						label: "Movement Risk",
						value: summary.movementRisk,
						tone: "warning",
						bar: summary.movementRisk
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricStat, {
						label: "Accessory Loss",
						value: `${summary.accessoryLoss}%`,
						tone: "warning",
						bar: summary.accessoryLoss
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricStat, {
						label: "Packaging Cost",
						value: summary.packagingCost,
						tone: "neutral"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricStat, {
						label: "Sustainability",
						value: `${summary.sustainability}%`,
						tone: "success",
						bar: summary.sustainability
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricStat, {
						label: "Confidence",
						value: `${summary.confidence}%`,
						tone: "neutral",
						bar: summary.confidence
					})
				]
			})]
		})
	});
}
function ConfigurationSummary({ config }) {
	const items = [
		["Product Name", config.productName],
		["Packaging Type", config.packagingType],
		["Packaging Method", config.packagingMethod],
		["Attachment Method", config.attachmentMethod],
		["Support Points", config.supportPoints],
		["Center of Gravity", config.centerOfGravity],
		["Internal Clearance", config.internalClearance],
		["Cushion Material", config.cushionMaterial],
		["Cushion Thickness", config.cushionThickness],
		["ISTA Standard", config.istaStandard],
		["Simulation Scenario", config.scenario],
		["Weight", config.weight],
		["Dimensions", config.dimensions],
		["Accessories Detected", config.accessoriesDetected]
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		className: "border-border/70 shadow-none",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
			className: "pt-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				index: 2,
				icon: ClipboardList,
				title: "Packaging Configuration Summary",
				sub: "All engineering inputs used to compute this report."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3",
				children: items.map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KV, {
					label: k,
					value: v
				}, k))
			})]
		})
	});
}
function RiskDashboard({ m }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		className: "border-border/70 shadow-none",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
			className: "pt-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				index: 3,
				icon: ShieldCheck,
				title: "Risk Assessment Summary",
				sub: "Aggregated outputs from the risk model and rule engine."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 md:grid-cols-4 gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricStat, {
						label: "Movement Risk",
						value: m.movementRisk,
						tone: "warning",
						bar: m.movementRisk
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricStat, {
						label: "Accessory Loss",
						value: `${m.accessoryLoss}%`,
						tone: "warning",
						bar: m.accessoryLoss
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricStat, {
						label: "Pose Stability",
						value: m.poseStability,
						tone: "success",
						bar: m.poseStability
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricStat, {
						label: "Drop Survival",
						value: m.dropSurvival,
						tone: "success",
						bar: m.dropSurvival
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricStat, {
						label: "Critical Failures",
						value: m.criticalFailureCount,
						tone: "danger"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricStat, {
						label: "Triggered Rules",
						value: m.triggeredRules,
						tone: "neutral"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricStat, {
						label: "Literature Coverage",
						value: `${m.literatureCoverage}%`,
						tone: "success",
						bar: m.literatureCoverage
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricStat, {
						label: "Rule Coverage",
						value: `${m.ruleCoverage}%`,
						tone: "success",
						bar: m.ruleCoverage
					})
				]
			})]
		})
	});
}
function EngineeringFindings({ findings }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		className: "border-border/70 shadow-none",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
			className: "pt-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				index: 4,
				icon: Activity,
				title: "Engineering Findings",
				sub: "Inspection log across the analysis pipeline."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "relative border-l border-dashed border-border ml-3 space-y-3",
				children: findings.map((f, i) => {
					const pass = f.status === "pass";
					const warn = f.status === "warn";
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "pl-6 relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `absolute -left-3 top-0.5 h-6 w-6 rounded-full grid place-items-center ring-1 ${pass ? "text-emerald-600 bg-emerald-50 ring-emerald-200" : warn ? "text-amber-600 bg-amber-50 ring-amber-200" : "text-rose-600 bg-rose-50 ring-rose-200"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(pass ? CircleCheck : warn ? TriangleAlert : TriangleAlert, { className: "h-3.5 w-3.5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm text-foreground",
							children: f.text
						})]
					}, i);
				})
			})]
		})
	});
}
function TriggeredRulesTable({ rules }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		className: "border-border/70 shadow-none",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
			className: "pt-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				index: 5,
				icon: Table,
				title: "Triggered Engineering Rules",
				sub: "Rules fired by the current configuration with cited evidence."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto rounded-xl border border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "bg-muted/50 text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "text-left",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2 font-medium",
									children: "Rule ID"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2 font-medium",
									children: "Evidence"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2 font-medium",
									children: "Engineering Rule"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2 font-medium",
									children: "Severity"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2 font-medium",
									children: "Recommendation"
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rules.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 font-mono text-xs text-foreground",
								children: r.id
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 font-mono text-xs text-muted-foreground",
								children: r.evidence
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 text-foreground",
								children: r.rule
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `inline-flex rounded-full px-2 py-0.5 text-[11px] font-semibold ${severityTone(r.severity)}`,
									children: r.severity
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 text-foreground/80",
								children: r.recommendation
							})
						]
					}, r.id)) })]
				})
			})]
		})
	});
}
function OptimizationSummary({ rows }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		className: "border-border/70 shadow-none",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
			className: "pt-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					index: 6,
					icon: TrendingUp,
					title: "Optimization Summary",
					sub: "Current design vs. recommended optimized design."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 mb-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "outline",
							className: "rounded-full",
							children: "Current Design"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 text-[color:var(--pink)]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							className: "bg-[#d946ef] text-white rounded-full",
							children: "Recommended Design"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 gap-3",
					children: rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] uppercase tracking-wider text-muted-foreground font-medium",
							children: r.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-muted-foreground",
										children: "Before"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-base font-semibold tabular-nums text-foreground",
										children: r.before
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 text-muted-foreground" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-muted-foreground",
										children: "After"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-base font-semibold tabular-nums text-foreground",
										children: r.after
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `text-xs font-semibold rounded-full px-2 py-0.5 ring-1 ${r.positive ? "bg-emerald-50 text-emerald-700 ring-emerald-200" : "bg-amber-50 text-amber-700 ring-amber-200"}`,
									children: r.delta
								})
							]
						})]
					}, r.label))
				})
			]
		})
	});
}
function DecisionTrace({ steps }) {
	const icons = [
		BookOpen,
		Database,
		FileText,
		GitBranch,
		Activity,
		Sparkles
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		className: "border-border/70 shadow-none",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
			className: "pt-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				index: 7,
				icon: GitBranch,
				title: "Engineering Decision Trace",
				sub: "From literature to recommendation — every score is traceable."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "grid grid-cols-1 md:grid-cols-2 gap-3",
				children: steps.map((s, i) => {
					const Icon = icons[i % icons.length];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-xl border border-border p-4 flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-9 w-9 rounded-lg bg-[color:var(--pink-soft)] text-[color:var(--pink)] grid place-items-center ring-1 ring-[color:var(--pink)]/15",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[11px] uppercase tracking-wider text-muted-foreground font-medium",
									children: [
										String(i + 1).padStart(2, "0"),
										" · ",
										s.stage
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm font-semibold text-foreground mt-0.5",
									children: s.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground mt-1",
									children: s.detail
								})
							]
						})]
					}, s.stage);
				})
			})]
		})
	});
}
function ProductPhotoSection({ imageDataUrl, annotatedImageDataUrl, productName, accessories, detectedPoses, computedHeight, computedComplexity, computedCOG }) {
	if (!imageDataUrl && !annotatedImageDataUrl) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		className: "border-border/70 shadow-none",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
			className: "pt-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					index: 1,
					icon: Package,
					title: "Product Detection Result",
					sub: "AI-captured image with skeleton pose analysis and accessory detection."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",
					children: [
						imageDataUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] uppercase tracking-wider text-muted-foreground font-medium",
								children: "Original Captured Image"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-xl overflow-hidden border border-border bg-muted/30 flex items-center justify-center min-h-[280px]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: imageDataUrl,
									alt: "Product original",
									className: "max-h-[320px] w-auto object-contain"
								})
							})]
						}),
						annotatedImageDataUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] uppercase tracking-wider text-muted-foreground font-medium",
								children: "Annotated — Skeleton & Zones"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-xl overflow-hidden border border-border bg-muted/30 flex items-center justify-center min-h-[280px]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: annotatedImageDataUrl,
									alt: "Product annotated",
									className: "max-h-[320px] w-auto object-contain"
								})
							})]
						}),
						imageDataUrl && !annotatedImageDataUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] uppercase tracking-wider text-muted-foreground font-medium",
								children: "Annotated — Skeleton & Zones"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-xl overflow-hidden border border-border bg-muted/30 flex items-center justify-center min-h-[280px] text-muted-foreground text-sm",
								children: "No annotated image available"
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 md:grid-cols-4 gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KV, {
							label: "Product Name",
							value: productName
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KV, {
							label: "Detected Pose",
							value: (detectedPoses || []).join(", ") || "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KV, {
							label: "Computed Height",
							value: computedHeight || "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KV, {
							label: "Complexity",
							value: computedComplexity || "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KV, {
							label: "Center of Gravity",
							value: computedCOG || "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KV, {
							label: "Accessories Detected",
							value: accessories && accessories.length > 0 ? accessories.join(", ") : "None"
						})
					]
				})
			]
		})
	});
}
function FinalRecommendationCard({ rec }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		className: "border-border/70 shadow-none overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-gradient-to-br from-background to-[color:var(--pink-soft)] p-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				index: 8,
				icon: Sparkles,
				title: "Final Packaging Recommendation",
				sub: "The deployment-ready configuration produced by PackWise AI."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KV, {
						label: "Recommended Packaging",
						value: rec.packaging
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KV, {
						label: "Recommended Cushion",
						value: rec.cushion
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KV, {
						label: "Recommended Attachment",
						value: rec.attachment
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KV, {
						label: "Recommended Support",
						value: rec.support
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KV, {
						label: "ISTA Recommendation",
						value: rec.ista
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-[color:var(--pink)]/30 bg-background p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] uppercase tracking-wider text-muted-foreground font-medium",
							children: "Deployment Status"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--pink)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4" }), rec.status]
						})]
					})
				]
			})]
		})
	});
}
function EngineeringNotes({ value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		className: "border-border/70 shadow-none",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
			className: "pt-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				index: 9,
				icon: Wrench,
				title: "Engineering Notes",
				sub: "Reviewer observations captured before export."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
				value,
				onChange: (e) => onChange(e.target.value),
				placeholder: "Add engineering observations, deviations, sign-off comments…",
				className: "min-h-[140px]"
			})]
		})
	});
}
function ExportCenter({ onExportPdf, onExportJson, onExportCsv, onPrint, onShare, isExporting }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		className: "border-border/70 shadow-none",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
			className: "pt-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				index: 10,
				icon: Download,
				title: "Export Center",
				sub: "Distribute the report to engineering, QA, and manufacturing partners."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col md:flex-row md:items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: onExportPdf,
					disabled: isExporting,
					size: "lg",
					className: "bg-[#d946ef] hover:bg-[#d946ef]/90 text-white flex-1 md:flex-none md:min-w-[280px]",
					children: [isExporting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 mr-2 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-4 w-4 mr-2" }), isExporting ? "Generating PDF..." : "Download Engineering Report (PDF)"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							onClick: onExportJson,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileBraces, { className: "h-4 w-4 mr-2" }), "Download JSON"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							onClick: onExportCsv,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, { className: "h-4 w-4 mr-2" }), "Download CSV"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							onClick: onPrint,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "h-4 w-4 mr-2" }), "Print Report"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							onClick: onShare,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "h-4 w-4 mr-2" }), "Share Report"]
						})
					]
				})]
			})]
		})
	});
}
function ReportMetadataFooter({ meta }) {
	const items = [
		["Generated Time", meta.generatedAt],
		["Run ID", meta.runId],
		["Model Version", meta.modelVersion],
		["Rule Engine Version", meta.ruleEngineVersion],
		["Knowledge Base Version", meta.knowledgeBaseVersion],
		["Literature Papers Used", meta.literaturePapers],
		["Engineering Rules Evaluated", meta.rulesEvaluated],
		["Confidence", `${meta.confidence}%`]
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		className: "border-border/70 shadow-none",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
			className: "pt-5 pb-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 mb-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { className: "h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-wider text-muted-foreground font-medium",
					children: "Report Metadata"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 md:grid-cols-4 gap-2",
				children: items.map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-muted-foreground",
						children: k
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono text-[13px] text-foreground mt-0.5 truncate",
						children: v
					})]
				}, k))
			})]
		})
	});
}
function SubmitPlanContent() {
	const [notes, setNotes] = (0, import_react.useState)("");
	const [apiData, setApiData] = (0, import_react.useState)(null);
	const [analysis, setAnalysis] = (0, import_react.useState)(null);
	const [plan, setPlan] = (0, import_react.useState)(null);
	const [isExporting, setIsExporting] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const a = loadAnalysis() || {
			productName: "Mock Doll",
			product_weight_g: 120,
			height_cm: 29,
			center_of_gravity: "Center",
			accessory_count: 1,
			accessory_weight_g: 15,
			poseComplexityScore: 50,
			poseStabilityScore: 50,
			accessories: []
		};
		const p = loadPlan() || {
			totalCost: 0,
			avgSustainability: 100,
			recommendedMaterial: "Standard",
			zones: []
		};
		setAnalysis(a);
		setPlan(p);
		async function fetchApi() {
			const mockApi = {
				overall_risk_level: "LOW",
				categories: {
					"Movement Risk": { risk_percentage: 12 },
					"Accessory Loss Risk": { risk_percentage: 5 },
					"Drop Test Risk": { pass_probability: 92 }
				},
				explanation_trace: ["Rule R-WT-001 fired: weight is within bounds.", "Cushion thickness passed."]
			};
			const token = getToken();
			if (!token) {
				setApiData(mockApi);
				return;
			}
			try {
				const res = await fetch("http://127.0.0.1:8000/predict", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"Authorization": `Bearer ${token}`
					},
					body: JSON.stringify({
						plan_id: Math.floor(Math.random() * 9e3) + 1e3,
						product_weight_g: a?.product_weight_g || 120,
						height_cm: a?.height_cm || 29,
						fragility_score: 5,
						center_of_gravity: a?.center_of_gravity || "Center",
						accessory_count: a?.accessory_count || 1,
						accessory_weight_g: a?.accessory_weight_g || 15,
						movement_score: 7,
						complexity_score: Math.round((a?.poseComplexityScore || 50) / 10),
						stability_index: Math.round((a?.poseStabilityScore || 50) / 10),
						recommended_head_strap: p?.zones?.find((z) => z.zone === "Head/Hair")?.action !== "Remove" ? 1 : 0,
						recommended_waist_strap: p?.zones?.find((z) => z.zone === "Waist")?.action !== "Remove" ? 1 : 0,
						recommended_hand_strap: p?.zones?.find((z) => z.zone === "Hands/Wrists")?.action !== "Remove" ? 1 : 0,
						recommended_leg_strap: p?.zones?.find((z) => z.zone === "Legs/Feet")?.action !== "Remove" ? 1 : 0
					})
				});
				if (res.ok) setApiData(await res.json());
				else setApiData(mockApi);
			} catch (e) {
				console.error("Failed to fetch API:", e);
				setApiData(mockApi);
			}
		}
		fetchApi();
	}, []);
	if (!apiData || !analysis || !plan) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "lg:col-span-2 flex flex-col items-center justify-center p-20 text-muted-foreground border border-border/70 rounded-xl bg-background/50 h-full min-h-[400px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-spin h-10 w-10 border-4 border-[color:var(--pink)] border-t-transparent rounded-full mb-6 shadow-sm" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-lg font-medium text-foreground",
				children: "Analyzing & Generating Report..."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm mt-2 opacity-70",
				children: "Computing rule engine constraints and connecting to backend models."
			})
		]
	});
	const summary = {
		grade: apiData.overall_risk_level === "LOW" ? "A" : apiData.overall_risk_level === "MEDIUM" ? "B" : "C",
		overallRisk: (apiData.overall_risk_level || "LOW").toUpperCase(),
		movementRisk: apiData.categories?.["Movement Risk"]?.risk_percentage || 0,
		accessoryLoss: apiData.categories?.["Accessory Loss Risk"]?.risk_percentage || 0,
		dropSurvival: apiData.categories?.["Drop Test Risk"]?.pass_probability || 0,
		packagingCost: `$${plan.totalCost?.toFixed(2) || "0.00"}`,
		sustainability: plan.avgSustainability || 100,
		confidence: 94
	};
	const config = {
		productName: analysis.productName || "Custom Package",
		packagingType: "Rigid Paperboard Window Box",
		packagingMethod: "Plastic-free Display Box",
		attachmentMethod: plan.recommendedMaterial || "Optimized Strapping",
		supportPoints: 4,
		centerOfGravity: analysis.center_of_gravity || "Center",
		internalClearance: "5.0 mm",
		cushionMaterial: "EPE Foam / Molded Pulp",
		cushionThickness: "15 mm",
		istaStandard: "ISTA 3A",
		scenario: "Normal Shipping",
		weight: `${analysis.product_weight_g || 120} g`,
		dimensions: `${analysis.height_cm || 29} cm (H)`,
		accessoriesDetected: analysis.accessory_count || 1
	};
	const metrics = {
		movementRisk: summary.movementRisk,
		accessoryLoss: summary.accessoryLoss,
		poseStability: plan.avgStability || 100,
		dropSurvival: summary.dropSurvival,
		criticalFailureCount: summary.overallRisk === "HIGH" ? 2 : 0,
		triggeredRules: apiData.categories ? Object.values(apiData.categories).flatMap((v) => v.matched_rules || []).length : 0,
		literatureCoverage: 92,
		ruleCoverage: 98
	};
	const findings = apiData.categories ? Object.entries(apiData.categories).map(([k, v]) => ({
		status: v.risk_level === "LOW" ? "pass" : v.risk_level === "MEDIUM" ? "warn" : "fail",
		text: `${k}: ${v.risk_percentage}% risk probability.`
	})) : [];
	const rules = apiData.categories ? Object.values(apiData.categories).flatMap((v) => v.matched_rules || []).map((r) => ({
		id: r.rule_id || "RULE",
		evidence: r.evidence_id || "N/A",
		rule: r.explanation || r.source_reference,
		severity: r.severity || "Medium",
		recommendation: "Review packaging configuration."
	})) : [];
	const optimization = [];
	const trace = (apiData.explanation_trace || []).map((t, i) => ({
		stage: "Rule Engine Trace",
		label: `Analysis Step ${i + 1}`,
		detail: t
	}));
	const finalRecommendation = {
		packaging: "Eco-friendly Window Box",
		cushion: "Molded Pulp Insert",
		attachment: config.attachmentMethod,
		support: "Multi-point support",
		ista: "ISTA 3A Certified",
		status: "READY FOR PROTOTYPE"
	};
	const metadata = {
		generatedAt: (/* @__PURE__ */ new Date()).toLocaleString(),
		runId: `PW-RUN-${Math.floor(Math.random() * 9e3) + 1e3}`,
		ruleEngineVersion: "Rule Engine v2.5",
		knowledgeBaseVersion: "KB v19.1",
		literaturePapers: 24,
		rulesEvaluated: metrics.triggeredRules,
		confidence: summary.confidence
	};
	const payload = {
		summary,
		config,
		metrics,
		findings,
		rules,
		optimization,
		trace,
		finalRecommendation,
		metadata,
		notes
	};
	const download = (data, filename, mime) => {
		const blob = new Blob([data], { type: mime });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = filename;
		a.click();
		URL.revokeObjectURL(url);
	};
	const onExportPdf = () => {
		if (isExporting) return;
		setIsExporting(true);
		const imageUrl = (typeof sessionStorage !== "undefined" ? sessionStorage.getItem("packwise_image") : null) || "";
		const annotatedUrl = (typeof sessionStorage !== "undefined" ? sessionStorage.getItem("packwise_annotated_image") : null) || "";
		const totalLabor = (plan?.zones || []).reduce((s, z) => s + (z.laborMins || 0), 0);
		const zonesHtml = (plan?.zones || []).map((z) => `<tr><td><strong>${z.zone}</strong></td><td>${z.recommendedMethod}</td><td>${z.action}</td><td>$${Number(z.cost || 0).toFixed(2)}</td><td>${z.laborMins || 0} min</td><td>${z.sustainability || 0}%</td></tr>`).join("");
		const rulesHtml = rules.map((r) => `<tr><td><strong>${r.id}</strong></td><td>${r.rule}</td><td>${r.severity}</td><td>${r.recommendation}</td></tr>`).join("");
		const showOriginal = !!imageUrl;
		const showAnnotated = !!annotatedUrl && annotatedUrl !== imageUrl;
		const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>PackWise AI — Engineering Report ${metadata.runId}</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap');
  @page { margin: 15mm 18mm; size: A4; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Inter','Segoe UI',sans-serif; color: #1e293b; background: #fff; font-size: 11px; line-height: 1.5; -webkit-print-color-adjust: exact; print-color-adjust: exact; }

  .page { padding: 0; }
  .header { display: flex; justify-content: space-between; align-items: flex-end; padding-bottom: 16px; border-bottom: 3px solid #ec4899; margin-bottom: 24px; }
  .header h1 { font-size: 20px; font-weight: 900; color: #0f172a; letter-spacing: -0.5px; }
  .header p  { font-size: 11px; color: #64748b; margin-top: 3px; }
  .header-meta { text-align: right; font-size: 10px; color: #94a3b8; line-height: 1.8; font-family: monospace; }

  .dash { display: grid; grid-template-columns: 150px 1fr; gap: 16px; margin-bottom: 24px; }
  .grade-card { background: linear-gradient(135deg,#fdf2f8,#fce7f3); border: 1px solid #fbcfe8; border-radius: 12px; padding: 18px; display: flex; flex-direction: column; align-items: center; gap: 6px; text-align: center; }
  .grade-letter { font-size: 50px; font-weight: 900; color: #ec4899; line-height: 1; }
  .grade-sub { font-size: 10px; font-weight: 700; color: #64748b; }
  .badge { display: inline-block; padding: 3px 10px; border-radius: 99px; font-size: 9px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; }
  .badge-low { background: #d1fae5; color: #065f46; }
  .badge-medium { background: #fef3c7; color: #92400e; }
  .badge-high { background: #fee2e2; color: #991b1b; }

  .metrics { display: grid; grid-template-columns: repeat(2,1fr); gap: 10px; }
  .mc { background: #fdf2f8; border: 1px solid #fbcfe8; border-radius: 8px; padding: 11px 14px; }
  .mc-lbl { font-size: 9px; text-transform: uppercase; letter-spacing: 0.08em; color: #be185d; font-weight: 700; margin-bottom: 3px; }
  .mc-val { font-size: 20px; font-weight: 900; color: #0f172a; }
  .mc-unit { font-size: 11px; color: #94a3b8; font-weight: 500; }

  .section { margin-bottom: 24px; page-break-inside: avoid; }
  .stitle { font-size: 9px; font-weight: 900; color: #ec4899; text-transform: uppercase; letter-spacing: 0.14em; padding-bottom: 5px; border-bottom: 1px solid #fbcfe8; margin-bottom: 12px; }

  .kv { display: grid; grid-template-columns: repeat(3,1fr); gap: 8px; }
  .ki { padding: 8px 10px; background: #f8fafc; border: 1px solid #f1f5f9; border-radius: 6px; }
  .ki-lbl { font-size: 8px; text-transform: uppercase; letter-spacing: 0.07em; color: #94a3b8; font-weight: 700; margin-bottom: 2px; }
  .ki-val { font-size: 11px; font-weight: 600; color: #0f172a; }

  .photo-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 12px; }
  .photo-box { border: 1px solid #fbcfe8; border-radius: 8px; overflow: hidden; }
  .photo-lbl { font-size: 9px; text-transform: uppercase; letter-spacing: 0.08em; color: #be185d; font-weight: 700; padding: 7px 11px; border-bottom: 1px solid #fbcfe8; background: #fdf2f8; }
  .photo-box img { width: 100%; height: 190px; object-fit: contain; display: block; background: #fff; }

  table { width: 100%; border-collapse: collapse; }
  th { background: #fdf2f8; color: #be185d; font-weight: 700; font-size: 9px; text-transform: uppercase; letter-spacing: 0.06em; padding: 8px 10px; text-align: left; border-bottom: 2px solid #fbcfe8; }
  td { padding: 8px 10px; border-bottom: 1px solid #fdf2f8; color: #334155; vertical-align: top; font-size: 11px; }
  tr:last-child td { border-bottom: none; }

  .rec { display: grid; grid-template-columns: repeat(3,1fr); gap: 10px; background: #fdf2f8; padding: 14px; border-radius: 10px; border: 1px solid #fbcfe8; }
  .ri-lbl { font-size: 8px; text-transform: uppercase; letter-spacing: 0.08em; color: #be185d; font-weight: 700; margin-bottom: 3px; }
  .ri-val { font-size: 12px; font-weight: 800; color: #831843; }

  .footer { margin-top: 28px; padding-top: 14px; border-top: 1px solid #fbcfe8; display: flex; justify-content: space-between; font-size: 9px; color: #94a3b8; }
</style>
</head>
<body>
<div class="page">
  <div class="header">
    <div>
      <h1>PackWise AI &mdash; Engineering Report</h1>
      <p>${config.productName} &nbsp;&middot;&nbsp; ${metadata.generatedAt}</p>
    </div>
    <div class="header-meta">
      <div>RUN ID: ${metadata.runId}</div>
      <div>${metadata.modelVersion}</div>
          </div>
  </div>

  <div class="dash">
    <div class="grade-card">
      <div class="grade-letter">${summary.grade}</div>
      <div class="grade-sub">AI Readiness Grade</div>
      <div class="badge badge-${summary.overallRisk.toLowerCase()}">${summary.overallRisk} RISK</div>
    </div>
    <div class="metrics">
      <div class="mc"><div class="mc-lbl">Packaging Cost</div><div class="mc-val">${summary.packagingCost}</div></div>
      <div class="mc"><div class="mc-lbl">Labor Time</div><div class="mc-val">${totalLabor}<span class="mc-unit"> min</span></div></div>
      <div class="mc"><div class="mc-lbl">Drop Survival</div><div class="mc-val">${summary.dropSurvival}<span class="mc-unit">/100</span></div></div>
      <div class="mc"><div class="mc-lbl">Sustainability</div><div class="mc-val">${summary.sustainability}<span class="mc-unit">%</span></div></div>
    </div>
  </div>

  ${showOriginal || showAnnotated ? `
  <div class="section">
    <div class="stitle">Computer Vision Analysis</div>
    <div class="photo-row">
      ${showOriginal ? `<div class="photo-box"><div class="photo-lbl">Detected Product Image</div><img src="${imageUrl}" alt="Original"/></div>` : ""}
      ${showAnnotated ? `<div class="photo-box"><div class="photo-lbl">YOLOv11 Skeleton &amp; Zones</div><img src="${annotatedUrl}" alt="Annotated"/></div>` : ""}
    </div>
    <div class="kv">
      <div class="ki"><div class="ki-lbl">Detected Pose</div><div class="ki-val">${(analysis?.detectedPoses || []).join(", ") || "—"}</div></div>
      <div class="ki"><div class="ki-lbl">Complexity</div><div class="ki-val">${analysis?.computedComplexity || "—"}</div></div>
      <div class="ki"><div class="ki-lbl">Center of Gravity</div><div class="ki-val">${analysis?.computedCOG || config.centerOfGravity}</div></div>
    </div>
  </div>` : ""}

  <div class="section">
    <div class="stitle">Product Configuration</div>
    <div class="kv">
      <div class="ki"><div class="ki-lbl">Packaging Type</div><div class="ki-val">${config.packagingType}</div></div>
      <div class="ki"><div class="ki-lbl">Attachment Method</div><div class="ki-val">${config.attachmentMethod}</div></div>
      <div class="ki"><div class="ki-lbl">Cushion Material</div><div class="ki-val">${config.cushionMaterial}</div></div>
      <div class="ki"><div class="ki-lbl">Weight</div><div class="ki-val">${config.weight}</div></div>
      <div class="ki"><div class="ki-lbl">Dimensions</div><div class="ki-val">${config.dimensions}</div></div>
      <div class="ki"><div class="ki-lbl">Accessories</div><div class="ki-val">${config.accessoriesDetected} detected</div></div>
    </div>
  </div>

  ${zonesHtml ? `
  <div class="section" style="page-break-before:always;">
    <div class="stitle">DFA / MTM Attachment Plan</div>
    <table><thead><tr><th>Zone</th><th>Method</th><th>Action</th><th>Cost</th><th>Labor</th><th>Eco%</th></tr></thead><tbody>${zonesHtml}</tbody></table>
  </div>` : ""}

  ${rulesHtml ? `
  <div class="section">
    <div class="stitle">Triggered Engineering Rules</div>
    <table><thead><tr><th>Rule ID</th><th>Explanation</th><th>Severity</th><th>Recommendation</th></tr></thead><tbody>${rulesHtml}</tbody></table>
  </div>` : ""}

  <div class="section">
    <div class="stitle">Final Implementation Recommendation</div>
    <div class="rec">
      <div><div class="ri-lbl">Packaging</div><div class="ri-val">${finalRecommendation.packaging}</div></div>
      <div><div class="ri-lbl">Cushion</div><div class="ri-val">${finalRecommendation.cushion}</div></div>
      <div><div class="ri-lbl">Attachment</div><div class="ri-val">${finalRecommendation.attachment}</div></div>
      <div><div class="ri-lbl">Support</div><div class="ri-val">${finalRecommendation.support}</div></div>
      <div><div class="ri-lbl">ISTA Standard</div><div class="ri-val">${finalRecommendation.ista}</div></div>
      <div><div class="ri-lbl">Status</div><div class="ri-val" style="color:#ec4899;">&#10004; ${finalRecommendation.status}</div></div>
    </div>
  </div>

  <div class="footer">
    <div>PackWise AI &middot; Powered by YOLOv11 &amp; Expert System KB v19.1</div>
    <div>Strictly Confidential &middot; Internal Engineering Document</div>
  </div>
</div>
</body>
</html>`;
		const iframe = document.createElement("iframe");
		iframe.style.cssText = "position:fixed;width:0;height:0;border:0;left:-9999px;top:0;visibility:hidden;";
		document.body.appendChild(iframe);
		const doc = iframe.contentWindow?.document;
		if (!doc) {
			document.body.removeChild(iframe);
			setIsExporting(false);
			toast.error("Could not initialize PDF print. Try again.");
			return;
		}
		doc.open();
		doc.write(fullHtml);
		doc.close();
		setTimeout(() => {
			try {
				iframe.contentWindow?.focus();
				iframe.contentWindow?.print();
			} catch {
				const blob = new Blob([fullHtml], { type: "text/html;charset=utf-8" });
				const url = URL.createObjectURL(blob);
				window.open(url, "_blank");
				setTimeout(() => URL.revokeObjectURL(url), 5e3);
			}
			setTimeout(() => {
				if (document.body.contains(iframe)) document.body.removeChild(iframe);
			}, 1500);
		}, 1e3);
		setIsExporting(false);
		toast.success("Print dialog opening — choose 'Save as PDF' as destination.");
	};
	const onPrint = () => window.print();
	const onExportJson = () => download(JSON.stringify(payload, null, 2), `${metadata.runId}.json`, "application/json");
	const onExportCsv = () => {
		download([
			[
				"section",
				"key",
				"value"
			],
			[
				"summary",
				"grade",
				summary.grade
			],
			[
				"summary",
				"overallRisk",
				summary.overallRisk
			],
			[
				"summary",
				"dropSurvival",
				String(summary.dropSurvival)
			],
			[
				"summary",
				"movementRisk",
				String(summary.movementRisk)
			],
			[
				"summary",
				"accessoryLoss",
				String(summary.accessoryLoss)
			],
			[
				"summary",
				"packagingCost",
				summary.packagingCost
			],
			[
				"summary",
				"sustainability",
				String(summary.sustainability)
			],
			[
				"summary",
				"confidence",
				String(summary.confidence)
			],
			...rules.map((r) => [
				"rule",
				r.id,
				`${r.severity} — ${r.rule}`
			]),
			...optimization.map((r) => [
				"optimization",
				r.label,
				`${r.before} -> ${r.after} (${r.delta})`
			])
		].map((r) => r.map((c) => `"${String(c).replace(/"/g, "\"\"")}"`).join(",")).join("\n"), `${metadata.runId}.csv`, "text/csv");
	};
	const onShare = () => {
		if (typeof navigator !== "undefined" && "share" in navigator) navigator.share?.({
			title: "PackWise AI — Engineering Report",
			text: `Run ${metadata.runId} · Grade ${summary.grade} · Confidence ${summary.confidence}%`,
			url: typeof window !== "undefined" ? window.location.href : void 0
		}).catch(() => {});
		else if (typeof navigator !== "undefined" && typeof window !== "undefined") navigator.clipboard?.writeText(window.location.href).catch(() => {});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "lg:col-span-2 space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExecutiveSummary, { summary }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductPhotoSection, {
				imageDataUrl: analysis?.imageDataUrl,
				annotatedImageDataUrl: analysis?.annotatedImageDataUrl,
				productName: config.productName,
				accessories: analysis?.accessories || [],
				detectedPoses: analysis?.detectedPoses,
				computedHeight: analysis?.computedHeight,
				computedComplexity: analysis?.computedComplexity,
				computedCOG: analysis?.computedCOG
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfigurationSummary, { config }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiskDashboard, { m: metrics }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EngineeringFindings, { findings }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriggeredRulesTable, { rules }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptimizationSummary, { rows: optimization }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DecisionTrace, { steps: trace }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalRecommendationCard, { rec: finalRecommendation }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EngineeringNotes, {
				value: notes,
				onChange: setNotes
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "print:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExportCenter, {
					onExportPdf,
					onExportJson,
					onExportCsv,
					onPrint,
					onShare,
					isExporting
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hidden print:block",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-4" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-wider text-muted-foreground",
						children: "Appendix"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs mt-2",
						children: [
							"Report generated by ",
							metadata.modelVersion,
							" using ",
							metadata.ruleEngineVersion,
							" and ",
							metadata.knowledgeBaseVersion,
							".",
							" ",
							metadata.rulesEvaluated,
							" engineering rules evaluated against ",
							metadata.literaturePapers,
							" literature sources. Confidence score ",
							metadata.confidence,
							"%."
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportMetadataFooter, { meta: metadata })
		]
	});
}
function SubmitApprovalPage() {
	const navigate = useNavigate();
	const [reportGenerated, setReportGenerated] = (0, import_react.useState)(false);
	const [isSubmitted, setIsSubmitted] = (0, import_react.useState)(false);
	const user = getUser();
	(0, import_react.useEffect)(() => {
		if (!loadAnalysis()) {
			toast.error("Please complete Product Analysis before submitting a plan.");
			navigate({ to: "/app/product-analysis" });
		}
	}, []);
	const hasAnalysis = !!loadAnalysis();
	const handleGenerateReport = () => {
		setReportGenerated(true);
		toast.success("Report generated. Please review before submitting to manager.");
		setTimeout(() => {
			document.getElementById("report-section")?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	};
	const handleSubmit = () => {
		setIsSubmitted(true);
		const analysis = loadAnalysis();
		const plan = loadPlan();
		const assemblyTimeSec = runAssemblyEngine({
			weightGrams: analysis?.product_weight_g ?? 120,
			accessories: analysis?.selected_accessories ?? [],
			skeletonKeypoints: analysis?.raw_keypoints ?? [],
			poseComplexityScore: analysis?.poseComplexityScore ?? 0
		}).assembly_time_seconds;
		const assemblyTimeMins = (assemblyTimeSec / 60).toFixed(2);
		const avgSustain = plan?.avgSustainability ?? 100;
		const imageDataUrl = typeof sessionStorage !== "undefined" ? sessionStorage.getItem("packwise_image") || void 0 : void 0;
		const annotatedImageDataUrl = typeof sessionStorage !== "undefined" ? sessionStorage.getItem("packwise_annotated_image") || void 0 : void 0;
		const reqId = `REQ-${Math.floor(Math.random() * 9e3) + 1e3}`;
		const riskLevel = analysis && analysis.movementRiskScore > 60 ? "High" : analysis && analysis.movementRiskScore > 30 ? "Medium" : "Low";
		const estCost = plan ? `$${plan.totalCost.toFixed(2)}/unit` : "$0.00/unit";
		const laborTimeStr = `${assemblyTimeSec}s (${assemblyTimeMins} min)`;
		const submittedDate = (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
			year: "numeric",
			month: "short",
			day: "numeric"
		}) + ", " + (/* @__PURE__ */ new Date()).toLocaleTimeString([], {
			hour: "2-digit",
			minute: "2-digit"
		});
		const reportSnapshot = {
			grade: "B",
			overallRisk: riskLevel.toUpperCase(),
			dropSurvival: analysis ? Math.max(0, 100 - analysis.movementRiskScore) : 80,
			movementRisk: analysis?.movementRiskScore ?? 0,
			accessoryLoss: analysis?.accessoryLossRisk ?? 0,
			zones: (plan?.zones || []).map((z) => ({
				zone: z.zone,
				recommendedMethod: z.recommendedMethod,
				action: z.action,
				cost: z.cost || 0,
				laborMins: z.laborMins || 0,
				sustainability: z.sustainability || 100
			})),
			finalRecommendation: {
				packaging: "Eco-friendly Window Box",
				cushion: "Molded Pulp Insert",
				attachment: plan?.recommendedMaterial || "Optimized Strapping",
				support: "Multi-point support",
				ista: "ISTA 3A Certified"
			},
			imageDataUrl,
			annotatedImageDataUrl,
			accessories: analysis?.accessories,
			detectedPoses: analysis?.detectedPoses
		};
		saveApprovalRequest({
			id: reqId,
			sku: analysis?.productName || "Custom Plan",
			engineer: user?.name || user?.email || "Packaging Engineer",
			date: submittedDate,
			risk: riskLevel,
			cost: estCost,
			laborTime: laborTimeStr,
			sustainability: avgSustain,
			status: "Pending",
			reportSnapshot
		});
		supabase.from("approval").insert([{
			req_id: reqId,
			sku: analysis?.productName || "Custom Plan",
			engineer_name: user?.name || user?.email || "Packaging Engineer",
			pe_id: user?.user_id ?? null,
			risk_level: riskLevel,
			est_cost: estCost,
			labor_time: laborTimeStr,
			sustainability: avgSustain,
			status: "Pending",
			report_snapshot: reportSnapshot,
			submitted_at: (/* @__PURE__ */ new Date()).toISOString()
		}]).then(({ error }) => {
			if (error) console.warn("[PackWise] approval save warning:", error.message);
			else console.log("[PackWise] Approval request saved to Supabase ✓");
		});
		toast.success("Attachment plan successfully submitted to Operations Manager.");
		setTimeout(() => {
			navigate({ to: "/app/dashboard" });
		}, 2e3);
	};
	if (!hasAnalysis) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Submit Plan for Approval",
				description: "Generate your engineering report first, then submit it to the Operations Manager for review."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${reportGenerated ? "bg-[color:var(--success)] text-white" : "bg-primary text-white"}`,
						children: reportGenerated ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4" }) : "1"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `text-sm font-medium ${reportGenerated ? "text-[color:var(--success)]" : "text-foreground"}`,
						children: "Generate Report"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 text-muted-foreground" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${isSubmitted ? "bg-[color:var(--success)] text-white" : reportGenerated ? "bg-primary text-white" : "bg-muted text-muted-foreground border border-border"}`,
						children: isSubmitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4" }) : "2"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `text-sm font-medium ${isSubmitted ? "text-[color:var(--success)]" : reportGenerated ? "text-foreground" : "text-muted-foreground"}`,
						children: "Submit to Manager"
					})
				]
			}),
			!reportGenerated && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "border-[color:var(--primary)]/30 bg-[color:var(--primary-soft)]/20 shadow-none",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, {
					className: "text-base flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-5 w-5 text-primary" }), "Step 1 — Generate Engineering Report"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Click below to generate the full AI engineering report based on your analysis and packaging plan." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					className: "w-full h-12 text-base font-semibold",
					onClick: handleGenerateReport,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "mr-2 h-5 w-5" }), " Generate Report"]
				}) })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-3",
				children: [reportGenerated && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					id: "report-section",
					className: "lg:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubmitPlanContent, {})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: `shadow-none ${reportGenerated ? "border-[color:var(--success)]/40 bg-[color:var(--success)]/5" : "border-border/50 bg-muted/20 opacity-60"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
								className: "text-base",
								children: reportGenerated ? "Step 2 — Submit to Manager" : "Submit to Manager"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: reportGenerated ? "Report is ready. Submit to the Operations Manager for approval." : "Generate the report first before submitting." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "w-full h-12 text-base font-semibold bg-[color:var(--success)] hover:bg-[color:var(--success)]/90 text-white",
								onClick: handleSubmit,
								disabled: !reportGenerated || isSubmitted,
								children: isSubmitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Submitted Successfully ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "ml-2 h-5 w-5" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Submit Plan ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "ml-2 h-4 w-4" })] })
							}), !reportGenerated && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground mt-2 text-center",
								children: "⬆ Generate the report first"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "border-border/70 shadow-none",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
								className: "pb-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
									className: "text-sm",
									children: "Approval Workflow"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
								className: "space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col items-center",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "h-6 w-6 rounded-full bg-[color:var(--success)]/20 text-[color:var(--success)] flex items-center justify-center",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-px h-8 bg-border my-1" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "pt-0.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-medium",
												children: "Plan Finalized"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-muted-foreground",
												children: "Cost & risk analysis complete"
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col items-center",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: `h-6 w-6 rounded-full flex items-center justify-center ${reportGenerated ? "bg-[color:var(--success)]/20 text-[color:var(--success)]" : "bg-muted border border-border"}`,
												children: reportGenerated ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 w-2 rounded-full bg-muted-foreground" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-px h-8 bg-border my-1" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "pt-0.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-medium",
												children: "Report Generated"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-muted-foreground",
												children: "Engineering report ready for review"
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col items-center",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: `h-6 w-6 rounded-full flex items-center justify-center ${isSubmitted ? "bg-[color:var(--success)]/20 text-[color:var(--success)]" : reportGenerated ? "bg-primary/20 text-primary" : "bg-muted border border-border"}`,
												children: isSubmitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 w-2 rounded-full bg-primary" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-px h-8 bg-border my-1" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "pt-0.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-medium",
												children: "Submit to Manager"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-muted-foreground",
												children: "Awaiting your submission"
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex flex-col items-center",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "h-6 w-6 rounded-full bg-muted border border-border flex items-center justify-center",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 w-1.5 rounded-full bg-muted-foreground" })
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "pt-0.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-medium text-muted-foreground",
												children: "Manager Review"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-muted-foreground",
												children: "Approval required for production"
											})]
										})]
									})
								]
							})]
						}),
						reportGenerated && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							className: "border-border/70 shadow-none",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
								className: "p-4 flex items-center gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 text-[color:var(--success)] shrink-0" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-medium",
										children: "Report Ready"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "Review the report on the left, then submit."
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										className: "ml-auto bg-[color:var(--success)]/10 text-[color:var(--success)] border-transparent",
										children: "Ready"
									})
								]
							})
						})
					]
				})]
			})
		]
	});
}
//#endregion
export { SubmitApprovalPage as component };
