/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import api from '../core/api';
// import request from './apiRequest';

export const apiChangeActiveSpeakerInChannel = async (
  token: {
    accessToken: string | null;
    refreshToken: string | null;
  },
  speakerIdToActivate: number,
  channelForShowingNumber: number,
): Promise<any> => {
  const url = `${process.env.REACT_APP_API_URL}${api.changeActiveSpeakerInChannel}`;

  try {
    const { data } = await axios.post(url, { speakerIdToActivate, channelForShowingNumber }, {
      headers: {
        Authorization: `Bearer ${token.accessToken}`,
      },
    });
    return data;
  } catch (error) {
    return error.response;
  }
};

export const apiSetBrakeInChannel = async (
  token: {
    accessToken: string | null;
    refreshToken: string | null;
  },
  channelForShowingNumber: number,
  prevSpeakerid: number,
): Promise<any> => {
  const url = `${process.env.REACT_APP_API_URL}${api.setBrakeInChannel}`;

  try {
    const { data } = await axios.post(url, { channelForShowingNumber, prevSpeakerid }, {
      headers: {
        Authorization: `Bearer ${token.accessToken}`,
      },
    });
    return data;
  } catch (error) {
    return error.response;
  }
};

export const apiSetLogistOfTheYearSession = async (
  token: {
    accessToken: string | null;
    refreshToken: string | null;
  },

): Promise<any> => {
  const url = `${process.env.REACT_APP_API_URL}${api.setLogistOfTheYear}`;

  try {
    const { data } = await axios.post(url, {}, {
      headers: {
        Authorization: `Bearer ${token.accessToken}`,
      },
    });
    return data;
  } catch (error) {
    return error.response;
  }
};

export const apiDisableLogistOfTheYearSession = async (
  token: {
    accessToken: string | null;
    refreshToken: string | null;
  },

): Promise<any> => {
  const url = `${process.env.REACT_APP_API_URL}${api.disableLogistOfTheYear}`;

  try {
    const { data } = await axios.post(url, {}, {
      headers: {
        Authorization: `Bearer ${token.accessToken}`,
      },
    });
    return data;
  } catch (error) {
    return error.response;
  }
};
