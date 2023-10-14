import { ArrowRigth, CloseTag } from "@ui/icons";
import { HTMLAttributes } from "react";
import { cn } from "@ui/utils";
import { Tag } from "@ui/general";

export type ButtonTagProps = HTMLAttributes<HTMLButtonElement> & {
  children: string;
  type?: "close" | "arrow";
  withHash?: boolean;
};

const TagButton = ({
  children,
  className,
  onClick,
  type = "close",
  withHash = true,
  ...rest
}: ButtonTagProps) => {
  return (
    <div
      className={cn(
        " gwk-gap-sm gwk-flex-grow-0 gwk-flex gwk-justify-center gwk-items-center gwk-bg-surface-black-30 gwk-h-[30px] gwk-px-4 gwk-rounded-rdxl",
        " hover:gwk-border-2 hover:gwk-border-border-grey ",
        className,
      )}
    >
      <Tag
        withHash={withHash}
        className="gwk-bg-transparent gwk-px-0 hover:gwk-border-none gwk-pl-0 gwk-pr-0"
      >
        {children}
      </Tag>
      {onClick && (
        <button type="button" arial-label="Cerrar" onClick={onClick} {...rest}>
          {type === "close" ? (
            <CloseTag className=" gwk-rounded-full gwk-w-[18px] gwk-h-[18px] gwk-bg-surface-triarty-white gwk-text-text-black" />
          ) : (
            <ArrowRigth className=" gwk-rounded-full gwk-w-[18px] gwk-h-[18px] gwk-bg-surface-triarty-white gwk-text-text-black" />
          )}
        </button>
      )}
    </div>
  );
};

export default TagButton;
