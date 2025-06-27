import { AutoComplete } from "antd";
import { useSearch } from "./useSearch";

export const Search = () => {
  const { getFilteredOptions, setInputValue, handleSelect } = useSearch();

  return (
    <AutoComplete style={{ width: 450, color: "#000000" }} options={getFilteredOptions()} onSearch={setInputValue} onSelect={(val, option) => handleSelect(val, option)} placeholder="Search City" />
  );
};
