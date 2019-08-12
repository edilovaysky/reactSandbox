import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class User extends Component {
  render() {
    return (
      <div className="card border-secondary mb-3">
        <div className="card-header">
          <span>costumer: </span>
          <Link to={`/users/${this.props.id}`}>{this.props.name}</Link>
        </div>
        <div className="card-body text-secondary">
          <p>nikname: {this.props.username}</p>
          <p>e-mail: {this.props.email}</p>
          <p>phone: {this.props.phone}</p>
          <p>website: {this.props.website}</p>
          <Link to={`posts/${this.props.id}`}>My post</Link>
        </div>
      </div>
    );
  }
}
