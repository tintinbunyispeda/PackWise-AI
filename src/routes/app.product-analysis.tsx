import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useRef, useState } from "react";
import {
  Upload,
  Sparkles,
  CheckCircle2,
  Package,
  Ruler,
  ShieldCheck,
  Zap,
  ChevronRight,
  RotateCcw,
  ImageIcon,
  Layers,
  Star,
  Gem,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/page-header";
import { saveAnalysis, type AnalysisResult } from "@/lib/workflow-store";
import { Progress } from "@/components/ui/progress";

export const Route = createFileRoute("/app/product-analysis")({
  head: () => ({ meta: [{ title: "Product Analysis — PackWise AI" }] }),
  component: ProductAnalysisPage,
});

const CATEGORIES = [
  "Collectible Doll",
  "Fashion Doll",
  "Action Figure",
  "Plush Toy",
  "Board Game",
  "Building Set",
  "Electronic Toy",
  "Other",
];

type Stage = "form" | "analysing" | "results";

function ProductAnalysisPage() {
  const navigate = useNavigate();
  const fileRef = useRef<HTMLInputElement>(null);
  const [stage, setStage] = useState<Stage>("form");
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageDataUrl, setImageDataUrl] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setImageFile(f);
    const reader = new FileReader();
    reader.onload = (ev) => setImageDataUrl(ev.target?.result as string);
    reader.readAsDataURL(f);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const f = e.dataTransfer.files?.[0];
    if (!f || !f.type.startsWith("image/")) return;
    setImageFile(f);
    const reader = new FileReader();
    reader.onload = (ev) => setImageDataUrl(ev.target?.result as string);
    reader.readAsDataURL(f);
  };

  const handleAnalyse = () => {
    if (!productName.trim()) return;
    setStage("analysing");
    setProgress(0);
    // Simulate progressive AI analysis
    const steps = [
      { p: 15, delay: 400 },
      { p: 35, delay: 900 },
      { p: 58, delay: 1400 },
      { p: 74, delay: 1900 },
      { p: 88, delay: 2400 },
      { p: 100, delay: 2900 },
    ];
    steps.forEach(({ p, delay }) => setTimeout(() => setProgress(p), delay));
    setTimeout(() => {
      const r: AnalysisResult = {
        productName: productName.trim(),
        category,
        imageDataUrl,
        productType: category,
        dimensions: "28 × 8 × 5 cm",
        accessories: ["Handbag", "Shoes", "Glasses", "Crown", "Dress Stand"],
        complexityScore: 82,
        packagingCategory: "Premium Window Display Box",
        packagingRequirements: ["Transparent Window", "Shock Protection", "Accessory Compartments", "Foil Stamping"],
        analysedAt: new Date().toISOString(),
      };
      saveAnalysis(r);
      setResult(r);
      setStage("results");
    }, 3200);
  };

  const handleReset = () => {
    setStage("form");
    setProductName("");
    setCategory(CATEGORIES[0]);
    setImageFile(null);
    setImageDataUrl(null);
    setProgress(0);
    setResult(null);
  };

  return (
    <div className="space-y-8">
      <PageHeader
        title="Product Analysis"
        description="Upload your product image and let PackWise AI extract dimensions, accessories, and packaging requirements automatically."
        actions={
          stage === "results" ? (
            <Button variant="outline" size="sm" onClick={handleReset}>
              <RotateCcw className="h-4 w-4" /> New analysis
            </Button>
          ) : (
            <Badge variant="outline" className="border-border/70 font-normal">
              <Sparkles className="mr-1 h-3 w-3 text-primary" /> AI-Powered
            </Badge>
          )
        }
      />

      {stage === "form" && (
        <div className="grid gap-6 lg:grid-cols-5">
          {/* Upload form */}
          <div className="space-y-5 lg:col-span-3">
            <Card className="border-border/70 shadow-none">
              <CardHeader>
                <CardTitle className="text-base">Product Details</CardTitle>
                <CardDescription>Tell us about your product — we'll handle the rest.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="product-name">Product Name</Label>
                  <Input
                    id="product-name"
                    placeholder="e.g. Glamour Doll – Sparkle Edition"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="product-category">Product Category</Label>
                  <select
                    id="product-category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring"
                  >
                    {CATEGORIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/70 shadow-none">
              <CardHeader>
                <CardTitle className="text-base">Product Image</CardTitle>
                <CardDescription>Upload a clear photo — AI will detect dimensions and accessories automatically.</CardDescription>
              </CardHeader>
              <CardContent>
                <div
                  onClick={() => fileRef.current?.click()}
                  onDrop={handleDrop}
                  onDragOver={(e) => e.preventDefault()}
                  className="relative flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-border/70 bg-muted/30 px-6 py-14 text-center transition hover:border-primary/50 hover:bg-[color:var(--primary-soft)]/40"
                >
                  {imageDataUrl ? (
                    <img src={imageDataUrl} alt="Preview" className="max-h-48 rounded-lg object-contain" />
                  ) : (
                    <>
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--primary-soft)] text-primary">
                        <Upload className="h-6 w-6" />
                      </div>
                      <p className="mt-3 text-sm font-medium text-foreground">
                        Drop your image here, or <span className="text-primary underline underline-offset-2">browse</span>
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">PNG, JPG, WEBP up to 10 MB</p>
                    </>
                  )}
                  <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleFile} />
                </div>
                {imageFile && (
                  <p className="mt-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="mr-1 inline h-3.5 w-3.5 text-[color:var(--success)]" />
                    {imageFile.name} ready for analysis
                  </p>
                )}
              </CardContent>
            </Card>

            <Button
              size="lg"
              className="w-full"
              onClick={handleAnalyse}
              disabled={!productName.trim()}
            >
              <Sparkles className="h-4 w-4" />
              Run AI Analysis
            </Button>
          </div>

          {/* Info panel */}
          <div className="space-y-4 lg:col-span-2">
            <Card className="border-border/70 shadow-none bg-[color:var(--primary-soft)]/50">
              <CardHeader>
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <Sparkles className="h-4 w-4" />
                </div>
                <CardTitle className="text-base mt-2">What AI detects</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { icon: Ruler, label: "Estimated Dimensions", desc: "Height, width & depth from image analysis" },
                  { icon: Gem, label: "Accessories", desc: "Handbags, shoes, glasses and other included items" },
                  { icon: Layers, label: "Packaging Complexity", desc: "Score from 0–100 based on product attributes" },
                  { icon: Package, label: "Packaging Category", desc: "Optimal packaging type recommendation" },
                  { icon: ShieldCheck, label: "Protection Requirements", desc: "Shock, window, and structural requirements" },
                ].map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Icon className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground">{label}</p>
                      <p className="text-xs text-muted-foreground">{desc}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-border/70 shadow-none">
              <CardContent className="p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Recent Analyses</p>
                <div className="mt-3 space-y-2">
                  {[
                    { name: "Glamour Doll Ltd. Ed.", score: 94 },
                    { name: "Action Hero Series 7", score: 81 },
                    { name: "Princess Castle Playset", score: 88 },
                  ].map((a) => (
                    <div key={a.name} className="flex items-center justify-between">
                      <p className="text-xs text-foreground">{a.name}</p>
                      <Badge variant="secondary" className="text-[10px]">{a.score}/100</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {stage === "analysing" && (
        <div className="flex min-h-[60vh] flex-col items-center justify-center gap-8">
          <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-[color:var(--primary-soft)]">
            <Sparkles className="h-10 w-10 animate-pulse text-primary" />
            <div className="absolute inset-0 animate-ping rounded-full bg-primary/10" />
          </div>
          <div className="w-full max-w-md space-y-4 text-center">
            <h2 className="text-xl font-semibold">Analysing your product…</h2>
            <p className="text-sm text-muted-foreground">
              PackWise AI is scanning dimensions, detecting accessories, and computing optimal packaging requirements.
            </p>
            <Progress value={progress} className="h-2" />
            <p className="text-xs text-muted-foreground">{progress}% complete</p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {[
              "Detecting product outline",
              "Measuring dimensions",
              "Identifying accessories",
              "Computing complexity",
              "Matching packaging type",
              "Generating recommendations",
            ].map((step, i) => (
              <div
                key={step}
                className={`flex items-center gap-2 rounded-lg border border-border/70 px-3 py-2 text-xs transition ${
                  progress >= (i + 1) * 16
                    ? "border-[color:var(--success)]/40 bg-[color:var(--success)]/5 text-[color:var(--success)]"
                    : "text-muted-foreground"
                }`}
              >
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                {step}
              </div>
            ))}
          </div>
        </div>
      )}

      {stage === "results" && result && (
        <div className="space-y-6">
          {/* Summary row */}
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              { label: "Product Type", value: result.productType, icon: Package, color: "text-primary" },
              { label: "Dimensions", value: result.dimensions, icon: Ruler, color: "text-[color:var(--chart-2)]" },
              { label: "Complexity Score", value: `${result.complexityScore}/100`, icon: Zap, color: "text-[color:var(--warning)]" },
              { label: "Packaging Category", value: result.packagingCategory, icon: Star, color: "text-[color:var(--chart-5)]" },
            ].map(({ label, value, icon: Icon, color }) => (
              <Card key={label} className="border-border/70 shadow-none">
                <CardContent className="p-5">
                  <div className={`flex h-8 w-8 items-center justify-center rounded-md bg-[color:var(--primary-soft)] ${color}`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <p className="mt-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</p>
                  <p className="mt-1 text-lg font-semibold text-foreground">{value}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-5">
            {/* Image preview + accessories */}
            <div className="space-y-4 lg:col-span-2">
              <Card className="border-border/70 shadow-none">
                <CardHeader>
                  <CardTitle className="text-base">Product Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  {imageDataUrl ? (
                    <img src={imageDataUrl} alt={result.productName} className="w-full rounded-lg object-contain max-h-56" />
                  ) : (
                    <div className="flex h-48 items-center justify-center rounded-lg bg-[color:var(--primary-soft)]/40">
                      <div className="text-center">
                        <ImageIcon className="mx-auto h-10 w-10 text-primary/40" />
                        <p className="mt-2 text-xs text-muted-foreground">No image uploaded</p>
                        <p className="text-xs text-muted-foreground">AI analysed from product data</p>
                      </div>
                    </div>
                  )}
                  <div className="mt-4 space-y-1">
                    <p className="text-sm font-semibold">{result.productName}</p>
                    <p className="text-xs text-muted-foreground">{result.category}</p>
                    <p className="text-xs text-muted-foreground">Analysed {new Date(result.analysedAt).toLocaleString()}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/70 shadow-none">
                <CardHeader>
                  <CardTitle className="text-base">Detected Accessories</CardTitle>
                  <CardDescription>{result.accessories.length} items identified</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {result.accessories.map((a) => (
                      <Badge key={a} variant="secondary" className="bg-[color:var(--primary-soft)] text-primary">
                        {a}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Analysis details */}
            <div className="space-y-4 lg:col-span-3">
              <Card className="border-border/70 shadow-none">
                <CardHeader>
                  <CardTitle className="text-base">Packaging Complexity</CardTitle>
                  <CardDescription>AI-computed score based on product geometry, fragility, and accessories.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Overall Score</span>
                      <span className="text-2xl font-semibold text-primary">{result.complexityScore}/100</span>
                    </div>
                    <div className="h-3 w-full rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-[color:var(--chart-5)] transition-all duration-700"
                        style={{ width: `${result.complexityScore}%` }}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">High complexity — requires premium packaging solution</p>
                  </div>

                  {[
                    { label: "Product Geometry", score: 78 },
                    { label: "Accessory Count", score: 90 },
                    { label: "Fragility Index", score: 72 },
                    { label: "Display Requirements", score: 88 },
                  ].map(({ label, score }) => (
                    <div key={label} className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">{label}</span>
                        <span className="font-medium">{score}</span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                        <div
                          className="h-full rounded-full bg-primary/60"
                          style={{ width: `${score}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-border/70 shadow-none">
                <CardHeader>
                  <CardTitle className="text-base">Packaging Requirements</CardTitle>
                  <CardDescription>Mandatory features for this product's packaging.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {result.packagingRequirements.map((req) => (
                      <div
                        key={req}
                        className="flex items-center gap-2 rounded-lg border border-[color:var(--success)]/30 bg-[color:var(--success)]/5 px-3 py-2"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-[color:var(--success)]" />
                        <span className="text-xs font-medium text-foreground">{req}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[color:var(--primary)]/30 bg-[color:var(--primary-soft)]/50 shadow-none">
                <CardContent className="flex items-center justify-between gap-4 p-5">
                  <div>
                    <p className="text-sm font-semibold text-foreground">Ready to generate packaging recommendation?</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      AI will create an optimized packaging plan based on this analysis.
                    </p>
                  </div>
                  <Button
                    size="sm"
                    onClick={() => navigate({ to: "/app/packaging-planner" })}
                    className="shrink-0"
                  >
                    Generate Recommendation <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
