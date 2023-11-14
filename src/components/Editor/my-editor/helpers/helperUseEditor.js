import { KeyBindingUtil, Modifier, EditorState, RichUtils } from "draft-js";

let history = [];

const listTypeMap = {
  "start-unordered-list": "unordered-list-item",
  "start-ordered-list": "ordered-list-item",
};

/**
 * @function
 * @description Trace de history of the keys taped.
 * @param {EventListenerObject} e
 * @returns {object} The History
 */
export const traceKeyHistory = (e) => {
  const { key } = e;
  if (history.length > 2) {
    history = history.slice(1);
  }

  if (!KeyBindingUtil.hasCommandModifier(e)) {
    history.push(key);
  }
  return history;
};

/**
 * @function
 * @description Determinate if the conditions to start a list
 * @param {object}
 * @returns {boolean}
 */
export const shouldStartList = (block) => {
  return (
    block.getType() === "unstyled" &&
    block.getDepth() === 0 &&
    (block.getText() === "*" || block.getText() === "1.")
  );
};

/**
 * @function
 * @description Select the text to start a new list block
 * @param {Object} editorState
 * @param {Object} block
 * @param {String} command
 * @returns
 */
export const startList = (editorState, block, command) => {
  const listType = listTypeMap[command];
  const newEditorState = RichUtils.toggleBlockType(editorState, listType);
  const contentState = newEditorState.getCurrentContent();
  const selection = newEditorState.getSelection();
  const blockSelection = selection.merge({
    anchorOffset: 0,
    focusOffset: block.getLength(),
  });

  const newContentState = Modifier.replaceText(
    contentState,
    blockSelection,
    "",
  );

  return EditorState.push(newEditorState, newContentState);
};

/**
 * @function
 * @description Get the block that was selected in the editor
 * @param {Object} editorState
 */
export const getSelectedBlock = (editorState) => {
  const selection = editorState.getSelection();
  const blockStartKey = selection.getStartKey();
  const contentState = editorState.getCurrentContent();
  return contentState.getBlockMap().get(blockStartKey);
};

/**
 * @function
 * @description Get the type of block (unstyled, ordered-list, etc);
 * @param {Object} editorState
 * @returns
 */
export const getBlockType = (editorState) => {
  const selection = editorState.getSelection();
  const startKey = selection.getStartKey();
  return editorState.getCurrentContent().getBlockForKey(startKey).getType();
};

export const changeStylesIfNoSelection = (editorState, name, inlineStyle) => {
  const currentStyle = editorState.getCurrentInlineStyle();
  let newEditorState = editorState;

  if (currentStyle.some((item) => item.includes(name))) {
    const stylesToRemove = currentStyle.filter((item) => item.includes(name));
    stylesToRemove.forEach(
      (style) =>
        (newEditorState = RichUtils.toggleInlineStyle(newEditorState, style)),
    );
  }
  newEditorState = RichUtils.toggleInlineStyle(
    newEditorState,
    name + "-" + inlineStyle,
  );
  return newEditorState;
};

export const changeStylesIfSelection = (editorState, name, inlineStyle) => {
  const selection = editorState.getSelection();
  let contentState = editorState.getCurrentContent();
  const currentStyle = editorState.getCurrentInlineStyle();
  let newEditorState = editorState;
  if (currentStyle.some((item) => item.includes(name))) {
    const stylesToRemove = currentStyle.filter((item) => item.includes(name));
    console.log(stylesToRemove);
    stylesToRemove.forEach((style) => {
      contentState = Modifier.removeInlineStyle(contentState, selection, style);
    });
    EditorState.push(newEditorState, contentState, "change-inline-style");
  }
  contentState = Modifier.applyInlineStyle(
    contentState,
    selection,
    name + "-" + inlineStyle,
  );
  newEditorState = EditorState.set(newEditorState, {
    currentContent: contentState,
  });
  return newEditorState;
};

/**
 * @function
 * @description Insert an space at the selection
 * @param {Object} editorState
 * @returns
 */
export const insertSpace = (editorState) => {
  const contentState = editorState.getCurrentContent();
  const selection = editorState.getSelection();
  const newContent = Modifier.insertText(contentState, selection, " ");

  return EditorState.push(editorState, newContent);
};

/**
 * @function
 * @description handle what to do when the tab key is pressed
 * @param {Object} editorState
 * @param {EventListenerObject} event
 * @returns
 */
export const handleTabsKeyPressed = (editorState, event) => {
  const blockType = getBlockType(editorState);
  if (
    blockType === "unordered-list-item" ||
    blockType === "ordered-list-item"
  ) {
    editorState(RichUtils.onTab(event, editorState, 4));

    event.preventDefault();
    return null;
  }
};

/**
 * @function
 * @description returns a curtom command to the handler of the state if some character are in the history
 * @param {Array} charHistory
 * @returns
 */
export const autocompleteListFormat = (charHistory) => {
  const previousChar = charHistory[charHistory.length - 2];
  if (previousChar === "*") {
    return "start-unordered-list";
  }
  const previousInput = charHistory.slice(0, 2).join("");
  if (previousInput === "1.") {
    return "start-ordered-list";
  }
};
