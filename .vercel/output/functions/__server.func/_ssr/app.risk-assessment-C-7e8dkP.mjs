import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { i as getToken } from "./auth-DIWjK7oO.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { t as Input } from "./input-B8Q2ztVi.mjs";
import { t as Separator } from "./separator-B3hsz7IR.mjs";
import { A as Package, G as Factory, I as Info, R as GitBranch, V as FileText, X as Database, Y as DollarSign, _ as Store, _t as Activity, at as ChevronRight, b as ShieldCheck, d as Truck, f as TriangleAlert, ht as ArrowLeft, m as TrendingDown, mt as ArrowRight, nt as CircleCheck, o as Warehouse, ot as ChevronDown, r as Wrench, rt as CircleAlert, s as WandSparkles, ut as BookOpen, y as Sparkles, z as Gauge } from "../_libs/lucide-react.mjs";
import { a as CardTitle, i as CardHeader, n as CardContent, t as Card } from "./card-CtX3ithx.mjs";
import { n as PageHeader, t as Badge } from "./page-header-Dam7wNGy.mjs";
import { n as loadAnalysis } from "./workflow-store-R0AzRa1j.mjs";
import { t as Progress } from "./progress-DOIEKRJF.mjs";
import { t as Label } from "./label-DBD1bRRP.mjs";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-DIo89e4g.mjs";
import { t as Checkbox } from "./checkbox-kt6FvQcE.mjs";
import { i as SliderTrack, n as SliderRange, r as SliderThumb, t as Slider$1 } from "../_libs/radix-ui__react-slider.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.risk-assessment-C-7e8dkP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Slider = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slider$1, {
	ref,
	className: cn("relative flex w-full touch-none select-none items-center", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderTrack, {
		className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRange, { className: "absolute h-full bg-primary" })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumb, { className: "block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" })]
}));
Slider.displayName = Slider$1.displayName;
var SCENARIOS = {
	normal: {
		label: "Normal Shipping",
		sub: "Baseline ISTA 1A",
		mv: 1,
		ac: 1,
		dr: 1,
		conf: 0,
		icon: Truck,
		conditions: {
			dropHeight: "0.8 m",
			transport: "Palletized · Road",
			vibration: "Low (5–50 Hz)",
			compression: "3-pallet stack",
			temperature: "10–30 °C",
			humidity: "40–60% RH"
		}
	},
	rough: {
		label: "Rough Handling",
		sub: "Drop · vibration · 1.2m",
		mv: 1.35,
		ac: 1.4,
		dr: .78,
		conf: -6,
		icon: Activity,
		conditions: {
			dropHeight: "1.2 m",
			transport: "Parcel · Multi-modal",
			vibration: "High (5–200 Hz)",
			compression: "5-pallet stack",
			temperature: "-10–40 °C",
			humidity: "20–85% RH"
		}
	},
	collector: {
		label: "Collector Grade",
		sub: "Mint-in-box tolerance",
		mv: .85,
		ac: .7,
		dr: 1.08,
		conf: 4,
		icon: ShieldCheck,
		conditions: {
			dropHeight: "0.45 m",
			transport: "White-glove · Air",
			vibration: "Very Low (5–20 Hz)",
			compression: "Single-layer",
			temperature: "18–24 °C",
			humidity: "45–55% RH"
		}
	},
	cost: {
		label: "Cost Optimized",
		sub: "Reduced foam · thin tray",
		mv: 1.15,
		ac: 1.2,
		dr: .92,
		conf: -3,
		icon: Gauge,
		conditions: {
			dropHeight: "0.8 m",
			transport: "Palletized · Road",
			vibration: "Medium (5–100 Hz)",
			compression: "4-pallet stack",
			temperature: "5–35 °C",
			humidity: "30–70% RH"
		}
	}
};
var REGION_WEIGHTS = {
	Arms: .28,
	Head: .34,
	Legs: .22,
	Waist: .16
};
var DEFAULT_PACKAGING_CONFIG = {
	method: "Plastic-free Display Box",
	type: "Rigid Paperboard Window Box",
	attachment: "PET Strap + Paperboard Insert",
	supportPoints: 3,
	cushionMaterial: "EPE Foam",
	cushionThickness: "15 mm",
	weight: "412 g",
	centerOfGravity: "Offset (12 mm)",
	clearance: "6.5 mm",
	designMethod: "Rule-Based Engine v2.4",
	istaLevel: "3A"
};
var DEFAULT_RULE_ENGINE_STATUS = {
	literaturePapers: 18,
	engineeringRules: 38,
	activeRulesTriggered: 18,
	ruleCoverage: 94
};
var ENGINEERING_RULES = [
	{
		id: "R-WT-001",
		evidenceId: "E001",
		rule: "Higher product weight increases transmitted force on cushion",
		status: "Triggered"
	},
	{
		id: "R-SP-002",
		evidenceId: "E002",
		rule: "Support points below recommended threshold for articulated toys",
		status: "Triggered"
	},
	{
		id: "R-CL-003",
		evidenceId: "E003",
		rule: "Large internal clearance increases in-pack movement amplitude",
		status: "Triggered"
	},
	{
		id: "R-AC-004",
		evidenceId: "E004",
		rule: "Unsecured sub-5 g accessories escape blister windows under vibration",
		status: "Triggered"
	},
	{
		id: "R-CG-005",
		evidenceId: "E005",
		rule: "CoG offset > 10 mm generates rotational moment during drop",
		status: "Triggered"
	},
	{
		id: "R-DT-006",
		evidenceId: "E006",
		rule: "EPE foam < 20 mm insufficient for 1.2 m drop on 400 g product",
		status: "Monitoring"
	},
	{
		id: "R-ST-007",
		evidenceId: "E007",
		rule: "Paperboard insert compressive strength adequate for 3-pallet stack",
		status: "Inactive"
	}
];
var FAILURE_MODES = {
	Assembly: "Operator Mis-Alignment",
	Warehouse: "Compression Set",
	Transport: "Vibration Loosening",
	Shelf: "Consumer Handling"
};
var EVIDENCE_MAP = {
	Head: {
		evidenceId: "E003",
		suggestedRule: "Increase Cushion Thickness"
	},
	Arms: {
		evidenceId: "E002",
		suggestedRule: "Add Shoulder Restraint Strap"
	},
	Legs: {
		evidenceId: "E004",
		suggestedRule: "Reinforce Knee-Joint Cradle"
	},
	Waist: {
		evidenceId: "E001",
		suggestedRule: "Molded Torso Cradle"
	},
	Glasses: {
		evidenceId: "E005",
		suggestedRule: "Micro-Blister Recess"
	},
	Handbag: {
		evidenceId: "E007",
		suggestedRule: "Elastic Loop Retention"
	},
	Crown: {
		evidenceId: "E005",
		suggestedRule: "Micro-Clip Retention"
	},
	Shoes: {
		evidenceId: "E004",
		suggestedRule: "Paired Foot Cradle"
	},
	"Dress Stand": {
		evidenceId: "E006",
		suggestedRule: "PET Base Lock"
	}
};
function evidenceFor(region) {
	return EVIDENCE_MAP[region] ?? {
		evidenceId: "E000",
		suggestedRule: "Review with engineer"
	};
}
var DECISION_TRACE = [
	{
		stage: "Literature",
		label: "IoP 2021 · Rouillard vibration study",
		detail: "Sub-5 g parts displaced above 65 Hz on parcel routes",
		icon: BookOpen
	},
	{
		stage: "Knowledge Extraction",
		label: "E003 · Clearance–Movement correlation",
		detail: "Extracted coefficient 0.30 for clearance term",
		icon: Database
	},
	{
		stage: "Engineering Rule",
		label: "R-CL-003 · Large clearance increases movement",
		detail: "IF clearance > 5 mm THEN movement_risk += weighted term",
		icon: FileText
	},
	{
		stage: "Triggered Condition",
		label: "Clearance 6.5 mm > 5 mm threshold",
		detail: "Rule R-CL-003 fires with active weight 0.30",
		icon: GitBranch
	},
	{
		stage: "Risk Score",
		label: "Movement Risk contribution +19.5 pts",
		detail: "Aggregated into inertial drift index",
		icon: Activity
	},
	{
		stage: "Recommendation",
		label: "Add molded cradle · reduce clearance to 2 mm",
		detail: "Predicted −18% movement risk · +12% drop survival",
		icon: Sparkles
	}
];
function level(score) {
	if (score < 30) return {
		label: "LOW",
		tone: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200"
	};
	if (score < 60) return {
		label: "MEDIUM",
		tone: "bg-amber-50 text-amber-700 ring-1 ring-amber-200"
	};
	return {
		label: "HIGH",
		tone: "bg-rose-50 text-rose-700 ring-1 ring-rose-200"
	};
}
function dropLevel(score) {
	if (score >= 75) return {
		label: "LOW",
		tone: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200"
	};
	if (score >= 55) return {
		label: "MEDIUM",
		tone: "bg-amber-50 text-amber-700 ring-1 ring-amber-200"
	};
	return {
		label: "HIGH",
		tone: "bg-rose-50 text-rose-700 ring-1 ring-rose-200"
	};
}
var clamp = (n, lo = 0, hi = 100) => Math.max(lo, Math.min(hi, n));
var round = (n) => Math.round(n * 10) / 10;
function RiskAssessmentContent({ packagingConfig = DEFAULT_PACKAGING_CONFIG, ruleEngineStatus = DEFAULT_RULE_ENGINE_STATUS, engineeringRules = ENGINEERING_RULES, decisionTrace = DECISION_TRACE } = {}) {
	const [product, setProduct] = (0, import_react.useState)({
		name: "—",
		category: "—",
		complexity: 50,
		support: 3
	});
	const [accessories, setAccessories] = (0, import_react.useState)([]);
	const [attachments, setAttachments] = (0, import_react.useState)([]);
	const [scenario, setScenario] = (0, import_react.useState)("normal");
	const [confOpen, setConfOpen] = (0, import_react.useState)(false);
	const [optOpen, setOptOpen] = (0, import_react.useState)(false);
	const [traceOpen, setTraceOpen] = (0, import_react.useState)(false);
	const sc = SCENARIOS[scenario];
	const [apiData, setApiData] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const a = loadAnalysis();
		if (a) {
			setProduct({
				name: a.productName ?? "—",
				category: a.category ?? a.productType ?? "—",
				complexity: a.poseComplexityScore ?? 50,
				support: 3
			});
			const SMALL_ACCESSORIES = new Set([
				"glasses",
				"crown",
				"ring",
				"earring",
				"clip",
				"pin",
				"badge"
			]);
			const accList = (a.selected_accessories ?? a.accessories ?? []).map((name) => ({
				name,
				secured: false,
				small: SMALL_ACCESSORIES.has(name.toLowerCase())
			}));
			if (accList.length > 0) setAccessories(accList);
			const RISK_TO_COVERAGE = {
				high: 50,
				medium: 70,
				low: 88
			};
			const METHOD_TO_TYPE = {
				"Elastic Strap": "Elastic Strap",
				"EVA Strap": "EVA Strap",
				"PET Support": "PET Support",
				"Cardboard Support": "Cardboard Support",
				"Blister Support": "Blister Support"
			};
			const zones = (a.attachmentZones ?? []).filter((z) => z.recommendedMethod && z.recommendedMethod !== "No Attachment Required" && z.recommendedMethod !== "Not needed");
			if (zones.length > 0) setAttachments(zones.map((z) => ({
				region: z.zone,
				type: METHOD_TO_TYPE[z.recommendedMethod] ?? z.recommendedMethod,
				coverage: RISK_TO_COVERAGE[z.riskLevel] ?? 70
			})));
			const token = getToken();
			if (token) fetch("http://localhost:8000/predict", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${token}`
				},
				body: JSON.stringify({
					plan_id: 1,
					product_weight_g: a.product_weight_g ?? 250,
					height_cm: a.height_cm ?? 30,
					fragility_score: 5,
					center_of_gravity: a.center_of_gravity ?? "Center",
					accessory_count: a.accessory_count ?? 5,
					accessory_weight_g: a.accessory_weight_g ?? 45,
					movement_score: 7,
					complexity_score: a.poseComplexityScore ? Math.round(a.poseComplexityScore / 10) : 8,
					stability_index: a.poseStabilityScore ? Math.round(a.poseStabilityScore / 10) : 4,
					recommended_head_strap: zones.some((z) => z.zone.toLowerCase().includes("head") || z.zone.toLowerCase().includes("hair")) ? 1 : 0,
					recommended_waist_strap: zones.some((z) => z.zone.toLowerCase().includes("waist") || z.zone.toLowerCase().includes("torso")) ? 1 : 0,
					recommended_hand_strap: zones.some((z) => z.zone.toLowerCase().includes("arm") || z.zone.toLowerCase().includes("wrist") || z.zone.toLowerCase().includes("hand")) ? 1 : 0,
					recommended_leg_strap: zones.some((z) => z.zone.toLowerCase().includes("leg") || z.zone.toLowerCase().includes("foot") || z.zone.toLowerCase().includes("ankle")) ? 1 : 0
				})
			}).then((res) => res.json()).then((data) => setApiData(data)).catch((err) => console.error("Failed to fetch risk assessment API:", err));
		}
	}, []);
	const attachmentCoverage = (0, import_react.useMemo)(() => attachments.reduce((s, a) => s + a.coverage, 0) / attachments.length, [attachments]);
	const movementRisk = (0, import_react.useMemo)(() => {
		if (apiData?.categories?.["Movement Risk"]) return clamp(apiData.categories["Movement Risk"].risk_percentage * sc.mv);
		return clamp((.5 * product.complexity - .2 * (product.support * 10) - .3 * attachmentCoverage + 35) * sc.mv);
	}, [
		apiData,
		product,
		attachmentCoverage,
		sc.mv
	]);
	const unsecuredSmall = accessories.filter((a) => !a.secured && a.small).length;
	const securedCount = accessories.filter((a) => a.secured).length;
	const accessoryLoss = (0, import_react.useMemo)(() => {
		if (apiData?.categories?.["Accessory Loss Risk"]) return clamp(apiData.categories["Accessory Loss Risk"].risk_percentage * sc.ac);
		return clamp((20 + 15 * unsecuredSmall - 10 * securedCount + 25) * sc.ac);
	}, [
		apiData,
		unsecuredSmall,
		securedCount,
		sc.ac
	]);
	const poseStability = (0, import_react.useMemo)(() => clamp(100 - .45 * product.complexity + 6 * product.support + .25 * attachmentCoverage), [product, attachmentCoverage]);
	const dropScore = (0, import_react.useMemo)(() => {
		if (apiData?.categories?.["Drop Test Risk"]) return clamp(apiData.categories["Drop Test Risk"].pass_probability * sc.dr);
		return clamp((100 - movementRisk * .4 - accessoryLoss * .2 + poseStability * .3) * sc.dr);
	}, [
		apiData,
		movementRisk,
		accessoryLoss,
		poseStability,
		sc.dr
	]);
	const altA = clamp(dropScore + 6.2);
	const altB = clamp(dropScore + 11.4);
	const noAttach = clamp(dropScore - 28.5);
	const regionRisks = (0, import_react.useMemo)(() => {
		return Object.entries(REGION_WEIGHTS).map(([region, w]) => {
			const covered = attachments.some((a) => a.region.toLowerCase().includes(region.toLowerCase().slice(0, 3)));
			const base = movementRisk * (.6 + w);
			return {
				region,
				value: clamp(covered ? base * .7 : base)
			};
		});
	}, [movementRisk, attachments]);
	const accessoryRisks = (0, import_react.useMemo)(() => accessories.map((a) => {
		let p = 18 + (a.small ? 22 : 8);
		if (!a.secured) p += 28;
		if (a.secured) p -= 6;
		return {
			name: a.name,
			value: clamp(p)
		};
	}), [accessories]);
	const confidence = (0, import_react.useMemo)(() => clamp(70 + attachmentCoverage * .12 + securedCount * 1.6 + sc.conf), [
		attachmentCoverage,
		securedCount,
		sc.conf
	]);
	const timeline = (0, import_react.useMemo)(() => {
		const assembly = clamp(100 - movementRisk * .1 - accessoryLoss * .05);
		const warehouse = clamp(100 - accessoryLoss * .3 - movementRisk * .08);
		const transport = clamp(dropScore - (sc.dr < 1 ? 6 : 0));
		const shelf = clamp(100 - accessoryLoss * .55 - unsecuredSmall * 4);
		return [
			{
				stage: "Assembly",
				icon: Factory,
				value: assembly,
				reason: assembly < 80 ? "Operator handling stresses unsecured arms" : "Within line-tolerance"
			},
			{
				stage: "Warehouse",
				icon: Warehouse,
				value: warehouse,
				reason: warehouse < 80 ? "Stack pressure shifts loose accessories" : "Stable under 3-pallet stack"
			},
			{
				stage: "Transport",
				icon: Truck,
				value: transport,
				reason: transport < 75 ? "Vibration + 1.2m drop axis exceeds attachment hold" : "Survives ISTA 1A profile"
			},
			{
				stage: "Shelf",
				icon: Store,
				value: shelf,
				reason: shelf < 80 ? `${unsecuredSmall} small part(s) prone to consumer tampering` : "Retail-ready"
			}
		];
	}, [
		movementRisk,
		accessoryLoss,
		dropScore,
		unsecuredSmall,
		sc.dr
	]);
	const failureZones = (0, import_react.useMemo)(() => {
		const zones = [];
		const regionMap = {
			Head: "Hair displacement & face-paint scuff under lateral inertia",
			Arms: "Articulation breakage at shoulder joint on drop axis",
			Legs: "Knee-joint loosening from repeated vibration",
			Waist: "Torso shift against blister cradle"
		};
		for (const r of Object.keys(REGION_WEIGHTS)) {
			const w = REGION_WEIGHTS[r];
			const covered = attachments.some((a) => a.region.toLowerCase().includes(r.toLowerCase().slice(0, 3)));
			const sev = clamp(movementRisk * (.6 + w) * (covered ? .7 : 1));
			if (sev > 45) zones.push({
				region: r,
				reason: regionMap[r],
				severity: sev
			});
		}
		accessories.filter((a) => !a.secured).forEach((a) => zones.push({
			region: a.name,
			reason: a.small ? "Sub-5g part — escapes blister window under vibration" : "Unrestrained mass strikes adjacent components",
			severity: clamp(40 + (a.small ? 25 : 10) + accessoryLoss * .3)
		}));
		return zones.sort((a, b) => b.severity - a.severity).slice(0, 5);
	}, [
		movementRisk,
		accessories,
		attachments,
		accessoryLoss
	]);
	const optimized = (0, import_react.useMemo)(() => {
		const optCoverage = clamp(attachmentCoverage + 15);
		const optSupport = Math.min(10, product.support + 2);
		const mv = clamp((.5 * product.complexity - .2 * optSupport * 10 - .3 * optCoverage + 35) * sc.mv);
		const ac = clamp((20 - 10 * accessories.length + 25) * sc.ac);
		const ps = clamp(100 - .45 * product.complexity + 6 * optSupport + .25 * optCoverage);
		return {
			mv,
			ac,
			ps,
			dr: clamp((100 - mv * .4 - ac * .2 + ps * .3) * sc.dr)
		};
	}, [
		product,
		attachments,
		accessories,
		attachmentCoverage,
		sc
	]);
	const confFactors = (0, import_react.useMemo)(() => [
		{
			label: "Attachment coverage",
			delta: +round(attachmentCoverage * .12),
			good: true
		},
		{
			label: "Secured accessories",
			delta: +round(securedCount * 1.6),
			good: true
		},
		{
			label: "Scenario adjustment",
			delta: sc.conf,
			good: sc.conf >= 0
		},
		{
			label: "Unsecured small parts",
			delta: -unsecuredSmall * 2,
			good: unsecuredSmall === 0
		},
		{
			label: "Model baseline (v2.4)",
			delta: 70,
			good: true
		}
	], [
		attachmentCoverage,
		securedCount,
		sc.conf,
		unsecuredSmall
	]);
	const confidenceBreakdown = (0, import_react.useMemo)(() => {
		const missingVars = unsecuredSmall + (attachmentCoverage < 70 ? 1 : 0);
		const literatureCoverage = clamp(ruleEngineStatus.ruleCoverage - 2 + securedCount);
		return [
			{
				label: "Model Confidence",
				value: Math.round(confidence),
				suffix: "%",
				tone: "good"
			},
			{
				label: "Rule Coverage",
				value: ruleEngineStatus.ruleCoverage,
				suffix: "%",
				tone: "good"
			},
			{
				label: "Literature Coverage",
				value: Math.round(literatureCoverage),
				suffix: "%",
				tone: "good"
			},
			{
				label: "Missing Variables",
				value: missingVars,
				suffix: "",
				tone: missingVars === 0 ? "good" : "warn"
			}
		];
	}, [
		confidence,
		ruleEngineStatus.ruleCoverage,
		unsecuredSmall,
		attachmentCoverage,
		securedCount
	]);
	const primaryCauses = (0, import_react.useMemo)(() => {
		return {
			mv: attachmentCoverage < 70 ? "Large Internal Clearance" : product.support < 4 ? "Insufficient Support Points" : "High Product Complexity",
			ac: unsecuredSmall > 1 ? "Low Attachment Coverage" : unsecuredSmall === 1 ? "Sub-5g Part Unsecured" : "Blister Window Tolerance",
			ps: product.support < 4 ? "Insufficient Support Points" : "CoG Offset vs Cradle Axis",
			dr: movementRisk > 55 ? "High CoG Offset" : accessoryLoss > 50 ? "Accessory Mass Displacement" : "Cushion Thickness Margin"
		};
	}, [
		attachmentCoverage,
		product.support,
		unsecuredSmall,
		movementRisk,
		accessoryLoss
	]);
	const improvementSuggestions = (0, import_react.useMemo)(() => [
		{
			icon: TrendingDown,
			title: "Add EVA strap on left arm",
			detail: "Increases attachment coverage on the head/arms cluster by 18%.",
			benefits: [
				{
					label: "Movement Risk",
					value: `-${round(movementRisk * .34)}`,
					positive: true
				},
				{
					label: "Drop Survival",
					value: `+${round((100 - dropScore) * .18)}`,
					positive: true
				},
				{
					label: "Packaging Cost",
					value: "+$0.08",
					positive: false
				},
				{
					label: "Sustainability",
					value: "-4% material",
					positive: true
				}
			]
		},
		{
			icon: ShieldCheck,
			title: "Secure Crown with micro-clip",
			detail: "Locks the lightest unsecured part; eliminates dominant loss vector.",
			benefits: [
				{
					label: "Accessory Loss",
					value: `-${round(accessoryLoss * .42)}%`,
					positive: true
				},
				{
					label: "Drop Survival",
					value: `+${round((100 - dropScore) * .09)}`,
					positive: true
				},
				{
					label: "Packaging Cost",
					value: "+$0.03",
					positive: false
				},
				{
					label: "Sustainability",
					value: "±0% material",
					positive: true
				}
			]
		},
		{
			icon: CircleCheck,
			title: "Switch waist PET to molded cradle",
			detail: "Distributes shock across torso; improves pose stability under 1.2 m drop.",
			benefits: [
				{
					label: "Movement Risk",
					value: `-${round(movementRisk * .22)}`,
					positive: true
				},
				{
					label: "Drop Survival",
					value: `+${round((100 - dropScore) * .22)}`,
					positive: true
				},
				{
					label: "Packaging Cost",
					value: "+$0.12",
					positive: false
				},
				{
					label: "Sustainability",
					value: "-6% material",
					positive: true
				}
			]
		}
	], [
		movementRisk,
		accessoryLoss,
		dropScore
	]);
	const toggleSecured = (name) => setAccessories((arr) => arr.map((a) => a.name === name ? {
		...a,
		secured: !a.secured
	} : a));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-full text-foreground pb-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto w-full max-w-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mb-8 flex flex-wrap items-end justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[12px] font-medium uppercase tracking-[0.18em] text-[color:var(--pink)]",
								children: "Module 04 / Risk Assessment"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-1 text-[34px] font-semibold leading-tight tracking-tight",
								children: "Predicting in-pack movement, accessory loss & drop survival."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-2xl text-[14px] text-muted-foreground",
								children: "Deterministic risk inference for the current attachment plan. Adjust inputs to see the explainable model recompute every score live."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setConfOpen(true),
									className: "group flex items-center gap-3 text-left transition hover:opacity-90",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-10 w-10 place-items-center rounded-full bg-[color:var(--pink-soft)] transition group-hover:scale-105",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-5 w-5 text-[color:var(--pink)]" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1 text-[11px] uppercase tracking-wider text-muted-foreground",
										children: ["Model confidence ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "h-3 w-3" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-lg font-semibold tabular-nums transition-all",
										children: [Math.round(confidence), "%"]
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ml-2 h-10 w-px bg-border" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[11px] uppercase tracking-wider text-muted-foreground",
									children: "Run"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm font-medium",
									children: "#PW-2418"
								})] })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-12 gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
							className: "col-span-12 space-y-6 lg:col-span-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
									className: "rounded-2xl border-border shadow-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
										className: "pb-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
											className: "text-[13px] font-semibold uppercase tracking-wider text-muted-foreground",
											children: "Product"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
										className: "space-y-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												className: "text-xs text-muted-foreground",
												children: "Name"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: product.name,
												onChange: (e) => setProduct({
													...product,
													name: e.target.value
												}),
												className: "mt-1 h-9"
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												className: "text-xs text-muted-foreground",
												children: "Category"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: product.category,
												onChange: (e) => setProduct({
													...product,
													category: e.target.value
												}),
												className: "mt-1 h-9"
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mb-1.5 flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
													className: "text-xs text-muted-foreground",
													children: "Complexity Score"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs font-semibold",
													children: product.complexity
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
												value: [product.complexity],
												onValueChange: (v) => setProduct({
													...product,
													complexity: v[0]
												}),
												max: 100,
												step: 1
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mb-1.5 flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
													className: "text-xs text-muted-foreground",
													children: "Support Points"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs font-semibold",
													children: product.support
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
												value: [product.support],
												onValueChange: (v) => setProduct({
													...product,
													support: v[0]
												}),
												max: 10,
												step: 1
											})] })
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
									className: "rounded-2xl border-border shadow-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
										className: "pb-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
											className: "text-[13px] font-semibold uppercase tracking-wider text-muted-foreground",
											children: "Accessories"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
										className: "space-y-2",
										children: accessories.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "flex cursor-pointer items-center justify-between rounded-lg border border-border bg-card px-3 py-2 text-sm transition hover:border-[color:var(--pink)]/40",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
													checked: a.secured,
													onCheckedChange: () => toggleSecured(a.name)
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-medium",
													children: a.name
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: ["text-[10.5px] font-semibold uppercase tracking-wider", a.secured ? "text-emerald-600" : "text-rose-600"].join(" "),
												children: a.secured ? "Secured" : "Loose"
											})]
										}, a.name))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
									className: "rounded-2xl border-border shadow-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
										className: "pb-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
											className: "text-[13px] font-semibold uppercase tracking-wider text-muted-foreground",
											children: "Attachment Plan"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
										className: "space-y-2",
										children: attachments.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between rounded-lg bg-[color:var(--pink-soft)]/50 px-3 py-2 text-sm",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-semibold",
												children: a.region
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[11px] text-muted-foreground",
												children: a.type
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-right",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-[11px] text-muted-foreground",
													children: "Coverage"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-sm font-semibold text-[color:var(--pink)]",
													children: [a.coverage, "%"]
												})]
											})]
										}, a.region))
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "col-span-12 space-y-6 lg:col-span-9",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-1 gap-6 xl:grid-cols-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
										className: "rounded-2xl border-border shadow-sm xl:col-span-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
											className: "pb-2",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "h-4 w-4 text-[color:var(--pink)]" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
														className: "text-[15px] font-semibold tracking-tight",
														children: "Packaging Configuration"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
														className: "ml-auto bg-muted text-muted-foreground",
														children: ["ISTA ", packagingConfig.istaLevel]
													})
												]
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid grid-cols-2 gap-x-6 gap-y-3 md:grid-cols-3 lg:grid-cols-4",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfigField, {
													label: "Method",
													value: packagingConfig.method
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfigField, {
													label: "Type",
													value: packagingConfig.type
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfigField, {
													label: "Attachment",
													value: packagingConfig.attachment
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfigField, {
													label: "Support Pts",
													value: String(packagingConfig.supportPoints)
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfigField, {
													label: "Cushion",
													value: packagingConfig.cushionMaterial
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfigField, {
													label: "Thickness",
													value: packagingConfig.cushionThickness
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfigField, {
													label: "Weight",
													value: packagingConfig.weight
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfigField, {
													label: "CoG",
													value: packagingConfig.centerOfGravity
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfigField, {
													label: "Clearance",
													value: packagingConfig.clearance
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfigField, {
													label: "Design",
													value: packagingConfig.designMethod
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfigField, {
													label: "ISTA",
													value: packagingConfig.istaLevel
												})
											]
										}) })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
										className: "rounded-2xl border-border shadow-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
											className: "pb-2",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Database, { className: "h-4 w-4 text-[color:var(--pink)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
													className: "text-[15px] font-semibold tracking-tight",
													children: "Knowledge Base Status"
												})]
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid grid-cols-2 gap-3",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KbStat, {
													label: "Literature Papers",
													value: ruleEngineStatus.literaturePapers
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KbStat, {
													label: "Engineering Rules",
													value: ruleEngineStatus.engineeringRules
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KbStat, {
													label: "Active Triggered",
													value: ruleEngineStatus.activeRulesTriggered
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KbStat, {
													label: "Rule Coverage",
													value: `${ruleEngineStatus.ruleCoverage}%`
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-3 h-1.5 overflow-hidden rounded-full bg-muted",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "h-full rounded-full transition-all",
												style: {
													width: `${ruleEngineStatus.ruleCoverage}%`,
													backgroundColor: "#d946ef"
												}
											})
										})] })]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
									className: "rounded-2xl border-border shadow-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
										className: "pb-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "h-4 w-4 text-[color:var(--pink)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
													className: "text-[15px] font-semibold tracking-tight",
													children: "Engineering Test Scenario"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
												className: "bg-[color:var(--pink-soft)] text-[color:var(--pink)]",
												children: "Live recompute"
											})]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-2 gap-3 md:grid-cols-4",
										children: Object.keys(SCENARIOS).map((k) => {
											const s = SCENARIOS[k];
											const Icon = s.icon;
											const active = scenario === k;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												onClick: () => setScenario(k),
												className: ["group rounded-xl border p-3 text-left transition-all duration-300", active ? "border-[color:var(--pink)] bg-[color:var(--pink-soft)]/60 shadow-md scale-[1.02]" : "border-border bg-card hover:border-[color:var(--pink)]/40 hover:shadow-sm"].join(" "),
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center gap-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: ["grid h-8 w-8 place-items-center rounded-lg transition", active ? "text-white" : "bg-muted text-foreground"].join(" "),
															style: active ? { backgroundColor: "#d946ef" } : void 0,
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "text-[13px] font-semibold tracking-tight",
															children: s.label
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "mt-2 text-[11.5px] text-muted-foreground",
														children: s.sub
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "mt-3 space-y-1 border-t border-border/60 pt-2 text-[11px]",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScenarioCondRow, {
																k: "Drop",
																v: s.conditions.dropHeight
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScenarioCondRow, {
																k: "Trans",
																v: s.conditions.transport
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScenarioCondRow, {
																k: "Vib",
																v: s.conditions.vibration
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScenarioCondRow, {
																k: "Comp",
																v: s.conditions.compression
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScenarioCondRow, {
																k: "Temp",
																v: s.conditions.temperature
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScenarioCondRow, {
																k: "RH",
																v: s.conditions.humidity
															})
														]
													})
												]
											}, k);
										})
									}) })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
											label: "Movement Risk",
											value: movementRisk,
											suffix: "",
											tone: level(movementRisk),
											hint: "Inertial drift score",
											primaryCause: primaryCauses.mv
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
											label: "Accessory Loss Risk",
											value: accessoryLoss,
											suffix: "%",
											tone: level(accessoryLoss),
											hint: "Loss probability index",
											primaryCause: primaryCauses.ac
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
											label: "Pose Stability",
											value: poseStability,
											suffix: "",
											tone: level(100 - poseStability),
											hint: "Articulation hold",
											primaryCause: primaryCauses.ps
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
											label: "Drop-Test Prediction",
											value: dropScore,
											suffix: "/100",
											tone: dropLevel(dropScore),
											hint: "Survival score",
											primaryCause: primaryCauses.dr,
											highlight: true
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
									className: "rounded-2xl border-border shadow-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
										className: "pb-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-4 w-4 text-[color:var(--pink)]" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
													className: "text-[15px] font-semibold tracking-tight",
													children: "Triggered Engineering Rules"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
													className: "ml-auto bg-muted text-muted-foreground",
													children: [engineeringRules.filter((r) => r.status === "Triggered").length, " active"]
												})
											]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "overflow-hidden rounded-xl border border-border",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
											className: "w-full text-sm",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
												className: "bg-muted/50 text-[11px] uppercase tracking-wider text-muted-foreground",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "px-4 py-2 text-left font-medium",
														children: "Rule ID"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "px-4 py-2 text-left font-medium",
														children: "Evidence"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "px-4 py-2 text-left font-medium",
														children: "Engineering Rule"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "px-4 py-2 text-right font-medium",
														children: "Status"
													})
												] })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: engineeringRules.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
												className: "border-t border-border",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "px-4 py-3 font-semibold text-[color:var(--pink)]",
														children: r.id
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "px-4 py-3 font-mono text-[12px] text-muted-foreground",
														children: r.evidenceId
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "px-4 py-3",
														children: r.rule
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "px-4 py-3 text-right",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RuleStatusBadge, { status: r.status })
													})
												]
											}, r.id)) })]
										})
									}) })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
									className: "rounded-2xl border-border shadow-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
										className: "pb-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "h-4 w-4 text-[color:var(--pink)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
													className: "text-[15px] font-semibold tracking-tight",
													children: "Packaging Lifecycle Survival"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
												className: "bg-muted text-muted-foreground",
												children: sc.label
											})]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "relative grid grid-cols-1 gap-4 md:grid-cols-4",
										children: timeline.map((t, i) => {
											const Icon = t.icon;
											const lv = dropLevel(t.value);
											const failureMode = FAILURE_MODES[t.stage];
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative",
												children: [i < timeline.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute right-[-12px] top-6 hidden h-px w-6 bg-border md:block" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "rounded-xl border border-border bg-card p-4",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center justify-between",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex items-center gap-2",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																	className: "grid h-8 w-8 place-items-center rounded-lg bg-[color:var(--pink-soft)]",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 text-[color:var(--pink)]" })
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																	className: "text-[13px] font-semibold tracking-tight",
																	children: t.stage
																})]
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: `rounded-full px-2 py-0.5 text-[10px] font-semibold ${lv.tone}`,
																children: lv.label
															})]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "mt-3 flex items-baseline gap-1",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "text-2xl font-semibold tabular-nums transition-all duration-500",
																children: round(t.value)
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "text-xs text-muted-foreground",
																children: "% survival"
															})]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "mt-2 h-2 overflow-hidden rounded-full bg-muted",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "h-full rounded-full transition-all duration-500 ease-out",
																style: {
																	width: `${t.value}%`,
																	backgroundColor: "#d946ef"
																}
															})
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "mt-2 space-y-1 text-[11.5px] leading-snug",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
																className: "text-muted-foreground",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "font-medium text-foreground",
																	children: "Reason: "
																}), t.reason]
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
																className: "text-muted-foreground",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "font-medium text-foreground",
																	children: "Failure Mode: "
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "text-[color:var(--pink)] font-medium",
																	children: failureMode
																})]
															})]
														})
													]
												})]
											}, t.stage);
										})
									}) })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-1 gap-6 xl:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
										className: "rounded-2xl border-border shadow-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
											className: "pb-2",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
													className: "text-[15px] font-semibold tracking-tight",
													children: "Movement Risk by Body Region"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
													className: "bg-muted text-muted-foreground",
													children: "Inertial model"
												})]
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
											className: "space-y-4 pt-2",
											children: regionRisks.map((r) => {
												const lv = level(r.value);
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "mb-1.5 flex items-center justify-between text-sm",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-medium",
														children: r.region
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center gap-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "tabular-nums text-muted-foreground",
															children: round(r.value)
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: `rounded-full px-2 py-0.5 text-[10px] font-semibold ${lv.tone}`,
															children: lv.label
														})]
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "h-2 overflow-hidden rounded-full bg-muted",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "h-full rounded-full transition-all",
														style: {
															width: `${r.value}%`,
															backgroundColor: "#d946ef"
														}
													})
												})] }, r.region);
											})
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
										className: "rounded-2xl border-border shadow-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
											className: "pb-2",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
													className: "text-[15px] font-semibold tracking-tight",
													children: "Accessory Loss Probability"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
													className: "bg-muted text-muted-foreground",
													children: [accessories.length, " parts"]
												})]
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
											className: "space-y-4 pt-2",
											children: accessoryRisks.map((a) => {
												const lv = level(a.value);
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "mb-1.5 flex items-center justify-between text-sm",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-medium",
														children: a.name
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center gap-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "tabular-nums text-muted-foreground",
															children: [round(a.value), "%"]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: `rounded-full px-2 py-0.5 text-[10px] font-semibold ${lv.tone}`,
															children: lv.label
														})]
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "h-2 overflow-hidden rounded-full bg-muted",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "h-full rounded-full",
														style: {
															width: `${a.value}%`,
															backgroundColor: "#d946ef"
														}
													})
												})] }, a.name);
											})
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
									className: "rounded-2xl border-border shadow-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
										className: "pb-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-wrap items-center justify-between gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
												className: "text-[15px] font-semibold tracking-tight",
												children: "Drop-Test Comparison"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-0.5 text-[12px] text-muted-foreground",
												children: "Survival score across alternative attachment plans (higher is better)."
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
												className: "bg-[color:var(--pink-soft)] text-[color:var(--pink)]",
												children: "ISTA 1A simulation"
											})]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-4 items-end gap-6 px-2 pt-6",
										children: [
											{
												label: "Current Plan",
												v: dropScore,
												active: true
											},
											{
												label: "Alt Plan A",
												v: altA
											},
											{
												label: "Alt Plan B",
												v: altB
											},
											{
												label: "No Attachment",
												v: noAttach
											}
										].map((c) => {
											const lv = dropLevel(c.v);
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col items-center gap-2",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-sm font-semibold tabular-nums",
														children: round(c.v)
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "relative flex h-48 w-full max-w-[88px] items-end overflow-hidden rounded-xl bg-muted",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "w-full rounded-xl transition-all",
															style: {
																height: `${c.v}%`,
																backgroundColor: c.active ? "#d946ef" : "#cbd5e1"
															}
														})
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "text-center",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: `text-[12px] font-medium ${c.active ? "text-[color:var(--pink)]" : "text-foreground"}`,
															children: c.label
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: `mt-1 inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold ${lv.tone}`,
															children: lv.label
														})]
													})
												]
											}, c.label);
										})
									}) })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
									className: "rounded-2xl border-border shadow-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
										className: "pb-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-4 w-4 text-[color:var(--pink)]" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
													className: "text-[15px] font-semibold tracking-tight",
													children: "Critical Failure Zones"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
													className: "ml-auto bg-muted text-muted-foreground",
													children: [failureZones.length, " detected"]
												})
											]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: failureZones.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "rounded-xl border border-dashed border-border p-6 text-center text-sm text-muted-foreground",
										children: "No critical zones above threshold for this scenario."
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "overflow-hidden rounded-xl border border-border",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
											className: "w-full text-sm",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
												className: "bg-muted/50 text-[11px] uppercase tracking-wider text-muted-foreground",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "px-4 py-2 text-left font-medium",
														children: "Body Region / Part"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "px-4 py-2 text-left font-medium",
														children: "Failure Reason"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "px-4 py-2 text-left font-medium",
														children: "Evidence"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "px-4 py-2 text-left font-medium",
														children: "Suggested Rule"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "px-4 py-2 text-right font-medium",
														children: "Severity"
													})
												] })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: failureZones.map((z) => {
												const lv = level(z.severity);
												const ev = evidenceFor(z.region);
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
													className: "border-t border-border",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
															className: "px-4 py-3 font-semibold",
															children: z.region
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
															className: "px-4 py-3 text-muted-foreground",
															children: z.reason
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
															className: "px-4 py-3 font-mono text-[12px] text-[color:var(--pink)]",
															children: ev.evidenceId
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
															className: "px-4 py-3 text-muted-foreground",
															children: ev.suggestedRule
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
															className: "px-4 py-3 text-right",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "inline-flex items-center gap-2",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "tabular-nums",
																	children: round(z.severity)
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: `rounded-full px-2 py-0.5 text-[10px] font-semibold ${lv.tone}`,
																	children: lv.label
																})]
															})
														})
													]
												}, z.region);
											}) })]
										})
									}) })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
									className: "rounded-2xl border-border shadow-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
										className: "pb-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WandSparkles, { className: "h-4 w-4 text-[color:var(--pink)]" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
													className: "text-[15px] font-semibold tracking-tight",
													children: "Engineering Explanation"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
													className: "ml-auto bg-muted text-muted-foreground",
													children: "Rule Engine · v2.4"
												})
											]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-1 gap-4 md:grid-cols-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Explain, {
												title: "Movement risk increases because",
												points: [
													`Internal clearance ${packagingConfig.clearance} exceeds recommended 5 mm limit`,
													`Support points only restrain ${Math.round(product.support * 12 + 30)}% of product mass`,
													`CoG offset ${packagingConfig.centerOfGravity} generates rotational moment`,
													`Attachment coverage at ${Math.round(attachmentCoverage)}% leaves head & arms partly free`
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Explain, {
												title: "Accessory loss occurs because",
												points: [
													`${unsecuredSmall} sub-5 g part(s) below vibration retention threshold`,
													`Blister window tolerance exceeds accessory footprint by 1.8 mm`,
													`${securedCount} restrained part(s) verified against R118 threshold`,
													`Cushion ${packagingConfig.cushionMaterial} ${packagingConfig.cushionThickness} damps only mid-band vibration`
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Explain, {
												title: "Drop survival is limited by",
												points: [
													`Movement contribution: −${round(movementRisk * .4)} pts (R-CL-003, R-CG-005)`,
													`Accessory displacement: −${round(accessoryLoss * .2)} pts (R118)`,
													`Pose stability recovery: +${round(poseStability * .3)} pts`,
													`Scenario ${sc.label} drop height ${sc.conditions.dropHeight} applies factor ×${sc.dr}`
												]
											})
										]
									}) })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
									className: "rounded-2xl border-border shadow-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
										className: "pb-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-[color:var(--pink)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
												className: "text-[15px] font-semibold tracking-tight",
												children: "Engineering Improvement Suggestions"
											})]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid grid-cols-1 gap-4 md:grid-cols-3",
											children: improvementSuggestions.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Suggestion, {
												icon: s.icon,
												title: s.title,
												detail: s.detail,
												benefits: s.benefits
											}, s.title))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-6" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-wrap items-center justify-between gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "grid h-10 w-10 place-items-center rounded-full bg-[color:var(--pink-soft)]",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-5 w-5 text-[color:var(--pink)]" })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-sm font-semibold",
													children: [
														"Confidence ",
														Math.round(confidence),
														"% · ",
														dropLevel(dropScore).label,
														" drop-failure risk"
													]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-[12px] text-muted-foreground",
													children: [
														"Based on ",
														accessories.length,
														" accessories, ",
														attachments.length,
														" attachments, complexity ",
														product.complexity,
														"."
													]
												})] })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												size: "lg",
												className: "h-11 rounded-full px-6 text-white shadow-md hover:opacity-95",
												style: { backgroundColor: "#d946ef" },
												children: ["Review Cost & Sustainability", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-6" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-wrap items-center justify-between gap-4 rounded-xl border border-dashed border-[color:var(--pink)]/40 bg-[color:var(--pink-soft)]/30 p-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "grid h-10 w-10 place-items-center rounded-full bg-white shadow-sm",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wrench, { className: "h-5 w-5 text-[color:var(--pink)]" })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-sm font-semibold",
													children: "What-if Optimization"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-[12px] text-muted-foreground",
													children: "Secure all parts, +15% coverage, +2 support points."
												})] })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												variant: "outline",
												onClick: () => setOptOpen(true),
												className: "h-10 rounded-full border-[color:var(--pink)]/40 px-5 text-[color:var(--pink)] hover:bg-[color:var(--pink-soft)]",
												children: ["Try Optimization", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "ml-2 h-4 w-4" })]
											})]
										})
									] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
									className: "rounded-2xl border-border shadow-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => setTraceOpen((v) => !v),
										className: "flex w-full items-center gap-2 px-6 py-4 text-left",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitBranch, { className: "h-4 w-4 text-[color:var(--pink)]" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[15px] font-semibold tracking-tight",
												children: "Decision Trace"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
												className: "ml-2 bg-muted text-muted-foreground",
												children: "Literature → Recommendation"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `ml-auto h-4 w-4 text-muted-foreground transition-transform ${traceOpen ? "rotate-180" : ""}` })
										]
									}), traceOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
										className: "pt-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid grid-cols-1 gap-3 md:grid-cols-6",
											children: decisionTrace.map((s, i) => {
												const Icon = s.icon;
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "relative",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "rounded-xl border border-border bg-card p-3",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex items-center gap-2",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																	className: "grid h-7 w-7 place-items-center rounded-md bg-[color:var(--pink-soft)]",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3.5 w-3.5 text-[color:var(--pink)]" })
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "text-[10px] font-semibold uppercase tracking-wider text-muted-foreground",
																	children: s.stage
																})]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "mt-2 text-[12.5px] font-semibold leading-tight",
																children: s.label
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "mt-1 text-[11px] leading-snug text-muted-foreground",
																children: s.detail
															})
														]
													}), i < decisionTrace.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute right-[-10px] top-1/2 hidden h-px w-4 -translate-y-1/2 bg-border md:block" })]
												}, s.stage);
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-3 rounded-lg bg-[color:var(--pink-soft)]/40 p-3 text-[12px] text-muted-foreground",
											children: "Every prediction on this page is traceable back to a literature source through the Rule Prediction Knowledge Base (RPKB)."
										})]
									})]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
						className: "mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6 text-[12px] text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "PackWise AI · Risk inference engine v2.4 · Deterministic mode" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-emerald-500" }), " LOW"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-amber-500" }), " MEDIUM"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-rose-500" }), " HIGH"]
								})
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: confOpen,
				onOpenChange: setConfOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-5 w-5 text-[color:var(--pink)]" }),
							"Confidence Explainability — ",
							Math.round(confidence),
							"%"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [
						"Deterministic factors contributing to the model's confidence under",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-foreground",
							children: sc.label
						}),
						"."
					] })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 grid grid-cols-2 gap-2",
						children: confidenceBreakdown.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-border bg-card px-3 py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] font-medium uppercase tracking-wider text-muted-foreground",
								children: b.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `mt-1 text-lg font-semibold tabular-nums ${b.tone === "warn" ? "text-amber-600" : "text-foreground"}`,
								children: [b.value, b.suffix]
							})]
						}, b.label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-3" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 space-y-2",
						children: confFactors.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between rounded-lg border border-border bg-card px-3 py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-2 w-2 rounded-full ${f.good ? "bg-emerald-500" : "bg-rose-500"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm",
									children: f.label
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: `text-sm font-semibold tabular-nums ${f.delta >= 0 ? "text-emerald-600" : "text-rose-600"}`,
								children: [f.delta >= 0 ? "+" : "", f.delta]
							})]
						}, f.label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 rounded-lg bg-[color:var(--pink-soft)]/50 p-3 text-[12px] text-muted-foreground",
						children: "Sum is clamped to 0–100. Confidence reflects input completeness, not predicted outcome."
					})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: optOpen,
				onOpenChange: setOptOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "sm:max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wrench, { className: "h-5 w-5 text-[color:var(--pink)]" }), "What-if Optimization"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Engineering deltas if all accessories are secured, coverage +15%, support +2." })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 grid grid-cols-1 gap-3 md:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeforeAfter, {
									label: "Movement Risk",
									before: movementRisk,
									after: optimized.mv,
									invert: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeforeAfter, {
									label: "Accessory Loss",
									before: accessoryLoss,
									after: optimized.ac,
									invert: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeforeAfter, {
									label: "Pose Stability",
									before: poseStability,
									after: optimized.ps
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeforeAfter, {
									label: "Drop Survival",
									before: dropScore,
									after: optimized.dr
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex items-center justify-between rounded-lg border border-[color:var(--pink)]/30 bg-[color:var(--pink-soft)]/40 p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[12px] text-muted-foreground",
								children: "Net survival uplift"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-lg font-semibold text-[color:var(--pink)] tabular-nums",
								children: [
									"+",
									round(optimized.dr - dropScore),
									" pts"
								]
							})]
						})
					]
				})
			})
		]
	});
}
function MetricCard({ label, value, suffix, tone, hint, highlight, primaryCause }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: ["relative overflow-hidden rounded-2xl border-border shadow-sm", highlight ? "ring-2 ring-[color:var(--pink)]/40" : ""].join(" "),
		children: [highlight && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-25",
			style: { backgroundColor: "#d946ef" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
			className: "p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] font-medium uppercase tracking-wider text-muted-foreground",
						children: label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `rounded-full px-2 py-0.5 text-[10px] font-semibold ${tone.tone}`,
						children: tone.label
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex items-baseline gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[34px] font-semibold tracking-tight tabular-nums",
						children: round(value)
					}), suffix ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-muted-foreground",
						children: suffix
					}) : null]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
					value,
					className: "mt-3 h-1.5 bg-muted [&>[data-slot=progress-indicator]]:bg-[#d946ef]"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-[12px] text-muted-foreground",
					children: hint
				}),
				primaryCause && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 border-t border-border pt-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] font-medium uppercase tracking-wider text-muted-foreground",
						children: "Primary Cause"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-0.5 text-[12px] font-medium text-[color:var(--pink)]",
						children: primaryCause
					})]
				})
			]
		})]
	});
}
function Explain({ title, points }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-card p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-2 text-[13px] font-semibold tracking-tight",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-1.5 text-[12.5px] text-muted-foreground",
			children: points.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--pink)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p })]
			}, i))
		})]
	});
}
function Suggestion({ icon: Icon, title, detail, benefits }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group rounded-xl border border-border bg-card p-4 transition hover:border-[color:var(--pink)]/40 hover:shadow-md",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center gap-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-8 w-8 place-items-center rounded-lg bg-[color:var(--pink-soft)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 text-[color:var(--pink)]" })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 text-[13.5px] font-semibold tracking-tight",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-[12.5px] leading-relaxed text-muted-foreground",
				children: detail
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 space-y-1 rounded-lg bg-muted/40 p-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[10px] font-medium uppercase tracking-wider text-muted-foreground",
					children: "Expected Engineering Benefit"
				}), benefits.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between text-[12px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: b.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `font-semibold tabular-nums ${b.positive ? "text-emerald-600" : "text-rose-600"}`,
						children: b.value
					})]
				}, b.label))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex items-center text-[12px] font-medium text-[color:var(--pink)]",
				children: ["Apply suggestion", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 h-3.5 w-3.5 transition group-hover:translate-x-0.5" })]
			})
		]
	});
}
function ConfigField({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-[10px] font-medium uppercase tracking-wider text-muted-foreground",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-0.5 text-[13px] font-medium leading-tight",
		children: value
	})] });
}
function KbStat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-border bg-card p-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[10px] font-medium uppercase tracking-wider text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-0.5 text-lg font-semibold tabular-nums text-[color:var(--pink)]",
			children: value
		})]
	});
}
function ScenarioCondRow({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-muted-foreground",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-medium text-foreground",
			children: v
		})]
	});
}
function RuleStatusBadge({ status }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `rounded-full px-2 py-0.5 text-[10px] font-semibold ${status === "Triggered" ? "bg-rose-50 text-rose-700 ring-1 ring-rose-200" : status === "Monitoring" ? "bg-amber-50 text-amber-700 ring-1 ring-amber-200" : "bg-muted text-muted-foreground"}`,
		children: status
	});
}
function BeforeAfter({ label, before, after, invert }) {
	const delta = round(after - before);
	const improved = invert ? delta < 0 : delta > 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-card p-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[11px] font-medium uppercase tracking-wider text-muted-foreground",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] uppercase tracking-wider text-muted-foreground",
								children: "Before"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-lg font-semibold tabular-nums",
								children: round(before)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 h-1.5 overflow-hidden rounded-full bg-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full bg-muted-foreground/40 transition-all duration-500",
									style: { width: `${before}%` }
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 shrink-0 text-muted-foreground" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] uppercase tracking-wider text-muted-foreground",
								children: "After"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-lg font-semibold tabular-nums text-[color:var(--pink)]",
								children: round(after)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 h-1.5 overflow-hidden rounded-full bg-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full rounded-full transition-all duration-500",
									style: {
										width: `${after}%`,
										backgroundColor: "#d946ef"
									}
								})
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `mt-2 text-right text-[11px] font-semibold ${improved ? "text-emerald-600" : "text-rose-600"}`,
				children: [
					delta > 0 ? "+" : "",
					delta,
					" ",
					improved ? "✓" : ""
				]
			})
		]
	});
}
var WORKFLOW_STEPS = [
	{
		label: "Product Input",
		done: true
	},
	{
		label: "Analysis Results",
		done: true
	},
	{
		label: "Attachment Planner",
		done: true
	},
	{
		label: "Risk Assessment",
		active: true
	},
	{
		label: "Cost & Sustainability",
		done: false
	}
];
function WorkflowBar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center rounded-xl border border-border/70 bg-muted/30 px-4 py-3",
		children: WORKFLOW_STEPS.map((s, i, arr) => {
			const isActive = "active" in s && s.active;
			const isDone = "done" in s && s.done;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold ${isActive ? "bg-primary text-primary-foreground" : isDone ? "bg-[color:var(--success)] text-white" : "bg-muted text-muted-foreground"}`,
						children: isDone ? "✓" : i + 1
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `hidden text-[9px] font-medium sm:block ${isActive ? "text-primary" : isDone ? "text-[color:var(--success)]" : "text-muted-foreground"}`,
						children: s.label
					})]
				}), i < arr.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `mx-1 h-px flex-1 ${isDone ? "bg-[color:var(--success)]" : "bg-border"}` })]
			}, s.label);
		})
	});
}
function RiskAssessmentPage() {
	const navigate = useNavigate();
	const [productName, setProductName] = (0, import_react.useState)("Risk Assessment");
	(0, import_react.useEffect)(() => {
		const a = loadAnalysis();
		if (a?.productName) setProductName(a.productName);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Risk Assessment",
				description: `Predictive movement, accessory loss & drop-test analysis — ${productName}`,
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					size: "sm",
					onClick: () => navigate({ to: "/app/packaging-planner" }),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Back to Planner"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "sm",
					onClick: () => navigate({ to: "/app/cost-analysis" }),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DollarSign, { className: "h-4 w-4" }),
						" Cost & Sustainability ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })
					]
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkflowBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiskAssessmentContent, {})
		]
	});
}
//#endregion
export { RiskAssessmentPage as component };
