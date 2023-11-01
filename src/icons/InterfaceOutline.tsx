import type { SVGProps } from "react";

const SvgInterfaceOutline = ({ ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M4.923 6.923a2 2 0 0 1 2-2h18.154a2 2 0 0 1 2 2v18.154a2 2 0 0 1-2 2H6.923a2 2 0 0 1-2-2V6.923Z"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M8.246 16.435 9.721 17.7a2 2 0 0 0 2.864-.27l4.523-5.653M18.215 19.323h5.539"
    />
  </svg>
);
export default SvgInterfaceOutline;
