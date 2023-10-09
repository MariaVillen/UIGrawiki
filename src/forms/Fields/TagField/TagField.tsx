import { HTMLAttributes, useState } from "react";
import { TagContainer, Suggest } from "@ui/layouts";
import { BaseInput, TagButton, useTagField, ErrorField } from "@ui/forms";
import { cn } from "../../../utils";

const TagField = ({ className, ...rest }: HTMLAttributes<HTMLInputElement>) => {
  const [isError, setIsError] = useState("");
  const onError = (value: string) => setIsError(value);
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
    data: [
      { id: "0", label: "mercado" },
      { id: "1", label: "moneda" },
    ],
    articleTags: [],
    onChange: (value) => console.log("cambiando ", value),
    onError: onError,
  });

  return (
    <>
      <div className="gwk-group-focus-visible:border-primary gwk-flex gwk-flex-col gwk-max-w-screen-mobile gwk-shadow-input gwk-rounded-[20px] gwk-overflow-hidden ">
        <div className=" gwk-flex gwk-flex-row gwk-max-w-full gwk-flex-wrap">
          <TagContainer className="gwk-px-4 gwk-flex-wrap">
            {tagsOfArticle.length > 0 &&
              tagsOfArticle.map((el: { id: string; label: string }) => (
                <TagButton key={el.id} onClick={() => deleteTag(el.label)}>
                  {el.label}
                </TagButton>
              ))}
          </TagContainer>
          <div
            className={cn(
              " gwk-px-4 gwk-bg-transparent gwk-text-text-black",
              className,
            )}
          >
            <BaseInput
              type="text"
              placeholder="Etiquetas"
              onChange={onLocalChange}
              onKeyDown={onLocalKeyDown}
              className="gwk-group"
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
