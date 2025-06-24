import { cleanString } from "@/util/cleanString";
import { useSearch } from "./useSearch";
import { AutoComplete } from "antd";
import { city } from "@/mock/city/city";
import { useMemo } from "react";

export const Search = () => {
  const { register, onSubmit } = useSearch();
  const options = useMemo(() => {
    return city.map((el) => ({
      value: el.name,
      label: `${el.name}`,
    }));
  }, [city]);

  return (
    <form onSubmit={onSubmit}>
      <AutoComplete
        {...register("location")}
        style={{ width: 450, color: "#000000" }}
        options={options}
        placeholder="Search City"
        filterOption={(inputValue, option) => option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
      />
    </form>
  );
};
