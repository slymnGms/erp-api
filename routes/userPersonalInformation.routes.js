const userPersonalInformations = require("../controllers/userPersonalInformation.controller.js");

var router = require("express").Router();

// Create a new UserPersonalInformation
router.post("/", userPersonalInformations.create);

// Retrieve all UserPersonalInformations
router.get("/", userPersonalInformations.findAll);

// Retrieve a single UserPersonalInformation with id
router.get("/:id", userPersonalInformations.findOne);

// Update a UserPersonalInformation with id
router.put("/:id", userPersonalInformations.update);

// Delete a UserPersonalInformation with id
router.delete("/:id", userPersonalInformations.delete);

module.exports = router
