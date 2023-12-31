import type { SVGProps } from "react";

const SvgCreate = ({ ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <mask id="Create_svg__a" fill="#fff">
      <path d="M26.286 13.429H18.57V5.714c0-.946-.767-1.714-1.714-1.714h-1.714c-.947 0-1.714.768-1.714 1.714v7.715H5.714c-.946 0-1.714.767-1.714 1.714v1.714c0 .947.768 1.714 1.714 1.714h7.715v7.715c0 .946.767 1.714 1.714 1.714h1.714c.947 0 1.714-.768 1.714-1.714V18.57h7.715c.946 0 1.714-.767 1.714-1.714v-1.714c0-.947-.768-1.714-1.714-1.714Z" />
    </mask>
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={2}
      d="M26.286 13.429H18.57V5.714c0-.946-.767-1.714-1.714-1.714h-1.714c-.947 0-1.714.768-1.714 1.714v7.715H5.714c-.946 0-1.714.767-1.714 1.714v1.714c0 .947.768 1.714 1.714 1.714h7.715v7.715c0 .946.767 1.714 1.714 1.714h1.714c.947 0 1.714-.768 1.714-1.714V18.57h7.715c.946 0 1.714-.767 1.714-1.714v-1.714c0-.947-.768-1.714-1.714-1.714Z"
      mask="url(#Create_svg__a)"
    />
  </svg>
);
export default SvgCreate;
