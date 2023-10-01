import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHealthOutline = ({
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
    <g clipPath="url(#HealthOutline_svg__a)">
      <path
        fill="currentColor"
        d="M12 15.438v-1.876c0-.31.252-.562.563-.562h1.874c.311 0 .563.252.563.563v1.874c0 .311-.252.563-.563.563h-1.874a.563.563 0 0 1-.563-.563Zm6.563.562h1.875c.31 0 .562-.252.562-.563v-1.874a.563.563 0 0 0-.563-.563h-1.875a.563.563 0 0 0-.562.563v1.874c0 .311.252.563.563.563ZM15 19.938v-1.875a.563.563 0 0 0-.563-.563h-1.874a.563.563 0 0 0-.563.563v1.875c0 .31.252.562.563.562h1.874c.311 0 .563-.252.563-.563Zm3.563.562h1.875c.31 0 .562-.252.562-.563v-1.875a.563.563 0 0 0-.563-.562h-1.875a.563.563 0 0 0-.562.563v1.875c0 .31.252.562.563.562ZM27 26.313V28H6v-1.688c0-.31.252-.562.563-.562h.914V7.986c0-.545.503-.986 1.125-.986h4.148V5.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V7h4.148c.622 0 1.125.441 1.125.986V25.75h.915c.31 0 .562.252.562.563Zm-17.273-.61H15v-3.14c0-.311.252-.563.563-.563h1.874c.311 0 .563.252.563.563v3.14h5.273V9.25H20.25v1.125c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125V9.25H9.727v16.453ZM18.469 7H17.25V5.781a.281.281 0 0 0-.281-.281h-.938a.281.281 0 0 0-.281.281V7h-1.219a.281.281 0 0 0-.281.281v.938a.281.281 0 0 0 .281.281h1.219v1.219a.281.281 0 0 0 .281.281h.938a.281.281 0 0 0 .281-.281V8.5h1.219a.281.281 0 0 0 .281-.281V7.28A.281.281 0 0 0 18.469 7Z"
      />
    </g>
    <defs>
      <clipPath id="HealthOutline_svg__a">
        <path fill="#fff" d="M6 4h21v24H6z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHealthOutline;
