import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import { rootReducer } from './reducers';

const middlewares = applyMiddleware(promise, thunk, createLogger());
export const store = createStore(rootReducer, middlewares);
