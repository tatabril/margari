"use client";

interface BurgerButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

export function BurgerButton({ onClick, isOpen }: BurgerButtonProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="flex flex-col justify-center items-center w-8 h-8 lg:hidden gap-1.5 focus:outline-none"
      aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
    >
      <span className={`h-0.5 w-6 bg-foreground rounded transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
      <span className={`h-0.5 w-6 bg-foreground rounded transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`} />
      <span className={`h-0.5 w-6 bg-foreground rounded transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
    </button>
  );
}