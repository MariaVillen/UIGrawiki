import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGoogleColor = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <g clipPath="url(#GoogleColor_svg__a)">
      <path
        fill="#FFC107"
        d="M27.767 13.65H26.8v-.05H16v4.8h6.782c-.99 2.794-3.648 4.8-6.782 4.8a7.2 7.2 0 0 1 0-14.4c1.835 0 3.505.692 4.777 1.823L24.17 7.23A11.945 11.945 0 0 0 16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12c0-.805-.083-1.59-.233-2.35Z"
      />
      <path
        fill="#FF3D00"
        d="m5.384 10.415 3.942 2.891A7.197 7.197 0 0 1 16 8.8c1.836 0 3.505.692 4.777 1.823L24.17 7.23A11.945 11.945 0 0 0 16.001 4c-4.61 0-8.607 2.602-10.617 6.415Z"
      />
      <path
        fill="#4CAF50"
        d="M16 28c3.1 0 5.916-1.186 8.045-3.115l-3.714-3.143A7.146 7.146 0 0 1 16 23.2c-3.121 0-5.771-1.99-6.77-4.768l-3.913 3.015C7.303 25.334 11.337 28 16 28Z"
      />
      <path
        fill="#1976D2"
        d="M27.767 13.65H26.8v-.05H16v4.8h6.782a7.224 7.224 0 0 1-2.452 3.343l.001-.002 3.714 3.143C23.783 25.123 28 22 28 16c0-.805-.083-1.59-.233-2.35Z"
      />
    </g>
    <defs>
      <clipPath id="GoogleColor_svg__a">
        <path fill="#fff" d="M4 4h24v24H4z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGoogleColor;
