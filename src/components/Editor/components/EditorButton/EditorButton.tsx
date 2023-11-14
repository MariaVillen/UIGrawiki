import { Icon } from "@ui/general";
import { cn } from "@ui/utils";
import { ComponentType, ReactElement } from "react";

export type TEditorButtonProps = {
  style: string;
  active: boolean;
  label: string;
  icon: ComponentType | ReactElement | string;
  onToggle: (style: string) => void;
};
function EditorButton({
  style,
  active,
  label,
  icon,
  onToggle,
}: TEditorButtonProps) {
  const _onToggle = () => {
    onToggle(style);
  };
  return (
    <button
      className={cn(
        "gwk-w-8 gwk-h-8 gwk-align-middle gwk-text-center gwk-rounded-rdsm  gwk-leading-8 gwk-mx-1 gwk-mt-1 hover:gwk-bg-surface-black-50",
        active && "gwk-bg-surface-black-30",
      )}
      onClick={_onToggle}
    >
      {icon ? <Icon elementSrc={icon} alt={label} /> : label}
    </button>
  );
}
export default EditorButton;
