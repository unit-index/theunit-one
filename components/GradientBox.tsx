import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export default function GradientBox({
  className,
  children
}: { 
  className?: string,
  children: ReactNode 
}) {
  return (
    <div className={twMerge("rounded-2xl bg-gradient-to-r from-unit-blue via-[#F6F6F6] to-unit-orange", className)}>
      { children }
    </div>
  )
}