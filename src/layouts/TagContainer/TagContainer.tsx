import { HTMLAttributes } from "react";
import { cn } from "@ui/utils";

const TagContainer = ({
  children,
  className,
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "gwk-flex gwk-justify-start gwk-items-center gwk-gap-2",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default TagContainer;
