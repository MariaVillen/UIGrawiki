import type { SVGProps } from "react";
const SvgUsersFill = ({ ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <g clipPath="url(#UsersFill_svg__a)">
      <path
        fill="currentColor"
        d="M5.5 10.49a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Z"
      />
      <mask id="UsersFill_svg__b" fill="#fff">
        <path d="M18.5 10.49c0 1.5-.44 2.898-1.2 4.07a5.5 5.5 0 1 0 0-8.14 7.465 7.465 0 0 1 1.2 4.07Z" />
      </mask>
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={2}
        d="M18.5 10.49c0 1.5-.44 2.898-1.2 4.07a5.5 5.5 0 1 0 0-8.14 7.465 7.465 0 0 1 1.2 4.07Z"
        mask="url(#UsersFill_svg__b)"
      />
      <path
        fill="currentColor"
        d="M4 21.99a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4Z"
      />
      <mask id="UsersFill_svg__c" fill="#fff">
        <path d="M20 21.99v5h7a1 1 0 0 0 1-1v-4a4 4 0 0 0-4-4h-5.528a5.978 5.978 0 0 1 1.528 4Z" />
      </mask>
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={2}
        d="M20 21.99v5h7a1 1 0 0 0 1-1v-4a4 4 0 0 0-4-4h-5.528a5.978 5.978 0 0 1 1.528 4Z"
        mask="url(#UsersFill_svg__c)"
      />
    </g>
    <defs>
      <clipPath id="UsersFill_svg__a">
        <path fill="#fff" d="M4 4.98h24V27H4z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgUsersFill;
