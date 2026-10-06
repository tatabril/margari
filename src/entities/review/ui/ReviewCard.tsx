import type { Review } from "../model/types";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/shared/ui/tooltip"

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
      <div className="flex items-center justify-between">
        <div className="flex gap-0.5">
        {Array.from({ length: review.rating }).map((_, s) => (
          <svg
            key={s}
            className="w-4 h-4 fill-amber-400 text-primary"
            viewBox="0 0 20 20"
          >
            <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.44.91-5.32L2.27 6.62l5.34-.78z" />
          </svg>
        ))}
        </div>
        <Tooltip>
      <TooltipTrigger asChild>
      <a
          href={review.link}
          target="_blank"
          rel="noopener noreferrer"
          title="Открыть оригинал отзыва на Яндекс Картах"
          className="w-8 h-8 rounded-lg flex items-center justify-center text-foreground/60 hover:text-[#fc3f1d] hover:bg-[#fc3f1d]/5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary shrink-0 relative"
        >
          <Image
      src="https://img.icons8.ru/external-tal-revivo-color-tal-revivo/24/external-yandex-a-russian-multinational-corporation-specializing-in-internet-related-products-and-services-logo-color-tal-revivo.png"
      alt="Yandex logo"
      width={24} 
      height={24}
    />
        </a>
      </TooltipTrigger>
      <TooltipContent>
        <p>Читать оригинал на Яндекс Картах</p>
      </TooltipContent>
    </Tooltip>
       
      </div>

      <p className="text-muted-foreground text-sm leading-relaxed flex-1">
        «{review.text}»
      </p>
      {/* <a href={review.link} target="_blank" rel="noopener noreferrer" className="text-primary text-sm">Посмотреть на Яндекс Картах</a> */}

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
