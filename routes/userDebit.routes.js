module.exports = app => {
    const userDebits = require("../controllers/userDebit.controller.js");

    var router = require("express").Router();

    // Create a new UserDebit
    router.post("/", userDebits.create);

    // Retrieve all UserDebits
    router.get("/", userDebits.findAll);

    // Retrieve a single UserDebit with id
    router.get("/:id", userDebits.findOne);

    // Update a UserDebit with id
    router.put("/:id", userDebits.update);

    // Delete a UserDebit with id
    router.delete("/:id", userDebits.delete);

    app.use('/api/userDebits', router);
};