import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUnorderedList = ({
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
      d="M5.895 14.316C4.885 14.316 4 15.2 4 16.21c0 1.011.884 1.895 1.895 1.895 1.01 0 1.894-.884 1.894-1.895 0-1.01-.884-1.894-1.894-1.894Zm0-6.316C4.885 8 4 8.884 4 9.895c0 1.01.884 1.895 1.895 1.895 1.01 0 1.894-.885 1.894-1.895S6.905 8 5.895 8Zm0 12.632c-1.01 0-1.895.884-1.895 1.894 0 1.01.884 1.895 1.895 1.895 1.01 0 1.894-.884 1.894-1.895 0-1.01-.884-1.894-1.894-1.894Zm4.42-12v2.526H28V8.632H10.316Zm0 15.158H28v-2.527H10.316v2.526Zm0-6.316H28v-2.527H10.316v2.527Z"
    />
  </svg>
);
export default SvgUnorderedList;
