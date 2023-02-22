// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isLight: false}

  onButtonClick = () => {
    const {isLight} = this.state
    if (isLight === true) {
      this.setState(prevState => ({isLight: !prevState.isLight}))
    } else {
      this.setState(() => ({isLight: true}))
    }
  }

  render() {
    const {isLight} = this.state
    let cardContainer
    let heading
    let button
    let text
    if (isLight === true) {
      cardContainer = 'lightModeContainer'
      heading = 'lightHeading'
      button = 'lightButton'
      text = 'Dark Mode'
    } else {
      cardContainer = 'darkModeContainer'
      heading = 'darkHeading'
      button = 'darkButton'
      text = 'Light Mode'
    }
    return (
      <div className="bgContainer">
        <div className={cardContainer}>
          <h1 className={heading}> Click To Change Mode</h1>
          <button type="button" className={button} onClick={this.onButtonClick}>
            {text}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
