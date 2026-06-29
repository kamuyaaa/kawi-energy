import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({
  children,
  className,
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1500px] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-28",
        className
      )}
    >
      {children}
    </div>
  );
}