import { SearchButton, InputWithButton } from "@ui/forms";
import { TInputWithButtonProps } from "../Input/InputWithButton/InputWithButton";

const SearchBar = ({ ...rest }: TInputWithButtonProps) => {
  return (
    <section>
      <InputWithButton
        type="text"
        placeholder="Buscar..."
        autoComplete="off"
        reverse
        {...rest}
      >
        <SearchButton className="gwk-text-text-black" />
      </InputWithButton>
    </section>
  );
};

export default SearchBar;
