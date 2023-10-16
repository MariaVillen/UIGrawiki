import { HTMLAttributes } from "react";
import { cn } from "@ui/utils";

/**
 * Circle Button is only for the pagination bar
 */
interface IStepperNumberDotProps extends HTMLAttributes<HTMLDivElement> {
  active?: boolean;
}

const StepperNumberDot = ({
  active = false,
  children,
  ...rest
}: IStepperNumberDotProps) => {
  return (
    <div
      {...rest}
      className={cn(
        " gwk-rounded-full gwk-h-3 gwk-w-3 hover:gwk-text-text-primary-dark ",
        active ? "gwk-text-text-primary" : "gwk-text-text-white",
      )}
    >
      {children}
    </div>
  );
};

export default StepperNumberDot;
