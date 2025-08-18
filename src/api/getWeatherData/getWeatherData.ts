import axios from "axios";
import { WeatherResponse } from "./types";
import { getWeather } from "../axiousInstance";
import { weatherApiKey } from "@/share/constans/api";

export const getWeatherData = async (lat: string, lon: string): Promise<WeatherResponse> => {
  const res = await getWeather(`/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}`);
  if (!res) throw new Error("Empty response");
  return res.data;
};
