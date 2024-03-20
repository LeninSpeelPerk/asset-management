// backend/routes/assetCategory.js
const express = require("express");
const router = express.Router();
const assetCategoryController = require("../controllers/assetCategoryController");

// Routes for Asset Category Management
router.post("/", assetCategoryController.addAssetCategory);
router.put("/:id", assetCategoryController.editAssetCategory);
router.get("/", assetCategoryController.getAllAssetCategories);
router.get("/:id", assetCategoryController.getAssetCategoryById);
router.delete("/:id", assetCategoryController.deleteAssetCategory);

module.exports = router;
