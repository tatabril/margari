"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { FadeIn } from "@/shared/ui-motion";
import { siteConfig } from "@/shared/config";

export function Craftsmanship() {
  const details = siteConfig.craftsmanship;

  const headerDetails = (
    <div className="mt-8">
      <div className="text-primary font-semibold tracking-wider uppercase mb-4 text-sm">
        мы отвечаем за качество
      </div>
      <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
        Наши преимущества
      </h2>
      <p className="text-lg text-muted-foreground mb-8 lg:w-2/3 xl:w-full">
        Отвечаем за каждый миллиметр монтажного шва. Опыт наших мастеров и строгий
        контроль качества гарантируют: окна будут установлены идеально ровно и
        надежно защищены от любой непогоды, промерзаний и уличного шума
      </p>
    </div>
  );

  const listDetails = details.map((item, i) => (
    <div key={item.title} className="flex gap-4">
      <div className="w-12 h-12 bg-secondary/10 text-secondary shrink-0 flex items-center justify-center font-bold text-xl rounded">
        {i + 1}
      </div>
      <div>
        <h4 className="text-xl font-bold mb-2 text-foreground">{item.title}</h4>
        <p className="text-muted-foreground">{item.desc}</p>
      </div>
    </div>
  ));

  const imageDetails = (
    <div className="relative w-full md:min-w-112.5 xl:min-w-0 aspect-4/3 shrink-0">
      <div className="absolute -inset-4 bg-muted rounded-sm -z-10" />

      <Image
        fill
        src="/assets/craftsmanship.png"
        alt="Craftsman installing window"
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 550px"
        className="object-cover rounded-sm shadow-xl"
      />

      <div className="sm:block hidden absolute bg-secondary text-secondary-foreground p-6 md:p-8 max-w-xs z-20 shadow-2xl rounded-sm -bottom-8 -right-4 sm:-right-8 xl:-bottom-12 xl:-right-12">
        <Quote className="w-8 h-8 md:w-10 md:h-10 text-primary mb-4 opacity-50 block" />
        <p className="font-medium leading-snug text-base xl:text-lg">
          &quot;Даже самое дорогое немецкое окно не будет держать тепло, если
          мастер сэкономил на пене или нарушил геометрию при монтаже. Мы
          контролируем каждый шаг&quot;
        </p>
        <p className="mt-4 opacity-80 uppercase tracking-widest font-semibold text-[12px] xl:text-sm">
          — Наш мастер-установщик
        </p>
      </div>
    </div>
  );

  return (
    <section id="advantages" className="md:py-24 py-12 bg-background overflow-x-hidden">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col xl:grid xl:grid-cols-2 gap-12 xl:gap-16 items-start">
          
          {/* Левая колонка (Контейнер для анимации хедера на планшетах) */}
          <div className="w-full flex flex-col gap-4">
            <FadeIn direction="up">
              {headerDetails}
            </FadeIn>
            
            {/* Обертка для картинки, которая на планшетах встает в ряд со списком */}
            <div className="flex flex-col lg:flex-row xl:block gap-12 w-full items-start">
              <div className="w-full lg:max-w-[50%]  xl:max-w-none">
                <FadeIn direction="right">
                  {imageDetails}
                </FadeIn>
              </div>

              {/* На экранах lg список встанет СПРАВА от картинки, а на больших (xl) уйдет в правую колонку грида */}
              <div className="w-full mt-8 lg:mt-0 xl:hidden">
                <FadeIn direction="left" delay={0.2}>
                  <div className="space-y-6">{listDetails}</div>
                </FadeIn>
              </div>
            </div>
          </div>

          {/* Правая колонка грида (Отображается ТОЛЬКО на больших экранах xl+) */}
          <div className="max-w-xl hidden xl:block pt-32 place-self-center">
            <FadeIn delay={0.2} direction="left">
              <div className="space-y-6">{listDetails}</div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
