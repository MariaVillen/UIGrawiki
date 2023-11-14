import {
  ContentBlock,
  Editor,
  EditorState,
  RichUtils,
  getDefaultKeyBinding,
} from "draft-js";
import { useRef, useState } from "react";
import BlockStyleControls from "./components/BlockStyleControls";
import InlineStyleControls from "./components/InlineStyleControls";

const STYLEMAP = {
  SUBSCRIPT: {
    verticalAlign: "sub",
    fontSize: "smaller",
  },
  SUPERSCRIPT: {
    verticalAlign: "super",
    fontSize: "smaller",
  },
};

const RichEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  );

  const editRef = useRef<Editor>(null);

  //const focus = () => editRef.current!.focus();

  const onChange = (editorState: EditorState) => {
    setEditorState(editorState);
  };

  const handleKeyCommand = (
    command: string,
    editorState: EditorState,
  ): "handled" | "not-handled" => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      onChange(newState);
      return "handled";
    }
    return "not-handled";
  };

  const getBlockStyle = (block: ContentBlock): string => {
    switch (block.getType()) {
      case "blockquote":
        return "RichEditor-blockquote";
      default:
        return "";
    }
  };

  const mapKeyToEditorCommand = (e: React.KeyboardEvent): string | null => {
    if (e.key === "Tab") {
      const newEditorState = RichUtils.onTab(
        e,
        editorState,
        4 /* maxDepth */,
      ) as EditorState;
      if (newEditorState !== editorState) {
        onChange(newEditorState);
      }
      return null;
    }
    return getDefaultKeyBinding(e);
  };

  const toggleBlockType = (blockType: string) => {
    onChange(RichUtils.toggleBlockType(editorState, blockType));
  };

  const toggleInlineStyle = (inlineStyle: string) => {
    // Special case: subscript removes superscript
    if (inlineStyle === "SUBSCRIPT") {
      onChange(updateInlineStyles(editorState, "SUBSCRIPT", "SUPERSCRIPT"));
    } else if (inlineStyle === "SUPERSCRIPT") {
      onChange(updateInlineStyles(editorState, "SUPERSCRIPT", "SUBSCRIPT"));
    } else {
      // Agregamos o quitamos el estilo superscript
      onChange(RichUtils.toggleInlineStyle(editorState, inlineStyle));
    }
  };

  return (
    <div className="RichEditor-root">
      <InlineStyleControls
        editorState={editorState}
        onToggle={toggleInlineStyle}
      />
      <BlockStyleControls
        editorState={editorState}
        onToggle={toggleBlockType}
      />

      <div>
        <Editor
          blockStyleFn={getBlockStyle}
          editorState={editorState}
          handleKeyCommand={handleKeyCommand}
          keyBindingFn={mapKeyToEditorCommand}
          onChange={onChange}
          ref={editRef}
          spellCheck={true}
          customStyleMap={STYLEMAP}
        />
      </div>
    </div>
  );
};

export default RichEditor;

const updateInlineStyles = (
  editorState: EditorState,
  addStyle: string,
  removeStyle: string,
): EditorState => {
  let newEditorState = editorState;
  const currentStyle = editorState.getCurrentInlineStyle();

  if (currentStyle.has(removeStyle)) {
    // Si el estilo a remover está presente, lo quitamos
    newEditorState = RichUtils.toggleInlineStyle(newEditorState, removeStyle);
  }

  // Agregamos el estilo a agregar
  newEditorState = RichUtils.toggleInlineStyle(newEditorState, addStyle);

  return newEditorState;
};
