export const updateTitle = () => dispatch => {
    try {
        const response =  fetch('https://jsonplaceholder.typicode.com/todos')
        const data =  response.json()
        const todos = data.slice(0, 10)
        dispatch({type:'fullFilledActivity', payload: todos})
    } catch (e) {
        console.log(e.message)
    }
}