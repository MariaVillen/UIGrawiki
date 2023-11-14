import { cn } from "@ui/utils";
import { HTMLAttributes } from "react";

const MenuContainer = ({
  children,
  className,
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "gwk-absolute gwk-p-6 gwk-z-10 gwk-top-0 gwk-right-0 gwk-gap-5 gwk-bg-surface-triarty-white gwk-flex-nowrap gwk-w-[60vw] gwk-h-full mobile:gwk-static mobile:gwk-flex mobile:gwk-flex-col mobile:gwk-w-full mobile:gwk-justify-center mobile:gwk-p-0 mobile:gwk-flex-grow",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default MenuContainer;
