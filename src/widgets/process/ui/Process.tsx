"use client";

import { processStepsMock, ProcessStepCard } from "@/entities/process-step";
import { FadeIn } from "@/shared/ui-motion";

export function Process() {
  return (
    <section id="process" className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              A Seamless Process
            </h2>
            <p className="text-lg text-background/70">
              From the first handshake to the final inspection, we make upgrading
              your home entirely stress-free.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-background/20" />

          {processStepsMock.map((step, i) => (
            <FadeIn
              key={step.id}
              delay={0.2 * i}
              direction="up"
              className="relative z-10"
            >
              <ProcessStepCard step={step} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
