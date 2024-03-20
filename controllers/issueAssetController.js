// backend/controllers/issueAssetController.js
const IssueAsset = require("../models/issueAsset");
const Employee = require("../models/employee");
const Asset = require("../models/asset");

exports.issueAsset = async (req, res) => {
  const { assetId, employeeId } = req.body;
  try {
    const issue = await IssueAsset.create({ assetId, employeeId });
    res.render("issueAsset", { issue });
    res.status(201).json(issue);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to issue asset" });
  }
};

exports.renderIssueAssetForm = (req, res) => {
  // Render the "issueAsset" form
  res.render("issueAsset");
};

exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.status(200).json(employees);
    // res.render("employees", { employees });
  } catch (error) {
    console.error("Failed to fetch employees:", error);
    res.status(500).json({ message: "Failed to fetch employees" });
  }
};

// Function to get all assets
exports.getAllAssets = async (req, res) => {
  try {
    const assets = await Asset.findAll();
    res.status(200).json(assets);
    // res.render("assets", { assets });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch assets" });
  }
};
