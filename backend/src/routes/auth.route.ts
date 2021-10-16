/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import express from 'express';
import passport from 'passport';
import * as authController from '../controllers/auth.controller';

const router = express.Router();

const {

  userLogin,
  // updateToken,

} = authController;

router.post('/login',
  passport.authenticate('localSignIn', { session: false }),
  userLogin);
// router.post('/updateToken', updateToken);

export { router };
