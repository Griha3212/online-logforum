/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import express from 'express';
import passport from 'passport';
import * as authController from '../controllers/stats.controller';

const router = express.Router();

const {

  getStats,
  updateStats,
  // updateToken,

} = authController;

router.get(
  '/get_stats/:userId',
  passport.authenticate('jwt', { session: false }),
  getStats,
);

router.get(
  '/update_stats',
  // passport.authenticate('jwt', { session: false }),
  updateStats,
);

export { router };
