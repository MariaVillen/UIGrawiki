import { HTMLAttributes, useState } from "react";
import { Suggest } from "@ui/layouts";
import { BaseInput, TagButton, useTagField, ErrorField } from "@ui/forms";
import { cn } from "../../../utils";

const myData = [
  { id: "0", label: "mercado" },
  { id: "1", label: "moneda" },
];

const TagField = ({ className, ...rest }: HTMLAttributes<HTMLInputElement>) => {
  const [isError, setIsError] = useState("");
  const onError = (error: string) => setIsError(error);
  const onChange = (submitedValue: typeof myData) =>
    console.log("submit article ", submitedValue);
  const {
    inputRef,
    tagsOfArticle,
    suggestionList,
    onLocalChange,
    onLocalKeyDown,
    isSuggestionBoxOpen,
    applyValue,
    deleteTag,
    selectedItem,
    value,
  } = useTagField({
    data: myData,
    articleTags: [],
    onChange: onChange,
    onError: onError,
  });

  return (
    <>
      <div
        className={cn(
          "gwk-min-h-[40px] gwk-w-80 gwk-flex gwk-flex-col gwk-max-w-screen-mobile gwk-shadow-input gwk-rounded-[20px] gwk-overflow-hidden mobile:gwk-max-w-[855px] mobile:gwk-w-full",
          isError
            ? "gwk-border gwk-border-border-negative"
            : value
            ? "gwk-border gwk-border-border-positive"
            : "focus-within:gwk-border focus-within:gwk-border-border-primary",
        )}
      >
        <div
          className={cn(
            tagsOfArticle.length > 0 && "gwk-items-center gwk-gap-1 gwk-pl-2",
            " gwk-flex gwk-flex-row gwk-max-w-full gwk-flex-wrap",
          )}
        >
          {tagsOfArticle.length > 0 &&
            tagsOfArticle.map((el: { id: string; label: string }) => (
              <TagButton
                className="gwk-my-1"
                key={el.id}
                onClick={() => deleteTag(el.label)}
                withHash
              >
                {el.label}
              </TagButton>
            ))}
          <div
            className={cn(
              " gwk-px-4 gwk-flex-grow gwk-bg-transparent gwk-text-text-black",
              className,
            )}
          >
            <BaseInput
              type="text"
              placeholder="Etiquetas"
              onChange={onLocalChange}
              onKeyDown={onLocalKeyDown}
              className="gwk-w-full"
              value={value}
              ref={inputRef}
              {...rest}
            />
          </div>
        </div>
        <ul
          className={
            isSuggestionBoxOpen
              ? "gwk-flex gwk-flex-col gwk-px-0"
              : "gwk-hidden"
          }
        >
          <Suggest
            selectedItem={selectedItem}
            data={suggestionList}
            nameList="tags"
            onSelect={applyValue}
          />
        </ul>
      </div>
      <ErrorField className={isError ? "gwk-flex" : "gwk-hidden"}>
        {isError}
      </ErrorField>
    </>
  );
};

export default TagField;
