module.exports = app => {
    const customers = require("../controllers/customer.controller.js");

    var router = require("express").Router();

    router.post("/", customers.create);

    // Retrieve all Customers
    router.get("/", customers.findAll);

    // Retrieve a single Customer with id
    router.get("/:id", customers.findOne);

    // Update a Customer with id
    router.put("/:id", customers.update);

    // Delete a Customer with id
    router.delete("/:id", customers.delete);

    // Retrieve Projects of a Customer
    router.get("/:id/projects", customers.getCustomerProjects);

    app.use('/api/customers', router);
};
