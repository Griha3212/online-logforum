/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import chalk from 'chalk';
import Channels from '../entities/channels';
import Speakers from '../entities/speakers';
import allErrors from '../utils/errors';
import { io } from '../server';
import Users from '../entities/users';
import Sessions from '../entities/sessions';

export const changeActiveSpeakerInChannel = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const speakersRepository = await getRepository(Speakers);
  const channelsRepository = await getRepository(Channels);

  try {
    const { channelForShowingNumber, speakerIdToActivate } = req.body;

    const foundSpeaker = await speakersRepository.findOne(
      { where: { id: speakerIdToActivate }, relations: ['sessions'] },
    );

    if (!foundSpeaker) throw new Error(allErrors.userNotFound);

    const foundChannelToUpdateInfo = await channelsRepository.findOne(
      { where: { number: channelForShowingNumber } },
    );

    if (!foundChannelToUpdateInfo) throw new Error(allErrors.channelNotFound);

    // if it's input word speaker
    if (foundSpeaker.firstName === 'Слово' && foundSpeaker.lastName === 'ВСТУПИТЕЛЬНОЕ') {
      foundChannelToUpdateInfo.started = true;

      foundChannelToUpdateInfo.activeSpeaker = null;
      foundChannelToUpdateInfo.activeSession = null;
      foundChannelToUpdateInfo.break = true;
    } else {
      foundChannelToUpdateInfo.activeSpeaker = foundSpeaker;
      foundChannelToUpdateInfo.activeSession = foundSpeaker.sessions;
      foundChannelToUpdateInfo.break = false;
    }

    await channelsRepository.save(foundChannelToUpdateInfo);

    const data = { message: 'update speaker in channel', updatedSpeaker: foundSpeaker };

    io.to(`channel${String(foundChannelToUpdateInfo.number)}`).emit('connectToChannelRoom', data);

    res.status(200).send(foundSpeaker);
  } catch (error) {
    next(error);
  }
};

export const setBreakBetweenSessions = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const channelsRepository = await getRepository(Channels);
  const usersRepository = await getRepository(Users);

  try {
    const { channelForShowingNumber } = req.body;

    const foundChannelToUpdateInfo = await channelsRepository.findOne(
      { where: { number: channelForShowingNumber }, relations: ['activeSession'] },
    );

    if (!foundChannelToUpdateInfo) throw new Error(allErrors.channelNotFound);

    // if plenar session, activate OtherChannelsBlock in UI
    if (foundChannelToUpdateInfo.activeSession?.name === 'Plenar') {
      const foundUsers = await usersRepository.find();

      const results = [];

      for (const user of foundUsers) {
        user.showOtherChannelsBlock = true;
        results.push(user);
      }
      await usersRepository.save(results);

      // socket update
      const data = { message: 'update' };

      io.to(String('channel1')).to('channel2').to('channel3').to('channel4')
        .emit('connectToChannelRoom', data);
      console.log(chalk.green('Activate OtherChannelsBlock'));
    }

    // update first channel link if it's brake after LogistOfTheYear session
    // if (foundChannelToUpdateInfo.activeSession?.name === 'LogistOfTheYear') {
    //   // TO DO, update link before start
    //   foundChannelToUpdateInfo.link = 'https://facecast.net/v/e0ypcc';

    //   // // socket update
    //   // const data = { message: 'update' };

    //   // io.to(String('channel1')).emit('connectToChannelRoom', data);
    //   // console.log(chalk.green('Update first channel link'));
    // }

    // foundChannelToUpdateInfo.activeSession = null;
    foundChannelToUpdateInfo.activeSpeaker = null;
    foundChannelToUpdateInfo.break = true;
    await channelsRepository.save(foundChannelToUpdateInfo);

    const data = { message: 'update' };

    io.to(`channel${String(foundChannelToUpdateInfo.number)}`).emit('connectToChannelRoom', data);

    res.status(200).send(foundChannelToUpdateInfo);
  } catch (error) {
    next(error);
  }
};

export const setLogistOfTheYear = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const usersRepository = await getRepository(Users);
  const sessionsRepository = await getRepository(Sessions);
  const channelsRepository = await getRepository(Channels);

  try {
    const foundLogistOfTheYearSession = await sessionsRepository.findOne(
      {
        where: { name: 'LogistOfTheYear' },
      },
    );

    if (!foundLogistOfTheYearSession) throw new Error(allErrors.sessionNotFound);

    const foundFirstChannel = await channelsRepository.findOne({ where: { number: 1 } });

    if (!foundFirstChannel) throw new Error(allErrors.channelNotFound);

    const foundUsers = await usersRepository.find();

    const results = [];

    for (const user of foundUsers) {
      user.showOtherChannelsBlock = false;
      user.activeChannel = 1;
      results.push(user);
    }
    await usersRepository.save(results);

    foundFirstChannel.activeSession = foundLogistOfTheYearSession;
    foundFirstChannel.break = false;

    await channelsRepository.save(foundFirstChannel);

    // socket update
    const data = { message: 'update' };

    io.to(String('channel1')).to('channel2').to('channel3').to('channel4')
      .emit('connectToChannelRoom', data);
    console.log(chalk.green('Activate Logist Of The Year'));

    res.status(200).send('Activate Logist Of The Year');
  } catch (error) {
    next(error);
  }
};

export const disableLogistOfTheYear = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const usersRepository = await getRepository(Users);

  try {
    const foundUsers = await usersRepository.find();

    const results = [];

    for (const user of foundUsers) {
      user.showOtherChannelsBlock = true;
      results.push(user);
    }
    await usersRepository.save(results);

    // socket update
    const data = { message: 'update' };

    io.to(String('channel1')).to('channel2').to('channel3').to('channel4')
      .emit('connectToChannelRoom', data);
    console.log(chalk.green('Activate Logist Of The Year'));

    res.status(200).send('Activate Logist Of The Year');
  } catch (error) {
    next(error);
  }
};
