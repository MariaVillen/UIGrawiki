import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMenu = ({
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
      d="M26.733 5.99H5.267C4.567 5.99 4 6.534 4 7.206v.128c0 .672.567 1.216 1.267 1.216h21.466c.7 0 1.267-.544 1.267-1.216v-.128c0-.672-.567-1.216-1.267-1.216ZM26.839 14.55H7.16C6.52 14.55 6 15.099 6 15.775v.13c0 .676.52 1.225 1.161 1.225H26.84c.641 0 1.161-.549 1.161-1.225v-.13c0-.676-.52-1.225-1.161-1.225ZM26.733 23.13H5.267c-.7 0-1.267.544-1.267 1.216v.128c0 .672.567 1.216 1.267 1.216h21.466c.7 0 1.267-.544 1.267-1.216v-.128c0-.672-.567-1.216-1.267-1.216Z"
    />
  </svg>
);
export default SvgMenu;
