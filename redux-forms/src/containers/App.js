import React, {Component} from 'react'
import {connect} from 'react-redux'
import {sendServer} from './../actions'
import InitForm from './../components/InitForm'

class App extends Component {
  constructor(props) {
    super(props);
    const state = {
      name: '',
      age: ''
    }
  }

  onClick = (e) => {
    const {name, age} = this.state
    const data = {
      name: name,
      age: age
    }
    e.preventDefault()
    this.props.createPerson(data)
  }

  onChangeInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div className="col">
        <div className="card">
          <div className="card-header">
            Redux Form
          </div>
          <div className="card-body">
            <div className="card-title">My First Redux Form</div>
            <InitForm
              onClick={this.onClick}
              onChangeInput={this.onChangeInput}/>
          </div>
          <div className="card-footer">
            <p>Card Footer</p>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    initialValues: state.person.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createPerson: (data) => dispatch(sendServer(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
