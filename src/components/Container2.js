import React, { Component } from 'react'
import Radium from 'radium'

class Container extends Component {
  render() {
    return (
      <div style={{ flex: '1 0 auto', ...this.props.style }}>
        <div>full stack developer</div>
        <div>full stack developer</div>
        <div>full stack developer</div>
        <div>full stack developer</div>
        <div>full stack developer</div>
        <div>full stack developer</div>
      </div>
    )
  }
}

export default Radium(Container)
