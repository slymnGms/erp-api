const productFiles = require("../controllers/productFile.controller.js");

var router = require("express").Router();

// Create a new ProductFile
router.post("/", productFiles.create);

// Retrieve all ProductFiles
router.get("/", productFiles.findAll);

// Retrieve a single ProductFile with id
router.get("/:id", productFiles.findOne);

// Update a ProductFile with id
router.put("/:id", productFiles.update);

// Delete a ProductFile with id
router.delete("/:id", productFiles.delete);

module.exports = router
