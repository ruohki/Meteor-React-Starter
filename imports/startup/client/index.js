import React from 'react';
import ReactDOM from 'react-dom';

import { onPageLoad } from 'meteor/server-render';

import App from 'imports/ui/app';
import lodash from 'lodash';

_ = lodash;

const preloadedState = window.__PRELOADED_STATE__;

delete window.__PRELOADED_STATE__;

console.log(preloadedState);

onPageLoad(() => {
  ReactDOM.render(<App />, document.getElementById('root'));
});