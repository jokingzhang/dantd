import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
var baseName = '/dantd-demo';

if (process.env.NODE_ENV === 'development') {
  baseName = '/';
}

ReactDOM.render(React.createElement(BrowserRouter, {
  basename: baseName
}, React.createElement(Route, {
  component: App
})), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();