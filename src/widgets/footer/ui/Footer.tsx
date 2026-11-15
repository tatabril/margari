"use client";

import { MapPin, Phone, Clock } from "lucide-react";
import { Separator } from "@/shared/ui/separator";
import { siteConfig } from "@/shared/config";
import { servicesMock } from "@/entities/service";
import { MessengerLinks } from "@/features/messenger-links";
import { useMediaQuery, useCallPhone } from "@/shared/hooks";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/ui/tooltip";
import Link from "next/link";

import { legalInfo } from "../config";

export function Footer() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { handleDesktopClick } = useCallPhone(siteConfig.phone);

  return (
    <footer className="bg-foreground text-background pt-16 pb-6 border-t border-background/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 lg:grid-cols-5 md:gap-12 gap-9 md:mb-12 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 md:mb-6 mb-4">
              <span className="text-xl font-bold italic tracking-tight">
                {siteConfig.brand} - оконная компания
              </span>
            </div>
            <p className="text-background/60 max-w-sm md:mb-8 mb-6">
              {siteConfig.description}
            </p>
            <p className="text-background/60 max-w-sm md:mb-4 mb-3">Мы на связи в мессенджерах:</p>
            <MessengerLinks />
          </div>

          <div>
            <h4 className="font-bold text-lg md:mb-6 mb-4 tracking-wider uppercase text-background/50">
              Контакты
            </h4>
            <ul className="space-y-4 text-background/80">
              <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                <Phone className="w-4 h-4" />
                {isMobile ? <a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a> : (

<Tooltip>
<TooltipTrigger asChild onClick={handleDesktopClick}>
<span>{siteConfig.phoneDisplay}</span>
</TooltipTrigger>
<TooltipContent className="bg-primary text-white">
   <p>Копировать номер</p>
</TooltipContent>
</Tooltip>
                )}
              </li>
             
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 shrink-0 mt-1" />
                {siteConfig.address.line1}
                <br />
                {siteConfig.address.line2}
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 shrink-0 mt-1" /> {siteConfig.hours}
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="font-bold text-lg mb-6 tracking-wider uppercase text-background/50">
              Услуги
            </h4>
            <ul className="md:space-y-3 space-y-2 text-background/80">
              {servicesMock.map((service) => (
                <li key={service.id} id={service.id}>
                  <a
                    href={`#${service.id}`}
                    className="hover:text-white transition-colors"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 tracking-wider uppercase text-background/50">
              Юридическая информация
            </h4>
            <ul className="md:space-y-3 space-y-2 text-background/80">
              
                <li>
                    {legalInfo.companyName}
                </li>
                <li>
                    {legalInfo.inn}
                </li>
                <li>
                    {legalInfo.ogrn}
                </li>              
            </ul>
          </div>
          
        </div>

        <Separator className="bg-background/10 mb-8" />

        <div className="grid md:grid-cols-4 md:gap-12 gap-2 md:mb-12 mb-2 text-sm text-background/50">
          <p className="md:col-span-2">
            &copy; {new Date().getFullYear()} {siteConfig.brand}.
           Все права защищены.
          </p>
          {/* <div className="flex gap-6"> */}
            <Link 
              href="/privacy" 
              className="hover:text-background transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              >
              Политика конфиденциальности
            </Link>
            <Link href="/terms" className="hover:text-background transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              >
              Пользовательское соглашение
            </Link>
          {/* </div> */}
        </div>
      </div>
    </footer>
  );
}
