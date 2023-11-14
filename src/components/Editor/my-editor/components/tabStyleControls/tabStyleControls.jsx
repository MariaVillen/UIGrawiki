import { EditorButton } from "../index";
import { getBlockType } from "../../helpers/helperUseEditor";
import PropTypes from "prop-types";

const TabStyleControls = ({ editorState, className, onToggle, data }) => {
  const blockType = getBlockType(editorState);

  return (
    <div className={className}>
      {data.map((type) => (
        <EditorButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          icon={type.icon}
          onToggle={onToggle.bind(type.label)}
          style={type.style}
        />
      ))}
    </div>
  );
};

export default TabStyleControls;

TabStyleControls.propTypes = {
  editorState: PropTypes.object,
  className: PropTypes.string,
  onToggle: PropTypes.func,
  data: PropTypes.array,
};
