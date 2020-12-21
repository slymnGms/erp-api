const db = require("../models");
const ProductType = db.productTypes;
const Product = db.products;
const Op = db.Sequelize.Op;

// Create and Save a new ProductType
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "name can not be empty!"
    });
    return;
  }
  if (!req.body.createdBy) {
    res.status(400).send({
      message: "createdBy can not be empty!"
    });
    return;
  }

  // Create a ProductType
  const productType = {
    name: req.body.name,
    createdBy: req.body.createdBy,
    updatedBy: null
  };

  // Save ProductType in the database
  ProductType.create(productType)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the ProductType."
      });
    });
};

// Retrieve all ProductTypes from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

  ProductType.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving productTypes."
      });
    });

};

// Find a single ProductType with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  ProductType.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving ProductType with id=" + id
      });
    });
};

// Update a ProductType by the id in the request
exports.update = (req, res) => {
  if (!req.body.updatedBy) {
    res.status(400).send({
      message: "updatedBy can not be empty!"
    });
    return;
  }
  const id = req.params.id;

  ProductType.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "ProductType was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update ProductType with id=${id}. Maybe ProductType was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating ProductType with id=" + id
      });
    });
};

// Delete a ProductType with the specified id in the request
exports.delete = (req, res) => {
  if (!req.body.updatedBy) {
    res.status(400).send({
      message: "updatedBy can not be empty!"
    });
    return;
  }
  const id = req.params.id;

  ProductType.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "ProductType was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete ProductType with id=${id}. Maybe ProductType was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete ProductType with id=" + id
      });
    });
};
// Extras
exports.getProductTypeProducts = (req, res) => {
  const id = req.params.id;
  var condition =  { productTypeId: id  };
  Product.findAll({ where: condition })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving ProductType Products with id=" + id
      });
    });
};