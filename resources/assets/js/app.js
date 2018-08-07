import React from 'react';
import ReactDom from 'react-dom';
import routes from './routes';

import Theme from './components/Theme';
import { MuiThemeProvider } from '@material-ui/core/styles';

require('../sass/app.scss')

ReactDom.render(
  <MuiThemeProvider theme={Theme}>
    {routes}
  </MuiThemeProvider>,
  document.getElementById('app')
);
