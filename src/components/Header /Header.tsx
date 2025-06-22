import { Search } from "../Search/Search";

export const Header = () => {
  return (
    <header>
      <div className="container-big">
        <div className="inner">
          <div>
            <img src="" alt="Logo" />
          </div>
          <div>
            <Search />
          </div>
          <div></div>
        </div>
      </div>
    </header>
  );
};
