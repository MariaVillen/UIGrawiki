import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAlertColor = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M14.842 13.172c.45.813-.114 1.828-1.01 1.828H2.168c-.898 0-1.458-1.017-1.01-1.828L6.988 2.61a1.143 1.143 0 0 1 2.022 0l5.831 10.563ZM8 10.988c-.617 0-1.118.523-1.118 1.168 0 .645.5 1.168 1.118 1.168.617 0 1.118-.523 1.118-1.168 0-.645-.5-1.168-1.118-1.168ZM6.939 6.79l.18 3.453a.297.297 0 0 0 .291.288h1.18a.297.297 0 0 0 .291-.288l.18-3.453a.3.3 0 0 0-.29-.321H7.23a.3.3 0 0 0-.291.321Z"
    />
  </svg>
);
export default SvgAlertColor;
