import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAvatarFill = ({
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
    <g fill="currentColor" clipPath="url(#AvatarFill_svg__a)">
      <path d="M16 9.143a4.286 4.286 0 1 0 0 8.571 4.286 4.286 0 0 0 0-8.571Z" />
      <path d="M16 4a12 12 0 1 0 12 12A12.013 12.013 0 0 0 16 4Zm6.85 19.65a4.287 4.287 0 0 0-4.279-4.221H13.43a4.287 4.287 0 0 0-4.28 4.222 10.286 10.286 0 1 1 13.702 0Z" />
    </g>
    <defs>
      <clipPath id="AvatarFill_svg__a">
        <path fill="#fff" d="M4 4h24v24H4z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAvatarFill;
