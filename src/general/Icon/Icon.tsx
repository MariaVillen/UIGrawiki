import {
  ComponentType,
  HTMLAttributes,
  ReactElement,
  isValidElement,
} from "react";
import { cn } from "@ui/utils";
import { VariantProps, cva } from "class-variance-authority";

const icon = cva("gwk-w-4 gwk-h-4", {
  variants: {
    fluid: {
      true: "gwk-w-full gwk-h-full",
      false: "",
    },
    round: {
      true: "gwk-rounded-full",
      false: "",
    },
  },
});

export type iconProps = HTMLAttributes<HTMLElement> &
  VariantProps<typeof icon> & {
    alt?: string | undefined;
    elementSrc: ComponentType | string | ReactElement;
    className?: string;
  };

const Icon = ({
  alt,
  elementSrc,
  fluid = false,
  className,
  round = true,
  ...rest
}: iconProps) => {
  if (typeof elementSrc === "string") {
    return (
      <img
        src={elementSrc}
        alt={alt}
        {...rest}
        className={cn(icon({ fluid, round }), className)}
      />
    );
  } else {
    const Component = elementSrc as ComponentType<
      Omit<iconProps, "elementSrc">
    >;
    if (typeof elementSrc === "function") {
      return (
        <Component
          {...rest}
          className={cn(icon({ round, fluid, className }))}
        />
      );
    } else if (isValidElement(elementSrc)) {
      return elementSrc;
    }
  }
};

export default Icon;
