import React, { Component } from 'react'
import FirstBlock from './FirstBlock';
import SecondBlock from './SecondBlock';
import ThirdBlock from './ThirdBlock';
class Container extends Component {
  render() {
    return (
      <div className="container">
        <FirstBlock />
        <SecondBlock />
        <ThirdBlock />
      </div>
    )
  }
}

export default Container