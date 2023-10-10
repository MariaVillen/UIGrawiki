import { ButtonHTMLAttributes, ComponentType } from "react";
import { cn } from "@ui/utils";
import { cva, VariantProps } from "class-variance-authority";
import { Icon } from "@ui/general";
// variante de color y tamaño
// TODO: Problema con el size medio en el tipo icon de boton

const menuButton = cva(
  [
    "gwk-flex",
    "gwk-justify-center",
    "gwk-items-center",
    "gwk-text-sm",
    "gwk-text-text-black",
    "gwk-font-normal",
  ],
  {
    variants: {
      variant: {
        horizontal: ["gwk-flex-row", "gwk-gap-2"],
        vertical: [
          "gwk-flex-col",
          "gwk-gap-0",
          "gwk-w-[100px]",
          "gwk-h-20",
          "gwk-group",
        ],
        responsive: [
          "gwk-flex-row",
          "gwk-gap-2",
          "mobile:gwk-flex-col",
          "mobile:gwk-gap-0",
          "mobile:gwk-w-[100px]",
          "mobile:gwk-h-20",
          "gwk-group",
        ],
      },
      reverse: {
        false: "",
        true: "",
      },
    },
    compoundVariants: [
      {
        variant: "horizontal",
        reverse: true,
        class: "gwk-flex-row-reverse",
      },
      {
        variant: "vertical",
        reverse: true,
        class: "gwk-flex-col-reverse",
      },
      {
        variant: "responsive",
        reverse: true,
        class: ["gwk-flex-row-reverse", "mobile:gwk-flex-col-reverse"],
      },
    ],
    defaultVariants: {
      variant: "responsive",
      reverse: false,
    },
  },
);

const menuIcon = cva("", {
  variants: {
    variant: {
      horizontal: ["gwk-h-8", "gwk-w-8"],
      vertical: [
        "gwk-rounded-full",
        "gwk-text-text-white",
        "gwk-p-1.5",
        "gwk-h-11",
        "gwk-w-11",
        "gwk-bg-surface-primary",
        "group-hover:gwk-bg-surface-primary-hover",
      ],
      responsive: [
        "gwk-h-8",
        " gwk-w-8",
        "mobile:gwk-rounded-full",
        "mobile:gwk-text-text-white",
        "mobile:gwk-p-1.5",
        "mobile:gwk-h-11",
        "mobile:gwk-w-11",
        "mobile:gwk-bg-surface-primary",
        "group-hover:mobile:gwk-bg-surface-primary-hover",
      ],
    },
  },
});

export type MenuButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof menuButton> & {
    icon: ComponentType | string;
    iconStyles?: string;
    alt?: string;
  };

//TODO: cambiar los padding por medidas de ancho width y agregar fluid button
const MenuButton = ({
  variant,
  children,
  reverse,
  icon,
  iconStyles,
  className,
  alt,
  ...rest
}: MenuButtonProps) => {
  return (
    <button
      className={cn(menuButton({ variant, reverse }), className)}
      {...rest}
    >
      <Icon
        alt={alt}
        elementSrc={icon}
        className={cn(menuIcon({ variant }), iconStyles)}
      />
      {children}
    </button>
  );
};

export default MenuButton;
