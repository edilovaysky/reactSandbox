import React, { Component } from 'react';
import { connect } from 'react-redux';
import { User } from '../components/User';
import { fetchUserAction } from '../actions/fetchUsersAction';

class UserById extends Component {
  render() {
    console.log(this.props.user);
    return (
      <>
        <User {...this.props.user} />
      </>
    );
  }
  componentDidMount() {
    const userId = this.props.match.url;

    this.props.dispatch(fetchUserAction(userId));
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user,
  };
};

export const UserContainer = connect(mapStateToProps)(UserById);
