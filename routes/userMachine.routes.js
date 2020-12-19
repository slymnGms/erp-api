module.exports = app => {
    const userMachines = require("../controllers/userMachine.controller.js");

    var router = require("express").Router();

    // Create a new UserMachine
    router.post("/", userMachines.create);

    // Retrieve all UserMachines
    router.get("/", userMachines.findAll);

    // Retrieve a single UserMachine with id
    router.get("/:id", userMachines.findOne);

    // Update a UserMachine with id
    router.put("/:id", userMachines.update);

    // Delete a UserMachine with id
    router.delete("/:id", userMachines.delete);

    app.use('/api/userMachines', router);
};