import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Link } from "wouter";
import { 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Wrench, 
  ChevronRight,
  Star,
  Quote,
  CheckCircle2,
  Phone,
  Mail,
  MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import heroImg from "../assets/hero.png";
import windowModernImg from "../assets/window-modern.png";
import windowClassicImg from "../assets/window-classic.png";
import craftsmanshipImg from "../assets/craftsmanship.png";

const FadeIn = ({ children, delay = 0, direction = "up", className = "" }: { children: React.ReactNode, delay?: number, direction?: "up" | "down" | "left" | "right", className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directions[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...directions[direction] }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-[100dvh] bg-background text-foreground overflow-hidden font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center text-primary-foreground font-bold text-xl leading-none">
              M
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground">MAGRAGI</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Products</a>
            <a href="#process" className="text-muted-foreground hover:text-foreground transition-colors">Process</a>
            <a href="#craftsmanship" className="text-muted-foreground hover:text-foreground transition-colors">Quality</a>
            <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">Reviews</a>
          </div>
          <div className="flex items-center">
            <Button className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6">
              Get an Estimate
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20 overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent z-10" />
          <img 
            src={heroImg} 
            alt="Luxury home exterior with modern windows" 
            className="w-full h-full object-cover object-center"
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
                Elevate your home with masterfully engineered windows. Solid, reliable, and perfectly installed for a lifetime of uncompromised views.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="h-14 px-8 text-base rounded-none bg-primary hover:bg-primary/90">
                  Schedule Consultation <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-base rounded-none border-border hover:bg-muted">
                  View Collections
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats / Trust Signals */}
      <section className="py-12 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-secondary-foreground/20">
            {[
              { label: "Years Experience", value: "25+" },
              { label: "Windows Installed", value: "10k+" },
              { label: "Lifetime Warranty", value: "100%" },
              { label: "Satisfied Clients", value: "4.9/5" }
            ].map((stat, i) => (
              <FadeIn key={i} delay={0.1 * i} direction="up" className="text-center px-4">
                <div className="text-3xl md:text-5xl font-bold mb-2 tracking-tighter">{stat.value}</div>
                <div className="text-sm md:text-base text-secondary-foreground/80 font-medium uppercase tracking-wider">{stat.label}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="services" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <FadeIn>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Engineered for Every Architecture</h2>
                <p className="text-lg text-muted-foreground">
                  Whether you are restoring a classic colonial or building a modern masterpiece, our collections offer uncompromising thermal performance and structural integrity.
                </p>
              </FadeIn>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn delay={0.2} direction="up">
              <Card className="rounded-none border-border bg-card overflow-hidden group">
                <div className="relative h-[400px] overflow-hidden">
                  <img 
                    src={windowModernImg} 
                    alt="Modern Black Frame Windows" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">The Apex Collection</h3>
                    <p className="text-white/80">Ultra-slim profiles. Maximum glass. Modern aesthetics.</p>
                  </div>
                </div>
                <CardContent className="p-8">
                  <ul className="space-y-4 mb-8">
                    {["Thermally broken aluminum framing", "Triple-pane acoustic glazing", "Minimalist matte black hardware"].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full rounded-none">Explore Apex <ChevronRight className="w-4 h-4 ml-2" /></Button>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.4} direction="up">
              <Card className="rounded-none border-border bg-card overflow-hidden group">
                <div className="relative h-[400px] overflow-hidden">
                  <img 
                    src={windowClassicImg} 
                    alt="Classic White Paned Windows" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">The Heritage Collection</h3>
                    <p className="text-white/80">Timeless detailing. Traditional warmth. Modern efficiency.</p>
                  </div>
                </div>
                <CardContent className="p-8">
                  <ul className="space-y-4 mb-8">
                    {["Premium composite wood core", "Simulated divided lites (SDL)", "Classic white and custom paint finishes"].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full rounded-none">Explore Heritage <ChevronRight className="w-4 h-4 ml-2" /></Button>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section id="craftsmanship" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div className="relative">
                <div className="absolute -inset-4 bg-muted rounded-sm -z-10" />
                <img 
                  src={craftsmanshipImg} 
                  alt="Craftsman installing window" 
                  className="w-full h-auto object-cover relative z-10 shadow-xl"
                />
                <div className="absolute -bottom-8 -right-8 bg-secondary text-secondary-foreground p-8 max-w-xs hidden md:block z-20 shadow-2xl">
                  <Quote className="w-10 h-10 text-primary mb-4 opacity-50" />
                  <p className="text-lg font-medium leading-snug">"A window is only as good as its installation. We never cut corners."</p>
                  <p className="mt-4 text-sm opacity-80 uppercase tracking-widest font-semibold">— Chief Installer</p>
                </div>
              </div>
            </FadeIn>
            
            <div className="max-w-xl">
              <FadeIn delay={0.2} direction="left">
                <div className="text-primary font-semibold tracking-wider uppercase mb-4 text-sm">The Magragi Difference</div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Obsessive Attention to the Smallest Details.</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We don't just supply windows; we engineer the perfect seal between your home and the elements. Our master installers undergo rigorous training to ensure every frame is plumb, level, and perfectly weather-sealed.
                </p>
                
                <div className="space-y-6">
                  {[
                    { title: "Precision Measurement", desc: "Laser-accurate sizing ensures a perfect fit, eliminating drafts and structural stress." },
                    { title: "White-Glove Installation", desc: "We protect your floors, clean our work area daily, and treat your home with profound respect." },
                    { title: "Rigorous Weatherproofing", desc: "Proprietary flashing techniques ensure a watertight seal that outlasts the building code." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-12 h-12 bg-secondary/10 text-secondary shrink-0 flex items-center justify-center font-bold text-xl rounded-none">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 text-foreground">{item.title}</h4>
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

      {/* Process Section */}
      <section id="process" className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">A Seamless Process</h2>
              <p className="text-lg text-background/70">From the first handshake to the final inspection, we make upgrading your home entirely stress-free.</p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-background/20" />
            
            {[
              { icon: Clock, title: "1. Consultation", desc: "We assess your needs, measure your spaces, and provide a clear, no-nonsense estimate." },
              { icon: Wrench, title: "2. Custom Fabrication", desc: "Your windows are manufactured to exact specifications using premium materials." },
              { icon: ShieldCheck, title: "3. Master Installation", desc: "Our certified crew installs your windows flawlessly, backed by our lifetime warranty." }
            ].map((step, i) => (
              <FadeIn key={i} delay={0.2 * i} direction="up" className="relative z-10">
                <div className="bg-foreground flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-secondary flex items-center justify-center rounded-full mb-6 border-8 border-foreground text-secondary-foreground shadow-xl">
                    <step.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-background/70 px-4">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-muted/50 -z-10" />
        <div className="container mx-auto px-6">
          <div className="bg-secondary text-secondary-foreground rounded-none p-12 md:p-20 relative overflow-hidden shadow-2xl max-w-5xl mx-auto text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-background/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />
            
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Ready to see the difference?</h2>
              <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                Schedule a complimentary consultation and discover how Magragi can transform your home's comfort, security, and curb appeal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 px-8 text-base rounded-none bg-primary hover:bg-primary/90 text-primary-foreground border-0">
                  Request an Estimate
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-base rounded-none border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10 hover:text-secondary-foreground">
                  Call (555) 123-4567
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16 border-t border-background/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center text-primary-foreground font-bold text-xl leading-none">
                  M
                </div>
                <span className="text-xl font-bold tracking-tight">MAGRAGI</span>
              </div>
              <p className="text-background/60 max-w-sm mb-8">
                Premium windows engineered for life. Serving residential and commercial clients with uncompromising quality and master craftsmanship.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-background/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                  <span className="sr-only">Facebook</span>
                  <div className="w-4 h-4 bg-current" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }} />
                </div>
                <div className="w-10 h-10 bg-background/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                  <span className="sr-only">Instagram</span>
                  <div className="w-4 h-4 bg-current" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }} />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6 tracking-wider uppercase text-background/50">Contact</h4>
              <ul className="space-y-4 text-background/80">
                <li className="flex items-center gap-3"><Phone className="w-4 h-4" /> (555) 123-4567</li>
                <li className="flex items-center gap-3"><Mail className="w-4 h-4" /> hello@magragi.com</li>
                <li className="flex items-start gap-3"><MapPin className="w-4 h-4 shrink-0 mt-1" /> 123 Architecture Blvd<br/>Suite 400<br/>Design District, NY 10001</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6 tracking-wider uppercase text-background/50">Collections</h4>
              <ul className="space-y-3 text-background/80">
                <li><a href="#" className="hover:text-primary transition-colors">The Apex Collection</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">The Heritage Collection</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Commercial Solutions</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Custom Fabrication</a></li>
              </ul>
            </div>
          </div>
          
          <Separator className="bg-background/10 mb-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-background/50 gap-4">
            <p>&copy; {new Date().getFullYear()} Magragi Windows. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
