import { Search } from "../Search/Search";
import { TemperatureSwitch } from "../TemperatureSwitch/TemperatureSwitch";
import style from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={style.wrap}>
      <div className={`inner ${style.inner}`}>
        <div style={{ width: "200px" }}>
          <img style={{ width: "inherit" }} src="/public/assets/images/logo.png" alt="Logo" />
        </div>
        <Search />
        <TemperatureSwitch />
      </div>
    </header>
  );
};
