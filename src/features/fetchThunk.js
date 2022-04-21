export const fetchThunk = () => async dispatch => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await response.json()
        const todos = data.slice(0, 10)
        dispatch({type:'fullFilledActivity', payload: todos})
    } catch (e) {
        console.log(e.message)
    }
}