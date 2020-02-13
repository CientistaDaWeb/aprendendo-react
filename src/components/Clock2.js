import React, {Component} from "react"

export default class Clock2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timer: this.getClock()
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => this.updateClock(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
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
    console.log('passou no updateClock()')
    // bug, setState não parece estar sendo executado
    this.setState = ({
      timer: this.getClock()
    }, () => {
      console.log(this.state.timer, 'atualizou o relógio')
    })

  }

  render() {
    const {timer} = this.state
    return (
      <h1>{timer}</h1>
    );
  }
}
