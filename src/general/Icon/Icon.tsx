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
} & HTMLAttributes<HTMLElement>;

const Icon = ({ alt, elementSrc, className, round, ...rest }: iconProps) => {
  let classNames = className || "";

  if (round) {
    classNames += " gwk-rounded-full";
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
      return <Component {...rest} className={classNames} />;
    } else if (isValidElement(elementSrc)) {
      return elementSrc;
    }
  }
};

export default Icon;
