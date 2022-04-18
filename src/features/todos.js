const initialState = {}

export const initialReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addActivity':
            return console.log(action.type);   
        default:
            return state;
    }
}