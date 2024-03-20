const express = require("express");
const router = express.Router();
const assetController = require("../controllers/assetController");

// Routes for Asset Management
router.post("/", assetController.addAsset);
router.put("/:id", assetController.editAsset);
router.get("/", assetController.getAllAssets);
router.get("/:id", assetController.getAssetById);
router.delete("/:id", assetController.deleteAsset);

module.exports = router;
