/* eslint-disable import/prefer-default-export */
import { DataForUser } from '../../interfaces/allInterfaces';

export const showOtherChannelsBlock = (dataForUser: DataForUser | undefined): boolean => {
  if (dataForUser && dataForUser.channelUserInfo.number === 1
        && dataForUser.channelUserInfo.activeSession && dataForUser.channelUserInfo.activeSession.name === 'Plenar'
        && dataForUser.channelUserInfo.started === true
        && dataForUser.channelUserInfo.break === false
  ) {
    return false;
  }

  if (dataForUser && dataForUser.channelUserInfo.number === 1
        && !dataForUser.channelUserInfo.activeSession
  ) {
    return false;
  }

  if (dataForUser && dataForUser.foundUser.showOtherChannelsBlock) {
    return true;
  }

  return false;
};
