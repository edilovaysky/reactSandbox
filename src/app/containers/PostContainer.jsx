import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Post } from '../components/Post';

class PostFromSore extends Component {
  render() {
    const id = this.props.match.params.id;
    const post = this.props.posts.map(post => {
      if (post.id == id) {
        return (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        );
      }
    });

    return <>{post}</>;
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.posts,
  };
};

export const PostContainer = connect(mapStateToProps)(PostFromSore);
