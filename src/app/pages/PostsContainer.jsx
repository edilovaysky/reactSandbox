import React, { Component } from 'react';
import Posts from '../components/Posts';

export default class PostsContainer extends Component {
  render() {
    return <div>{!this.props.children ? <Posts /> : this.props.children}</div>;
  }
}
