// backend/models/asset.js
const { DataTypes } = require("sequelize");
const db = require("../config");
const AssetCategory = require("./assetCategory"); // Correct import statement

const Asset = db.define("Asset", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  serialNumber: {
    type: DataTypes.STRING(50),
    allowNull: true,
    unique: true,
  },
  make: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  model: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

// Define the association with AssetCategory
Asset.belongsTo(AssetCategory, {
  foreignKey: "categoryId", // Specify the foreign key
  onDelete: "CASCADE", // Optional: Define onDelete behavior
});

module.exports = Asset;
