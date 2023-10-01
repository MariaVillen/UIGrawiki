import { HTMLAttributes } from "react";
import { Link } from "react-router-dom";
import {
  BaseLogo,
  VerticalLogo,
  HorizontalLogo,
  MenuLogo,
} from "../../assets/logos";

export type LogoProps = HTMLAttributes<HTMLLinkElement> & {
  type: "horizontal" | "vertical" | "menu" | "base";
};

const chosenLogo = {
  base: BaseLogo,
  horizontal: HorizontalLogo,
  vertical: VerticalLogo,
  menu: MenuLogo,
};

const Logo = ({ type }: LogoProps) => {
  return (
    <Link
      to="/"
      className=" gwk-inline-block gwk-w-full gwk-h-full"
      aria-label="Ir a la página principal de grawiki"
    >
      <img
        className="gwk-h-full gwk-w-full gwk-object-fill gwk-object-center gwk-max-w-[500px]"
        src={chosenLogo[type]}
        alt="Logo Grawiki"
      />
    </Link>
  );
};

export default Logo;
