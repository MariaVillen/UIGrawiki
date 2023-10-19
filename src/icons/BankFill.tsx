import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBankFill = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M15.138 4.46a2.235 2.235 0 0 1 2.714 0l9.508 7.265c1.21.925.56 2.857-.961 2.865H6.59c-1.52-.008-2.171-1.94-.96-2.865l9.507-7.266Zm1.357 6.777a1.437 1.437 0 1 0 0-2.874 1.437 1.437 0 0 0 0 2.874ZM7.874 16.506v5.747h2.874v-5.747H7.873ZM12.663 16.506v5.747h2.874v-5.747h-2.874ZM17.453 16.506v5.747h2.873v-5.747h-2.873ZM22.242 16.506v5.747h2.873v-5.747h-2.873ZM5 26.563a2.395 2.395 0 0 1 2.395-2.395h18.2a2.395 2.395 0 0 1 2.394 2.395v.479a.958.958 0 0 1-.958.958H5.958A.958.958 0 0 1 5 27.042v-.479Z"
    />
  </svg>
);
export default SvgBankFill;
