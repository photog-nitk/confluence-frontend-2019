
const initialGalleryState = [];
const initialIsFetchingGallery = false
export const gallery = (state = initialGalleryState, action) => {
    switch (action.type) {
        case 'FETCH_GALLERY_SUCCESS':
            return action.payload.data.images
        case 'FETCH_GALLERY_FAILURE':
            //ReactModal to be used as popup
            return state;
        default:
            return state;
    }
}

export const isFetchingGallery = (state = initialIsFetchingGallery, action) => {
    switch (action.type) {
        case 'API_CALL_FOR_GALLERY':
            return true
        default:
            return false
    }
}