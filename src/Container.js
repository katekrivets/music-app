import React, { Component } from 'react'
import Firstbl from './Firstbl';
import Secondbl from './Secondbl';
import Thirdbl from './Thirdbl';
class Container extends Component {
  render() {
    return (
      <div className="container">
        <Firstbl />
        <Secondbl />
        <Thirdbl />
      </div>
    )
  }
}

export default Container