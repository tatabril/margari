"use client";

import { Phone } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { siteConfig } from "@/shared/config";
import { cn } from "@/shared/lib/utils";
import { useCallPhone, useMediaQuery } from "@/shared/hooks";
import { ArrowRight } from "lucide-react";

type CallButtonProps = {
  className?: string;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
  showIcon?: boolean;
  isPhoneIcon?: boolean;
  isArrowRight?: boolean;
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
    >
      <a 
        href={`tel:${siteConfig.phone}`} 
        data-testid={testId} 
        onClick={handleDesktopClick}
        className="flex items-center justify-center w-full h-full" 
      >
        {showIcon ? <Phone className="sm:w-3.5 sm:h-3.5 w-5 h-5 sm:mr-1.5 mr-0.5 shrink-0" /> : null}
        {label ? <>
        <span className="@hover:group-hover:opacity-0 transition-opacity w-fit whitespace-nowrap">{label}</span>
        <span className="absolute inset-0 flex items-center justify-center opacity-0 @hover:group-hover:opacity-100 transition-opacity text-xs bg-primary-foreground text-primary rounded-sm font-bold">
          {isCopied ? <span className="text-green-700">✓ Номер скопирован!</span> : "📋 Cкопировать номер"}
        </span>
        </> : null}
      </a>
    </Button>
  );
}

export function CallButtonDialog() {
  const { isCopied, handleDesktopClick } = useCallPhone(siteConfig.phone);
  const isMobile = useMediaQuery("(max-width: 1024px)");

  return (
    <Button
        onClick={handleDesktopClick}
        className="h-14 px-8 text-base rounded-none bg-primary hover:bg-primary/90 relative group active:scale-95 transition-transform cursor-pointer"
        type="button"
      >
        {isMobile ?  <a href={`tel:${siteConfig.phone}`} data-testid="link-phone" className="flex flex-row no-underline items-center">
          Позвонить мастеру <ArrowRight className="ml-2 w-5 h-5" /></a> :
         <span className="group-hover:opacity-0 transition-opacity w-fit whitespace-nowrap">
          Позвонить: <span className="font-semibold text-xl">{siteConfig.phoneDisplay}</span>
        </span>}
        <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-primary-foreground text-primary rounded-sm font-bold">
          {isCopied ? <span className="text-green-700">✓ Номер скопирован!</span> : "📋 Клик — скопировать номер"}
        </span>
      </Button>
  )
}


interface CallButtonMobileProps extends CallButtonProps {
  isPhoneIcon?: boolean;
  isArrowRight?: boolean;
}

export function CallButtonMobile({isPhoneIcon = true, label, isArrowRight = false}: CallButtonMobileProps) {

  return (
    <div className={cn("lg:hidden relative group active:scale-95 transition-transform cursor-pointer bg-primary text-primary-foreground font-semibold border border-primary-border flex items-center justify-center", 
     ( isPhoneIcon && !label) && "px-2 py-2 rounded-full w-10 aspect-square", 
     label && "h-14 px-8 text-base rounded-none hover:bg-primary/90 font-medium"
     
     )}>
      <a 
       href={`tel:${siteConfig.phone}`} 
       target="_blank"
       rel="noopener noreferrer"
       data-testid="link-phone" 
       className="flex flex-row no-underline items-center">
        {isPhoneIcon ? <Phone className="w-5 h-5 mr-0.5 shrink-0" /> : null}
        {label ? <span className="whitespace-nowrap">{label}</span> : null}
        {isArrowRight ? <ArrowRight className="ml-2 w-5 h-5" /> : null}
      </a>
    </div>

  )}

  export function CallButtonDesktop({label, size = "default"}: CallButtonProps) {
    const { isCopied, handleDesktopClick } = useCallPhone(siteConfig.phone);

    return (
      <Button
      onClick={handleDesktopClick}
      className={cn("lg:block hidden h-14 px-8 text-base rounded-none bg-primary hover:bg-primary/90 relative group active:scale-95 transition-transform cursor-pointer", size === "sm" && "h-9 px-4")}
      type="button"
      size={size}
    >
       <span className="group-hover:opacity-0 transition-opacity w-fit whitespace-nowrap flex items-center justify-center gap-2">
        {label ? label : <Phone className="w-3.5 h-3.5 mr-1.5 shrink-0" />}
        <span className={cn("font-semibold text-xl", size === "sm" && "text-base")}>{siteConfig.phoneDisplay}</span>
      </span>
      <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-primary-foreground text-primary rounded-sm font-bold">
        {isCopied ? <span className="text-green-700">✓ Номер скопирован!</span> : "📋 Cкопировать номер"}
      </span>
    </Button>
    )
  }
