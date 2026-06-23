import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  DollarSign,
  Truck,
  Warehouse,
  Package,
  Leaf,
  Recycle,
  Wind,
  ArrowLeft,
  ChevronRight,
  FileBarChart2,
  TrendingDown,
  Sparkles,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend,
  AreaChart,
  Area,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/page-header";
import { KpiCard } from "@/components/kpi-card";
import { loadAnalysis, DEMO_RESULT } from "@/lib/workflow-store";

export const Route = createFileRoute("/app/cost-analysis")({
  head: () => ({ meta: [{ title: "Cost & Sustainability — PackWise AI" }] }),
  component: CostSustainabilityPage,
});

const materialBreakdown = [
  { name: "Recycled Board (Box)", value: 56, color: "var(--color-chart-1)" },
  { name: "Molded Pulp (Insert)", value: 32, color: "var(--color-chart-2)" },
  { name: "PET Plastic (Window)", value: 8, color: "var(--color-chart-3)" },
  { name: "Paper (Instructions)", value: 2, color: "var(--color-chart-4)" },
  { name: "Eco-Ink & Adhesives", value: 2, color: "var(--color-chart-5)" },
];

const sustainabilityTrend = [
  { month: "Jan", score: 64, waste: 32, carbon: 5.8 },
  { month: "Feb", score: 68, waste: 30, carbon: 5.4 },
  { month: "Mar", score: 72, waste: 27, carbon: 5.0 },
  { month: "Apr", score: 76, waste: 24, carbon: 4.6 },
  { month: "May", score: 80, waste: 21, carbon: 4.1 },
  { month: "Jun", score: 84, waste: 18, carbon: 3.7 },
  { month: "Jul", score: 88, waste: 15, carbon: 3.3 },
  { month: "Aug", score: 92, waste: 12, carbon: 2.9 },
];

const materialSavingsData = [
  { name: "Recycled Board", current: 85, target: 90 },
  { name: "Renewable Ink", current: 72, target: 80 },
  { name: "Plastic-Free", current: 68, target: 75 },
  { name: "FSC Certified", current: 90, target: 95 },
  { name: "Bio-degradable", current: 55, target: 70 },
];

const costComparisonData = [
  { type: "Old Packaging", material: 1.82, shipping: 0.61, storage: 0.27, total: 2.70 },
  { type: "Current", material: 1.52, shipping: 0.49, storage: 0.21, total: 2.22 },
  { type: "Recommended", material: 1.24, shipping: 0.41, storage: 0.18, total: 1.83 },
  { type: "Target 2026", material: 1.05, shipping: 0.35, storage: 0.14, total: 1.54 },
];

function CostSustainabilityPage() {
  const navigate = useNavigate();
  const [productName, setProductName] = useState<string>("Glamour Doll – Sparkle Edition");

  useEffect(() => {
    const analysis = loadAnalysis() ?? DEMO_RESULT;
    setProductName(analysis.productName);
  }, []);

  return (
    <div className="space-y-8">
      <PageHeader
        title="Cost & Sustainability"
        description={`Full cost breakdown and sustainability metrics for: ${productName}`}
        actions={
          <>
            <Button variant="outline" size="sm" onClick={() => navigate({ to: "/app/packaging-preview" })}>
              <ArrowLeft className="h-4 w-4" /> Back to Preview
            </Button>
            <Button size="sm" onClick={() => navigate({ to: "/app/reports" })}>
              <FileBarChart2 className="h-4 w-4" /> Generate Report <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        }
      />

      {/* KPI row */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard label="Weight Analysis" value="Lightweight" icon={Package} hint="Optimal for shipping" />
        <KpiCard label="Recyclability" value="High" icon={Recycle} hint="Meets green standards" />
        <KpiCard label="Material Source" value="Eco-Friendly" icon={Wind} hint="Sustainable choice" />
        <KpiCard label="Component Count" value="4 Items" icon={Leaf} hint="Box, Insert, Film, Tray" />
      </div>

      {/* Material Breakdown */}
      <div className="grid gap-6 lg:grid-cols-5">
        <Card className="border-border/70 shadow-none lg:col-span-3">
          <CardHeader>
            <CardTitle className="text-base">Material Composition by Weight</CardTitle>
            <CardDescription>Recommended packaging — total 565 grams</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {materialBreakdown.map((item) => (
                <div key={item.name} className="space-y-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="h-2.5 w-2.5 rounded-full" style={{ background: item.color }} />
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <span className="tabular-nums font-semibold">{item.value}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${item.value}%`,
                        background: item.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-border/70 pt-4">
              <p className="text-sm font-semibold text-foreground">Material Efficiency</p>
              <p className="text-xl font-bold text-primary">Optimal</p>
            </div>
          </CardContent>
        </Card>

        {/* Pie chart */}
        <Card className="border-border/70 shadow-none lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-base">Material Distribution</CardTitle>
            <CardDescription>Proportion by category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-44">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={materialBreakdown}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={2}
                  >
                    {materialBreakdown.map((entry) => (
                      <Cell key={entry.name} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(v: number) => [`${v}%`, "Proportion"]}
                    contentStyle={{
                      borderRadius: 8,
                      border: "1px solid var(--color-border)",
                      background: "var(--color-card)",
                      fontSize: 12,
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-2 grid grid-cols-2 gap-1.5">
              {materialBreakdown.map((d) => (
                <div key={d.name} className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full shrink-0" style={{ background: d.color }} />
                  <span className="text-xs text-muted-foreground">{d.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>


      {/* CTA */}
      <Card className="border-[color:var(--primary)]/30 bg-[color:var(--primary-soft)]/50 shadow-none">
        <CardContent className="flex items-center justify-between gap-4 p-5">
          <div>
            <p className="text-sm font-semibold text-foreground">Ready to generate the final report?</p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              Export a complete analysis report including all packaging, cost, and sustainability insights.
            </p>
          </div>
          <Button size="sm" onClick={() => navigate({ to: "/app/reports" })} className="shrink-0">
            <Sparkles className="h-4 w-4" /> Generate Report <ChevronRight className="h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
