import { Search } from "../Search/Search";
import style from "./Sidebar.module.scss";

export const Sidebar = () => {
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
        </div>
      </div>
    </div>
  );
};
