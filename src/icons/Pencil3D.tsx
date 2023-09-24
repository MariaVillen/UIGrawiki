import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPencil3D = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
      fill="url(#Pencil3D_svg__a)"
      d="M23.037 2.506a1.5 1.5 0 0 1 2.121 0l4.363 4.363a1.5 1.5 0 0 1 0 2.121L9.464 29.048l-6.485-6.485L23.038 2.506Z"
    />
    <path
      fill="url(#Pencil3D_svg__b)"
      d="M23.037 2.506a1.5 1.5 0 0 1 2.121 0l4.363 4.363a1.5 1.5 0 0 1 0 2.121L9.464 29.048l-6.485-6.485L23.038 2.506Z"
    />
    <path
      fill="url(#Pencil3D_svg__c)"
      d="M23.037 2.506a1.5 1.5 0 0 1 2.121 0l4.363 4.363a1.5 1.5 0 0 1 0 2.121L9.464 29.048l-6.485-6.485L23.038 2.506Z"
    />
    <path
      fill="url(#Pencil3D_svg__d)"
      d="M23.037 2.506a1.5 1.5 0 0 1 2.121 0l4.363 4.363a1.5 1.5 0 0 1 0 2.121L9.464 29.048l-6.485-6.485L23.038 2.506Z"
    />
    <path
      fill="url(#Pencil3D_svg__e)"
      d="M2.034 29.782a.2.2 0 0 0 .219.218l6.54-.629a1 1 0 0 0 .518-.205l.153-.118-6.484-6.485-.101.122a1 1 0 0 0-.224.543l-.62 6.554Z"
    />
    <path
      fill="url(#Pencil3D_svg__f)"
      d="M2.034 29.782a.2.2 0 0 0 .219.218l6.54-.629a1 1 0 0 0 .518-.205l.153-.118-6.484-6.485-.101.122a1 1 0 0 0-.224.543l-.62 6.554Z"
    />
    <path
      fill="url(#Pencil3D_svg__g)"
      d="M2.034 29.782a.2.2 0 0 0 .219.218l6.54-.629a1 1 0 0 0 .518-.205l.153-.118-6.484-6.485-.101.122a1 1 0 0 0-.224.543l-.62 6.554Z"
    />
    <path
      fill="url(#Pencil3D_svg__h)"
      d="M26.34 12.172 29.52 8.99a1.5 1.5 0 0 0 0-2.121l-4.363-4.363a1.5 1.5 0 0 0-2.121 0l-3.182 3.182 6.485 6.484Z"
    />
    <path
      fill="url(#Pencil3D_svg__i)"
      d="M26.34 12.172 29.52 8.99a1.5 1.5 0 0 0 0-2.121l-4.363-4.363a1.5 1.5 0 0 0-2.121 0l-3.182 3.182 6.485 6.484Z"
    />
    <path
      fill="url(#Pencil3D_svg__j)"
      d="M26.34 12.172 29.52 8.99a1.5 1.5 0 0 0 0-2.121l-4.363-4.363a1.5 1.5 0 0 0-2.121 0l-3.182 3.182 6.485 6.484Z"
    />
    <path fill="url(#Pencil3D_svg__k)" d="m16.666 8.877 3.19-3.19 6.484 6.485-3.19 3.19-6.484-6.485Z" />
    <path fill="url(#Pencil3D_svg__l)" d="m16.666 8.877 3.19-3.19 6.484 6.485-3.19 3.19-6.484-6.485Z" />
    <path fill="url(#Pencil3D_svg__m)" d="M2.253 30a.2.2 0 0 1-.219-.218l.218-2.3 2.296 2.297L2.253 30Z" />
    <defs>
      <linearGradient
        id="Pencil3D_svg__b"
        x1={10.136}
        x2={11.699}
        y1={14.875}
        y2={16.375}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EE9B6A" />
        <stop offset={1} stopColor="#EE9B6A" stopOpacity={0} />
      </linearGradient>
      <linearGradient id="Pencil3D_svg__c" x1={20.637} x2={18.762} y1={18.5} y2={16.938} gradientUnits="userSpaceOnUse">
        <stop stopColor="#E66A62" />
        <stop offset={1} stopColor="#E66A62" stopOpacity={0} />
      </linearGradient>
      <linearGradient id="Pencil3D_svg__e" x1={3.887} x2={6.512} y1={26.094} y2={30.219} gradientUnits="userSpaceOnUse">
        <stop stopColor="#D8A587" />
        <stop offset={1} stopColor="#CE7A98" />
      </linearGradient>
      <linearGradient id="Pencil3D_svg__f" x1={6.98} x2={6.457} y1={26.282} y2={26.812} gradientUnits="userSpaceOnUse">
        <stop offset={0.207} stopColor="#FFC09F" />
        <stop offset={1} stopColor="#FCB196" stopOpacity={0} />
      </linearGradient>
      <linearGradient id="Pencil3D_svg__g" x1={1.512} x2={3.637} y1={25.937} y2={26.125} gradientUnits="userSpaceOnUse">
        <stop stopColor="#DEBCA3" />
        <stop offset={1} stopColor="#DEBCA3" stopOpacity={0} />
      </linearGradient>
      <linearGradient id="Pencil3D_svg__h" x1={28.074} x2={23.949} y1={4.938} y2={9} gradientUnits="userSpaceOnUse">
        <stop stopColor="#FF6153" />
        <stop offset={1} stopColor="#FF6154" />
      </linearGradient>
      <linearGradient id="Pencil3D_svg__i" x1={20.762} x2={24.012} y1={4.563} y2={7.563} gradientUnits="userSpaceOnUse">
        <stop stopColor="#F1553E" />
        <stop offset={1} stopColor="#F1553E" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="Pencil3D_svg__k"
        x1={18.324}
        x2={22.449}
        y1={7.375}
        y2={11.125}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C5C4CB" />
        <stop offset={1} stopColor="#E8DEFA" />
      </linearGradient>
      <linearGradient
        id="Pencil3D_svg__l"
        x1={24.824}
        x2={22.512}
        y1={14.375}
        y2={12.125}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C9B9E0" />
        <stop offset={1} stopColor="#C9B9E0" stopOpacity={0} />
      </linearGradient>
      <linearGradient id="Pencil3D_svg__m" x1={2.23} x2={3.291} y1={28.531} y2={30.001} gradientUnits="userSpaceOnUse">
        <stop stopColor="#461E49" />
        <stop offset={1} stopColor="#450F51" />
      </linearGradient>
      <radialGradient
        id="Pencil3D_svg__a"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(13.74998 -14.06245 8.72293 8.5291 6.199 26)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF9130" />
        <stop offset={1} stopColor="#F3633D" />
      </radialGradient>
      <radialGradient
        id="Pencil3D_svg__d"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(12.87503 -12.81253 2.8651 2.87908 5.949 25.813)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF994D" />
        <stop offset={1} stopColor="#FF994D" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="Pencil3D_svg__j"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(135 12.398 8.577) scale(1.37002 3.11227)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.177} stopColor="#FF786D" />
        <stop offset={1} stopColor="#FF786D" stopOpacity={0} />
      </radialGradient>
    </defs>
  </svg>
);
export default SvgPencil3D;
