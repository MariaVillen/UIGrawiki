import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgToysOutline = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
      d="M26.8 14.8h-4.2V5.2A1.2 1.2 0 0 0 21.4 4H10.6a1.2 1.2 0 0 0-1.2 1.2v9.6H5.2A1.2 1.2 0 0 0 4 16v10.8A1.2 1.2 0 0 0 5.2 28h21.6a1.2 1.2 0 0 0 1.2-1.2V16a1.2 1.2 0 0 0-1.2-1.2Zm-12 10.8H6.4v-8.4h8.4v8.4Zm-3-10.8V6.4h8.4v8.4h-8.4Zm13.8 10.8h-8.4v-8.4h8.4v8.4Z"
    />
  </svg>
);
export default SvgToysOutline;
