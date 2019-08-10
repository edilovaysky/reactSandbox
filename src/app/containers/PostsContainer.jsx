import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPostsAction } from '../actions/fetchPostsAction';
import { Posts } from '../components/Posts';

class PostsList extends Component {
  render() {
    console.log(this.props);
    const posts = this.props.posts.map(post => {
      return <Posts key={post.id} {...post} />;
    });
    return (
      <div>
        <h1>Публикации</h1>
        {posts}
      </div>
    );
  }

  componentDidMount() {
    this.props.dispatch(fetchPostsAction());
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.posts,
  };
};

export const PostsContainer = connect(mapStateToProps)(PostsList);
