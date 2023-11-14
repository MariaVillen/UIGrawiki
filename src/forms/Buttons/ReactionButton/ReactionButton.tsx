import { ButtonHTMLAttributes, ComponentType } from "react";
import ToggleButton from "../ToggleButton/ToggleButton";

export type ReactionButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  /* Not Selected Icon */
  icon: ComponentType;
  /* Icon when the reaction is active*/
  iconSelected?: ComponentType | undefined;
  /* To change to isSelected or not*/
  isSelected: boolean;
};

const ReactionButton = ({
  icon,
  iconSelected,
  isSelected = false,
  ...rest
}: ReactionButtonProps) => {
  return (
    <ToggleButton
      isActive={isSelected}
      iconTrue={iconSelected}
      iconFalse={icon}
      className=" gwk-flex gwk-justify-center gwk-items-center gwk-bg-transparent gwk-w-20 gwk-h-10 gwk-rounded-rdlg hover:gwk-bg-surface-triarty-hover"
      iconStyles=" gwk-w-6 gwk-h-6"
      {...rest}
    />
  );
};

export default ReactionButton;
