module.exports = app => {
    const products = require("../controllers/product.controller.js");

    var router = require("express").Router();

    // Create a new Product
    router.post("/", products.create);

    // Retrieve all Products
    router.get("/", products.findAll);

    // Retrieve a single Product with id
    router.get("/:id", products.findOne);

    // Update a Product with id
    router.put("/:id", products.update);

    // Delete a Product with id
    router.delete("/:id", products.delete);

    // Retrieve ProductDesignFiless of a Product
    router.get("/:id/productDesignFiles", products.getProductProductDesignFiles);

    // Retrieve ProductFiles of a Product
    router.get("/:id/productFiles", products.getProductProductFiles);

    // Retrieve SemiProducts of a Product
    router.get("/:id/semiProducts", products.getProductSemiProducts);

    app.use('/api/products', router);
};