import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import {getInitialFetch} from './../actions'

const renderField = ({
                       input,
                       label,
                       placeholder,
                       type,
                       meta: {touched, error, warning}
                     }) => (
  <div className="form-group">
    <label htmlFor="">{label}</label>
    <input {...input} placeholder={placeholder} type={type} className="form-control"/>
    {touched &&
    ((error && <span className="text-danger">{error}</span>) || (warning &&
      <span className="text-warning">{warning}</span>))}

  </div>
)

const warn = (values) => {
  const warnings = {}
  const {name, age} = values

  if (name && name.toString().length <= 2) {
    warnings.name = 'Too Short'
  }

  if (name && age <= 18) {
    warnings.age = 'Too youg'
  }

  return warnings
}

const validate = (values) => {
  const errors = {}
  const {name, age} = values

  if (!name) {
    errors.name = 'Required'
  }

  if (!age) {
    errors.age = 'Required'
  }

  return errors
}

class InitForm extends Component {
  componentWillMount() {
    this.props.fetchInitial()
  }

  render() {
    const {onClick, onChangeInput} = this.props
    return (
      <form>
        <div className="form-group">
          <Field
            name="name"
            placeholder="Enter your name"
            type="text"
            component={renderField}
            className="form-control"
            onChange={onChangeInput}
          />
          <Field
            name="age"
            placeholder="Enter your age"
            type="number"
            component={renderField}
            className="form-control"
            onChange={onChangeInput}
          />
        </div>
        <div className="form-group">
          <button type="button" className="btn btn-primary" onClick={(e) => onClick(e, this.props.initialValues)}>Send
          </button>
        </div>
      </form>
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
    fetchInitial: () => dispatch(getInitialFetch())
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(reduxForm({
  form: 'InitForm',
  enableReinitialize: true,
  validate,
  warn
})(InitForm))
