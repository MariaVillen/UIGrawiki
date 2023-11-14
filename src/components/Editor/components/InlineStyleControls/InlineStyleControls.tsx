import { EditorState } from "draft-js";
import EditorButton from "../EditorButton/EditorButton";
import { TInlineStyle } from "../../helpers/configEditorMenu";

export type TInlineStyleControlsProps = {
  editorState: EditorState;
  className?: string;
  data: TInlineStyle[];
  onToggle: (style: string) => void;
};

const InlineStyleControls = ({
  editorState,
  className,
  data,
  onToggle,
}: TInlineStyleControlsProps) => {
  const currentStyle = editorState.getCurrentInlineStyle();

  return (
    <div className={className}>
      {data.map((type) => (
        <EditorButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          icon={type.icon}
          onToggle={onToggle}
          style={type.style}
        />
      ))}
    </div>
  );
};

export default InlineStyleControls;
