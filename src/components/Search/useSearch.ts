import { getLocationList } from "@/api/getLocationList/getLocationList";
import { ApiLocationType, MockLocationType } from "@/api/getLocationList/types";
import { getCountryById } from "@/mock/country/getCountryById";
import { useCommonStore } from "@/store/useCommonStore";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { OptionsType } from "./types";
import { cleanString } from "@/util";

export const useSearch = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [picked, setPicked] = useState<OptionsType | null>(null);
  const [debounceValue, setDebounceValue] = useState<string>("");

  const setLocation = useCommonStore((state) => state.setLocation);

  const fetchSuggestions = async (val: string) => {
    try {
      return await getLocationList(val);
    } catch (err) {
      console.warn("Can not get cities list", err);
      return null;
    }
  };

  const {
    data: suggestion = null,
    isFetching,
    isError,
  } = useQuery<ApiLocationType | MockLocationType | null>({
    queryKey: ["suggestion", debounceValue],
    queryFn: () => fetchSuggestions(debounceValue),
    enabled: debounceValue.length >= 2,
    staleTime: 5 * 60 * 1000,
    placeholderData: (prevData) => prevData,
  });

  const getFilteredOptions = (): OptionsType[] => {
    if (isFetching) {
      return [{ value: "Searching...", label: "", disabled: true }];
    }

    if (isError || !suggestion) {
      return [{ value: "No results", label: "", disabled: true }];
    }

    let res: OptionsType[];
    switch (suggestion.type) {
      case "api":
        res = suggestion.res.data
          .filter((item) => item.type === "city" && item.address.name.includes(debounceValue))
          .map((item) => ({ value: `${item.lat}-${item.lon}`, label: `${item.address.name}, ${item.display_address}`, lat: item.lat, lon: item.lon }));
        break;
      case "mock":
        res = suggestion.data
          .filter((item) => cleanString(item.name).includes(cleanString(debounceValue)))
          .map((item, i) => ({ value: `${item.name}-${i}`, label: `${item.name}, ${getCountryById(item.country_id)?.name || ""}` }));
        break;
    }
    return res;
  };

  const handleSelect = async (value: any, option: OptionsType) => {
    setInputValue(option.label);
    setPicked(option);
    setLocation(option);
  };

  const handleKeyEventSelect = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>, options: OptionsType[]) => {
    if (e.key === "Enter") {
      const value = e.currentTarget.value;
    }
  };

  useEffect(() => {
    const handleInputTimeout = setTimeout(() => {
      setDebounceValue(inputValue);
    }, 500);

    return () => clearTimeout(handleInputTimeout);
  }, [inputValue]);

  return { inputValue, getFilteredOptions, setInputValue, handleSelect, handleKeyEventSelect };
};
