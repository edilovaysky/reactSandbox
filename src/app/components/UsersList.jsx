import React, { Component } from 'react';
import axios from 'axios';
import User from './User';

export default class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      posts: [],
    };
  }

  render() {
    if (!this.state.users) {
      return null;
    }

    const users = this.state.users.map(user => {
      return <User key={user.id} {...user} />;
    });

    /* const posts = this.state.posts.map(post => {
      return <Post key={post.id} {...post} />;
    }); */

    return (
      <div>
        <h1>Пользователи</h1>
        {users}
      </div>
    );
  }

  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/users/').then(response => {
      this.setState({ users: response.data });
    });
    axios.get('http://jsonplaceholder.typicode.com/posts').then(response => {
      this.setState({ posts: response.data });
    });
  }
}
