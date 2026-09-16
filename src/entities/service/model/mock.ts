import type { Service } from "./types";

export const servicesMock: Service[] = [
  {
    id: "apex",
    image: "/assets/window-modern.png",
    alt: "Modern Black Frame Windows",
    title: "The Apex Collection",
    subtitle: "Ultra-slim profiles. Maximum glass. Modern aesthetics.",
    features: [
      "Thermally broken aluminum framing",
      "Triple-pane acoustic glazing",
      "Minimalist matte black hardware",
    ],
    cta: "Explore Apex",
  },
  {
    id: "heritage",
    image: "/assets/window-classic.png",
    alt: "Classic White Paned Windows",
    title: "The Heritage Collection",
    subtitle: "Timeless detailing. Traditional warmth. Modern efficiency.",
    features: [
      "Premium composite wood core",
      "Simulated divided lites (SDL)",
      "Classic white and custom paint finishes",
    ],
    cta: "Explore Heritage",
  },
];
