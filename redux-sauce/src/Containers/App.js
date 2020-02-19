import React, {Component} from 'react'
import {Provider} from 'react-redux'
import createStore from './../Redux'
import Counter from './../Components/Counter'
import Hello from '../Components/Hello'

const store = createStore()

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Counter/>
                    <Hello/>
                </div>
            </Provider>
        )
    }
}

export default App
