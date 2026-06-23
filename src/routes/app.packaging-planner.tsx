import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Box,
  Leaf,
  DollarSign,
  Zap,
  ChevronRight,
  Eye,
  Recycle,
  TrendingDown,
  BarChart3,
  CheckCircle2,
  Sparkles,
  ArrowLeft,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PageHeader } from "@/components/page-header";
import { KpiCard } from "@/components/kpi-card";
import { loadAnalysis, DEMO_RESULT, type AnalysisResult } from "@/lib/workflow-store";

export const Route = createFileRoute("/app/packaging-planner")({
  head: () => ({ meta: [{ title: "Packaging Planner — PackWise AI" }] }),
  component: PackagingPlannerPage,
});

const ALTERNATIVES = [
  {
    type: "Window Display Box",
    cost: "$1.24",
    material: "Recycled Cardboard",
    sustainability: "92/100",
    efficiency: "92%",
    recommended: true,
  },
  {
    type: "Blister Pack",
    cost: "$0.68",
    material: "PET + Cardboard",
    sustainability: "61/100",
    efficiency: "78%",
    recommended: false,
  },
  {
    type: "Solid Retail Box",
    cost: "$0.95",
    material: "Virgin Cardboard",
    sustainability: "54/100",
    efficiency: "70%",
    recommended: false,
  },
  {
    type: "Eco Kraft Box",
    cost: "$1.05",
    material: "100% Kraft Paper",
    sustainability: "97/100",
    efficiency: "84%",
    recommended: false,
  },
];

const efficiencyData = [
  { name: "Space", value: 88, fill: "var(--color-chart-1)" },
  { name: "Material", value: 92, fill: "var(--color-chart-2)" },
  { name: "Cost", value: 76, fill: "var(--color-chart-3)" },
  { name: "Sustain.", value: 92, fill: "var(--color-chart-4)" },
];

const comparisonData = [
  { name: "Window Box", cost: 1.24, sustainability: 92, efficiency: 92 },
  { name: "Blister", cost: 0.68, sustainability: 61, efficiency: 78 },
  { name: "Solid Box", cost: 0.95, sustainability: 54, efficiency: 70 },
  { name: "Eco Kraft", cost: 1.05, sustainability: 97, efficiency: 84 },
];

