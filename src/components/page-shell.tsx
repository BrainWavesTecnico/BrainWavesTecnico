import { ReactNode } from "react";
import { SiteHeader, SiteFooter } from "./site-chrome";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHeader({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <section className="border-b border-border/60">
      <div className="container-page py-16 md:py-20">
        {eyebrow && <div className="text-xs uppercase tracking-[0.2em] text-primary mb-3">{eyebrow}</div>}
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground">{title}</h1>
        {description && <p className="mt-4 max-w-2xl text-muted-foreground">{description}</p>}
      </div>
    </section>
  );
}
