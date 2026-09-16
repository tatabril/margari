"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { Button } from "@/shared/ui/button";
import { FadeIn } from "@/shared/ui-motion";

export function Hero() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section className="relative h-screen flex items-center pt-20 overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent z-10" />
        <Image
          fill
          src="/assets/hero.png"
          alt="Luxury home exterior with modern windows"
          className="w-full h-full object-cover object-center"
          priority
        />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-6 border border-secondary/20">
              <ShieldCheck className="w-4 h-4" />
              <span>Premium Quality Windows</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
              Clarity Meets <span className="text-secondary">Craftsmanship.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed">
              Elevate your home with masterfully engineered windows. Solid,
              reliable, and perfectly installed for a lifetime of uncompromised
              views.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="h-14 px-8 text-base rounded-none bg-primary hover:bg-primary/90"
              >
                Schedule Consultation <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-base rounded-none border-border hover:bg-muted"
              >
                View Collections
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
