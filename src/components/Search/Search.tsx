import { AutoComplete } from "antd";
import { useSearch } from "./useSearch";
import { getCurrentPosition } from "@/api/getCurrentPosition/getCurrentPosition";
import style from "./Search.module.scss";
import { SearchIcon } from "@/share/icons/SearchIcon";

export const Search = () => {
  const { getFilteredOptions, setInputValue, handleSelect, handleKeyEventSelect } = useSearch();

  function handleFocus() {
    getCurrentPosition();
  }

  const options = getFilteredOptions();

  return (
    <div className={style.searchContainer}>
      <SearchIcon name={style.icon} />
      <AutoComplete
        options={options}
        onSearch={setInputValue}
        onFocus={handleFocus}
        onSelect={(value, option) => handleSelect(value, option)}
        onInputKeyDown={(e) => handleKeyEventSelect(e, options)}
        placeholder="Search for a city..."
      />
    </div>
  );
};
