import { forwardRef } from "react";
import type { ReactNode, AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost" | "gold";

const styles: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-[hsl(224,72%,24%)] shadow-md hover:shadow-lg",
  secondary:
    "bg-white text-primary border border-primary/15 hover:border-primary/30 shadow-sm hover:shadow-md",
  ghost:
    "bg-white/10 text-white border border-white/30 hover:bg-white/20 backdrop-blur",
  gold:
    "bg-accent text-accent-foreground hover:brightness-95 shadow-md hover:shadow-lg",
};

const base =
  "inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm md:text-[15px] font-semibold tracking-wide transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";

type CommonProps = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    as?: "button";
  };

type ButtonAsAnchor = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    as: "a";
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export const Button = forwardRef<HTMLElement, ButtonProps>(function Button(
  props,
  ref,
) {
  const { variant = "primary", className = "", children } = props;
  const cls = `${base} ${styles[variant]} ${className}`;

  if (props.as === "a") {
    const { as: _a, variant: _v, className: _c, children: _ch, ...rest } = props;
    void _a; void _v; void _c; void _ch;
    return (
      <a ref={ref as React.Ref<HTMLAnchorElement>} className={cls} {...rest}>
        {children}
      </a>
    );
  }

  const { as: _a, variant: _v, className: _c, children: _ch, ...rest } = props;
  void _a; void _v; void _c; void _ch;
  return (
    <button ref={ref as React.Ref<HTMLButtonElement>} className={cls} {...rest}>
      {children}
    </button>
  );
});
