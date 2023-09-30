import { HTMLAttributes, ReactNode } from "react";
import { ArrowDown, ArrowTop } from "../../icons";

export type toggleButtonProps = HTMLAttributes<HTMLButtonElement> & {
  iconTrue?: ReactNode;
  iconFalse?: ReactNode;
  isOpen?: boolean;
};

const ToggleButton = ({
  iconTrue: IconTrue = <ArrowTop />,
  iconFalse: IconFalse = <ArrowDown />,
  isOpen = false,
  ...rest
}: toggleButtonProps) => {
  return (
    <button type="button" {...rest}>
      {isOpen ? IconTrue : IconFalse}
    </button>
  );
};

export default ToggleButton;
