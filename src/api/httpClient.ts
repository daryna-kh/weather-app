import axios from "axios";

const cli = axios.create({
  baseURL: "https://api.openweathermap.org",
});

const APIKey = "77cf66b280c7387f45cf6cb166b96e28";

export { cli, APIKey };
