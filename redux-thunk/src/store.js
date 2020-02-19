import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

export default () => {
    const enhancers = applyMiddleware(thunk)

    return createStore(
        rootReducer,
        enhancers
    )
}
