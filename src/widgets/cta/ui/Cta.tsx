"use client";

import { CallButton } from "@/features/call-to-action";
import { RequestEstimateButton } from "@/features/contact-request";
import { FadeIn } from "@/shared/ui-motion";
import { siteConfig } from "@/shared/config";
import { CallButtonMobile, CallButtonDesktop } from "@/features/call-to-action";
import { useCallPhone } from "@/shared/hooks";
import { useMediaQuery } from "@/shared/hooks";
import { MessageButton } from "@/features/call-to-action";
import { FaTelegramPlane } from "react-icons/fa";
import { MaxIcon } from "@/shared/assets/max-icon";


export function Cta() {
  const isMobile = useMediaQuery("(max-width: 1024px)");

  return (
    <section className="md:py-24 py-12 relative overflow-hidden bg-background" id="contacts">
      <div className="absolute inset-0 bg-muted/50 -z-10" />
      <div className="container mx-auto px-6">
        <div className="bg-secondary text-secondary-foreground rounded-none p-12 md:p-20 relative overflow-hidden shadow-2xl max-w-5xl mx-auto text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-background/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

          <FadeIn>
            <h2 className="text-3xl md:text-6xl font-bold mb-6 tracking-tight">
            Есть вопросы? Звоните!
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Подскажем стоимость ремонта по вашим описаниям, 
            сориентируем по срокам и материалам. Работаем без выходных по Ростову и Батайску.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {isMobile ? <CallButtonMobile  
                 isArrowRight 
                 isPhoneIcon={false}
                 label="Позвонить мастеру" /> : <CallButtonDesktop />}

           <div className="h-13 flex gap-4 items-center justify-center">
            <MessageButton 
            href={siteConfig.messengers.telegram} 
            ariaLabel="Telegram" 
            testId="link-telegram" 
            icon={<FaTelegramPlane size={24} />} 
            className="hover:text-foreground/80"
            />
            
            <MessageButton 
            href={siteConfig.messengers.max} 
            ariaLabel="Max" 
            testId="link-max" 
            icon={<MaxIcon size={24} />} 
            className="hover:text-foreground/80"
            />
            </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
