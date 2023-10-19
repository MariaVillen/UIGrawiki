import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUsersOuline = ({
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
    <g clipPath="url(#UsersOuline_svg__a)">
      <mask id="UsersOuline_svg__b" fill="#fff">
        <path d="M4 22.023a4.006 4.006 0 0 1 4.005-4.005h6.009a4.006 4.006 0 0 1 4.005 4.005v4.006c0 .553-.448 1.001-1.001 1.001H5A1.001 1.001 0 0 1 4 26.029v-4.006Z" />
      </mask>
      <path
        stroke="currentColor"
        strokeWidth={4}
        d="M4 22.023a4.006 4.006 0 0 1 4.005-4.005h6.009a4.006 4.006 0 0 1 4.005 4.005v4.006c0 .553-.448 1.001-1.001 1.001H5A1.001 1.001 0 0 1 4 26.029v-4.006Z"
        mask="url(#UsersOuline_svg__b)"
      />
      <mask id="UsersOuline_svg__c" fill="#fff">
        <path d="M18.52 10.508a7.476 7.476 0 0 1-1.201 4.075 5.508 5.508 0 1 0 0-8.151 7.475 7.475 0 0 1 1.2 4.075Z" />
      </mask>
      <path
        stroke="currentColor"
        strokeWidth={4}
        d="M18.52 10.508a7.476 7.476 0 0 1-1.201 4.075 5.508 5.508 0 1 0 0-8.151 7.475 7.475 0 0 1 1.2 4.075Z"
        mask="url(#UsersOuline_svg__c)"
      />
      <mask id="UsersOuline_svg__d" fill="#fff">
        <path d="M20.022 22.023v5.007h7.01c.552 0 1-.448 1-1.001v-4.006a4.006 4.006 0 0 0-4.005-4.005h-5.535a5.986 5.986 0 0 1 1.53 4.005Z" />
      </mask>
      <path
        stroke="currentColor"
        strokeWidth={4}
        d="M20.022 22.023v5.007h7.01c.552 0 1-.448 1-1.001v-4.006a4.006 4.006 0 0 0-4.005-4.005h-5.535a5.986 5.986 0 0 1 1.53 4.005Z"
        mask="url(#UsersOuline_svg__d)"
      />
      <mask id="UsersOuline_svg__e" fill="#fff">
        <path d="M5.502 10.508a5.507 5.507 0 1 1 11.015 0 5.507 5.507 0 0 1-11.015 0Z" />
      </mask>
      <path
        stroke="currentColor"
        strokeWidth={4}
        d="M5.502 10.508a5.507 5.507 0 1 1 11.015 0 5.507 5.507 0 0 1-11.015 0Z"
        mask="url(#UsersOuline_svg__e)"
      />
    </g>
    <defs>
      <clipPath id="UsersOuline_svg__a">
        <path fill="#fff" d="M4 5.01h24.033v22.02H4z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgUsersOuline;
