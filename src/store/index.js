import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { rootReducer } from './rootReducer';

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

// create a store and pass all the reducers in as a arguments
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
