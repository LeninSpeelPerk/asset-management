const { Sequelize } = require("sequelize");

const db = new Sequelize({
  dialect: "postgres",
  database: "asset_management",
  username: "postgres",
  password: "2001",
  host: "localhost",
  port: 5432,
});

module.exports = db;
