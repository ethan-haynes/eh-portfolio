import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faPython from '@fortawesome/fontawesome-free-brands/faPython'
import faReact from '@fortawesome/fontawesome-free-brands/faReact'
import faNodeJs from '@fortawesome/fontawesome-free-brands/faNodeJs'
import faJsSquare from '@fortawesome/fontawesome-free-brands/faJsSquare'
import faDocker from '@fortawesome/fontawesome-free-brands/faDocker'
import Radium from 'radium'

class BackEnd extends Component {
  render() {
    return (
      <div style={{ ...this.props.style }}>
        <div style={{ position: 'relative' }}>
          <div style={{ fontSize: 25, top: '30vh', width: '80vw', position: 'absolute' }}>
            <div style={{ fontSize: 75 }}>
              back-end
            </div>
            <div>
              <FontAwesomeIcon style={{ padding: '0 2px' }} icon={faPython} />
              faPython
            </div>
            <dif>
              <FontAwesomeIcon style={{ padding: '0 2px' }} icon={faNodeJs} />
              faNodeJs
            </dif>
          </div>
        </div>
      </div>
    )
  }
}

export default Radium(BackEnd)
