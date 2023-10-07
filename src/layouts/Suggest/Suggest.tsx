interface SuggestionProps {
  data: { id: string; label: string }[];
  nameList: string;
  onSelect: (value: { id: string; label: string }) => void;
}

const Suggestions = ({ data, nameList, onSelect }: SuggestionProps) => {
  const handleSelect = (el: { id: string; label: string }) => {
    onSelect(el);
  };

  const onKeyDown = (el: { id: string; label: string }, e: { key: string }) => {
    console.log("<");
    if (e.key === "Enter") {
      handleSelect(el);
    }
  };

  return (
    <select>
      {data
        ? data?.map((el) => (
            <li className="gwk-flex gwk-border-t gwk-border-t-surface-black-30 gwk-w-full gwk-items-center gwk-h-10 gwk-px-4 hover:gwk-bg-surface-primary-hover hover:gwk-text-text-white">
              <opt
                className=""
                key={`${nameList}-${el.id}`}
                onClick={() => handleSelect(el)}
                onKeyDown={onKeyDown.bind(null, el)}
              >
                {el.label}
              </opt>
            </li>
          ))
        : null}
    </select>
  );
};

export default Suggestions;
