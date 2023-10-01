import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBold = ({
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
      d="M21.743 15.657a6.308 6.308 0 0 0 3-4.8A6.736 6.736 0 0 0 18.126 4H7v24h12a6.413 6.413 0 0 0 6.343-6.48v-.206a6.24 6.24 0 0 0-3.6-5.657ZM10.429 7.43h7.2a3.583 3.583 0 0 1 3.428 2.228 3.583 3.583 0 0 1-2.348 4.474c-.351.103-.715.155-1.08.155h-7.2V7.429Zm7.885 17.142H10.43v-6.857h7.885a3.583 3.583 0 0 1 3.429 2.229 3.583 3.583 0 0 1-2.349 4.474c-.35.103-.714.155-1.08.154Z"
    />
  </svg>
);
export default SvgBold;
