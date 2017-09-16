import React, { Component } from 'react'

class Clicker extends Component {
  handleButtonClick = (event) => {
    console.log(event.target.textContent);
  }

  render() {
    return (
      <button onClick={this.handleButtonClick}>
        Clicked { this.state.clickCount } times!
      </button>
    )
  }
}

export default Clicker
