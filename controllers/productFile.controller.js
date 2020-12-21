const db = require("../models");
const ProductFile = db.productFiles;
const Op = db.Sequelize.Op;

// Create and Save a new ProductFile
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
  if (!req.body.productId) {
    res.status(400).send({
      message: "productId can not be empty!"
    });
    return;
  }

  // Create a ProductFile
  const productFile = {
    name: req.body.name,
    createdBy: req.body.createdBy,
    productId: req.body.productId,
    updatedBy: null
  };

  // Save ProductFile in the database
  ProductFile.create(productFile)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the ProductFile."
      });
    });
};

// Retrieve all ProductFiles from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

  ProductFile.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving productFiles."
      });
    });

};

// Find a single ProductFile with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  ProductFile.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving ProductFile with id=" + id
      });
    });
};

// Update a ProductFile by the id in the request
exports.update = (req, res) => {
  if (!req.body.updatedBy) {
    res.status(400).send({
      message: "updatedBy can not be empty!"
    });
    return;
  }
  const id = req.params.id;

  ProductFile.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "ProductFile was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update ProductFile with id=${id}. Maybe ProductFile was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating ProductFile with id=" + id
      });
    });
};

// Delete a ProductFile with the specified id in the request
exports.delete = (req, res) => {
  if (!req.body.updatedBy) {
    res.status(400).send({
      message: "updatedBy can not be empty!"
    });
    return;
  }
  const id = req.params.id;

  ProductFile.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "ProductFile was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete ProductFile with id=${id}. Maybe ProductFile was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete ProductFile with id=" + id
      });
    });
};