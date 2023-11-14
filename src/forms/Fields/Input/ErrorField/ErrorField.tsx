import { AlertColor } from "@ui/icons";
import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@ui/utils";

export type errorFormProps = HTMLAttributes<HTMLDivElement> & {
  className?: string;
  children: ReactNode;
};

const ErrorField = ({ className, children }: errorFormProps) => {
  return (
    <div
      className={cn(
        "gwk-text-text-negative gwk-text-small gwk-flex gwk-items-center gwk-gap-2 gwk-h-full m-[2px] gwk-flex-initial",
        className,
      )}
    >
      <AlertColor className="gwk-h-3.5 gwk-w-3.5" />
      <span>{children}</span>
    </div>
  );
};

export default ErrorField;
