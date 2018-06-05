import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faCoffee from '@fortawesome/fontawesome-free-solid'
import faYoutube from '@fortawesome/fontawesome-free-brands/faYoutube'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin'
import { app as appStyle } from '../styles/app'
import { white, gray } from '../shared/styles/colors'
import Header from './Header'
import Footer from './Footer'
import Container from './Container'

class App extends Component {
  render() {
    return (
      <div style={appStyle}>
        <Header/>
        <div style={{ flex: '1 0 auto' }}>
          <span>full stack developer</span>
        </div>
        <div style={{
          position: 'absolute',
          top: '50%',
          right: 0,
        }}>
        <div style={{
          display:'flex',
          justifyContent: 'flex-end',
          padding: '0 10px'
        }}>
          <span style={{ width: 35, margin: 3, backgroundColor: white, height: 2 }}/>
        </div>
        <div style={{
          display:'flex',
          justifyContent: 'flex-end',
          padding: '0 10px',
        }}>
          <span style={{ width: 15, margin: 3, backgroundColor: white, height: 2 }}/>
        </div>
        <div style={{
          display:'flex',
          justifyContent: 'flex-end',
          padding: '0 10px'
        }}>
          <span style={{ width: 15, margin: 3, backgroundColor: white, height: 2 }}/>
        </div>
        <div style={{
          display:'flex',
          justifyContent: 'flex-end',
          padding: '0 10px'
        }}>
          <span style={{ width: 15, margin: 3, backgroundColor: white, height: 2 }}/>
        </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default App
