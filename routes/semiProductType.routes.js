const semiProductTypes = require("../controllers/semiProductType.controller.js");

var router = require("express").Router();

// Create a new SemiProductType
router.post("/", semiProductTypes.create);

// Retrieve all SemiProductTypes
router.get("/", semiProductTypes.findAll);

// Retrieve a single SemiProductType with id
router.get("/:id", semiProductTypes.findOne);

// Update a SemiProductType with id
router.put("/:id", semiProductTypes.update);

// Delete a SemiProductType with id
router.delete("/:id", semiProductTypes.delete);

module.exports = router
