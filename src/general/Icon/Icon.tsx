import { ComponentType, HTMLAttributes } from "react";

export type iconProps = {
  alt: string;
  elementSrc: ComponentType | string;
} & HTMLAttributes<HTMLElement>;

const Icon = ({ alt, elementSrc, ...rest }: iconProps) => {
  if (typeof elementSrc === "string") {
    return <img src={elementSrc} alt={alt} {...rest} />;
  } else {
    const Component = elementSrc;
    return <Component {...rest} />;
  }
};

export default Icon;
