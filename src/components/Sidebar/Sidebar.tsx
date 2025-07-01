import style from "./Sidebar.module.scss";
import { Search } from "../Search/Search";
import { WeatherCard } from "../WeatherCard/WeatherCard";
import { londonWeatherMocks } from "@/mock/getDataByCityMock/getDataByCityMock";
import { useEffect } from "react";
import { useCommonStore } from "@/store/useCommonStore";
import { getDataByCity } from "@/api/getDataByCity/getDataByCity";

export const Sidebar = () => {
  const city = useCommonStore((state) => state.city);

  const fetchDataByCity = async (city_: string) => {
    const responce = await getDataByCity(city_);
  };

  useEffect(() => {
    fetchDataByCity(city);
  }, [city]);

  return (
    <div className={style.wrap}>
      <div>
        <div className={`inner ${style.inner}`}>
          <div style={{ width: "200px" }}>
            <img style={{ width: "inherit" }} src="/public/assets/images/logo.png" alt="Logo" />
          </div>
          <div>
            <Search />
          </div>
          <div>
            <WeatherCard />
          </div>
        </div>
      </div>
    </div>
  );
};
