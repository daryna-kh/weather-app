import { getForecastData } from "@/api/getForecastData/getForecastData";
import { ForecastResponse } from "@/api/getForecastData/types";
import { getWeatherData } from "@/api/getWeatherData/getWeatherData";
import { WeatherResponse } from "@/api/getWeatherData/types";
import { useCommonStore } from "@/store/useCommonStore";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useMemo } from "react";

export const useMain = () => {
  const location = useCommonStore((s) => s.location);

  const currentFromStore = useCommonStore((s) => s.currentWeatherData);
  const setCurrent = useCommonStore((s) => s.setCurrentWeatherData);

  const forecastFromStore = useCommonStore((s) => s.forecastData);
  const setForecast = useCommonStore((s) => s.setForecastData);

  const hasCoords = !location?.lat && !location?.lon;
  console.log(location?.lat, location?.lon);

  const {
    data: currentData,
    error: currentError,
    isLoading: isLoadingCurrent,
    isFetching: isFetchingCurrent,
  } = useQuery<WeatherResponse, Error>({
    queryKey: ["weather", "current", location?.lat, location?.lon],
    enabled: hasCoords,
    staleTime: 5 * 60 * 1000,
    queryFn: async () => {
      if (!hasCoords) throw new Error("No location");
      if (!location?.lat || !location?.lon) throw new Error("No location");
      const res = await getWeatherData(location?.lat, location?.lon);
      if (!res) throw new Error("Failed to fetch weather");
      return res;
    },
  });

  const {
    data: forecastData,
    error: forecastError,
    isLoading: isLoadingForecast,
    isFetching: isFetchingForecast,
  } = useQuery<ForecastResponse, Error>({
    queryKey: ["weather", "forecast", location?.lat, location?.lon],
    enabled: hasCoords,
    staleTime: 5 * 60 * 1000,
    queryFn: async () => {
      if (!hasCoords) throw new Error("No location");
      if (!location?.lat || !location?.lon) throw new Error("No location");
      return getForecastData(location?.lat, location?.lon);
    },
  });

  useEffect(() => {
    if (currentData) setCurrent(currentData);
  }, [currentData, setCurrent]);

  useEffect(() => {
    if (forecastData) setForecast(forecastData);
  }, [forecastData, setForecast]);

  const isInitialLoading = useMemo(
    () => (isLoadingCurrent || isLoadingForecast) && !currentFromStore && !forecastFromStore,
    [isLoadingCurrent, isLoadingForecast, currentFromStore, forecastFromStore]
  );

  const bothFailed = useMemo(() => !!currentError && !!forecastError && !currentFromStore && !forecastFromStore, [currentError, forecastError, currentFromStore, forecastFromStore]);

  return { hasCoords, isInitialLoading, bothFailed };
};
