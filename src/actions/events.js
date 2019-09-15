import actionTypes from './actionTypes';
export const successEvents = (payload) => ({
    type: actionTypes.FETCH_EVENTS_SUCCESS,
    payload
})

export const failureEvents = () => ({
    type: actionTypes.FETCH_EVENTS_FAILURE,
})
