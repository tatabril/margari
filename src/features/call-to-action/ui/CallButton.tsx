"use client";

import { Phone } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { siteConfig } from "@/shared/config";
import { cn } from "@/shared/lib/utils";

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
  label = siteConfig.phoneDisplay,
  testId = "link-phone",
}: CallButtonProps) {
  return (
    <Button
      asChild
      variant={variant}
      size={size}
      className={cn(className)}
    >
      <a href={`tel:${siteConfig.phone}`} data-testid={testId}>
        {showIcon ? <Phone className="w-3.5 h-3.5 mr-1.5" /> : null}
        {label}
      </a>
    </Button>
  );
}
