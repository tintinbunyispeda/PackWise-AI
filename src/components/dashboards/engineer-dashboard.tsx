import { Activity, DollarSign, Leaf, Recycle, Sparkles, ArrowRight, Box } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
import { KpiCard } from "@/components/kpi-card";
import { PageHeader } from "@/components/page-header";
import { performanceTrend, recentAnalyses, recommendations } from "@/lib/mock-data";
import type { AuthUser } from "@/lib/auth";

const statusStyles: Record<string, string> = {
  Optimized: "bg-[color:var(--success)]/10 text-[color:var(--success)] border-transparent",
  Review: "bg-[color:var(--warning)]/15 text-[color:var(--warning-foreground)] border-transparent",
  Pending: "bg-muted text-muted-foreground border-transparent",
};

export function EngineerDashboard({ user }: { user: AuthUser }) {
  return (
    <div className="space-y-8">
      <PageHeader
        title={`Welcome back, ${user.name.split(" ")[0]}`}
        description="Here's how your packaging projects are performing across the portfolio."
        actions={
          <>
            <Button variant="outline" size="sm">Export report</Button>
            <Button size="sm"><Sparkles className="h-4 w-4" />New analysis</Button>
          </>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard label="ACTIVE PROJECTS" value="4" icon={Activity} hint="Toys currently in optimization" />
        <KpiCard label="OPTIMIZED TIE LAYOUTS" value="12" icon={Box} hint="AI-generated fastener positions" />
        <KpiCard label="PENDING APPROVALS" value="2" icon={Leaf} hint="Awaiting manager review" />
        <KpiCard label="POSE CONFIGURATIONS" value="24" icon={Sparkles} hint="Alternative doll display poses" />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="border-border/70 shadow-none lg:col-span-2">
          <CardHeader className="flex flex-row items-start justify-between space-y-0">
            <div>
              <CardTitle className="text-base">Performance trend</CardTitle>
              <CardDescription>Efficiency, cost savings, and sustainability over the last 8 months.</CardDescription>
            </div>
            <Badge variant="outline" className="border-border/70 text-xs font-normal">Last 8 months</Badge>
          </CardHeader>
          <CardContent>
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={performanceTrend} margin={{ top: 8, right: 12, left: -16, bottom: 0 }}>
                  <defs>
                    <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--color-chart-1)" stopOpacity={0.35} />
                      <stop offset="100%" stopColor="var(--color-chart-1)" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--color-chart-2)" stopOpacity={0.25} />
                      <stop offset="100%" stopColor="var(--color-chart-2)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
                  <XAxis dataKey="month" stroke="var(--color-muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="var(--color-muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip
                    contentStyle={{
                      borderRadius: 8,
                      border: "1px solid var(--color-border)",
                      background: "var(--color-card)",
                      fontSize: 12,
                    }}
                  />
                  <Area type="monotone" dataKey="efficiency" stroke="var(--color-chart-1)" strokeWidth={2} fill="url(#g1)" />
                  <Area type="monotone" dataKey="sustainability" stroke="var(--color-chart-2)" strokeWidth={2} fill="url(#g2)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/70 shadow-none">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[color:var(--primary-soft)] text-primary">
                <Sparkles className="h-3.5 w-3.5" />
              </div>
              <CardTitle className="text-base">AI recommendations</CardTitle>
            </div>
            <CardDescription>Top opportunities identified across your active SKUs.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {recommendations.map((r) => (
              <div key={r.title} className="rounded-lg border border-border/70 p-3 transition hover:border-primary/40">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-medium leading-tight">{r.title}</p>
                  <Badge variant="secondary" className="bg-[color:var(--primary-soft)] text-primary text-[10px] font-medium">{r.tag}</Badge>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{r.impact}</p>
              </div>
            ))}
            <Button variant="ghost" size="sm" className="w-full justify-between text-primary hover:text-primary">
              View all suggestions <ArrowRight className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border/70 shadow-none">
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <div>
            <CardTitle className="text-base">Recent analyses</CardTitle>
            <CardDescription>Latest packaging optimization runs across your team.</CardDescription>
          </div>
          <Button variant="outline" size="sm">View all</Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[110px]">ID</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Efficiency</TableHead>
                <TableHead className="text-right">Est. savings</TableHead>
                <TableHead className="text-right">Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentAnalyses.map((a) => (
                <TableRow key={a.id}>
                  <TableCell className="font-mono text-xs text-muted-foreground">{a.id}</TableCell>
                  <TableCell className="font-medium">{a.product}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={statusStyles[a.status]}>{a.status}</Badge>
                  </TableCell>
                  <TableCell className="text-right tabular-nums">{a.efficiency}%</TableCell>
                  <TableCell className="text-right tabular-nums">{a.savings}</TableCell>
                  <TableCell className="text-right text-muted-foreground">{a.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}