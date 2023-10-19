import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHelp = ({
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
      d="M15.999 4c6.627 0 11.999 5.372 11.999 11.999 0 6.627-5.372 11.999-11.999 11.999a11.95 11.95 0 0 1-5.504-1.334l-4.59 1.28a1.5 1.5 0 0 1-1.849-1.848l1.281-4.587A11.95 11.95 0 0 1 4 16C4 9.372 9.372 4 15.999 4Zm0 1.8c-5.633 0-10.2 4.566-10.2 10.199 0 1.763.448 3.46 1.288 4.965l.181.323-1.335 4.78 4.784-1.334.323.18a10.148 10.148 0 0 0 4.959 1.285c5.633 0 10.2-4.566 10.2-10.199s-4.567-10.2-10.2-10.2Zm0 14.399a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Zm0-10.5a3.3 3.3 0 0 1 3.3 3.3c0 1.213-.357 1.889-1.261 2.83l-.203.206c-.746.747-.936 1.064-.936 1.764a.9.9 0 1 1-1.8 0c0-1.213.357-1.889 1.261-2.83l.203-.206c.746-.746.936-1.063.936-1.764a1.5 1.5 0 0 0-2.992-.153l-.008.153a.9.9 0 1 1-1.8 0A3.3 3.3 0 0 1 16 9.7Z"
    />
  </svg>
);
export default SvgHelp;
