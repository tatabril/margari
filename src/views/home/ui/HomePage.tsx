import { Header } from "@/widgets/header";
import { Hero } from "@/widgets/hero";
import { TrustStats } from "@/widgets/trust-stats";
import { Services } from "@/widgets/services";
import { Craftsmanship } from "@/widgets/craftsmanship";
import { Process } from "@/widgets/process";
import { Testimonials } from "@/widgets/testimonials";
import { Cta } from "@/widgets/cta";
import { Footer } from "@/widgets/footer";

export function HomePage() {
  return (
    <div className="min-h-dvh bg-background text-foreground overflow-hidden font-sans">
      <Header />
      <main>
        <Hero />
        <TrustStats />
        <Services />
        <Craftsmanship />
        <Process />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
