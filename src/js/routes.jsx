import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

const HomePage = React.lazy(() => import('./pages/homePage'));
const CreatePage = React.lazy(() => import('./pages/createItem'));
const Description = React.lazy(() => import('./pages/itemDetails'));


export default (
  <Route>
    <Switch>
      <Redirect from="/" to="/home" exact={true} />
      <Route path="/home" component={HomePage} exact={true} />
      <Route path="/details/:id?" component={Description} exact={true} />
      <Route path="/create" component={CreatePage} exact={true} />
    </Switch>
  </Route>
);
