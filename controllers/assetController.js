const Asset = require("../models/asset");

// Function to add a new asset
exports.addAsset = async (req, res) => {
  try {
    const { serialNumber, make, model, categoryId } = req.body;
    const asset = await Asset.create({ serialNumber, make, model, categoryId });
    res.status(200).json(asset);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to add asset" });
  }
};

// Function to edit an existing asset
exports.editAsset = async (req, res) => {
  try {
    const { id } = req.params;
    const { serialNumber, make, model, categoryId } = req.body;
    const asset = await Asset.findByPk(id);
    if (!asset) {
      return res.status(404).json({ message: "Asset not found" });
    }
    asset.serialNumber = serialNumber;
    asset.make = make;
    asset.model = model;
    asset.categoryId = categoryId;
    await asset.save();
    res.status(200).json({ message: "Asset updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update asset" });
  }
};

// Function to get all assets
exports.getAllAssets = async (req, res) => {
  try {
    const assets = await Asset.findAll();
    // res.status(200).json(assets);
    res.render("assets", { assets });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch assets" });
  }
};

// Function to get a specific asset by ID
exports.getAssetById = async (req, res) => {
  try {
    const { id } = req.params;
    const asset = await Asset.findByPk(id);
    if (!asset) {
      return res.status(404).json({ message: "Asset not found" });
    }
    res.status(200).json(asset);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch asset" });
  }
};

// Function to delete an asset
exports.deleteAsset = async (req, res) => {
  try {
    const { id } = req.params;
    const asset = await Asset.findByPk(id);
    if (!asset) {
      return res.status(404).json({ message: "Asset not found" });
    }
    await asset.destroy();
    res.status(200).json({ message: "Asset deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete asset" });
  }
};
