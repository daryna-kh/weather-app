import { ForecastResponse } from "@/api/getForecastData/types";
import { WeatherResponse } from "@/api/getWeatherData/types";
import { OptionsType } from "@/components/Search/types";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface CommonState {
  location: OptionsType | null;
  currentWeatherData: WeatherResponse | null;
  forecastData: ForecastResponse | null;
  setLocation: (location: OptionsType) => void;
  setCurrentWeatherData: (data: WeatherResponse) => void;
  setForecastData: (data: ForecastResponse) => void;
}

export const useCommonStore = create<CommonState>()(
  devtools(
    (set) => ({
      location: null,
      currentWeatherData: null,
      forecastData: null,
      setLocation: (location) => set({ location }),
      setCurrentWeatherData: (data) =>
        set(() => ({
          currentWeatherData: data,
        })),
      setForecastData: (data) =>
        set(() => ({
          forecastData: data,
        })),
    }),
    {
      name: "CommonStore",
    }
  )
);
