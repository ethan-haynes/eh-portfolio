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
          <div style={{ fontSize: 25, top: '30vh', width: '80vw', position: 'absolute' }}>
            <div style={{ fontSize: 75 }}>
              front-end
              <FontAwesomeIcon style={{ fontSize: 35, margin: '0 4px' }} icon={faReact} />
              <FontAwesomeIcon style={{ fontSize: 35, margin: '0 4px' }} icon={faJsSquare} />
            </div>
            <div>
            words and stuff
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Radium(FrontEnd)
