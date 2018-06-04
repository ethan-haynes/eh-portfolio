import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faCoffee from '@fortawesome/fontawesome-free-solid'
import faYoutube from '@fortawesome/fontawesome-free-brands/faYoutube'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin'
import { app as appStyle } from './styles/app'

class App extends Component {
  render() {
    return (
      <div style={appStyle}>
        <header>
          <span>ethan haynes</span>
        </header>
        <span>full stack developer</span>
        <footer style={{ bottom: 0 }}>
          <FontAwesomeIcon icon={faYoutube} />
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faLinkedin} />
        </footer>
      </div>
    )
  }
}

export default App
