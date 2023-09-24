import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPasswordShowFill = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
      d="M16.098 6C7.874 6 3 16.4 3 16.4s4.875 10.4 13.098 10.4C24.124 26.8 29 16.4 29 16.4S24.125 6 16.098 6ZM16 9.467c3.608 0 6.5 3.12 6.5 6.933 0 3.848-2.892 6.933-6.5 6.933-3.575 0-6.5-3.085-6.5-6.933 0-3.813 2.925-6.933 6.5-6.933Zm0 3.466c-1.787 0-3.25 1.56-3.25 3.467s1.463 3.467 3.25 3.467c1.788 0 3.25-1.56 3.25-3.467 0-.347-.13-.659-.195-.97-.26.554-.78.97-1.43.97-.91 0-1.625-.763-1.625-1.733 0-.694.39-1.248.91-1.526-.293-.104-.585-.208-.91-.208Z"
    />
  </svg>
);
export default SvgPasswordShowFill;
