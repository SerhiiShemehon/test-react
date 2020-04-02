import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from "react-router-dom";

import './scss/style.scss'

import { store, history } from './store';
import { PageWrapper } from "./routes";

ReactDOM.render(
  <Provider store={store}>
    <Router history ={history}>
      <PageWrapper />
    </Router>
  </Provider>,
  document.getElementById('root')
);
