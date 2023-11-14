import type { SVGProps } from "react";

const SvgList = ({ ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeWidth={3.722}
      d="M11.5 9H28M4 9h4.5m3 7.5H28m-24 0h4.5m3 7.5H28M4 24h4.5"
    />
  </svg>
);
export default SvgList;
