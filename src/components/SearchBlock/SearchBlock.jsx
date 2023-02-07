import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import "./searchBlock.css";
import { GrSearch } from "react-icons/gr";
class SearchBlock extends Component {
  render() {
    return (
      <>
        <header className="search-block">
          <form className="search-form">
            <input
              placeholder="Enter your search term..."
              type="search"
              name="search"
              className="search-input"
            ></input>
          </form>
          <button className="search-icon">
            <GrSearch />
          </button>
        </header>
        <Outlet />
      </>
    );
  }
}

export default SearchBlock;
