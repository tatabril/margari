"use client";

import { CallButton } from "@/features/call-to-action";
import { RequestEstimateButton } from "@/features/contact-request";
import { FadeIn } from "@/shared/ui-motion";
import { siteConfig } from "@/shared/config";

export function Cta() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-muted/50 -z-10" />
      <div className="container mx-auto px-6">
        <div className="bg-secondary text-secondary-foreground rounded-none p-12 md:p-20 relative overflow-hidden shadow-2xl max-w-5xl mx-auto text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-background/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Ready to see the difference?
            </h2>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
              Schedule a complimentary consultation and discover how{" "}
              {siteConfig.brandLatin} can transform your home&apos;s comfort,
              security, and curb appeal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <RequestEstimateButton href="#services" />
              <CallButton
                size="lg"
                variant="outline"
                showIcon={false}
                label={`Call ${siteConfig.phoneDisplay}`}
                className="h-14 px-8 text-base rounded-none border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10 hover:text-secondary-foreground"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
