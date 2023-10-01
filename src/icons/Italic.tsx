import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgItalic = ({
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
      d="M15.771 10.857H19.2L15.429 28H12l3.771-17.143ZM18.651 4a1.714 1.714 0 1 0 0 3.429 1.714 1.714 0 0 0 0-3.429Z"
    />
  </svg>
);
export default SvgItalic;
