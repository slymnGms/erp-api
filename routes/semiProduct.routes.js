const semiProducts = require("../controllers/semiProduct.controller.js");

var router = require("express").Router();

// Create a new SemiProduct
router.post("/", semiProducts.create);

// Retrieve all SemiProducts
router.get("/", semiProducts.findAll);

// Retrieve a single SemiProduct with id
router.get("/:id", semiProducts.findOne);

// Update a SemiProduct with id
router.put("/:id", semiProducts.update);

// Delete a SemiProduct with id
router.delete("/:id", semiProducts.delete);

module.exports = router
