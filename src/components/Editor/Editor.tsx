import { Editor, RawDraftContentState } from "draft-js";
import InlineStyleControls from "./components/InlineStyleControls/InlineStyleControls";
import { INLINE_STYLES } from "./helpers/configEditorMenu";
import useEditor from "./hooks/useEditor";

export type TGwkEditorProps = {
  value: RawDraftContentState | string | null;
  type?: string;
};

const GwkEditor = ({ value = null, type = "html" }: TGwkEditorProps) => {
  const { editorState, editRef, toggleInlineStyle, changeHandler } = useEditor({
    value,
    type,
  });

  return (
    <div>
      <div>
        <InlineStyleControls
          editorState={editorState}
          onToggle={toggleInlineStyle}
          data={INLINE_STYLES}
        />
      </div>
      <Editor
        ref={editRef}
        editorState={editorState}
        onChange={changeHandler}
      />
    </div>
  );
};

export default GwkEditor;
