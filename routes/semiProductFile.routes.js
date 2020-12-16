module.exports = app => {
    const semiProductFiles = require("../controllers/semiProductFile.controller.js");

    var router = require("express").Router();

    // Create a new SemiProductFile
    router.post("/", semiProductFiles.create);

    // Retrieve all SemiProductFiles
    router.get("/", semiProductFiles.findAll);

    // Retrieve a single SemiProductFile with id
    router.get("/:id", semiProductFiles.findOne);

    // Update a SemiProductFile with id
    router.put("/:id", semiProductFiles.update);

    // Delete a SemiProductFile with id
    router.delete("/:id", semiProductFiles.delete);

    app.use('/api/semiProductFiles', router);
};