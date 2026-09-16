"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { FadeIn } from "@/shared/ui-motion";

const details = [
  {
    title: "Precision Measurement",
    desc: "Laser-accurate sizing ensures a perfect fit, eliminating drafts and structural stress.",
  },
  {
    title: "White-Glove Installation",
    desc: "We protect your floors, clean our work area daily, and treat your home with profound respect.",
  },
  {
    title: "Rigorous Weatherproofing",
    desc: "Proprietary flashing techniques ensure a watertight seal that outlasts the building code.",
  },
] as const;

export function Craftsmanship() {
  return (
    <section id="craftsmanship" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <div className="relative aspect-[4/3]">
              <div className="absolute -inset-4 bg-muted rounded-sm -z-10" />
              <Image
                fill
                src="/assets/craftsmanship.png"
                alt="Craftsman installing window"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover relative z-10 shadow-xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-secondary text-secondary-foreground p-8 max-w-xs hidden md:block z-20 shadow-2xl">
                <Quote className="w-10 h-10 text-primary mb-4 opacity-50" />
                <p className="text-lg font-medium leading-snug">
                  &quot;A window is only as good as its installation. We never cut
                  corners.&quot;
                </p>
                <p className="mt-4 text-sm opacity-80 uppercase tracking-widest font-semibold">
                  — Chief Installer
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="max-w-xl">
            <FadeIn delay={0.2} direction="left">
              <div className="text-primary font-semibold tracking-wider uppercase mb-4 text-sm">
                The Magragi Difference
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
                Obsessive Attention to the Smallest Details.
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We don&apos;t just supply windows; we engineer the perfect seal
                between your home and the elements. Our master installers undergo
                rigorous training to ensure every frame is plumb, level, and
                perfectly weather-sealed.
              </p>

              <div className="space-y-6">
                {details.map((item, i) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-12 h-12 bg-secondary/10 text-secondary shrink-0 flex items-center justify-center font-bold text-xl rounded-none">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-foreground">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
