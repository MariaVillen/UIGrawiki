import { cn } from "@ui/utils";
import { InputHTMLAttributes } from "react";

export type TCheckInputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

const CheckInput = ({ className, ...rest }: TCheckInputProps) => {
  return (
    <input
      type="checkbox"
      className={cn(
        "gwk-shadow-check gwk-relative gwk-appearance-none gwk-border-none gwk-bg-surface-triarty-hover gwk-rounded-full gwk-h-4 gwk-w-4 checked:before:gwk-absolute checked:before:gwk-top-1/4 checked:before:gwk-left-1/4 checked:before:gwk-bg-surface-background-dark checked:before:gwk-w-1/2 checked:before:gwk-h-1/2 checked:before:gwk-rounded-full disabled:gwk-opacity-5",
        className,
      )}
      {...rest}
    />
  );
};

export default CheckInput;
