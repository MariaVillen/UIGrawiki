import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSubscript = ({
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
      d="m13.035 13.059 5.083 5.082-1.977 1.977-5.082-5.083-5.083 5.083L4 18.14l5.082-5.082L4 7.976 5.976 6l5.083 5.082L16.14 6l1.977 1.976-5.083 5.083Zm11.17 10.834 1.509-1.619c.276-.284.523-.575.757-.86.226-.274.43-.565.61-.87.17-.283.308-.583.413-.895.1-.303.151-.62.15-.94a3.051 3.051 0 0 0-.215-1.16 2.421 2.421 0 0 0-.636-.907 2.865 2.865 0 0 0-1.018-.573 4.477 4.477 0 0 0-2.75.063 3.029 3.029 0 0 0-1.079.698 2.928 2.928 0 0 0-.67 1.039 3.451 3.451 0 0 0-.22 1.176l-.005.334h2.173l.009-.32a2.06 2.06 0 0 1 .076-.529c.047-.151.122-.292.221-.416a.988.988 0 0 1 .366-.26 1.42 1.42 0 0 1 .99-.02c.117.05.22.127.304.221.086.102.152.218.194.344a1.539 1.539 0 0 1 .032.85c-.04.146-.1.288-.175.421-.109.192-.233.376-.371.548-.19.247-.392.483-.606.71l-3.045 3.321v1.516H28v-1.872h-3.794Z"
    />
  </svg>
);
export default SvgSubscript;