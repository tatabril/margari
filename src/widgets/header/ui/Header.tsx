"use client";

import { siteConfig, mainNav } from "@/shared/config";

import { MessengerLinks } from "@/features/messenger-links";
import { MobileMenu } from "./MobileMenu";
import { BurgerButton } from "./BurgerButton";
import { useState } from "react";
import { useMediaQuery } from "@/shared/hooks";
import { CallButtonMobile, CallButtonDesktop } from "@/features/call-to-action";
import Link from "next/link";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 1024px)");

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  }
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 lg:px-6 py-2 flex items-center justify-between gap-4 min-h-18">
        <div className="flex items-center gap-5 justify-start">
        <BurgerButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
        <Link
          href="/"
          data-testid="link-logo"
          className="flex flex-col leading-tight shrink-0 group"
          onClick={handleLogoClick}
        >
          <span className="sm:text-4xl text-2xl font-extrabold italic tracking-tight text-primary group-hover:text-sidebar-primary transition-colors">
            {siteConfig.brand}
          </span>
          <span className="hidden lg:inline text-xs text-muted-foreground font-normal leading-tight max-w-55">
            {siteConfig.tagline}
          </span>
        </Link>
        </div>

        <div className="hidden md:flex flex-col items-center gap-1 flex-1">
          <div className="text-sm text-muted-foreground tracking-wide flex lg:flex-row flex-col items-center">
           <span> 📍 {siteConfig.geo}</span>
           <span className="hidden lg:inline">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
           <span>{siteConfig.hours}</span>
          </div>
          <div className="hidden lg:flex items-center gap-1">
            {mainNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                data-testid={`nav-${item.href.slice(1)}`}
                className="px-3 py-1 text-base font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 rounded transition-colors whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <div>
            {isMobile ? <CallButtonMobile isPhoneIcon /> : <CallButtonDesktop size="sm"/>}
          </div>
          <MessengerLinks />
        </div>
      </div>
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </nav>
  );
}
