// controllers/employeeController.js

// Import necessary modules
const { Op } = require("sequelize");
const Employee = require("../models/employee");

// Function to fetch all employees
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll();
    // res.status(200).json(employees);
    res.render("employees", { employees });
  } catch (error) {
    console.error("Failed to fetch employees:", error);
    res.status(500).json({ message: "Failed to fetch employees" });
  }
};

// Function to add a new employee
exports.addEmployee = async (req, res) => {
  const { name, email, active } = req.body;
  try {
    const newEmployee = await Employee.create({ name, email, active });
    res.status(201).json(newEmployee);
  } catch (error) {
    console.error("Failed to add employee:", error);
    res.status(500).json({ message: "Failed to add employee" });
  }
};

// Function to edit an existing employee
exports.editEmployee = async (req, res) => {
  const employeeId = req.params.id;
  const { name, email, active } = req.body;
  try {
    const employee = await Employee.findByPk(employeeId);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    employee.name = name;
    employee.email = email;
    employee.active = active;
    await employee.save();
    res.status(200).json({ message: "Employee updated successfully" });
  } catch (error) {
    console.error("Failed to update employee:", error);
    res.status(500).json({ message: "Failed to update employee" });
  }
};

// Function to delete an existing employee
exports.deleteEmployee = async (req, res) => {
  const employeeId = req.params.id;
  try {
    const employee = await Employee.findByPk(employeeId);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    await employee.destroy();
    res.status(200).json({ message: "Employee deleted successfully" });
  } catch (error) {
    console.error("Failed to delete employee:", error);
    res.status(500).json({ message: "Failed to delete employee" });
  }
};
