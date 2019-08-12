import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUsersAction } from '../actions/fetchUsersAction';
import { Users } from '../components/Users';

class UsersList extends Component {
  render() {
    const users = this.props.users.map(user => {
      return <Users key={user.id} {...user} />;
    });
    return (
      <div>
        <h1>Пользователи</h1>
        {users}
      </div>
    );
  }

  componentDidMount() {
    if (!this.props.users.length) {
      this.props.dispatch(fetchUsersAction());
    }
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.users,
  };
};

export const UsersContainer = connect(mapStateToProps)(UsersList);
