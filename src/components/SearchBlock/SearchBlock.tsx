import React from "react";
import { Outlet } from "react-router-dom";
import "./searchBlock.css";
import { GrSearch } from "react-icons/gr";
import { searchTrack } from "../../api";
import { useNavigate } from "react-router-dom";

function SearchBlock(props: any) {
  const enabled = props.value.length > 0;
  const navigate = useNavigate();

  return (
    <>
      <header className="search-block">
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
                searchTrack(props.value)
                  .then((res) => res.recordings)
                  .then((result) => {
                    props.itemsArrayChange(result);

                    navigate("/");
                  });
              }
            }}
            type="search"
            name="search"
            className="search-input"
          ></input>
        </form>
        <button
          disabled={!enabled}
          onClick={() => {
            //запрос по методу searchTrack с записью результата в state компонента App
            searchTrack(props.value)
              .then((res) => res.recordings)
              .then((result) => {
                props.itemsArrayChange(result);

                navigate("/");
              });
          }}
          className="search-icon"
        >
          <GrSearch />
        </button>
      </header>
      <Outlet />
    </>
  );
}
export default SearchBlock;
