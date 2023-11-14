import { Icon } from "@ui/general";
import { cn } from "@ui/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentType, HTMLAttributes, ReactElement } from "react";

const iconstate = cva(" gwk-w-6 gwk-h-6 gwk-p-1", {
  variants: {
    state: {
      primary: [
        "gwk-text-text-white",
        "gwk-bg-surface-primary",
        "hover:gwk-bg-surface-primary-hover",
        "disabled:gwk-opacity-50",
      ],
      secondary: [
        "gwk-text-text-white",
        "gwk-bg-surface-negative",
        "hover:gwk-bg-surface-negative-hover",
        "disabled:gwk-opacity-50",
      ],
      ghost: [
        "gwk-text-text-white",
        "gwk-bg-transparent",
        "hover:gwk-bg-surface-black-30",
        "disabled:gwk-opacity-50",
      ],
      default: [
        "gwk-text-text-black",
        "gwk-border-border-gray",
        "gwk-bg-surface-triarty-white",
        "hover:gwk-bg-surface-triarty-hover",
        "disabled:gwk-opacity-50",
      ],
      warning: [
        "gwk-text-text-white",
        " gwk-bg-surface-warning",
        "hover:gwk-bg-surface-warning-hover",
        "disabled:gwk-opacity-50",
      ],
    },
    round: {
      false: "",
      true: ["gwk-rounded-full"],
    },
  },
  defaultVariants: {
    state: "primary",
    round: true,
  },
});

export type TStateIconProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof iconstate> & {
    icon: ComponentType | ReactElement | string;
  };

const StateIcon = ({ state, icon, className, round }: TStateIconProps) => {
  return (
    <Icon
      elementSrc={icon}
      className={cn(iconstate({ state, round }), className)}
    />
  );
};

export default StateIcon;
