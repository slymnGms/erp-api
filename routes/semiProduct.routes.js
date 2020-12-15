const semiSemiProducts = require("../controllers/semiSemiProduct.controller.js");

var router = require("express").Router();

// Create a new SemiProduct
router.post("/", semiSemiProducts.create);

// Retrieve all SemiProducts
router.get("/", semiSemiProducts.findAll);

// Retrieve a single SemiProduct with id
router.get("/:id", semiSemiProducts.findOne);

// Update a SemiProduct with id
router.put("/:id", semiSemiProducts.update);

// Delete a SemiProduct with id
router.delete("/:id", semiSemiProducts.delete);

module.exports = router
