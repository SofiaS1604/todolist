import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer from 'reducers';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// console.log(think);

export const store = (() =>
        Promise.resolve(createStore(
            rootReducer,
            {},
            composeEnhancers(applyMiddleware(thunk))
        ))
)();