import {
  ComponentType,
  HTMLAttributes,
  ReactElement,
  isValidElement,
} from "react";
import { cn } from "@ui/utils";

export type iconProps = {
  alt?: string | undefined;
  elementSrc: ComponentType | string | ReactElement;
  round?: boolean;
  className?: string;
  fluid?: boolean;
} & HTMLAttributes<HTMLElement>;

const Icon = ({
  alt,
  elementSrc,
  fluid = false,
  className,
  round,
  ...rest
}: iconProps) => {
  let classNames = className || "";

  if (round) {
    classNames += "gwk-rounded-full";
  }

  if (typeof elementSrc === "string") {
    return (
      <img src={elementSrc} alt={alt} {...rest} className={cn(classNames)} />
    );
  } else {
    const Component = elementSrc as ComponentType<
      Omit<iconProps, "elementSrc">
    >;
    if (typeof elementSrc === "function") {
      return (
        <Component
          {...rest}
          className={cn(
            "gwk-w-4 gwk-h-4",
            fluid && "gwk-w-full gwk-h-full",
            classNames,
          )}
        />
      );
    } else if (isValidElement(elementSrc)) {
      return elementSrc;
    }
  }
};

export default Icon;
