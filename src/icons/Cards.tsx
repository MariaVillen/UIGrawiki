import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCards = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
      d="M4 4h6.857v6.857H4V4ZM12.571 4h6.857v6.857h-6.857V4ZM21.143 4H28v6.857h-6.857V4ZM4 12.571h6.857v6.858H4V12.57ZM12.571 12.571h6.857v6.858h-6.857V12.57ZM21.143 12.571H28v6.858h-6.857V12.57ZM4 21.143h6.857V28H4v-6.857ZM12.571 21.143h6.857V28h-6.857v-6.857ZM21.143 21.143H28V28h-6.857v-6.857Z"
    />
  </svg>
);
export default SvgCards;
