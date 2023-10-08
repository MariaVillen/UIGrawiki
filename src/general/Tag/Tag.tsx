import { HTMLAttributes } from "react";
import { cn } from "@ui/utils";

export type tagProps = HTMLAttributes<HTMLDivElement> & {
  children: string;
};

function Tag({ children, className, ...rest }: tagProps) {
  return (
    <div
      className={cn(
        " gwk-flex gwk-flex-grow-0 gwk-justify-center gwk-items-center gwk-h-[30px] gwk-px-4 gwk-rounded-rdxl gwk-text-text-white gwk-bg-surface-black-30 gwk-text-base gwk-font-bold",
        className,
      )}
      {...rest}
    >
      #{children}
    </div>
  );
}

export default Tag;
