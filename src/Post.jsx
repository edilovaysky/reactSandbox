import './Post.css';
import React, { Component } from 'react';

export class Post extends Component {
  render() {
    const postItems = this.props.postItems.map((item, index) => {
      return (
        <div className="post-item" key={index}>
          <h3 className="post-title">{item.title}</h3>
          <p className="post-body">
            <i>{item.body}</i>
          </p>
          <span>
            Author name: <i>{item.author}</i>
          </span>
        </div>
      );
    });
    return <div className="post">{postItems}</div>;
  }
}
