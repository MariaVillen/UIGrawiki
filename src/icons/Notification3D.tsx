import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgNotification3D = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <circle cx={16} cy={25} r={3} fill="url(#Notification3D_svg__a)" />
    <circle cx={16} cy={25} r={3} fill="url(#Notification3D_svg__b)" />
    <circle cx={16} cy={25} r={3} fill="url(#Notification3D_svg__c)" />
    <g filter="url(#Notification3D_svg__d)">
      <rect width={2} height={4} x={15} y={4} fill="url(#Notification3D_svg__e)" rx={1} />
    </g>
    <g filter="url(#Notification3D_svg__f)">
      <path
        fill="url(#Notification3D_svg__g)"
        d="M9.192 11.431c.63-3.136 3.382-5.4 6.59-5.43h.436c3.208.03 5.96 2.294 6.59 5.43l1.58 7.867a3.37 3.37 0 0 0 .747 1.531l1.052 1.225c.525.612.813 1.39.813 2.193v1.12c0 .35-.285.633-.637.633H5.637A.635.635 0 0 1 5 25.367v-1.12c0-.804.288-1.581.813-2.193l1.052-1.225a3.37 3.37 0 0 0 .747-1.532l1.58-7.866Z"
      />
    </g>
    <path
      fill="url(#Notification3D_svg__h)"
      d="M9.192 11.431c.63-3.136 3.382-5.4 6.59-5.43h.436c3.208.03 5.96 2.294 6.59 5.43l1.58 7.867a3.37 3.37 0 0 0 .747 1.531l1.052 1.225c.525.612.813 1.39.813 2.193v1.12c0 .35-.285.633-.637.633H5.637A.635.635 0 0 1 5 25.367v-1.12c0-.804.288-1.581.813-2.193l1.052-1.225a3.37 3.37 0 0 0 .747-1.532l1.58-7.866Z"
    />
    <path
      fill="url(#Notification3D_svg__i)"
      d="M9.192 11.431c.63-3.136 3.382-5.4 6.59-5.43h.436c3.208.03 5.96 2.294 6.59 5.43l1.58 7.867a3.37 3.37 0 0 0 .747 1.531l1.052 1.225c.525.612.813 1.39.813 2.193v1.12c0 .35-.285.633-.637.633H5.637A.635.635 0 0 1 5 25.367v-1.12c0-.804.288-1.581.813-2.193l1.052-1.225a3.37 3.37 0 0 0 .747-1.532l1.58-7.866Z"
    />
    <g filter="url(#Notification3D_svg__j)">
      <path fill="url(#Notification3D_svg__k)" d="M9.34 21 8 22h18l-1.446-1H9.339Z" />
    </g>
    <g filter="url(#Notification3D_svg__l)">
      <path fill="url(#Notification3D_svg__m)" d="M17 9.788a1.788 1.788 0 0 1 3.536-.372L23 21h-6V9.788Z" />
    </g>
    <defs>
      <linearGradient
        id="Notification3D_svg__b"
        x1={15.392}
        x2={15.597}
        y1={25.729}
        y2={27.189}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.186} stopColor="#E57356" />
        <stop offset={1} stopColor="#E57356" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="Notification3D_svg__g"
        x1={18.094}
        x2={6.618}
        y1={24.45}
        y2={24.45}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FCB949" />
        <stop offset={1} stopColor="#E28C37" />
      </linearGradient>
      <linearGradient
        id="Notification3D_svg__h"
        x1={17.785}
        x2={17.785}
        y1={26.218}
        y2={23.686}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D7737D" />
        <stop offset={0.302} stopColor="#FCA162" stopOpacity={0} />
      </linearGradient>
      <linearGradient id="Notification3D_svg__k" x1={8.268} x2={25.464} y1={22} y2={22} gradientUnits="userSpaceOnUse">
        <stop offset={0.277} stopColor="#F5A43C" />
        <stop offset={1} stopColor="#FFE154" />
      </linearGradient>
      <linearGradient id="Notification3D_svg__m" x1={23.706} x2={16} y1={18.5} y2={18.5} gradientUnits="userSpaceOnUse">
        <stop offset={0.118} stopColor="#FFEF6D" />
        <stop offset={1} stopColor="#FFEF6D" stopOpacity={0} />
      </linearGradient>
      <radialGradient
        id="Notification3D_svg__a"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(-1.44085 -1.94634 2.688 -1.98988 17.44 27.701)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFC26D" />
        <stop offset={1} stopColor="#F68D61" />
      </radialGradient>
      <radialGradient
        id="Notification3D_svg__c"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(135 3.107 16.15) scale(3.33204 5.49818)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.441} stopColor="#EA8059" stopOpacity={0} />
        <stop offset={1} stopColor="#C27068" />
      </radialGradient>
      <radialGradient
        id="Notification3D_svg__e"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(0 -2.00001 1.08996 0 16.657 6)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFE957" />
        <stop offset={1} stopColor="#F7A630" />
      </radialGradient>
      <radialGradient
        id="Notification3D_svg__i"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(-16.12735 10.76496 -10.30628 -15.44018 21.127 14.768)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.67} stopColor="#E69136" stopOpacity={0} />
        <stop offset={0.977} stopColor="#CF7D44" />
      </radialGradient>
      <filter
        id="Notification3D_svg__d"
        width={2.2}
        height={4}
        x={15}
        y={4}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset dx={0.2} />
        <feGaussianBlur stdDeviation={0.25} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.87451 0 0 0 0 0.564706 0 0 0 0 0.341176 0 0 0 1 0" />
        <feBlend in2="shape" result="effect1_innerShadow_302_14738" />
      </filter>
      <filter
        id="Notification3D_svg__f"
        width={27}
        height={20}
        x={1}
        y={6}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset dx={-4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.905882 0 0 0 0 0.392157 0 0 0 1 0" />
        <feBlend in2="shape" result="effect1_innerShadow_302_14738" />
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset dx={-0.5} />
        <feGaussianBlur stdDeviation={0.5} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.996078 0 0 0 0 0.866667 0 0 0 0 0.462745 0 0 0 1 0" />
        <feBlend in2="effect1_innerShadow_302_14738" result="effect2_innerShadow_302_14738" />
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset dx={1} />
        <feGaussianBlur stdDeviation={1} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.917647 0 0 0 0 0.572549 0 0 0 0 0.32549 0 0 0 1 0" />
        <feBlend in2="effect2_innerShadow_302_14738" result="effect3_innerShadow_302_14738" />
      </filter>
      <filter
        id="Notification3D_svg__j"
        width={22}
        height={5}
        x={6}
        y={19}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur result="effect1_foregroundBlur_302_14738" stdDeviation={1} />
      </filter>
      <filter
        id="Notification3D_svg__l"
        width={10}
        height={17}
        x={15}
        y={6}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur result="effect1_foregroundBlur_302_14738" stdDeviation={1} />
      </filter>
    </defs>
  </svg>
);
export default SvgNotification3D;
