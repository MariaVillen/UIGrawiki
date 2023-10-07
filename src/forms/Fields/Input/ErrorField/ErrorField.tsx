import { AlertColor } from "../../../../icons/index.ts";
import { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../../../utils/index.ts";

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

/**
 * @use "../../../ui/styles/variables" as *

.errorMsg
  display: flex
  align-items: center
  gap: 7px
  height: 100%
  margin: 2px
  flex: 0 1

  &_icon
    height: 14px
    with: 14px

  &_text
    color: $negative
    line-height: 17px
    font-size: 14px
    font-weight: 400

 */
