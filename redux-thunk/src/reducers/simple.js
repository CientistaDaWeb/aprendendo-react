export default function simpleReducer(state = {payload: {msg: ''}}, action) {
    switch (action.type) {
        case 'SIMPLE':
            return {...state, payload: action.payload}
        default:
            return state
    }
}
