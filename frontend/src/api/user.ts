/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import api from '../core/api';

// Login
export const apiGetUser = async (
  userId: number,
  token: {
    accessToken: string | null;
    refreshToken: string | null;
  },

): Promise<any> => {
  const url = `${process.env.REACT_APP_API_URL}${api.getUser}${userId}`;

  try {
    const { data } = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token.accessToken}`,
      },
    });
    return data;
  } catch (error) {
    return error.response;
  }
};

export const apiVoteForSpeaker = async (
  speakerId: number,
  userId: number,
  token: {
    accessToken: string | null;
    refreshToken: string | null;
  },
  rate: number | null,
): Promise<any> => {
  const url = `${process.env.REACT_APP_API_URL}${api.voteForSpeaker}`;

  try {
    const { data } = await axios.post(url, { speakerId, userId, rate }, {
      headers: {
        Authorization: `Bearer ${token.accessToken}`,
      },
    });
    return data;
  } catch (error) {
    return error.response;
  }
};

export const apiUserUpdateWatchedSpeakers = async (
  speakerId: number,
  userId: number,
  token: {
    accessToken: string | null;
    refreshToken: string | null;
  },
): Promise<any> => {
  const url = `${process.env.REACT_APP_API_URL}${api.userUpdateWatchedSpeakers}`;

  try {
    const { data } = await axios.post(url, { speakerId, userId }, {
      headers: {
        Authorization: `Bearer ${token.accessToken}`,
      },
    });
    return data;
  } catch (error) {
    return error.response;
  }
};

export const apiUserUpdateContactedSpeakers = async (
  speakerId: number,
  userId: number,
  token: {
    accessToken: string | null;
    refreshToken: string | null;
  },
): Promise<any> => {
  const url = `${process.env.REACT_APP_API_URL}${api.userUpdateContactedSpeakers}`;

  try {
    const { data } = await axios.post(url, { speakerId, userId }, {
      headers: {
        Authorization: `Bearer ${token.accessToken}`,
      },
    });
    return data;
  } catch (error) {
    return error.response;
  }
};

export const apiUserTakeAPartInRafflePrizes = async (
  userId: number,
  token: {
    accessToken: string | null;
    refreshToken: string | null;
  },
): Promise<any> => {
  const url = `${process.env.REACT_APP_API_URL}${api.userTakeAPartInRafflePrizes}`;

  try {
    const { data } = await axios.post(url, { userId }, {
      headers: {
        Authorization: `Bearer ${token.accessToken}`,
      },
    });
    return data;
  } catch (error) {
    return error.response;
  }
};

export const apiUserUpdateWatchedSpeakersAllInSession = async (
  sessionId: number,
  userId: number,
  token: {
    accessToken: string | null;
    refreshToken: string | null;
  },
): Promise<any> => {
  const url = `${process.env.REACT_APP_API_URL}${api.userUpdateWatchedSpeakersAll}`;

  try {
    const { data } = await axios.post(url, { sessionId, userId }, {
      headers: {
        Authorization: `Bearer ${token.accessToken}`,
      },
    });
    return data;
  } catch (error) {
    return error.response;
  }
};

export const apiGetAllChannels = async (
  userId: number,
  token: {
    accessToken: string | null;
    refreshToken: string | null;
  },

): Promise<any> => {
  const url = `${process.env.REACT_APP_API_URL}${api.getAllChannels}${userId}`;

  try {
    const { data } = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token.accessToken}`,
      },
    });
    return data;
  } catch (error) {
    return error.response;
  }
};

export const apiUserChangeActiveChannel = async (
  channelNumber: number,
  userId: number,
  token: {
    accessToken: string | null;
    refreshToken: string | null;
  },
): Promise<any> => {
  const url = `${process.env.REACT_APP_API_URL}${api.changeActiveChannel}`;

  try {
    const { data } = await axios.post(url, { channelNumber, userId }, {
      headers: {
        Authorization: `Bearer ${token.accessToken}`,
      },
    });
    return data;
  } catch (error) {
    return error.response;
  }
};
