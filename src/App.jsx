import React from 'react';
import ReactDom from 'react-dom';
import { extname } from 'path';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Первое приложение на React</h1>
        <p>Hello from React</p>
      </div>
    );
  }
}

ReactDom.render(<App />, document.querySelector('#root'));
