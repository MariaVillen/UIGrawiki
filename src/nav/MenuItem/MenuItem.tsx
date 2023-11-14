import { ComponentType, ReactElement } from "react";
import { cn } from "@ui/utils";
import { cva, VariantProps } from "class-variance-authority";
import { Icon } from "@ui/general";
import { Link, LinkProps, useLocation } from "react-router-dom";
// variante de color y tamaño
// TODO: Problema con el size medio en el tipo icon de boton

const menuItem = cva(
  [
    "gwk-flex",
    "gwk-justify-center",
    "gwk-items-center",
    "gwk-text-sm",
    "gwk-text-text-black",
    "gwk-font-normal",
    "gwk-text-center",
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
          "gwk-flex-grow",
          "gwk-justify-start",
          "gwk-gap-2",
          "mobile:gwk-justify-center",
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
        "gwk-h-11",
        "gwk-w-11",
        "gwk-p-1.5",
        "gwk-rounded-full",
        "gwk-shadow-button",
        "gwk-text-text-white",
        "gwk-bg-surface-primary",
        "group-hover:gwk-bg-surface-primary-hover",
      ],
      responsive: [
        "gwk-h-8",
        "gwk-w-8",
        "mobile:gwk-rounded-full",
        "mobile:gwk-shadow-button",
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

export type menuItemProps = LinkProps &
  VariantProps<typeof menuItem> & {
    icon: ComponentType | ReactElement | string;
    iconActive: ComponentType | ReactElement | string;
    iconStyles?: string;
    alt?: string;
  };

//TODO: cambiar los padding por medidas de ancho width y agregar fluid button
const MenuItem = ({
  variant,
  children,
  reverse,
  icon,
  iconActive,
  iconStyles,
  className,
  alt,
  to,
  ...rest
}: menuItemProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link
      className={cn(menuItem({ variant, reverse }), className)}
      to={to}
      {...rest}
    >
      <Icon
        alt={alt}
        elementSrc={isActive ? iconActive : icon}
        className={cn(menuIcon({ variant }), iconStyles)}
      />
      {children}
    </Link>
  );
};

export default MenuItem;
