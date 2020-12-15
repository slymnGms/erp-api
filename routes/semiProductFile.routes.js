const semiSemiProductFileFiles = require("../controllers/semiSemiProductFileFile.controller.js");

var router = require("express").Router();

// Create a new SemiProductFile
router.post("/", semiSemiProductFileFiles.create);

// Retrieve all SemiProductFiles
router.get("/", semiSemiProductFileFiles.findAll);

// Retrieve a single SemiProductFile with id
router.get("/:id", semiSemiProductFileFiles.findOne);

// Update a SemiProductFile with id
router.put("/:id", semiSemiProductFileFiles.update);

// Delete a SemiProductFile with id
router.delete("/:id", semiSemiProductFileFiles.delete);

module.exports = router
