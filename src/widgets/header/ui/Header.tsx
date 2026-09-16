"use client";

import { siteConfig, mainNav } from "@/shared/config";
import { CallButton } from "@/features/call-to-action";
import { MessengerLinks } from "@/features/messenger-links";

export function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 lg:px-6 py-2 flex items-center justify-between gap-4 min-h-[72px]">
        <a
          href="#top"
          data-testid="link-logo"
          className="flex flex-col leading-tight shrink-0 group"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <span className="text-2xl font-extrabold tracking-tight text-foreground group-hover:text-primary transition-colors">
            {siteConfig.brand}
          </span>
          <span className="text-[11px] text-muted-foreground font-normal leading-tight max-w-[220px]">
            {siteConfig.tagline}
          </span>
        </a>

        <div className="hidden md:flex flex-col items-center gap-1 flex-1">
          <div className="text-[11px] text-muted-foreground tracking-wide">
            📍 {siteConfig.geo}&nbsp;&nbsp;|&nbsp;&nbsp;{siteConfig.hours}
          </div>
          <div className="flex items-center gap-1">
            {mainNav.map((item) => (
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

        <div className="flex items-center gap-2 shrink-0">
          <div className="hidden sm:block">
            <CallButton className="rounded-sm bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-4 py-2 text-sm h-auto" />
          </div>
          <MessengerLinks />
        </div>
      </div>
    </nav>
  );
}
