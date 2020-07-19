import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../../pages/Auth/Login';
import Register from '../../pages/Auth/Register';
import Verify from '../../pages/Auth/Verify';

const routes = [
  {
    path: '/login',
    component: Login,
    exact: true,
  },
  {
    path: '/register',
    component: Register,
    exact: true,
  },
  {
    path: '/verify',
    component: Verify,
    exact: true,
  },
];

const PublicRoutes = () => (
  <Switch>
    {routes.map((route) => (
      <Route {...route} key={route.path} />
    ))}
  </Switch>
);

export default PublicRoutes;
