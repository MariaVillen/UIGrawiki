import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTrash = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
      d="M14.143 3c-2.043 0-3.714 1.463-3.714 3.25H6.714C4.671 6.25 3 7.713 3 9.5h26c0-1.787-1.671-3.25-3.714-3.25H21.57C21.571 4.463 19.9 3 17.857 3h-3.714Zm-7.429 9.75v15.633c0 .357.297.617.706.617h17.197c.409 0 .706-.26.706-.617V12.75h-3.714v11.375c0 .91-.818 1.625-1.858 1.625s-1.857-.715-1.857-1.625V12.75H14.18v11.375c0 .91-.817 1.625-1.857 1.625s-1.857-.715-1.857-1.625V12.75H6.714Z"
    />
  </svg>
);
export default SvgTrash;
