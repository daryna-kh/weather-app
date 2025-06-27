import { getCitiesList } from "@/api/getCitiesList/getCitiesList";
import { getDataByCity } from "@/api/getDataByCity/getDataByCity";
import { WeatherResponse } from "@/api/getDataByCity/type";
import { CityType } from "@/mock/city/types";
import { cleanString } from "@/util/cleanString";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export const useSearch = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [debounceValue, setDebounceValue] = useState<string>("");
  const [currentCityData, setCurrentCityData] = useState<WeatherResponse[] | null>();

  const fetchSuggestions = async (val: string) => {
    try {
      const responce = await getCitiesList(val);
      return responce;
    } catch (err) {
      console.warn("Can not get cities list", err);
      return null;
    }
  };

  const {
    data: suggestion = [],
    isFetching,
    isError,
  } = useQuery<CityType[] | null>({
    queryKey: ["suggestion", debounceValue],
    queryFn: () => fetchSuggestions(debounceValue),
    enabled: debounceValue.length >= 2,
    staleTime: 5 * 60 * 1000,
    placeholderData: (prevData) => prevData,
  });

  const getFilteredOptions = (): OptionsType[] => {
    if (isFetching) {
      return [{ value: "Searching...", disabled: true }];
    }

    if (isError || !suggestion) {
      return [{ value: "Error fetching data", disabled: true }];
    }

    return suggestion.filter((item) => cleanString(item.name).includes(cleanString(debounceValue))).map((item) => ({ value: item.name }));
  };

  const handleSelect = async (val: string, option: OptionsType) => {
    const responce = await getDataByCity(val);
    setCurrentCityData(responce);
  };

  useEffect(() => {
    const handleInputTimeout = setTimeout(() => {
      setDebounceValue(inputValue);
    }, 500);

    return () => clearTimeout(handleInputTimeout);
  }, [inputValue]);

  return { getFilteredOptions, setInputValue, handleSelect };
};
