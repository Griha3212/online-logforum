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
      description: 'Развитие логистики и управления цепями поставок в России и мире',
      channelForShowing: await foundChannels.filter((channel: any) => channel.number === 1),
      nextSessionLetter: 'WMS DAY-1',
      nextSessionDescription: 'Панельная дискуссия директоров по логистике о внедрении WMS',
      nextSessionName: 'WMS1',
    },

    {

      name: 'WMS1',
      letter: 'WMS DAY-1',
      description: 'Панельная дискуссия директоров по логистике о внедрении WMS',
      channelForShowing: await foundChannels.filter((channel: any) => channel.number === 1),
      nextSessionLetter: 'Сессия E',
      nextSessionDescription: 'Жизнестойкие цепи поставок: 5 трендов 2021 года',
      voteFoAllSession: true,
      partnerOfTheSessionImgSrc: `${process.env.BACKEND_URL}/img/sessionPartners/cemat.svg`,
      nextSessionName: 'SessE',
    },

    {

      name: 'SessE',
      letter: 'Сессия E',
      description: 'Жизнестойкие цепи поставок: 5 трендов 2021 года',
      channelForShowing: await foundChannels.filter((channel: any) => channel.number === 1),
      nextSessionLetter: 'Панельная сессия H',
      nextSessionDescription: 'Рекомендации по улучшению логистических процессов от директоров по логистике',
      voteFoAllSession: true,
      nextSessionName: 'SessH',
    },

    {

      name: 'SessH',
      letter: 'Панельная сессия H',
      description: 'Рекомендации по улучшению логистических процессов от директоров по логистике',
      channelForShowing: await foundChannels.filter((channel: any) => channel.number === 1),
      nextSessionLetter: '«Логист года»',
      nextSessionDescription: 'Подведение итогов конкурса «Логист года» ',
      voteFoAllSession: true,
      nextSessionName: 'LogistOfTheYear',
    },
    // LogistOfTheYear---------------
    {

      name: 'LogistOfTheYear',
      letter: '«Логист года»',
      description: 'Подведение итогов конкурса «Логист года» ',
      channelForShowing: await foundChannels.filter((channel: any) => channel.number === 1),
      nextSessionLetter: 'Экскурсия',
      nextSessionDescription: 'Подведение итогов конкурса «Логист года» ',
      nextSessionName: 'Exc1',
    },
    // Excursions---------------
    {

      name: 'Exc1',
      letter: 'Экскурсия',
      description: 'Автоматизированный распределительный центр компании «ЭТМ»',
      channelForShowing: await foundChannels.filter((channel: any) => channel.number === 1),
      nextSessionLetter: 'Экскурсия',
      nextSessionDescription: 'Инновационный складской комплекс Группы компаний «Дамате»',
      isSessionForSecondDay: true,
      nextSessionName: 'Exc2',
    },

    {

      name: 'Exc2',
      letter: 'Экскурсия',
      description: 'Инновационный складской комплекс Группы компаний «Дамате»',
      channelForShowing: await foundChannels.filter((channel: any) => channel.number === 1),
      nextSessionLetter: 'Экскурсия',
      nextSessionDescription: 'DarkStore Онлайн ритейлера «Утконос»',
      isSessionForSecondDay: true,
      nextSessionName: 'Exc3',
    },

    {

      name: 'Exc3',
      letter: 'Экскурсия',
      description: 'DarkStore Онлайн ритейлера «Утконос»',
      channelForShowing: await foundChannels.filter((channel: any) => channel.number === 1),
      nextSessionLetter: 'Экскурсия',
      nextSessionDescription: 'Экскурсия на Логистический центр (ЦРЦ Чехов) «М.Видео»',
      isSessionForSecondDay: true,
      nextSessionName: 'Exc4',
    },

    {
      name: 'Exc4',
      letter: 'Экскурсия',
      description: 'Экскурсия на Логистический центр (ЦРЦ Чехов) «М.Видео»',
      channelForShowing: await foundChannels.filter((channel: any) => channel.number === 1),
      nextSessionLetter: 'Экскурсия',
      nextSessionDescription: 'Централизованная складская система НЛМК',
      isSessionForSecondDay: true,
      nextSessionName: 'Exc5',
    },

    {
      name: 'Exc5',
      letter: 'Экскурсия',
      description: 'Централизованная складская система НЛМК',
      channelForShowing: await foundChannels.filter((channel: any) => channel.number === 1),
      nextSessionLetter: 'Экскурсия',
      nextSessionDescription: 'Распределительный центр компании-поставщика «S3». Международная премия за лучшую логистику в сегменте поставщиков в 2020 г.',
      isSessionForSecondDay: true,
      nextSessionName: 'Exc6',
    },

    {
      name: 'Exc6',
      letter: 'Экскурсия',
      description: 'Распределительный центр компании-поставщика «S3». Международная премия за лучшую логистику в сегменте поставщиков в 2020 г.',
      channelForShowing: await foundChannels.filter((channel: any) => channel.number === 1),
      nextSessionLetter: 'Экскурсия',
      nextSessionDescription: '',
      isSessionForSecondDay: true,
    },

    // channel 2 --------------------------------------------------------------------------------

    {

      name: 'SessA',
      letter: 'Сессия A',
      description: 'Лучший опыт применения инновационных технологий в логистике',
      channelForShowing: await foundChannels.filter((channel: any) => channel.number === 2),
      nextSessionLetter: 'Сессия D',
      nextSessionDescription: 'Опыт создания и оптимизации складов и логистических центров',
      partnerOfTheSessionImgSrc: `${process.env.BACKEND_URL}/img/sessionPartners/veeroute.svg`,
      nextSessionName: 'SessD',
    },

    {

      name: 'SessD',
      letter: 'Сессия D',
      description: 'Опыт создания и оптимизации складов и логистических центров',
      channelForShowing: await foundChannels.filter((channel: any) => channel.number === 2),
      nextSessionLetter: 'Сессия G',
      nextSessionDescription: 'Лучшая практика организации логистики при развитии e-com продаж',
      nextSessionName: 'SessG',
    },

    {

      name: 'SessG',
      letter: 'Сессия G',
      description: 'Лучшая практика организации логистики при развитии e-com продаж',
      channelForShowing: await foundChannels.filter((channel: any) => channel.number === 2),
      nextSessionLetter: '«Логист года»',
      nextSessionDescription: 'Подведение итогов конкурса «Логист года» ',
      nextSessionName: 'LogistOfTheYear',
    },

    // channel 3 --------------------------------------------------------------------------------

    {

      name: 'SessB',
      letter: 'Сессия B',
      description: 'Комплексные логистические решения для ритейлеров и производителей',
      channelForShowing: await foundChannels.filter((channel: any) => channel.number === 3),
      nextSessionLetter: 'WMS DAY-2',
      nextSessionDescription: 'Лучшая практика внедрения и эксплуатации WMS',
      nextSessionName: 'WMS2',
    },

    {

      name: 'WMS2',
      letter: 'WMS DAY-2',
      description: 'Лучшая практика внедрения и эксплуатации WMS',
      channelForShowing: await foundChannels.filter((channel: any) => channel.number === 3),
      nextSessionLetter: 'Сессия J',
      nextSessionDescription: 'Логистика промышленных компаний: опыт улучшения процессов, систем и инфраструктуры',
      nextSessionName: 'SessJ',
    },

    {

      name: 'SessJ',
      letter: 'Сессия J',
      description: 'Логистика промышленных компаний: опыт улучшения процессов, систем и инфраструктуры',
      channelForShowing: await foundChannels.filter((channel: any) => channel.number === 3),
      nextSessionLetter: '«Логист года»',
      nextSessionDescription: 'Подведение итогов конкурса «Логист года» ',
      nextSessionName: 'LogistOfTheYear',
    },

    // channel 4 --------------------------------------------------------------------------------

    {

      name: 'SessC',
      letter: 'Сессия C',
      description: 'Цифровой транспорт: прозрачное управление затратами и создание конкурентных преимуществ для бизнеса',
      channelForShowing: await foundChannels.filter((channel: any) => channel.number === 4),
      nextSessionLetter: 'Сессия F',
      nextSessionDescription: 'Опыт оптимизации транспортно-логистического обеспечения компании',
      partnerOfTheSessionImgSrc: `${process.env.BACKEND_URL}/img/sessionPartners/ati.su.svg`,
      nextSessionName: 'SessF',
    },

    {

      name: 'SessF',
      letter: 'Сессия F',
      description: 'Опыт оптимизации транспортно-логистического обеспечения компании',
      channelForShowing: await foundChannels.filter((channel: any) => channel.number === 4),
      nextSessionLetter: 'Специальная сессия I',
      nextSessionDescription: 'Workshop. Решение задач участников Форума с лидерами КСЛ.Experts',
      nextSessionName: 'SessI',
    },

    {

      name: 'SessI',
      letter: 'Специальная сессия I',
      description: 'Workshop. Решение задач участников Форума с лидерами КСЛ.Experts',
      channelForShowing: await foundChannels.filter((channel: any) => channel.number === 4),
      nextSessionLetter: '«Логист года»',
      nextSessionDescription: 'Подведение итогов конкурса «Логист года» ',
      // voteFoAllSession: true,
      nextSessionName: 'LogistOfTheYear',
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
    newSession.voteFoAllSession = session.voteFoAllSession || false;
    newSession.isSessionForSecondDay = session.isSessionForSecondDay || false;
    newSession.partnerOfTheSessionImgSrc = session.partnerOfTheSessionImgSrc || '';

    results.push(newSession);
  }
  await sessionsRepository.save(results);
};
