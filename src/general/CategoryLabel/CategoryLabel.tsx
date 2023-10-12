import { Icon } from "@ui/general";
import { cn } from "@ui/utils";
import { ComponentType, HTMLAttributes, ReactElement } from "react";

export type TCategoryLabelprops = HTMLAttributes<HTMLDivElement> & {
  icon: ComponentType | string | ReactElement;
  text: string;
  alt?: string;
};

const CategoryLabel = ({ icon, text, alt, className }: TCategoryLabelprops) => {
  return (
    <div
      className={cn(
        "gwk-flex gwk-justify-center gwk-items-center gwk-text-sm gwk-font-normal gwk-text-center gwk-flex-row gwk-gap-2",
        className,
      )}
    >
      <Icon className="gwk-h-8 gwk-w-8" elementSrc={icon} alt={alt} />
      <span>{text}</span>
    </div>
  );
};

export default CategoryLabel;
