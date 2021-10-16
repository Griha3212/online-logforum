/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import express from 'express';
import passport from 'passport';
import * as adminController from '../controllers/admin.contorller';

const router = express.Router();

const {

  changeActiveSpeakerInChannel,
  setBreakBetweenSessions,
  setLogistOfTheYear,
  disableLogistOfTheYear,

} = adminController;

router.post('/change_active_speaker_in_channel',
  passport.authenticate('jwt', { session: false }),
  changeActiveSpeakerInChannel);

router.post('/set_brake_in_channel',
  passport.authenticate('jwt', { session: false }),
  setBreakBetweenSessions);

router.post('/set_logist_of_the_year',
  passport.authenticate('jwt', { session: false }),
  setLogistOfTheYear);

router.post('/disable_logist_of_the_year',
  passport.authenticate('jwt', { session: false }),
  disableLogistOfTheYear);

export { router };
