import {
  InputHTMLAttributes,
  ReactEventHandler,
  ReactNode,
  Ref,
  forwardRef,
} from "react";
import { cn } from "@ui/utils";
import { BaseInput } from "@ui/forms";

export type baseInputWithButtonProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  fluid?: boolean;
  children?: ReactNode;
  reverse?: boolean;
  colorStates?: boolean;
  onError?: ReactEventHandler<HTMLInputElement>;
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
          "focus-within:gwk-border focus-within:gwk-border-border-primary",
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
