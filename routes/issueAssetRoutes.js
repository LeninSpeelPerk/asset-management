// backend/routes/issueAssetRoutes.js
const express = require("express");
const router = express.Router();
const issueAssetController = require("../controllers/issueAssetController");

// Route to issue an asset
router.post("/", issueAssetController.issueAsset);

// Route to render the "issueAsset" form
router.get("/", issueAssetController.renderIssueAssetForm);

router.get("/employeeData", issueAssetController.getAllEmployees);

router.get("/assetData", issueAssetController.getAllAssets);

module.exports = router;
