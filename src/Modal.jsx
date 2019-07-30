import './Modal.css';

import React, { Component } from 'react';
import ReactDom from 'react-dom';

const modalRoot = document.getElementById('modal');

export class Modal extends Component {
  constructor(props) {
    super(props);

    this.element = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.element);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.element);
  }

  onClose = event => {
    const { onClose } = this.props;

    if (event.target.classList.contains('close')) {
      onClose();
    }
  };

  renderView = () => {
    return (
      <div className="overlay" onClick={this.onClose}>
        <div className="modal">
          <span className="close">X</span>
          <h3>Greeting title</h3>
          <div className="modal-body">
            Greeting text Greeting text Greeting text Greeting text Greeting
            text Greeting text Greeting text Greeting text Greeting text
            Greeting text Greeting text Greeting text Greeting text Greeting
            text Greeting text Greeting text Greeting text Greeting text
          </div>
        </div>
      </div>
    );
  };

  render() {
    return ReactDom.createPortal(this.renderView(), this.element);
  }
}
