// backend/controllers/assetCategoryController.js
const Category = require("../models/assetCategory");

// Controller function to add a new asset category
exports.addAssetCategory = async (req, res) => {
  const { name } = req.body;

  try {
    // Check if the name is provided
    if (!name) {
      return res
        .status(400)
        .json({ message: "Name is required for adding an asset category" });
    }

    // Create the asset category in the database
    const newCategory = await Category.create({ name });

    // Return the newly created asset category
    res.status(201).json(newCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to add asset category" });
  }
};

// Controller function to edit an existing asset category
exports.editAssetCategory = async (req, res) => {
  const categoryId = req.params.id;
  const { name } = req.body;

  try {
    // Check if the category exists
    const category = await Category.findByPk(categoryId);
    if (!category) {
      return res.status(404).json({ message: "Asset category not found" });
    }

    // Update the category name
    category.name = name;
    await category.save();

    // Return success message
    res.status(200).json({ message: "Asset category updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update asset category" });
  }
};

// Controller function to get all asset categories
exports.getAllAssetCategories = async (req, res) => {
  try {
    // Retrieve all asset categories from the database
    const categories = await Category.findAll();
    res.render("assetCategories", { categories });
    // Return the list of asset categories
    // res.status(200).json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch asset categories" });
  }
};

// Controller function to get an asset category by ID
exports.getAssetCategoryById = async (req, res) => {
  const categoryId = req.params.id;

  try {
    // Retrieve the asset category by ID from the database
    const category = await Category.findByPk(categoryId);

    // Check if the category exists
    if (!category) {
      return res.status(404).json({ message: "Asset category not found" });
    }

    // Return the asset category
    res.status(200).json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch asset category" });
  }
};

// Controller function to delete an asset category
exports.deleteAssetCategory = async (req, res) => {
  const categoryId = req.params.id;

  try {
    // Find the asset category by ID
    const category = await Category.findByPk(categoryId);

    // Check if the category exists
    if (!category) {
      return res.status(404).json({ message: "Asset category not found" });
    }

    // Delete the asset category
    await category.destroy();

    // Return success message
    res.status(200).json({ message: "Asset category deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete asset category" });
  }
};
