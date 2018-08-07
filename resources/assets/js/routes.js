import React from 'react';
import {  BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Main from './Layouts/Main';
import Olympiads from './Layouts/Olympiads';
import Results from './Layouts/Results';
import Login from './Layouts/Login';
import Register from './Layouts/Register';

export default (
  <Router>
    <Switch>
      <Route exact path='/' component={Main} />
      <Route path='/olympiads' component={Olympiads} />
      <Route path='/results' component={Results} />
      <Route path='/signin' component={Login} />
      <Route path='/signup' component={Register} />
      </Switch>
  </Router>
);