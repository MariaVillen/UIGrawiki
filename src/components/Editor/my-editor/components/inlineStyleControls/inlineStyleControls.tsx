import { EditorButton } from "../index";
import PropTypes from "prop-types";

const InlineStyleControls = ({ editorState, className, data, onToggle }) => {
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

InlineStyleControls.propTypes = {
  editorState: PropTypes.object,
  className: PropTypes.string,
  data: PropTypes.array,
  onToggle: PropTypes.func,
};
