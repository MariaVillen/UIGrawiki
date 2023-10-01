import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBankOutline = ({
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
      fill="currentColor"
      d="M16.331 11.135a1.405 1.405 0 1 0 0-2.81 1.405 1.405 0 0 0 0 2.81Z"
    />
    <path
      fill="currentColor"
      d="M17.711 4.49a2.186 2.186 0 0 0-2.758 0L5.58 12.11c-1.141.927-.485 2.773.985 2.773h.397v7.87a3.435 3.435 0 0 0-1.874 3.06v1.25c0 .517.42.937.937.937h20.613c.517 0 .937-.42.937-.937v-1.25a3.435 3.435 0 0 0-1.874-3.06v-7.87h.396c1.47 0 2.126-1.846.986-2.774L17.71 4.49Zm-1.576 1.454a.312.312 0 0 1 .394 0l8.69 7.065H7.443l8.69-7.065Zm7.692 16.434h-1.874v-7.495h1.874v7.495Zm-3.748 0h-2.81v-7.495h2.81v7.495Zm-4.685 0h-2.81v-7.495h2.81v7.495Zm8.745 1.874c.863 0 1.562.7 1.562 1.562v.312H6.96v-.312c0-.863.7-1.562 1.562-1.562H24.14Zm-13.43-1.874H8.837v-7.495h1.873v7.495Z"
    />
  </svg>
);
export default SvgBankOutline;
