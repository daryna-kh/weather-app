import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.openweathermap.org",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const { delete: del, get, post, put } = axiosInstance;
