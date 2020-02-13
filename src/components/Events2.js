import React, {Component} from "react"

export default class Events2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      age: '',
      data: []
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  insertToData = () => {
    const data = this.state.data
    data.push({
      name: this.state.name,
      age: this.state.age
    })
    this.setState({
      data: data,
      name: ''
    })
  }

  render() {
    const {data} = this.state
    return (
      <div>
        <input name="name" id="name" onChange={this.handleChange} placeholder="Enter your name"/>
        <input name="age" id="age" onChange={this.handleChange} placeholder="Enter your age"/>
        <button
          type="button"
          onClick={this.insertToData}
        >
          Insert
        </button>
        <ul>
          {data.map(item => (
            <li key={item}>{item.name} - {item.age}</li>
          ))}
        </ul>
        {data}
      </div>
    );
  }
}
