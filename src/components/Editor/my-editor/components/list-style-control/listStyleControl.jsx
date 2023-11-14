import OptionListStyle from "./option-listStyle/optionListStyle";
import classes from "./listStyleControl.module.sass";
import { useState } from "react";
import { ArrowDown } from "../../../../../assets";
import PropTypes from "prop-types";

function ListStyleControl({ className, data, onChangeValue, value }) {
  const [option, setOption] = useState(value);
  const [isOpen, setIsOpen] = useState(false);

  const onToggleMenu = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const onSelect = (e, selected) => {
    setOption(selected);
    setIsOpen(false);
    onChangeValue(e, data.name, selected.value);
  };

  return (
    <div className={`${className} ${classes.container}`}>
      <div className={classes.input_group}>
        <div className={classes.inputChoice}>{option.label}</div>
        <div className={classes.icon} onMouseDown={onToggleMenu}>
          <img src={ArrowDown} alt="Desplegar menu de opciones" />
        </div>
      </div>
      <div className={`${classes.dropdown} ${isOpen && classes.open}`}>
        <ul>
          {data.options.map(({ label, style }) => (
            <OptionListStyle
              className={classes.item}
              key={label}
              label={label}
              value={style}
              onSelect={onSelect}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ListStyleControl;

ListStyleControl.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  onChangeValue: PropTypes.func,
  value: PropTypes.object,
};
