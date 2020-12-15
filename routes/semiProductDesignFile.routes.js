const semiProductDesignFiles = require("../controllers/semiProductDesignFile.controller.js");

var router = require("express").Router();

// Create a new SemiProductDesignFile
router.post("/", semiProductDesignFiles.create);

// Retrieve all SemiProductDesignFiles
router.get("/", semiProductDesignFiles.findAll);

// Retrieve a single SemiProductDesignFile with id
router.get("/:id", semiProductDesignFiles.findOne);

// Update a SemiProductDesignFile with id
router.put("/:id", semiProductDesignFiles.update);

// Delete a SemiProductDesignFile with id
router.delete("/:id", semiProductDesignFiles.delete);

module.exports = router
