import type { ProcessStep } from "../model/types";

type ProcessStepCardProps = {
  step: ProcessStep;
};

export function ProcessStepCard({ step }: ProcessStepCardProps) {
  const Icon = step.icon;

  return (
    <div className="bg-foreground flex flex-col items-center text-center">
      <div className="w-24 h-24 bg-secondary flex items-center justify-center rounded-full mb-6 border-8 border-foreground text-secondary-foreground shadow-xl">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
      <p className="text-background/70 px-4">{step.description}</p>
    </div>
  );
}
