import React, {Component} from "react"

export default class Events extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: 0
    }
  }

  clickMethod = () => {
    this.setState({
      clicked: this.state.clicked + 1
    }, () => {
      console.log(this.state.clicked, 'new click value')
    })
    console.log('clicked')
  }

  render() {
    const {clicked} = this.state
    return (
      <div>
        <button
          type="button"
          onClick={this.clickMethod}
        >
          Click me: {clicked}
        </button>
      </div>
    );
  }
}
