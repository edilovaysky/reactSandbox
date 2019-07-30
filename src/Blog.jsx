import './Blog.css';
import React, { Component, Fragment } from 'react';

import { Post } from './Post';

export class Blog extends Component {
  render() {
    return (
      <Fragment>
        <Post postItems={this.props.postItems} />
      </Fragment>
    );
  }
}
