import React, { Component } from 'react';
import Posts from '../containers/PostsContainer';

export default class PostsContainer extends Component {
  render() {
    return <div>{!this.props.children ? <Posts /> : this.props.children}</div>;
  }
}
