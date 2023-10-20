import { ComponentType, HTMLAttributes, ReactElement } from "react";
import {
  ArrowDown,
  ArrowTop,
  NotificationActiveFill,
  NotificationOutline,
} from "@ui/icons";
import { Icon } from "@ui/general";
import { partiallyApply } from "@ui/utils";

export type TToggleButtonProps = HTMLAttributes<HTMLButtonElement> & {
  iconTrue?: ReactElement | ComponentType | string;
  iconFalse?: ReactElement | ComponentType | string;
  isActive?: boolean;
};

const ToggleButton = ({
  iconTrue: IconTrue = <ArrowTop />,
  iconFalse: IconFalse = <ArrowDown />,
  isActive = false,
  className,
  ...rest
}: TToggleButtonProps) => {
  return (
    <button type="button" {...rest} className={className}>
      <Icon elementSrc={isActive ? IconTrue : IconFalse} fluid />
    </button>
  );
};

export default ToggleButton;

export const ToggleNotification = partiallyApply(ToggleButton, {
  iconFalse: NotificationOutline,
  iconTrue: NotificationActiveFill,
});
