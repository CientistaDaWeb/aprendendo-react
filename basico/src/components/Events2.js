import React, {Component} from "react"
import {Button, TextField, AppBar, Toolbar, IconButton} from '@material-ui/core'

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
      name: '',
      age: ''
    })
  }

  render() {
    const {data, name, age} = this.state
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <TextField name="name" id="name" value={name} onChange={this.handleChange} placeholder="Enter your name"/>
            <TextField name="age" id="age" value={age} onChange={this.handleChange} placeholder="Enter your age"/>
            <Button
              variant="contained"
              color="primary"
              onClick={this.insertToData}
            >
              Insert
            </Button>
          </Toolbar>
        </AppBar>
        <div>

          <ul>
            {data.map(item => (
              <li key={item.name}>{item.name} - {item.age}</li>
            ))}
          </ul>
          {data}
        </div>
      </div>
    );
  }
}
