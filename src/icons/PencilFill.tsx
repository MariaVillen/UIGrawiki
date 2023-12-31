import type { SVGProps } from "react";

const SvgPencilFill = ({ ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      fill="currentColor"
      d="M4 23.28v4.053a.66.66 0 0 0 .667.667H8.72a.625.625 0 0 0 .467-.2l14.56-14.547-5-5L4.2 22.8a.655.655 0 0 0-.2.48ZM27.613 9.387c.52-.52.52-1.36 0-1.88l-3.12-3.12c-.52-.52-1.36-.52-1.88 0l-2.44 2.44 5 5 2.44-2.44Z"
    />
  </svg>
);
export default SvgPencilFill;
