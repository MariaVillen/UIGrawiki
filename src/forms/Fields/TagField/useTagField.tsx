import { KeyboardEventHandler, useRef, useState } from "react";
import { validateOnlyAlphaNumerics } from "../../../utils/validations";
import {
  deleteArrayfromArrayById,
  focusNextElement,
} from "../../../utils/domUtilities";

import { tagDataPropos } from "@ui/general/DataTypes/tag";

export type useTagFieldProps = {
  data: tagDataPropos[];
  articleTags: tagDataPropos[];
  onChange: (value: tagDataPropos[]) => void;
  onError: (error: string) => void;
};

const useTagField = ({
  data,
  articleTags,
  onError,
  onChange,
}: useTagFieldProps) => {
  // Input variables
  // Input for all the list of tags for one article
  const [tagsOfArticle, setTagsOfArticle] = useState(articleTags || []);
  // the value of the input entry
  const [value, setValue] = useState("");
  // The input element
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Return a new array with all tags that match with the letter of the input value */
  const getSuggestionsFromValue = (val: string) =>
    deleteArrayfromArrayById(
      data.filter((el) => el.label.toLowerCase().match(val)),
      tagsOfArticle,
    );
  // Suggestion List
  // All the suggestion avaivables with the entry
  const [suggestionList, setSuggestionList] = useState(
    getSuggestionsFromValue(value),
  );
  // If the suggestion box is open or not
  const [isSuggestionBoxOpen, setIsSuggestionBoxOpen] = useState(false);
  // If a item was selected or not (-2) if no suggestions, -1 if suggestions open but not a selection
  const [selectedItem, setSelectedItem] = useState(-2);

  // Focus on the Input of TagField
  const focus = () => inputRef.current!.focus();

  /* Function: Delete tags from values tags array */
  const deleteTag = (val: string) => {
    const newTagList = tagsOfArticle.filter(
      (el) => el.label.toLowerCase() !== val.toLowerCase(),
    );
    setTagsOfArticle(newTagList);
    getSuggestionsFromValue(value);
    setIsSuggestionBoxOpen(false);
    focus();
  };

  // Checks if the input text is already in the tags values array
  const isTagDuplicated = (val: string) => {
    const isRepeat = tagsOfArticle.filter((el) => el.label === val);
    return isRepeat.length > 0;
  };

  // Function: add a tag to de list of value tag array
  const AddTag = ({ id, label }: tagDataPropos) => {
    const val = label.toLowerCase();
    if (validateOnlyAlphaNumerics(val)) {
      /* Add tags to the list (limit of tags 5) and reset input value */
      if (!isTagDuplicated(val) && tagsOfArticle.length < 5) {
        setTagsOfArticle((prev) => [...prev, { id, label: val }]);
        setValue("");
        onChange(tagsOfArticle);
      } else {
        console.log("Tag limit reached or tag duplicated");
        onError("Tags Limit reached or tag duplicated");
      }
    } else {
      console.log("only alphanumerics values");
      onError("Only alphanumerics values");
    }
  };

  /* Handler: Onkeydown - Add a tag if a space is insert */
  const onLocalKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === " " || e.key === "Tab" || e.key === "Enter") {
      console.log(" selectedItem: ", selectedItem, "value ", value);
      if (selectedItem >= 0 && e.key === "Enter") {
        setValue(() => suggestionList[selectedItem].label);
        AddTag(suggestionList[selectedItem]);
        setSelectedItem(-1);
        setIsSuggestionBoxOpen(false);
        getSuggestionsFromValue("");
      } else {
        const val = inputRef.current!.value.trim();
        setValue(val);
        console.log(value);
        if (value) {
          const result = data.findIndex((el) => el.label === value);
          let newValue;
          if (result === -1) {
            // agregarlo a la base de datos
            newValue = { id: value, label: value };
          } else {
            newValue = { id: result.toString(), label: value };
          }
          // si no lo es agregarlo a value
          AddTag(newValue);
          setValue("");
          setIsSuggestionBoxOpen(false);
          setSelectedItem(-2);
        }
      }
    }
    if (e.key === "Tab") {
      focusNextElement();
    } else {
      focus();
    }
    if (e.key === "ArrowDown" && suggestionList.length > 0) {
      console.log("inputkeydown");
      if (selectedItem >= -1 && selectedItem < data.length - 1) {
        setSelectedItem((prev) => prev + 1);
      }
    }
    if (e.key === "ArrowUp" && selectedItem > -1) {
      setSelectedItem((prev) => prev - 1);
    }
    console.log(e.key);
  };

  const onLocalChange = () => {
    onError("");
    if (inputRef.current !== null) {
      const val = inputRef.current.value.trim();
      setValue(val);
      if (validateOnlyAlphaNumerics(val)) {
        const newSuggestionList = getSuggestionsFromValue(val);
        if (newSuggestionList.length > 0) {
          setIsSuggestionBoxOpen(true);
          setSelectedItem(-1);
          setSuggestionList(newSuggestionList);
        } else {
          setIsSuggestionBoxOpen(false);
          setSelectedItem(-2);
        }
      } else {
        if (!val) {
          setIsSuggestionBoxOpen(false);
          setSelectedItem(-2);
          setSuggestionList([]);
        } else {
          onError(`value not allowed: ${val}`);
        }
      }
    }
  };

  const applyValue = (el: tagDataPropos) => {
    setValue(el.label);
    focus();
  };

  return {
    inputRef,
    tagsOfArticle,
    suggestionList,
    onLocalChange,
    onLocalKeyDown,
    isSuggestionBoxOpen,
    deleteTag,
    applyValue,
    selectedItem,
    value,
  };
};

export default useTagField;
