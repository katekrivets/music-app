import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import './searchBlock.css';
import search from './search.png';
class SearchBlock extends Component {
  render() {
    return (
      <>
        <header className="search-block">
          <form className='search-form'>
            <input placeholder="Enter your search term..." type="search" name="search" className='search-input'></input>
          </form>
          <button className='search-icon'>
            <img src={search} alt='search button' />
          </button>
        </header>
        <Outlet />
      </>
    )
  }
}


export default SearchBlock