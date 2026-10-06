import Image from "next/image";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { Card, CardContent } from "@/shared/ui/card";
import type { Service } from "../model/types";
import { cn } from "@/shared/lib/utils";
import { DialogContactUs } from "@/features/call-to-action/ui/DialogContactUs";
import { Dialog, DialogTrigger } from "@/shared/ui/dialog";

type ServiceCardProps = {
  service: Service;
  isFullWidth?: boolean;
  actionComponent?: React.ReactNode;
};

export function ServiceCard({ service, isFullWidth = false, actionComponent }: ServiceCardProps) {
  return (
    <Card className={cn("rounded-none border-border bg-card overflow-hidden group w-full h-full flex flex-col", isFullWidth && "lg:flex-row flex-col")}>
      <div className={cn("relative h-100 overflow-hidden ", isFullWidth && "lg:flex-1 ")}>
        <Image
          fill
          src={service.image}
          alt={service.alt}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className={cn("absolute inset-0 bg-linear-to-t from-black/60 to-transparent" , isFullWidth && "lg:bg-linear-to-b")}/>
        <div className={cn("absolute bottom-6 left-6 text-white", isFullWidth && "lg:bottom-0 lg:top-6")}>
          <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
          <p className="text-white/80">{service.subtitle}</p>
        </div>
      </div>
      <CardContent className="p-8 flex-1 flex flex-col justify-between">
        <ul className="space-y-4 mb-8">
          {service.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3 text-muted-foreground"
            >
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        {actionComponent}
        {/* <Button variant="outline" className="w-full rounded-none cursor-pointer" onClick={onClick}>
          {service.cta} <ChevronRight className="w-4 h-4 ml-2" />
        </Button> */}
      </CardContent>
    </Card>
  );
}
