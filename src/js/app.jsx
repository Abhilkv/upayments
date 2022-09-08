import '@babel/polyfill';

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import registry from 'app-registry';

import { store } from './store';
import routes from './routes';
import ErrorBoundary from './pages/errorBoundary';
import storage from './services/storage';
import logger from './services/logger';
import history from './history';

import './rootStyles.scss';

registry.register('store', store);
registry.register('storage', storage);
registry.register('logger', logger);


/* eslint-disable no-undef */
if (typeof appConfig !== 'undefined') {
  const config = appConfig || {};
  registry.register('config', config);
  if (config.logger && config.logger.level) {
    logger.setLevel(config.logger.level);
  }
} else {
  registry.get('logger').warning('WARNING: the config is not defined');
}
/* eslint-enable no-undef */


ReactDOM.render(
  <ErrorBoundary>
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <Router history={history}>
          {routes}
        </Router>
      </Suspense>
    </Provider>
  </ErrorBoundary>, document.getElementById('app')
);
