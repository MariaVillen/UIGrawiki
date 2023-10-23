import { Icon } from "@ui/general";
import { cn } from "@ui/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentType, ReactElement } from "react";

const buttonIcon = cva("", {
  variants: {
    size: {
      small: "gwk-h-[18px] gwk-w-[18px]",
      normal: "gwk-h-6 gwk-w-6",
      medium: "gwk-h-6 gwk-w-6",
      big: "gwk-h-8 gwk-w-8",
      fluid: "gwk-w-full gwk-h-full",
    },
  },
  defaultVariants: {
    size: "normal",
  },
});

export type TButtonIconProps = VariantProps<typeof buttonIcon> & {
  icon: ComponentType | ReactElement | string;
  className?: string;
};

const ButtonIcon = ({ icon, size, className }: TButtonIconProps) => {
  return (
    <Icon elementSrc={icon} className={cn(buttonIcon({ size }), className)} />
  );
};

export default ButtonIcon;
