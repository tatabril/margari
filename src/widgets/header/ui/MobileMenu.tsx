"use client";
import { siteConfig, mainNav } from "@/shared/config";
import { CallButton } from "@/features/call-to-action";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div
      className={`lg:hidden fixed inset-x-0 top-18 bg-background backdrop-blur-lg border-t border-border flex flex-col px-6 py-8 transition-all duration-300 ease-in-out z-40 ${
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
      }`}
    >
      <div className="md:hidden block text-xs text-muted-foreground tracking-wide text-center pb-4 border-b border-border/50">
        📍 {siteConfig.geo} <br /> {siteConfig.hours}
      </div>

      <div className="flex flex-col gap-4 text-center">
        {mainNav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={onClose} // Закрываем при клике на якорь
            className="py-3 text-lg font-semibold text-foreground hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
          >
            {item.label}
          </a>
        ))}
      </div>

      <div className="mt-auto sm:hidden w-full">
        <CallButton 
        className="w-full rounded-md bg-primary text-primary-foreground font-semibold py-3 text-base"
        label={siteConfig.phoneDisplay}
        
     />
      </div>
    </div>
  );
}