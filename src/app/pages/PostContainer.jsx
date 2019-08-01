import React, { Component } from 'react';
import axios from 'axios';
import Post from '../components/Post';

export default class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
    };
  }

  componentDidMount() {
    axios
      .get(`http://jsonplaceholder.typicode.com/posts/${this.props.params.id}`)
      .then(response => {
        this.setState({ post: response.data });
      });
  }

  render() {
    return <div>{this.state.post && <Post {...this.state.post} />}</div>;
  }
}
