import React, {Component} from 'react'
import './App.css'
import ShowPayload from './components/ShowPayload'
import {connect} from 'react-redux'
import {thunkFetchData} from './actions/app'
import {Card, CardColumns} from 'react-bootstrap'

class App extends Component {
    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        const {data} = this.props
        return (
            <div>
                <ShowPayload/>
                <h1>Jokes</h1>
                <CardColumns>
                {data.map(item => (
                    <Card bg="primary" text="white" className="text-center p-3">
                        <Card.Body key={item.id}>
                            <Card.Text>
                                {item.joke}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
                </CardColumns>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.fetched,
        isFetching: state.isFetching,
        error: state.fetchedError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(thunkFetchData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
