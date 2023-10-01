import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgNewWindow = ({
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
      fill="currentColor"
      fillRule="evenodd"
      d="M6.523 5.55a.973.973 0 0 0-.973.973v18.954a.973.973 0 0 0 .973.973h18.954a.973.973 0 0 0 .973-.973v-7.754a.75.75 0 0 1 1.5 0v7.754a2.473 2.473 0 0 1-2.473 2.473H6.523a2.473 2.473 0 0 1-2.473-2.473V6.523A2.473 2.473 0 0 1 6.523 4.05h7.754a.75.75 0 0 1 0 1.5H6.523ZM20.42 4.8a.75.75 0 0 1 .75-.75H27.2a.747.747 0 0 1 .75.75v6.03a.75.75 0 0 1-1.5 0V6.61l-9.92 9.92a.75.75 0 1 1-1.06-1.06l9.92-9.92h-4.22a.75.75 0 0 1-.75-.75Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgNewWindow;
