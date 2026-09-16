"use client";

import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/lib/utils";

type RequestEstimateButtonProps = {
  className?: string;
  label?: string;
  href?: string;
};

/** CTA until full contact form/API is wired */
export function RequestEstimateButton({
  className,
  label = "Request an Estimate",
  href = "#отзывы",
}: RequestEstimateButtonProps) {
  return (
    <Button
      asChild
      size="lg"
      className={cn(
        "h-14 px-8 text-base rounded-none bg-primary hover:bg-primary/90 text-primary-foreground border-0",
        className,
      )}
    >
      <a href={href}>{label}</a>
    </Button>
  );
}
