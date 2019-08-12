import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import { UserContainer } from './app/containers/UserContainer';
import { PostsContainer } from './app/containers/PostsContainer';
import { PostContainer } from './app/containers/PostContainer';
import PageNotFound from './app/components/PageNotFound';
import { UsersContainer } from './app/containers/UsersContainer';
import { Main } from './app/components/Main';
import { Menu } from './app/components/Menu';
import { MenuItem } from './app/components/MenuItem';
import { Users } from './app/components/Users';
import { User } from './app/components/User';

export class App extends Component {
  constructor(props) {
    super(props);
    this.brand = 'React blog!';
  }

  isActive(href) {
    return window.location.pathname === href;
  }
  render() {
    return (
      <div>
        <Menu brand={this.brand}>
          <MenuItem href="/" active={this.isActive('/')}>
            Главная
          </MenuItem>
          <MenuItem href="/users" active={this.isActive('/users')}>
            Пользователи
          </MenuItem>
          <MenuItem href="/posts" active={this.isActive('/posts')}>
            Публикации
          </MenuItem>
        </Menu>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/home" component={Main} />
                <Route exact path="/users" component={UsersContainer} />
                <Route exact path="/users/:Id" component={UserContainer} />
                <Route exact path="/posts" component={PostsContainer} />
                <Route exact path="/posts/:id" component={PostContainer} />
                <Route path="*" component={PageNotFound} />
              </Switch>
            </div>
          </div>
        </div>
        <footer className="card-footer">&copy; 2019</footer>
      </div>
    );
  }
}
