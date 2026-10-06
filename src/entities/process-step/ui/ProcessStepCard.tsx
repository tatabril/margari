import type { ProcessStep } from "../model/types";

type ProcessStepCardProps = {
  step: ProcessStep;
};

export function ProcessStepCard({ step }: ProcessStepCardProps) {
  const Icon = step.icon;

  return (
    <div className="relative mt-6 flex flex-col items-start text-left bg-background/10 p-6 rounded-lg h-full">
      <div className="absolute -top-6 -left-1.5 w-18 h-18 bg-secondary flex items-center justify-center rounded-full mb-1 border border-foreground text-secondary-foreground shadow-xl">
        <Icon className="w-8 h-8" />
      </div>
      <span className="absolute right-4 bottom-2 text-7xl font-black text-white/9 pointer-events-none select-none">
    {step.id}
  </span>
      <h3 className="text-2xl font-semibold mb-4 pt-12">{step.title}</h3>
      <p className="text-background/70 pr-4">{step.description}</p>
    </div>
  );
}
