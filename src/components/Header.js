import React, { Component } from 'react'
import { white } from '../shared/styles/colors'

class Header extends Component {
  render() {
    return (
      <header>
        <span style={{
          position: 'absolute',
          top: 0,
          left: 0,
          padding: 10
        }}>ethan <b style={{ fontSize: 17 }}>haynes</b></span>
        <span style={{
          position: 'absolute',
          top: 2,
          right: 0,
          padding: 10
        }}>
          <div style={{ width: 25, margin: 3, backgroundColor: white, height: 2 }}/>
          <div style={{ width: 25, margin: 3, backgroundColor: white, height: 2 }}/>
          <div style={{ width: 25, margin: 3, backgroundColor: white, height: 2 }}/>
        </span>
      </header>
    )
  }
}

export default Header
