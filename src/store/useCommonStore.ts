import { WeatherResponse } from "@/api/getDataByCity/type";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface CommonState {
  city: string;
  currentWeatherData: WeatherResponse | null;
  setCity: (city: string) => void;
  setCurrentWeatherData: (data: WeatherResponse) => void;
}

export const useCommonStore = create<CommonState>()(
  devtools(
    (set) => ({
      city: "",
      currentWeatherData: null,
      setCity: (city: string) => set({ city }),
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
