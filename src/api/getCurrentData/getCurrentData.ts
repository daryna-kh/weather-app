import { APIKey, cli } from "../httpClient";
import { WeatherResponse } from "./type";

export async function getGeolocation(cityName: string) {
  const response = await cli.get<WeatherResponse, any>(`/geo/1.0/direct?q=${cityName}&limit=3&appid=${APIKey}`);

  return response;
}
