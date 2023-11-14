import { cn } from "@ui/utils";

export type SuggestionProps = {
  data: { id: string; label: string }[];
  nameList: string;
  selectedItem: number;
  onSelect: (value: { id: string; label: string }) => void;
};

const Suggestions = ({
  data,
  nameList,
  selectedItem,
  onSelect,
}: SuggestionProps) => {
  const handleSelect = (el: { id: string; label: string }) => {
    onSelect(el);
  };

  return (
    <div role="menu" tabIndex={-1}>
      {data
        ? data?.map((el, index) => (
            <li
              key={`${nameList}-${el.id}`}
              className={cn(
                "gwk-flex gwk-border-t gwk-border-t-surface-black-30 gwk-w-full gwk-items-center gwk-h-10 gwk-px-4 hover:gwk-bg-surface-primary-hover hover:gwk-text-text-white",
                selectedItem === index &&
                  "gwk-bg-surface-primary-hover gwk-text-text-white",
              )}
            >
              <button
                className=" gwk-flex gwk-justify-start gwk-items-center "
                type="button"
                onClick={() => handleSelect(el)}
              >
                {el.label}
              </button>
            </li>
          ))
        : null}
    </div>
  );
};

export default Suggestions;
