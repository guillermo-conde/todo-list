const initialState = {
    activities: []
}

export const initialReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addActivity':
            return {
                ...state,
                activities: state.activities.concat({...action.payload})
            }   
        default:
            return state
    }
}