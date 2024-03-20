// backend/routes/stockRoutes.js
const express = require("express");
const router = express.Router();
const stockController = require("../controllers/stockController");

// Route to access the Stock View
router.get("/", stockController.getStockView);
router.post("/", stockController.addStockAsset);
router.put("/:id", stockController.editStockAsset);
router.delete("/:id", stockController.deleteStockAsset);

module.exports = router;
