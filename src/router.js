import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Nav from './Components/Nav';

import Layout from './Screens/Layout';
import Edit from './Screens/Edit';
import Graph from './Screens/Graph';

const RouterComp = (props) => (
  <React.Fragment>
    <Nav />
    <Route component={Layout} path='/' exact />
    <Switch>
      <Route component={Edit} path='/edit' />
      <Route component={Graph} path='/graph' />
    </Switch>
  </React.Fragment>
);
export default RouterComp;
