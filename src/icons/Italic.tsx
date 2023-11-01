import type { SVGProps } from "react";

const SvgItalic = ({ ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      fill="currentColor"
      d="M15.771 10.857H19.2L15.429 28H12l3.771-17.143ZM18.651 4a1.714 1.714 0 1 0 0 3.429 1.714 1.714 0 0 0 0-3.429Z"
    />
  </svg>
);
export default SvgItalic;
