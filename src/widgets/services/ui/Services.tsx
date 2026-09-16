"use client";

import { servicesMock, ServiceCard } from "@/entities/service";
import { FadeIn } from "@/shared/ui-motion";

export function Services() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
                Engineered for Every Architecture
              </h2>
              <p className="text-lg text-muted-foreground">
                Whether you are restoring a classic colonial or building a modern
                masterpiece, our collections offer uncompromising thermal
                performance and structural integrity.
              </p>
            </FadeIn>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {servicesMock.map((service, i) => (
            <FadeIn key={service.id} delay={0.2 * (i + 1)} direction="up">
              <ServiceCard service={service} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
