import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgOutdent = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
      d="m4 16.333 4 4v-8l-4 4Zm0 9.334h24V23H4v2.667Zm0-16h24V7H4v2.667ZM12 15h16v-2.667H12V15Zm0 5.333h16v-2.666H12v2.666Z"
    />
  </svg>
);
export default SvgOutdent;
