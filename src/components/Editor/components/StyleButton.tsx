import { Icon } from "@ui/general";
import { cn } from "@ui/utils";
import { ComponentType, ReactElement } from "react";

export type TStyleButtonProps = {
  onToggle: (style: string) => void;
  style: string;
  label: string;
  icon?: ComponentType | ReactElement | string | undefined;
  active: boolean;
};

const StyleButton = ({
  onToggle,
  style,
  label,
  icon,
  active,
}: TStyleButtonProps) => {
  const _onToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onToggle(style);
  };
  return (
    <button
      className={cn(
        "gwk-w-8 gwk-h-8 gwk-leading-8 gwk-align-middle gwk-text-center gwk-rounded-rdsm gwk-mx-1 gwk-mt-1 hover:gwk-bg-surface-black-50",
        active && "gwk-bg-surface-black-30",
      )}
      onMouseDown={_onToggle}
    >
      {icon ? <Icon elementSrc={icon} alt={label} /> : label}
    </button>
  );
};

export default StyleButton;
