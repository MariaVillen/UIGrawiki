import {
  EditorState,
  ContentState,
  convertFromRaw,
  convertFromHTML,
  RichUtils,
  RawDraftContentState,
  getDefaultKeyBinding,
  Editor,
} from "draft-js";
import { useState, useRef, useEffect } from "react";

import {
  shouldStartList,
  startList,
  getSelectedBlock,
  insertSpace,
  traceKeyHistory,
  autocompleteListFormat,
  changeStylesIfNoSelection,
  changeStylesIfSelection,
} from "../helpers/helperUseEditor";

import { FONT_LIST_STYLE } from "../helpers/configEditorMenu";

export type TUseEditorProps = {
  value: string | RawDraftContentState | null;
  type: string;
};

function useEditor({ value, type }: TUseEditorProps) {
  const _createEditor = (
    value: string | RawDraftContentState | null,
    type = "json",
  ) => {
    if (!value) return EditorState.createEmpty();

    switch (type) {
      case "text":
        return EditorState.createWithContent(
          ContentState.createFromText(value as string),
        );
      case "json": {
        const content = convertFromRaw(value as RawDraftContentState);
        return EditorState.createWithContent(content);
      }
      case "html": {
        const content = convertFromHTML(value as string);
        return EditorState.createWithContent(
          ContentState.createFromBlockArray(content.contentBlocks),
        );
      }
      default:
        console.log("Unknown type");
        return EditorState.createEmpty();
    }
  };

  const [editorState, setEditorState] = useState(_createEditor(value, type));
  const [fontSize] = useState(FONT_LIST_STYLE.options[0]);
  //const editRef = useRef<HTMLElement | null>(null);
  const editRef = useRef<Editor>(null);

  const changeHandler = (newEditorState: EditorState) => {
    setEditorState(newEditorState);
  };

  const onKeyDownHandler = (event: React.KeyboardEvent) => {
    const charHistory = traceKeyHistory(event);
    switch (event.key) {
      case "Tab":
        break;
      case " ":
        return autocompleteListFormat(charHistory);
    }
    return getDefaultKeyBinding(event);
  };

  const toggleIndentStyles = (
    event: React.KeyboardEvent,
    indentDirection: string,
  ) => {
    if (indentDirection && indentDirection === "OUTDENT") {
      event.nativeEvent = new KeyboardEvent("keydown", { shiftKey: true });
    } else {
      event.nativeEvent = new KeyboardEvent("keydown", { key: "Tab" });
    }

    if (editorState) {
      changeHandler(RichUtils.onTab(event, editorState, 4));
    }
    editRef.current!.focus();
  };

  const toggleBlockType = (_e: React.MouseEvent, blockType: string) => {
    changeHandler(RichUtils.toggleBlockType(editorState, blockType));
  };

  const changeInlineStyle = (
    _e: React.MouseEvent,
    name: string,
    inlineStyle: string,
  ) => {
    console.log("changing style");
    const selectionState = editorState.getSelection();
    if (selectionState.isCollapsed()) {
      changeHandler(changeStylesIfNoSelection(editorState, name, inlineStyle));
    } else {
      changeHandler(changeStylesIfSelection(editorState, name, inlineStyle));
    }
  };

  const toggleInlineStyle = (inlineStyle: string) => {
    changeHandler(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };

  const handleKeyCommand = (command: string, editorState: EditorState) => {
    _checkListStartedBlockToFormat(command, editorState);

    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      changeHandler(newState);
      return "handled";
    } else {
      return "not-handled";
    }
  };

  const _checkListStartedBlockToFormat = (
    command: string,
    editorState: EditorState,
  ) => {
    if (
      command === "start-unordered-list" ||
      command === "start-ordered-list"
    ) {
      const block = getSelectedBlock(editorState);
      if (shouldStartList(block)) {
        const newEditorState = startList(editorState, block, command);
        changeHandler(newEditorState);
        return "handled";
      }
      const newEditorState = insertSpace(editorState);
      changeHandler(newEditorState);
      return "handled";
    }
  };

  useEffect(() => {
    console.log(FONT_LIST_STYLE.name + "-" + fontSize.style);
    changeHandler(
      changeStylesIfNoSelection(
        editorState,
        FONT_LIST_STYLE.name,
        FONT_LIST_STYLE.name + "-" + fontSize.style,
      ),
    );
    // Asegurarse de que editRef.current no sea nulo antes de acceder a la propiedad focus
    editRef.current!.focus();
  }, [editorState, fontSize]);

  return {
    editorState,
    editRef,
    fontSize,
    changeHandler,
    onKeyDownHandler,
    toggleIndentStyles,
    toggleBlockType,
    toggleInlineStyle,
    changeInlineStyle,
    handleKeyCommand,
  };
}

export default useEditor;
