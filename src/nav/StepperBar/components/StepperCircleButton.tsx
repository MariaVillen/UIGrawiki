import { HTMLAttributes } from "react";
import { cn } from "@ui/utils";

/**
 * Circle Button is only for the pagination bar
 */
interface IStepperCircleDotProps extends HTMLAttributes<HTMLDivElement> {
  active?: boolean;
}

const StepperCircleDot = ({
  active = false,
  ...rest
}: IStepperCircleDotProps) => {
  return (
    <div
      {...rest}
      className={cn(
        " gwk-rounded-full",
        active
          ? "gwk-h-[22px] gwk-w-[22px] gwk-bg-surface-primary"
          : "gwk-h-3 gwk-w-3 gwk-bg-surface-triarty-white",
      )}
    ></div>
  );
};

export default StepperCircleDot;
