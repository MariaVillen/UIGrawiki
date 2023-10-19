import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSuperscript = ({
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
      d="m12.533 19 4.8 4.8-1.866 1.867-4.8-4.8-4.8 4.8L4 23.8 8.8 19 4 14.2l1.867-1.867 4.8 4.8 4.8-4.8 1.866 1.867-4.8 4.8Zm11.883-4.435 1.425-1.528c.26-.269.494-.544.715-.812.213-.259.406-.534.576-.823.16-.267.29-.55.39-.844.095-.287.143-.587.143-.889a2.882 2.882 0 0 0-.205-1.096 2.287 2.287 0 0 0-.6-.855 2.706 2.706 0 0 0-.961-.542 4.228 4.228 0 0 0-2.598.06 2.86 2.86 0 0 0-1.018.66 2.765 2.765 0 0 0-.634.98 3.265 3.265 0 0 0-.207 1.11l-.005.317h2.052l.009-.303c.002-.169.026-.337.072-.5.044-.142.115-.275.209-.392a.934.934 0 0 1 .345-.245c.3-.12.631-.126.935-.02.11.048.208.12.287.21a.997.997 0 0 1 .184.324 1.455 1.455 0 0 1 .03.802 1.793 1.793 0 0 1-.165.398c-.103.182-.22.355-.351.518-.18.233-.37.456-.573.67l-2.875 3.137v1.431H28v-1.768h-3.584Z"
    />
  </svg>
);
export default SvgSuperscript;
