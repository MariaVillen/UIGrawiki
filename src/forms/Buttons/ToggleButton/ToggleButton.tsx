import { ComponentType, HTMLAttributes, ReactElement } from "react";
import {
  ArrowDown,
  ArrowTop,
  NotificationActiveFill,
  NotificationOutline,
} from "@ui/icons";
import { Icon } from "@ui/general";
import { cn, partiallyApply } from "@ui/utils";

export type TToggleButtonProps = HTMLAttributes<HTMLButtonElement> & {
  iconTrue?: ReactElement | ComponentType | string;
  iconFalse?: ReactElement | ComponentType | string;
  isActive?: boolean;
  iconStyles?: string;
};

const ToggleButton = ({
  iconTrue: IconTrue = ArrowTop,
  iconFalse: IconFalse = ArrowDown,
  isActive = false,
  iconStyles,
  className,
  ...rest
}: TToggleButtonProps) => {
  return (
    <button type="button" {...rest} className={cn("gwk-w-6", className)}>
      <Icon
        elementSrc={isActive ? IconTrue : IconFalse}
        className={iconStyles}
        fluid
      />
    </button>
  );
};

export default ToggleButton;

export const ToggleNotification = partiallyApply(ToggleButton, {
  iconFalse: NotificationOutline,
  iconTrue: NotificationActiveFill,
});
