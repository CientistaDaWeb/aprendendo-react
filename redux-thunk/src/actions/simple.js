export default function simpleAction () {
    return (dispatch) => {
        dispatch({
            type: 'SIMPLE',
            payload: {
                msg: 'Hello Thunk'
            }
        })
    }
}