function PackagingPlannerPage() {
  const navigate = useNavigate();
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);

  useEffect(() => {
    setAnalysis(loadAnalysis() ?? DEMO_RESULT);
  }, []);

  const productName = analysis?.productName ?? "Glamour Doll – Sparkle Edition";

  return (
    <div className="space-y-8">
      <PageHeader
        title="Packaging Planner"
        description={`AI-optimized packaging recommendation for: ${productName}`}
        actions={
          <>
            <Button variant="outline" size="sm" onClick={() => navigate({ to: "/app/product-analysis" })}>
              <ArrowLeft className="h-4 w-4" /> Back to Analysis
            </Button>
            <Button size="sm" onClick={() => navigate({ to: "/app/packaging-preview" })}>
              <Eye className="h-4 w-4" /> View Packaging Preview
            </Button>
          </>
        }
      />

      {/* Recommendation header */}
      <Card className="border-[color:var(--primary)]/30 bg-gradient-to-br from-[color:var(--primary-soft)] to-[color:var(--primary-soft)]/30 shadow-none">
        <CardContent className="p-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <Sparkles className="h-4 w-4" />
                </div>
                <Badge className="bg-primary/20 text-primary border-primary/30 text-xs">
                  AI Recommended
                </Badge>
              </div>
              <h2 className="text-xl font-semibold text-foreground">Premium Window Display Box</h2>
              <p className="text-sm text-muted-foreground">
                Optimized for collectible doll display — recycled cardboard with transparent PET window
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 md:gap-6">
              {[
                { label: "Box Dimensions", value: "35 × 15 × 8 cm" },
                { label: "Material", value: "Recycled Cardboard" },
                { label: "Efficiency Score", value: "92/100" },
              ].map(({ label, value }) => (
                <div key={label} className="text-center">
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</p>
                  <p className="mt-1 text-sm font-semibold text-foreground">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      {/* KPI Cards */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard label="Recommended Material" value="Recycled Board" icon={Box} hint="Eco-friendly option" />
        <KpiCard label="Box Style" value="Window Display" icon={Box} hint="For product visibility" />
        <KpiCard label="Optimal Fasteners" value="3 Wire Ties" icon={Box} hint="Secure product positioning" />
        <KpiCard label="Recommended Pose" value="Dynamic Stand" icon={Box} hint="Max visibility in box" />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Bar chart comparison */}
        <Card className="border-border/70 shadow-none lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-base">Alternative Packaging Comparison</CardTitle>
            <CardDescription>Cost, sustainability, and efficiency across packaging types</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={comparisonData} margin={{ top: 4, right: 12, left: -16, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
                  <XAxis dataKey="name" stroke="var(--color-muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
                  <YAxis stroke="var(--color-muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
                  <Tooltip
                    contentStyle={{
                      borderRadius: 8,
                      border: "1px solid var(--color-border)",
                      background: "var(--color-card)",
                      fontSize: 12,
                    }}
                  />
                  <Bar dataKey="efficiency" fill="var(--color-chart-1)" radius={[3, 3, 0, 0]} name="Efficiency %" />
                  <Bar dataKey="sustainability" fill="var(--color-chart-2)" radius={[3, 3, 0, 0]} name="Sustainability" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Radial efficiency */}
        <Card className="border-border/70 shadow-none">
          <CardHeader>
            <CardTitle className="text-base">Efficiency Breakdown</CardTitle>
            <CardDescription>Recommended packaging scores</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                  innerRadius="25%"
                  outerRadius="100%"
                  data={efficiencyData}
                  startAngle={180}
                  endAngle={0}
                >
                  <RadialBar dataKey="value" background={{ fill: "var(--color-muted)" }} />
                  <Tooltip
                    contentStyle={{
                      borderRadius: 8,
                      border: "1px solid var(--color-border)",
                      background: "var(--color-card)",
                      fontSize: 12,
                    }}
                  />
                </RadialBarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {efficiencyData.map((d) => (
                <div key={d.name} className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full" style={{ background: d.fill }} />
                  <span className="text-xs text-muted-foreground">{d.name}: <strong className="text-foreground">{d.value}%</strong></span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alternatives table */}
      <Card className="border-border/70 shadow-none">
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <div>
            <CardTitle className="text-base">Alternative Packaging Options</CardTitle>
            <CardDescription>Compare all evaluated packaging types for this product</CardDescription>
          </div>
          <Badge variant="outline" className="border-border/70 text-xs font-normal">
            <BarChart3 className="mr-1 h-3 w-3" /> AI Evaluated
          </Badge>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Packaging Type</TableHead>
                <TableHead>Material</TableHead>
                <TableHead className="text-right">Cost/Unit</TableHead>
                <TableHead className="text-right">Sustainability</TableHead>
                <TableHead className="text-right">Efficiency</TableHead>
                <TableHead className="text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ALTERNATIVES.map((alt) => (
                <TableRow key={alt.type}>
                  <TableCell className="font-medium">{alt.type}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{alt.material}</TableCell>
                  <TableCell className="text-right tabular-nums">{alt.cost}</TableCell>
                  <TableCell className="text-right tabular-nums">{alt.sustainability}</TableCell>
                  <TableCell className="text-right tabular-nums">{alt.efficiency}</TableCell>
                  <TableCell className="text-right">
                    {alt.recommended ? (
                      <Badge className="bg-[color:var(--success)]/10 text-[color:var(--success)] border-transparent text-xs">
                        <CheckCircle2 className="mr-1 h-3 w-3" /> Recommended
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="border-border/70 text-xs font-normal text-muted-foreground">
                        Alternative
                      </Badge>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* CTA */}
      <Card className="border-[color:var(--primary)]/30 bg-[color:var(--primary-soft)]/50 shadow-none">
        <CardContent className="flex items-center justify-between gap-4 p-5">
          <div>
            <p className="text-sm font-semibold text-foreground">View the full 3D packaging preview</p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              See doll placement, accessory compartments, and internal layout visualization.
            </p>
          </div>
          <Button size="sm" onClick={() => navigate({ to: "/app/packaging-preview" })} className="shrink-0">
            <Eye className="h-4 w-4" /> View Packaging Preview <ChevronRight className="h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
