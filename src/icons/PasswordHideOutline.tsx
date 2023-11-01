import type { SVGProps } from "react";

const SvgPasswordHideOutline = ({ ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      opacity={0.5}
    >
      <path d="m5 5 22 22M10.184 10.195C6.831 12.475 5 16 5 16s4 8 11 8c2.255 0 4.2-1.1 5.798-2.183M15 8c.358-.042.625 0 1 0 7 0 11 8 11 8s-.761 1.465-2.2 3.117" />
      <path d="M18.2 18.46a3.3 3.3 0 0 1-4.544-4.783" />
    </g>
  </svg>
);
export default SvgPasswordHideOutline;
