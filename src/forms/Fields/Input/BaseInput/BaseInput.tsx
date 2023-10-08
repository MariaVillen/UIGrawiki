import { InputHTMLAttributes, Ref, forwardRef } from "react";
import { cn } from "@ui/utils";

export type baseInputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  fluid?: boolean;
};

/* BasicInput The rendered BasicInput component.*/

const BaseInput = forwardRef<HTMLInputElement, baseInputProps>(
  (
    { className, fluid, ...rest }: baseInputProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    return (
      <input
        className={cn(
          "gwk-w-80 gwk-h-10 gwk-rounded-rdxl gwk-bg-transparent gwk-text-text-black hover:gwk-outline-none focus:gwk-outline-none",
          fluid && "gwk-inline-block gwk-w-full gwk-flex-grow",
          className,
        )}
        ref={ref}
        {...rest}
      />
    );
  },
);

export default BaseInput;
