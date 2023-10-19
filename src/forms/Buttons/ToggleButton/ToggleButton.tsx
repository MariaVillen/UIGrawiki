import { HTMLAttributes, ReactElement } from "react";
import { ArrowDown, ArrowTop } from "@ui/icons";
import { Icon } from "@ui/general";

export type toggleButtonProps = HTMLAttributes<HTMLButtonElement> & {
  iconTrue?: ReactElement | string;
  iconFalse?: ReactElement | string;
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
      <Icon
        elementSrc={isActive ? IconTrue : IconFalse}
        className="gwk-w-4 gwk-h-4"
      />
    </button>
  );
};

export default ToggleButton;
