/* eslint-disable import/no-unresolved */

// if port exists, staging version started, else it's a local version
if (process.env.PORT) {
  // stage dataBase connection
  module.exports = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    synchronize: true,
    logging: false,
    entities: [
      'build/entities/**/*.js',
    ],
    migrations: [
      'build/migration/**/*.js',
    ],
    subscribers: [
      'build/subscriber/**/*.js',
    ],
    cli: {
      entitiesDir: 'build/entities',
      migrationsDir: '/build/migration',
      subscribersDir: '/build/subscriber',
    },
  };
} else {
  // local dataBase connection
  module.exports = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'sNpFXdDbQ]V2H~*f',
    database: 'logforumdb',
    synchronize: true,
    logging: false,
    entities: [
      'build/entities/**/*.js',
    ],
    migrations: [
      'build/migrations/**/*.js',
    ],
    subscribers: [
      'build/subscriber/**/*.js',
    ],
    cli: {
      entitiesDir: 'build/entities',
      migrationsDir: 'src/migrations',
      subscribersDir: '/build/subscriber',
    },
    seeds: ['seeds/**/*.seed.ts'],
    factories: ['factories/**/*.factory.ts'],
  };
}
