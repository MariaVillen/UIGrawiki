import { ButtonHTMLAttributes } from "react";
import { cn } from "../../utils/partiallyApply/cn-utility-function";
// variante de color y tamaño

export type buttonProps = {
  fluid?: boolean;
  variant?: "default" | "primary" | "secondary" | "disabled";
  size?: "big" | "medium" | "normal" | "small";
} & ButtonHTMLAttributes<HTMLButtonElement>;

//TODO: cambiar los padding por medidas de ancho width y agregar fluid button
const Button = ({
  variant = "default",
  size = "normal",
  children,
  fluid = false,
  ...rest
}: buttonProps) => {
  const variantStyle = {
    primary:
      " gwk-text-text-white gwk-bg-surface-primary hover:gwk-bg-surface-primary-hover  active:gwk-bg-surface-background-dark disabled:gwk-opacity-50",
    secondary:
      "gwk-text-text-white gwk-bg-surface-negative hover:gwk-bg-surface-negative-hover active:gwk-bg-surface-negative-pressed disabled:gwk-opacity-50",
    disabled:
      "gwk-text-text-white gwk-text-text-white gwk-bg-transparent hover:gwk-bg-surface-black-30 active:gwk-bg-surface-black-50 disabled:gwk-opacity-50",
    default:
      "gwk-text-text-black gwk-border-border-gray gwk-bg-surface-triarty-white hover:gwk-bg-surface-triarty-hover active:gwk-bg-surface-triarty-disable disabled:gwk-opacity-50",
  };

  const sizeStyle = {
    big: "gwk-w-bigBtn gwk-h-14 gwk-text-medium gwk-leading-medium",
    medium: "gwk-w-80 gwk-h-mediumBtn gwk-text-medium gwk-leading-medium ",
    normal: "gwk-w-96 gwk-h-10 gwk-text-base gwk-leading-base",
    small: "gwk-w-smallBtn gwk-h-smallBtn gwk-text-small gwk-leading-small",
  };

  return (
    <button
      className={cn(
        "gwk-rounded-rdxl gwk-flex gwk-justify-center gwk-items-center gwk-gap-0.625 gwk-font-bold",
        sizeStyle[size],
        variantStyle[variant],
        fluid && "gwk-w-full",
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
