import { cli, APIKey } from "./httpClient";

export async function getGeolocation(cityName: string) {
  type getGeolocationResponse = {};

  const response = await cli.get<getGeolocationResponse>(`/geo/1.0/direct?q=${cityName}&limit=3&appid=${APIKey}`);

  return response;
}
