import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBotFill = ({
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
      fill="#000"
      d="M22.786 18.255a2.714 2.714 0 0 1 2.714 2.714v1.034h-.008c-.051 1.17-.372 2.635-1.684 3.833C22.374 27.145 19.898 28 15.75 28s-6.624-.855-8.058-2.164c-1.313-1.198-1.633-2.664-1.684-3.833H6v-1.034a2.714 2.714 0 0 1 2.714-2.714h14.072ZM10.5 5.5a2.25 2.25 0 0 0-2.25 2.25v6A2.25 2.25 0 0 0 10.5 16H21a2.25 2.25 0 0 0 2.25-2.25v-6A2.25 2.25 0 0 0 21 5.5h-4.5v-.75c0-.463-.336-.75-.75-.75a.756.756 0 0 0-.75.75v.75h-4.5Zm.75 5.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
    />
  </svg>
);
export default SvgBotFill;
