import { ComponentType, HTMLAttributes, Ref, forwardRef } from "react";
import { cn } from "../../utils";
import { Icon } from "../../general";

export type SlipButtonInputProps = HTMLAttributes<HTMLInputElement> & {
  value: {
    icon?: ComponentType | string;
    text: string | number | undefined;
  };
  inputStyles?: string;
};

const SlipButtonInput = forwardRef<HTMLInputElement, SlipButtonInputProps>(
  (
    { value, className, inputStyles, ...rest }: SlipButtonInputProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    const icon = value.icon;
    const text = value.text;

    return (
      <div className={cn("gwk-flex gwk-gap-2 gwk-items-center", className)}>
        {icon && text && (
          <Icon
            alt={text.toString()}
            elementSrc={icon}
            className=" gwk-align-middle gwk-w-8 gwk-h-8"
          />
        )}
        <input
          value={text || ""}
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
