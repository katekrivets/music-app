import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import './searchBlock.css';
class SearchBlock extends Component {
  render() {
    return (
      <>
        <header className="search-block">
          <form className='search-form'>
            <p>
              <input placeholder="Enter your search term..." type="search"  name="search" className='search-input'></input>
            </p>
          </form>
          <button className='search-icon'></button>
        </header>
        <Outlet />
      </>
    )
  }
}


export default SearchBlock