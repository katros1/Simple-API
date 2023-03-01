require('dotenv').config()

module.exports = {
  development: {
    url: process.env.PRJTDEV_DATABASE_URL,
    dialect: 'postgress',
  },
  test: {
    url: process.env.PRJTTEST_DATABASE_URL,
    dialect:'postgres',
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect:'postgres',
  },
}










// {
//   "development": {
//     "username": "root",
//     "password": null,
//     "database": "database_development",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "test": {
//     "username": "root",
//     "password": null,
//     "database": "database_test",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "production": {
//     "username": "root",
//     "password": null,
//     "database": "database_production",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   }
// }
