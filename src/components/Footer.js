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

var transitionUpKeyframes = Radium.keyframes({
    '0%': { padding: 0 },
    '75%': { padding: '0 15px', marginTop: '-12px' },
    '100%': { padding: 0 },
})

var styles = {
  down: {
    transitionDuration: '.2s',
    transitionDelay: '1s',
    transitionTimingFunction: 'ease-in',
  },
  up: {
    transitionDuration: '.2s',
    transitionDelay: '1s',
    height: 40,
    transform: 'rotate(180deg)',
    transitionTimingFunction: 'ease-in',
  },
  pageTransitionDown: {
      animationDuration: '1s',
      animationName: transitionDownKeyframes
  },
  pageTransitionUp: {
      animationDuration: '1s',
      animationName: transitionUpKeyframes
  }
}

class Footer extends Component {
  state = { pageDown: true, transition: false, page: 0, prevPage: 0, pages: [0,1,2,3] }

  isPageDown = (page) => {
    switch (page) {
      case 0:
        return true
      case 3:
        return false
      default:
        return this.state.pageDown
    }
  }

  direction = () => this.state.page - this.state.prevPage

  onClick = () => {
    const { page, pageDown, transition } = this.state
    const direction = pageDown ? 1 : - 1
    this.props.updatePage(page + direction)
    this.setState({
      page: page + direction,
      prevPage: page,
      pageDown: this.isPageDown(page + direction),
      transition: true
    },
      () => setTimeout(() =>
        this.setState({ transition: false }), 1000
      )
    )
  }

  render() {
    var transition = this.state.transition
      ? -1 < this.direction() ? styles.pageTransitionDown : styles.pageTransitionUp
      : {} // clear animation
    var direction = this.state.pageDown ? styles.down : styles.up
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
            <div onClick={this.onClick} style={{...transition, position: 'relative'}}>
              <FontAwesomeIcon onClick={this.onClick} style={{ padding: '0 2px', ...direction }} icon={faChevronDown} />
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
