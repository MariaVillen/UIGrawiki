import { Find } from "@ui/icons";

const SearchBar = () => {
  return (
    <section>
      <div>
        <input type="text" placeholder="Buscar..." autoComplete="off" />
        <Find />
      </div>
    </section>
  );
};

export default SearchBar;
