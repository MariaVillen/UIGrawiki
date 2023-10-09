import { useState } from "react";

export type useDropDownProps<T> = {
  value: T | string;
  filterChamp?: string;
  options: (T | string)[];
  onChange: (value: T) => void;
  onError?: (error: string) => void;
};

function useDropDownField<T>({ value, options }: useDropDownProps<T>) {
  const [myValue, setValue] = useState(value);
  const [selectedIndex, setSelectedIndex] = useState(-2);
  const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false);
  // get the selected value and apply it to input value.

  const getOptionsFromObject = (
    itemsToConvert: (T | string | number | readonly string[] | undefined)[],
    filterChamp: string,
  ) => {
    return itemsToConvert.map((option) =>
      getObjectValue
        ? getObjectValue(option as T | string, filterChamp as keyof T)
        : (option as string),
    );
  };

  console.log("opciones ", getOptionsFromObject(options, "text"));

  function getObjectValue<T>(
    item: T | string,
    filterChamp: keyof T,
  ): string | T {
    console.log(item);
    if (item && typeof item === "object") {
      console.log(item[filterChamp]);
      return item[filterChamp] as T;
    } else {
      return item as string;
    }
  }

  const handleSuggestSelect = (index: number) => {
    setValue(options[index]);
    focus();
    setSelectedIndex(-2);
    setIsSuggestionsOpen(false);
  };

  return {
    myValue,
    selectedIndex,
    handleSuggestSelect,
    isSuggestionsOpen,
  };
}

export default useDropDownField;
