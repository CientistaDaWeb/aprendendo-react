import React, {Component} from 'react'
import './App.css'
import {bindActionCreators} from 'redux'
import {clickHelloAction} from './actions/index'
import ShowMessage from './components/ShowMessage'
import {connect} from 'react-redux'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }

    handleInputChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    render() {
        const {text} = this.state
        const {clickHelloAction} = this.props
        return (
            <div className="App">
                <input type="text" onChange={this.handleInputChange}/>
                <button type="button" onClick={() => clickHelloAction(text)}>Click to Dispatch Action</button>
                <ShowMessage />
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        msg: store.clickReducer.msg
    }
}
const mapDispatchToProps = (dispatch) => bindActionCreators({clickHelloAction}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
