// backend/models/returnAsset.js
const { DataTypes } = require("sequelize");
const db = require("../config");

const ReturnAsset = db.define("ReturnAsset", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  assetId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  employeeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  reason: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = ReturnAsset;
