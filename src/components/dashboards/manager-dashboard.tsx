import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { DollarSign, Leaf, Target, TrendingUp, Package, Maximize } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { KpiCard } from "@/components/kpi-card";
import { PageHeader } from "@/components/page-header";
import { costBreakdown, monthlyTrends, sustainabilityMetrics } from "@/lib/mock-data";
import type { AuthUser } from "@/lib/auth";

const PIE_COLORS = ["var(--color-chart-1)", "var(--color-chart-2)", "var(--color-chart-3)", "var(--color-chart-4)"];

export function ManagerDashboard({ user }: { user: AuthUser }) {
  return (
    <div className="space-y-8">
      <PageHeader
        title={`Operations overview`}
        description={`Executive snapshot for ${user.company ?? "your organization"}.`}
        actions={<Button size="sm" variant="outline">Download executive summary</Button>}
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard label="TOTAL PRODUCTS" value="12" icon={Target} hint="Items scanned by AI" />
        <KpiCard label="ECO-READY DESIGNS" value="8" icon={Package} hint="Approved for production" />
        <KpiCard label="MATERIAL EFFICIENCY" value="High" icon={Maximize} hint="Optimized by AI" />
        <KpiCard label="SYSTEM STATUS" value="Online" icon={Leaf} hint="All models running" />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="border-border/70 shadow-none lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-base">Monthly cost &amp; savings trend</CardTitle>
            <CardDescription>Cost per 1,000 units vs. realized monthly savings.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyTrends} margin={{ top: 8, right: 12, left: -16, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
                  <XAxis dataKey="month" stroke="var(--color-muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="var(--color-muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid var(--color-border)", background: "var(--color-card)", fontSize: 12 }} />
                  <Legend wrapperStyle={{ fontSize: 12 }} />
                  <Line type="monotone" dataKey="savings" name="Savings ($k)" stroke="var(--color-chart-1)" strokeWidth={2.5} dot={{ r: 3 }} />
                  <Line type="monotone" dataKey="cost" name="Cost / 1k units ($)" stroke="var(--color-chart-2)" strokeWidth={2.5} dot={{ r: 3 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/70 shadow-none">
          <CardHeader>
            <CardTitle className="text-base">Cost composition</CardTitle>
            <CardDescription>Where your packaging spend lands today.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-56 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={costBreakdown} dataKey="value" nameKey="name" innerRadius={50} outerRadius={80} paddingAngle={2}>
                    {costBreakdown.map((_, i) => (
                      <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid var(--color-border)", background: "var(--color-card)", fontSize: 12 }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <ul className="mt-2 space-y-1.5 text-xs">
              {costBreakdown.map((c, i) => (
                <li key={c.name} className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <span className="h-2 w-2 rounded-full" style={{ background: PIE_COLORS[i] }} />
                    {c.name}
                  </span>
                  <span className="tabular-nums font-medium">{c.value}%</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="border-border/70 shadow-none lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-base">Sustainability progress</CardTitle>
            <CardDescription>Tracking against 2026 corporate targets.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            {sustainabilityMetrics.map((m) => (
              <div key={m.label}>
                <div className="flex items-baseline justify-between text-sm">
                  <span className="font-medium text-foreground">{m.label}</span>
                  <span className="tabular-nums text-muted-foreground">
                    {m.value}% <span className="text-xs">/ target {m.target}%</span>
                  </span>
                </div>
                <Progress value={(m.value / m.target) * 100} className="mt-2 h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-border/70 shadow-none">
          <CardHeader>
            <CardTitle className="text-base">Executive summary</CardTitle>
            <CardDescription>Auto-generated insights this week.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { tag: "Wins", text: "Glamour Doll line hit a 94% efficiency score, the highest this quarter.", tone: "success" },
              { tag: "Watch", text: "Shipping costs are tracking 4% above forecast in the EU region.", tone: "warning" },
              { tag: "Next", text: "Approve molded pulp insert rollout across 6 remaining SKUs.", tone: "info" },
            ].map((item) => (
              <div key={item.tag} className="rounded-lg border border-border/70 p-3">
                <Badge
                  variant="outline"
                  className={
                    item.tone === "success"
                      ? "bg-[color:var(--success)]/10 text-[color:var(--success)] border-transparent text-[10px]"
                      : item.tone === "warning"
                        ? "bg-[color:var(--warning)]/15 text-[color:var(--warning-foreground)] border-transparent text-[10px]"
                        : "bg-[color:var(--primary-soft)] text-primary border-transparent text-[10px]"
                  }
                >
                  {item.tag}
                </Badge>
                <p className="mt-2 text-sm text-foreground">{item.text}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card className="border-border/70 shadow-none">
        <CardHeader>
          <CardTitle className="text-base">Savings by category</CardTitle>
          <CardDescription>Year-to-date savings across packaging programs.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={[
                { name: "Dolls", value: 412 },
                { name: "Action Figures", value: 328 },
                { name: "Playsets", value: 261 },
                { name: "Collectibles", value: 198 },
                { name: "Accessories", value: 134 },
              ]} margin={{ top: 8, right: 12, left: -16, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
                <XAxis dataKey="name" stroke="var(--color-muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--color-muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid var(--color-border)", background: "var(--color-card)", fontSize: 12 }} />
                <Bar dataKey="value" name="Savings ($k)" fill="var(--color-chart-1)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}