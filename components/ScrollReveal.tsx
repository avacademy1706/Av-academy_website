"use client";
import { useEffect, useRef, useState } from "react";

export function useScrollReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number;
  direction?: "up" | "left" | "right";
}

export function Reveal({ children, className = "", delay = 0, direction = "up", style, ...rest }: RevealProps) {
  const { ref, visible } = useScrollReveal();
  const from = direction === "left" ? "translateX(-28px)" : direction === "right" ? "translateX(28px)" : "translateY(28px)";
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : from,
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
