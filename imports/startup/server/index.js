import lodash from 'lodash';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { onPageLoad } from 'meteor/server-render';
import { Helmet } from 'react-helmet';

import App from 'imports/ui/app';

_ = lodash;

onPageLoad((sink) => {
  sink.renderIntoElementById('app', renderToString(<App />));

  const helmet = Helmet.renderStatic();
  sink.appendToHead(helmet.meta.toString());
  sink.appendToHead(helmet.title.toString());

  sink.appendToBody(`
    <script>
      window.__PRELOADED_STATE__ = ${JSON.stringify({ ssr: true }).replace(/</g, '\\u003c')}
    </script>
  `);
});