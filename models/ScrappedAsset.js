// backend/models/ScrappedAsset.js
const { DataTypes } = require("sequelize");
const db = require("../config");

const ScrappedAsset = db.define("ScrappedAsset", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  assetId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  reason: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = ScrappedAsset;
