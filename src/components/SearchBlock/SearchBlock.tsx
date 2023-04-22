import React from "react";
import { Outlet } from "react-router-dom";
import "./searchBlock.css";
import { GrSearch } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { TrackForSearch } from "../../types/Track";
interface SearchBlockProps {
  itemsArrayChange: (result: Array<TrackForSearch>) => void;
  value: string;
  handlerChange: (event: string) => void;
  trackSearch: (inputValue: string) => Promise<void>;
}
function SearchBlock(props: SearchBlockProps) {
  const enabled = props.value.length > 0;
  const navigate = useNavigate();

  return (
    <>
      <header id="home-page">
        <Link to={"/"}>
          <button
            onClick={() => {
              //запрос по методу searchTrack с записью результата в state компонента App
              props.handlerChange("");
              props.itemsArrayChange([]);
            }}
            className="home-page-button"
          >
            Главная страница
          </button>
        </Link>
      </header>
      <div className="search-block">
        <form className="search-form">
          <input
            value={props.value}
            onChange={(event) => {
              //при изменении ввода value попадает в поле searchblock
              props.handlerChange(event.target.value);
            }}
            //при нажатии enter value попадает в поле searchblock и результат запроса searchTrack попадает в state App
            onKeyDown={(e: any) => {
              if (e.key === "Enter") {
                e.preventDefault();
                //при изменении ввода value попадает в поле searchblock
                props.handlerChange(props.value);
                if (props.value === "") {
                  return;
                } else {
                  props.trackSearch(props.value).then((res) => {
                    navigate("/");
                  });
                }
              }
            }}
            type="search"
            name="search"
            placeholder="Поиск любимой песни"
            className="search-input"
          ></input>
        </form>
        <button
          disabled={!enabled}
          onClick={() => {
            //запрос по методу searchTrack с записью результата в state компонента App
            props.trackSearch(props.value).then((res) => {
              navigate("/");
            });
          }}
          className="search-icon"
        >
          <GrSearch />
        </button>
      </div>
      <Outlet />
    </>
  );
}
export default SearchBlock;
