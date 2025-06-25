import { AutoComplete } from "antd";
import { useSearch } from "./useSearch";

export const Search = () => {
  const { getFilteredOptions, setInputValue } = useSearch();

  return <AutoComplete style={{ width: 450, color: "#000000" }} options={getFilteredOptions()} onSearch={setInputValue} placeholder="Search City" />;
};
