module.exports = app => {
    const userCuttinTips = require("../controllers/userCuttintip.controller.js");

    var router = require("express").Router();

    // Create a new UserCuttintip
    router.post("/", userCuttinTips.create);

    // Retrieve all UserCuttintips
    router.get("/", userCuttinTips.findAll);

    // Retrieve a single UserCuttintip with id
    router.get("/:id", userCuttinTips.findOne);

    // Update a UserCuttintip with id
    router.put("/:id", userCuttinTips.update);

    // Delete a UserCuttintip with id
    router.delete("/:id", userCuttinTips.delete);

    app.use('/api/userCuttintips', router);
};