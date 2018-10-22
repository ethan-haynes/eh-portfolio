import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faPython from '@fortawesome/fontawesome-free-brands/faPython'
import faReact from '@fortawesome/fontawesome-free-brands/faReact'
import faNodeJs from '@fortawesome/fontawesome-free-brands/faNodeJs'
import faJsSquare from '@fortawesome/fontawesome-free-brands/faJsSquare'
import faDocker from '@fortawesome/fontawesome-free-brands/faDocker'
import Radium from 'radium'
import { white, gray } from '../../shared/styles/colors'

class BuildAndDeploy extends Component {
  render() {
    return (
      <div style={{ ...this.props.style }}>
        <div style={{ position: 'relative' }}>
          <div style={{ fontSize: 15, top: '30vh', width: '80vw', position: 'absolute' }}>
            <div style={{ fontSize: 75 }}>
              build & deploy
            </div>
            <div style={{display : 'flex'}}>
              <div style={{ height: 1, width: '5vw', background: white, margin: '15px 0' }}/>
              <FontAwesomeIcon style={{ fontSize: 25, margin: '0 7px' }} icon={faDocker} />
              <div style={{ height: 1, width: '40vw', background: white, margin: '15px 0' }}/>
            </div>
            <div style={{ width: '50%', display: 'flex' }}>
              <div>
                <div style={{ borderLeft: '2px solid rgb(247, 241, 236, .5)', padding: 10 }}> DevOps </div>
                <div style={{ borderLeft: '2px solid rgb(247, 241, 236, .5)', padding: 10 }}> Automation </div>
                <div style={{ borderLeft: `2px solid ${white}`, padding: 10 }}> Build Engineering</div>
                <div style={{ borderLeft: '2px solid rgb(247, 241, 236, .5)', padding: 10 }}> Configuration Management </div>
              </div>
              <div>
                details here
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Radium(BuildAndDeploy)
