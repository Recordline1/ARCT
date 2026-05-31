
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "inner" | "full" | "wide";
}

export const Container = ({ children, className = "", size = "inner" }: ContainerProps) => {
  const sizeClasses = {
    inner: "max-w-[var(--cn-inner-width,1530px)]",
    wide: "max-w-[var(--cn-wide-width,1766px)]",
    full: "max-w-full",
  };

  return (
    <div className={`mx-auto px-4 ${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  );
};