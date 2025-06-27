import { APIKey } from "@/constans/api";
import { get } from "../axiousInstance";
import { WeatherResponse } from "./type";
import { londonWeatherMocks } from "@/mock/getDataByCityMock/getDataByCityMock";

export async function getDataByCity(cityName: string): Promise<WeatherResponse[]> {
  if (APIKey) {
    return await get<WeatherResponse, any>(`/geo/1.0/direct?q=${cityName}&limit=3&appid=${APIKey}`);
  } else {
    return new Promise<WeatherResponse[]>((resolve) => {
      setTimeout(() => {
        resolve(londonWeatherMocks);
      }, 1000);
    });
  }
}
