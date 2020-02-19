import { createStore, applyMiddleware, compose } from 'redux'

export default (rootReducer) => {
	const middleware = []
	const enhancers = []

	enhancers.push(applyMiddleware(...middleware))

	const store = createStore(rootReducer, compose(...enhancers))

	return store
}
