"use client";

import { reviewsMock, ReviewCard } from "@/entities/review";
import { FadeIn } from "@/shared/ui-motion";

export function Testimonials() {
  return (
    <section id="отзывы" className="py-24 bg-muted/40">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <div className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">
              Отзывы клиентов
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Нам доверяют соседи
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {reviewsMock.map((review, i) => (
            <FadeIn key={review.id} delay={0.1 * (i % 3)} direction="up">
              <ReviewCard review={review} testId={`card-review-${i}`} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
