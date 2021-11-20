import React, {
  memo, FC,
} from 'react';
import {
  Route,
  Router,
  Switch,
} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import history from './core/history';
import './App.css';
import LoginPage from './containers/Login/LoginPage';
import { ProtectedRoutes } from './containers/ProtectedRoutes/ProtectedRoutes';
import AdminPage from './containers/Admin/AdminPage';
import UserPage from './containers/User/UserPage';
import StatsPage from './containers/Stats/StatsPage';

export const App: FC = () => (

  <Router history={history}>
    <CssBaseline />
    {/* <Snackbar /> */}

    <Switch>
      <Route path="/signin" component={LoginPage} />
      <Route path="/admin" component={AdminPage} />
      <Route path="/user" component={UserPage} />
      <Route path="/stats" component={StatsPage} />

      <Route path="/" component={ProtectedRoutes} />
    </Switch>

  </Router>
);

export default memo(App);
