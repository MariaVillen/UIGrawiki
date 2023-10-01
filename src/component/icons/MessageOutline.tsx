import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMessageOutline = ({
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12.123 23.754h-.554c-4.43 0-6.646-1.108-6.646-6.646v-5.539c0-4.43 2.215-6.646 6.646-6.646h8.862c4.43 0 6.646 2.215 6.646 6.646v5.539c0 4.43-2.216 6.646-6.646 6.646h-.554c-.343 0-.676.166-.886.443l-1.662 2.215c-.73.975-1.927.975-2.658 0l-1.662-2.215c-.177-.244-.587-.443-.886-.443Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.427 14.892h.01M15.995 14.892h.01M11.563 14.892h.01"
    />
  </svg>
);
export default SvgMessageOutline;
