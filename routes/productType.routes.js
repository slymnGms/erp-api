const productTypes = require("../controllers/productType.controller.js");

var router = require("express").Router();

// Create a new ProductType
router.post("/", productTypes.create);

// Retrieve all ProductTypes
router.get("/", productTypes.findAll);

// Retrieve a single ProductType with id
router.get("/:id", productTypes.findOne);

// Update a ProductType with id
router.put("/:id", productTypes.update);

// Delete a ProductType with id
router.delete("/:id", productTypes.delete);

module.exports = router
