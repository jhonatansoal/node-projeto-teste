module.exports = {
  db: {
    operatorsAliases: false,
    dialect: 'postgres',
    name: '-',
    host: 'localhost',
    username: 'postgres',
    password: 'admin',
    database: 'postgres',
    port: 5432,
    pool: {
      min: 0,
      max: 50,
      idle: 10000,
    },
    logging: false,
    timezone: 'America/Sao_Paulo',
  },
  log: 'info',
  secret: 'secret',
};
