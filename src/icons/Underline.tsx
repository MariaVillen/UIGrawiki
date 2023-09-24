import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUnderline = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
      d="M25.765 25.177V28H6v-2.823h19.765Zm-4.236-9.58a5.647 5.647 0 0 1-8.103 4.8 5.294 5.294 0 0 1-3.19-4.983V4.007H7.411v11.59a8.471 8.471 0 0 0 11.294 7.68 8.26 8.26 0 0 0 5.647-7.976V4.007h-2.824v11.59ZM21.53 4h2.824-2.824ZM10.235 4H7.412h2.823Z"
    />
  </svg>
);
export default SvgUnderline;
