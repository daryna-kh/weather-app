import { AutoComplete } from "antd";
import { useSearch } from "./useSearch";
import { getCurrentPosition } from "@/api/getCurrentPosition/getCurrentPosition";

export const Search = () => {
  const { getFilteredOptions, setInputValue, handleSelect } = useSearch();

  function handleFocus() {
    getCurrentPosition();
  }

  return (
    <AutoComplete
      style={{ width: 450, color: "#000000" }}
      options={getFilteredOptions()}
      onSearch={setInputValue}
      onFocus={handleFocus}
      onSelect={(option) => handleSelect(option)}
      placeholder="Search..."
    />
  );
};
