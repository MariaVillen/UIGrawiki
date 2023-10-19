import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAvatarOutline = ({
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
    <g fill="currentColor" clipPath="url(#AvatarOutline_svg__a)">
      <path d="M16 9.143a4.286 4.286 0 1 0 0 8.571 4.286 4.286 0 0 0 0-8.571ZM16 16a2.572 2.572 0 1 1 0-5.144A2.572 2.572 0 0 1 16 16Z" />
      <path d="M16 4a12 12 0 1 0 12 12A12.013 12.013 0 0 0 16 4Zm-5.143 20.894v-1.18a2.575 2.575 0 0 1 2.572-2.571h5.142a2.574 2.574 0 0 1 2.572 2.571v1.18a10.198 10.198 0 0 1-10.286 0Zm11.994-1.243a4.287 4.287 0 0 0-4.28-4.222H13.43a4.287 4.287 0 0 0-4.28 4.222 10.286 10.286 0 1 1 13.702 0Z" />
    </g>
    <defs>
      <clipPath id="AvatarOutline_svg__a">
        <path fill="#fff" d="M4 4h24v24H4z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAvatarOutline;
