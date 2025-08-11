import { ReactNode } from "react";
import { useIntersectionAnimation } from "@/hooks/useIntersectionAnimation";

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: "fade-up" | "fade-in" | "slide-in-left" | "slide-in-right" | "scale";
  delay?: number;
  className?: string;
}

export default function AnimatedSection({
  children,
  animation = "fade-up",
  delay = 0,
  className = ""
}: AnimatedSectionProps) {
  const { ref, isVisible } = useIntersectionAnimation();

  const animationClasses = {
    "fade-up": "translate-y-10 opacity-0",
    "fade-in": "opacity-0",
    "slide-in-left": "-translate-x-20 opacity-0",
    "slide-in-right": "translate-x-20 opacity-0",
    "scale": "scale-95 opacity-0"
  };

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700 ease-out
        ${!isVisible ? animationClasses[animation] : "translate-x-0 translate-y-0 scale-100 opacity-100"}
        ${className}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}