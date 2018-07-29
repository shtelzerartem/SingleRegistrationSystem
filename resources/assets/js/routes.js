import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main from './Layouts/Main';
import Olympiads from './Layouts/Olympiads';
import Results from './Layouts/Results';
import Login from './Layouts/Login';

export default (
  <Route path='/' component={Main}>
    <IndexRoute component={Olympiads} />
    <Route path='olympiads' component={Olympiads} />
    <Route path='results' component={Results} />
    <Route path='login' component={Login} />
    <Route path='*' component={Main} />
  </Route>
);