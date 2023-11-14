import { cn } from "@ui/utils";
import { HTMLAttributes } from "react";

const StepperBtnControl = ({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={cn(
        "gwk-flex gwk-flex-row gwk-flex-nowrap gwk-gap-0.5 gwk-items-center gwk-absolute",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default StepperBtnControl;
