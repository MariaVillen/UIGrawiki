import { cn } from "@ui/utils";
import { HTMLAttributes } from "react";

const AccordionContext = ({
  children,
  className,
}: HTMLAttributes<HTMLElement>) => {
  return (
    <div className={cn("gwk-bg-white gwk-p-3", className)}>{children}</div>
  );
};

export default AccordionContext;
