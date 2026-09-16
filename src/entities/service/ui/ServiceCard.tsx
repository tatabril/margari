import Image from "next/image";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { Card, CardContent } from "@/shared/ui/card";
import type { Service } from "../model/types";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="rounded-none border-border bg-card overflow-hidden group">
      <div className="relative h-[400px] overflow-hidden">
        <Image
          fill
          src={service.image}
          alt={service.alt}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-6 left-6 text-white">
          <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
          <p className="text-white/80">{service.subtitle}</p>
        </div>
      </div>
      <CardContent className="p-8">
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
        <Button variant="outline" className="w-full rounded-none">
          {service.cta} <ChevronRight className="w-4 h-4 ml-2" />
        </Button>
      </CardContent>
    </Card>
  );
}
