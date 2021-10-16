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
      lastName: 'MARINUS',
      firstName: 'Jos',

      company: 'Бельгийская Логистическая Ассоциация (VIB), г. Брюссель',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/per_Marinus.png`,
      linkToZoom: '',
      linkToPresentation: `${process.env.BACKEND_URL}/presentations/Plenar/Marinus.pdf`,
      topicName: 'Методы и технологии в цепях поставок, обеспечивающие устойчивое развитие',
      innerSystemName: 'Marinus_Plenar',
      statusInCompany: 'Президент',
      session: foundSessions.filter((session: any) => session.name === 'Plenar'),

    },

    {

      topicName: 'Как изменится цепочка поставок ритейлеров и поставщиков в 2021 г.',
      lastName: 'ШУЛЬГА',
      firstName: 'Денис',
      statusInCompany: 'Директор по логистике',
      company: 'X5 Retail Group',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Shulga.png`,

      linkToZoom: '',
      linkToPresentation: `${process.env.BACKEND_URL}/presentations/Plenar/Shulga.pdf`,

      innerSystemName: 'Shulga_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'Plenar'),

    },

    {

      lastName: 'ДЕМЕНТЬЕВА',
      firstName: 'Ирина',

      company: 'Группа «М.Видео-Эльдорадо»',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Dementeva.png`,
      linkToZoom: '',
      linkToPresentation: `${process.env.BACKEND_URL}/presentations/Plenar/Dementeva.pdf`,
      topicName: 'Тренды, вызовы и задачи в логистике non-food ритейла в 2021 г.',
      innerSystemName: 'Dementeva_Plenar',
      statusInCompany: 'Директор по логистике',
      session: foundSessions.filter((session: any) => session.name === 'Plenar'),

    },

    {

      topicName: 'Формирование стратегии логистики компании с учетом изменений в 2020 – 2021 гг. Создание конкурентных преимуществ',
      lastName: 'ДЕМИН',
      firstName: 'Василий',
      statusInCompany: 'Д.т.н., заместитель директора',
      company: 'Координационный совет по логистике',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/per_Demin.png`,

      linkToZoom: '',
      linkToPresentation: `${process.env.BACKEND_URL}/presentations/Plenar/Demin.pdf`,

      innerSystemName: 'Demin_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'Plenar'),

    },

    {

      topicName: 'От карго-культа к мани-майнингу: как сделать деньги на логистических и информационных технологиях',
      lastName: 'ЛИХАРЕВ',
      firstName: 'Сергей',
      statusInCompany: 'Вице-президент по логистике',
      company: 'ПАО «НЛМК»',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/per_LIHAREV.png`,

      linkToZoom: '',
      linkToPresentation: `${process.env.BACKEND_URL}/presentations/Plenar/Liharev.pdf`,

      innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'Plenar'),

    },

    // --------------------------------------------------------------------- Session A

    {

      lastName: 'БОГАЧЕВ',
      firstName: 'Игорь',

      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Bogachev.png`,
      innerSystemName: 'Bogachev',
      isModerator: true,
      session: foundSessions.filter((session: any) => session.name === 'SessA'),

    },

    {

      topicName: 'Создание DarkStores при изменении форматов логистики в условиях роста онлайн продаж',
      lastName: 'ОБРАЗЦОВА',
      firstName: 'Елена',
      statusInCompany: 'Директор по операциям',
      company: 'Утконос',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Obrazcova.png`,

      linkToZoom: '',
      linkToPresentation: `${process.env.BACKEND_URL}/presentations/SessA/Obrazcova.pdf`,

      session: foundSessions.filter((session: any) => session.name === 'SessA'),

    },

    {

      lastName: 'ЕЛЕЦКИХ ',
      firstName: 'Илья',

      company: 'Coca-Cola HBC Россия',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Eleckih.png`,
      linkToZoom: '',
      linkToPresentation: `${process.env.BACKEND_URL}/presentations/SessA/Eleckih.pdf`,
      topicName: 'Система управления инновациями в цепях поставок: за счет чего мы формируем стратегическое преимущество на меняющемся рынке',
      innerSystemName: 'Eleckih',
      statusInCompany: 'Директор по развитию и инновациям функции снабжения по стране',
      session: foundSessions.filter((session: any) => session.name === 'SessA'),

    },

    {

      topicName: '7 хороших вопросов вендору логистической платформы',
      lastName: 'ГАВРИЛОВ',
      firstName: 'Алексей',
      statusInCompany: 'Руководитель направления «Управление производством и цепочками поставок»',
      company: 'SAP CIS',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Gavrilov.png`,

      linkToZoom: 'https://sap-se.zoom.com/j/91038491097',
      linkToPresentation: `${process.env.BACKEND_URL}/presentations/SessA/Gavrilov.pdf`,
      hasSendContactsButton: true,
      session: foundSessions.filter((session: any) => session.name === 'SessA'),

    },

    {

      topicName: 'Математика и доставка. Кейсы трансформации бизнеса в цифрах',
      lastName: 'МАКЕЕВ',
      firstName: 'Алексей',
      statusInCompany: 'CEO',
      company: 'VeeRoute Consulting',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Makeev.png`,

      linkToZoom: '',
      linkToPresentation: `${process.env.BACKEND_URL}/presentations/SessA/Makeev.pdf`,
      hasSendContactsButton: true,
      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'SessA'),

    },

    {

      topicName: 'Логистика на пользу конкурентноспособности',
      lastName: 'МАШКОВ',
      firstName: 'Александр',
      statusInCompany: 'Директор по логистике',
      company: 'ПАО «Ростелеком»',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Mashkov.png`,

      linkToZoom: '',
      linkToPresentation: `${process.env.BACKEND_URL}/presentations/SessA/Mashkov.pdf`,

      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'SessA'),

    },

    // --------------------------------------------------------------------- Session B

    {

      lastName: 'МАРТЬЯНОВ',
      firstName: 'Антон',

      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Martyanov.png`,
      // innerSystemName: 'Bogachev',
      isModerator: true,
      session: foundSessions.filter((session: any) => session.name === 'SessB'),

    },

    {

      topicName: 'Управление потоками товаров в ритейле',
      lastName: 'ФИЛИМОНОВА',
      firstName: 'Наталья',
      statusInCompany: 'Директор департамента по операционному планированию',
      company: 'Х5 Retail Group',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Filimonova.png`,

      linkToZoom: '',
      linkToPresentation: `${process.env.BACKEND_URL}/presentations/SessB/Filimonova.pdf`,

      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'SessB'),

    },

    {

      topicName: 'Современные подходы в управлении запасами. Опыт «Магнит»',
      lastName: 'СОРОКОУМОВА',
      firstName: 'Анастасия',
      statusInCompany: 'директор департамента операционного планирования',
      company: 'Магнит',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Sorokoumova.png`,

      linkToZoom: '',
      linkToPresentation: `${process.env.BACKEND_URL}/presentations/SessB/Sorokoumova,Kanaev.pdf`,

      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'SessB'),

    },

    {

      topicName: 'Опыт внедрения методологии DDMRP в управлении запасами и планировании цепи поставок в компании-производителе медицинской техники в условиях непредсказуемого изменения спроса в 2020 г.',
      lastName: 'АМПЛЕЕВ',
      firstName: 'Андрей',
      statusInCompany: 'Директор по ИТ',
      company: 'ЗАО "Завод ЭМА"',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Ampleev.png`,

      linkToZoom: '',
      linkToPresentation: `${process.env.BACKEND_URL}/presentations/SessB/Ampleev.pdf`,

      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'SessB'),

    },

    {

      topicName: 'Пункты выдачи: что нас ждет в 2021',
      lastName: 'ЗИЛЬБЕРБЕРГ',
      firstName: 'Ирина',
      statusInCompany: 'Начальник управления партнерской сети',
      company: 'DPD Pickup',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Zilberberg.png`,

      linkToZoom: '',
      linkToPresentation: `${process.env.BACKEND_URL}/presentations/SessB/Zilberberg.pdf`,

      // innerSystemName: 'Liharev_Plenar',
      hasSendContactsButton: true,
      session: foundSessions.filter((session: any) => session.name === 'SessB'),

    },

    {

      topicName: '"Вакцина" для поставщиков: цифровизация логистики на пути к федеральному ритейлу',
      lastName: 'БЕЗЕНКОВ',
      firstName: 'Денис',
      statusInCompany: 'Директор по развитию',
      company: 'SpaceCargo.ru',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Bezenkov.png`,

      linkToZoom: '',
      linkToPresentation: `${process.env.BACKEND_URL}/presentations/SessB/Bezenkov.pdf`,

      // innerSystemName: 'Liharev_Plenar',
      hasSendContactsButton: true,
      session: foundSessions.filter((session: any) => session.name === 'SessB'),

    },

    // --------------------------------------------------------------------- Session C

    {

      lastName: 'РОХМАН',
      firstName: 'Дмитрий',

      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Rohman.png`,
      // innerSystemName: 'Bogachev',
      isModerator: true,
      session: foundSessions.filter((session: any) => session.name === 'SessC'),

    },

    {

      topicName: 'Изменения приоритетов в транспортной стратегии компании',
      lastName: 'ТУПИН',
      firstName: 'Кирилл',
      statusInCompany: 'Директор по логистике',
      company: 'ГК «Ренна холдинг»',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Tupin.png`,

      linkToZoom: '',
      linkToPresentation: `${process.env.BACKEND_URL}/presentations/SessC/Tupin.pdf`,

      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'SessC'),

    },

    {

      topicName: 'Цифровизация всей цепочки автомобильных грузоперевозок: от грузовладельца до водителя',
      lastName: 'ВИЛЬДЕ',
      firstName: 'Святослав',
      statusInCompany: 'Управляющий',
      company: 'ATI.SU',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Vilde.png`,

      linkToZoom: '',
      linkToPresentation: `${process.env.BACKEND_URL}/presentations/SessC/Vilde.pdf`,

      // innerSystemName: 'Liharev_Plenar',
      hasSendContactsButton: true,
      session: foundSessions.filter((session: any) => session.name === 'SessC'),

    },

    {

      topicName: 'Логистика до «последней мили»: как сделать вашего покупателя счастливым. Инструменты и кейсы.',
      lastName: 'БАБАЕВА',
      firstName: 'Ольга',
      statusInCompany: 'Директор по развитию',
      company: 'Умная Логистика',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Babaeva.png`,

      linkToZoom: 'https://zoom.us/j/94564426366?pwd=end4Y0xhSkhScnh2Qm40TklNenFYQT09',
      linkToPresentation: `${process.env.BACKEND_URL}/presentations/SessC/Babaeva.pdf`,
      hasSendContactsButton: true,
      hasRafflePrizesButton: true,
      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'SessC'),

    },

    {

      topicName: 'Уменьшение доли логистических затрат в структуре себестоимости с помощью комплексной автоматизации',
      lastName: 'ШИРИНЯН',
      firstName: 'Том',
      statusInCompany: 'CEO',
      company: 'Vezubr',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Shirinyan.png`,

      linkToZoom: '',
      linkToPresentation: `${process.env.BACKEND_URL}/presentations/SessC/Shirinyan.pdf`,
      // innerSystemName: 'Liharev_Plenar',
      hasSendContactsButton: true,
      session: foundSessions.filter((session: any) => session.name === 'SessC'),

    },

    {

      topicName: 'Новая цифровая экосистема в логистике: инновационный подход',
      lastName: 'КРАУС',
      firstName: 'Олег',
      statusInCompany: 'Управляющий партнер',
      company: 'Atlas Delivery и MEDPOINT24',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Kraus.png`,

      linkToZoom: '',
      linkToPresentation: `${process.env.BACKEND_URL}/presentations/SessC/Kraus.pdf`,
      hasSendContactsButton: true,
      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'SessC'),

    },

    // --------------------------------------------------------------------- WMS DAY-1

    {

      lastName: 'БАДУЛИНА',
      firstName: 'Марина',

      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Badulina.png`,
      // innerSystemName: 'Bogachev',
      isModerator: true,
      session: foundSessions.filter((session: any) => session.name === 'WMS1'),

    },

    {

      topicName: '',
      lastName: 'УРИН',
      firstName: 'Вадим',
      statusInCompany: 'Директор по логистике',
      company: 'S3',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Urin.png`,

      linkToZoom: '',
      linkToPresentation: '',

      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'WMS1'),

    },

    {

      topicName: '',
      lastName: 'АНТОНОВ',
      firstName: 'Максим',
      statusInCompany: 'Руководитель проектов',
      company: 'ГК «ЭФКО',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Antonov.png`,

      linkToZoom: '',
      linkToPresentation: '',

      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'WMS1'),

    },

    {

      topicName: '',
      lastName: 'ПОЛКОВНИКОВ',
      firstName: 'Вячеслав',
      statusInCompany: 'Директор по логистике',
      company: 'ГК «Армтек»',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Polkovnikov.png`,

      linkToZoom: '',
      linkToPresentation: '',

      session: foundSessions.filter((session: any) => session.name === 'WMS1'),

    },

    {

      topicName: '',
      lastName: 'КОНОВ',
      firstName: 'Максим',
      statusInCompany: 'Руководитель проектов',
      company: 'Координационный совет по логистике',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Konov.png`,

      linkToZoom: '',
      linkToPresentation: '',

      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'WMS1'),

    },

    {

      topicName: '',
      lastName: 'ХАЙРОВ',
      firstName: 'Марат',
      statusInCompany: 'Вице-президент по инновациям',
      company: 'ДГК Дамате',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Hairov.png`,

      linkToZoom: '',
      linkToPresentation: '',

      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'WMS1'),

    },

    {

      topicName: '',
      lastName: 'СУСАНОВ',
      firstName: 'Игорь',
      statusInCompany: 'Руководитель управления складской логистики, дирекция по управлению поставками, дистрибьюцией и логистикой',
      company: 'Мвидео-Эльдорадо',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Susanov.png`,

      linkToZoom: '',
      linkToPresentation: '',

      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'WMS1'),

    },

    // --------------------------------------------------------------------- Session D

    {

      lastName: 'БОГАЧЕВ',
      firstName: 'Игорь',

      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Bogachev.png`,
      // innerSystemName: 'Bogachev',
      isModerator: true,
      session: foundSessions.filter((session: any) => session.name === 'SessD'),

    },

    {

      topicName: 'Опыт развития региональных складов',
      lastName: 'КАЗАНОВСКИЙ',
      firstName: 'Павел',
      statusInCompany: 'Директор по логистике',
      company: 'Галацентр',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Kazanovskiy.png`,

      linkToZoom: '',
      linkToPresentation: `${process.env.BACKEND_URL}/presentations/SessC/Kazanovskii.pdf`,

      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'SessD'),

    },

    {

      topicName: 'Оптимизация складских издержек за счет модернизации существующего оборудования',
      lastName: 'ФАТУЛЛАЕВ',
      firstName: 'Роман',
      statusInCompany: 'Генеральный директор',
      company: 'ООО «Новейшие Технологии ЛС»',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/per_Fatullaev.png`,

      linkToZoom: '',
      linkToPresentation: `${process.env.BACKEND_URL}/presentations/SessC/Fattulaev.pdf`,
      hasSendContactsButton: true,
      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'SessD'),

    },

    {

      topicName: 'Повышаем эффективность склада и делаем технологию ASRS дешевле',
      lastName: 'КОБЫЛИН',
      firstName: 'Александр',
      statusInCompany: 'Директор по развитию',
      company: 'ОАО «ПКБ «ТЕХНОПРИБОР»',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/per_Kobylin.png`,

      linkToZoom: '',
      linkToPresentation: `${process.env.BACKEND_URL}/presentations/SessC/Kobylin.pdf`,
      hasSendContactsButton: true,
      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'SessD'),

    },

    {

      topicName: 'Реализованный кейс. Применение различных технологий хранения и обработки грузов на одном складе',
      lastName: 'ИВАНУШКИНА',
      firstName: 'Светлана',
      statusInCompany: 'Бренд-менеджер',
      company: 'ООО «Фест Логистик»',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Ivanushkina.png`,

      linkToZoom: '',
      linkToPresentation: `${process.env.BACKEND_URL}/presentations/SessC/Ivanushkina.pdf`,
      hasSendContactsButton: true,
      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'SessD'),

    },

    {

      topicName: 'Как на современном складе оптимизировать учет выдачи, сдачи и хранения ТСД с помощью Инлокер',
      lastName: 'КАЗАРЦЕВ',
      firstName: 'Кирилл',
      statusInCompany: 'Генеральный директор',
      company: 'Инфотех',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Kazarcev.png`,

      linkToZoom: '',
      linkToPresentation: `${process.env.BACKEND_URL}/presentations/SessC/Kazarcev.pdf`,
      hasSendContactsButton: true,
      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'SessD'),

    },

    // --------------------------------------------------------------------- Session E

    {

      lastName: 'ТРОИЦКИЙ',
      firstName: 'Андрей',

      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Troickiy.png`,
      // innerSystemName: 'Bogachev',
      isModerator: true,
      session: foundSessions.filter((session: any) => session.name === 'SessE'),

    },

    {

      topicName: '',
      lastName: 'ПОЛКОВНИКОВ',
      firstName: 'Вячеслав',
      statusInCompany: 'Директор по логистике',
      company: 'ГК «Армтек»',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Polkovnikov.png`,

      linkToZoom: '',
      linkToPresentation: '',

      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'SessE'),

    },

    {

      topicName: '',
      lastName: 'МАШКОВ',
      firstName: 'Александр',
      statusInCompany: 'Директор по логистике',
      company: 'ПАО «Ростелеком»',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Mashkov.png`,

      linkToZoom: '',
      linkToPresentation: '',

      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'SessE'),

    },

    {

      topicName: '',
      lastName: 'КЛИМОВА',
      firstName: 'Светлана',
      statusInCompany: 'Директор по логистике',
      company: 'АО «Прогресс» (Фруто-Няня)',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Klimova.png`,

      linkToZoom: '',
      linkToPresentation: '',

      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'SessE'),

    },

    {

      topicName: '',
      lastName: 'ШИРЯЕВ',
      firstName: 'Равшан',
      statusInCompany: 'Управляющий сетью СЗФО',
      company: 'СТД «Петрович»',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Shiryaev.png`,

      linkToZoom: '',
      linkToPresentation: '',

      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'SessE'),

    },

    {

      topicName: '',
      lastName: 'ТУПИН',
      firstName: 'Кирилл',
      statusInCompany: 'Директор по логистике',
      company: 'ГК «Ренна холдинг»',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Tupin.png`,

      linkToZoom: '',
      linkToPresentation: '',

      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'SessE'),

    },

    {

      topicName: '',
      lastName: 'ШАПОЧКА',
      firstName: 'Максим',
      statusInCompany: 'Начальник управления по стратегическому развитию Дирекции по логистике',
      company: 'АО «Объединенная металлургическая компания»',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Shapochka.png`,

      linkToZoom: '',
      linkToPresentation: '',

      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'SessE'),

    },

    // --------------------------------------------------------------------- Session F

    {

      lastName: 'УСМАНОВ',
      firstName: 'Эльдар',

      linkToImg: `${process.env.BACKEND_URL}/img/speakers/per_Ucmanov.png`,
      // innerSystemName: 'Bogachev',
      isModerator: true,
      session: foundSessions.filter((session: any) => session.name === 'SessF'),

    },

    {

      topicName: 'Как логистика создает конкурентные преимущества компании-производителю',
      lastName: 'ШАПОЧКА',
      firstName: 'Максим',
      statusInCompany: 'Начальник управления по стратегическому развитию Дирекции по логистике',
      company: 'АО «Объединенная металлургическая компания»',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Shapochka.png`,

      linkToZoom: '',
      linkToPresentation: `${process.env.BACKEND_URL}/presentations/SessF/Shapochka.pdf`,

      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'SessF'),

    },

    {

      topicName: 'Оперативное планирование: Как снизить стоимость мультимодальных перевозок',
      lastName: 'ПЬЯНКОВ',
      firstName: 'Александр',
      statusInCompany: 'Директор по 3PL',
      company: 'FESCO',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Pyankov.png`,

      linkToZoom: '',
      linkToPresentation: `${process.env.BACKEND_URL}/presentations/SessF/Piankov.pdf`,

      // innerSystemName: 'Liharev_Plenar',
      hasSendContactsButton: true,
      session: foundSessions.filter((session: any) => session.name === 'SessF'),

    },

    {

      topicName: 'Как грамотно выстроить процессы транспортной логистики и сократить затраты на грузоперевозку',
      lastName: 'ЗАБАВСКАЯ',
      firstName: 'Ольга',
      statusInCompany: 'Руководитель отдела',
      company: 'S2B Group',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Zabavskaya.png`,

      linkToZoom: '',
      linkToPresentation: `${process.env.BACKEND_URL}/presentations/SessF/Logvin.pdf`,

      // innerSystemName: 'Liharev_Plenar',
      hasSendContactsButton: true,
      session: foundSessions.filter((session: any) => session.name === 'SessF'),

    },

    {

      topicName: 'Опыт перехода на электромобили в транспортно-логистическом обеспечении ритейлеров и поставщиков',
      lastName: 'ПЛЕТНИКОВА',
      firstName: 'Наталья',
      statusInCompany: 'Начальник управления развития продаж, ГК «СТТ»',
      company: 'эксклюзивный дистрибьютор ГАЗ',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Pletnikova.png`,

      linkToZoom: '',
      linkToPresentation: `${process.env.BACKEND_URL}/presentations/SessF/Pletnikova,lukashuk.pdf`,

      // innerSystemName: 'Liharev_Plenar',
      hasSendContactsButton: true,
      session: foundSessions.filter((session: any) => session.name === 'SessF'),

    },

    {

      topicName: 'Оптимизация затрат в цепи поставок с распределением грузов через международный транспортно-логистический и производственный хаб на базе аэропортов Красноярск и Черемшанка',
      lastName: 'НИКОЛАЕВ',
      firstName: 'Алексей',
      statusInCompany: 'Директор по развитию',
      company: 'корпорация «Енисейская Сибирь»',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Nikolaev.png`,

      linkToZoom: '',
      linkToPresentation: `${process.env.BACKEND_URL}/presentations/SessF/Nikolaev.pdf`,

      // innerSystemName: 'Liharev_Plenar',
      hasSendContactsButton: true,
      session: foundSessions.filter((session: any) => session.name === 'SessF'),

    },

    // --------------------------------------------------------------------- Session WMS DAY-2

    {

      lastName: 'ЗВЕРЕВ',
      firstName: 'Александр',

      linkToImg: `${process.env.BACKEND_URL}/img/speakers/per_Zverev.png`,
      // innerSystemName: 'Bogachev',
      isModerator: true,
      session: foundSessions.filter((session: any) => session.name === 'WMS2'),

    },

    {

      topicName: 'Обязательные условия и мероприятия для удачного выбора и внедрения WMS',
      lastName: 'САНЧЕНКО',
      firstName: 'Никита',
      statusInCompany: 'Директор',
      company: 'PSI Logistics Moscow',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Sanchenko.png`,

      linkToZoom: '',
      linkToPresentation: `${process.env.BACKEND_URL}/presentations/WMS2/Sanchenko.pdf`,
      hasSendContactsButton: true,
      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'WMS2'),

    },

    {

      topicName: 'Продвинутый инструментарий оптимизации затрат в WMS',
      lastName: 'БЛИНОВ',
      firstName: 'Дмитрий',
      statusInCompany: 'Технический директор',
      company: 'LogistiX',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/per_Blinov.png`,

      linkToZoom: '',
      linkToPresentation: `${process.env.BACKEND_URL}/presentations/WMS2/Blinov.pdf`,
      hasSendContactsButton: true,
      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'WMS2'),

    },

    {

      topicName: 'Эффективный подход к организации проекта внедрения систем управления складом',
      lastName: 'ГАБДУЛХАКОВ',
      firstName: 'Наиль',
      statusInCompany: 'Старший консультант',
      company: 'SAP CIS',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Gabdulhakov.png`,

      linkToZoom: '',
      linkToPresentation: `${process.env.BACKEND_URL}/presentations/WMS2/Gabdulhakov.pdf`,
      hasSendContactsButton: true,
      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'WMS2'),

    },

    {

      topicName: 'Технология goods-to-person на примере роя роботов',
      lastName: 'ПИВОВАР',
      firstName: 'Александр',
      statusInCompany: 'Начальник отдела ИТ-инноваций',
      company: 'Русконтрактор',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Pivovar.png`,

      linkToZoom: '',
      linkToPresentation: `${process.env.BACKEND_URL}/presentations/WMS2/Pivovar,Dolgih.pdf`,
      hasSendContactsButton: true,
      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'WMS2'),

    },

    {

      topicName: 'Повышение операционной эффективности склада: голосовая навигация комплектовщика',
      lastName: 'ШЕВЧУК',
      firstName: 'Светлана',
      statusInCompany: 'Коммерческий директор',
      company: 'компания «Голосовые решения»',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Shevchuk.png`,

      linkToZoom: '',
      linkToPresentation: `${process.env.BACKEND_URL}/presentations/WMS2/Shevchuk.pdf`,
      hasSendContactsButton: true,
      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'WMS2'),

    },

    // --------------------------------------------------------------------- Session G

    {

      lastName: 'СОКОЛОВ',
      firstName: 'Алексей',

      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Sokolov.png`,
      // innerSystemName: 'Bogachev',
      isModerator: true,
      session: foundSessions.filter((session: any) => session.name === 'SessG'),

    },

    {

      topicName: 'Как e-commerce теряет клиентов из-за логистики?',
      lastName: 'ШИРЯЕВ',
      firstName: 'Равшан',
      statusInCompany: 'Управляющий сетью СЗФО',
      company: 'СТД «Петрович»',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Shiryaev.png`,

      linkToZoom: '',
      linkToPresentation: `${process.env.BACKEND_URL}/presentations/SessG/Shiryaev.pdf`,

      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'SessG'),

    },

    {

      topicName: 'E-comerсe: автоматизация мезонина',
      lastName: 'ГОРСКИЙ',
      firstName: 'Виталий',
      statusInCompany: 'Директор по развитию',
      company: 'COMITAS',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Gorskiy.png`,

      linkToZoom: 'https://zoom.us/j/97646449025?pwd=ZGNhdjdwZlpmdjhWRmg3N1FaZ091dz09',
      linkToPresentation: `${process.env.BACKEND_URL}/presentations/SessG/Gorskii.pdf`,
      hasSendContactsButton: true,
      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'SessG'),

    },

    {

      topicName: 'Логистическая поддержка при развитии e-com продаж',
      lastName: 'ЗАЙЦЕВА',
      firstName: 'Мария',
      statusInCompany: 'Заместитель генерального директора по коммерции',
      company: 'Сберлогистика',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Zayceva.png`,

      linkToZoom: '',
      linkToPresentation: `${process.env.BACKEND_URL}/presentations/SessG/Zayceva.pdf`,
      hasSendContactsButton: true,
      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'SessG'),

    },

    {

      topicName: 'Фулфилмент Фабрика - новый продукт на складском рынке России',
      lastName: 'ДАМИРОВ',
      firstName: 'Анар',
      statusInCompany: 'Директор по автоматизации',
      company: '«Ориентир»',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Damirov.png`,

      linkToZoom: '',
      linkToPresentation: `${process.env.BACKEND_URL}/presentations/SessG/Damirov.pdf`,
      hasSendContactsButton: true,
      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'SessG'),

    },

    {

      topicName: 'Концепт microfullfilment центра на примере кейса commonsense',
      lastName: 'ШУЛЬЦ',
      firstName: 'Александр',
      statusInCompany: 'Директор по логистике',
      company: 'DECATHLON',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Shulz.png`,

      linkToZoom: '',
      linkToPresentation: `${process.env.BACKEND_URL}/presentations/SessG/Shulc.pdf`,

      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'SessG'),

    },

    {

      topicName: 'Технологии грузообработки на фулфилмент-центра компании OZON',
      lastName: 'КУЛИКОВ',
      firstName: 'Георгий',
      statusInCompany: 'Руководитель направления развития фулфимент',
      company: 'Ozon',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/no_photo.png`,

      linkToZoom: '',
      linkToPresentation: '',

      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'SessG'),

    },

    // --------------------------------------------------------------------- Session H

    {

      lastName: 'ДЕМИН',
      firstName: 'Василий',

      linkToImg: `${process.env.BACKEND_URL}/img/speakers/per_Demin.png`,
      // innerSystemName: 'Bogachev',
      isModerator: true,
      session: foundSessions.filter((session: any) => session.name === 'SessH'),

    },

    {

      topicName: '',
      lastName: 'РАБАЕВ',
      firstName: 'Роман',
      statusInCompany: 'Директор Supply Chain',
      company: 'Auchan',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Rabaev.png`,

      linkToZoom: '',
      linkToPresentation: '',

      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'SessH'),

    },

    {

      topicName: '',
      lastName: 'ВОЙТИКОВ',
      firstName: 'Константин',
      statusInCompany: 'Директор по цепям поставок',
      company: 'Unilever',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Voytikov.png`,

      linkToZoom: '',
      linkToPresentation: '',

      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'SessH'),

    },

    {

      topicName: '',
      lastName: 'ШТЫКОВ',
      firstName: 'Павел',
      statusInCompany: 'Директор по логистике',
      company: 'ИЛЬ ДЕ БОТЭ',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Shtikov.png`,

      linkToZoom: '',
      linkToPresentation: '',

      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'SessH'),

    },

    {

      topicName: '',
      lastName: 'ЯНКОВИЧ',
      firstName: 'Антонина',
      statusInCompany: 'Директор по логистике',
      company: 'Mercury',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Yankovich.png`,

      linkToZoom: '',
      linkToPresentation: '',

      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'SessH'),

    },

    {

      topicName: '',
      lastName: 'БЕРТОВА',
      firstName: 'Татьяна',
      statusInCompany: 'Директор по логистике',
      company: 'Технониколь',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Bertova.png`,

      linkToZoom: '',
      linkToPresentation: '',

      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'SessH'),

    },

    {

      topicName: '',
      lastName: 'ХРИСТЕНКО',
      firstName: 'Леонид',
      statusInCompany: 'Директор по логистике',
      company: 'торговая сеть «Командор»',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Hristenko.png`,

      linkToZoom: '',
      linkToPresentation: '',

      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'SessH'),

    },

    // --------------------------------------------------------------------- Session I

    {

      lastName: 'КИМ',
      firstName: 'Герасим',

      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Kim.png`,
      // innerSystemName: 'Bogachev',
      isModerator: true,
      session: foundSessions.filter((session: any) => session.name === 'SessI'),

    },

    {

      topicName: 'Процесс планирования промо. Автоматизация',
      lastName: 'ВЕДЕНЕЕВ',
      firstName: 'Денис',
      statusInCompany: 'Руководитель управления планирования и промо',
      company: 'Х5 Retail Group',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Vedeneev.png`,

      linkToZoom: '',
      linkToPresentation: `${process.env.BACKEND_URL}/presentations/SessI/Vedeneev.pdf`,

      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'SessI'),

    },

    {

      topicName: 'Цифровизация цепочек поставок',
      lastName: 'ПАВЛОВСКИЙ',
      firstName: 'Федор',
      statusInCompany: 'Директор департамента УЦП',
      company: 'ФТС «Пятерочка»',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/no_photo.png`,

      linkToZoom: '',
      linkToPresentation: `${process.env.BACKEND_URL}/presentations/SessI/Pavlovskii.pdf`,

      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'SessI'),

    },

    {

      topicName: 'Как изменить логистику фруктов и овощей',
      lastName: 'ФИЛИППОВ',
      firstName: 'Михаил',
      statusInCompany: 'Заместитель председателя правления по стратегии и операциям',
      company: '«Национальная Торгово-Распределительная сеть»',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Filippov.png`,

      linkToZoom: '',
      linkToPresentation: `${process.env.BACKEND_URL}/presentations/SessI/Filippov.pdf`,

      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'SessI'),

    },

    {

      topicName: 'Алгоритм расчета оптимального кванта поставки',
      lastName: 'КИМ',
      firstName: 'Герасим',
      statusInCompany: 'Руководитель логистического сообщества',
      company: 'КСЛ.Experts',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Kim.png`,

      linkToZoom: '',
      linkToPresentation: `${process.env.BACKEND_URL}/presentations/SessI/Kim.pdf`,

      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'SessI'),

    },

    {

      topicName: '',
      lastName: 'ДЕНИСОВ',
      firstName: 'Евгений',
      statusInCompany: 'Директор по логистике',
      company: 'Cash&Carry Магнум',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Denisov.png`,

      linkToZoom: '',
      linkToPresentation: '',

      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'SessI'),

    },

    {

      topicName: '',
      lastName: 'АЛЕКСАНДРОВА',
      firstName: 'Надежда',
      statusInCompany: 'Руководитель отдела по работе с клиентами',
      company: 'Maxxium',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Alexandrova.png`,

      linkToZoom: '',
      linkToPresentation: '',

      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'SessI'),

    },

    {

      topicName: '',
      lastName: 'СЕМЕНЮГИНА',
      firstName: 'Татьяна',
      statusInCompany: 'Руководитель отдела закупок и логистики',
      company: 'ДК СЛАТА',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Semenugina.png`,

      linkToZoom: '',
      linkToPresentation: '',

      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'SessI'),

    },

    // --------------------------------------------------------------------- Session J

    {

      lastName: 'БОГАЧЕВ',
      firstName: 'Игорь',

      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Bogachev.png`,
      // innerSystemName: 'Bogachev',
      isModerator: true,
      session: foundSessions.filter((session: any) => session.name === 'SessJ'),

    },

    {

      topicName: 'Опыт внедрения инновационных технологий в логистике ООО «СИБУР»',
      lastName: 'АГАРКОВА',
      firstName: 'Ирина',
      statusInCompany: 'Руководитель функции Логистика',
      company: 'ООО "СИБУР"',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Agarkova.png`,

      linkToZoom: '',
      linkToPresentation: `${process.env.BACKEND_URL}/presentations/SessI/Agarkova.pdf`,

      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'SessJ'),

    },

    {

      topicName: 'Опыт внедрения централизованной системы управления складским хозяйством на промышленном предприятии',
      lastName: 'АБДРАХМАНОВ',
      firstName: 'Артур',
      statusInCompany: 'Советник управляющего директора',
      company: 'ПАО «Мосэнерго»',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Abdrahmanov.png`,

      linkToZoom: '',
      linkToPresentation: `${process.env.BACKEND_URL}/presentations/SessI/Abdrahmanov.pdf`,

      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'SessJ'),

    },

    {

      topicName: 'Как изменится внутренняя логистика по обеспечению ремонтных служб ПАО «НЛМК» в 2021 г. Результаты пилотного проекта по обеспечению ремонтных служб через пункты выдачи минуя промежуточные склады реализованного в 2020 г.',
      lastName: 'НОВИКОВ',
      firstName: 'Дмитрий',
      statusInCompany: 'Главный специалист дирекции по развитию снабжения',
      company: 'ПАО «НЛМК»',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Novikov.png`,

      linkToZoom: '',
      linkToPresentation: `${process.env.BACKEND_URL}/presentations/SessI/Novikov.pdf`,

      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'SessJ'),

    },

    {

      topicName: 'Изменение подходов по логистике и снабжению в ПАО «Северсталь» в 2020 г.',
      lastName: 'ЛУЧИН',
      firstName: 'Владимир',
      statusInCompany: 'Начальник управления по ремонтам и инвестициям',
      company: 'ПАО «Северсталь»',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Luchin.png`,

      linkToZoom: '',
      linkToPresentation: `${process.env.BACKEND_URL}/presentations/SessI/Luchin.pdf`,

      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'SessJ'),

    },

    {

      topicName: 'Разработка оптимальных логистических схем при реализации инвестиционных проектов основные риски и примеры их минимизации',
      lastName: 'ВЫШИДЕНКО',
      firstName: 'Яроcлав',
      statusInCompany: 'Коммерческий директор',
      company: 'EMAX Logistics',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Vishidenko.png`,

      linkToZoom: '',
      linkToPresentation: `${process.env.BACKEND_URL}/presentations/SessI/Vyshidenko.pdf`,
      hasSendContactsButton: true,
      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'SessJ'),

    },

    // --------------------------------------------------------------------- Exc1

    {

      lastName: 'ДЕМИН',
      firstName: 'Василий',

      linkToImg: `${process.env.BACKEND_URL}/img/speakers/per_Demin.png`,
      // innerSystemName: 'Bogachev',
      isModerator: true,
      session: foundSessions.filter((session: any) => session.name === 'Exc1'),

    },

    {

      topicName: 'Экскурсия на Логистический центр (ЦРЦ Чехов) «М.Видео»',
      lastName: 'АГАРКОВА',
      firstName: 'Ирина',
      statusInCompany: 'Руководитель функции Логистика',
      company: 'ООО "СИБУР"',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/no_photo.png`,

      linkToZoom: '',
      linkToPresentation: '',

      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'Exc1'),

    },

    {

      topicName: 'Экскурсия на Логистический центр (ЦРЦ Чехов) «М.Видео»',
      lastName: 'ЛУЧИН',
      firstName: 'Владимир',
      statusInCompany: 'Начальник управления по ремонтам и инвестициям',
      company: 'ПАО «Северсталь»',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/no_photo.png`,

      linkToZoom: '',
      linkToPresentation: '',

      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'Exc1'),

    },

    {

      topicName: 'Экскурсия на Логистический центр (ЦРЦ Чехов) «М.Видео»',
      lastName: 'АБДРАХМАНОВ',
      firstName: 'Артур',
      statusInCompany: 'Советник управляющего директора',
      company: 'ПАО «Мосэнерго»',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Abdrahmanov.png`,

      linkToZoom: '',
      linkToPresentation: '',

      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'Exc1'),

    },

    {

      topicName: 'Экскурсия на Логистический центр (ЦРЦ Чехов) «М.Видео»',
      lastName: 'НОВИКОВ',
      firstName: 'Дмитрий',
      statusInCompany: '',
      company: 'ПАО «НЛМК»',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/Novikov.png`,

      linkToZoom: '',
      linkToPresentation: '',

      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'Exc1'),

    },

    {

      topicName: 'Экскурсия на Логистический центр (ЦРЦ Чехов) «М.Видео»',
      lastName: 'ХЛЕБНИКОВ',
      firstName: 'Алексей',
      statusInCompany: 'Генеральный директор',
      company: 'EMAX Logistics',
      linkToImg: `${process.env.BACKEND_URL}/img/speakers/no_photo.png`,

      linkToZoom: '',
      linkToPresentation: '',

      // innerSystemName: 'Liharev_Plenar',

      session: foundSessions.filter((session: any) => session.name === 'Exc1'),

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
    newSpeaker.hasSendContactsButton = speaker.hasSendContactsButton || false;
    newSpeaker.hasRafflePrizesButton = speaker.hasRafflePrizesButton || false;

    results.push(newSpeaker);
  }
  await speakersRepository.save(results);
};
