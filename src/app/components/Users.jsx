import React, { Component } from 'react';
import { User } from './User';

export class Users extends Component {
  render() {
    const user = this.props;
    return (
      <div>
        <User {...user} />
      </div>
    );
  }
}
