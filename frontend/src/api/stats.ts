/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import api from '../core/api';

export const apiGetStats = async (
  userId: number,
  token: {
    accessToken: string | null;
    refreshToken: string | null;
  },

): Promise<any> => {
  const url = `${process.env.REACT_APP_API_URL}${api.getStats}${userId}`;

  try {
    const { data } = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token.accessToken}`,
      },
    });
    return data;
  } catch (error:any) {
    return error.response;
  }
};
