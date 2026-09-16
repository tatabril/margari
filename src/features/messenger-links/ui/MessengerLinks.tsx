"use client";

import { SiTelegram } from "react-icons/si";
import { siteConfig } from "@/shared/config";
import { cn } from "@/shared/lib/utils";

type MessengerLinksProps = {
  className?: string;
};

export function MessengerLinks({ className }: MessengerLinksProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <a
        href={siteConfig.messengers.telegram}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="link-telegram"
        className="w-9 h-9 flex items-center justify-center rounded-sm bg-[#2AABEE] text-white hover:bg-[#1e96d4] transition-colors"
        aria-label="Telegram"
      >
        <SiTelegram className="w-4 h-4" />
      </a>

      <a
        href={siteConfig.messengers.max}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="link-max"
        className="w-9 h-9 flex items-center justify-center rounded-sm bg-[#2688EB] text-white hover:bg-[#1a70c9] transition-colors font-bold text-[11px] tracking-tight"
        aria-label="MAX"
      >
        MAX
      </a>
    </div>
  );
}
