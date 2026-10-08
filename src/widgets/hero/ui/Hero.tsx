"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import Image from "next/image";
import { Button } from "@/shared/ui/button";
import { FadeIn } from "@/shared/ui-motion";
import { useMediaQuery } from "@/shared/hooks";
import { MaxIcon } from "@/shared/assets/max-icon";
import { FaTelegramPlane } from "react-icons/fa";
import { siteConfig } from "@/shared/config";
import { CallButtonMobile, CallButtonDesktop } from "@/features/call-to-action";


export function Hero() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const isMobile = useMediaQuery("(max-width: 1024px)");

  return (
    <section className="relative lg:h-screen h-auto flex items-center pt-20 lg:overflow-hidden overflow-visible">
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-background to-transparent z-10" />
        <Image
          fill
          src="/assets/fon_margari.jpg"
          alt="Luxury home exterior with modern windows"
          className="w-full h-full object-cover object-center opacity-80"
          priority
        />
      </motion.div>

      <div className="container mx-auto px-6 relative lg:py-0 py-10 z-10">
        <div className="max-w-2xl">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-6 border border-secondary/20">
              <ShieldCheck className="w-4 h-4" />
              <span>Немецкие материалы и монтаж строго по ГОСТу</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
            Надежная защита ваших 
            <span className="text-secondary"> окон <br /> под ключ</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-base md:text-lg lg:text-xl text-foreground/80 mb-10 max-w-lg leading-relaxed">
            Оконная компания «Ма́ргари». Комплексное остекление балконов, ремонт и модернизация окон в Ростове и Батайске. 
            Полная профилактика конструкций — всего от 1000₽. 
            Работаем честно по договору с гарантией 3 года.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4">
              {isMobile ? <CallButtonMobile  
                 isArrowRight 
                 isPhoneIcon={false}
                 label="Позвонить мастеру" /> : <CallButtonDesktop label="Позвонить:"/>}
      
      <div className="flex flex-row gap-2">
             <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 lg:px-8 px-5 text-base rounded-none border-border hover:bg-muted cursor-pointer"
              >
                  <a
                    href={siteConfig.messengers.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="link-telegram"
                    aria-label="Telegram"
                    className="w-full h-full"
                  >
                    <FaTelegramPlane/>
                  </a>
              </Button>
              <Button
              asChild
                size="lg"
                variant="outline"
                className="h-14 lg:px-8 px-5 text-base rounded-none border-border hover:bg-muted cursor-pointer"
              >
                 <a
        href={siteConfig.messengers.max}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="link-max"
        aria-label="MAX"
        className="w-full h-full"
      >
               <MaxIcon/>
      </a>
              </Button>
      </div>
              
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
