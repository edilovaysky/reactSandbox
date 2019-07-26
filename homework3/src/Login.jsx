import './Login.css';
import React, { Component } from 'react';

export class Login extends Component {
  render() {
    return <button className="login-btn">{this.props.title}</button>;
  }
}
