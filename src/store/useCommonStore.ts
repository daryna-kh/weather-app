import { ForecastResponse } from "@/api/getForecastData/types";
import { WeatherResponse } from "@/api/getWeatherData/types";
import { OptionsType } from "@/components/Search/types";
import { TempUnit } from "@/global";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface CommonState {
  location: OptionsType | null;
  currentWeatherData: WeatherResponse | null;
  forecastData: ForecastResponse | null;
  tempUnit: TempUnit;
  setLocation: (location: OptionsType) => void;
  setCurrentWeatherData: (data: WeatherResponse) => void;
  setForecastData: (data: ForecastResponse) => void;
  setTempUnit: (unit: TempUnit) => void;
}

export const useCommonStore = create<CommonState>()(
  devtools(
    (set) => ({
      location: null,
      currentWeatherData: null,
      forecastData: null,
      tempUnit: "F",
      setLocation: (location) => set({ location }),
      setCurrentWeatherData: (data) =>
        set(() => ({
          currentWeatherData: data,
        })),
      setForecastData: (data) =>
        set(() => ({
          forecastData: data,
        })),
      setTempUnit: (unit) => set({ tempUnit: unit }),
    }),
    {
      name: "CommonStore",
    }
  )
);
