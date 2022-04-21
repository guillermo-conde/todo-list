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
        case 'updateStatusActivity':
            const newActivities = state.activities.map(activity => {
                if (activity.id === action.payload.id) {
                    return {...activity, completed: !activity.completed}
                }
                return activity
            })
            return {
                ...state,
                activities: newActivities
            }
        default:
            return state
    }
}