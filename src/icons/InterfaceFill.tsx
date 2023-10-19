import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgInterfaceFill = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <rect width={24} height={24} x={4} y={4} fill="currentColor" rx={2} />
    <g stroke="#fff" strokeWidth={1.5}>
      <path d="m8.323 16.512 3.046 2.611 5.816-7.27M18.292 19.4h5.539" />
    </g>
  </svg>
);
export default SvgInterfaceFill;
