import type { SVGProps } from "react";

const SvgCloseRoundedFill = ({ ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      fill="currentColor"
      d="M16 4C9.371 4 4 9.371 4 16s5.371 12 12 12 12-5.371 12-12S22.629 4 16 4Zm4.926 8.99L17.916 16l3.01 3.01a.581.581 0 0 1 0 .822l-1.094 1.094a.581.581 0 0 1-.822 0L16 17.916l-3.01 3.01a.581.581 0 0 1-.822 0l-1.094-1.094a.581.581 0 0 1 0-.822l3.01-3.01-3.01-3.01a.581.581 0 0 1 0-.822l1.094-1.094a.581.581 0 0 1 .822 0l3.01 3.01 3.01-3.01a.581.581 0 0 1 .822 0l1.094 1.094a.581.581 0 0 1 0 .822Z"
    />
  </svg>
);
export default SvgCloseRoundedFill;
