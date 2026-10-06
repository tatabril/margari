"use client";

import { processStepsMock, ProcessStepCard } from "@/entities/process-step";
import { FadeIn } from "@/shared/ui-motion";

export function Process() {
  return (
    <section id="process" className="md:py-24 py-12 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto md:mb-16 mb-8">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Как мы работаем
            </h2>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 relative">

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
