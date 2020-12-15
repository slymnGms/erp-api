const personalEducationLevels = require("../controllers/personalEducationLevel.controller.js");

var router = require("express").Router();

// Create a new PersonalEducationLevel
router.post("/", personalEducationLevels.create);

// Retrieve all PersonalEducationLevels
router.get("/", personalEducationLevels.findAll);

// Retrieve a single PersonalEducationLevel with id
router.get("/:id", personalEducationLevels.findOne);

// Update a PersonalEducationLevel with id
router.put("/:id", personalEducationLevels.update);

// Delete a PersonalEducationLevel with id
router.delete("/:id", personalEducationLevels.delete);

module.exports = router
