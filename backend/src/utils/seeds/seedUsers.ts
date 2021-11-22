/* eslint-disable no-restricted-syntax */
/* eslint-disable import/prefer-default-export */
import { getRepository } from 'typeorm';
import Users from '../../entities/users';

export const seedMockedUsers = async () => {
  const usersRepository = await getRepository(Users);

  const usersToSeed = [{

    firstName: 'test1',
    lastName: 'testovich1',
    company: 'companyTest1',
    loginCode: 'aaa',

  },

  {

    firstName: 'test2',
    lastName: 'testovich2',
    company: 'companyTest2',
    loginCode: 'bbb',

  },

  {

    firstName: 'test3',
    lastName: 'testovich3',
    company: 'companyTest3',
    loginCode: 'ccc',

  },
  {

    firstName: 'test10',
    lastName: 'testovich10',
    company: 'companyTest10',
    loginCode: 'ddd',

  },
  {

    firstName: 'test11',
    lastName: 'testovich11',
    company: 'companyTest11',
    loginCode: 'eee',

  },
  {

    firstName: 'test12',
    lastName: 'testovich12',
    company: 'companyTest12',
    loginCode: 'fff',

  },
  {

    firstName: 'test12',
    lastName: 'testovich12',
    company: 'companyTest12',
    loginCode: 'ggg',

  },

  {

    firstName: 'test12',
    lastName: 'testovich12',
    company: 'companyTest12',
    loginCode: 'hhh',

  },

  {

    firstName: 'test12',
    lastName: 'testovich12',
    company: 'companyTest12',
    loginCode: 'iii',

  },

  {

    firstName: 'test12',
    lastName: 'testovich12',
    company: 'companyTest12',
    loginCode: 'jjj',

  },

  {

    firstName: 'test12',
    lastName: 'testovich12',
    company: 'companyTest12',
    loginCode: 'kkk',

  },

  {

    firstName: 'test12',
    lastName: 'testovich12',
    company: 'companyTest12',
    loginCode: 'lll',

  },

  {

    firstName: 'test12',
    lastName: 'testovich12',
    company: 'companyTest12',
    loginCode: 'mmm',

  },

  {

    firstName: 'test12',
    lastName: 'testovich12',
    company: 'companyTest12',
    loginCode: 'nnn',

  },

  {

    firstName: 'test12',
    lastName: 'testovich12',
    company: 'companyTest12',
    loginCode: 'ooo',

  },

  {

    firstName: 'test12',
    lastName: 'testovich12',
    company: 'companyTest12',
    loginCode: 'ppp',

  },

  {

    firstName: 'test12',
    lastName: 'testovich12',
    company: 'companyTest12',
    loginCode: 'qqq',

  },

  {

    firstName: 'test12',
    lastName: 'testovich12',
    company: 'companyTest12',
    loginCode: 'rrr',

  },

  {

    firstName: 'test12',
    lastName: 'testovich12',
    company: 'companyTest12',
    loginCode: 'sss',

  },

  {

    firstName: 'test12',
    lastName: 'testovich12',
    company: 'companyTest12',
    loginCode: 'ttt',

  },

  {

    firstName: 'admin',
    lastName: 'Plenaer',
    company: 'CCL',
    loginCode: 'TkKGut',
    adminOfTheChannelNumber: 1,
    isAdmin: true,

  },
  {

    firstName: 'stats',
    lastName: 'stats',
    company: 'CCL',
    loginCode: 'stats',
    hasAccessToStatisticPage: true,

  },

  ];

  const results = [];

  for (const user of usersToSeed) {
    const newUser = new Users();

    newUser.firstName = user.firstName;
    newUser.lastName = user.lastName;
    newUser.company = user.company;
    newUser.isAdmin = !!user.isAdmin;
    newUser.loginCode = user.loginCode;
    newUser.adminOfTheChannelNumber = user.adminOfTheChannelNumber || 0;
    newUser.hasAccessToStatisticPage = user.hasAccessToStatisticPage || false;
    // all users have default first channel active
    newUser.activeChannel = 1;

    results.push(newUser);
  }
  await usersRepository.save(results);
};
