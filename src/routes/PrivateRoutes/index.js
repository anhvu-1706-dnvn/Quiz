import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import i18n from 'i18next';

import { flatMap, map } from 'lodash';
import PrivateLayout from '../../layout/PrivateLayout';
import Dashboard from '../../pages/Dashboard';
import CreateQuizz from '../../pages/CreateQuizz';
import MyQuizz from '../../pages/MyQuizz';
import FindQuizz from '../../pages/FindQuizz';
import QuizzesByTag from '../../pages/QuizzesByTag';

const routes = [
  // {
  //   path: '/',
  //   component: Dashboard,
  //   exact: true,
  //   title: i18n.t('dashboard.title'),
  // },
  {
    path: '/create-quizzes',
    component: CreateQuizz,
    exact: true,
    title: 'Tạo mới test',
  },
  {
    path: '/my-quizzes',
    component: MyQuizz,
    exact: true,
    title: 'My quizzes',
  },
  {
    path: '/',
    component: FindQuizz,
    exact: true,
    title: 'Find a quizz',
  },
  {
    path: '/quizz/:tagName',
    component: QuizzesByTag,
    exact: true,
    title: 'Quizz By Tag',
  },
];

const PrivateRoutes = () => (
  <Switch>
    {map(
      flatMap(routes, (route) => {
        if (route.routes) {
          return map(route.routes, (subRoute) => ({
            ...subRoute,
            path: route.path + subRoute.path,
            exact: subRoute.path === '/',
          }));
        }
        return route;
      }),
      (route) => (
        <Route
          {...route}
          component={(e) => (
            <PrivateLayout>
              <route.component {...e} />
            </PrivateLayout>
          )}
          key={route.path}
        />
      )
    )}
  </Switch>
);

PrivateRoutes.propTypes = {};

export default connect((state) => ({
  isAuthenticated: state.user.isAuthenticated,
}))(PrivateRoutes);
