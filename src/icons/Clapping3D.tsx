import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgClapping3D = ({
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
    <g clipPath="url(#Clapping3D_svg__a)">
      <path
        fill="#FF9D25"
        d="m23.262 22.448-.154-9.39c-.1-.892-.588-2.089-2.259-2.089-1.95.093-2.026 2.088-2.026 2.088l-2.97-5.305c-.743-1.13-1.961-1.208-2.723-.743-.763.465-.929 1.408-.929 1.408l-.618-.805c-.466-.762-1.858-.85-2.568-.417-1.179.719-1.35 2.209-.588 3.032-.05-.054-.632-.256-1.609.34-.762.465-.998 1.856-.572 2.645.425.79.487.913.487.913s-.657-.31-1.694.387c-.741.498-1.007 1.976-.541 2.738l2.496 4.209 3.435 5.613c2.02 2.863 6.326 3.851 9.455 1.95 2.134-1.296 3.581-4.034 3.378-6.574Z"
      />
      <path
        fill="url(#Clapping3D_svg__b)"
        d="m23.262 22.448-.154-9.39c-.1-.892-.588-2.089-2.259-2.089-1.95.093-2.026 2.088-2.026 2.088l-2.97-5.305c-.743-1.13-1.961-1.208-2.723-.743-.763.465-.929 1.408-.929 1.408l-.618-.805c-.466-.762-1.858-.85-2.568-.417-1.179.719-1.35 2.209-.588 3.032-.05-.054-.632-.256-1.609.34-.762.465-.998 1.856-.572 2.645.425.79.487.913.487.913s-.657-.31-1.694.387c-.741.498-1.007 1.976-.541 2.738l2.496 4.209 3.435 5.613c2.02 2.863 6.326 3.851 9.455 1.95 2.134-1.296 3.581-4.034 3.378-6.574Z"
      />
      <path
        fill="url(#Clapping3D_svg__c)"
        d="m23.262 22.448-.154-9.39c-.1-.892-.588-2.089-2.259-2.089-1.95.093-2.026 2.088-2.026 2.088l-2.97-5.305c-.743-1.13-1.961-1.208-2.723-.743-.763.465-.929 1.408-.929 1.408l-.618-.805c-.466-.762-1.858-.85-2.568-.417-1.179.719-1.35 2.209-.588 3.032-.05-.054-.632-.256-1.609.34-.762.465-.998 1.856-.572 2.645.425.79.487.913.487.913s-.657-.31-1.694.387c-.741.498-1.007 1.976-.541 2.738l2.496 4.209 3.435 5.613c2.02 2.863 6.326 3.851 9.455 1.95 2.134-1.296 3.581-4.034 3.378-6.574Z"
      />
      <path
        fill="url(#Clapping3D_svg__d)"
        d="m23.262 22.448-.154-9.39c-.1-.892-.588-2.089-2.259-2.089-1.95.093-2.026 2.088-2.026 2.088l-2.97-5.305c-.743-1.13-1.961-1.208-2.723-.743-.763.465-.929 1.408-.929 1.408l-.618-.805c-.466-.762-1.858-.85-2.568-.417-1.179.719-1.35 2.209-.588 3.032-.05-.054-.632-.256-1.609.34-.762.465-.998 1.856-.572 2.645.425.79.487.913.487.913s-.657-.31-1.694.387c-.741.498-1.007 1.976-.541 2.738l2.496 4.209 3.435 5.613c2.02 2.863 6.326 3.851 9.455 1.95 2.134-1.296 3.581-4.034 3.378-6.574Z"
      />
      <path
        fill="url(#Clapping3D_svg__e)"
        d="m23.262 22.448-.154-9.39c-.1-.892-.588-2.089-2.259-2.089-1.95.093-2.026 2.088-2.026 2.088l-2.97-5.305c-.743-1.13-1.961-1.208-2.723-.743-.763.465-.929 1.408-.929 1.408l-.618-.805c-.466-.762-1.858-.85-2.568-.417-1.179.719-1.35 2.209-.588 3.032-.05-.054-.632-.256-1.609.34-.762.465-.998 1.856-.572 2.645.425.79.487.913.487.913s-.657-.31-1.694.387c-.741.498-1.007 1.976-.541 2.738l2.496 4.209 3.435 5.613c2.02 2.863 6.326 3.851 9.455 1.95 2.134-1.296 3.581-4.034 3.378-6.574Z"
      />
      <path
        fill="url(#Clapping3D_svg__f)"
        d="m23.262 22.448-.154-9.39c-.1-.892-.588-2.089-2.259-2.089-1.95.093-2.026 2.088-2.026 2.088l-2.97-5.305c-.743-1.13-1.961-1.208-2.723-.743-.763.465-.929 1.408-.929 1.408l-.618-.805c-.466-.762-1.858-.85-2.568-.417-1.179.719-1.35 2.209-.588 3.032-.05-.054-.632-.256-1.609.34-.762.465-.998 1.856-.572 2.645.425.79.487.913.487.913s-.657-.31-1.694.387c-.741.498-1.007 1.976-.541 2.738l2.496 4.209 3.435 5.613c2.02 2.863 6.326 3.851 9.455 1.95 2.134-1.296 3.581-4.034 3.378-6.574Z"
      />
      <path
        fill="url(#Clapping3D_svg__g)"
        d="m23.262 22.448-.154-9.39c-.1-.892-.588-2.089-2.259-2.089-1.95.093-2.026 2.088-2.026 2.088l-2.97-5.305c-.743-1.13-1.961-1.208-2.723-.743-.763.465-.929 1.408-.929 1.408l-.618-.805c-.466-.762-1.858-.85-2.568-.417-1.179.719-1.35 2.209-.588 3.032-.05-.054-.632-.256-1.609.34-.762.465-.998 1.856-.572 2.645.425.79.487.913.487.913s-.657-.31-1.694.387c-.741.498-1.007 1.976-.541 2.738l2.496 4.209 3.435 5.613c2.02 2.863 6.326 3.851 9.455 1.95 2.134-1.296 3.581-4.034 3.378-6.574Z"
      />
      <path
        fill="url(#Clapping3D_svg__h)"
        d="m23.262 22.448-.154-9.39c-.1-.892-.588-2.089-2.259-2.089-1.95.093-2.026 2.088-2.026 2.088l-2.97-5.305c-.743-1.13-1.961-1.208-2.723-.743-.763.465-.929 1.408-.929 1.408l-.618-.805c-.466-.762-1.858-.85-2.568-.417-1.179.719-1.35 2.209-.588 3.032-.05-.054-.632-.256-1.609.34-.762.465-.998 1.856-.572 2.645.425.79.487.913.487.913s-.657-.31-1.694.387c-.741.498-1.007 1.976-.541 2.738l2.496 4.209 3.435 5.613c2.02 2.863 6.326 3.851 9.455 1.95 2.134-1.296 3.581-4.034 3.378-6.574Z"
      />
      <path
        fill="url(#Clapping3D_svg__i)"
        d="m23.262 22.448-.154-9.39c-.1-.892-.588-2.089-2.259-2.089-1.95.093-2.026 2.088-2.026 2.088l-2.97-5.305c-.743-1.13-1.961-1.208-2.723-.743-.763.465-.929 1.408-.929 1.408l-.618-.805c-.466-.762-1.858-.85-2.568-.417-1.179.719-1.35 2.209-.588 3.032-.05-.054-.632-.256-1.609.34-.762.465-.998 1.856-.572 2.645.425.79.487.913.487.913s-.657-.31-1.694.387c-.741.498-1.007 1.976-.541 2.738l2.496 4.209 3.435 5.613c2.02 2.863 6.326 3.851 9.455 1.95 2.134-1.296 3.581-4.034 3.378-6.574Z"
      />
      <path
        fill="url(#Clapping3D_svg__j)"
        d="m23.262 22.448-.154-9.39c-.1-.892-.588-2.089-2.259-2.089-1.95.093-2.026 2.088-2.026 2.088l-2.97-5.305c-.743-1.13-1.961-1.208-2.723-.743-.763.465-.929 1.408-.929 1.408l-.618-.805c-.466-.762-1.858-.85-2.568-.417-1.179.719-1.35 2.209-.588 3.032-.05-.054-.632-.256-1.609.34-.762.465-.998 1.856-.572 2.645.425.79.487.913.487.913s-.657-.31-1.694.387c-.741.498-1.007 1.976-.541 2.738l2.496 4.209 3.435 5.613c2.02 2.863 6.326 3.851 9.455 1.95 2.134-1.296 3.581-4.034 3.378-6.574Z"
      />
      <path
        fill="url(#Clapping3D_svg__k)"
        fillRule="evenodd"
        d="M6.69 14.109a2.99 2.99 0 0 0-.314-.052c.152.005.26.033.314.052Zm.04.008.094.024c.326.087.626.225.828.405.101.09.255.275.452.555.191.271.403.6.622.953.178.286.362.591.542.89.255.422.501.828.703 1.14a.5.5 0 0 0 .84-.543 44.087 44.087 0 0 1-.671-1.089c-.18-.299-.37-.613-.564-.925a21.092 21.092 0 0 0-.655-1.002c-.201-.286-.41-.554-.604-.727-.36-.32-.824-.514-1.235-.623a3.768 3.768 0 0 0-.914-.13c.023.058.049.114.078.167.37.687.465.87.483.905Z"
        clipRule="evenodd"
      />
      <path
        fill="url(#Clapping3D_svg__l)"
        fillRule="evenodd"
        d="M8.378 10.199a1.682 1.682 0 0 0-.226-.046c.103.008.18.027.226.046Zm.032.009c.28.082.615.252.992.588.029.025.096.1.203.251.1.142.22.324.352.54.266.43.575.97.89 1.534.167.296.336.6.5.898.454.818.879 1.585 1.14 1.987a.5.5 0 1 0 .839-.543c-.24-.372-.637-1.086-1.081-1.888l-.525-.943a45.61 45.61 0 0 0-.912-1.57c-.138-.225-.27-.428-.389-.594a2.586 2.586 0 0 0-.353-.42c-.795-.707-1.529-.903-2.096-.908.027.396.175.773.44 1.068Z"
        clipRule="evenodd"
      />
      <path
        fill="url(#Clapping3D_svg__m)"
        fillRule="evenodd"
        d="m12.202 8.416.091.148 1.263 2.028a425.774 425.774 0 0 0 2.333 3.719.5.5 0 0 0 .839-.544 428.29 428.29 0 0 1-2.324-3.703l-1.261-2.028-.4-.645-.023-.035a2.439 2.439 0 0 0-.518 1.06Z"
        clipRule="evenodd"
      />
      <g filter="url(#Clapping3D_svg__n)">
        <path
          fill="#F06B0C"
          fillRule="evenodd"
          d="m22.153 13.67.142 8.642c.187 2.338-1.145 4.858-3.109 6.051-.37.225-.759.406-1.158.545-2.154.022-4.303-.974-5.536-2.721l-2.439-3.324-1.588-2.755c-.432-.709-.185-2.083.504-2.546.963-.647 1.574-.359 1.574-.359s-.79-1.271-1.185-2.005c-.396-.733-.184-1.851.525-2.284.907-.554 1.649.098 1.695.149-.594-.805-.642-2.613.453-3.282.66-.403 1.855-.497 2.288.212l.575.748s.154-.877.863-1.31l.06-.034 2.392 4.274s.05-1.264 1.09-1.743l1.75 3.126s.047-1.23 1.044-1.734c.028.12.047.238.06.35Z"
          clipRule="evenodd"
        />
      </g>
      <path
        fill="#FFC03C"
        d="M28.953 22.372v-9.485c-.1-.9-.75-2.11-2.437-2.11-1.97.095-2.047 2.11-2.047 2.11l-3-5.36c-.75-1.14-1.98-1.22-2.75-.75S17.78 8.2 17.78 8.2l-.625-.813c-.47-.77-1.876-.86-2.593-.422-1.191.727-1.364 2.232-.594 3.063-.05-.055-.912-.164-1.625.344-.795.566-1.008 1.875-.578 2.671.43.797.492.922.492.922s-.664-.312-1.711.391c-.749.503-1.017 1.996-.547 2.766l2.521 4.25 3.47 5.67c2.04 2.892 6.39 3.89 9.55 1.97 2.155-1.308 3.617-4.075 3.412-6.64Z"
      />
      <path
        fill="url(#Clapping3D_svg__o)"
        d="M28.953 22.372v-9.485c-.1-.9-.75-2.11-2.437-2.11-1.97.095-2.047 2.11-2.047 2.11l-3-5.36c-.75-1.14-1.98-1.22-2.75-.75S17.78 8.2 17.78 8.2l-.625-.813c-.47-.77-1.876-.86-2.593-.422-1.191.727-1.364 2.232-.594 3.063-.05-.055-.912-.164-1.625.344-.795.566-1.008 1.875-.578 2.671.43.797.492.922.492.922s-.664-.312-1.711.391c-.749.503-1.017 1.996-.547 2.766l2.521 4.25 3.47 5.67c2.04 2.892 6.39 3.89 9.55 1.97 2.155-1.308 3.617-4.075 3.412-6.64Z"
      />
      <path
        fill="url(#Clapping3D_svg__p)"
        d="M28.953 22.372v-9.485c-.1-.9-.75-2.11-2.437-2.11-1.97.095-2.047 2.11-2.047 2.11l-3-5.36c-.75-1.14-1.98-1.22-2.75-.75S17.78 8.2 17.78 8.2l-.625-.813c-.47-.77-1.876-.86-2.593-.422-1.191.727-1.364 2.232-.594 3.063-.05-.055-.912-.164-1.625.344-.795.566-1.008 1.875-.578 2.671.43.797.492.922.492.922s-.664-.312-1.711.391c-.749.503-1.017 1.996-.547 2.766l2.521 4.25 3.47 5.67c2.04 2.892 6.39 3.89 9.55 1.97 2.155-1.308 3.617-4.075 3.412-6.64Z"
      />
      <path
        fill="url(#Clapping3D_svg__q)"
        d="M28.953 22.372v-9.485c-.1-.9-.75-2.11-2.437-2.11-1.97.095-2.047 2.11-2.047 2.11l-3-5.36c-.75-1.14-1.98-1.22-2.75-.75S17.78 8.2 17.78 8.2l-.625-.813c-.47-.77-1.876-.86-2.593-.422-1.191.727-1.364 2.232-.594 3.063-.05-.055-.912-.164-1.625.344-.795.566-1.008 1.875-.578 2.671.43.797.492.922.492.922s-.664-.312-1.711.391c-.749.503-1.017 1.996-.547 2.766l2.521 4.25 3.47 5.67c2.04 2.892 6.39 3.89 9.55 1.97 2.155-1.308 3.617-4.075 3.412-6.64Z"
      />
      <path
        fill="url(#Clapping3D_svg__r)"
        d="M26.516 10.778c-1.97.094-2.047 2.11-2.047 2.11l1.875 3.08s-.985-2.796.172-5.19Z"
      />
      <g filter="url(#Clapping3D_svg__s)">
        <path
          fill="url(#Clapping3D_svg__t)"
          d="m28.688 22.75-.563-8.953c-.09-.81-.356-2.61-1.875-2.61l-.313 5.157-2.406-3.782-2.437-4.312c-.44-.668-.735-.766-1.078-.844-.344-.078-1.36-.078-1.141.297.219.375 2.75 4.156 3.672 5.734.343.589-1.049 1.594-1.578.844-.53-.75-4.25-6.281-4.25-6.281-.423-.693-1.907-.962-1.907-.297 0 .675 3.562 5.064 4.36 7.234.318.865-.865 1.436-1.297.766-.432-.67-2.25-3.672-3.156-4.89-.313-.421-1.224-.896-1.531-.516-.597.739.097 1.845.484 2.562.2.37 2.469 3.784 3.36 5.313.432.743-1.11 1.437-1.516.922-.407-.516-1.489-2.843-2.516-4.157-.506-.647-1.533-.615-1.844-.406-.674.453-.098 1.638.325 2.33 1.986 3.648 8.206 15.22 13.894 11.764 1.94-1.178 3.497-3.566 3.313-5.875Z"
        />
      </g>
      <path
        fill="#1A80EA"
        d="m4.692 6.44-1.86-.78a.443.443 0 0 1-.15-.72l.97-1.03a.45.45 0 0 1 .73.11l.89 1.81c.17.37-.2.77-.58.61Z"
      />
      <path
        fill="url(#Clapping3D_svg__u)"
        d="m4.692 6.44-1.86-.78a.443.443 0 0 1-.15-.72l.97-1.03a.45.45 0 0 1 .73.11l.89 1.81c.17.37-.2.77-.58.61Z"
      />
      <path
        fill="url(#Clapping3D_svg__v)"
        d="m4.692 6.44-1.86-.78a.443.443 0 0 1-.15-.72l.97-1.03a.45.45 0 0 1 .73.11l.89 1.81c.17.37-.2.77-.58.61Z"
      />
      <path
        fill="url(#Clapping3D_svg__w)"
        d="m4.692 6.44-1.86-.78a.443.443 0 0 1-.15-.72l.97-1.03a.45.45 0 0 1 .73.11l.89 1.81c.17.37-.2.77-.58.61Z"
      />
      <path
        fill="#1A80EA"
        d="m7.052 4.817-1.22-1.651a.468.468 0 0 1 .23-.723l1.36-.423c.3-.093.6.155.58.475l-.14 2.074c-.04.424-.56.589-.81.248Z"
      />
      <path
        fill="url(#Clapping3D_svg__x)"
        d="m7.052 4.817-1.22-1.651a.468.468 0 0 1 .23-.723l1.36-.423c.3-.093.6.155.58.475l-.14 2.074c-.04.424-.56.589-.81.248Z"
      />
      <path
        fill="url(#Clapping3D_svg__y)"
        d="m7.052 4.817-1.22-1.651a.468.468 0 0 1 .23-.723l1.36-.423c.3-.093.6.155.58.475l-.14 2.074c-.04.424-.56.589-.81.248Z"
      />
      <path
        fill="url(#Clapping3D_svg__z)"
        d="m7.052 4.817-1.22-1.651a.468.468 0 0 1 .23-.723l1.36-.423c.3-.093.6.155.58.475l-.14 2.074c-.04.424-.56.589-.81.248Z"
      />
      <path
        fill="#1A80EA"
        d="m3.591 9.09-2.071.269a.463.463 0 0 1-.508-.57l.342-1.433a.472.472 0 0 1 .715-.28l1.73 1.162c.352.25.217.8-.208.851Z"
      />
      <path
        fill="url(#Clapping3D_svg__A)"
        d="m3.591 9.09-2.071.269a.463.463 0 0 1-.508-.57l.342-1.433a.472.472 0 0 1 .715-.28l1.73 1.162c.352.25.217.8-.208.851Z"
      />
      <path
        fill="url(#Clapping3D_svg__B)"
        d="m3.591 9.09-2.071.269a.463.463 0 0 1-.508-.57l.342-1.433a.472.472 0 0 1 .715-.28l1.73 1.162c.352.25.217.8-.208.851Z"
      />
      <path
        fill="url(#Clapping3D_svg__C)"
        d="m3.591 9.09-2.071.269a.463.463 0 0 1-.508-.57l.342-1.433a.472.472 0 0 1 .715-.28l1.73 1.162c.352.25.217.8-.208.851Z"
      />
      <path
        fill="url(#Clapping3D_svg__D)"
        d="M12.374 13.986a3.3 3.3 0 0 0-.131-.05c-.037-.07-.151-.288-.477-.893a1.57 1.57 0 0 1-.102-.234c.333-.004.733.107 1.087.25a4.2 4.2 0 0 1 1.175.708c.202.18.415.472.615.777.208.318.431.697.653 1.084.135.235.269.472.399.702.306.544.592 1.051.827 1.414a.5.5 0 0 1-.84.543c-.252-.39-.563-.942-.877-1.5l-.376-.662c-.22-.383-.432-.741-.623-1.033-.2-.305-.35-.495-.442-.578a3.21 3.21 0 0 0-.888-.528Z"
      />
      <path
        fill="url(#Clapping3D_svg__E)"
        d="M13.889 9.99a1.86 1.86 0 0 0-.397-.035c.184-.014.318.009.397.034Z"
      />
      <path
        fill="url(#Clapping3D_svg__F)"
        d="M15.176 10.646A2.726 2.726 0 0 0 13.944 10a1.788 1.788 0 0 1-.435-1.046c.598-.006 1.496.203 2.331.945.206.183.467.549.725.94.272.414.583.922.894 1.44.232.387.462.778.677 1.143.37.627.695 1.18.909 1.51a.5.5 0 1 1-.84.543c-.224-.347-.57-.933-.95-1.577-.212-.361-.435-.74-.654-1.105a40.443 40.443 0 0 0-.871-1.403c-.274-.416-.465-.664-.554-.744Z"
      />
      <path
        fill="url(#Clapping3D_svg__G)"
        d="m17.784 8.183.014.021 1.262 2.03a423.792 423.792 0 0 0 2.333 3.717.5.5 0 1 0 .84-.543c-.342-.527-1.374-2.178-2.324-3.704-.475-.761-.928-1.49-1.262-2.028l-.34-.548c-.38.434-.502.957-.523 1.055Z"
      />
      <g filter="url(#Clapping3D_svg__H)">
        <path
          stroke="#FFE240"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.563 10.906c.427.031.784.097 1.284.872s2.104 3.406 2.938 4.719"
        />
      </g>
      <g filter="url(#Clapping3D_svg__I)">
        <path
          stroke="#FFE240"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.906 14.75c.427.031.785.097 1.285.872.5.775 1.413 2.566 2.246 3.878"
        />
      </g>
      <g filter="url(#Clapping3D_svg__J)">
        <path
          stroke="url(#Clapping3D_svg__K)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 12.531c.427.031.91.209 1.41.984.5.775 1.57 2.954 2.402 4.266"
        />
      </g>
      <g filter="url(#Clapping3D_svg__L)">
        <path
          stroke="url(#Clapping3D_svg__M)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14.75 8.813c.427.03 1.441.35 1.941 1.124.5.775 1.913 3.5 2.747 4.813"
        />
      </g>
      <g filter="url(#Clapping3D_svg__N)">
        <path
          stroke="#FFE240"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.778 7.783c.427.031.784.097 1.284.872s3.26 4.939 4.094 6.251"
        />
      </g>
      <g filter="url(#Clapping3D_svg__O)">
        <path
          stroke="#FFE240"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.523 7.55c.427.032.784.097 1.284.872s3.292 5.969 4.125 7.281"
        />
      </g>
      <g filter="url(#Clapping3D_svg__P)">
        <path
          stroke="#FFE240"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M27.346 11.842c.355.24.632.475.68 1.396.046.921-.124 6.815-.056 8.368"
        />
      </g>
    </g>
    <defs>
      <radialGradient
        id="Clapping3D_svg__c"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(58.443 -6.718 14.87) scale(4.65751 1.86185)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFAF33" />
        <stop offset={1} stopColor="#FA8221" />
      </radialGradient>
      <radialGradient
        id="Clapping3D_svg__d"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(-.0625 1.71875 -1.70978 -.06217 8.344 11.313)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFAE28" />
        <stop offset={1} stopColor="#FFAF31" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="Clapping3D_svg__e"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(2.625 4.09375 -1.17266 .75193 7.125 16.219)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FE9E29" />
        <stop offset={1} stopColor="#FE9E28" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="Clapping3D_svg__f"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(.90625 1.8125 -1.48179 .7409 6.813 15.688)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF9D25" />
        <stop offset={1} stopColor="#FF9F24" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="Clapping3D_svg__g"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(2.3125 3.75 -1.62067 .99942 10.781 8.781)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFC133" />
        <stop offset={1} stopColor="#FFC93C" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="Clapping3D_svg__h"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(1.15625 1.5 -1.1463 .8836 10.594 7.969)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFC53A" />
        <stop offset={1} stopColor="#FFC83C" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="Clapping3D_svg__i"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(-.41367 37.125 -32.1051 -.35774 14.188 11.125)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.37} stopColor="#FF6C5E" stopOpacity={0} />
        <stop offset={0.54} stopColor="#FF6B5E" />
      </radialGradient>
      <radialGradient
        id="Clapping3D_svg__j"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(59.816 .826 15.829) scale(3.54285 3.89595)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFAC31" />
        <stop offset={1} stopColor="#FFA92E" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="Clapping3D_svg__k"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(-35.096 30.527 -4.75) scale(1.41318 4.33549)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DB5703" />
        <stop offset={0.595} stopColor="#C94A04" />
        <stop offset={1} stopColor="#D65A05" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="Clapping3D_svg__l"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(1.5625 -1.4375 4.61331 5.01446 9.656 13.656)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DB5703" />
        <stop offset={0.595} stopColor="#C94A04" />
        <stop offset={1} stopColor="#D65A05" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="Clapping3D_svg__m"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(1 -.90625 2.97537 3.28317 13 11.469)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DB5703" />
        <stop offset={0.595} stopColor="#C94A04" />
        <stop offset={1} stopColor="#D65A05" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="Clapping3D_svg__o"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(73.365 -2.727 24.536) scale(10.6977 7.10071)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFD945" />
        <stop offset={0.633} stopColor="#FFD343" />
        <stop offset={1} stopColor="#FFD543" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="Clapping3D_svg__p"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(98.436 7.666 20.402) scale(14.7218 3.88781)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFE044" />
        <stop offset={1} stopColor="#FFE143" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="Clapping3D_svg__q"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(-124.618 18.569 11.459) scale(23.5432 18.5289)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FA825D" />
        <stop offset={0.883} stopColor="#F67B7D" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="Clapping3D_svg__t"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(134.506 7.497 15.158) scale(10.2534 26.8268)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFDB45" />
        <stop offset={0.484} stopColor="#FFD646" />
        <stop offset={0.915} stopColor="#FFDA45" stopOpacity={0} />
        <stop offset={0.97} stopColor="#FFDA45" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="Clapping3D_svg__D"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(57.126 -7.557 20.374) scale(5.23917 .98144)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B64200" />
        <stop offset={1} stopColor="#FFB02E" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="Clapping3D_svg__E"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(57.521 -3.325 20.57) scale(6.16885 1.1483)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B64200" />
        <stop offset={1} stopColor="#FFB02E" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="Clapping3D_svg__F"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(57.521 -3.325 20.57) scale(6.16885 1.1483)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B64200" />
        <stop offset={1} stopColor="#FFB02E" stopOpacity={0} />
      </radialGradient>
      <linearGradient
        id="Clapping3D_svg__b"
        x1={20.313}
        x2={12.625}
        y1={29.375}
        y2={15.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF6C4C" />
        <stop offset={1} stopColor="#FF6D47" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="Clapping3D_svg__r"
        x1={24.625}
        x2={26.672}
        y1={13.373}
        y2={13.234}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D48820" />
        <stop offset={0.345} stopColor="#E39C2A" stopOpacity={0.649} />
        <stop offset={0.735} stopColor="#FFC03C" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="Clapping3D_svg__u"
        x1={2.891}
        x2={3.443}
        y1={4.547}
        y2={5.065}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2065A3" />
        <stop offset={1} stopColor="#2067AE" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="Clapping3D_svg__v"
        x1={3.602}
        x2={3.91}
        y1={6.586}
        y2={5.872}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.605} stopColor="#1C60FF" />
        <stop offset={1} stopColor="#1963FF" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="Clapping3D_svg__w"
        x1={4.766}
        x2={4.362}
        y1={4.578}
        y2={4.791}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2093F1" />
        <stop offset={1} stopColor="#2294F3" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="Clapping3D_svg__x"
        x1={6.672}
        x2={6.934}
        y1={1.891}
        y2={2.755}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2065A3" />
        <stop offset={1} stopColor="#2067AE" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="Clapping3D_svg__y"
        x1={6.375}
        x2={6.919}
        y1={4.586}
        y2={4.188}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.605} stopColor="#1C60FF" />
        <stop offset={1} stopColor="#1963FF" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="Clapping3D_svg__z"
        x1={7.938}
        x2={7.663}
        y1={3.047}
        y2={3.033}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2093F1" />
        <stop offset={1} stopColor="#2294F3" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="Clapping3D_svg__A"
        x1={1}
        x2={1.672}
        y1={8.181}
        y2={8.344}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2065A3" />
        <stop offset={1} stopColor="#2067AE" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="Clapping3D_svg__B"
        x1={2.5}
        x2={2.438}
        y1={9.734}
        y2={8.938}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.605} stopColor="#1C60FF" />
        <stop offset={1} stopColor="#1963FF" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="Clapping3D_svg__C"
        x1={2.91}
        x2={2.621}
        y1={7.496}
        y2={7.918}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2093F1" />
        <stop offset={1} stopColor="#2294F3" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="Clapping3D_svg__G"
        x1={19.188}
        x2={20.049}
        y1={10.438}
        y2={9.938}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E49224" />
        <stop offset={0.589} stopColor="#FFB02E" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="Clapping3D_svg__K"
        x1={13.406}
        x2={15.313}
        y1={14.688}
        y2={13.594}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FDB137" />
        <stop offset={0.447} stopColor="#FFBA3C" stopOpacity={0} />
        <stop offset={1} stopColor="#FCAD33" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="Clapping3D_svg__M"
        x1={15.688}
        x2={17.594}
        y1={11.11}
        y2={10.017}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FDB137" />
        <stop offset={0.447} stopColor="#FFBA3C" stopOpacity={0} />
        <stop offset={1} stopColor="#FCAD33" stopOpacity={0} />
      </linearGradient>
      <filter
        id="Clapping3D_svg__n"
        width={19.062}
        height={24.512}
        x={5.75}
        y={6.897}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_45_9816"
          stdDeviation={1.25}
        />
      </filter>
      <filter
        id="Clapping3D_svg__s"
        width={19.856}
        height={23.941}
        x={9.847}
        y={6.321}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_45_9816"
          stdDeviation={0.5}
        />
      </filter>
      <filter
        id="Clapping3D_svg__H"
        width={7.222}
        height={8.59}
        x={12.063}
        y={9.406}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_45_9816"
          stdDeviation={0.5}
        />
      </filter>
      <filter
        id="Clapping3D_svg__I"
        width={6.531}
        height={7.75}
        x={10.406}
        y={13.25}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_45_9816"
          stdDeviation={0.5}
        />
      </filter>
      <filter
        id="Clapping3D_svg__J"
        width={6.813}
        height={8.25}
        x={11.5}
        y={11.031}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_45_9816"
          stdDeviation={0.25}
        />
      </filter>
      <filter
        id="Clapping3D_svg__L"
        width={7.688}
        height={8.938}
        x={13.25}
        y={7.312}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_45_9816"
          stdDeviation={0.25}
        />
      </filter>
      <filter
        id="Clapping3D_svg__N"
        width={8.378}
        height={10.123}
        x={14.278}
        y={6.283}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_45_9816"
          stdDeviation={0.5}
        />
      </filter>
      <filter
        id="Clapping3D_svg__O"
        width={8.41}
        height={11.153}
        x={18.023}
        y={6.05}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_45_9816"
          stdDeviation={0.5}
        />
      </filter>
      <filter
        id="Clapping3D_svg__P"
        width={3.687}
        height={12.764}
        x={25.846}
        y={10.342}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_45_9816"
          stdDeviation={0.5}
        />
      </filter>
      <clipPath id="Clapping3D_svg__a">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgClapping3D;
