import classes from "./editorButton.module.sass";
import { ComponentType, ReactElement } from "react";

export type TEditorButtonProps = {
  style: string;
  active: boolean;
  label: string;
  icon: ComponentType | ReactElement | string;
  onToggle: (val: string) => void;
};

function EditorButton({
  style,
  active,
  label,
  icon,
  onToggle,
}: TEditorButtonProps) {
  const _onToggle = (e) => {
    e.preventDefault();
    onToggle(e, style);
  };
  return (
    <span
      className={`${classes.editor_styleButton} ${
        active ? classes.editor_activeButton : null
      }`}
      onMouseDown={_onToggle}
    >
      {icon ? <img src={icon} alt={label} /> : label}
    </span>
  );
}
export default EditorButton;
