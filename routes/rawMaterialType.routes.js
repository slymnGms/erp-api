module.exports = app => {
    const rawMaterialTypes = require("../controllers/rawMaterialType.controller.js");

    var router = require("express").Router();

    // Create a new RawMaterialType
    router.post("/", rawMaterialTypes.create);

    // Retrieve all RawMaterialTypes
    router.get("/", rawMaterialTypes.findAll);

    // Retrieve a single RawMaterialType with id
    router.get("/:id", rawMaterialTypes.findOne);

    // Update a RawMaterialType with id
    router.put("/:id", rawMaterialTypes.update);

    // Delete a RawMaterialType with id
    router.delete("/:id", rawMaterialTypes.delete);

    app.use('/api/rawMaterialTypes', router);
};