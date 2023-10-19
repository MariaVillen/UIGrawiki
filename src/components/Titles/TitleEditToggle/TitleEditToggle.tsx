import { ButtonHTMLAttributes } from "react";
import { TitleEdit } from "@ui/components";
import { ToggleButton } from "@ui/forms";
import { TTitleEditProps } from "../TitleEdit/TitleEdit";

export type TTitleEditToggleProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOpen: boolean;
} & TTitleEditProps;

const TitleEditToggle = ({
  isOpen = false,
  label,
  variant,
  rounded,
  onClick,
  className,
}: TTitleEditToggleProps) => {
  return (
    <div className={className}>
      <TitleEdit label={label} variant={variant} rounded={rounded}>
        <ToggleButton
          className="gwk-h-6 gwk-w-6"
          isActive={isOpen}
          onClick={onClick}
        />
      </TitleEdit>
    </div>
  );
};

export default TitleEditToggle;
