import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      clipPath="url(#a)"
    >
      <path d="M22.286 2.214 1.714 22.786M1.714 2.214l20.572 20.572" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="currentColor" d="M0 .5h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgComponent;
