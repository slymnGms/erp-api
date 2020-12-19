module.exports = app => {
    const projectFiles = require("../controllers/projectFile.controller.js");

    var router = require("express").Router();

    // Create a new Customer
    router.post("/", projectFiles.create);

    // Retrieve all Customers
    router.get("/", projectFiles.findAll);

    // Retrieve a single Customer with id
    router.get("/:id", projectFiles.findOne);

    // Update a Customer with id
    router.put("/:id", projectFiles.update);

    // Delete a Customer with id
    router.delete("/:id", projectFiles.delete);

    app.use('/api/projectFiles', router);
};