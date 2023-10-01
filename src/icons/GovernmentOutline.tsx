import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGovernmentOutline = ({
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
    <path
      fill="#000"
      d="M24.727 9.273H28v2.181h-1.09v12H28v2.182H4v-2.181h1.09v-12H4V9.272h3.273V7.09A1.09 1.09 0 0 1 8.363 6h15.273a1.091 1.091 0 0 1 1.091 1.09v2.183Zm0 2.181H7.273v12h3.273v-7.636h2.181v7.636h2.182v-7.636h2.182v7.636h2.182v-7.636h2.181v7.636h3.273v-12ZM9.455 8.182v1.09h13.09v-1.09H9.456Z"
    />
  </svg>
);
export default SvgGovernmentOutline;
