import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPasswordShowOutline = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 32 32"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      opacity={0.5}
    >
      <path d="M5 16s4-8 11-8 11 8 11 8M5 16s4 8 11 8 11-8 11-8" />
      <path d="M16 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    </g>
  </svg>
);
export default SvgPasswordShowOutline;
