const db = require("../models");
const SemiProductType = db.semiProductTypes;
const SemiProduct = db.semiProducts;
const Op = db.Sequelize.Op;

// Create and Save a new SemiProductType
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

  // Create a SemiProductType
  const semiProductType = {
    name: req.body.name,
    createdBy: req.body.createdBy,
    updatedBy: null
  };

  // Save SemiProductType in the database
  SemiProductType.create(semiProductType)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the SemiProductType."
      });
    });
};

// Retrieve all SemiProductTypes from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

  SemiProductType.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving semiProductTypes."
      });
    });

};

// Find a single SemiProductType with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  SemiProductType.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving SemiProductType with id=" + id
      });
    });
};

// Update a SemiProductType by the id in the request
exports.update = (req, res) => {
  if (!req.body.updatedBy) {
    res.status(400).send({
      message: "updatedBy can not be empty!"
    });
    return;
  }
  const id = req.params.id;

  SemiProductType.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "SemiProductType was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update SemiProductType with id=${id}. Maybe SemiProductType was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating SemiProductType with id=" + id
      });
    });
};

// Delete a SemiProductType with the specified id in the request
exports.delete = (req, res) => {
  if (!req.body.updatedBy) {
    res.status(400).send({
      message: "updatedBy can not be empty!"
    });
    return;
  }
  const id = req.params.id;

  SemiProductType.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "SemiProductType was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete SemiProductType with id=${id}. Maybe SemiProductType was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete SemiProductType with id=" + id
      });
    });
};
// Extras
exports.getSemiProductTypeSemiProducts = (req, res) => {
  const id = req.params.id;
  var condition =  { semiProductTypeId: id  };
  SemiProduct.findAll({ where: condition })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving SemiProductType SemiProducts with id=" + id
      });
    });
};