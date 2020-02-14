import React, {Component} from "react"

export default class Clock2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timer: this.getClock(),
    }
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.updateClock(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  getClock() {
    return new Date().toLocaleString(
      'pt-BR',
      {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      }
    )
  }

  updateClock = () => {
    this.setState({
      timer: this.getClock()
    })
  }

  render() {
    const {timer} = this.state
    return (
      <h1>{timer}</h1>
    );
  }
}
