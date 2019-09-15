const initialEventsState = []
const initialIsFetchingEvents = false

export const events = (state = initialEventsState, action) => {
    switch (action.type){
        case 'FETCH_FILTER_EVENTS_SUCCESS':
            return action.payload.data.events
        case 'FETCH_FILTER_EVENTS_FAILURE':
            //React Modal tu be used
            return state
        default:
            return state
    }
}

export const isFetchingEvents = (state = initialIsFetchingEvents, action) => {
    switch (action.type) {
        case 'API_CALL_FOR_EVENTS':
            return true
        default:
            return false
    }
}