import { ComponentType, HTMLAttributes, Ref, forwardRef } from "react";
import { cn } from "../../../utils";
import { Icon } from "../../../general";

export type TSlipButtonInputProps = HTMLAttributes<HTMLInputElement> & {
  icon?: ComponentType | string;
  alt?: string;
  inputStyles?: string;
};

const SlipButtonInput = forwardRef<HTMLInputElement, TSlipButtonInputProps>(
  (
    { icon, alt, className, inputStyles, ...rest }: TSlipButtonInputProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    return (
      <div
        className={cn(
          "gwk-flex gwk-w-full gwk-gap-2 gwk-items-center",
          className,
        )}
      >
        {icon && (
          <Icon
            alt={alt || "Icon Category"}
            elementSrc={icon}
            className="gwk-align-middle gwk-w-8 gwk-h-8"
          />
        )}
        <input
          className={cn(
            "gwk-border-none gwk-rounded-l-rdxl gwk-w-full gwk-text-base gwk-outline-none gwk-bg-transparent",
            inputStyles,
          )}
          {...rest}
          ref={ref}
        />
      </div>
    );
  },
);

export default SlipButtonInput;
