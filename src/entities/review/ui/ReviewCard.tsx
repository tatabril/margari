import type { Review } from "../model/types";

type ReviewCardProps = {
  review: Review;
  testId?: string;
};

export function ReviewCard({ review, testId }: ReviewCardProps) {
  return (
    <div
      data-testid={testId}
      className="bg-card border border-border p-6 flex flex-col gap-4 h-full shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex gap-0.5">
        {Array.from({ length: review.rating }).map((_, s) => (
          <svg
            key={s}
            className="w-4 h-4 fill-primary text-primary"
            viewBox="0 0 20 20"
          >
            <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.44.91-5.32L2.27 6.62l5.34-.78z" />
          </svg>
        ))}
      </div>

      <p className="text-muted-foreground text-sm leading-relaxed flex-1">
        «{review.text}»
      </p>

      <div className="flex items-center justify-between pt-3 border-t border-border">
        <div>
          <div className="font-semibold text-sm text-foreground">
            {review.name}
          </div>
          <div className="text-xs text-muted-foreground">{review.city}</div>
        </div>
        <span className="text-[11px] font-medium text-primary bg-primary/8 px-2 py-1 rounded-full border border-primary/20">
          {review.service}
        </span>
      </div>
    </div>
  );
}
