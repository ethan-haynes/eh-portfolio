import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faYoutube from '@fortawesome/fontawesome-free-brands/faYoutube'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin'
import { gray } from '../shared/styles/colors'

class Footer extends Component {
  render() {
    return (
      <footer>
        <span style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          padding: 10
        }}>
          <span style={{ color: gray.light, fontSize: 13 }}>&copy; 2018 ethanhaynes.herokuapp.com</span>
        </span>
        <span style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          padding: 10
        }}>
          <FontAwesomeIcon style={{ padding: '0 2px' }} icon={faYoutube} />
          <FontAwesomeIcon style={{ padding: '0 2px' }} icon={faGithub} />
          <FontAwesomeIcon style={{ padding: '0 2px' }} icon={faLinkedin} />
        </span>
      </footer>
    )
  }
}

export default Footer
