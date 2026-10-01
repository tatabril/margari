"use client";

import { SiTelegram } from "react-icons/si";
import { siteConfig } from "@/shared/config";
import { cn } from "@/shared/lib/utils";
import { MaxIcon } from "@/shared/assets/max-icon";

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
        className="sm:w-9 w-10 sm:h-9 h-10 flex items-center justify-center rounded-sm sm:bg-[#2AABEE] bg-none sm:text-white text-gray-400 hover:bg-[#1e96d4] transition-colors"
        aria-label="Telegram"
      >
        <SiTelegram className="sm:w-4 sm:h-4 w-8 h-8" />
      </a>

      <a
        href={siteConfig.messengers.max}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="link-max"
        className="w-9 h-9 flex items-center justify-center rounded-sm sm:bg-linear-to-bl sm:from-max-blue sm:via-max-purple sm:to-max-cyan sm:text-white bg-none text-gray-400 hover:text-white/85 transition-colors font-bold text-[11px] tracking-tight"
        aria-label="MAX"
      >
        <MaxIcon className="sm:w-4 sm:h-4 w-8 h-8" />
      </a>
    </div>
  );
}
