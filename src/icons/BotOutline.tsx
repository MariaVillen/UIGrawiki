import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBotOutline = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 32 32"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#000"
      d="M18.75 9.25a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM11.25 10.75a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
    />
    <path
      fill="#000"
      d="M16.5 4.75a.75.75 0 0 0-1.5 0v.75h-4.5a2.25 2.25 0 0 0-2.25 2.25v6A2.25 2.25 0 0 0 10.5 16H21a2.25 2.25 0 0 0 2.25-2.25v-6A2.25 2.25 0 0 0 21 5.5h-4.5v-.75ZM10.5 7H21a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75H10.5a.75.75 0 0 1-.75-.75v-6A.75.75 0 0 1 10.5 7ZM16.125 27.998c3.923-.05 6.292-.893 7.683-2.162 1.313-1.198 1.633-2.664 1.684-3.833h.008v-1.034a2.714 2.714 0 0 0-2.714-2.714H18v-.005h-4.5v.005H8.714A2.714 2.714 0 0 0 6 20.969v1.034h.008c.051 1.17.371 2.635 1.684 3.833 1.39 1.269 3.76 2.112 7.683 2.162V28h.75v-.002Zm-7.411-8.243h14.072c.67 0 1.214.543 1.214 1.214v.656c0 1.035-.197 2.185-1.203 3.103-1.032.941-3.056 1.772-7.047 1.772-3.99 0-6.015-.83-7.047-1.772C7.697 23.81 7.5 22.66 7.5 21.625v-.656c0-.67.543-1.214 1.214-1.214Z"
    />
  </svg>
);
export default SvgBotOutline;
