import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, CheckCircle2 } from "lucide-react";
import { Brand } from "@/components/brand";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/pending")({
  head: () => ({ meta: [{ title: "Pending approval — PackWise AI" }] }),
  component: PendingPage,
});

function PendingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[color:var(--primary-soft)]/40">
      <header className="px-6 py-6 sm:px-12">
        <Brand />
      </header>
      <main className="flex flex-1 items-center justify-center px-6 py-10">
        <div className="w-full max-w-lg rounded-2xl border border-border/70 bg-card p-10 text-center shadow-sm">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--primary-soft)] text-primary">
            <Clock className="h-6 w-6" />
          </div>
          <Badge variant="secondary" className="mt-5 bg-[color:var(--warning)]/15 text-[color:var(--warning-foreground)]">
            Pending Approval
          </Badge>
          <h1 className="mt-4 text-2xl font-semibold tracking-tight">Thanks for signing up</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Your account has been successfully registered and is currently waiting for administrator approval.
            You&apos;ll receive an email confirmation as soon as your access is granted.
          </p>

          <ul className="mx-auto mt-6 max-w-sm space-y-2 text-left text-sm text-muted-foreground">
            {[
              "Account details received",
              "Identity verification in progress",
              "Administrator review (typically &lt; 1 business day)",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className={`mt-0.5 h-4 w-4 ${i === 2 ? "text-muted-foreground/50" : "text-[color:var(--success)]"}`} />
                <span dangerouslySetInnerHTML={{ __html: step }} />
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button asChild className="w-full sm:w-auto">
              <Link to="/login">Return to sign in</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}