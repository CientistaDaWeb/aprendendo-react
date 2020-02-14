import React, {Component} from "react"

export default class State extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Fernando',
      age: 35
    }
  }

  render() {
    const {name, age} = this.state
    return (
      <div>
        <h1>{name}, {age} anos</h1>
      </div>
    )
  }
}
