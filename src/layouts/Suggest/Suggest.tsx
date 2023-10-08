import { Button } from "@ui/forms";

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

  const onKeyDown = (el: { id: string; label: string }, e: { key: string }) => {
    if (e.key === "Enter" && selectedItem >= 0) {
      handleSelect(el);
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
