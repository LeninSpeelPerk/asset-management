// backend/models/assetCategory.js
const { DataTypes } = require("sequelize");
const db = require("../config");

const AssetCategory = db.define("AssetCategory", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
});

module.exports = AssetCategory;
