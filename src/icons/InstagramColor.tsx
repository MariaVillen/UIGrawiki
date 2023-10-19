import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgInstagramColor = ({
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
      fill="url(#InstagramColor_svg__a)"
      d="M12.001 16a4 4 0 1 1 8-.001A4 4 0 0 1 12 16Zm-2.163 0a6.162 6.162 0 1 0 12.324 0 6.162 6.162 0 0 0-12.324 0Zm11.129-6.406a1.44 1.44 0 1 0 1.44-1.44 1.44 1.44 0 0 0-1.44 1.44Zm-9.815 16.174c-1.17-.054-1.806-.248-2.228-.413a3.73 3.73 0 0 1-1.38-.898c-.42-.42-.681-.819-.898-1.379-.165-.422-.36-1.058-.413-2.229-.058-1.264-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.85.053-1.17.25-1.804.413-2.228.218-.56.478-.96.897-1.38.42-.42.82-.68 1.38-.898.423-.164 1.06-.36 2.23-.412 1.264-.059 1.644-.07 4.847-.07 3.204 0 3.584.012 4.85.07 1.17.053 1.805.25 2.229.412.56.217.96.478 1.38.898.42.42.68.82.898 1.38.164.423.36 1.059.412 2.229.059 1.266.07 1.645.07 4.85 0 3.204-.011 3.583-.07 4.848-.053 1.17-.249 1.806-.412 2.229-.218.56-.478.96-.898 1.38-.42.419-.82.679-1.38.897-.423.165-1.059.36-2.229.413-1.265.058-1.645.07-4.85.07-3.204 0-3.583-.012-4.848-.07Zm-.1-21.695c-1.277.058-2.15.26-2.912.557a5.886 5.886 0 0 0-2.126 1.384A5.863 5.863 0 0 0 4.63 8.14c-.297.763-.5 1.635-.557 2.913C4.013 12.333 4 12.74 4 16c0 3.259.014 3.668.073 4.947.058 1.278.26 2.15.557 2.913.306.79.716 1.46 1.384 2.126A5.9 5.9 0 0 0 8.14 27.37c.764.297 1.635.5 2.913.557 1.28.058 1.688.073 4.947.073 3.26 0 3.669-.014 4.948-.073 1.278-.058 2.15-.26 2.913-.557a5.902 5.902 0 0 0 2.126-1.384 5.878 5.878 0 0 0 1.384-2.126c.297-.763.5-1.635.557-2.913.058-1.28.072-1.688.072-4.947 0-3.259-.014-3.668-.072-4.947-.058-1.278-.26-2.15-.557-2.913a5.902 5.902 0 0 0-1.384-2.126 5.872 5.872 0 0 0-2.125-1.384c-.764-.297-1.636-.5-2.913-.557C19.669 4.014 19.26 4 16.001 4c-3.259 0-3.668.014-4.948.073Z"
    />
    <defs>
      <radialGradient
        id="InstagramColor_svg__a"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="translate(7.189 28.113) scale(31.3312)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.09} stopColor="#FA8F21" />
        <stop offset={0.78} stopColor="#D82D7E" />
      </radialGradient>
    </defs>
  </svg>
);
export default SvgInstagramColor;
