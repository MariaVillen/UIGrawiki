import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMessagFill = ({
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
      d="M22.003 4H9.997C6.683 4 3.994 6.677 3.994 9.979V18.359c0 3.302 2.69 5.98 6.003 5.98h1.8c.325 0 .757.215.961.48l1.801 2.389c.793 1.056 2.09 1.056 2.882 0l1.8-2.39c.229-.3.589-.48.961-.48h1.801c3.314 0 6.003-2.677 6.003-5.979V9.98c0-3.302-2.69-5.979-6.003-5.979ZM11.198 16.006c-.673 0-1.201-.54-1.201-1.2 0-.66.54-1.201 1.2-1.201.66 0 1.201.54 1.201 1.2 0 .66-.528 1.201-1.2 1.201Zm4.802 0c-.672 0-1.2-.54-1.2-1.2 0-.66.54-1.201 1.2-1.201.66 0 1.2.54 1.2 1.2 0 .66-.528 1.201-1.2 1.201Zm4.802 0c-.672 0-1.2-.54-1.2-1.2 0-.66.54-1.201 1.2-1.201.66 0 1.201.54 1.201 1.2 0 .66-.528 1.201-1.2 1.201Z"
    />
    <circle cx={24.556} cy={7.259} r={4} fill="#BB2525" />
  </svg>
);
export default SvgMessagFill;
