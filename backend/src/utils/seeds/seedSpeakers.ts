/* eslint-disable prefer-destructuring */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/prefer-default-export */
import { getRepository } from 'typeorm';
import Sessions from '../../entities/sessions';
import Speakers from '../../entities/speakers';

export const seedMockedSpeakers = async () => {
  const speakersRepository = await getRepository(Speakers);
  const sessionsRepository = await getRepository(Sessions);

  const foundSessions: any = await sessionsRepository.find();

  // --------------------------------------------------------------------- Plenar Session
  const speakersToSeed = [

    {

      firstName: 'Слово',
      lastName: 'ВСТУПИТЕЛЬНОЕ',
      linkToImg: '',
      innerSystemName: '',
      session: foundSessions.filter((session: any) => session.name === 'Plenar'),

    },

    {

      firstName: 'Ырысбек',
      lastName: 'ТАШБАЕВ',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/per_Tashbayev.png`,
      innerSystemName: '',
      isModerator: true,
      session: foundSessions.filter((session: any) => session.name === 'Plenar'),

    },

    {
      lastName: 'Алюшин',
      firstName: 'Игорь',

      company: 'Leroy Merlin',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/per_Marinus.png`,
      linkToZoom: '',
      linkToPresentation: `${process.env.BACKEND_URL}/presentations/Plenar/Marinus.pdf`,
      topicName: 'Автоматизированный РЦ компании Leroy Merlin',
      innerSystemName: 'Alushin_Plenar',
      statusInCompany: 'Директор по логистический операциям',
      session: foundSessions.filter((session: any) => session.name === 'Plenar'),

    },

    {

      topicName: 'Роботизированный складской комплекс компании Decathlon',
      lastName: 'Толочко',
      firstName: 'Никита',
      statusInCompany: 'Руководитель складской логистики e-commerce',
      company: 'Decathlon',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Shulga.png`,

      linkToZoom: '',
      linkToPresentation: `${process.env.BACKEND_URL}/presentations/Plenar/Shulga.pdf`,

      innerSystemName: 'Tolochko_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'Plenar'),

    },

    {

      lastName: 'Воробьев',
      firstName: 'Юрий',

      company: 'Ralf Ringer',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Dementeva.png`,
      linkToZoom: '',
      linkToPresentation: `${process.env.BACKEND_URL}/presentations/Plenar/Dementeva.pdf`,
      topicName: 'Автоматизированный складской комплекс компании Ralf Ringer',
      innerSystemName: 'Vorobev_Plenar',
      statusInCompany: 'Директор по логистике',
      session: foundSessions.filter((session: any) => session.name === 'Plenar'),

    },

    {

      topicName: 'Мультитехнологичный складской комплекс компании IEK Group',
      lastName: 'Дидерев',
      firstName: 'Михаил',
      statusInCompany: 'Директор по логистике',
      company: 'IEK Group',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/per_Demin.png`,

      linkToZoom: '',
      linkToPresentation: `${process.env.BACKEND_URL}/presentations/Plenar/Demin.pdf`,

      innerSystemName: 'Diderev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'Plenar'),

    },
  ];

  const results = [];

  for (const speaker of speakersToSeed) {
    const newSpeaker = new Speakers();

    newSpeaker.firstName = speaker.firstName;
    newSpeaker.lastName = speaker.lastName;
    newSpeaker.company = speaker.company || '';
    newSpeaker.linkToZoom = speaker.linkToZoom || '';
    newSpeaker.linkToImg = speaker.linkToImg || '';
    newSpeaker.linkToPresentation = speaker.linkToPresentation || '';
    newSpeaker.topicName = speaker.topicName || '';
    newSpeaker.innerSystemName = speaker.innerSystemName || '';
    newSpeaker.isModerator = speaker.isModerator || false;
    newSpeaker.sessions = speaker.session[0];
    newSpeaker.statusInCompany = speaker.statusInCompany || '';

    results.push(newSpeaker);
  }
  await speakersRepository.save(results);
};
