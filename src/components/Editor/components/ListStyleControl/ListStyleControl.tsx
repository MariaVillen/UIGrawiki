/* eslint-disable jsx-a11y/no-static-element-interactions */
import OptionListStyle from "./OptionListStyle/OptionListStyle";
import { MouseEventHandler, useState } from "react";
import { ArrowDown } from "@ui/icons";
import { Icon } from "@ui/general";

type TDataProps = {
  label: string;
  style: string;
};

export type TListStyleControlProps = {
  className: string;
  data: TDataProps[];
  onChangeValue: MouseEventHandler<HTMLDivElement>;
  value: TDataProps;
};

function ListStyleControl({
  className,
  data,
  onChangeValue,
  value,
}: TListStyleControlProps) {
  const [option, setOption] = useState(value);
  const [isOpen, setIsOpen] = useState(false);

  const onToggleMenu = (e: MouseEvent) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const onSelect = (e: MouseEvent, selected: TDataProps) => {
    setOption(selected);
    setIsOpen(false);
    onChangeValue(e, data.name, selected.value);
  };

  return (
    <div className={className}>
      <div>
        <div>{option.label}</div>
        <div onMouseDown={onToggleMenu}>
          <Icon elementSrc={ArrowDown} alt="Desplegar menu de opciones" />
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
