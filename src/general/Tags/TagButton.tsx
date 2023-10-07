import { CloseTag } from "../../icons";
import { HTMLAttributes } from "react";
import { cn } from "../../utils";
import Tag from "./Tag";

export type ButtonTagProps = HTMLAttributes<HTMLButtonElement> & {
  children: string;
};

const TagButton = ({
  children,
  className,
  onClick,
  ...rest
}: ButtonTagProps) => {
  return (
    <div
      className={cn(
        " gwk-gap-sm gwk-flex-grow-0 gwk-flex gwk-justify-center gwk-items-center gwk-bg-surface-black-30 gwk-h-[30px] gwk-px-4 gwk-rounded-rdxl",
        className,
      )}
    >
      <Tag className="gwk-bg-transparent gwk-px-0">{children}</Tag>
      {onClick && (
        <button type="button" arial-label="Cerrar" onClick={onClick} {...rest}>
          <CloseTag className=" gwk-rounded-full gwk-w-[18px] gwk-h-[18px] gwk-bg-surface-triarty-white gwk-text-text-black" />
        </button>
      )}
    </div>
  );
};

export default TagButton;
