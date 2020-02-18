import React, {Component} from 'react'
import {connect} from 'react-redux'

class ShowMessage extends Component {
    render() {
        const {msg} = this.props
        return (
            <div>
                <h1>{msg}</h1>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        msg: store.clickReducer.msg
    }
}
export default connect(mapStateToProps)(ShowMessage)
