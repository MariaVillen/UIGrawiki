import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUploadOuline = ({
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M22.154 22.154h.012m-1.735-3.692h2.954c1.147 0 1.72 0 2.172.187.604.25 1.083.729 1.333 1.332.187.452.187 1.026.187 2.173s0 1.72-.187 2.173a2.463 2.463 0 0 1-1.333 1.332c-.452.187-1.025.187-2.172.187H8.615c-1.147 0-1.72 0-2.172-.187a2.462 2.462 0 0 1-1.333-1.332c-.187-.453-.187-1.026-.187-2.173s0-1.72.187-2.173a2.462 2.462 0 0 1 1.333-1.332c.452-.187 1.025-.187 2.172-.187h2.954M16 19.692V6.154m0 0 3.692 3.692M16 6.154l-3.692 3.692"
    />
  </svg>
);
export default SvgUploadOuline;
