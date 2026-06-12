import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "gold" | "outline" | "ghost-light";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  type?: "button" | "submit";
  className?: string;
  fullWidth?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-on-primary hover:bg-primary-container shadow-sm",
  gold:
    "bg-secondary text-on-secondary hover:opacity-90",
  outline:
    "bg-transparent border border-primary text-primary hover:bg-primary hover:text-on-primary",
  "ghost-light":
    "bg-surface/20 backdrop-blur-md border border-on-primary/50 text-on-primary hover:bg-surface/30",
};

export default function Button({
  children,
  variant = "primary",
  href,
  type = "button",
  className = "",
  fullWidth = false,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 px-8 py-4 rounded font-body text-label-caps uppercase tracking-[0.1em] font-bold transition-all duration-300 ${
    variantClasses[variant]
  } ${fullWidth ? "w-full" : ""} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
