import { ComponentType, HTMLAttributes } from "react";
import { cn } from "../../utils";

export type iconProps = {
  alt?: string | undefined;
  elementSrc: ComponentType | string;
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
    return <Component {...rest} className={classNames} />;
  }
};

export default Icon;
