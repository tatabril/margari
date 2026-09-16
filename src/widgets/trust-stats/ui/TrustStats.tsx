"use client";

import { siteConfig } from "@/shared/config";
import { FadeIn } from "@/shared/ui-motion";

export function TrustStats() {
  return (
    <section className="py-12 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-secondary-foreground/20">
          {siteConfig.trustStats.map((stat, i) => (
            <FadeIn
              key={stat.label}
              delay={0.1 * i}
              direction="up"
              className="text-center px-4"
            >
              <div className="text-3xl md:text-5xl font-bold mb-2 tracking-tighter">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-secondary-foreground/80 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
