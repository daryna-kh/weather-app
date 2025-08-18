import { weatherApiKey } from "@/share/constans/api";
import { getWeather } from "../axiousInstance";
import { ForecastResponse } from "./types";

export const getForecastData = async (lat: string, lon: string): Promise<ForecastResponse> => {
  const res = await getWeather(`/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${weatherApiKey}`);
  if (!res) throw new Error("Empty forecast response");
  return res.data;
};
