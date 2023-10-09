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
    filterChamp: string[],
  ) => {
    return itemsToConvert.map((option) =>
      getObjectValue
        ? getObjectValue(option as T | string, filterChamp as Array<keyof T>)
        : (option as string),
    );
  };

  console.log("opciones ", getOptionsFromObject(options, ["text", "icon"]));

  function getObjectValue<T>(
    item: T | string,
    filterChamp: Array<keyof T>,
  ): string | T {
    if (item && typeof item === "object") {
      const filteredObject: Partial<T> = {};

      filterChamp.forEach((key) => {
        if (Object.prototype.hasOwnProperty.call(item, key)) {
          filteredObject[key] = item[key];
        }
      });

      return filteredObject as T;
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

// const getOptionsFromObject = (
//     itemsToConvert: (T | string | number | readonly string[] | undefined)[],
//     filterChamp: string[],
//   ) => {
//     return itemsToConvert.map((option) =>
//       getObjectValue
//         ? getObjectValue(option as T | string, filterChamp as Array<keyof T>)
//         : (option as string),
//     );
//   };

//   console.log("opciones ", getOptionsFromObject(options, ["text"]));

//   function getObjectValue<T>(
//     item: T | string,
//     filterChamp: Array<keyof T>,
//   ): string | T {
//     console.log(item);
//     if (item && typeof item === "object") {
//       console.log(item[filterChamp[0]]);
//       return item[filterChamp[0]] as T;
//     } else {
//       return item as string;
//     }
//   }
