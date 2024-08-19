// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {
    isSubscribed: false,
  }
  onSubsrcibe = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }
  getButtonText = () => {
    const {isSubscribed} = this.state

    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()
    return (
      <div className="main-container">
        <h1 className="heading">Welcome</h1>
        <p className="text">Thank you! Happy learning</p>
        <button type="button" className="button" onClick={this.onSubsrcibe}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
