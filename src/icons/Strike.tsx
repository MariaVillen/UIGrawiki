import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgStrike = ({
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
      d="M4 16.61h24v2h-5.821c.316.663.475 1.39.466 2.124a4.338 4.338 0 0 1-1.753 3.6 7.401 7.401 0 0 1-4.622 1.339 8.589 8.589 0 0 1-3.498-.719 5.95 5.95 0 0 1-2.523-1.984 4.89 4.89 0 0 1-.894-2.874v-.151h.383v-.002h.455v.002h1.834v.151a2.91 2.91 0 0 0 1.139 2.441 4.92 4.92 0 0 0 3.104.906 4.518 4.518 0 0 0 2.769-.729 2.312 2.312 0 0 0 .935-1.955 2.263 2.263 0 0 0-.863-1.913 4.028 4.028 0 0 0-.366-.236H4v-2Zm17.793-6.857a5.576 5.576 0 0 0-2.295-2.018 7.502 7.502 0 0 0-3.35-.729 6.881 6.881 0 0 0-4.485 1.417A4.485 4.485 0 0 0 9.92 12.03c-.005.66.142 1.31.429 1.904h3.462c-.111-.072-.247-.141-.337-.214a2.142 2.142 0 0 1-.87-1.734 2.398 2.398 0 0 1 .918-2.015 4.173 4.173 0 0 1 2.626-.736 4.064 4.064 0 0 1 2.808.891 3.133 3.133 0 0 1 .981 2.444v.151h2.67v-.151a5.201 5.201 0 0 0-.814-2.818Z"
    />
  </svg>
);
export default SvgStrike;
