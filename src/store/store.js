import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default (preloadedState) => {
    const store = createStore(
        rootReducer,
        preloadedState,
        composeEnhancers(applyMiddleware(thunk, loggerMiddleware))
    );
    return store;
};
