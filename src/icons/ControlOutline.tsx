import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgControlOutline = ({
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
    <mask id="ControlOutline_svg__a" fill="#fff">
      <path
        fillRule="evenodd"
        d="M28 18a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8Zm0-12a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v6.286a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6ZM14.286 6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h6.286a2 2 0 0 0 2-2V6Z"
        clipRule="evenodd"
      />
    </mask>
    <path
      stroke="#000"
      strokeWidth={3}
      d="M28 18a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8Zm0-12a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v6.286a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6ZM14.286 6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h6.286a2 2 0 0 0 2-2V6Z"
      clipRule="evenodd"
      mask="url(#ControlOutline_svg__a)"
    />
  </svg>
);
export default SvgControlOutline;
