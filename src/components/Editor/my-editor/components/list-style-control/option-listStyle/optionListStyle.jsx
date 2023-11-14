import PropTypes from "prop-types";

/**
 * @component React OptionListStyle
 * @param {object} className
 * @param {string} label
 * @param {string} value
 * @param {function} onSelect
 * @returns {function({value,label})}
 */
function OptionListStyle({ className, label, value, onSelect }) {
  const onClick = (e) => {
    e.preventDefault();
    onSelect(e, { value, label });
  };
  return (
    <li className={className} onMouseDown={onClick}>
      {label}
    </li>
  );
}

export default OptionListStyle;

OptionListStyle.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onSelect: PropTypes.func,
};
