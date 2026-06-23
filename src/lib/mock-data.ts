export const performanceTrend = [
  { month: "Jan", efficiency: 72, cost: 48, sustainability: 60 },
  { month: "Feb", efficiency: 74, cost: 52, sustainability: 63 },
  { month: "Mar", efficiency: 78, cost: 55, sustainability: 67 },
  { month: "Apr", efficiency: 81, cost: 60, sustainability: 71 },
  { month: "May", efficiency: 84, cost: 64, sustainability: 76 },
  { month: "Jun", efficiency: 87, cost: 69, sustainability: 80 },
  { month: "Jul", efficiency: 89, cost: 72, sustainability: 83 },
  { month: "Aug", efficiency: 91, cost: 75, sustainability: 86 },
];

export const recentAnalyses = [
  { id: "PA-2041", product: "Glamour Doll – Limited Edition", status: "Optimized", efficiency: 94, savings: "$1,240", date: "Aug 21" },
  { id: "PA-2040", product: "Action Hero Series 7", status: "Review", efficiency: 81, savings: "$640", date: "Aug 20" },
  { id: "PA-2039", product: "Princess Castle Playset", status: "Optimized", efficiency: 88, savings: "$2,310", date: "Aug 19" },
  { id: "PA-2038", product: "Mini Collectible Pack (12-set)", status: "Pending", efficiency: 73, savings: "$310", date: "Aug 18" },
  { id: "PA-2037", product: "Fashion Doll Wardrobe Box", status: "Optimized", efficiency: 92, savings: "$1,820", date: "Aug 17" },
];

export const recommendations = [
  { title: "Reduce window film by 18%", impact: "Saves $0.12 per unit, improves recyclability score by 9 pts.", tag: "Material" },
  { title: "Switch insert from PET to molded pulp", impact: "Reduces CO₂ footprint by 22% with no loss in protection rating.", tag: "Sustainability" },
  { title: "Reorient figure 45° to shrink box footprint", impact: "Saves 11% shelf space; cuts shipping volume by 8%.", tag: "Layout" },
];

export const costBreakdown = [
  { name: "Materials", value: 42 },
  { name: "Labor", value: 18 },
  { name: "Shipping", value: 27 },
  { name: "Waste", value: 13 },
];

export const monthlyTrends = [
  { month: "Mar", savings: 18, cost: 142 },
  { month: "Apr", savings: 24, cost: 138 },
  { month: "May", savings: 31, cost: 129 },
  { month: "Jun", savings: 38, cost: 121 },
  { month: "Jul", savings: 44, cost: 116 },
  { month: "Aug", savings: 52, cost: 108 },
];

export const sustainabilityMetrics = [
  { label: "Recyclable Materials", value: 86, target: 90 },
  { label: "Renewable Sources", value: 64, target: 75 },
  { label: "Carbon Reduction", value: 41, target: 50 },
  { label: "Plastic-Free Packs", value: 58, target: 65 },
];

export type ManagedUser = {
  id: string;
  name: string;
  email: string;
  company: string;
  role: "engineer" | "manager" | "admin" | "unassigned";
  status: "active" | "pending" | "rejected";
  joined: string;
};

export const managedUsers: ManagedUser[] = [
  { id: "U-1042", name: "Priya Natarajan", email: "priya.n@toyforge.com", company: "ToyForge Industries", role: "engineer", status: "active", joined: "Jul 12" },
  { id: "U-1041", name: "Daniel Okafor", email: "d.okafor@brightplay.io", company: "BrightPlay Co.", role: "unassigned", status: "pending", joined: "Aug 18" },
  { id: "U-1040", name: "Sofia Bertelli", email: "sofia@dollhausco.com", company: "DollHaus Co.", role: "manager", status: "active", joined: "Jun 03" },
  { id: "U-1039", name: "Henrik Sjöberg", email: "h.sjoberg@nordictoy.se", company: "NordicToy AB", role: "unassigned", status: "pending", joined: "Aug 20" },
  { id: "U-1038", name: "Mei Tanaka", email: "mei.t@kawaiicraft.jp", company: "KawaiiCraft", role: "engineer", status: "active", joined: "May 21" },
  { id: "U-1037", name: "Lucas Romano", email: "lucas@figurineworks.it", company: "Figurine Works", role: "unassigned", status: "pending", joined: "Aug 22" },
];

export const recentActivities = [
  { who: "Priya Natarajan", what: "completed analysis PA-2041", when: "12 min ago" },
  { who: "System", what: "auto-generated monthly sustainability report", when: "1 hr ago" },
  { who: "Marcus Reid", what: "approved Q3 packaging budget", when: "3 hr ago" },
  { who: "Sofia Bertelli", what: "invited 2 team members", when: "Yesterday" },
  { who: "Avery Quinn", what: "updated role permissions", when: "2 days ago" },
];