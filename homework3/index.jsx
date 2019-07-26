import './index.css';
import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';

import { Layout } from 'src/Layout';

class App extends Component {
  render() {
    const menuItems = [
      { title: 'Home', href: '/' },
      { title: 'Articles', href: '/articles' },
      { title: 'Rubbish', href: '/auth' },
    ];
    const title = { in: 'Log In', out: 'Log Out' };
    return (
      <div className="container">
        <Layout menuItems={menuItems} title={title} />
      </div>
    );
  }
}

ReactDom.render(<App />, document.querySelector('#root'));
