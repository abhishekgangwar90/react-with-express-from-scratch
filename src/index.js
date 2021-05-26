import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

function Welcome() {
  return <h1 className="app">Hello World from React App from scratch</h1>;
}
ReactDOM.render(<Welcome />, document.getElementById('root'));
