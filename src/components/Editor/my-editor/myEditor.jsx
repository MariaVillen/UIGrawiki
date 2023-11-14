import { Editor } from "draft-js";
import {
  BlockStyleControls,
  InlineStyleControls,
  TabStyleControls,
} from "./components";
import {
  INLINE_STYLES,
  BLOCK_TYPES,
  TAB_TYPES,
  STYLEMAP,
  FONT_LIST_STYLE,
} from "./helpers/configEditorMenu";
import PropTypes from "prop-types";
import "draft-js/dist/Draft.css";
import classes from "./myEditor.module.sass";
import useEditor from "./hooks/useEditor";
import ListStyleControl from "./components/list-style-control/listStyleControl";

function MyEditor({ value = null, type }) {
  const {
    editorState,
    editRef,
    changeHandler,
    toggleIndentStyles,
    onKeyDownHandler,
    toggleBlockType,
    toggleInlineStyle,
    handleKeyCommand,
    changeInlineStyle,
    fontSize,
  } = useEditor(value, type);

  return (
    <div className={classes.editContainer}>
      <div className={classes.edit_menu}>
        <ListStyleControl
          className={classes.edit_fontList}
          editorState={editorState}
          onChangeValue={changeInlineStyle}
          value={fontSize}
          data={FONT_LIST_STYLE}
        />
        <InlineStyleControls
          className={classes.edit_control}
          editorState={editorState}
          onToggle={toggleInlineStyle}
          data={INLINE_STYLES}
        />
        <TabStyleControls
          className={classes.edit_control}
          editorState={editorState}
          onToggle={toggleIndentStyles}
          data={TAB_TYPES}
        />
        <BlockStyleControls
          className={classes.edit_control}
          editorState={editorState}
          onToggle={toggleBlockType}
          data={BLOCK_TYPES}
        />
      </div>
      <div className={classes.edit_input}>
        <Editor
          ref={editRef}
          editorState={editorState}
          onChange={changeHandler}
          handleKeyCommand={handleKeyCommand}
          keyBindingFn={onKeyDownHandler}
          customStyleMap={STYLEMAP}
        />
      </div>
    </div>
  );
}

export default MyEditor;

MyEditor.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
};
