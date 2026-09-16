import { Clock, ShieldCheck, Wrench } from "lucide-react";
import type { ProcessStep } from "./types";

export const processStepsMock: ProcessStep[] = [
  {
    id: "consultation",
    icon: Clock,
    title: "1. Consultation",
    description:
      "We assess your needs, measure your spaces, and provide a clear, no-nonsense estimate.",
  },
  {
    id: "fabrication",
    icon: Wrench,
    title: "2. Custom Fabrication",
    description:
      "Your windows are manufactured to exact specifications using premium materials.",
  },
  {
    id: "installation",
    icon: ShieldCheck,
    title: "3. Master Installation",
    description:
      "Our certified crew installs your windows flawlessly, backed by our lifetime warranty.",
  },
];
