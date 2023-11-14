import type { SVGProps } from "react";

const SvgLindedinColor = ({ ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      fill="#0076B2"
      d="M26.23 4H5.77A1.753 1.753 0 0 0 4 5.731v20.542A1.753 1.753 0 0 0 5.77 28h20.46A1.756 1.756 0 0 0 28 26.267V5.725A1.757 1.757 0 0 0 26.23 4Z"
    />
    <path
      fill="#fff"
      d="M7.553 12.996h3.562V24.46H7.553V12.996Zm1.782-5.705a2.065 2.065 0 1 1 0 4.131 2.065 2.065 0 0 1 0-4.13ZM13.35 12.996h3.415v1.574h.047c.476-.901 1.637-1.851 3.37-1.851 3.608-.008 4.277 2.366 4.277 5.445v6.295h-3.563v-5.577c0-1.328-.023-3.037-1.85-3.037-1.828 0-2.14 1.447-2.14 2.95v5.664H13.35V12.996Z"
    />
  </svg>
);
export default SvgLindedinColor;
