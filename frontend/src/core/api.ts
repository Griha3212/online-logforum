const api = {

  login: 'api/auth/login',

  // vote: 'api/auth/login',

  getUser: 'api/user/get_user/',

  changeActiveSpeakerInChannel: 'api/admin/change_active_speaker_in_channel',

  setBrakeInChannel: 'api/admin/set_brake_in_channel',

  setLogistOfTheYear: 'api/admin/set_logist_of_the_year',

  disableLogistOfTheYear: 'api/admin/disable_logist_of_the_year',

  voteForSpeaker: 'api/user/vote_for_speaker',

  userUpdateWatchedSpeakers: 'api/user/update_watched_speakers',
  userUpdateWatchedSpeakersAll: 'api/user/update_watched_speakers_all',

  userUpdateContactedSpeakers: 'api/user/update_contacted_speakers',

  getAllChannels: 'api/user/get_all_channels/',

  changeActiveChannel: 'api/user/change_active_channel',

  getStats: 'api/stats/get_stats/',

  userTakeAPartInRafflePrizes: 'api/user/take_a_part_in_raffle_prizes',

};

export default api;
