import { ToggleButton } from "@ui/forms";
import { TToggleButtonProps } from "@ui/forms/Buttons/ToggleButton/ToggleButton";
import { CloseTag, MenuHamburguer } from "@ui/icons";
import { cn } from "@ui/utils";
import { ButtonHTMLAttributes } from "react";

export type TMenuNavButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  TToggleButtonProps;

const MenuNavButton = ({
  iconTrue = CloseTag,
  iconFalse = MenuHamburguer,
  isActive,
  className,
  ...rest
}: TMenuNavButtonProps) => {
  return (
    <ToggleButton
      iconTrue={iconTrue}
      iconFalse={iconFalse}
      isActive={isActive}
      {...rest}
      className={cn("gwk-w-[50px] gwk-h-[50px]", className)}
    />
  );
};

export default MenuNavButton;
