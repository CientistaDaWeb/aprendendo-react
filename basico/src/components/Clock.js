import React, {Component} from "react"

export default class Clock extends Component {
  render() {
    const returnClock = () => {
      return new Date().toLocaleString(
        'pt-BR',
        {
          hour: 'numeric',
          minute: 'numeric'
        }
      )
    }
    return (
      <h1>{ returnClock() }</h1>
    );
  }
}
