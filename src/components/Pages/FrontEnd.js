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
  state = { selected: 0 }

  options = [
    'HTML/CSS',
    'JavaScript & Frameworks',
    'Testing',
    'Build & Configuration'
  ]

  details = [
    'Details about HTML/CSS',
    'Details about JavaScript & Frameworks',
    'Details about Testing',
    'Details about Build & Configuration'
  ]

  render() {
    return (
      <div style={{ ...this.props.style }}>
        <div style={{ position: 'relative' }}>
          <div style={{ fontSize: 15, top: '30vh', width: '80vw', position: 'absolute' }}>
            <div style={{ fontSize: 75 }}>
              front-end
            </div>
            <div style={{display : 'flex'}}>
              <div style={{ height: 1, width: '5vw', background: white, margin: '15px 0' }}/>
              <FontAwesomeIcon style={{ fontSize: 25, margin: '0 7px' }} icon={faReact} />
              <div style={{ height: 1, width: '5vw', background: white, margin: '15px 0' }}/>
              <FontAwesomeIcon style={{ fontSize: 25, margin: '0 7px' }} icon={faJsSquare} />
              <div style={{ height: 1, width: '40vw', background: white, margin: '15px 0' }}/>
            </div>
            <div style={{ width: '50%', display: 'flex' }}>
              <div>
                {this.options.map((option, index) =>
                  <div
                    style={{
                      borderLeft: this.state.selected === index
                        ? `2px solid ${white}` : '2px solid rgb(247, 241, 236, .5)',
                      padding: 10
                    }}
                    onClick={() => this.setState({ selected: index })}
                  >
                    {option}
                  </div>
                )}
              </div>
              <div>
                {this.details[this.state.selected]}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Radium(FrontEnd)
