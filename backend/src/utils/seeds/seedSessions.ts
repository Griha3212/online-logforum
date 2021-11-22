/* eslint-disable prefer-destructuring */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/prefer-default-export */
import { getRepository } from 'typeorm';
import Channels from '../../entities/channels';
import Sessions from '../../entities/sessions';

export const seedMockedSessions = async () => {
  const sessionsRepository = await getRepository(Sessions);
  const channelsRepository = await getRepository(Channels);

  const foundChannels: any = await channelsRepository.find();

  const sessionsToSeed = [

    // channel 1 -----------------------------------------------------------------------------------
    {

      name: 'Plenar',
      letter: 'Экскурсия',
      description: 'Автоматизированный РЦ компании Leroy Merlin',
      channelForShowing: await foundChannels.filter((channel: any) => channel.number === 1),
      nextSessionLetter: 'WMS DAY-1',
      nextSessionDescription: 'Панельная дискуссия директоров по логистике о внедрении WMS',
      nextSessionName: 'WMS1',
    },

  ];

  const results = [];

  for (const session of sessionsToSeed) {
    const newSession = new Sessions();

    newSession.name = session.name;
    newSession.letter = session.letter;
    newSession.description = session.description;
    newSession.channelForShowing = session.channelForShowing[0];
    newSession.nextSessionLetter = session.nextSessionLetter;
    newSession.nextSessionName = session.nextSessionName || '';
    newSession.nextSessionDescription = session.nextSessionDescription;

    results.push(newSession);
  }
  await sessionsRepository.save(results);
};
