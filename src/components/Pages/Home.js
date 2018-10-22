import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faPython from '@fortawesome/fontawesome-free-brands/faPython'
import faReact from '@fortawesome/fontawesome-free-brands/faReact'
import faNodeJs from '@fortawesome/fontawesome-free-brands/faNodeJs'
import faJsSquare from '@fortawesome/fontawesome-free-brands/faJsSquare'
import faDocker from '@fortawesome/fontawesome-free-brands/faDocker'
import Radium from 'radium'
import { white, gray } from '../../shared/styles/colors'

class FrontEnd extends Component {
  render() {
    return (
      <div style={{ ...this.props.style }}>
        <div style={{ position: 'relative' }}>
          <div style={{ fontSize: 15, top: '30vh', width: '80vw', position: 'absolute' }}>
            <div style={{ fontSize: 120 }}>
              hello, world
            </div>
            <div style={{ height: 1, width: '50vw', background: white, margin: '15px 0' }}/>
            <div style={{ width: '50%' }}>
            Full-Stack engineer with detailed technical knowledge and hands-on experience in multiple layers of the software stack
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Radium(FrontEnd)
