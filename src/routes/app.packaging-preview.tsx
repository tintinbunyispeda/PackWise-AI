import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ChevronRight,
  Box,
  Layers,
  Recycle,
  Zap,
  DollarSign,
  ArrowLeft,
  Sparkles,
  Grid3x3,
  Package,
  ShieldCheck,
  TrendingUp,
  Crown,
  Gem,
  Star,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/page-header";
import { loadAnalysis, DEMO_RESULT, type AnalysisResult } from "@/lib/workflow-store";


export const Route = createFileRoute("/app/packaging-preview")({
  head: () => ({ meta: [{ title: "Packaging Preview — PackWise AI" }] }),
  component: PackagingPreviewPage,
});

function PackagingMockup({ accessories }: { accessories: string[] }) {
  return (
    <div className="relative w-full select-none">
      <div className="relative mx-auto max-w-xs">

        {/* Glow backdrop */}
        <div className="absolute -inset-4 rounded-3xl bg-gradient-to-b from-pink-300/30 via-fuchsia-200/20 to-purple-300/20 blur-2xl" />

        {/* Main box card */}
        <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-2 ring-pink-300/60">

          {/* Top branding bar */}
          <div className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 px-4 py-2.5 text-center">
            <p className="text-[11px] font-black uppercase tracking-[0.25em] text-white drop-shadow">
              ✦ PackWise AI ✦
            </p>
            <p className="text-[9px] font-medium tracking-widest text-pink-100/80">
              SPARKLE EDITION — PREMIUM COLLECTIBLE
            </p>
          </div>

          {/* Empty state / placeholder */}
          <div className="relative flex h-64 flex-col items-center justify-center bg-gradient-to-b from-pink-50/50 to-fuchsia-50/50">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-100/50 text-pink-300">
              <Package className="h-8 w-8" />
            </div>
            <p className="mt-4 text-sm font-medium text-pink-900/60">Packaging visual not available</p>
            <p className="mt-1 text-xs text-pink-900/40">3D mockup generation is disabled in demo mode.</p>
          </div>


          {/* Accessory tray */}

          <div className="border-t border-pink-200/60 bg-gradient-to-b from-white to-pink-50 p-3">
            <p className="mb-2 text-center text-[9px] font-bold uppercase tracking-[0.2em] text-fuchsia-500">
              ✦ Accessory Compartments ✦
            </p>
            <div className="flex justify-center gap-1.5">
              {accessories.slice(0, 5).map((a, i) => {
                const colors = [
                  "from-amber-400 to-yellow-500 border-amber-300",
                  "from-fuchsia-400 to-pink-500 border-fuchsia-300",
                  "from-sky-400 to-blue-500 border-sky-300",
                  "from-yellow-300 to-amber-400 border-yellow-200",
                  "from-purple-400 to-fuchsia-500 border-purple-300",
                ];
                const icons = ["👜", "👠", "👓", "👑", "🎀"];
                return (
                  <div
                    key={a}
                    className={`flex flex-col items-center justify-center gap-0.5 rounded-lg border bg-gradient-to-b px-2 py-1.5 text-center shadow-sm ${colors[i]}`}
                  >
                    <span className="text-sm leading-none">{icons[i]}</span>
                    <p className="text-[7px] font-semibold text-white drop-shadow leading-tight">
                      {a.slice(0, 5)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom info bar */}
          <div className="bg-gradient-to-r from-pink-600 via-fuchsia-600 to-purple-700 px-4 py-1.5 text-center">
            <p className="text-[8px] font-medium tracking-widest text-pink-100/80">
              35 × 15 × 8 cm · RECYCLED CARDBOARD · ECO-FRIENDLY
            </p>
          </div>
        </div>

        {/* Dimension annotations */}
        <div className="absolute -right-8 top-1/2 flex -translate-y-1/2 flex-col items-center gap-1">
          <div className="h-16 w-px bg-fuchsia-300/50" />
          <p className="rotate-90 whitespace-nowrap text-[9px] font-medium text-fuchsia-400">35 cm</p>
          <div className="h-16 w-px bg-fuchsia-300/50" />
        </div>
        <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-0.5">
          <div className="h-px w-28 bg-fuchsia-300/50" />
          <p className="text-[9px] font-medium text-fuchsia-400">15 cm</p>
        </div>

        {/* "RECOMMENDED" badge */}
        <div className="absolute -left-3 top-14 rotate-[-12deg]">
          <span className="rounded-full bg-gradient-to-r from-green-400 to-emerald-500 px-2.5 py-1 text-[9px] font-black uppercase tracking-widest text-white shadow-lg ring-2 ring-white">
            ✓ AI Pick
          </span>
        </div>
      </div>
    </div>
  );
}


function PackagingPreviewPage() {
  const navigate = useNavigate();
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);

  useEffect(() => {
    setAnalysis(loadAnalysis() ?? DEMO_RESULT);
  }, []);

  const accessories = analysis?.accessories ?? DEMO_RESULT.accessories;
  const productName = analysis?.productName ?? DEMO_RESULT.productName;

  const metrics = [
    { label: "Space Utilization", value: "88%", icon: Box, color: "text-primary" },
    { label: "Material Reduction", value: "18%", icon: Recycle, color: "text-[color:var(--success)]" },
    { label: "Assembly Efficiency", value: "94%", icon: Zap, color: "text-[color:var(--warning)]" },
    { label: "Sustainability Impact", value: "92/100", icon: TrendingUp, color: "text-[color:var(--chart-2)]" },
  ];

  return (
    <div className="space-y-8">
      <PageHeader
        title="Packaging Preview"
        description={`Visual representation of the recommended packaging solution for: ${productName}`}
        actions={
          <>
            <Button variant="outline" size="sm" onClick={() => navigate({ to: "/app/packaging-planner" })}>
              <ArrowLeft className="h-4 w-4" /> Back to Planner
            </Button>
            <Button size="sm" onClick={() => navigate({ to: "/app/cost-analysis" })}>
              <DollarSign className="h-4 w-4" /> Cost & Sustainability <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        }
      />



      <div className="grid gap-6 lg:grid-cols-5">
        {/* Packaging mockup */}
        <Card className="border-border/70 shadow-none lg:col-span-2">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[color:var(--primary-soft)] text-primary">
                <Package className="h-3.5 w-3.5" />
              </div>
              <CardTitle className="text-base">Packaging Mockup</CardTitle>
            </div>
            <CardDescription>Premium Window Display Box — front view</CardDescription>
          </CardHeader>
          <CardContent className="pb-8">
            <PackagingMockup accessories={accessories} />
          </CardContent>
        </Card>

        {/* Details panel */}
        <div className="space-y-4 lg:col-span-3">
          <Card className="border-border/70 shadow-none">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[color:var(--primary-soft)] text-primary">
                  <Grid3x3 className="h-3.5 w-3.5" />
                </div>
                <CardTitle className="text-base">Internal Layout</CardTitle>
              </div>
              <CardDescription>Doll and accessory placement inside the packaging</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { zone: "Main Display Zone", content: "Doll — upright centered position, held by molded insert", icon: Package, color: "bg-primary/10 text-primary" },
                { zone: "Crown & Hair", content: "Protected by foam surround at top of display area", icon: Star, color: "bg-yellow-500/10 text-yellow-600" },
                { zone: "Accessory Tray", content: `${accessories.length} compartments — Handbag, Shoes, Glasses, Crown`, icon: Gem, color: "bg-purple-500/10 text-purple-600" },
                { zone: "Shock Protection", content: "4 mm EVA foam lining on all six inner faces", icon: ShieldCheck, color: "bg-[color:var(--success)]/10 text-[color:var(--success)]" },
                { zone: "Window Panel", content: "0.3 mm PET transparent film — 65% of front face", icon: Layers, color: "bg-sky-500/10 text-sky-600" },
              ].map(({ zone, content, icon: Icon, color }) => (
                <div key={zone} className="flex items-start gap-3 rounded-lg border border-border/60 p-3">
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md ${color}`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">{zone}</p>
                    <p className="text-xs text-muted-foreground">{content}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-border/70 shadow-none">
            <CardHeader>
              <CardTitle className="text-base">Box Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "External Dimensions", value: "35 × 15 × 8 cm" },
                  { label: "Internal Clearance", value: "32 × 12 × 6.5 cm" },
                  { label: "Wall Thickness", value: "3 mm" },
                  { label: "Window Size", value: "22 × 10 cm" },
                  { label: "Board Grade", value: "E-flute 380 gsm" },
                  { label: "Recycled Content", value: "85%" },
                  { label: "Print Method", value: "Offset CMYK + Foil" },
                  { label: "Closure", value: "Tuck-top auto-bottom" },
                ].map(({ label, value }) => (
                  <div key={label} className="rounded-md bg-muted/40 px-3 py-2">
                    <p className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">{label}</p>
                    <p className="mt-0.5 text-xs font-semibold text-foreground">{value}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>



      {/* CTA */}
      <Card className="border-[color:var(--primary)]/30 bg-[color:var(--primary-soft)]/50 shadow-none">
        <CardContent className="flex items-center justify-between gap-4 p-5">
          <div>
            <p className="text-sm font-semibold text-foreground">Analyse cost & sustainability impact</p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              View material cost breakdown, carbon footprint, and ROI projections.
            </p>
          </div>
          <Button size="sm" onClick={() => navigate({ to: "/app/cost-analysis" })} className="shrink-0">
            <Sparkles className="h-4 w-4" /> Cost & Sustainability <ChevronRight className="h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
