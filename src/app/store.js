import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import reducers from './reducers/index';

const middlewares = applyMiddleware(promise, thunk, createLogger());
export const store = createStore(reducers, middlewares);
