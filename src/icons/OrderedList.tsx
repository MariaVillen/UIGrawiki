import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgOrderedList = ({
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
    <path
      fill="currentColor"
      d="M4 20.895h2.526v.631H5.263v1.264h1.263v.631H4v1.263h3.79v-5.052H4v1.263Zm1.263-8.842h1.263V7H4v1.263h1.263v3.79ZM4 14.579h2.274L4 17.232v1.136h3.79v-1.263H5.515l2.273-2.652v-1.137H4v1.263Zm6.316-6.316v2.527H28V8.262H10.316Zm0 15.158H28v-2.526H10.316v2.526Zm0-6.316H28V14.58H10.316v2.526Z"
    />
  </svg>
);
export default SvgOrderedList;
