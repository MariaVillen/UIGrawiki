import { HTMLAttributes } from "react";

const StepperDotButton = ({
  children,
  ...rest
}: HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className="gwk-bg-transparent" {...rest}>
      {children}
    </button>
  );
};

export default StepperDotButton;
