import { weatherApiKey } from "@/share/constans/api";
import { getWeather } from "../axiousInstance";
import { WeatherResponse } from "./type";
import { londonWeatherMocks } from "@/mock/getDataByCityMock/getDataByCityMock";

export async function getDataByCity(cityName: string): Promise<WeatherResponse[]> {
  if (weatherApiKey) {
    return await getWeather<WeatherResponse, any>(`/geo/1.0/direct?q=${cityName}&limit=3&appid=${weatherApiKey}`);
  } else {
    return new Promise<WeatherResponse[]>((resolve) => {
      setTimeout(() => {
        resolve(londonWeatherMocks);
      }, 1000);
    });
  }
}
