import SuggestDropDown from "./SuggestDropDown";
import SlipButton from "../SlipButton/SlipButton";
import { InputHTMLAttributes, useRef } from "react";
import useDropDownField from "./useDropDownField";

export type dropdownFieldProps<T> = InputHTMLAttributes<HTMLInputElement> & {
  options: (T | string | number | readonly string[] | undefined)[];
};

function DropdownField<T>({ options, value, ...rest }: dropdownFieldProps<T>) {
  const dropDownRef = useRef<HTMLInputElement | null>(null);

  const { selectedIndex, handleSuggestSelect } = useDropDownField({
    value: value,
    filterChamp: "",
    options: options,
    onChange: (val) => console.log(val),
    onError: (error) => console.log(error),
  });
  return (
    <div>
      <SlipButton ref={dropDownRef} {...rest} />
      <SuggestDropDown
        options={["1", "22", "3"]}
        nameList={"categories"}
        selectedItem={selectedIndex}
        onSelect={handleSuggestSelect}
      />
    </div>
  );
}

export default DropdownField;
