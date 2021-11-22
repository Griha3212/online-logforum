/* eslint-disable no-restricted-syntax */
/* eslint-disable import/prefer-default-export */
import { getRepository } from 'typeorm';
import Channels from '../../entities/channels';

export const seedMockedChannels = async () => {
  const channelsRepository = await getRepository(Channels);

  // test links now
  const channelsToSeed = [
    {
      number: 1,
      link: 'https://facecast.net/v/griwwo',
      startChannelSessionLetter: 'Экскурсия',
      startChannelSessionDescription: 'Автоматизированный РЦ компании Leroy Merlin',
      channelLocation: '',
      nextSessionName: 'Plenar',
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
