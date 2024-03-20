// backend/controllers/returnAssetController.js
const ReturnAsset = require("../models/returnAsset");

exports.returnAsset = async (req, res) => {
  const { assetId, employeeId, reason } = req.body;
  try {
    const returnAsset = await ReturnAsset.create({
      assetId,
      employeeId,
      reason,
    });
    res.status(201).json(returnAsset);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to return asset" });
  }
};

exports.renderReturnAssetForm = (req, res) => {
  // Render the "issueAsset" form
  res.render("returnAsset");
};
