import * as React from "react";
import { cn } from "@/utils/cn";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function SectionHeading({ children, className, ...props }: SectionHeadingProps) {
  return (
    <h2
      className={cn(
        "text-3xl md:text-4xl font-serif font-bold tracking-tight mb-8 text-foreground",
        "flex items-center gap-4",
        className
      )}
      {...props}
    >
      {children}
      <div className="h-px bg-border flex-1 ml-4" />
    </h2>
  );
}
