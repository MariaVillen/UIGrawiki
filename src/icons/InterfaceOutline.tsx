import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgInterfaceOutline = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
      stroke="currentColor"
      strokeWidth={1.5}
      d="M4.923 6.923a2 2 0 0 1 2-2h18.154a2 2 0 0 1 2 2v18.154a2 2 0 0 1-2 2H6.923a2 2 0 0 1-2-2V6.923Z"
    />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M8.246 16.435 9.721 17.7a2 2 0 0 0 2.864-.27l4.523-5.653M18.215 19.323h5.539"
    />
  </svg>
);
export default SvgInterfaceOutline;
