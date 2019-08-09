import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './app/store';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from './app/layouts/Layout';
import Main from './app/components/Main';
import { UserContainer } from './app/containers/UserContainer';
import PostsContainer from './app/containers/PostsContainer';
import PostContainer from './app/containers/PostContainer';
import PageNotFound from './app/components/PageNotFound';
import { UsersContainer } from './app/containers/UsersContainer';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Main} />
        <Route path="users" component={UsersContainer}>
          <Route path=":userId" component={UserContainer} />
        </Route>
        <Route path="posts" component={PostsContainer}>
          <Route path=":id" component={PostContainer} />
        </Route>
        <Route path="*" component={PageNotFound} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
