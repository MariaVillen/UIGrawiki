import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCloseTag = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M3.61 4.14a.376.376 0 0 1 .53-.53L8 7.47l3.86-3.86a.375.375 0 1 1 .53.53L8.53 8l3.86 3.86a.374.374 0 0 1 0 .53.373.373 0 0 1-.41.081.374.374 0 0 1-.12-.081L8 8.53l-3.86 3.86a.374.374 0 0 1-.611-.122.375.375 0 0 1 .081-.409L7.47 8 3.61 4.14Z"
    />
  </svg>
);
export default SvgCloseTag;
