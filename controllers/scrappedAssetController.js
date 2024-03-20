// backend/controllers/scrappedAssetController.js
const ScrappedAsset = require("../models/ScrappedAsset");

exports.scrapAsset = async (req, res) => {
  const { assetId, reason } = req.body;
  try {
    const scrappedAsset = await ScrappedAsset.create({ assetId, reason });
    res
      .status(201)
      .json({ message: "Asset scrapped successfully", scrappedAsset });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to scrap asset" });
  }
};

exports.renderScrappedAssetForm = (req, res) => {
  // Render the "issueAsset" form
  res.render("scrappedAsset");
};
