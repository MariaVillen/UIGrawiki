import SuggestDropDown from "./SuggestDropDown";
import SlipButton from "../SlipButton/SlipButton";
import { InputHTMLAttributes, ReactNode, useRef } from "react";
import useDropDownField from "./useDropDownField";
import { cn } from "@ui/utils";

export type dropdownFieldProps<T> = InputHTMLAttributes<HTMLInputElement> & {
  options: (T | string | number | readonly string[] | undefined)[];
  component?: ((el: T) => ReactNode | JSX.Element) | undefined;
};

function DropdownField<T>({
  options,
  value,
  component: Component,
  ...rest
}: dropdownFieldProps<T>) {
  const dropDownRef = useRef<HTMLInputElement | null>(null);

  const { selectedIndex, handleSuggestSelect, isSuggestionsOpen, toggleMenu } =
    useDropDownField({
      value: value,
      filterChamp: "",
      options: options,
      onChange: (val) => console.log(val),
      onError: (error) => console.log(error),
    });

  return (
    <>
      <SlipButton
        className={cn(
          "gwk-w-36 gwk-shadow-input gwk-rounded-rdlg mobile:gwk-w-80",
          isSuggestionsOpen &&
            " gwk-border-x gwk-border-t gwk-border-border-primary gwk-rounded-b-[0px] gwk-shadow-input-side",
        )}
        ref={dropDownRef}
        {...rest}
        isOpened={isSuggestionsOpen}
        onToggle={toggleMenu}
      />
      {isSuggestionsOpen && (
        <SuggestDropDown
          className=" gwk-overflow-hidden gwk-absolute gwk-bg-surface-triarty-white gwk-w-36 gwk-rounded-b-rdlg mobile:gwk-w-80 gwk-border-x gwk-border-b gwk-border-border-primary"
          options={options}
          nameList={"categories"}
          selectedItem={selectedIndex}
          setComponent={Component}
          onSelect={handleSuggestSelect}
        />
      )}
    </>
  );
}

export default DropdownField;
