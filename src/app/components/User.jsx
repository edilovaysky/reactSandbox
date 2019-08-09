import React, { Component } from 'react';
import { Link } from 'react-router';

export class User extends Component {
  render() {
    return (
      <div className="card border-secondary mb-3">
        <div className="card-header">
          <Link to={`/users/${this.props.id}`}>
            nickname: {this.props.username}
          </Link>
        </div>
        <div className="card-body text-secondary">
          <p>name: {this.props.name}</p>
          <p>e-mail: {this.props.email}</p>
          <p>phone: {this.props.phone}</p>
          <p>website: {this.props.website}</p>
          <Link to={`posts/${this.props.id}`}>My post</Link>
        </div>
      </div>
    );
  }
}
