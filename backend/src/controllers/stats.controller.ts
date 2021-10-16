/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import Speakers from '../entities/speakers';
import Users from '../entities/users';
import allErrors from '../utils/errors';

// TO DO
export const getStats = async (req: Request, res: Response, next: NextFunction) => {
  const usersRepository = await getRepository(Users);
  const speakersRepository = await getRepository(Speakers);

  try {
    const { userId } = req.params;

    const foundUser = await usersRepository.findOne(
      {
        where: { id: userId },

      },
    );

    if (!foundUser) throw new Error(allErrors.userNotFound);

    if (!foundUser.hasAccessToStatisticPage) throw new Error(allErrors.notStatsAccount);

    const foundSpeakers = await speakersRepository.find(
      {
        relations: ['usersWhoWatchedSpeaker', 'votes',
          'votes.user', 'usersWhoSendContacts', 'usersWhoSendContacts.user'],
      },
    );

    const foundAllUsers = await usersRepository.find();

    res.status(200).send({ foundSpeakers, foundAllUsers });
  } catch (error) {
    next(error);
  }
};

export const updateStats = async (req: Request, res: Response, next: NextFunction) => {
  const usersRepository = await getRepository(Users);
  const speakersRepository = await getRepository(Speakers);

  try {
    const { userId } = req.params;

    // found JOS

    const foundAllSpeakersBig = await speakersRepository.find();

    if (!foundAllSpeakersBig) throw new Error(allErrors.speakerNotFound);

    for (const selectedSpeaker of foundAllSpeakersBig) {
      const speaker = await speakersRepository.findOne(
        {
          where: { id: selectedSpeaker.id },
          relations: ['usersWhoWatchedSpeaker', 'votes',
            'votes.user', 'usersWhoSendContacts', 'usersWhoSendContacts.user'],
        },
      );

      if (!speaker) throw new Error(allErrors.speakerNotFound);

      // const foundSpeakers = await speakersRepository.find(
      //   {
      //     relations: ['usersWhoWatchedSpeaker', 'votes',
      //       'votes.user', 'usersWhoSendContacts', 'usersWhoSendContacts.user'],
      //   },
      // );

      const randomIntFromInterval = (min: number, max: number) => // min and max included
        Math.floor(Math.random() * (max - min + 100) + min);

      const foundAllSpeakers = await speakersRepository.find({
        relations: ['usersWhoWatchedSpeaker'],
      });

      const foundAllUsers = await usersRepository.find({ relations: ['watchedSpeakers'] });

      if (!speaker.isModerator) {
        const foundWatchedUsers = speaker.usersWhoWatchedSpeaker;

        // console.log('foundWatchedUsers :>> ', foundWatchedUsers);

        let needAmountOfAddedUsers = Math.floor(
          (foundWatchedUsers.length * 2.5 - foundWatchedUsers.length),
        );

        let arrayOfUnicNewUsers = foundAllUsers.filter(
          (objFromA) => !foundWatchedUsers.find((objFromB: any) => objFromA.id === objFromB.id),
        );

        if (foundWatchedUsers.length === 0) {
          arrayOfUnicNewUsers = foundAllUsers;
        }

        console.log('arrayOfUnicNewUsers.length :>> ', arrayOfUnicNewUsers.length);

        if (foundWatchedUsers.length < 10 && speaker.id !== 1) {
          needAmountOfAddedUsers = randomIntFromInterval(200, 230);
        }

        // intro word
        if (speaker.id === 1) {
          console.log('1 :>> ');
          needAmountOfAddedUsers = 201;
        }
        console.log('speaker.id :>> ', speaker.id);
        console.log('needAmountOfAddedUsers :>> ', needAmountOfAddedUsers);

        // shuffle an array of arrayOfUnicNewUsers
        // arrayOfUnicNewUsers.sort(() => Math.random() - 0.5);

        const result = [];

        for (let index = 0; index < needAmountOfAddedUsers; index++) {
          const userToUpdate = arrayOfUnicNewUsers[index];
          // console.log('userToUpdate :>> ', userToUpdate);
          await userToUpdate.watchedSpeakers.push(speaker);
          await result.push(userToUpdate);
        }

        await usersRepository.save(result);
      }
    }
    res.status(200).send('success');
  } catch (error) {
    next(error);
  }
};
