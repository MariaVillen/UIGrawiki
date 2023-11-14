import {
  EditorState,
  RichUtils,
  ContentState,
  convertFromRaw,
  convertFromHTML,
  getDefaultKeyBinding,
} from "draft-js";
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

import { useState, useRef, useEffect } from "react";
import { FONT_LIST_STYLE } from "../helpers/configEditorMenu";

function useEditor(value, type) {
  /**
   * @Function
   * @description Takes a value and type and create an EditorState depending on thats parameters.
   * @param {string || object} value
   * @param {string} type
   * @returns {Object<EditorState>}
   */
  const _createEditor = (value, type = "json") => {
    if (!value) return EditorState.createEmpty();

    switch (type) {
      case "text":
        return ContentState.createFromText(value);
      case "json": {
        const content = convertFromRaw(value);
        return EditorState.createWithContent(content);
      }
      case "html": {
        const content = convertFromHTML(value);
        return EditorState.createWithContent(content);
      }
      default:
        console.log("Unknown type");
    }
  };

  /**
   * @function
   * @description Handles the controled change of the editor content.
   * @param {object} editorState
   * @returns {VOID}
   */
  const changeHandler = (editorState) => {
    setEditorState(editorState);
  };

  /**
   * @function
   * @description Handles the events fired when key down
   * @param {object} event
   */
  function onKeyDownHandler(event) {
    const charHistory = traceKeyHistory(event);
    switch (event.keyCode) {
      case 9:
        break;
      case 32:
        return autocompleteListFormat(charHistory);
    }
    return getDefaultKeyBinding(event);
  }

  /**
   * @function
   * @description Handles the event fired when clicking the indent or outdent button of menu.
   * @param {*} event
   * @param {*} indentDirection
   */
  const toggleIndentStyles = (event, indentDirection) => {
    if (indentDirection && indentDirection === "OUTDENT") {
      event.shiftKey = true;
    } else {
      event.tabkey = true;
    }
    changeHandler(RichUtils.onTab(event, editorState, 4));
  };

  /**
   * @function
   * @description Handles the event fired when a button of BLOCKtype is clicked
   * @param {object} blockType
   */
  const toggleBlockType = (_e, blockType) => {
    changeHandler(RichUtils.toggleBlockType(editorState, blockType));
  };

  /**
   * @function
   * @description Handles the event fired when a button of INLINEtype is clicked but changing the style for other
   * @param {object} blockType
   */
  const changeInlineStyle = (_e, name, inlineStyle) => {
    console.log("changing style");
    const selectionState = editorState.getSelection();
    if (selectionState.isCollapsed()) {
      changeHandler(changeStylesIfNoSelection(editorState, name, inlineStyle));
    } else {
      changeHandler(changeStylesIfSelection(editorState, name, inlineStyle));
    }
  };

  /**
   * @function
   * @description Handles the event fired when a button of INLINEtype is clicked
   * @param {object} blockType
   */
  const toggleInlineStyle = (_e, inlineStyle) => {
    changeHandler(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };

  const handleKeyCommand = (command, editorState) => {
    // Check if "*" or "1." was enter to create a list block
    _checkListStartedBlockToFormat(command, editorState);

    // Normal handleKey
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      changeHandler(newState);
      return "handled";
    } else {
      return "not-handled";
    }
  };

  const _checkListStartedBlockToFormat = (command, editorState) => {
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
      // Normal process space
      const newEditorState = insertSpace(editorState);
      changeHandler(newEditorState);
      return "handled";
    }
  };

  const [editorState, setEditorState] = useState(_createEditor(value, type));
  const [fontSize] = useState(FONT_LIST_STYLE.options[0]);
  const editRef = useRef();
  useEffect(() => {
    console.log(FONT_LIST_STYLE.name + "-" + fontSize.style);
    changeHandler(
      changeStylesIfNoSelection(
        editorState,
        FONT_LIST_STYLE.name,
        FONT_LIST_STYLE.name + "-" + fontSize.style,
      ),
    );
    editRef.current.focus();
  }, []);

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
