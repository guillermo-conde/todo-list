const initialState = {
    activities: []
}

export const initialReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'fullFilledActivity':
            return {activities: action.payload}
        case 'addActivity':
            return {
                ...state,
                activities: state.activities.concat({ ...action.payload })
            }
        case 'deleteActivity':
            console.log('Eliminando actividad')
            // return {
            //     ...state,
            //     activities: state.activities.concat({ ...action.payload })
            // }
            return state
        default:
            return state
    }
}