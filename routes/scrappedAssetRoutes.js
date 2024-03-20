// backend/routes/scrappedAssetRoutes.js
const express = require("express");
const router = express.Router();
const scrappedAssetController = require("../controllers/scrappedAssetController");

// Route to scrap an asset
router.post("/", scrappedAssetController.scrapAsset);

// Route to render the "issueAsset" form
router.get("/", scrappedAssetController.renderScrappedAssetForm);

module.exports = router;
