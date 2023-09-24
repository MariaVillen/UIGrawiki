import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFacebookColor = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
      fill="#1877F2"
      d="M27.993 4H4.007A.007.007 0 0 0 4 4.007v23.986c0 .004.003.007.007.007h23.986a.007.007 0 0 0 .007-.007V4.007A.007.007 0 0 0 27.993 4Z"
    />
    <path
      fill="#fff"
      d="M20.669 19.469 21.203 16h-3.328v-2.25c0-.947.464-1.875 1.955-1.875h1.514V8.922s-1.374-.235-2.686-.235c-2.742 0-4.533 1.66-4.533 4.67V16h-3.047v3.469h3.047V28h3.75v-8.531h2.794Z"
    />
  </svg>
);
export default SvgFacebookColor;
