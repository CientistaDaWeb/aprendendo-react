import React, {Component} from 'react'
import {connect} from 'react-redux'

class ShowPayload extends Component {
    render() {
        const {payload} = this.props
        return (
            <h1>Payload: {payload.msg}</h1>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        payload: state.simpleReducer.payload
    }
}
export default connect(mapStateToProps)(ShowPayload)
