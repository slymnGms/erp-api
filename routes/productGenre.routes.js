const productGenres = require("../controllers/productGenre.controller.js");

var router = require("express").Router();

// Create a new ProductGenre
router.post("/", productGenres.create);

// Retrieve all ProductGenres
router.get("/", productGenres.findAll);

// Retrieve a single ProductGenre with id
router.get("/:id", productGenres.findOne);

// Update a ProductGenre with id
router.put("/:id", productGenres.update);

// Delete a ProductGenre with id
router.delete("/:id", productGenres.delete);

module.exports = router
