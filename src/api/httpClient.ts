import axios from "axios";

const cli = axios.create({
  baseURL: "https://api.openweathermap.org",
});

const APIKey = "";

export { cli, APIKey };
