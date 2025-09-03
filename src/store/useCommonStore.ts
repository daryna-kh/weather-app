import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { CommonState } from "./type";

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
