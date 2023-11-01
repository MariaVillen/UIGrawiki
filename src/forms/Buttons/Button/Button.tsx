import { ButtonHTMLAttributes } from "react";
import { cn, partiallyApply } from "@ui/utils";
import { cva, VariantProps } from "class-variance-authority";
import ButtonIcon from "./components/ButtonIcon";
import { Find } from "@ui/icons";

// variante de color y tamaño
const button = cva(["gwk-flex", "gwk-justify-center", "gwk-items-center"], {
  variants: {
    variant: {
      /*TODO: No pilla tailwind el color blanco del boton cuando lo uso en about card*/
      primary: [
        "gwk-bg-surface-primary",
        "gwk-text-text-white",
        "hover:gwk-bg-surface-primary-hover",
        "active:gwk-bg-surface-background-dark",
        "disabled:gwk-opacity-50",
      ],
      secondary: [
        "gwk-bg-surface-negative",
        "gwk-text-text-white",
        "hover:gwk-bg-surface-negative-hover",
        "active:gwk-bg-surface-negative-pressed",
        "disabled:gwk-opacity-50",
      ],
      ghost: [
        "gwk-bg-transparent",
        "gwk-text-text-white",
        "hover:gwk-bg-surface-black-30",
        "active:gwk-bg-surface-black-50",
        "disabled:gwk-opacity-50",
      ],
      default: [
        "gwk-border",
        "gwk-border-border-grey",
        "gwk-bg-surface-triarty-white",
        "gwk-text-text-black",
        "hover:gwk-bg-surface-triarty-hover",
        "active:gwk-bg-surface-triarty-disable",
        "disabled:gwk-opacity-50",
      ],
    },
    size: {
      big: ["gwk-text-medium"],
      medium: ["gwk-text-medium"],
      normal: [" gwk-text-base"],
      small: [" gwk-text-small"],
    },
    btnType: {
      button: ["gwk-gap-0.625", "gwk-font-bold", "gwk-rounded-rdxl"],
      icon: ["gwk-p-1", "gwk-rounded-full"],
    },
    fluid: {
      false: null,
      true: "gwk-w-full gwk-flex-grow",
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
    {
      btnType: "button",
      size: "small",
      class: [" gwk-w-[7.375rem]", " gwk-h-[2.0625rem]"],
    },
    {
      btnType: "button",
      size: "normal",
      class: ["gwk-w-[12.8125rem]", "gwk-h-10"],
    },
    {
      btnType: "button",
      size: "medium",
      class: ["gwk-w-80", " gwk-h-[2.875rem]"],
    },
    {
      btnType: "button",
      size: "big",
      class: "gwk-w-[17.5rem] gwk-h-14",
    },
    {
      btnType: "button",
      fluid: true,
      class: "gwk-w-full",
    },
  ],
  defaultVariants: {
    variant: "default",
    size: "normal",
    fluid: false,
    btnType: "button",
  },
});

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button>;

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

Button.Icon = ButtonIcon;

export const SearchButton = partiallyApply(Button, {
  btnType: "icon",
  variant: "ghost",
  children: <Button.Icon icon={Find} size="fluid" />,
});
