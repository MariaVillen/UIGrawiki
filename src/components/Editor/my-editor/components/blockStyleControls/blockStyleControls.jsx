import { EditorButton } from "../index";
import { getBlockType } from "../../helpers/helperUseEditor";
import PropTypes from "prop-types";

const BlockStyleControls = ({ editorState, className, data, onToggle }) => {
  const blockType = getBlockType(editorState);
  return (
    <div className={className}>
      {data.map((type) => (
        <EditorButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          icon={type.icon}
          onToggle={onToggle}
          style={type.style}
        />
      ))}
    </div>
  );
};

export default BlockStyleControls;

BlockStyleControls.propTypes = {
  editorState: PropTypes.object,
  className: PropTypes.string,
  data: PropTypes.array,
  onToggle: PropTypes.func,
};
