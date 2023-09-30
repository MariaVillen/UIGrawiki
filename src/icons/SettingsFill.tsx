import type { SVGProps } from "react";

export type SVGRProps = {
  title?: string;
  titleId?: string;
};

const SvgSettingsFill = ({
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
    <g clipPath="url(#SettingsFill_svg__a)">
      <mask id="SettingsFill_svg__b" fill="#fff">
        <path d="M14.5 4 13 7.57c-.3.09-.57.24-.84.39l-3.57-1.5-2.16 2.16 1.5 3.57c-.15.3-.27.54-.39.84l-3.57 1.5v3l3.57 1.5c.12.3.24.54.39.84l-1.5 3.57 2.16 2.16 3.57-1.5c.27.12.54.27.84.39l1.5 3.57h3l1.5-3.57c.27-.12.57-.24.84-.39l3.57 1.5 2.16-2.16-1.5-3.57c.12-.27.27-.57.39-.84l3.57-1.5v-3l-3.57-1.5c-.09-.27-.24-.57-.39-.84l1.5-3.57-2.16-2.16-3.57 1.5c-.27-.12-.57-.27-.84-.39L17.5 4h-3Zm1.5 7.5c2.49 0 4.5 2.01 4.5 4.5s-2.01 4.5-4.5 4.5-4.5-2.01-4.5-4.5 2.01-4.5 4.5-4.5Z" />
      </mask>
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={2}
        d="M14.5 4 13 7.57c-.3.09-.57.24-.84.39l-3.57-1.5-2.16 2.16 1.5 3.57c-.15.3-.27.54-.39.84l-3.57 1.5v3l3.57 1.5c.12.3.24.54.39.84l-1.5 3.57 2.16 2.16 3.57-1.5c.27.12.54.27.84.39l1.5 3.57h3l1.5-3.57c.27-.12.57-.24.84-.39l3.57 1.5 2.16-2.16-1.5-3.57c.12-.27.27-.57.39-.84l3.57-1.5v-3l-3.57-1.5c-.09-.27-.24-.57-.39-.84l1.5-3.57-2.16-2.16-3.57 1.5c-.27-.12-.57-.27-.84-.39L17.5 4h-3Zm1.5 7.5c2.49 0 4.5 2.01 4.5 4.5s-2.01 4.5-4.5 4.5-4.5-2.01-4.5-4.5 2.01-4.5 4.5-4.5Z"
        mask="url(#SettingsFill_svg__b)"
      />
    </g>
    <defs>
      <clipPath id="SettingsFill_svg__a">
        <path fill="#fff" d="M4 4h24v24H4z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSettingsFill;
