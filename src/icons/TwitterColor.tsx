import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTwitterColor = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <g clipPath="url(#TwitterColor_svg__a)">
      <path
        fill="#1DA1F2"
        d="M27.993 4H4.007A.007.007 0 0 0 4 4.007v23.986c0 .004.003.007.007.007h23.986a.007.007 0 0 0 .007-.007V4.007A.007.007 0 0 0 27.993 4Z"
      />
      <path
        fill="#fff"
        d="M24.484 11.125a3.375 3.375 0 0 1-1.875.563 3.375 3.375 0 0 0 1.5-1.875c-.59.5-1.335.78-2.109.796a3.375 3.375 0 0 0-5.719 3.047 9.377 9.377 0 0 1-6.797-3.469 3.375 3.375 0 0 0 1.032 4.407 3.375 3.375 0 0 1-1.5-.328A3.375 3.375 0 0 0 11.64 17.5a3.376 3.376 0 0 1-1.5.047 3.376 3.376 0 0 0 3.14 2.344A9.375 9.375 0 0 1 8.36 21.25a9.376 9.376 0 0 0 14.485-8.39 9.38 9.38 0 0 0 1.64-1.735Z"
      />
    </g>
    <defs>
      <clipPath id="TwitterColor_svg__a">
        <path fill="#fff" d="M4 4h24v24H4z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTwitterColor;
