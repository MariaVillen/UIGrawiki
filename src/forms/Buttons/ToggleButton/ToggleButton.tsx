import { HTMLAttributes, ReactNode } from "react";
import { ArrowDown, ArrowTop } from "@ui/icons";

export type toggleButtonProps = HTMLAttributes<HTMLButtonElement> & {
  iconTrue?: ReactNode;
  iconFalse?: ReactNode;
  isActive?: boolean;
  className?: string;
};

const ToggleButton = ({
  iconTrue: IconTrue = <ArrowTop />,
  iconFalse: IconFalse = <ArrowDown />,
  isActive = false,
  className,
  ...rest
}: toggleButtonProps) => {
  return (
    <button type="button" {...rest} className={className}>
      {isActive ? IconTrue : IconFalse}
    </button>
  );
};

export default ToggleButton;
