const productProcessTypes = require("../controllers/productProcessType.controller.js");

var router = require("express").Router();

// Create a new ProductProcessType
router.post("/", productProcessTypes.create);

// Retrieve all ProductProcessTypes
router.get("/", productProcessTypes.findAll);

// Retrieve a single ProductProcessType with id
router.get("/:id", productProcessTypes.findOne);

// Update a ProductProcessType with id
router.put("/:id", productProcessTypes.update);

// Delete a ProductProcessType with id
router.delete("/:id", productProcessTypes.delete);

module.exports = router
