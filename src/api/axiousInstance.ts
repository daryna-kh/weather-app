import axios from "axios";

const weatherAPI = axios.create({
  baseURL: "https://api.openweathermap.org",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

const locationAPI = axios.create({
  baseURL: "https://api.locationiq.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const { delete: deleteWeather, get: getWeather, post: postWeather, put: putWeather } = weatherAPI;

export const { delete: deleteLocation, get: getLocation, post: postLocation, put: putLocation } = locationAPI;
