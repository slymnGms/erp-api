const db = require("../models");
const ProductDesignFile = db.productDesignFiles;
const Op = db.Sequelize.Op;

// Create and Save a new ProductDesignFile
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

  // Create a ProductDesignFile
  const productDesignFile = {
    name: req.body.name,
    createdBy: req.body.createdBy,
    productId: req.body.productId,
    updatedBy: null
  };

  // Save ProductDesignFile in the database
  ProductDesignFile.create(productDesignFile)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the ProductDesignFile."
      });
    });
};

// Retrieve all ProductDesignFiles from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

  ProductDesignFile.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving productDesignFiles."
      });
    });

};

// Find a single ProductDesignFile with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  ProductDesignFile.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving ProductDesignFile with id=" + id
      });
    });
};

// Update a ProductDesignFile by the id in the request
exports.update = (req, res) => {
  if (!req.body.updatedBy) {
    res.status(400).send({
      message: "updatedBy can not be empty!"
    });
    return;
  }
  const id = req.params.id;

  ProductDesignFile.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "ProductDesignFile was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update ProductDesignFile with id=${id}. Maybe ProductDesignFile was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating ProductDesignFile with id=" + id
      });
    });
};

// Delete a ProductDesignFile with the specified id in the request
exports.delete = (req, res) => {
  if (!req.body.updatedBy) {
    res.status(400).send({
      message: "updatedBy can not be empty!"
    });
    return;
  }
  const id = req.params.id;

  ProductDesignFile.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "ProductDesignFile was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete ProductDesignFile with id=${id}. Maybe ProductDesignFile was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete ProductDesignFile with id=" + id
      });
    });
};