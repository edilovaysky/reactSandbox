import React, { Component } from 'react';
import { Post } from '../components/Post';

export class Posts extends Component {
  render() {
    const post = this.props;
    return (
      <>
        <Post {...post} />
      </>
    );
  }
}
