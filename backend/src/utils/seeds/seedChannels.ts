/* eslint-disable no-restricted-syntax */
/* eslint-disable import/prefer-default-export */
import { getRepository } from 'typeorm';
import Channels from '../../entities/channels';

export const seedMockedChannels = async () => {
  const channelsRepository = await getRepository(Channels);

  // test links now
  const channelsToSeed = [{
    number: 1,
    link: 'https://facecast.net/v/dbf35c',
    startChannelSessionLetter: 'Экскурсия',
    startChannelSessionDescription: 'Развитие логистики и управления цепями поставок в России и мире',
    channelLocation: 'Полусфера',
    nextSessionName: 'Plenar',
  },

  {
    number: 2,
    link: 'https://facecast.net/v/ddzguw',
    startChannelSessionLetter: 'Сессия A',
    startChannelSessionDescription: 'Лучший опыт применения инновационных технологий в логистике',
    channelLocation: 'Сфера',
    nextSessionName: 'SessA',
  },
  {
    number: 3,
    link: 'https://facecast.net/v/owzke1',
    startChannelSessionLetter: 'Сессия B',
    startChannelSessionDescription: 'Комплексные логистические решения для ритейлеров и производителей',
    channelLocation: 'Аудитория 5',
    nextSessionName: 'SessB',
  },

  {
    number: 4,
    link: 'https://facecast.net/v/zcxuvx',
    startChannelSessionLetter: 'Сессия С',
    startChannelSessionDescription: 'Цифровой транспорт: прозрачное управление затратами и создание конкурентных преимуществ для бизнеса',
    channelLocation: 'Аудитория 2',
    nextSessionName: 'SessC',
  },

  ];

  const results = [];

  for (const channel of channelsToSeed) {
    const newChannel = new Channels();

    newChannel.number = channel.number;
    newChannel.link = channel.link;
    newChannel.startChannelSessionLetter = channel.startChannelSessionLetter;
    newChannel.startChannelSessionDescription = channel.startChannelSessionDescription;
    newChannel.channelLocation = channel.channelLocation;
    newChannel.nextSessionName = channel.nextSessionName;

    results.push(newChannel);
  }
  await channelsRepository.save(results);
};
