export const fetchThunk = () => async dispatch => {
    dispatch({type:'statusPending'})
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await response.json()
        const todos = data.slice(0, 10)
        dispatch({type:'statusSucceded'})
        dispatch({type:'fullFilledActivity', payload: todos})
    } catch (e) {
        dispatch({type:'statusRejected', payload:{error: e.message}})
    }
}