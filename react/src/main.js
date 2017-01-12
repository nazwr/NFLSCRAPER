import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import GameApp from './components/GameApp.js';
import { Router, Route, browserHistory } from 'react-router'

$(function() {
  ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={App}/>
    </Router>
  ), document.getElementById('app'))
});
