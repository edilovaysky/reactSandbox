import React, { Component } from 'react';
import { connect } from 'react-redux';
import { User } from '../components/User';
import { fetchUserAction } from '../actions/fetchUsersAction';

class UserById extends Component {
  render() {
    console.log(store.getState());
    return (
      <>
        <User {...this.props} />
      </>
    );
  }
  /*   componentDidMount() {
    this.props.dispatch(fetchUserAction(this.props.id));
  } */
}
const mapStateToProps = state => {
  return {
    users: state.users.users,
  };
};

export const UserContainer = connect(mapStateToProps)(UserById);
