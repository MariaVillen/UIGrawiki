import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFind = ({
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
      d="M15.442 26.884C9.135 26.884 4 21.749 4 15.442S9.135 4 15.442 4s11.442 5.135 11.442 11.442-5.135 11.442-11.442 11.442Zm0-21.21c-5.392 0-9.768 4.387-9.768 9.768 0 5.38 4.376 9.767 9.768 9.767s9.767-4.387 9.767-9.767-4.375-9.768-9.767-9.768ZM27.163 28a.828.828 0 0 1-.591-.246l-2.233-2.232a.842.842 0 0 1 0-1.183.842.842 0 0 1 1.183 0l2.233 2.232a.842.842 0 0 1 0 1.183.828.828 0 0 1-.592.246Z"
    />
  </svg>
);
export default SvgFind;
