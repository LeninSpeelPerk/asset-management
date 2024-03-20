// backend/routes/returnAssetRoutes.js
const express = require("express");
const router = express.Router();
const returnAssetController = require("../controllers/returnAssetController");

// Route to return an asset
router.post("/", returnAssetController.returnAsset);

// Route to render the "issueAsset" form
router.get("/", returnAssetController.renderReturnAssetForm);

module.exports = router;
