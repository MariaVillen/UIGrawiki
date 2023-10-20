import { ToggleButton } from "@ui/forms";
import { TToggleButtonProps } from "@ui/forms/Buttons/ToggleButton/ToggleButton";
import { CloseTag, Menu } from "@ui/icons";
import { ButtonHTMLAttributes } from "react";

export type TMenuNavButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  TToggleButtonProps;

const MenuNavButton = ({
  iconTrue = CloseTag,
  children,
  iconFalse = Menu,
  isActive,
  onClick,
}: TMenuNavButtonProps) => {
  return (
    <div>
      <ToggleButton
        iconTrue={iconTrue}
        iconFalse={iconFalse}
        isActive={isActive}
        onClick={onClick}
        className="gwk-w-[50px] gwk-h-[50px]"
      />
      {isActive && <div>{children}</div>}
    </div>
  );
};

export default MenuNavButton;
