import {
  KeyBindingUtil,
  Modifier,
  EditorState,
  RichUtils,
  ContentBlock,
} from "draft-js";

let history: string[] = [];

const listTypeMap: Record<string, string> = {
  "start-unordered-list": "unordered-list-item",
  "start-ordered-list": "ordered-list-item",
};

/** traceKeyHistory: Esta función rastrea las teclas presionadas por el usuario y las almacena en un historial (history). Sirve para detectar patrones de entrada de teclas, como el inicio de listas o formatos específicos.*/
export const traceKeyHistory = (e: React.KeyboardEvent): string[] => {
  const { key } = e;
  if (history.length > 2) {
    history = history.slice(1);
  }

  if (!KeyBindingUtil.hasCommandModifier(e)) {
    history.push(key);
  }
  return history;
};

/* shouldStartList: Esta función determina si se deben iniciar listas basadas en el contenido del bloque actual en el editor. Por ejemplo, puede identificar si el usuario está escribiendo una lista no ordenada (*) o una lista ordenada (1.) y tomar decisiones en función de eso.*/
export const shouldStartList = (block: ContentBlock): boolean => {
  return (
    block.getType() === "unstyled" &&
    block.getDepth() === 0 &&
    (block.getText() === "*" || block.getText() === "1.")
  );
};

/* startList: Esta función se utiliza para iniciar una lista (ordenada o no ordenada) en el editor, cambiando el tipo de bloque en el que se encuentra el texto seleccionado.*/
export const startList = (
  editorState: EditorState,
  block: ContentBlock,
  command: string,
): EditorState => {
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

  return EditorState.push(newEditorState, newContentState, "insert-characters");
};

/*getSelectedBlock: Esta función obtiene el bloque de texto que está actualmente seleccionado en el editor. Puede ser útil para realizar acciones específicas en función del bloque seleccionado. */
export const getSelectedBlock = (editorState: EditorState): ContentBlock => {
  const selection = editorState.getSelection();
  const blockStartKey = selection.getStartKey();
  const contentState = editorState.getCurrentContent();
  return contentState.getBlockMap().get(blockStartKey);
};

/*getBlockType: Esta función devuelve el tipo de bloque en el que se encuentra el texto seleccionado. Esto es útil para determinar si el texto está dentro de un elemento de lista o en otro tipo de bloque. */
export const getBlockType = (editorState: EditorState): string => {
  const selection = editorState.getSelection();
  const startKey = selection.getStartKey();
  return editorState.getCurrentContent().getBlockForKey(startKey).getType();
};

/*changeStylesIfNoSelection y changeStylesIfSelection: Estas funciones permiten cambiar estilos de texto en el editor, ya sea si no hay texto seleccionado o si hay texto seleccionado. Se utilizan para aplicar y eliminar estilos de texto específicos.*/
export const changeStylesIfNoSelection = (
  editorState: EditorState,
  name: string,
  inlineStyle: string,
): EditorState => {
  const currentStyle = editorState.getCurrentInlineStyle();
  let newEditorState = editorState;

  if (
    currentStyle &&
    currentStyle.some((item) => (item ? item.includes(name) : false))
  ) {
    const stylesToRemove = currentStyle.filter((item) =>
      item ? item.includes(name) : false,
    );
    stylesToRemove.forEach(
      (style) =>
        style &&
        (newEditorState = RichUtils.toggleInlineStyle(newEditorState, style)),
    );
  }
  newEditorState = RichUtils.toggleInlineStyle(
    newEditorState,
    name + "-" + inlineStyle,
  );
  return newEditorState;
};

export const changeStylesIfSelection = (
  editorState: EditorState,
  name: string,
  inlineStyle: string,
): EditorState => {
  const selection = editorState.getSelection();
  let contentState = editorState.getCurrentContent();
  const currentStyle = editorState.getCurrentInlineStyle();
  let newEditorState = editorState;

  if (currentStyle.some((item) => (item ? item.includes(name) : false))) {
    const stylesToRemove = currentStyle.filter((item) =>
      item ? item.includes(name) : false,
    );
    stylesToRemove.forEach((style) => {
      style
        ? (contentState = Modifier.removeInlineStyle(
            contentState,
            selection,
            style,
          ))
        : null;
    });
    newEditorState = EditorState.push(
      newEditorState,
      contentState,
      "change-inline-style",
    );
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

/*insertSpace: Esta función inserta un espacio en la ubicación actual del cursor en el editor.*/
export const insertSpace = (editorState: EditorState): EditorState => {
  const contentState = editorState.getCurrentContent();
  const selection = editorState.getSelection();
  const newContent = Modifier.insertText(contentState, selection, " ");

  return EditorState.push(editorState, newContent, "insert-characters");
};

/*handleTabsKeyPressed: Esta función maneja la acción cuando se presiona la tecla "Tab" en el editor. Si el bloque actual es una lista (ordenada o no ordenada), realiza una acción específica.*/
export const handleTabsKeyPressed = (
  editorState: EditorState,
  event: React.KeyboardEvent,
): void => {
  const blockType = getBlockType(editorState);
  if (
    blockType === "unordered-list-item" ||
    blockType === "ordered-list-item"
  ) {
    RichUtils.onTab(event, editorState, 4);
    event.preventDefault();
  }
};
/*autocompleteListFormat: Esta función detecta patrones en el historial de teclas (charHistory) y determina si el usuario está tratando de iniciar una lista, ya sea ordenada o no ordenada, en función de las teclas anteriores presionadas.*/
export const autocompleteListFormat = (charHistory: string[]): string => {
  const previousChar = charHistory[charHistory.length - 2];
  if (previousChar === "*") {
    return "start-unordered-list";
  }
  const previousInput = charHistory.slice(0, 2).join("");
  if (previousInput === "1.") {
    return "start-ordered-list";
  } else {
    return "";
  }
};
