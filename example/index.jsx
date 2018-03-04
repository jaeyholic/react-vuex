import React from 'react';
import ReactDOM from 'react-dom';
import { Welcome } from './components/Welcome';

ReactDOM.render(
  <div>
    <h1>Hello, world!</h1>
    <Welcome name="folks" />
  </div>,
  document.getElementById('root'),
);