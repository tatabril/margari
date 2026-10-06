"use client";

import { servicesMock, ServiceCard } from "@/entities/service";
import { FadeIn } from "@/shared/ui-motion";
import { Dialog, DialogTrigger } from "@/shared/ui/dialog";
import { Button } from "@/shared/ui/button";
import { ChevronRight } from "lucide-react";
import { DialogContactUs } from "@/features/call-to-action/ui/DialogContactUs";

export function Services() {
  const isOdd = servicesMock.length % 2 !== 0;

  const regularServices = isOdd ? servicesMock.slice(0, -1) : servicesMock;
  const lastService = isOdd ? servicesMock[servicesMock.length - 1] : null;

  const serviceActionComponent = (cta: string) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full rounded-none cursor-pointer">
          {cta} <ChevronRight className="w-4 h-4 ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContactUs />
    </Dialog>
  );

  return (
    <section id="services" className="md:py-24 py-12 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
                Услуги
              </h2>
              <p className="text-lg text-muted-foreground">
              Решаем любые задачи по остеклению и ремонту окон с гарантией результата.
               Используем проверенные немецкие комплектующие и монтируем строго по ГОСТу, 
               чтобы защитить ваш дом от холода, шума и сквозняков на долгие годы
              </p>
            </FadeIn>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {regularServices.map((service, i) => (
            <FadeIn key={service.id} delay={0.2 * (i + 1)} direction="up" className="w-full h-full flex">
              <ServiceCard service={service} actionComponent={
                serviceActionComponent(service.cta)
              }/>
            </FadeIn>
          ))}
        </div>

          {isOdd && lastService && (
        <FadeIn delay={0.2 * servicesMock.length} direction="up" className="mt-8">
          <ServiceCard 
          service={lastService} 
          isFullWidth={true} 
          actionComponent={
            serviceActionComponent(lastService.cta)
            }/>
        </FadeIn>
        )}
      </div>
    </section>
  );
}
