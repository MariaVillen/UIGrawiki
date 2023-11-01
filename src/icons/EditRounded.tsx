import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEditRounded = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 26 26"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <circle cx={13} cy={13} r={13} fill="currentColor" />
    <path
      fill="#fff"
      d="M7 16.64v2.027a.33.33 0 0 0 .333.333H9.36a.313.313 0 0 0 .233-.1l7.28-7.273-2.5-2.5L7.1 16.4a.327.327 0 0 0-.1.24Zm11.807-6.947c.26-.26.26-.68 0-.94l-1.56-1.56a.664.664 0 0 0-.94 0l-1.22 1.22 2.5 2.5 1.22-1.22Z"
    />
  </svg>
);
export default SvgEditRounded;
