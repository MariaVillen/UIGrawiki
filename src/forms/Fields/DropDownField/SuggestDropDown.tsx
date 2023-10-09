import { cn } from "@ui/utils";

export type suggestDropDownProps = {
  options: string[];
  nameList: string;
  selectedItem: number;
  onSelect: (index: number) => void;
};

function SuggestDropDown({
  options,
  nameList,
  selectedItem,
  onSelect,
}: suggestDropDownProps) {
  const handleSelect = (index: number) => {
    onSelect(index);
  };

  return (
    <div role="menu" tabIndex={-1}>
      {options
        ? options?.map((el, index) => (
            <li
              key={`${nameList}-${index}`}
              className={cn(
                "gwk-flex gwk-border-t gwk-border-t-surface-black-30 gwk-w-full gwk-items-center gwk-h-10 gwk-px-4 hover:gwk-bg-surface-primary-hover hover:gwk-text-text-white",
                selectedItem === index &&
                  "gwk-bg-surface-primary-hover gwk-text-text-white",
              )}
            >
              <button
                className="gwk-flex gwk-justify-start gwk-items-center"
                type="button"
                onClick={() => handleSelect(index)}
              >
                {el}
              </button>
            </li>
          ))
        : null}
    </div>
  );
}

export default SuggestDropDown;
