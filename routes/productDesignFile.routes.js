module.exports = app => {
    const productDesignFiles = require("../controllers/productDesignFile.controller.js");

    var router = require("express").Router();

    // Create a new ProductDesignFileDesignFile
    router.post("/", productDesignFiles.create);

    // Retrieve all ProductDesignFiles
    router.get("/", productDesignFiles.findAll);

    // Retrieve a single ProductDesignFile with id
    router.get("/:id", productDesignFiles.findOne);

    // Update a ProductDesignFile with id
    router.put("/:id", productDesignFiles.update);

    // Delete a ProductDesignFile with id
    router.delete("/:id", productDesignFiles.delete);

    app.use('/api/productDesignFiles', router);
};