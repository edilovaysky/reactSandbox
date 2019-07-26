import './Articles.css';

import React, { Component } from 'react';

export class Articles extends Component {
  render() {
    return (
      <div className="article-panel">
        <h3>
          <i>An Article:</i>
        </h3>
        <p>
          <i>"Make it as simple as possible, but not simpler!"</i>
        </p>
      </div>
    );
  }
}
