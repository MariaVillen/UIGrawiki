import { HTMLAttributes } from "react";
import { Link } from "react-router-dom";
import {
  BaseLogo,
  VerticalLogo,
  HorizontalLogo,
  MenuLogo,
  HorizontalLogoWhite,
  VerticalLogoWhite,
  MenuLogoWhite,
} from "@ui/assets";
import { cn } from "@ui/utils";

export type LogoProps = HTMLAttributes<HTMLLinkElement> & {
  type: "horizontal" | "vertical" | "menu" | "base";
  theme: "dark" | "light";
};

const chosenLogo = {
  light: {
    base: BaseLogo,
    horizontal: HorizontalLogo,
    vertical: VerticalLogo,
    menu: MenuLogo,
  },
  dark: {
    base: BaseLogo,
    horizontal: HorizontalLogoWhite,
    vertical: VerticalLogoWhite,
    menu: MenuLogoWhite,
  },
};

const Logo = ({ type, className, theme = "light" }: LogoProps) => {
  return (
    <Link
      to="/"
      className={cn("gwk-inline-block", className)}
      aria-label="Ir a la página principal de grawiki"
    >
      <img
        className="gwk-h-full gwk-w-full gwk-object-fill gwk-object-center gwk-max-w-[500px]"
        src={chosenLogo[theme][type]}
        alt="Logo Grawiki"
      />
    </Link>
  );
};

export default Logo;
