import { HTMLAttributes } from "react";
import { cn } from "../../utils";

const AccordionBar = ({ children, className }: HTMLAttributes<HTMLElement>) => {
  return (
    <div className={cn("gwk-w-full gwk-text-lg", className)}>{children}</div>
  );
};

export default AccordionBar;
