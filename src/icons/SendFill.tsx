import type { SVGProps } from "react";

const SvgSendFill = ({ ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <g clipPath="url(#SendFill_svg__a)">
      <path
        fill="currentColor"
        d="M6.01 25 27 16 6.01 7 6 14l15 2-15 2 .01 7Z"
      />
    </g>
    <defs>
      <clipPath id="SendFill_svg__a">
        <path fill="#fff" d="M6 7h21v18H6z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSendFill;
