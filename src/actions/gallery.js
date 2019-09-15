import actionTypes from './actionTypes';

export const successGallery = (payload) => ({
    type: actionTypes.FETCH_GALLERY_SUCCESS,
    payload
})

export const failureGallery = () => ({
    type: actionTypes.FETCH_GALLERY_FAILURE,
})
