import { KeyboardEventHandler, useRef, useState } from "react";
import { validateOnlyAlphaNumerics } from "../../../utils/validations";
import { focusNextElement } from "../../../utils/domUtilities";

export type useTagFieldProps = {
  data: { id: string; label: string }[];
  articleTags: { id: string; label: string }[];
  onChange: (value: { id: string; label: string }[]) => void;
  onError: (error: string) => void;
};

const useTagField = ({
  data,
  articleTags,
  onError,
  onChange,
}: useTagFieldProps) => {
  const [suggestionList, setSuggestionList] = useState(data || []);
  const [inputTagList, setInputTagList] = useState(articleTags || []);
  const [isSuggestionOpen, setIsSuggestionOpen] = useState(false);
  const tagRef = useRef<HTMLInputElement | null>(null);

  // Focus on the Input of TagField
  const focus = () => tagRef.current !== null && tagRef.current.focus();

  // Filter de data to have a new updated list of tags.
  const refreshTagList = (value: string) =>
    inputTagList.filter((el) => el.label.toLowerCase() !== value.toLowerCase());

  // Return a new array with all tags that match with the letter of the input value */
  const getSuggestionsFromValue = (value: string) =>
    suggestionList.filter((el) => el.label.toLowerCase().match(value));

  // Checks if the input text is already in the tags values array
  const isTagDuplicated = (value: string) => {
    const isRepeat = inputTagList.filter((el) => el.label === value);
    return isRepeat.length > 0;
  };

  // Function: add a tag to de list of value tag array
  const AddTag = (value: string) => {
    value = value.toLowerCase();
    if (validateOnlyAlphaNumerics(value)) {
      /* Add tags to the list (limit of tags 5) and reset input value */
      if (!isTagDuplicated(value) && inputTagList.length < 5) {
        setInputTagList((prev) => [...prev, { id: value, label: value }]);
        setSuggestionList((prev) => [...prev, { id: value, label: value }]);
        if (tagRef.current !== null) tagRef.current.value = "";
        onChange(inputTagList);
      } else {
        console.log("Tag limit reached or tag duplicated");
        onError("Tags Limit reached or tag duplicated");
      }
    } else {
      console.log("only alphanumerics values");
      onError("Only alphanumerics values");
    }
  };

  /* Function: Delete tags from values tags array */
  const deleteTag = (id: string) => {
    const newTagList = refreshTagList(id);
    setSuggestionList(refreshTagList(id));
    setInputTagList(newTagList);
    focus();
  };

  /* Handler: Onkeydown - Add a tag if a space is insert */
  const onLocalKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    console.log("ekey ", e.key);
    if (e.key === " " || e.key === "Tab" || e.key === "Enter") {
      e.preventDefault();
      const value = tagRef.current?.value;
      console.log("value : ", value);
      if (value) {
        AddTag(value.trim());
        tagRef.current!.value = "";
        setIsSuggestionOpen(false);
      }
    }
    if (e.key === "Tab") {
      focusNextElement();
    } else {
      focus();
    }
    if (e.key === "ArrowDown") {
      focusNextElement();
    }
  };

  const onLocalChange = () => {
    onError("");
    if (tagRef.current !== null) {
      const value = tagRef.current.value.trim();
      if (validateOnlyAlphaNumerics(value)) {
        const newSuggestionList = getSuggestionsFromValue(value);
        if (newSuggestionList.length > 0) {
          setIsSuggestionOpen(true);
          setSuggestionList(newSuggestionList);
        } else {
          setIsSuggestionOpen(false);
        }
      } else {
        onError(`value not allowed: ${value}`);
      }
    }
  };

  const applyValue = (el: { id: string; label: string }) => {
    tagRef.current!.value = el.label;
    focus();
  };

  return {
    tagRef,
    inputTagList,
    suggestionList,
    onLocalChange,
    onLocalKeyDown,
    isSuggestionOpen,
    deleteTag,
    applyValue,
  };
};

export default useTagField;
