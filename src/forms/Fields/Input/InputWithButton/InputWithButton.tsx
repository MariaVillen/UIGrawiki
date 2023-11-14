import { InputHTMLAttributes, ReactNode, Ref, forwardRef } from "react";
import { cn } from "@ui/utils";
import { BaseInput } from "@ui/forms";

export type TInputWithButtonProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  fluid?: boolean;
  children?: ReactNode;
  reverse?: boolean;
  padding?: boolean;
  colorState?: "error" | "valid" | null;
};

/* BasicInput The rendered BasicInput component.*/

const InputWithButton = forwardRef<HTMLInputElement, TInputWithButtonProps>(
  (
    {
      className,
      children,
      reverse,
      padding = true,
      fluid,
      colorState,
      ...rest
    }: TInputWithButtonProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    return (
      <div
        className={cn(
          "gwk-flex gwk-justify-between gwk-overflow-hidden gwk-items-center gwk-w-80 gwk-h-10 gwk-shadow-input gwk-rounded-rdxl gwk-bg-surface-triarty-white gwk-text-text-black active:gwk-outline-surface-primary",
          fluid && "gwk-w-full",
          reverse && "gwk-flex-row-reverse",
          padding && children ? (reverse ? "gwk-pr-4" : "gwk-pl-4") : "",
          "focus-within:gwk-border focus-within:gwk-border-border-primary",
          colorState === "error" && "gwk-border gwk-border-border-negative",
          colorState === "valid" && "gwk-border gwk-border-border-positive",
          "focus-within:gwk-border focus-within:gwk-border-border-primary",

          className,
        )}
      >
        {children}
        <BaseInput
          ref={ref}
          {...rest}
          fluid
          className={padding ? "gwk-p-4" : ""}
        />
      </div>
    );
  },
);

export default InputWithButton;
