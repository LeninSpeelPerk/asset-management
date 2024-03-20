// backend/routes/assetHistoryRoutes.js
const express = require("express");
const router = express.Router();
const assetHistoryController = require("../controllers/assetHistoryController");

// Route to fetch asset history
// router.get("/", assetHistoryController.renderAssetHistoryForm);
router.post("/", assetHistoryController.addAssetHistoryEntry);
router.get("/:assetId", assetHistoryController.getAssetHistory);
router.get("/", assetHistoryController.getAssetHistory);

module.exports = router;
