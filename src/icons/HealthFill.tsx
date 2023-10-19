import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHealthFill = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath="url(#HealthFill_svg__a)">
      <path
        fill="currentColor"
        d="M26 27.063V28H5v-.938c0-.31.252-.562.563-.562H6.5V9.625c0-.621.504-1.125 1.125-1.125h4.125V5.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V8.5h4.125c.621 0 1.125.504 1.125 1.125V26.5h.938c.31 0 .562.252.562.563ZM19.437 13h-1.875a.563.563 0 0 0-.562.563v1.874c0 .311.252.563.563.563h1.875c.31 0 .562-.252.562-.563v-1.874a.563.563 0 0 0-.563-.563Zm-7.875 3h1.876c.31 0 .562-.252.562-.563v-1.874a.563.563 0 0 0-.563-.563h-1.874a.563.563 0 0 0-.563.563v1.874c0 .311.252.563.563.563Zm4.876 6h-1.875a.563.563 0 0 0-.563.563V26.5h3v-3.938a.563.563 0 0 0-.563-.562Zm3-4.5h-1.875a.563.563 0 0 0-.563.563v1.875c0 .31.252.562.563.562h1.875c.31 0 .562-.252.562-.563v-1.875a.563.563 0 0 0-.563-.562ZM14 18.063a.563.563 0 0 0-.563-.563h-1.874a.563.563 0 0 0-.563.563v1.875c0 .31.252.562.563.562h1.874c.311 0 .563-.252.563-.563v-1.875ZM13.531 8.5h1.219v1.219a.281.281 0 0 0 .281.281h.938a.281.281 0 0 0 .281-.281V8.5h1.219a.281.281 0 0 0 .281-.281V7.28A.281.281 0 0 0 17.469 7H16.25V5.781a.281.281 0 0 0-.281-.281h-.938a.281.281 0 0 0-.281.281V7h-1.219a.281.281 0 0 0-.281.281v.938a.281.281 0 0 0 .281.281Z"
      />
    </g>
    <defs>
      <clipPath id="HealthFill_svg__a">
        <path fill="#fff" d="M5 4h21v24H5z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHealthFill;
