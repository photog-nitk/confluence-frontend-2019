import {combineReducers} from 'redux'
import { gallery,  isFetchingGallery } from './gallery'
import { events, isFetchingEvents } from './events'
import auth from './user'

const rootReducer = combineReducers(
    gallery,
    events,
    isFetchingEvents,
    isFetchingGallery,
    auth
)

export default rootReducer
