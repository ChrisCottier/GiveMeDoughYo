const { db } = require("./index");
const { username, password, host, database } = db;

module.exports = {
  development: {
    username,
    password,
    database,
    host,
    dialect: "postgres",
    seederStorage: "sequelize",
  },
  production: {
    dialect: "postgres",
    seederStorage: "sequelize",
    use_env_variable: "DATABASE_URL",
  },
};
