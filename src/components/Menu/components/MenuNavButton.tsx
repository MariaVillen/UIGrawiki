import { ToggleButton } from "@ui/forms";
import { TToggleButtonProps } from "@ui/forms/Buttons/ToggleButton/ToggleButton";
import { CloseTag, Menu } from "@ui/icons";
import { ButtonHTMLAttributes } from "react";

export type TMenuNavButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  TToggleButtonProps;

const MenuNavButton = ({
  iconTrue = CloseTag,
  iconFalse = Menu,
  isActive,
  ...rest
}: TMenuNavButtonProps) => {
  return (
    <ToggleButton
      iconTrue={iconTrue}
      iconFalse={iconFalse}
      isActive={isActive}
      className="gwk-w-[50px] gwk-h-[50px]"
      {...rest}
    />
  );
};

export default MenuNavButton;
