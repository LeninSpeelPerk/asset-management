// backend/controllers/assetHistoryController.js
const AssetHistory = require("../models/assetHistory");

// exports.getAssetHistory = async (req, res) => {
//   const { assetId } = req.params;
//   try {
//     const assetHistory = await AssetHistory.findAll({
//       where: { assetId },
//       order: [["timestamp", "DESC"]],
//     });
//     res.status(200).json(assetHistory);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Failed to fetch asset history" });
//   }
// };

exports.getAssetHistory = async (req, res) => {
  try {
    const assetHistory = await AssetHistory.findAll({
      order: [["timestamp", "DESC"]],
    });
    res.render("assetHistory", { assetHistory });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch asset history" });
  }
};

exports.addAssetHistoryEntry = async (req, res) => {
  const { assetId, action, details } = req.body;
  try {
    const newEntry = await AssetHistory.create({
      assetId,
      action,
      details,
    });
    res.status(201).json(newEntry);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to add asset history entry" });
  }
};

// exports.renderAssetHistoryForm = async (req, res) => {
//   try {
//     const assetHistory = await AssetHistory.findAll();
//     res.render("assetHistory", { assetHistory });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Failed to render asset history form" });
//   }
// };

// exports.renderAssetHistoryForm = (req, res) => {
//   // Render the "assetHistory" form without fetching data
//   res.render("assetHistory");
// };
