import React, {
  FC, memo, useState,
} from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import AdminPage from '../Admin/AdminPage';

// import LoadingPage from '../../components/LoadingPage/LoadingPage';
import ContentContainer from '../ContentContainer/ContentContainer';

import getLocalStorageData from '../../utils/helpers/localStorage.helper';
import { parseToken } from '../../utils/parseToken';
import LoginPage from '../Login/LoginPage';
import UserPage from '../User/UserPage';

export const ProtectedRoutes: FC = () => {
  const [isAuth, setIsAuth] = useState(!!getLocalStorageData().token.accessToken);
  if (!isAuth) return <Redirect to="/signin" />;
  const { token } = getLocalStorageData();

  const [userData, setUserData] = useState(parseToken(token.accessToken as string));

  if (userData.isAdmin) return <Redirect to="/admin" />;
  if (userData.hasAccessToStatisticPage) return <Redirect to="/stats" />;
  if (!userData.isAdmin) return <Redirect to="/user" />;

  // }

  return (

    <ContentContainer>
      <Switch>
        {(!userData?.isAdmin) && <Route path="/user" component={UserPage} />}
        {(userData?.isAdmin) && <Route path="/admin" component={AdminPage} />}
      </Switch>
    </ContentContainer>
  );
};

export default memo(ProtectedRoutes);
