import style from "./Header.module.scss";
import { Search } from "../Search/Search";
import { AlignRightOutlined } from "@ant-design/icons";

export const Header = () => {
  return (
    <header className={style.wrap}>
      <div className="container-big">
        <div className={`inner ${style.inner}`}>
          <div style={{ width: "200px" }}>
            <img style={{ width: "inherit" }} src="/public/assets/images/logo.png" alt="Logo" />
          </div>
          <div>
            <Search />
          </div>
          <div style={{ width: "100px" }}>
            <AlignRightOutlined />
          </div>
        </div>
      </div>
    </header>
  );
};
