import React, {Component} from "react"

export default class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      todo: ''
    }
  }

  handleChange = (event) => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  insertItem = () => {
    const items = this.state.items
    items.push(this.state.todo)
    this.setState({
      items: items,
      todo: ''
    })
  }

  render() {
    const {items, todo} = this.state
    return (
      <div>
        <h1>Todo List</h1>
        <input name="todo" value={todo} onChange={this.handleChange} placeholder="Enter de item"/>
        <button
          type="button"
          onClick={this.insertItem}>
          Save
        </button>
        <hr/>
        <ul>
          {items.map((item, key) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}
