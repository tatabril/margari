import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/lib/utils";

interface MessageButtonProps {
    href: string;
    ariaLabel: string;
    testId: string;
    icon: React.ReactNode;
    size?: "default" | "sm" | "lg" | "icon";
    className?: string;
    label?: string;
}

export function MessageButton({href, ariaLabel, testId, icon, size = "lg", className, label}: MessageButtonProps) {
    return (
        <Button
           asChild
           size={size}
           variant="outline"
           className={cn("h-14 lg:px-8 px-5 text-base rounded-none border-border hover:bg-muted cursor-pointer", className)}
        >
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={testId}
              aria-label={ariaLabel}
              className="w-full h-full"
            >
              {label ? <span className="whitespace-nowrap">{label}</span> : null}
               {icon}
             
      </a>
              </Button>
    )
}