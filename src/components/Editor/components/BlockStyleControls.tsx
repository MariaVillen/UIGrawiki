import { EditorState } from "draft-js";
import StyleButton from "./StyleButton";
import { OrderedList, UnorderedList } from "@ui/icons";
import { ComponentType, ReactElement } from "react";

type TBlockType = {
  label: string;
  style: string;
  icon?: ComponentType | ReactElement | string;
};

const BLOCK_TYPES: TBlockType[] = [
  //   { label: "H1", style: "header-one" },
  //   { label: "H2", style: "header-two" },
  //   { label: "H3", style: "header-three" },
  //   { label: "H4", style: "header-four" },
  //   { label: "H5", style: "header-five" },
  //   { label: "H6", style: "header-six" },
  //   { label: "Blockquote", style: "blockquote" },
  { label: "UL", style: "unordered-list-item", icon: UnorderedList },
  { label: "OL", style: "ordered-list-item", icon: OrderedList },
  //   { label: "Code Block", style: "code-block" },
];

const BlockStyleControls = ({
  editorState,
  onToggle,
}: {
  editorState: EditorState;
  onToggle: (style: string) => void;
}) => {
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <div className="RichEditor-controls">
      {BLOCK_TYPES.map(({ label, style, icon }: TBlockType) => (
        <StyleButton
          key={label}
          active={style === blockType}
          label={label}
          icon={icon}
          onToggle={onToggle}
          style={style}
        />
      ))}
    </div>
  );
};

export default BlockStyleControls;
