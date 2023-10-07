import { InputHTMLAttributes, ReactNode, Ref, forwardRef } from "react";
import { cn } from "../../../../utils";
import { BaseInput } from "../../../index";

export type baseInputWithButtonProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  fluid?: boolean;
  children?: ReactNode;
  reverse?: boolean;
};

/* BasicInput The rendered BasicInput component.*/

const InputWithButton = forwardRef<HTMLInputElement, baseInputWithButtonProps>(
  (
    { className, children, reverse, fluid, ...rest }: baseInputWithButtonProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    return (
      <div
        className={cn(
          "gwk-flex gwk-px-4 gwk-justify-between gwk-overflow-hidden gwk-items-center gwk-w-80 gwk-h-10 gwk-shadow-input gwk-rounded-rdxl gwk-bg-surface-triarty-white gwk-text-text-black active:gwk-outline-surface-primary",
          fluid && "gwk-inline-block gwk-w-full",
          reverse && "gwk-flex-row-reverse",
          className,
        )}
      >
        {children && (
          <span
            className={cn(
              "gwk-flex gwk-justify-center gwk-items-center",
              reverse ? "gwk-pl-2.5" : "gwk-pr-2.5",
            )}
          >
            {children}
          </span>
        )}
        <BaseInput ref={ref} {...rest} fluid />
      </div>
    );
  },
);

export default InputWithButton;
