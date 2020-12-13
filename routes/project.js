const projects = require("../controllers/project.controller.js");

var router = require("express").Router();

// Create a new Customer
router.post("/", projects.create);

// Retrieve all Customers
router.get("/", projects.findAll);

// Retrieve a single Customer with id
router.get("/:id", projects.findOne);

// Update a Customer with id
router.put("/:id", projects.update);

// Delete a Customer with id
router.delete("/:id", projects.delete);

module.exports = router
