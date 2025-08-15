import { WeatherResponse } from "@/api/getDataByCity/type";
import { OptionsType } from "@/components/Search/types";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface CommonState {
  location: OptionsType | null;
  currentWeatherData: WeatherResponse | null;
  setLocation: (location: OptionsType) => void;
  setCurrentWeatherData: (data: WeatherResponse) => void;
}

export const useCommonStore = create<CommonState>()(
  devtools(
    (set) => ({
      currentWeatherData: null,
      setLocation: (location) => set({ location }),
      setCurrentWeatherData: (data) =>
        set(() => ({
          currentWeatherData: data,
        })),
    }),
    {
      name: "CommonStore",
    }
  )
);
