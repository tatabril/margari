import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Link from "next/link";
import { SiTelegram } from "react-icons/si";
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
import Image from "next/image";

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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 lg:px-6 py-2 flex items-center justify-between gap-4 min-h-[72px]">

          {/* Left — Logo + descriptor */}
          <a
            href="#top"
            data-testid="link-logo"
            className="flex flex-col leading-tight shrink-0 group"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          >
            <span className="text-2xl font-extrabold tracking-tight text-foreground group-hover:text-primary transition-colors">
            Мáргари
              {/* М<span className="relative">
                А́
              </span>РГАРИ  */}
            </span>
            <span className="text-[11px] text-muted-foreground font-normal leading-tight max-w-[220px]">
              Ремонт и модернизация окон, остекление балконов
            </span>
          </a>

          {/* Center — geo/hours + nav links */}
          <div className="hidden md:flex flex-col items-center gap-1 flex-1">
            <div className="text-[11px] text-muted-foreground tracking-wide">
              📍 Батайск, Ростов, Аксай&nbsp;&nbsp;|&nbsp;&nbsp;Ежедневно с 08:00 до 20:00
            </div>
            <div className="flex items-center gap-1">
              {[
                { label: "Профилактика окон", href: "#профилактика" },
                { label: "Модернизация", href: "#модернизация" },
                { label: "Москитные сетки", href: "#сетки" },
                { label: "Балконы", href: "#балконы" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  data-testid={`nav-${item.href.slice(1)}`}
                  className="px-3 py-1 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 rounded transition-colors whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right — phone + messengers */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href="tel:+79081823188"
              data-testid="link-phone"
              className="hidden sm:block"
            >
              <Button className="rounded-sm bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-4 py-2 text-sm h-auto">
                <Phone className="w-3.5 h-3.5 mr-1.5" />
                8(908)182-31-88
              </Button>
            </a>

            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-telegram"
              className="w-9 h-9 flex items-center justify-center rounded-sm bg-[#2AABEE] text-white hover:bg-[#1e96d4] transition-colors"
              aria-label="Telegram"
            >
              <SiTelegram className="w-4 h-4" />
            </a>

            <a
              href="https://vk.me/"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-max"
              className="w-9 h-9 flex items-center justify-center rounded-sm bg-[#2688EB] text-white hover:bg-[#1a70c9] transition-colors font-bold text-[11px] tracking-tight"
              aria-label="MAX"
            >
              MAX
            </a>
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
          <Image
            fill
            src="/assets/hero.png" 
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
                  <Image
                    fill
                    src="/assets/window-modern.png" 
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
                  <Image
                    fill
                    src="/assets/window-classic.png" 
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
                <Image
                  fill
                  src="/assets/craftsmanship.png" 
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

      {/* Testimonials Section */}
      <section id="отзывы" className="py-24 bg-muted/40">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-14">
              <div className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Отзывы клиентов</div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">Нам доверяют соседи</h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Наталья К.",
                city: "Батайск",
                rating: 5,
                text: "Заказывали профилактику балконного блока и замену уплотнителей. Мастер приехал вовремя, всё объяснил, работал аккуратно. После обслуживания окна стали закрываться плавно, сквозняков нет. Очень довольны — рекомендуем всем соседям!",
                service: "Профилактика окон",
              },
              {
                name: "Дмитрий В.",
                city: "Ростов-на-Дону",
                rating: 5,
                text: "Поставили москитные сетки на все окна квартиры. Сетки плотные, рамки подогнаны идеально — ни одна не болтается. Цена порадовала, а скорость работы удивила: управились за полдня. Теперь лето без комаров — это бесценно.",
                service: "Москитные сетки",
              },
              {
                name: "Светлана и Игорь М.",
                city: "Аксай",
                rating: 5,
                text: "Делали остекление лоджии под ключ. Замеры, монтаж, финишная отделка — всё одна бригада, никаких «третьих лиц». Получили тёплый балкон, теперь там кабинет. Качество швов и стыков на высоте, никаких продувов после первой же зимы.",
                service: "Остекление балконов",
              },
              {
                name: "Андрей Т.",
                city: "Батайск",
                rating: 5,
                text: "Обращался по поводу модернизации старых окон — хотел добавить режим проветривания и поменять фурнитуру. Мастер предложил оптимальный вариант без лишних трат. Теперь окна работают как новые, при этом обошлось намного дешевле полной замены.",
                service: "Модернизация",
              },
              {
                name: "Марина Л.",
                city: "Ростов-на-Дону",
                rating: 5,
                text: "Звонила по телефону — взяли трубку сразу, без ожидания. Мастер приехал на следующий день. Отрегулировал три окна и дверь за час. Цена чисто символическая за такое качество. Буду рекомендовать всем знакомым без раздумий.",
                service: "Профилактика окон",
              },
              {
                name: "Олег Ф.",
                city: "Аксай",
                rating: 5,
                text: "Долго тянул с остеклением балкона, боялся что будет дорого и долго. Оказалось всё наоборот: смету прислали в тот же день, работы заняли два дня. Монтажники убрали за собой весь мусор. Балкон стал любимым местом в квартире.",
                service: "Остекление балконов",
              },
            ].map((review, i) => (
              <FadeIn key={i} delay={0.1 * (i % 3)} direction="up">
                <div
                  data-testid={`card-review-${i}`}
                  className="bg-card border border-border p-6 flex flex-col gap-4 h-full shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Stars */}
                  <div className="flex gap-0.5">
                    {Array.from({ length: review.rating }).map((_, s) => (
                      <svg key={s} className="w-4 h-4 fill-primary text-primary" viewBox="0 0 20 20">
                        <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.44.91-5.32L2.27 6.62l5.34-.78z" />
                      </svg>
                    ))}
                  </div>

                  {/* Review text */}
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">«{review.text}»</p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <div>
                      <div className="font-semibold text-sm text-foreground">{review.name}</div>
                      <div className="text-xs text-muted-foreground">{review.city}</div>
                    </div>
                    <span className="text-[11px] font-medium text-primary bg-primary/8 px-2 py-1 rounded-full border border-primary/20">
                      {review.service}
                    </span>
                  </div>
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
