import { combineReducers } from 'redux';

import { usersReducer } from './usersReducer';
import { userReducer } from './usersReducer';
import { postsReducer } from './postsReducer';
import { postReducer } from './postsReducer';

export const rootReducer = combineReducers({
  users: usersReducer,
  user: userReducer,
  posts: postsReducer,
  post: postReducer,
});
