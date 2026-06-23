/**
 * Lightweight client-side store for the PackWise AI workflow.
 * Persists the analysis result so that downstream pages (Packaging Planner,
 * Packaging Preview, Cost & Sustainability) can read it without prop-drilling.
 */

const KEY = "packwise_analysis";

export interface AnalysisResult {
  productName: string;
  category: string;
  imageDataUrl: string | null;
  productType: string;
  dimensions: string;
  accessories: string[];
  complexityScore: number;
  packagingCategory: string;
  packagingRequirements: string[];
  analysedAt: string;
}

export const DEMO_RESULT: AnalysisResult = {
  productName: "Glamour Doll – Sparkle Edition",
  category: "Collectible Doll",
  imageDataUrl: null,
  productType: "Collectible Doll",
  dimensions: "28 × 8 × 5 cm",
  accessories: ["Handbag", "Shoes", "Glasses", "Crown", "Dress Stand"],
  complexityScore: 82,
  packagingCategory: "Premium Window Display Box",
  packagingRequirements: ["Transparent Window", "Shock Protection", "Accessory Compartments", "Foil Stamping"],
  analysedAt: new Date().toISOString(),
};

export function saveAnalysis(result: AnalysisResult) {
  try {
    localStorage.setItem(KEY, JSON.stringify(result));
  } catch {}
}

export function loadAnalysis(): AnalysisResult | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    return JSON.parse(raw) as AnalysisResult;
  } catch {
    return null;
  }
}

export function clearAnalysis() {
  try {
    localStorage.removeItem(KEY);
  } catch {}
}
