import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faCoffee from '@fortawesome/fontawesome-free-solid'
import faYoutube from '@fortawesome/fontawesome-free-brands/faYoutube'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin'
import Radium from 'radium'
import { app as appStyle } from '../styles/app'
import { white, gray } from '../shared/styles/colors'
import Header from './Header'
import Footer from './Footer'
import Container from './Container'
import Container2 from './Container2'

const styles = {
  off: {
    transitionDuration: '.5s',
    transitionTimingFunction: 'ease-in',
    position: 'absolute',
    left: '-100vw',
    visibility: 'hidden',
    margin: '0 30px'
  },
  on: {
    transitionDuration: '.5s',
    transitionTimingFunction: 'ease-in',
    position: 'absolute',
    left: 0,
    margin: '0 30px'
  },
  boxOff: {
    // backgroundSize: '100% 200%',
    // backgroundImage: 'linear-gradient(#4F5CC3, rgba(0,0,0,0), #4F5CC3)',
    // transition: 'background-position 1s'
  },
  boxOn: {
    // backgroundSize: '100% 200%',
    // backgroundImage: 'linear-gradient(#4F5CC3, rgba(0,0,0,0), #4F5CC3)',
    // backgroundPosition: '0 -100%',
    // transition: 'background-position 1s'
  }
}

class App extends Component {
  state = { page: 0 }

  updatePage = (page) => this.setState({ page })

  pages = [
    Container,
    Container2,
    Container,
    Container2,
  ]

  render() {
    const background = ((this.state.page % 2) === 0) ? styles.boxOff : styles.boxOn
    return (
      <div style={{...appStyle, ...background}}>
        <Header/>
        <div style={{ display: 'inline-flex' }}>
          {this.pages.map((Page, index) =>
            <Page
              key={index}
              style={(index === this.state.page) ? styles.on : styles.off}
            />
          )}
        </div>
        <div style={{
          position: 'absolute',
          top: '50%',
          right: 0,
        }}>
          {this.pages.map((Page, index) =>
            <div style={{
              display:'flex',
              justifyContent: 'flex-end',
              padding: '0 10px'
            }}>
              <span style={{ width: (index === this.state.page) ? 35 : 25, margin: 3, backgroundColor: white, height: 2 }}/>
            </div>
          )}
        </div>
        <Footer updatePage={this.updatePage} />
      </div>
    )
  }
}

export default Radium(App)
