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
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <li className={className} onMouseDown={onClick}>
      {label}
    </li>
  );
}

export default OptionListStyle;
