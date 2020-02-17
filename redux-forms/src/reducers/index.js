import {combineReducers} from 'redux'
import person from './person'
import {reducer as reduxFormReducer} from 'redux-form'

export default combineReducers({
  form: reduxFormReducer,
  person
})
