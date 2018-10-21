import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faChevronDown from '@fortawesome/fontawesome-free-solid/faChevronDown'
import faYoutube from '@fortawesome/fontawesome-free-brands/faYoutube'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin'
import Radium from 'radium'
import { gray, white } from '../shared/styles/colors'

var transitionDownKeyframes = Radium.keyframes({
    '0%': { padding: 0 },
    '75%': { padding: 15 },
    '100%': { padding: 0 },
})

var styles = {
  off: {
    color: '#FF5722',
    transitionDuration: '.2s',
    transitionTimingFunction: 'ease-out',
  },
  on: {
    color: '#4CAF50',
    transitionDuration: '.2s',
    height: 100,
    transitionTimingFunction: 'ease-out',
  },
  pageTransitionDown: {
      animationDuration: '1s',
      animationName: transitionDownKeyframes
  },
  pageTransitionUp: {
      animationDuration: '1s',
      animationName: transitionDownKeyframes
  }
}

class Footer extends Component {
  state = { pageDown: true, transition: false, page: 0, pages: [0,1,2,3] }

  isPageDown = ({ page, pageDown } = this.state) => {
    switch (page) {
      case 0:
        return true
      case 3:
        return true
      default:
        return pageDown
    }
  }

  toggle = () => {
    const { page, pageDown, transition } = this.state
    this.setState({ page: pageDown ? (page + 1) : (page - 1), pageDown: this.isPageDown(), transition: true },
      () => setTimeout(()=>this.setState({ transition: false }), 1000)
    )
  }
  render() {
    var transition = this.state.transition
      ? this.state.pageDown ? styles.pageTransitionDown : styles.pageTransitionUp
      : {} // clear animation

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
          left: '50%',
          padding: 10
        }}>
          <div style={{ border: `2px solid ${white}`, borderRadius: 25, height: 30, width: 'auto' }}>
            <div onClick={this.toggle} style={transition}>
              <FontAwesomeIcon onClick={this.toggle} style={{ padding: '0 2px' }} icon={faChevronDown} />
            </div>
          </div>
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

export default Radium(Footer)
