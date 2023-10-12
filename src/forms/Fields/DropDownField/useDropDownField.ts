import { MutableRefObject, SetStateAction, useState } from "react";

export type useDropDownProps<T> = {
  value: T | string;
  indexChamp?: string | keyof T;
  iconChamp?: string | keyof T;
  options: (T | string)[];
  onChange: (value: T) => void;
  ref: MutableRefObject<HTMLInputElement | null>;
  onError?: (error: string) => void;
};

function useDropDownField<T>({
  value,
  options,
  iconChamp,
  ref,
  indexChamp,
}: useDropDownProps<T>) {
  const getValueOf = (type: string, val: T | string) => {
    if (type === "icon" && val) {
      return iconChamp && typeof val != "string" && val[iconChamp as keyof T];
    }
    if (type === "text" && val) {
      return indexChamp && typeof val != "string"
        ? val[indexChamp as keyof T]
        : val;
    }
    return "";
  };
  const [myValue, setValue] = useState(value);
  const [inputValue, setInputValue] = useState(getValueOf("text", value));
  const [iconValue, setIconValue] = useState(getValueOf("icon", value));
  const [selectedIndex, setSelectedIndex] = useState(-2);
  const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false);
  console.log(options, myValue);
  // get the selected value and apply it to input value.

  // const getOptionsFromObject = (
  //   itemsToConvert: (T | string | number | readonly string[] | undefined)[],
  //   indexChamp: string,
  // ) => {
  //   return itemsToConvert.map((option) =>
  //     getObjectValue
  //       ? getObjectValue(option as T | string, indexChamp as keyof T)
  //       : (option as string),
  //   );
  // };

  // function getObjectValue<T>(
  //   item: T | string,
  //   indexChamp: keyof T,
  // ): string | T {
  //   if (item && typeof item === "object") {
  //     return item[indexChamp] as T;
  //   } else {
  //     return item as string;
  //   }
  // }

  const onLocalChange = () => {
    const newValue = ref.current!.value.trim();
    setInputValue(newValue);
  };

  const handleSuggestSelect = (el: SetStateAction<string | T>) => {
    setValue(el);
    const newInputValue = getValueOf("text", el as T | string);
    setInputValue(newInputValue);
    console.log(inputValue);
    const newIcon = getValueOf("icon", el as T | string);
    console.log("newicon", typeof newIcon);
    setIconValue(newIcon);

    focus();
    setSelectedIndex(-2);
    setIsSuggestionsOpen(false);
  };

  const toggleMenu = (val: boolean) => setIsSuggestionsOpen(val);

  return {
    inputValue,
    iconValue,
    selectedIndex,
    onLocalChange,
    handleSuggestSelect,
    toggleMenu,
    isSuggestionsOpen,
  };
}

export default useDropDownField;
