import React from 'react';

import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from 'boot/store';
import App from 'app';

const rootElement = document.getElementById('root');

render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  rootElement,
);
