import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "./searchBlock.css";
import { GrSearch } from "react-icons/gr";
import { searchTrack } from "../../api";

function SearchBlock(props: any) {
  return (
    <>
      <header className="search-block">
        <form className="search-form">
          <input
            value={props.value}
            onChange={(event) => props.handlerChange(event.target.value)} //при изменении ввода value попадает в поле searchblock
            type="search"
            name="search"
            className="search-input"
          ></input>
        </form>
        <button
          onClick={() => {
            //запрос по методу searchTrack с записьюрезультата в state компонента App
            searchTrack(props.value)
              .then((res) => res.recordings)
              .then((result) => props.itemsArrayChange(result));
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
