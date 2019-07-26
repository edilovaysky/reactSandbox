import './Menu.css';
import React, { Component } from 'react';

export class Menu extends Component {
  render() {
    const menuItems = this.props.menuItems.map((item, index) => {
      return (
        <li className="nav-item" key={index}>
          <a href={item.href}>{item.title}</a>
        </li>
      );
    });
    return <ul className="nav">{menuItems}</ul>;
  }
}
