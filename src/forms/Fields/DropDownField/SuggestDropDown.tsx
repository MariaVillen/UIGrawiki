import { cn } from "@ui/utils";
import { ReactNode } from "react";

export type suggestDropDownProps<T> = {
  options: (T | string | number | readonly string[] | undefined)[];
  nameList: string;
  selectedItem: number;
  onSelect: (index: number) => void;
  setComponent?: ((el: T) => ReactNode | JSX.Element) | undefined;
  className: string;
};

function SuggestDropDown<T>({
  options,
  nameList,
  selectedItem,
  setComponent,
  className,
  onSelect,
}: suggestDropDownProps<T>) {
  const handleSelect = (index: number) => {
    onSelect(index);
  };

  return (
    <div role="menu" tabIndex={-1} className={className}>
      {options
        ? options?.map((el, index) => (
            <li
              key={`${nameList}-${index}`}
              className={cn(
                "gwk-flex gwk-border-t gwk-border-t-surface-black-10 gwk-w-full gwk-items-center gwk-h-10 gwk-px-4 hover:gwk-bg-surface-primary-hover hover:gwk-text-text-white",
                selectedItem === index &&
                  "gwk-bg-surface-primary-hover gwk-text-text-white",
              )}
            >
              <button
                className="gwk-flex gwk-justify-start gwk-items-center"
                type="button"
                onClick={() => handleSelect(index)}
              >
                {setComponent ? (
                  setComponent(el as T)
                ) : (
                  <span>{el as string}</span>
                )}
              </button>
            </li>
          ))
        : null}
    </div>
  );
}

export default SuggestDropDown;
