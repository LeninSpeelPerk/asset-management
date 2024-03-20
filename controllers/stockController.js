// backend/controllers/stockController.js
const Stock = require("../models/stock");

exports.getStockView = async (req, res) => {
  try {
    // Fetch stock data from the database
    const stockAssets = await Stock.findAll();

    // Calculate total value
    let totalValue = 0;
    for (const asset of stockAssets) {
      totalValue += asset.quantity * asset.unitPrice;
    }

    // Render the stock view template with data
    res.render("stock", { stockAssets, totalValue });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch stock data" });
  }
};

// Controller function to add a new stock asset
exports.addStockAsset = async (req, res) => {
  const { name, branch, quantity, unitPrice } = req.body;

  try {
    // Check if all required fields are provided
    if (!name || !branch || !quantity || !unitPrice) {
      return res
        .status(400)
        .json({
          message: "Please provide name, branch, quantity, and unit price",
        });
    }

    // Create the stock asset in the database
    const newStockAsset = await Stock.create({
      name,
      branch,
      quantity,
      unitPrice,
    });

    // Return the newly created stock asset
    res.status(201).json(newStockAsset);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to add stock asset" });
  }
};

// Controller function to edit an existing stock asset
exports.editStockAsset = async (req, res) => {
  const stockAssetId = req.params.id;
  const { name, branch, quantity, unitPrice } = req.body;

  try {
    // Check if the stock asset exists
    const stockAsset = await Stock.findByPk(stockAssetId);
    if (!stockAsset) {
      return res.status(404).json({ message: "Stock asset not found" });
    }

    // Update the stock asset details
    stockAsset.name = name;
    stockAsset.branch = branch;
    stockAsset.quantity = quantity;
    stockAsset.unitPrice = unitPrice;
    await stockAsset.save();

    // Return success message
    res.status(200).json({ message: "Stock asset updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update stock asset" });
  }
};

// Controller function to delete a stock asset
exports.deleteStockAsset = async (req, res) => {
  const stockAssetId = req.params.id;

  try {
    // Find the stock asset by ID
    const stockAsset = await Stock.findByPk(stockAssetId);

    // Check if the stock asset exists
    if (!stockAsset) {
      return res.status(404).json({ message: "Stock asset not found" });
    }

    // Delete the stock asset
    await stockAsset.destroy();

    // Return success message
    res.status(200).json({ message: "Stock asset deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete stock asset" });
  }
};
