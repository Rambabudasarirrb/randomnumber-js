import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  genereteRandonNum = () => {
    const randomNumber = this.getRandomNumber()
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="gen-btn"
            onClick={this.genereteRandonNum}
          >
            Generate
          </button>
          <p className="count">{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
