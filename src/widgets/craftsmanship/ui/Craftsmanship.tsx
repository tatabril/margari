"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { FadeIn } from "@/shared/ui-motion";

const details = [
  {
    title: "Точные измерения",
    desc: "Лазерная точность при замере и диагностике гарантирует идеальную посадку окон. Это полностью исключает риск сквозняков и скрытых дефектов при эксплуатации",
  },
  {
    title: "Установка и сервис на высшем уровне",
    desc: "Бережно защищаем полы и мебель пленкой перед началом работ. Всегда убираем за собой строительный мусор и сдаем объект в абсолютной чистоте",
  },
  {
    title: "Тщательная защита от непогоды",
    desc: "Строго соблюдаем технологию гидроизоляции швов и герметизации подоконников. Защищаем ваши окна от появления конденсата, наледи и сырости",
  },
  {
    title: "Бескомпромиссная борьба с плесенью",
    desc: "Не маскируем проблему, а полностью уничтожаем источник грибка на откосах и рамах. Обрабатываем поверхности глубокими профессиональными антисептиками",
  },
] as const;

export function Craftsmanship() {
  return (
    <section id="advantages" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <div className="relative aspect-[4/3]">
              <div className="absolute -inset-4 bg-muted rounded-sm -z-10" />
              <Image
                fill
                src="/assets/craftsmanship.png"
                alt="Craftsman installing window"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover relative z-10 shadow-xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-secondary text-secondary-foreground p-8 max-w-xs hidden md:block z-20 shadow-2xl">
                <Quote className="w-10 h-10 text-primary mb-4 opacity-50" />
                <p className="text-lg font-medium leading-snug">
                  &quot;Даже самое дорогое немецкое окно не будет держать тепло, если мастер сэкономил на пене или нарушил геометрию при монтаже. Мы контролируем каждый шаг&quot;
                </p>
                <p className="mt-4 text-sm opacity-80 uppercase tracking-widest font-semibold">
                  — Наш мастер-установщик
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="max-w-xl">
            <FadeIn delay={0.2} direction="left">
              <div className="text-primary font-semibold tracking-wider uppercase mb-4 text-sm">
                 мы отвечаем за качество
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Наши преимущества
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
              Отвечаем за каждый миллиметр монтажного шва. 
              Опыт наших мастеров и строгий контроль качества гарантируют: 
              окна будут установлены идеально ровно и надежно защищены от любой непогоды, промерзаний и уличного шума
              </p>

              <div className="space-y-6">
                {details.map((item, i) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-12 h-12 bg-secondary/10 text-secondary shrink-0 flex items-center justify-center font-bold text-xl rounded-none">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-foreground">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
