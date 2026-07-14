//#region node_modules/.nitro/vite/services/ssr/assets/assembly-engine-Dbp0jpIf.js
/**
* Maps YOLOv8 / COCO keypoint names to human-readable packaging zones.
* Only keypoints with confidence ≥ 0.4 are considered.
*/
var KEYPOINT_ZONE_MAP = {
	nose: {
		zone: "Head",
		bodyRegion: "Head / Hair",
		reason: "Head attachment prevents forward lean during transit"
	},
	left_eye: {
		zone: "Head",
		bodyRegion: "Head / Hair",
		reason: "Facial region — constraint prevents head rotation"
	},
	right_eye: {
		zone: "Head",
		bodyRegion: "Head / Hair",
		reason: "Facial region — constraint prevents head rotation"
	},
	left_ear: {
		zone: "Head",
		bodyRegion: "Head / Hair",
		reason: "Ear-level attachment point for lateral stability"
	},
	right_ear: {
		zone: "Head",
		bodyRegion: "Head / Hair",
		reason: "Ear-level attachment point for lateral stability"
	},
	left_shoulder: {
		zone: "Shoulder",
		bodyRegion: "Torso / Waist",
		reason: "Shoulder node is a primary torso stability point"
	},
	right_shoulder: {
		zone: "Shoulder",
		bodyRegion: "Torso / Waist",
		reason: "Shoulder node is a primary torso stability point"
	},
	left_elbow: {
		zone: "Left Elbow",
		bodyRegion: "Left Arm",
		reason: "Elbow bend creates displacement risk — restraint required"
	},
	right_elbow: {
		zone: "Right Elbow",
		bodyRegion: "Right Arm",
		reason: "Elbow bend creates displacement risk — restraint required"
	},
	left_wrist: {
		zone: "Left Wrist",
		bodyRegion: "Left Arm",
		reason: "Wrist is the highest movement-risk extremity point"
	},
	right_wrist: {
		zone: "Right Wrist",
		bodyRegion: "Right Arm",
		reason: "Wrist is the highest movement-risk extremity point"
	},
	left_hip: {
		zone: "Waist",
		bodyRegion: "Torso / Waist",
		reason: "Hip anchors the centre-of-mass — key stability zone"
	},
	right_hip: {
		zone: "Waist",
		bodyRegion: "Torso / Waist",
		reason: "Hip anchors the centre-of-mass — key stability zone"
	},
	left_knee: {
		zone: "Left Knee",
		bodyRegion: "Left Leg",
		reason: "Knee angle increases leg splay probability"
	},
	right_knee: {
		zone: "Right Knee",
		bodyRegion: "Right Leg",
		reason: "Knee angle increases leg splay probability"
	},
	left_ankle: {
		zone: "Left Ankle",
		bodyRegion: "Left Leg",
		reason: "Ankle / foot point is the lowest extremity anchor"
	},
	right_ankle: {
		zone: "Right Ankle",
		bodyRegion: "Right Leg",
		reason: "Ankle / foot point is the lowest extremity anchor"
	}
};
/** Fallback zones used when no skeleton data is provided */
var DEFAULT_ZONES = [
	{
		zone: "Head / Hair",
		bodyRegion: "Head / Hair",
		keypointSource: "heuristic",
		reason: "Head region always requires elastic or foam restraint to prevent forward lean"
	},
	{
		zone: "Waist",
		bodyRegion: "Torso / Waist",
		keypointSource: "heuristic",
		reason: "Waist is the centre-of-mass anchor — PET or EVA support recommended"
	},
	{
		zone: "Right Wrist",
		bodyRegion: "Right Arm",
		keypointSource: "heuristic",
		reason: "Distal limb extremities carry highest displacement risk"
	},
	{
		zone: "Left Ankle",
		bodyRegion: "Left Leg",
		keypointSource: "heuristic",
		reason: "Ankle zone anchors lower extremity during vertical shipping stress"
	}
];
/**
* Selects the optimal material based on weight and number of zones.
*
* Strategy:
*   ≥ 5 zones or ≥ 300 g  → Blister (complete containment)
*   ≥ 3 zones             → EVA Strap (balance between rigidity & cost)
*   1–2 zones, light      → Elastic Strap or Rubber Band
*   High-weight single    → PET Support
*/
function selectMaterial(weightGrams, zoneCount, complexPose) {
	if (weightGrams >= 400 || zoneCount >= 6) return "Blister";
	if (weightGrams >= 250 || zoneCount >= 4) return "Inner Tray";
	if (complexPose && zoneCount >= 3) return "EVA Strap";
	if (zoneCount >= 3) return "PET Support";
	if (weightGrams >= 150) return "EVA Strap";
	if (weightGrams >= 80) return "Elastic Strap";
	return "Rubber Band";
}
var TIME_RATES = {
	"Rubber Band": { rate: 2.5 },
	"Elastic Strap": { rate: 3 },
	"EVA Strap": { rate: 3.5 },
	"Blister": {
		flat: 15,
		rate: 0
	},
	"Inner Tray": {
		flat: 15,
		rate: 0
	},
	"PET Support": { rate: 3.8 },
	"Cardboard Support": { rate: 3.2 },
	"Fastener": { rate: 4 }
};
/**
* Recommends the minimum number of attachment points needed.
* Blister/tray = 1 (the tray itself), else 1 point per zone minimum.
*/
function recommendPoints(material, zoneCount) {
	if (material === "Blister" || material === "Inner Tray") return 1;
	return zoneCount + ([
		"EVA Strap",
		"PET Support",
		"Fastener"
	].includes(material) ? Math.min(2, Math.floor(zoneCount / 2)) : 0);
}
/**
* Detects overlapping limbs using bounding-box proximity on keypoints.
* If skeleton data is absent, falls back to the poseComplexityScore.
*/
function detectComplexPose(keypoints, poseComplexityScore) {
	if (keypoints && keypoints.length > 0) {
		const get = (name) => keypoints.find((k) => k.name === name);
		const lw = get("left_wrist"), rw = get("right_wrist");
		const lh = get("left_hip"), rh = get("right_hip");
		const le = get("left_elbow"), re = get("right_elbow");
		const lk = get("left_knee"), rk = get("right_knee");
		const proximity = (a, b, threshold = .08) => {
			if (!a || !b) return false;
			if ((a.confidence ?? 1) < .4 || (b.confidence ?? 1) < .4) return false;
			const dx = a.x - b.x, dy = a.y - b.y;
			return Math.sqrt(dx * dx + dy * dy) < threshold;
		};
		if (proximity(lw, rh) || proximity(rw, lh) || proximity(le, lk) || proximity(re, rk)) return true;
	}
	return poseComplexityScore >= 70;
}
/**
* Derives retention zones from skeleton keypoints.
* De-duplicates by bodyRegion (takes only the most-reliable keypoint).
*/
function extractZones(keypoints) {
	if (!keypoints || keypoints.length === 0) return DEFAULT_ZONES;
	const seen = /* @__PURE__ */ new Set();
	const zones = [];
	const sorted = [...keypoints].sort((a, b) => (b.confidence ?? 1) - (a.confidence ?? 1));
	for (const kp of sorted) {
		if ((kp.confidence ?? 1) < .4) continue;
		const mapping = KEYPOINT_ZONE_MAP[kp.name];
		if (!mapping || seen.has(mapping.bodyRegion)) continue;
		seen.add(mapping.bodyRegion);
		zones.push({
			zone: mapping.zone,
			bodyRegion: mapping.bodyRegion,
			keypointSource: kp.name,
			reason: mapping.reason
		});
	}
	return zones.length > 0 ? zones : DEFAULT_ZONES;
}
function runAssemblyEngine(input) {
	const { weightGrams, accessories, skeletonKeypoints, poseComplexityScore = 0 } = input;
	const zones = extractZones(skeletonKeypoints);
	const isComplexPose = detectComplexPose(skeletonKeypoints, poseComplexityScore);
	const material = selectMaterial(weightGrams, zones.length, isComplexPose);
	const attachmentPoints = recommendPoints(material, zones.length);
	const timing = TIME_RATES[material];
	let baseTime;
	if (timing.flat !== void 0) baseTime = timing.flat;
	else baseTime = timing.rate * attachmentPoints;
	const finalTime = parseFloat((baseTime * (isComplexPose ? 1.15 : 1)).toFixed(2));
	const breakdownParts = [];
	if (timing.flat !== void 0) breakdownParts.push(`${material} flat-rate = ${timing.flat}s`);
	else breakdownParts.push(`${material} @ ${timing.rate}s × ${attachmentPoints} points = ${(timing.rate * attachmentPoints).toFixed(1)}s`);
	if (isComplexPose) breakdownParts.push(`Complex pose penalty +15% → ×1.15`);
	breakdownParts.push(`Total = ${finalTime}s`);
	if (accessories.length > 0) breakdownParts.push(`Accessories noted (${accessories.join(", ")}) — add 2–4s/accessory for individual tying if loose`);
	return {
		retention_zones: zones,
		recommended_material: material,
		attachment_points: attachmentPoints,
		assembly_time_seconds: finalTime,
		is_complex_pose: isComplexPose,
		calculation_breakdown: breakdownParts.join(" | ")
	};
}
//#endregion
export { runAssemblyEngine as t };
