import { combineReducers } from "redux"


const entitiesReducer = (state = [], action) => {
    switch (action.type) {
        case 'fullFilledActivity':
            return  action.payload 
        case 'addActivity':
            return state.concat({ ...action.payload })
        case 'updateStatusActivity':
            const newActivities = state.map(activity => {
                if (activity.id === action.payload.id) {
                    return { ...activity, completed: !activity.completed }
                }
                return activity
            })
            return newActivities
        case 'deleteActivity':
            let index = state.findIndex((todo) => todo.id === action.payload.id)
            const newActivitiesDeleted = state
            newActivitiesDeleted.splice(index, 1)
            return [...newActivitiesDeleted]
        default:
            return state
    }
}


const statusReducer = (state = {status: '', message: ''}, action) => {
    switch (action.type) {
        case 'statusPending':
            return {status: 'loading', message:'cargando'}
        case 'statusSucceded':
            return {status: 'success', message:'exito'}
        case 'statusRejected':
            return {status: 'error', message: action.payload.error}
        default:
            return state
    }
}

export const mainReducer = combineReducers({
    activities: entitiesReducer,
    status: statusReducer
})