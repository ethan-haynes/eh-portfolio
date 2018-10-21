import React, { Component } from 'react'
import Radium from 'radium'

class Container extends Component {
  render() {
    return (
      <div style={{ flex: '1 0 auto', ...this.props.style }}>
        <div>This is a page with stuff</div>
        <div>This is a page with stuff</div>
        <div>This is a page with stuff</div>
        <div>This is a page with stuff</div>
      </div>
    )
  }
}

export default Radium(Container)
