/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import api from '../core/api';
// import request from './apiRequest';

// Login
export const apiLogin = async (
  loginCode: string,

): Promise<any> => {
  const url = `${process.env.REACT_APP_API_URL}${api.login}`;

  try {
    const { data } = await axios.post(url, { loginCode });
    return data;
  } catch (error) {
    return error.response;
  }
};
