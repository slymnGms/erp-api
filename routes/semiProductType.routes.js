const semiSemiProductTypeTypes = require("../controllers/semiSemiProductTypeType.controller.js");

var router = require("express").Router();

// Create a new SemiProductType
router.post("/", semiSemiProductTypeTypes.create);

// Retrieve all SemiProductTypes
router.get("/", semiSemiProductTypeTypes.findAll);

// Retrieve a single SemiProductType with id
router.get("/:id", semiSemiProductTypeTypes.findOne);

// Update a SemiProductType with id
router.put("/:id", semiSemiProductTypeTypes.update);

// Delete a SemiProductType with id
router.delete("/:id", semiSemiProductTypeTypes.delete);

module.exports = router
