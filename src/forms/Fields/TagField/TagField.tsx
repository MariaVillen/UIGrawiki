import { HTMLAttributes, useState } from "react";
import { TagContainer, Suggest } from "@ui/layouts";
import { BaseInput, TagButton, useTagField, ErrorField } from "@ui/forms";
import { cn } from "../../../utils";

const TagField = ({ className, ...rest }: HTMLAttributes<HTMLInputElement>) => {
  const [isError, setIsError] = useState("");
  const onError = (value: string) => setIsError(value);
  const {
    tagRef,
    inputTagList,
    suggestionList,
    onLocalChange,
    onLocalKeyDown,
    isSuggestionOpen,
    applyValue,
    deleteTag,
    selectedItem,
  } = useTagField({
    data: [
      { id: "0", label: "mercado" },
      { id: "1", label: "moneda" },
    ],
    articleTags: [
      { id: "0", label: "mercado" },
      { id: "1", label: "moneda" },
    ],
    onChange: (value) => console.log("cambiando ", value),
    onError: onError,
  });

  return (
    <>
      <div className="gwk-group-focus-visible:border-primary gwk-flex gwk-flex-col gwk-max-w-screen-mobile gwk-shadow-input gwk-rounded-[20px] gwk-overflow-hidden ">
        <div className=" gwk-flex gwk-flex-row gwk-max-w-full gwk-flex-wrap">
          <TagContainer className="gwk-px-4 ">
            {inputTagList.length > 0 &&
              inputTagList.map((el: { id: string; label: string }) => (
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
              ref={tagRef}
              {...rest}
            />
          </div>
        </div>
        <ul
          className={
            isSuggestionOpen ? "gwk-flex gwk-flex-col gwk-px-0" : "gwk-hidden"
          }
        >
          <Suggest
            data={suggestionList}
            nameList="tags"
            selectedItem={selectedItem}
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
