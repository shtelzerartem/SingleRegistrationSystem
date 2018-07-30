import React from 'react';
import ReactDom from 'react-dom';
import routes from './routes';

require('../sass/app.scss')

ReactDom.render(
  routes,
  document.getElementById('app')
);
