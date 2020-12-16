module.exports = app => {
    const userCuttintips = require("../controllers/userCuttintip.controller.js");

    var router = require("express").Router();

    // Create a new UserCuttintip
    router.post("/", userCuttintips.create);

    // Retrieve all UserCuttintips
    router.get("/", userCuttintips.findAll);

    // Retrieve a single UserCuttintip with id
    router.get("/:id", userCuttintips.findOne);

    // Update a UserCuttintip with id
    router.put("/:id", userCuttintips.update);

    // Delete a UserCuttintip with id
    router.delete("/:id", userCuttintips.delete);

    app.use('/api/userCuttintips', router);
};