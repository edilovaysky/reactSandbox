import './Layout.css';
import React, { Component, Fragment } from 'react';

import { Menu } from './Menu';
import { Login } from './Login';
import { Articles } from './Articles';

export class Layout extends Component {
  handleClose() {
    const { history } = this.props;
    console.log(history);
    // history.replace('')
  }
  render() {
    const title = 'Log In pleace';
    return (
      <Fragment>
        <header>
          <Menu menuItems={this.props.menuItems} />
          <div>
            <Login title={this.props.title.in} />
            <Login title={this.props.title.out} />
          </div>
        </header>
        <Articles />
      </Fragment>
    );
  }
}
