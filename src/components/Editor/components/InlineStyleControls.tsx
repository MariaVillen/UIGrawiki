import { EditorState } from "draft-js";
import { ComponentType, ReactElement } from "react";
import StyleButton from "./StyleButton";
import {
  Bold,
  Italic,
  Strike,
  Subscript,
  Superscript,
  Underline,
} from "@ui/icons";

/** InlineStyles */
type TInlineStyles = {
  label: string;
  style: string;
  icon?: ComponentType | ReactElement | string;
};
const INLINE_STYLES: TInlineStyles[] = [
  { label: "Bold", style: "BOLD", icon: Bold },
  { label: "Italic", style: "ITALIC", icon: Italic },
  { label: "Underline", style: "UNDERLINE", icon: Underline },
  { label: "Strikethrough", style: "STRIKETHROUGH", icon: Strike },
  { label: "Subscript", style: "SUBSCRIPT", icon: Subscript },
  { label: "Superscript", style: "SUPERSCRIPT", icon: Superscript },
  //{ label: "Monospace", style: "CODE" },
];

export type TInlineStyleControlsProps = {
  editorState: EditorState;
  onToggle: (style: string) => void;
};
const InlineStyleControls = ({
  editorState,
  onToggle,
}: TInlineStyleControlsProps) => {
  const currentStyle = editorState.getCurrentInlineStyle();

  return (
    <div className="RichEditor-controls">
      {INLINE_STYLES.map(({ label, style, icon }) => (
        <StyleButton
          key={label}
          active={currentStyle.has(style)}
          label={label}
          icon={icon}
          onToggle={onToggle}
          style={style}
        />
      ))}
    </div>
  );
};

export default InlineStyleControls;
