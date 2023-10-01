import { ButtonHTMLAttributes } from "react";
import { cn } from "../../utils/classesUtilities/cn-utility-function";
import { cva, VariantProps } from "class-variance-authority";
// variante de color y tamaño
// TODO: Problema con el size medio en el tipo icon de boton
const button = cva(
  [
    "gwk-flex",
    "gwk-justify-center",
    "gwk-items-center",
    "gwk-gap-0.625",
    "gwk-font-bold",
  ],
  {
    variants: {
      variant: {
        primary: [
          "gwk-text-text-white",
          "gwk-bg-surface-primary",
          "hover:gwk-bg-surface-primary-hover",
          "active:gwk-bg-surface-background-dark",
          "disabled:gwk-opacity-50",
        ],
        secondary: [
          "gwk-text-text-white",
          "gwk-bg-surface-negative",
          "hover:gwk-bg-surface-negative-hover",
          "active:gwk-bg-surface-negative-pressed",
          "disabled:gwk-opacity-50",
        ],
        ghost: [
          "gwk-text-text-white",
          "gwk-bg-transparent",
          "hover:gwk-bg-surface-black-30",
          "active:gwk-bg-surface-black-50",
          "disabled:gwk-opacity-50",
        ],
        default: [
          "gwk-text-text-black",
          "gwk-border-border-gray",
          "gwk-bg-surface-triarty-white",
          "hover:gwk-bg-surface-triarty-hover",
          "active:gwk-bg-surface-triarty-disable",
          "disabled:gwk-opacity-50",
        ],
      },
      size: {
        big: [
          "gwk-w-17.5",
          "gwk-h-14",
          "gwk-text-medium",
          "gwk-leading-medium",
        ],
        medium: [
          "gwk-w-80",
          "gwk-h-2.8",
          "gwk-text-medium",
          "gwk-leading-medium",
        ],
        normal: ["gwk-w-12.8", "gwk-h-10", "gwk-text-base", "gwk-leading-base"],
        small: [
          "gwk-w-7.3",
          "gwk-h-2.06",
          "gwk-text-small",
          "gwk-leading-small",
        ],
      },
      btnType: {
        button: "gwk-rounded-rdxl",
        icon: ["gwk-p-0", "gwk-rounded-full"],
      },
      fluid: {
        false: null,
        true: "gwk-w-full",
      },
    },
    compoundVariants: [
      {
        btnType: "icon",
        size: "small",
        class: "gwk-w-8 gwk-h-8",
      },
      {
        btnType: "icon",
        size: "normal",
        class: "gwk-w-10 gwk-h-10",
      },
      {
        btnType: "icon",
        size: "medium",
        class: "gwk-w-11 gwk-h-11",
      },
      {
        btnType: "icon",
        size: "big",
        class: "gwk-w-14 gwk-h-14",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "normal",
      fluid: false,
      btnType: "button",
    },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button>;

//TODO: cambiar los padding por medidas de ancho width y agregar fluid button
const Button = ({
  variant,
  size,
  children,
  btnType,
  fluid,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={cn(button({ variant, size, btnType, fluid }), className)}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
