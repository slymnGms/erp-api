module.exports = app => {
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

    // Retrieve Products of a ProductGenre
    router.get("/:id/products", productGenres.getProductGenreProducts);

    app.use('/api/productGenres', router);
};