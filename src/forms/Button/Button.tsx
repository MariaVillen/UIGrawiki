import { ButtonHTMLAttributes } from "react";
import { cn } from "../../utils/partiallyApply/cn-utility-function";
import { cva, VariantProps } from "class-variance-authority";
// variante de color y tamaño

const button = cva(
  [
    "gwk-rounded-rdxl",
    "gwk-flex",
    "gwk-justify-center",
    "gwk-items-center",
    "gwk-gap-0.625",
    "gwk-font-bold",
  ],
  {
    variants: {
      variant: {
        primary:
          " gwk-text-text-white gwk-bg-surface-primary hover:gwk-bg-surface-primary-hover  active:gwk-bg-surface-background-dark disabled:gwk-opacity-50",
        secondary:
          "gwk-text-text-white gwk-bg-surface-negative hover:gwk-bg-surface-negative-hover active:gwk-bg-surface-negative-pressed disabled:gwk-opacity-50",
        ghost:
          "gwk-text-text-white gwk-bg-transparent hover:gwk-bg-surface-black-30 active:gwk-bg-surface-black-50 disabled:gwk-opacity-50",
        default:
          "gwk-text-text-black gwk-border-border-gray gwk-bg-surface-triarty-white hover:gwk-bg-surface-triarty-hover active:gwk-bg-surface-triarty-disable disabled:gwk-opacity-50",
      },
      size: {
        big: "gwk-w-bigBtn gwk-h-14 gwk-text-medium gwk-leading-medium",
        medium: "gwk-w-80 gwk-h-mediumBtn gwk-text-medium gwk-leading-medium ",
        normal: "gwk-w-96 gwk-h-10 gwk-text-base gwk-leading-base",
        small: "gwk-w-smallBtn gwk-h-smallBtn gwk-text-small gwk-leading-small",
      },
      btnType: {
        button: "",
        icon: ["gwk-p-0", "gwk-rounded", "gwk-w-auto", "gwk-h-auto"],
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
        class: "gwk-w-auto",
      },
      {
        btnType: "icon",
        size: "normal",
        class: "gwk-w-auto",
      },
      {
        btnType: "icon",
        size: "medium",
        class: "gwk-w-auto",
      },
      {
        btnType: "icon",
        size: "big",
        class: "gwk-w-auto",
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
  ...rest
}: ButtonProps) => {
  return (
    <button className={cn(button({ variant, size, btnType, fluid }))} {...rest}>
      {children}
    </button>
  );
};

export default Button;
