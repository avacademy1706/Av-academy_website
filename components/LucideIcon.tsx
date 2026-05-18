"use client";
import * as Icons from "lucide-react";
import type { LucideProps } from "lucide-react";

interface LucideIconProps {
  name: string;
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export default function LucideIcon({ name, size = 24, color = "currentColor", strokeWidth = 1.5 }: LucideIconProps) {
  const allIcons = Icons as unknown as Record<string, React.ComponentType<LucideProps>>;
  const IconComponent = allIcons[name];
  if (!IconComponent) return null;
  return <IconComponent size={size} color={color} strokeWidth={strokeWidth} />;
}
