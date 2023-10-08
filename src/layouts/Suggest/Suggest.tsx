import { useState } from "react";
import Button from "../../forms/Buttons/Button/Button";

export type SuggestionProps = {
  data: { id: string; label: string }[];
  nameList: string;
  onSelect: (value: { id: string; label: string }) => void;
};

const Suggestions = ({ data, nameList, onSelect }: SuggestionProps) => {
  const [selectedItem, setSelectedItem] = useState(-1);

  const handleSelect = (el: { id: string; label: string }) => {
    onSelect(el);
  };

  const onKeyDown = (el: { id: string; label: string }, e: { key: string }) => {
    console.log(selectedItem);
    if (selectedItem < data.length) {
      if (e.key === "ArrowUp" && selectedItem > 0) {
        setSelectedItem((prev: number) => prev - 1);
      } else if (e.key === "ArrowDown" && selectedItem < data.length - 1) {
        setSelectedItem((prev: number) => prev + 1);
      } else if (e.key === "Enter" && selectedItem >= 0) {
        handleSelect(el);
      }
    } else {
      setSelectedItem(-1);
    }
  };

  return (
    <>
      {data
        ? data?.map((el) => (
            <li
              key={`${nameList}-${el.id}`}
              className="gwk-flex gwk-border-t gwk-border-t-surface-black-30 gwk-w-full gwk-items-center gwk-h-10 gwk-px-4 hover:gwk-bg-surface-primary-hover hover:gwk-text-text-white"
            >
              <Button
                role="button"
                className=""
                onClick={() => handleSelect(el)}
                onKeyDown={onKeyDown.bind(null, el)}
              >
                {el.label}
              </Button>
            </li>
          ))
        : null}
    </>
  );
};

export default Suggestions;
