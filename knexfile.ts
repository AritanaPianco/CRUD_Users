require('dotenv').config();


module.exports = {
  client: "mysql2",
  connection: {
    database: process.env.DB_DATABASE as string,
    user: process.env.DB_USERNAME as string,
    password: process.env.DB_PASSWORD as string
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: "knex_migrations"
  }
}
