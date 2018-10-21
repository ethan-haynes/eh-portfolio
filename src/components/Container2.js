import React, { Component } from 'react'
import Radium from 'radium'

class Container extends Component {
  render() {
    return (
      <div style={{ ...this.props.style }}>
        <div style={{ position: 'relative' }}>
          <div style={{ fontSize: 30, top: '30vh', width: '80vw', position: 'absolute' }}>
            This is another Page with some stuff in it lsdkndsalkn ljsadkladskjalsd adsjkasdklj
          </div>
        </div>
      </div>
    )
  }
}

export default Radium(Container)
