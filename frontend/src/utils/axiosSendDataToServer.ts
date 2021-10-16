import axios from 'axios';
// import { updateToken, authRequest } from '../store/slices/auth.slice';
import history from '../core/history';

// export const updateToken = (
//     token: {
//         accessToken: string | null;
//         refreshToken: string | null;
//     },
// ):  => async () => {
//     try {
//         const user = parseToken(getLocalStorageData().token.accessToken as string);
//         const newToken = await apiUpdateToken(user.data.clientData?.brokerClientId, user.data.id, token);
//         localStorage.setItem('accessToken', newToken.token);
//         localStorage.setItem('refreshToken', newToken.refreshToken);
//         const userData = parseToken(newToken.token);
//         if (JSON.stringify(userData.data) !== JSON.stringify({ ...state().auth.currentUser })) dispatch(setCurrentUser(userData));
//         return newToken;
//     } catch (error) {
//         return error;
//     }
// };

const request = (
  uri: string,
  method: 'head' | 'get' | 'GET' | 'delete' | 'DELETE' | 'HEAD' | 'options' | 'OPTIONS' | 'post' | 'POST' | 'put' | 'PUT' | 'patch' | 'PATCH' | undefined,
  reqData: any,
  token: {
    accessToken: string | null;
    refreshToken: string | null;
  },
  headers?: any,
) => async () => {
  const { accessToken } = token;
  if (!headers) { // если в запросе отсутствует headers, то задаем их
    headers = {};
  }

  if (accessToken) {
    try {
      const response = await axios({
        method,
        url: uri,
        headers,
        data: ((method === 'POST' || method === 'PUT' || method === 'DELETE') && reqData) || undefined,
      });
      return response.data;
    } catch (error:any) {
      if (error.response && error.response.data === 'Unauthorized') {
        let newToken: any;
        try {
          // TO DO update token
          //   newToken = await dispatch(updateToken(token));
          //   headers.Authorization = `Bearer ${newToken.token}`; // добавляем токен в headers запроса
        } catch (err:any) {
          // dispatch(authRequest());
          localStorage.clear();
          history.push('/');
          throw new Error(err);
        }
        if (newToken) {
          const response = await axios({
            method,
            url: uri,
            headers,
            data: ((method === 'POST' || method === 'PUT' || method === 'DELETE') && reqData) || undefined,
          });
          return response.data;
        }
      }
      throw new Error(error.response ? error.response.data.error : error.message);
    }
  }
  return history.push('/');
};

export default request;
