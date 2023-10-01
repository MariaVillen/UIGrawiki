import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgNotificationOutline = ({
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
      fill="currentColor"
      d="M26.752 23.238a10.63 10.63 0 0 1-1.854-2.164 9.325 9.325 0 0 1-.997-3.551v-3.648a7.981 7.981 0 0 0-6.97-7.937v-.952a.986.986 0 0 0-1.97 0v.967a7.981 7.981 0 0 0-6.89 7.922v3.648a9.325 9.325 0 0 1-.996 3.551c-.51.8-1.122 1.527-1.824 2.163a.738.738 0 0 0-.251.554v1.004a.738.738 0 0 0 .738.739h20.526a.739.739 0 0 0 .739-.739v-1.004a.74.74 0 0 0-.252-.553Zm-20.216.819a11.936 11.936 0 0 0 1.801-2.215 10.514 10.514 0 0 0 1.219-4.32v-3.647a6.453 6.453 0 1 1 12.898 0v3.648c.09 1.51.506 2.984 1.219 4.319.51.808 1.114 1.551 1.801 2.215H6.536ZM16.038 28a1.971 1.971 0 0 0 1.905-1.684H14.06A1.971 1.971 0 0 0 16.04 28Z"
    />
  </svg>
);
export default SvgNotificationOutline;
