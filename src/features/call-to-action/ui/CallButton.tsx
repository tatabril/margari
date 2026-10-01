"use client";

import { Phone } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { siteConfig } from "@/shared/config";
import { cn } from "@/shared/lib/utils";
import { useCallPhone } from "@/shared/hooks";

type CallButtonProps = {
  className?: string;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
  showIcon?: boolean;
  label?: string;
  testId?: string;
};

export function CallButton({
  className,
  variant = "default",
  size = "default",
  showIcon = true,
  label,
  testId = "link-phone",
}: CallButtonProps) {
  const { handleDesktopClick, isCopied } = useCallPhone(siteConfig.phone);
  return (
    <Button
      asChild
      variant={variant}
      size={size}
      className={cn(className, "relative group active:scale-95 transition-transform cursor-pointer")}
      onClick={handleDesktopClick}
    >
      <a href={`tel:${siteConfig.phone}`} data-testid={testId}>
        {showIcon ? <Phone className="sm:w-3.5 sm:h-3.5 w-5 h-5 sm:mr-1.5 mr-0.5" /> : null}
        {label ? <>
        <span className="group-hover:opacity-0 transition-opacity w-fit whitespace-nowrap">{label}</span>
        <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-primary-foreground text-primary rounded-sm font-bold">
          {isCopied ? <span className="text-green-700">✓ Номер скопирован!</span> : "📋 Cкопировать номер"}
        </span>
        </> : null}
      </a>
    </Button>
  );
}
