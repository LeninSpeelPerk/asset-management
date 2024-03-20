const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");

// Define routes

router.get("/", employeeController.getAllEmployees);
router.post("/", employeeController.addEmployee);
router.put("/:id", employeeController.editEmployee);
router.delete("/:id", employeeController.deleteEmployee);

module.exports = router;
