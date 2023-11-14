import { Icon } from "@ui/general";
import { cn } from "@ui/utils";
import { cva } from "class-variance-authority";
import { ComponentType, HTMLAttributes, ReactElement } from "react";

const categoryLabel = cva(
  [
    "gwk-flex",
    "gwk-justify-center",
    "gwk-items-center",
    "gwk-text-center",
    "gwk-flex-row",
    "gwk-gap-2",
  ],
  {
    variants: {
      size: {
        big: ["gwk-text-medium"],
        medium: ["gwk-text-medium"],
        normal: [" gwk-text-base"],
        small: [" gwk-text-small"],
      },
    },
    defaultVariants: {
      size: "normal",
    },
  },
);

const categoryIcon = cva("", {
  variants: {
    size: {
      small: "gwk-h-5 gwk-w-5",
      normal: "gwk-h-6 gwk-w-6",
      big: "gwk-h-8 gwk-w-8",
    },
  },
  defaultVariants: {
    size: "normal",
  },
});

export type TCategoryLabelprops = HTMLAttributes<HTMLDivElement> & {
  icon: ComponentType | string | ReactElement;
  text: string;
  alt?: string;
  size?: "small" | "normal" | "big";
};

const CategoryLabel = ({
  icon,
  text,
  alt,
  size = "normal",
  className,
}: TCategoryLabelprops) => {
  return (
    <div className={cn(categoryLabel({ size }), className)}>
      <Icon
        className={cn(categoryIcon({ size }))}
        elementSrc={icon}
        alt={alt}
      />
      <span>{text}</span>
    </div>
  );
};

export default CategoryLabel;
