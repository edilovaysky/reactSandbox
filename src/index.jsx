import './index.css';
import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';

import { Blog } from 'src/Blog';
import { Modal } from 'src/Modal';
import { posts } from './posts';

class App extends Component {
  state = {
    displayModal: false,
    postItems: posts,
  };

  componentDidMount() {
    this.setState({ displayModal: true });
  }
  handleClose = () => {
    this.setState({ displayModal: false });
  };
  render() {
    const postItems = this.state.postItems;
    const { displayModal } = this.state;

    return (
      <div className="container">
        <Blog postItems={postItems} />
        {displayModal && <Modal onClose={this.handleClose} />}
      </div>
    );
  }
}

ReactDom.render(<App />, document.querySelector('#root'));
